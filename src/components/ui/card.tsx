import { cn } from "@/src/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-brand-olive/30 bg-brand-sandDark p-6 shadow-soft transition duration-300 hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </article>
  );
}

