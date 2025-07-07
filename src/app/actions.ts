"use server";

import * as z from 'zod';
import { Resend } from 'resend';

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

  if (!resend) {
    console.error('RESEND_API_KEY is not configured. Email will not be sent.');
    // In a real app, you'd want to handle this more gracefully.
    // For now, we'll return a success message to the user but log the error.
    return { success: true, message: "Form submitted, but email sending is currently disabled." };
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // This uses Resend's test domain. Emails can only be sent to your verified Resend account email. To use your own domain, you must purchase one and verify it with Resend.
      to: 'dydfreelancer@gmail.com',
      subject: `New contact form submission from ${name}`,
      reply_to: email,
      html: `
        <p>You have a new message from your portfolio website:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, message: 'There was an error sending your message.' };
  }
}
