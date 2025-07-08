import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Facebook, TrendingUp, GitBranch, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const services = [
  {
    icon: <Facebook className="h-10 w-10 text-primary" />,
    title: 'Facebook Pixel & Conversion API',
    description: 'Pixel setup via GTM/manual, Event deduplication, and full tracking for AddToCart, Purchase, and Lead events.',
    details: [
      'Pixel installation via GTM',
      'Conversion API with deduplication',
      'Custom event tracking (Purchase, Lead)',
      'EMQ score improvement',
      'Real-time event testing & validation',
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
      'GA4 setup (new or migration)',
      'Enhanced eCommerce event mapping',
      'Google Ads conversion tracking',
      'DebugView for real-time testing',
      'Shopify & WooCommerce DataLayer debug',
    ],
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'GA4 DebugView Screenshot',
    imageHint: 'ga4 analytics',
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    title: 'Multi-Platform + Funnel Automation',
    description: 'Tracking setup for Pinterest, Reddit, & LinkedIn. Funnel automation using StepDot.io and CRM webhook integration.',
    details: [
      'Pinterest, Reddit & LinkedIn Tag setup',
      'StepDot.io funnel building & testing',
      'Webhook & CRM routing automation',
      'Cross-platform goal tracking',
      'Full funnel conversion analysis',
    ],
    image: 'https://placehold.co/600x400.png',
    imageAlt: 'Multi-platform GTM Screenshot',
    imageHint: 'gtm workflow',
  },
];

const tools = [
  { name: 'Google Tag Manager', logo: 'https://i.ibb.co/3ykd1jC/gtm-logo.png', hint: 'gtm logo' },
  { name: 'Meta (Facebook)', logo: 'https://i.ibb.co/1fSS8Sg/meta.png', hint: 'meta logo' },
  { name: 'Google Analytics 4', logo: 'https://i.ibb.co/9v9Z3sW/ga4.png', hint: 'ga4 logo' },
  { name: 'Google Ads', logo: 'https://i.ibb.co/mB4y3b9/google-ads.png', hint: 'google ads logo' },
  { name: 'Stepdot.io', logo: 'https://i.ibb.co/L52xFN5/stepdot-io.png', hint: 'automation logo' },
  { name: 'WordPress', logo: 'https://i.ibb.co/zntgY5Y/wordpress.png', hint: 'wordpress logo' },
  { name: 'Shopify', logo: 'https://i.ibb.co/qY7hLzG/shopify.png', hint: 'shopify logo' },
  { name: 'Wix', logo: 'https://i.ibb.co/9G7ZpbC/wix.png', hint: 'wix logo' },
  { name: 'ClickFunnels', logo: 'https://i.ibb.co/GvxYv09/clickfunnels.png', hint: 'clickfunnels logo' },
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
        <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 mt-12">
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
                     <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
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
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {tools.map(tool => (
              <div key={tool.name} title={tool.name}>
                 <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={120}
                    height={50}
                    className="object-contain brightness-125 transition-transform duration-300 hover:scale-110"
                    data-ai-hint={tool.hint}
                  />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
