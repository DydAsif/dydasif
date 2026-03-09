
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects-data';

export function ProjectPresentation() {
  return (
    <section id="presentation" className="w-full py-20" style={{ background: '#0a0f1e' }}>
      <div className="container mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tighter gradient-text">Projects & Results</h2>
            <p className="max-w-[900px] text-muted-foreground text-base">
              Real-world problems, effective solutions, and measurable outcomes.
            </p>
          </div>
        </div>
        
        <div className="space-y-12">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
