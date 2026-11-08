import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared section chrome — an eyebrow label, an oversized serif heading and an
 * optional lede, consistent across every section of the template.
 */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  action,
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14",
        className
      )}
    >
      <div>
        {eyebrow && (
          <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-3">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em] text-neutral-900 max-w-[22ch] text-balance">
          {title}
        </h2>
        {lede && (
          <p className="mt-4 text-neutral-500 max-w-2xl leading-relaxed text-balance">
            {lede}
          </p>
        )}
      </div>
      {action}
    </header>
  );
}
