import { Card } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'Shopify Purchase Tracking Fix',
    problem: 'Purchase events not tracking properly on Facebook Ads.',
    solution: 'Setup Meta Pixel + CAPI via GTM with deduplication.',
    result: '100% purchase tracking & EMQ 8.7',
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'code debug',
    alt: 'Shopify Facebook Pixel Debug'
  },
  {
    title: 'GA4 + Google Ads Tracking on WordPress',
    problem: 'Conversions not recorded in GA4 or Ads.',
    solution: 'GA4 + Ads tag added via GTM with proper event mapping.',
    result: '18 tracked conversions per week',
    imageUrl: 'https://placehold.co/800x400.png',
    imageHint: 'analytics dashboard',
    alt: 'GA4 DebugView Result'
  }
];

export function ProjectPresentation() {
  return (
    <section id="presentation" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
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
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Problem:</strong> {project.problem}</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Solution:</strong> {project.solution}</p>
                <p className="text-muted-foreground"><strong className="text-foreground">Result:</strong> {project.result}</p>
              </div>
              <div className="relative h-auto aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
