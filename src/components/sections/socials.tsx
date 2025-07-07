import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

const FiverrIcon = () => (
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
    <path d="M15 7h-5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3a2 2 0 0 1 0 4h-5" />
    <line x1="8" x2="12" y1="7" y2="7" />
  </svg>
);

const UpworkIcon = () => (
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
    <path d="M15.1 12.2c.4-1.2.5-2.4.3-3.6-.3-1.8-1.5-3.3-3.2-4.1-.2-.1-.4-.2-.6-.3.3-.2.5-.4.7-.7.4-.4.8-.9.9-1.4.2-1-1.3-1.4-1.3-1.4-1.3-.4-2.2.8-2.2.8-.7.8-1 1.9-.8 2.9.2 1.3 1.3 2.3 2.5 2.8-.2.2-.4.4-.6.6-1.5 1.2-2.5 3-2.9 4.9-.3 1.2-.2 2.4.1 3.6.3 1.4 1 2.8 2 3.9" />
    <path d="M18.1 9.9c.3.9.4 1.8.2 2.7-.3 1.6-1.2 3-2.6 3.9" />
  </svg>
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.425 4.185 4.352-1.141z" />
  </svg>
);

const freelancePlatforms = [
  {
    label: 'Fiverr',
    href: 'https://www.fiverr.com/a_r_asif',
    icon: <FiverrIcon />,
    style: "bg-[#1DBF73] hover:bg-[#1DBF73]/90 text-white hover:shadow-lg hover:shadow-[#1DBF73]/40",
  },
  {
    label: 'Upwork',
    href: '#', // Placeholder link
    icon: <UpworkIcon />,
    style: "bg-[#14A800] hover:bg-[#14A800]/90 text-white hover:shadow-lg hover:shadow-[#14A800]/40",
  },
  {
    label: 'SEOClerk',
    href: '#', // Placeholder link
    icon: <SeoClerkIcon />,
    style: "bg-slate-800 hover:bg-slate-700 text-white hover:shadow-lg hover:shadow-slate-500/40",
  },
];

const socialMediaLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashfakur-rahman-asif-42231b369/',
    icon: <Linkedin className="h-6 w-6" />,
  },
  {
    label: 'Instagram',
    href: '#', // Placeholder link
    icon: <Instagram className="h-6 w-6" />,
  },
  {
    label: 'Facebook',
    href: 'https://fb.com/yourname',
    icon: <Facebook className="h-6 w-6" />,
  },
  {
    label: 'Twitter',
    href: '#', // Placeholder link
    icon: <Twitter className="h-6 w-6" />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/1234567890', // Replace with actual number
    icon: <WhatsAppIcon />,
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
              Ready to grow your business? Hire me on your favorite platform or get in touch on social media.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 mt-16">
          {/* Group 1: Hire Me */}
          <div className="w-full max-w-3xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary/90">Hire Me On Freelance Platforms</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {freelancePlatforms.map((platform) => (
                <Button key={platform.label} asChild className={`w-full sm:w-auto rounded-lg px-6 py-3 text-base font-semibold hover:scale-105 shadow-md transition-all duration-300 ${platform.style}`}>
                  <a href={platform.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    {platform.icon}
                    <span>{platform.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Group 2: Social Media */}
          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary/90">Let’s Connect on Social Media</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialMediaLinks.map((link) => (
                <Button asChild key={link.label} size="icon" variant="outline" className="rounded-full h-14 w-14 hover:bg-primary hover:text-primary-foreground border-primary text-primary transition-all duration-300 hover:scale-110">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
