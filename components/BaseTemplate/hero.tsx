"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserInfoData } from "@/config/user-data/userInfo";
import { BaseTemplate } from "@/config/app-data/templates/base";

export const HeroSection = () => {
  const { dictionary: t, t: tr } = useI18n();

  const heroImage =
    BaseTemplate.heroImage.type === "url"
      ? BaseTemplate.heroImage.url
      : `/images/${BaseTemplate.heroImage.url}`;

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Full-bleed backdrop */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/85 via-neutral-950/70 to-neutral-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40" />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 min-h-[78vh] flex flex-col justify-end">
        {/* Eyebrow */}
        <p className="flex items-center gap-2 text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-white/70 mb-6">
          <span className="inline-block h-px w-8 bg-white/50" />
          {tr(UserInfoData.tagLine)}
        </p>

        {/* Oversized display headline */}
        <h1 className="font-serif text-white text-balance max-w-[18ch]">
          <span className="block text-lg sm:text-xl font-sans font-normal tracking-wide text-white/80 mb-3">
            {t.hero.greeting}
          </span>
          <span className="block text-[clamp(2.6rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
            {BaseTemplate.fullName}
          </span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-20 items-end">
          {/* Left: lede + actions */}
          <div>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl">
              {tr(UserInfoData.miniBio)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#projects"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-neutral-950 hover:bg-neutral-200 transition-colors"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/resume"
                className="inline-flex h-12 items-center rounded-full border border-white/40 px-7 text-sm font-medium text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right: status card */}
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/60 mb-4">
              {t.status.openToWork}
            </p>
            <p className="font-serif text-white text-xl sm:text-2xl leading-snug mb-5">
              {t.hero.title}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">{t.hero.subtitle}</p>

            <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5 text-white/75">
                <MapPin size={14} />
                {UserInfoData.location}
              </span>
              <a
                href="#about"
                className="group inline-flex items-center gap-1.5 text-white/75 hover:text-white transition-colors"
              >
                {t.hero.scrollHint}
                <ArrowDown
                  size={14}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
