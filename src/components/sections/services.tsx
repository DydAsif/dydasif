"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Facebook, TrendingUp, GitBranch, ChevronDown, ZoomIn, ExternalLink } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { ImageLightbox } from '../image-lightbox';

const StapeLogo = () => (
    <svg
      role="img"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 transition-transform duration-300 ease-in-out group-hover:scale-125"
      aria-label="Stape.io logo"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#00ccff"
        transform="translate(100, 0) scale(-1, 1)"
        d="M60.8333 0H0V100H60.8333L29.1667 50L60.8333 0ZM73.2031 46.5208C73.2031 43.6458 72.5781 41.1198 71.3281 38.9427C70.0781 36.7656 68.3073 35.0781 65.9115 33.8802C63.5156 32.6823 60.7188 32.0833 57.5208 32.0833C53.75 32.0833 50.4688 33.0599 47.6771 35.0182C44.8854 36.9766 42.7188 39.7318 41.1719 43.2839L46.3542 45.5469C46.8099 44.4219 47.5026 43.4948 48.4323 42.7656C49.362 42.0365 50.4688 41.4583 51.75 41.0312C53.0312 40.6042 54.3385 40.3906 55.6719 40.3906C57.474 40.3906 59.0104 40.8568 60.2812 41.7891C61.5521 42.7214 62.1875 44.0859 62.1875 45.8828C62.1875 46.9922 61.9401 48.0078 61.4453 48.9323C60.9505 49.8568 60.2318 50.6901 59.2891 51.4323L53.0729 56.849C50.612 58.7448 48.9505 60.9661 48.086 63.513C47.2214 66.0599 46.7891 68.7995 46.7891 71.7318V71.8984C46.7891 74.7734 47.4141 77.3 48.6641 79.4766C49.9141 81.6536 51.6849 83.3411 54.0807 84.5391C56.4766 85.737 59.2734 86.3359 62.4714 86.3359C66.0156 86.3359 69.1719 85.4193 71.9323 83.5859C74.6927 81.7526 76.8177 79.1484 78.3073 75.7734L73.125 73.5104C72.6693 74.6354 71.9766 75.5625 71.0469 76.2917C70.1172 77.0208 69.0104 77.6016 67.7292 78.0286C66.4479 78.4557 65.1406 78.6693 63.8073 78.6693C62.0052 78.6693 60.4688 78.1927 59.1979 77.2604C57.9271 76.3281 57.2917 74.9635 57.2917 73.1667V73.0833C57.2917 71.974 57.5391 70.9583 58.0339 70.0339C58.5286 69.1094 59.2474 68.276 60.1875 67.5339L66.4036 62.1172C68.8646 60.2214 70.526 58.0026 71.3906 55.4557C72.2552 52.9089 72.6875 50.1693 72.6875 47.237V47.3125L73.2031 46.5208Z"
      />
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
    image: 'https://i.ibb.co/rKWj6Srs/GA4-Google-Ads-e-Commerce-Tracking-2.png',
    imageAlt: 'GA4 Google Ads e Commerce Tracking (2)',
    imageHint: 'facebook capi analytics',
    fullViewLink: "https://drive.google.com/file/d/1Mhmus0uXSgiGCtAgBPcDevaR_WAoIMLK/view?usp=drive_link",
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
    image: 'https://i.ibb.co/LTsbR2D/GA4-Google-Ads-e-Commerce-Tracking.png',
    imageAlt: 'GA4 Google Ads e Commerce Tracking',
    imageHint: 'ga4 analytics',
    fullViewLink: 'https://drive.google.com/file/d/1rWNvyxE5wM4qrTAOUi2YZqMN9VWDwIFx/view?usp=sharing',
  },
  {
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    title: 'Multi-Platform + Funnel Automation',
    description: 'Tracking setup for Pinterest, Reddit, & LinkedIn. Funnel automation using Stape.io and CRM webhook integration.',
    details: [
      'Pinterest, Reddit, & LinkedIn Tag setup.',
      'Stape.io funnel building & testing.',
      'Webhook & CRM routing automation.',
      'Cross-platform goal & event tracking.',
      'Full funnel conversion analysis.',
    ],
    image: 'https://i.ibb.co/2YSPwfFb/GA4-Google-Ads-e-Commerce-Tracking-3.png',
    imageAlt: 'GA4 Google Ads e Commerce Tracking (3)',
    imageHint: 'gtm workflow',
    fullViewLink: 'https://drive.google.com/file/d/1NAxkyPEBDGSsZCg2G2sCYxyqOogx8QkG/view?usp=sharing',
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  const openLightbox = (imageUrl: string, alt: string) => {
    setSelectedImage({ url: imageUrl, alt });
    setLightboxOpen(true);
  };

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 services-bg" data-aos="fade-up" data-aos-duration="1200">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
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
                className="bg-gradient-to-br from-card to-secondary border border-border shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:border-primary transition-all duration-300 rounded-lg flex flex-col hover:-translate-y-1.5"
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
                         <li key={i} className="pl-2">{detail}</li>
                       ))}
                     </ul>
                     <h4 className="font-semibold text-sm">Proof Screenshot:</h4>
                      <div
                        className="overflow-hidden relative aspect-video rounded-lg border-2 border-primary/20 shadow-lg group cursor-pointer"
                        onClick={() => openLightbox(service.image, service.imageAlt)}
                      >
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={service.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex items-center gap-2 text-white font-semibold">
                            <ZoomIn className="h-6 w-6" />
                            <span>View Image</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="outline" size="sm" className="mt-2 w-full">
                        <a href={service.fullViewLink} target="_blank" rel="noopener noreferrer">
                          View Full Resolution
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
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
      {selectedImage && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onOpenChange={setLightboxOpen}
          imageUrl={selectedImage.url}
          altText={selectedImage.alt}
        />
      )}
    </section>
  );
}
