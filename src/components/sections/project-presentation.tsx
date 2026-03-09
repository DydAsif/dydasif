
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects-data';

export function ProjectPresentation() {
  return (
    <section id="presentation" className="w-full py-20 md:py-28 lg:py-36 section-bg">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-3">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">From Data to Decisions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I transform complex tracking problems into clear, actionable insights that drive growth. Explore my work.
            </p>
          </div>
        </div>
        
        <div className="timeline-container">
          {projects.map((project, index) => (
            <div key={project.title} className="timeline-item">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
