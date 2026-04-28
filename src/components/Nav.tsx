"use client";

import { useEffect, useRef } from "react";
import { LangSwitch } from "./LangSwitch";
import { ThemeToggle } from "./ThemeToggle";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/locale";
import { pdfHrefFor } from "@/lib/locale";

interface NavProps {
  locale: Locale;
  copy: Content["nav"];
  status: string;
}

export function Nav({ locale, copy, status }: NavProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    const bar = progressRef.current;
    if (!nav || !bar) return;
    const onScroll = () => {
      const y = window.scrollY || 0;
      nav.classList.toggle("scrolled", y > 8);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? (y / h) * 100 : 0;
      bar.style.width = `${pct}%`;
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.matches("input,textarea,[contenteditable]") ||
          t.closest("[contenteditable]"))
      ) {
        return;
      }
      if (e.key === "g" || e.key === "G") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (e.key === "c" || e.key === "C") {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const initials = locale === "ru" ? "ИН" : "IN";

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div ref={progressRef} />
      </div>
      <nav className="nav" ref={navRef} aria-label="Primary">
        <a className="brand" href="#top" aria-label={copy.approach}>
          <span className="brand-mark">{initials}</span>
          <span>{locale === "ru" ? "Игорь Николаев" : "Igor Nikolaev"}</span>
        </a>
        <div className="nav-links" role="navigation">
          <a href="#approach">{copy.approach}</a>
          <a href="#impact">{copy.impact}</a>
          <a href="#experience">{copy.experience}</a>
          <a href="#systems">{copy.systems}</a>
        </div>
        <div className="nav-actions">
          <LangSwitch locale={locale} />
          <ThemeToggle label={copy.toggleTheme} />
          <a
            className="nav-cta"
            href={pdfHrefFor(locale)}
            download
            aria-label={copy.downloadCv}
          >
            <span className="status-dot" aria-hidden="true" />
            <span className="nav-cta-text">{copy.downloadCv}</span>
          </a>
        </div>
        <span className="sr-only">{status}</span>
      </nav>
    </>
  );
}
