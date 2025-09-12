
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
    className="h-7 w-7"
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
    className="h-7 w-7"
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
    className="h-7 w-7"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" x2="16.65" y1="21" y2="16.65" />
    <path d="M7 11.5L8.5 13l3-3" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
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
    style: "bg-[#1DBF73] hover:bg-[#1DBF73]/90 text-white hover:shadow-2xl hover:shadow-[#1DBF73]/40",
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01263cc6967bba9856', 
    icon: <UpworkIcon />,
    style: "bg-[#14A800] hover:bg-[#14A800]/90 text-white hover:shadow-2xl hover:shadow-[#14A800]/40",
  },
  {
    label: 'SEOClerk',
    href: 'https://www.seoclerk.com/user/DYDasif',
    icon: <SeoClerkIcon />,
    style: "bg-blue-700 hover:bg-blue-600 text-white hover:shadow-2xl hover:shadow-blue-500/40",
  },
];

const socialMediaLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashfakur-rahman-asif-42231b369/',
    icon: <Linkedin className="h-8 w-8" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/it_is_me_asif?igsh=MWFiODhlcnZkY2JhNw==',
    icon: <Instagram className="h-8 w-8" />,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/12KAR3Dqt58/',
    icon: <Facebook className="h-8 w-8" />,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: <Twitter className="h-8 w-8" />,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801636335194',
    icon: <WhatsAppIcon />,
  },
];


export function Socials() {
  return (
    <section id="social-links" className="w-full py-12 md:py-24 lg:py-32 section-bg">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="pb-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00ccff]">
            Let’s Work Together
          </h2>
           <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ready to grow your business? Hire me on your favorite platform or get in touch on social media.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-2 lg:gap-12 mt-16">
          <div 
             className="relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2"
             data-aos="fade-right" data-aos-duration="800"
          >
            <h3 className="mb-6 text-2xl font-bold text-white text-center">Hire Me On Freelance Platforms</h3>
            <div className="flex flex-col items-center justify-center gap-4">
              {freelancePlatforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex w-full max-w-xs items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:scale-105 ${platform.style}`}
                >
                  {platform.icon}
                  <span>{platform.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div 
             className="relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm flex flex-col shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2"
             data-aos="fade-left" data-aos-duration="800"
          >
            <h3 className="mb-6 text-2xl font-bold text-white text-center shrink-0">Let's Connect on Social Media</h3>
            <div className="flex flex-wrap items-center justify-center gap-6 my-auto">
              {socialMediaLinks.map((link) => (
                 <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
