import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="~/aditi/projects"
          title="AI & Software Projects"
          description="Selected builds spanning agentic AI systems, RAG pipelines, and the full-stack infrastructure that ships them."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
