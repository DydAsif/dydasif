
"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Loader2, Mail, Linkedin, Facebook } from 'lucide-react';
import { Card } from '../ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message must be less than 500 characters.' }),
});

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashfakur-rahman-asif-42231b369/',
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/12KAR3Dqt58/',
    icon: <Facebook className="h-5 w-5" />,
  },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);
    setIsSubmitting(false);
    
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.message || 'There was a problem with your request.',
      });
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 section-bg">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Get in Touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed mt-4">
                Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
        </div>

        <Card 
          className="p-8 lg:p-10 border-border/50 bg-card/80 shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-duration="800"
        >
             <div className="grid lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
                    <p className="text-muted-foreground">
                        Feel free to reach out via email or connect with me on social media. I'm always open to discussing new projects and opportunities.
                    </p>
                    <div className="space-y-4">
                        <a href="mailto:dydfreelancer@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-6 w-6 text-primary" />
                            <span>dydfreelancer@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-4">
                             {socialLinks.map((link) => (
                              <a 
                                key={link.href} 
                                href={link.href} 
                                aria-label={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
                              >
                                {link.icon}
                              </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:mt-0">
                     <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Name</FormLabel>
                                <FormControl>
                                <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Email</FormLabel>
                                <FormControl>
                                <Input placeholder="Your Email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Message</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Your Message" {...field} rows={5} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg" disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
                        </Button>
                        </form>
                    </Form>
                </div>

            </div>
        </Card>
      </div>
    </section>
  );
}
