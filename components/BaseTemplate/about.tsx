"use client";

import Image from "next/image";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserInfoData } from "@/config/user-data/userInfo";
import { UserSocialsData } from "@/config/user-data/socials";
import { BaseTemplate } from "@/config/app-data/templates/base";
import { SectionHeader } from "./section-header";

export const AboutSection = () => {
  const { dictionary: t, t: tr } = useI18n();

  const heroImage =
    BaseTemplate.heroImage.type === "url"
      ? BaseTemplate.heroImage.url
      : `/images/${BaseTemplate.heroImage.url}`;

  return (
    <section id="about" className="bg-neutral-50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <SectionHeader
          eyebrow={t.nav.about}
          title={t.hero.title}
          lede={tr(UserInfoData.miniBio)}
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="relative overflow-hidden rounded-2xl bg-neutral-200 aspect-[4/5] w-full max-w-md">
            <Image
              src={heroImage}
              alt={UserInfoData.fullName}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Socials + facts */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4">
                {t.contact.socialsTitle}
              </p>
              <ul className="flex flex-wrap gap-3">
                {Object.entries(UserSocialsData).map(([key, { icon: Icon, url }]) => {
                  const href = url.includes("@") ? `mailto:${url}` : url;
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        target={url.includes("@") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700 hover:border-neutral-900 hover:text-neutral-950 transition-colors"
                      >
                        <Icon size={15} />
                        {key}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl bg-neutral-900 p-6 sm:p-8 text-white">
              <p className="font-serif text-xl sm:text-2xl leading-snug">
                {t.status.openToWork}
              </p>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
