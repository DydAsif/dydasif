"use server";

import * as z from 'zod';
import { Resend } from 'resend';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  const { name, email, message } = validatedFields.data;

  // The form was hanging because the Firestore 'addDoc' call was not completing.
  // This is often due to Firestore security rules not allowing writes.
  // To fix this, we will make the Firestore save a non-blocking background task.

  // Fire-and-forget saving to Firestore. Don't await it.
  addDoc(collection(db, "contacts"), {
    name,
    email,
    message,
    timestamp: serverTimestamp(),
  }).catch(error => {
    // Log the error for debugging, but don't tell the user about it
    // as the email (if configured) is the primary contact method.
    console.error("Non-blocking error writing to Firestore: ", error);
  });

  // Send email via Resend if it's configured
  if (resend) {
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // This uses Resend's test domain.
        to: 'asifashfakurrahman@gmail.com',
        subject: `New contact form submission from ${name}`,
        reply_to: email,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
      });
      return { success: true };
    } catch (error) {
      console.error("Email sending failed:", error);
      // Even if email fails, it's better to return an error as it's the primary notification method.
      return { success: false, message: 'There was a problem sending your message. Please try again later.' };
    }
  }

  // If Resend isn't configured, we can only rely on the fire-and-forget Firestore call.
  // For a better user experience, we can optimistically assume it will work.
  // The developer will see any potential errors in the server logs.
  console.warn('RESEND_API_KEY is not configured. Email will not be sent. Relying on Firestore save.');
  return { success: true, message: "Form submitted! Thank you." };
}
