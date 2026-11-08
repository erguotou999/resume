"use client";

import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserSocialsData } from "@/config/user-data/socials";
import { BaseTemplate } from "@/config/app-data/templates/base";
import { SectionHeader } from "./section-header";

export const ContactSection = () => {
  const { dictionary: t } = useI18n();

  if (!BaseTemplate.features.CONTACT_SECTION) return null;

  const email = UserSocialsData.email?.url ?? "";

  return (
    <section id="contact" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-16 sm:py-24">
        <SectionHeader
          eyebrow={t.nav.contact}
          title={t.contact.title}
          lede={t.contact.subtitle}
          className="[&_h2]:text-white [&_p]:text-white/55"
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          {/* Primary email CTA */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/45 mb-3">
              {t.contact.emailLabel}
            </p>
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 font-serif text-2xl sm:text-4xl text-white break-all hover:text-neutral-400 transition-colors"
            >
              <Mail size={28} className="shrink-0" />
              {email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors"
              >
                {t.contact.emailCta}
              </a>
              <Link
                href="/resume"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-7 text-sm font-medium text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                <Download size={16} />
                {t.contact.downloadResume}
              </Link>
            </div>
          </div>

          {/* Social list */}
          <div className="rounded-2xl border border-white/15 p-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/45 mb-5">
              {t.contact.socialsTitle}
            </p>
            <ul className="divide-y divide-white/10">
              {Object.entries(UserSocialsData)
                .filter(([key]) => key !== "email")
                .map(([key, { icon: Icon, url }]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-3.5 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} />
                        {key}
                      </span>
                      <span className="text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-white">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
