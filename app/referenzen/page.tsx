import { ProjectCard } from "@/src/components/site/project-card";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { projects } from "@/src/content/projects";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Referenzen",
  description:
    "Projektbeispiele von Galabau Kuhlmann aus Neustadt am Rübenberge und der Region Hannover.",
  path: "/referenzen",
});

export default function ReferencesPage() {
  return (
    <div className="py-24">
      <Container>
        <SectionHeader
          eyebrow="Projektübersicht"
          title="Referenzen aus der Region"
          description="Ausgewählte Beispiele für durchdachte und sauber umgesetzte Garten- und Landschaftsbauprojekte."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}

