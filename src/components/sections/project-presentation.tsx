import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: 'Shopify Purchase Tracking Fix',
    tabs: [
      {
        trigger: 'Problem',
        value: 'problem',
        content: 'Purchase events not tracking properly on Facebook Ads.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'error screen analytics',
        alt: 'Screenshot of Facebook Ads showing tracking errors'
      },
      {
        trigger: 'Solution',
        value: 'solution',
        content: 'Setup Meta Pixel + CAPI via GTM with deduplication.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'code snippet gtm',
        alt: 'Screenshot of Google Tag Manager setup for Meta Pixel'
      },
      {
        trigger: 'Result',
        value: 'result',
        content: '100% purchase tracking & EMQ 8.7',
        imageUrl: 'https://i.ibb.co/6gBwYx5/image.png',
        imageHint: 'dashboard graph success',
        alt: 'Screenshot of Events Manager showing successful purchase tracking'
      }
    ]
  },
  {
    title: 'GA4 + Google Ads Tracking on WordPress',
     tabs: [
      {
        trigger: 'Problem',
        value: 'problem',
        content: 'Conversions not recorded in GA4 or Ads.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'zero conversions chart',
        alt: 'Screenshot of GA4 showing no conversion data'
      },
      {
        trigger: 'Solution',
        value: 'solution',
        content: 'GA4 + Ads tag added via GTM with proper event mapping.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'flowchart gtm wordpress',
        alt: 'Screenshot of GTM setup for GA4 and Google Ads'
      },
      {
        trigger: 'Result',
        value: 'result',
        content: '18 tracked conversions per week.',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'graph increasing conversions',
        alt: 'Screenshot of Google Ads showing tracked conversions'
      }
    ]
  }
];

export function ProjectPresentation() {
  return (
    <section id="presentation" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Projects & Results</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real-world problems, effective solutions, and measurable outcomes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border border-border shadow-lg hover:shadow-primary/20 hover:border-primary transition-all duration-300 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                <Tabs defaultValue={project.tabs[0].value} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
                    {project.tabs.map(tab => (
                      <TabsTrigger key={tab.value} value={tab.value}>{tab.trigger}</TabsTrigger>
                    ))}
                  </TabsList>
                  {project.tabs.map(tab => (
                    <TabsContent key={tab.value} value={tab.value} className="mt-4">
                      <p className="text-muted-foreground mb-4 font-semibold">{tab.content}</p>
                      <div className="relative aspect-video">
                        <Image
                          src={tab.imageUrl}
                          alt={tab.alt}
                          fill
                          className="object-cover rounded-md border border-border"
                          data-ai-hint={tab.imageHint}
                        />
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
