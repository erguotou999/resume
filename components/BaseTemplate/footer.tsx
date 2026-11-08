"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserInfoData } from "@/config/user-data/userInfo";
import { UserSocialsData } from "@/config/user-data/socials";
import { AppSettingData } from "@/config/app-data/appSetting";

export function BaseFooter() {
  const { dictionary: t } = useI18n();
  const year = AppSettingData.copyrightDate;

  const exploreLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#featured", label: t.featured.title },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
  ];

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl">{UserInfoData.fullName}</p>
            <p className="mt-2 text-sm text-white/50 max-w-xs leading-relaxed">
              {UserInfoData.tagLine.en}
            </p>
            <ul className="mt-5 flex items-center gap-3">
              {Object.entries(UserSocialsData).map(([key, { icon: Icon, url }]) => {
                const href = url.includes("@") ? `mailto:${url}` : url;
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target={url.includes("@") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-white hover:text-white transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Explore */}
          <nav>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4">
              {t.footer.explore}
            </p>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t.nav.resume}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <nav>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4">
              {t.footer.connect}
            </p>
            <ul className="space-y-2.5">
              {Object.entries(UserSocialsData).map(([key, { url }]) => {
                const href = url.includes("@") ? `mailto:${url}` : url;
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target={url.includes("@") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {key}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Colophon */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-4">
              {t.footer.legal}
            </p>
            <p className="text-sm text-white/55 leading-relaxed">
              {t.footer.templateCredit}
            </p>
            <a
              href="#top"
              className="group mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              {t.footer.backToTop}
              <ArrowUp
                size={14}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {year} {UserInfoData.fullName}. All rights reserved.
          </p>
          <p>
            {t.footer.builtWith}{" "}
            <Link
              href="https://github.com/IDAN-DEVS/portify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline underline-offset-4 transition-colors"
            >
              Portify
            </Link>{" "}
            ·{" "}
            <Link
              href={AppSettingData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline underline-offset-4 transition-colors"
            >
              {t.footer.createYourOwn}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
