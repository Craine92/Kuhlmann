import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Project } from "@/src/content/projects";
import { Card } from "@/src/components/ui/card";

type ProjectCardProps = {
  project: Project;
  showThumbnail?: boolean;
};

export function ProjectCard({ project, showThumbnail = true }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      {showThumbnail ? (
        <Image
          src={project.coverImage}
          alt={project.title}
          width={800}
          height={500}
          className="h-24 w-full border-b border-brand-olive/20 object-cover"
        />
      ) : null}
      <div className="flex h-full flex-col p-6">
        <h3 className="text-xl font-semibold text-brand-charcoal">{project.title}</h3>
        <p className="mt-3 text-brand-charcoal/80">{project.summary}</p>
        <p className="mt-4 inline-flex items-center gap-2 text-sm text-brand-charcoal/70">
          <MapPin className="h-4 w-4" />
          {project.location}
        </p>
        <Link
          href={`/referenzen/${project.slug}`}
          className="mt-5 text-sm font-semibold text-brand-olive hover:text-brand-oliveDark"
        >
          Projekt ansehen
        </Link>
      </div>
    </Card>
  );
}

