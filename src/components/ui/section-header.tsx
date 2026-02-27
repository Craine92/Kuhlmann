type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-olive">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-charcoal sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-brand-charcoal/80">{description}</p> : null}
    </div>
  );
}

