"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserWorkExperienceData } from "@/config/user-data/workExperience";
import type { IWorkExperience } from "@/config/user-data/workExperience";
import type { Localized } from "@/config/types";
import { BaseTemplate } from "@/config/app-data/templates/base";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

const engagementLabels: Record<string, Localized> = {
  "full-time": { en: "Full-time", zh: "全职" },
  contract: { en: "Contract", zh: "合同" },
  freelance: { en: "Freelance", zh: "自由职业" },
  "open-source": { en: "Open Source", zh: "开源" },
};

export const WorkExperienceSection = () => {
  const { dictionary: t, t: tr } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!BaseTemplate.features.WORK_EXPERIENCE_SECTION) return null;

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="experience" className="bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <SectionHeader
          eyebrow={t.nav.experience}
          title={t.experience.title}
          lede={t.experience.subtitle}
        />

        <ol className="relative border-l border-neutral-300 pl-6 sm:pl-10">
          {UserWorkExperienceData.map((experience, index) => (
            <ExperienceItem
              key={experience.company + experience.period}
              experience={experience}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              currentLabel={t.experience.current}
              responsibilitiesLabel={t.experience.responsibilities}
              translate={tr}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
  isOpen,
  onToggle,
  currentLabel,
  responsibilitiesLabel,
  translate,
}: {
  experience: IWorkExperience;
  isOpen: boolean;
  onToggle: () => void;
  currentLabel: string;
  responsibilitiesLabel: string;
  translate: (value: Localized) => string;
}) {
  const chip = experience.type ? engagementLabels[experience.type] : undefined;

  return (
    <li className="relative pb-10 last:pb-0">
      {/* Timeline dot */}
      <span
        className={cn(
          "absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-neutral-50 transition-colors",
          isOpen
            ? "border-neutral-900"
            : experience.current
            ? "border-neutral-400"
            : "border-neutral-300"
        )}
      >
        {experience.current && (
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
        )}
      </span>

      <div className="flex flex-wrap items-center gap-2 mb-2">
        {chip && (
          <span className="rounded-full border border-neutral-300 bg-white px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-neutral-500">
            {translate(chip)}
          </span>
        )}
        <span className="text-[11px] tracking-[0.14em] uppercase text-neutral-400">
          {experience.period}
        </span>
        {experience.current && (
          <span className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-[10px] tracking-[0.14em] uppercase text-white">
            {currentLabel}
          </span>
        )}
      </div>

      <h3 className="font-serif text-xl sm:text-2xl text-neutral-900">
        {experience.position}
      </h3>
      <p className="mt-1 text-sm text-neutral-500">
        {experience.company}
        {experience.companyUrl && (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
          >
            ↗
          </a>
        )}
      </p>

      {experience.shortDescription && (
        <p className="mt-3 text-neutral-600 max-w-2xl leading-relaxed">
          {translate(experience.shortDescription)}
        </p>
      )}

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
      >
        <Plus
          size={15}
          className={cn("transition-transform duration-300", isOpen && "rotate-45")}
        />
        {responsibilitiesLabel}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2.5 border-l border-neutral-200 pl-5">
              {experience.responsibilities.map((responsibility, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-neutral-600 before:content-['—'] before:mr-2 before:text-neutral-300"
                >
                  {translate(responsibility)}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}