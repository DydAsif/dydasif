import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Briefcase } from 'lucide-react';

const socialLinks = [
  {
    label: 'View My Fiverr Profile',
    href: 'https://fiverr.com/yourname',
    icon: <Briefcase />,
  },
  {
    label: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/yourname',
    icon: <Linkedin />,
  },
  {
    label: 'Message Me on Facebook',
    href: 'https://fb.com/yourname',
    icon: <Facebook />,
  },
];

export function Socials() {
  return (
    <section id="social-links" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Let's Connect</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find me on your favorite platform. I'm always open to discussing new projects and opportunities.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {socialLinks.map((link, index) => (
            <Button asChild key={index} size="lg" variant="outline" className="w-full sm:w-auto">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
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
