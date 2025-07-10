import { ProjectCard } from '@/components/project-card';

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
        imageUrl: 'https://i.ibb.co/7xFM6xw2/Result-final.png',
        imageHint: 'dashboard graph success',
        alt: 'Screenshot of Events Manager showing successful purchase tracking and improved event match quality'
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
    <section id="presentation" className="w-full py-12 md:py-24 lg:py-32 section-bg">
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
             <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
