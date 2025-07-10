import { ProjectCard, Project } from '@/components/project-card';
import { Badge } from '@/components/ui/badge';

const projects: Project[] = [
  {
    title: 'Shopify Purchase Tracking Fix',
    description: "A client's Shopify store was failing to track purchase events accurately in Facebook Ads, leading to unreliable performance data. By implementing Meta Pixel and the Conversion API (CAPI) through Google Tag Manager with proper event deduplication, we achieved 100% purchase tracking accuracy and boosted the Event Match Quality (EMQ) score to 8.7/10.",
    tags: ["Shopify", "Facebook CAPI", "GTM", "Deduplication", "EMQ"],
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
        imageUrl: 'https://i.ibb.co/CVCm53v/Result-final.png',
        imageHint: 'dashboard graph success',
        alt: 'Screenshot of Events Manager showing successful purchase tracking and improved event match quality'
      }
    ]
  },
  {
    title: 'GA4 + Google Ads Tracking on WordPress',
    description: "A WordPress-based business had zero conversion tracking in Google Analytics 4 and Google Ads, making it impossible to measure campaign effectiveness. I implemented a robust tracking setup using Google Tag Manager to correctly map GA4 events and Google Ads conversions, resulting in an average of 18 accurately tracked conversions per week.",
    tags: ["WordPress", "GA4", "Google Ads", "GTM", "Conversion Tracking"],
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">Projects & Results</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real-world problems, effective solutions, and measurable outcomes.
            </p>
          </div>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                className={`lg:order-${index % 2 === 0 ? 1 : 2}`}
                data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
                data-aos-duration="800"
              >
                <ProjectCard project={project} />
              </div>
              <div 
                className={`space-y-6 lg:order-${index % 2 === 0 ? 2 : 1}`}
                data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}
                data-aos-duration="800"
                data-aos-delay="200"
              >
                 <h3 className="text-3xl font-bold text-primary">{project.title}</h3>
                 <p className="text-muted-foreground text-lg">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="font-semibold">{tag}</Badge>
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
