"use client";

import { useFormStatus } from "react-dom";

interface DemoEntryButtonProps {
  label: string;
  className?: string;
}

function SubmitLabel({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return <>{pending ? "…" : label}</>;
}

export function DemoEntryButton({ label, className }: DemoEntryButtonProps) {
  return (
    <button type="submit" className={className} data-testid="landing-demo-link">
      <SubmitLabel label={label} />
    </button>
  );
}
