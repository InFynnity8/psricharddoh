import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}

export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="sec-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}

export default function Section({ id, eyebrow, title, alt, children }: SectionProps) {
  return (
    <section id={id} className={alt ? "alt" : undefined}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} />
        {children}
      </div>
    </section>
  );
}
