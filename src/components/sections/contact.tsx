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
import { Loader2, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Card } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500, { message: 'Message must be less than 500 characters.' }),
});

const FiverrIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M15 7h-5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3a2 2 0 0 1 0 4h-5" /><line x1="8" x2="12" y1="7" y2="7" /></svg>
);

const UpworkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M15.1 12.2c.4-1.2.5-2.4.3-3.6-.3-1.8-1.5-3.3-3.2-4.1-.2-.1-.4-.2-.6-.3.3-.2.5-.4.7-.7.4-.4.8-.9.9-1.4.2-1-1.3-1.4-1.3-1.4-1.3-.4-2.2.8-2.2.8-.7.8-1 1.9-.8 2.9.2 1.3 1.3 2.3 2.5 2.8-.2.2-.4.4-.6.6-1.5 1.2-2.5 3-2.9 4.9-.3 1.2-.2 2.4.1 3.6.3 1.4 1 2.8 2 3.9" /><path d="M18.1 9.9c.3.9.4 1.8.2 2.7-.3 1.6-1.2 3-2.6 3.9" /></svg>
);

const SeoClerkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
    <path d="M7 11.5L8.5 13l3-3" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.425 4.185 4.352-1.141z" /></svg>
);

const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);


const freelancePlatforms = [
  { label: 'Fiverr', href: 'https://www.fiverr.com/a_r_asif', icon: <FiverrIcon /> },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01263cc6967bba9856', icon: <UpworkIcon /> },
  { label: 'SEOClerk', href: 'https://www.seoclerk.com/user/DYDasif', icon: <SeoClerkIcon /> },
];

const socialMediaLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashfakur-rahman-asif-42231b369/', icon: <Linkedin className="h-8 w-8" /> },
  { label: 'Instagram', href: 'https://www.instagram.com/it_is_me_asif?igsh=MWFiODhlcnZkY2JhNw==', icon: <Instagram className="h-8 w-8" /> },
  { label: 'Facebook', href: 'https://www.facebook.com/share/12KAR3Dqt58/', icon: <Facebook className="h-8 w-8" /> },
  { label: 'Twitter', href: 'https://x.com/AsifAshfakur', icon: <XIcon /> },
  { label: 'WhatsApp', href: 'https://wa.me/8801636335194', icon: <WhatsAppIcon /> },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
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
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Let's Work Together</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                Ready to grow your business? Hire me on your favorite platform, send a message, or connect on social media.
            </p>
        </div>

        <Card 
          className="p-8 lg:p-10 border-border/50 bg-card/80 shadow-[0_0_15px_hsl(var(--primary)/0.1)]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
             <div className="grid lg:grid-cols-2 lg:gap-12">
                <div className="space-y-8 flex flex-col text-center lg:text-left">
                    <div>
                        <h3 className="text-2xl font-bold text-primary">Hire Me On</h3>
                        <div className="mt-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-start gap-4">
                            {freelancePlatforms.map((platform) => (
                                <a key={platform.label} href={platform.href} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs lg:max-w-none">
                                    <Button variant="outline" className="w-full h-12 text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                                        {platform.icon}
                                        <span>{platform.label}</span>
                                    </Button>
                                </a>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold text-primary">Connect With Me</h3>
                         <TooltipProvider>
                          <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asifashfakurrahman@gmail.com" target="_blank" rel="noopener noreferrer" className="flex h-16 w-16 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                                    <Mail className="h-8 w-8" />
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Send Email</p>
                                </TooltipContent>
                              </Tooltip>
                             {socialMediaLinks.map((link) => (
                               <Tooltip key={link.label}>
                                 <TooltipTrigger asChild>
                                   <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="flex h-16 w-16 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                                     {link.icon}
                                   </a>
                                 </TooltipTrigger>
                                 <TooltipContent>
                                   <p>{link.label}</p>
                                 </TooltipContent>
                               </Tooltip>
                            ))}
                          </div>
                        </TooltipProvider>
                    </div>
                </div>

                <div className="mt-12 lg:mt-0">
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center lg:text-left">Send a Message</h3>
                     <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Name</FormLabel>
                                <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Email</FormLabel>
                                <FormControl><Input placeholder="Your Email" type="email" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Message</FormLabel>
                                <FormControl><Textarea placeholder="Your Message" {...field} rows={5} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg h-12 text-lg" disabled={isSubmitting}>
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
