'use server';
/**
 * @fileOverview A simple chat flow that uses Gemini to respond to user messages.
 *
 * - continueConversation - A function that handles the chat conversation.
 * - ConversationInput - The input type for the continueConversation function.
 * - ConversationOutput - The return type for the continueConversation function.
 */
import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {Message, Role, part} from 'genkit';

const ConversationInputSchema = z.object({
  history: z.array(
    z.object({
      role: z.enum(['user', 'model']),
      content: z.array(z.object({text: z.string()})),
    })
  ),
  prompt: z.string(),
});
export type ConversationInput = z.infer<typeof ConversationInputSchema>;
export type ConversationOutput = string;

const systemPrompt = `You are a helpful and friendly assistant representing Ashfakur Rahman Asif on his portfolio website. Your name is ARA-Bot.

Your goal is to answer questions about Ashfakur's skills, experience, and services in a concise, professional, and friendly manner. Keep your responses short and to the point, ideally 2-3 sentences.

Here is some information about Ashfakur:
- **Expertise:** Digital Marketing & Web Analytics Tracking Expert.
- **Specialties:** Facebook Pixel & Conversion API (CAPI), Google Analytics (GA4), Google Ads tracking, Server-Side Tracking (SST).
- **Platforms:** Shopify, WordPress, Wix, and other major platforms.
- **Key Skills:** Event deduplication, improving Event Match Quality (EMQ), full eCommerce funnel tracking, multi-platform tag implementation (Pinterest, Reddit, LinkedIn), and lead funnel automation with tools like Stape.io.
- **Availability:** He is available for hire on freelance platforms like Fiverr and Upwork.

When asked, you can direct users to the contact section or provide links to his social profiles. Always be positive and encouraging. Do not invent information. If you don't know the answer, say "That's a great question. I'd recommend contacting Ashfakur directly through the contact form for more details."`;

export async function continueConversation(
  input: ConversationInput
): Promise<ConversationOutput> {
  const history: Message[] = input.history.map(m => ({
    role: m.role as Role,
    content: m.content.map(c => part(c.text)),
  }));

  const {output} = await ai.generate({
    prompt: input.prompt,
    history,
    config: {
      temperature: 0.7,
    },
    system: systemPrompt,
  });

  return output?.text ?? 'Sorry, I had a problem responding.';
}
