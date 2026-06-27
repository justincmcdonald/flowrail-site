import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-12 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl mb-8 lg:mb-10">
            {eyebrow && <p className="mono-label mb-4">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.05] tracking-tight text-foreground">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
