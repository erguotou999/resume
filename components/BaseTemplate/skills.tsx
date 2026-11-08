"use client";

import { useI18n } from "@/config/i18n/locale-provider";
import { UserSkillsData } from "@/config/user-data/skills";
import { BaseTemplate } from "@/config/app-data/templates/base";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
  const { dictionary: t, t: tr } = useI18n();

  if (!BaseTemplate.features.SKILLS_SECTION) return null;

  // Preserve order but group cards by their `group` label.
  const groups = UserSkillsData.reduce<Record<string, typeof UserSkillsData>>(
    (acc, skill) => {
      const key = skill.group ?? "";
      (acc[key] ||= []).push(skill);
      return acc;
    },
    {}
  );

  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <SectionHeader
          eyebrow={t.nav.skills}
          title={t.skills.title}
          lede={t.skills.subtitle}
        />

        <div className="space-y-12">
          {Object.entries(groups).map(([groupName, skills]) => (
            <div key={groupName || "default"}>
              {groupName && (
                <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-5 pb-3 border-b border-neutral-200">
                  {groupName}
                </h3>
              )}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {skills.map((skill) => (
                  <article key={skill.name}>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="font-serif text-lg sm:text-xl text-neutral-900">
                        {skill.name}
                      </h4>
                      <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] text-neutral-600 whitespace-nowrap">
                        {skill.projects_completed} {t.skills.projectsSuffix}
                      </span>
                    </div>

                    {skill.level && (
                      <div
                        className="flex gap-1 mb-3"
                        aria-label={`${skill.name} proficiency`}
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={cn(
                              "h-1 w-6 rounded-full transition-colors",
                              i < skill.level! ? "bg-neutral-900" : "bg-neutral-200"
                            )}
                          />
                        ))}
                      </div>
                    )}

                    <p className="text-sm leading-relaxed text-neutral-600">
                      {tr(skill.description)}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
