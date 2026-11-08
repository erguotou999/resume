"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserProjectsData } from "@/config/user-data/projects";
import type { Project } from "@/config/user-data/projects";
import { BaseTemplate } from "@/config/app-data/templates/base";
import { cn } from "@/lib/utils";

/**
 * "In focus" — a Louvre-style featured strip: one large lead card with the
 * remaining featured projects listed beside it.
 */
export function FeaturedSection() {
  const { dictionary: t, t: tr } = useI18n();

  if (!BaseTemplate.features.FEATURED_SECTION) return null;

  const featured = UserProjectsData.filter((project) => project.featured);
  if (featured.length === 0) return null;

  const [lead, ...rest] = featured;

  return (
    <section id="featured" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <header className="flex flex-wrap items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-3">
              {t.featured.title}
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em] text-neutral-900 max-w-[20ch]">
              {t.featured.subtitle}
            </h2>
          </div>
          <Link
            href="#projects"
            className="group inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            {t.featured.viewAll}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </header>

        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12">
          {/* Lead card */}
          <Link
            href={lead.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl bg-neutral-100"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <Image
                src={lead.previewImage}
                alt={lead.imageAlt ?? lead.title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {lead.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/30 px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-white/90"
                  >
                    {tag}
                  </span>
                ))}
                {lead.year && (
                  <span className="text-[10px] tracking-[0.14em] uppercase text-white/60">
                    {lead.year}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-white leading-tight">
                {lead.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{tr(lead.role)}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-white">
                {t.featured.openLabel}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>

          {/* Secondary list */}
          <div className="flex flex-col divide-y divide-neutral-200 border-t border-neutral-200">
            {rest.map((project) => (
              <FeaturedRow key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedRow({ project }: { project: Project }) {
  const { t: tr } = useI18n();

  return (
    <Link
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 sm:gap-6 py-5"
    >
      <div className="relative h-16 w-24 sm:h-20 sm:w-32 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={project.previewImage}
          alt={project.imageAlt ?? project.title}
          fill
          sizes="128px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full border border-neutral-300 px-2 py-0.5 text-[9px] tracking-[0.14em] uppercase text-neutral-500"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-lg sm:text-xl text-neutral-900 group-hover:text-neutral-500 transition-colors truncate">
          {project.title}
        </h3>
        <p className="text-xs text-neutral-500 truncate">{tr(project.role)}</p>
      </div>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-neutral-400 group-hover:text-neutral-900 transition-colors"
      />
    </Link>
  );
}
