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

  // Save to Firestore
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error writing to Firestore: ", error);
    return { success: false, message: 'There was an error saving your message.' };
  }

  // Send email via Resend
  if (!resend) {
    console.warn('RESEND_API_KEY is not configured. Email will not be sent, but data was saved to Firestore.');
    return { success: true, message: "Form submitted! Email sending is disabled, but your message was received." };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This uses Resend's test domain. Emails can only be sent to your verified Resend account email. To use your own domain, you must purchase one and verify it with Resend.
      to: 'asifashfakurrahman@gmail.com',
      subject: `New contact form submission from ${name}`,
      reply_to: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    // Even if email fails, Firestore succeeded. Let's return a partial success message.
    return { success: true, message: 'Your message was saved, but there was an error sending the email notification.' };
  }
}
