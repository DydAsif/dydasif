import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'Project Alpha Presentation',
    description: 'A detailed walkthrough of the strategy, execution, and results of Project Alpha, showcasing the campaign\'s success.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'presentation chart',
  },
  {
    title: 'Project Beta Case Study',
    description: 'An in-depth look at the challenges and solutions implemented for Project Beta, highlighting key performance indicators.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'business meeting',
  },
];

export function ProjectPresentation() {
  return (
    <section id="presentation" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Project Presentations</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Dive deeper into some of my key projects and see the impact of data-driven strategies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-12 sm:max-w-4xl md:max-w-5xl lg:grid-cols-1 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mt-4">{project.description}</p>
                  </CardContent>
                </div>
                <div className="relative h-64 md:h-full min-h-[250px]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
