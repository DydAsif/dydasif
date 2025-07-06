import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Facebook, TrendingUp, GitBranch } from 'lucide-react';

const services = [
  {
    icon: <Facebook className="h-10 w-10 text-accent" />,
    title: 'Facebook Pixel & CAPI Setup',
    description: 'Manual or GTM Pixel installation, server-side API (CAPI) setup, event deduplication, and custom event tracking to improve match quality and campaign performance.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-accent" />,
    title: 'GA4 + Google Ads Tracking',
    description: 'Comprehensive GA4 setup or migration, enhanced eCommerce event tracking, and precise Google Ads conversion tracking for Shopify, WooCommerce, and WordPress.',
  },
  {
    icon: <GitBranch className="h-10 w-10 text-accent" />,
    title: 'Multi-Platform Tracking & Funnel Automation',
    description: 'Expert setup of Pinterest, Reddit, and LinkedIn pixels. Funnel automation using StepDot.io, CRM integrations, and advanced GTM logic with webhooks.',
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">My Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I provide specialized tracking and analytics solutions to maximize your marketing ROI.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                {service.icon}
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardDescription className="text-center text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
