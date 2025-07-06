"use server";

import * as z from 'zod';

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

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it and simulate a success response.
  console.log('Form submitted successfully:', validatedFields.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
