"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserProjectsData } from "@/config/user-data/projects";
import type { Project } from "@/config/user-data/projects";
import { BaseTemplate } from "@/config/app-data/templates/base";
import { SectionHeader } from "./section-header";

export const ProjectsSection = () => {
  const { dictionary: t } = useI18n();

  if (!BaseTemplate.features.PROJECTS_SECTION) return null;

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <SectionHeader
          eyebrow={t.nav.projects}
          title={t.projects.title}
          lede={t.projects.subtitle}
        />

        {UserProjectsData.length === 0 ? (
          <p className="text-neutral-500">{t.projects.empty}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {UserProjectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t: tr, dictionary: t } = useI18n();

  return (
    <article className="group">
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-xl bg-neutral-100 aspect-[4/3] w-full">
          <Image
            src={project.previewImage}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/10 transition-colors duration-500" />
        </div>

        {/* Eyebrow chips */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-300 px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-neutral-500"
            >
              {tag}
            </span>
          ))}
          {project.year && (
            <span className="text-[10px] tracking-[0.14em] uppercase text-neutral-400">
              {project.year}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-serif text-xl sm:text-2xl text-neutral-900 leading-tight">
          <span className="decoration-wavy underline-offset-4 group-hover:underline">
            {project.title}
          </span>
        </h3>

        <p className="mt-1.5 text-sm text-neutral-500">{tr(project.role)}</p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-4">
          {tr(project.description)}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-900">
          {t.projects.viewProject}
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </Link>
    </article>
  );
}
