import Link from "next/link";
import { cn } from "@/src/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const styles = {
  primary: "bg-brand-olive text-brand-sand hover:bg-brand-oliveDark shadow-soft",
  secondary: "bg-transparent text-brand-olive ring-1 ring-brand-olive/70 hover:bg-brand-sandSoft",
  ghost: "bg-transparent text-brand-charcoal ring-1 ring-brand-olive/70 hover:bg-brand-sandDark",
};

const base =
  "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-oliveDark/30";

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(base, styles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
}

