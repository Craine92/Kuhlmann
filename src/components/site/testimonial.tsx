import { Card } from "@/src/components/ui/card";

type TestimonialProps = {
  text: string;
  name: string;
};

export function Testimonial({ text, name }: TestimonialProps) {
  return (
    <Card>
      <p className="text-brand-charcoal/80">&quot;{text}&quot;</p>
      <p className="mt-4 text-sm font-semibold text-brand-charcoal">{name}</p>
    </Card>
  );
}

