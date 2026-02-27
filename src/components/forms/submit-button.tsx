"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  label: string;
};

export function SubmitButton({ label }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-11 items-center justify-center rounded-full bg-brand-olive px-6 text-sm font-semibold text-brand-sand transition-colors hover:bg-brand-oliveDark disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Wird gesendet..." : label}
    </button>
  );
}

