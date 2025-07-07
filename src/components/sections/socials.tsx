import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Briefcase } from 'lucide-react';

const socialLinks = [
  {
    label: 'Fiverr Profile',
    href: 'https://www.fiverr.com/a_r_asif',
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashfakur-rahman-asif-42231b369/',
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    label: 'Facebook',
    href: 'https://fb.com/yourname',
    icon: <Facebook className="h-6 w-6" />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/1234567890', // Replace with actual number
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.425 4.185 4.352-1.141z" />
      </svg>
    ),
  },
];

export function Socials() {
  return (
    <section id="social-links" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Connect With Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find me on your favorite platform. I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          {socialLinks.map((link, index) => (
            <Button asChild key={index} size="lg" variant="outline" className="w-full sm:w-auto hover:bg-primary hover:text-primary-foreground border-primary text-primary transition-all duration-300 hover:scale-105">
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                {link.icon}
                <span>{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
