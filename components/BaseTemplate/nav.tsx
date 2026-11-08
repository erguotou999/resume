"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useI18n } from "@/config/i18n/locale-provider";
import { UserInfoData } from "@/config/user-data/userInfo";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export function BaseNav() {
  const { dictionary: t, locale, toggleLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: NavLink[] = [
    { href: "#about", label: t.nav.about },
    {
      href: "#projects",
      label: t.nav.projects,
      children: [
        { href: "#featured", label: t.featured.title },
        { href: "#projects", label: t.nav.projects },
        { href: "#experience", label: t.nav.experience },
      ],
    },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      {/* Thin utility bar — mirrors the museum "open today / free entry" strip */}
      <div className="bg-neutral-950 text-neutral-300 text-[11px] sm:text-xs tracking-wide">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 h-9 flex items-center justify-between gap-4">
          <span className="hidden sm:inline">{t.status.location}: {UserInfoData.location}</span>
          <span className="sm:hidden">{UserInfoData.location}</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {t.status.available}
          </span>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-neutral-200"
            : "bg-white border-transparent"
        )}
      >
        <nav className="mx-auto max-w-[1400px] px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
          {/* Wordmark */}
          <Link
            href="#top"
            className="font-serif text-xl sm:text-2xl tracking-tight shrink-0"
          >
            {UserInfoData.fullName}
            <span className="text-neutral-400">.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="text-sm tracking-wide text-neutral-700 hover:text-neutral-950 transition-colors inline-flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {link.children && (
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[220px] rounded-xl border border-neutral-200 bg-white p-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={t.nav.language}
              className="h-9 min-w-[3.25rem] rounded-full border border-neutral-300 px-3 text-xs font-medium tracking-[0.12em] uppercase text-neutral-700 hover:border-neutral-900 hover:text-neutral-950 transition-colors"
            >
              {locale === "en" ? "中" : "EN"}
            </button>

            <Link
              href="/resume"
              className="hidden sm:inline-flex h-9 items-center rounded-full bg-neutral-950 px-5 text-xs font-medium tracking-[0.12em] uppercase text-white hover:bg-neutral-800 transition-colors"
            >
              {t.nav.resume}
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.nav.menu}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 hover:border-neutral-900 transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[min(20rem,88vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-200">
            <span className="font-serif text-xl">{UserInfoData.fullName}</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.nav.close}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-serif text-neutral-900 hover:text-neutral-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-neutral-200 mt-4">
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center rounded-full bg-neutral-950 px-6 text-xs font-medium tracking-[0.12em] uppercase text-white"
              >
                {t.nav.resume}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
