import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Facebook, TrendingUp, GitBranch, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const StapeLogo = () => (
    <svg
      role="img"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 transition-transform duration-300 ease-in-out group-hover:scale-125"
      aria-label="Stape.io logo"
    >
      <path d="M12 8 C10.8954 8 10 8.89543 10 10 V 12 C10 12.7981 10.4281 13.5041 11.1141 13.8471 L18.8859 17.733 C19.5719 18.076 20 18.782 20 19.5801 V 20.4199 C20 21.218 19.5719 21.924 18.8859 22.267 L11.1141 26.1529 C10.4281 26.4959 10 27.2019 10 27.9999 V 30 C10 31.1046 10.8954 32 12 32 H 28 C 29.1046 32 30 31.1046 30 30 V 27.9999 C30 27.2019 29.5719 26.4959 28.8859 26.1529 L21.1141 22.267 C20.4281 21.924 20 21.218 20 20.4199 V 19.5801 C20 18.782 20.4281 18.076 21.1141 17.733 L28.8859 13.8471 C29.5719 13.5041 30 12.7981 30 12 V 10 C30 8.89543 29.1046 8 28 8 H 12 Z" fill="hsl(var(--primary))"/>
      <text
        x="32"
        y="25"
        fontFamily="Poppins, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        S
      </text>
    </svg>
);

const services = [
  {
    icon: <Facebook className="h-10 w-10 text-primary" />,
    title: 'Facebook Pixel & Conversion API',
    description: 'Pixel setup via GTM/manual, Event deduplication, and full tracking for AddToCart, Purchase, and Lead events.',
    details: [
      'Pixel installation via GTM for precision.',
      'Conversion API with full event deduplication.',
      'Custom event tracking (Purchase, Lead, etc).',
      'EMQ score improvement strategies.',
      'Real-time event testing & validation.',
    ],
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'Facebook Events Manager Screenshot',
    imageHint: 'facebook analytics',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'GA4 + Google Ads + eCommerce Tracking',
    description: 'GA4 property setup, enhanced ecommerce for Shopify/Woo, and GTM setup with DebugView for precise analysis.',
    details: [
      'GA4 setup (new property or migration).',
      'Enhanced eCommerce event mapping.',
      'Google Ads conversion link via GTM.',
      'DebugView for real-time testing.',
      'Shopify & WooCommerce DataLayer debug.',
    ],
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'GA4 DebugView Screenshot',
    imageHint: 'ga4 analytics',
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    title: 'Multi-Platform + Funnel Automation',
    description: 'Tracking setup for Pinterest, Reddit, & LinkedIn. Funnel automation using Stape.io and CRM webhook integration.',
    details: [
      'Pinterest, Reddit & LinkedIn Tag setup.',
      'Stape.io funnel building & testing.',
      'Webhook & CRM routing automation.',
      'Cross-platform goal & event tracking.',
      'Full funnel conversion analysis.',
    ],
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'Multi-platform GTM Screenshot',
    imageHint: 'gtm workflow',
  },
];

const tools: { name: string; logo: string | JSX.Element; displayName: string }[] = [
    { name: 'Google Tag Manager', logo: 'https://cdn.simpleicons.org/googletagmanager/00ccff', displayName: 'GTM' },
    { name: 'Meta (Facebook)', logo: 'https://cdn.simpleicons.org/meta/00ccff', displayName: 'Meta' },
    { name: 'Google Analytics 4', logo: 'https://cdn.simpleicons.org/googleanalytics/00ccff', displayName: 'GA4' },
    { name: 'Google Ads', logo: 'https://cdn.simpleicons.org/googleads/00ccff', displayName: 'Google Ads' },
    { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress/00ccff', displayName: 'WordPress' },
    { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/00ccff', displayName: 'Shopify' },
    { name: 'Wix', logo: 'https://cdn.simpleicons.org/wix/00ccff', displayName: 'Wix' },
    { name: 'Stape.io', logo: <StapeLogo />, displayName: 'Stape' },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32" data-aos="fade-up" data-aos-duration="1200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">My Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I provide specialized tracking and analytics solutions to maximize your marketing ROI.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Collapsible key={index} asChild>
              <Card
                className="bg-gradient-to-br from-card to-secondary border border-border shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:border-primary transition-all duration-300 rounded-lg flex flex-col hover:-translate-y-1.5"
                data-aos="fade-up"
                data-aos-delay={`${100 * (index + 1)}`}
              >
                <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                  {service.icon}
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-center text-base text-muted-foreground min-h-[6rem]">{service.description}</p>
                </CardContent>
                <CardFooter className="flex-col p-6 pt-0 mt-auto">
                   <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full group">
                      See Details <ChevronDown className="h-4 w-4 ml-2 group-data-[state=open]:rotate-180 transition-transform" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="w-full mt-4 space-y-4 text-left">
                     <ul className="list-disc list-outside pl-4 text-muted-foreground space-y-2 text-sm">
                       {service.details.map((detail, i) => (
                         <li key={i}>{detail}</li>
                       ))}
                     </ul>
                     <h4 className="font-semibold text-sm">Proof Screenshot:</h4>
                     <div className="relative aspect-video">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover rounded-md border border-border"
                          data-ai-hint={service.imageHint}
                        />
                      </div>
                  </CollapsibleContent>
                </CardFooter>
              </Card>
            </Collapsible>
          ))}
        </div>

        <div className="mt-24 text-center" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-2xl font-headline font-bold tracking-tighter sm:text-3xl text-primary">Tools I Use</h3>
          <div className="mt-8 flex flex-wrap justify-center items-start">
            {tools.map(tool => (
              <div key={tool.name} className="flex flex-col items-center m-4 w-[90px] group" title={tool.name}>
                 {typeof tool.logo === 'string' ? (
                    <img
                        src={tool.logo}
                        alt={tool.name}
                        className="object-contain h-10 w-10 mb-1.5 transition-transform duration-300 ease-in-out group-hover:scale-125"
                    />
                 ) : (
                    <div className="mb-1.5 h-10 w-10 flex items-center justify-center">{tool.logo}</div>
                 )}
                  <span className="text-sm text-center text-foreground">{tool.displayName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
