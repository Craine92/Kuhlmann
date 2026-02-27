import Link from "next/link";
import { ArrowRight, Fence, Flower2, Hammer, Paintbrush, Shovel, Sprout } from "lucide-react";
import type { Service } from "@/src/content/services";
import { Card } from "@/src/components/ui/card";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const icons = {
    "gartenplanung-beratung": Paintbrush,
    "pflaster-naturstein": Hammer,
    terrassenbau: Shovel,
    "zaun-sichtschutz": Fence,
    "rollrasen-bepflanzung": Flower2,
    gartenpflege: Sprout,
  } as const;
  const Icon = icons[service.slug];

  return (
    <Card className="flex h-full flex-col">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sand ring-1 ring-brand-olive/25">
        <Icon className="h-5 w-5 text-brand-olive" />
      </div>
      <h3 className="text-xl font-semibold text-brand-charcoal">{service.title}</h3>
      <p className="mt-3 text-brand-charcoal/80">{service.shortDescription}</p>
      <Link
        href={`/leistungen/${service.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-olive hover:text-brand-oliveDark"
      >
        Mehr erfahren
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}

