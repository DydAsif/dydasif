import { Linkedin, Facebook, Briefcase } from 'lucide-react';

const socialLinks = [
  {
    label: 'Fiverr',
    href: 'https://www.fiverr.com/a_r_asif',
    icon: <Briefcase className="h-5 w-5" />,
  },
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

export function Footer() {
  return (
    <footer className="w-full py-6 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Ashfakur Rahman Asif. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
