"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-brand-olive/20 bg-brand-sandDark">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-semibold text-brand-charcoal">{item.question}</span>
              <ChevronDown className={cn("h-4 w-4 text-brand-charcoal/70 transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen ? <p className="px-5 pb-5 text-brand-charcoal/80">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

