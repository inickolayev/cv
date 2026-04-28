import { Reveal } from "./Reveal";
import { HeroOrb } from "./HeroOrb";
import { Counter } from "./Counter";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/locale";
import { pdfHrefFor } from "@/lib/locale";

const ArrowRight = () => (
  <svg
    className="arrow"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowOut = () => (
  <svg
    className="arrow"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 11L11 5M6 5h5v5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface HeroProps {
  locale: Locale;
  copy: Content["hero"];
}

export function Hero({ locale, copy }: HeroProps) {
  const roleParts = copy.role.split("·").map((s) => s.trim());
  return (
    <header className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <HeroOrb />

      <div className="wrap">
        <Reveal className="hero-meta">
          <span>{copy.location}</span>
          <span className="dot" />
          <span>2026</span>
          <span className="dot" />
          <span>{copy.version}</span>
        </Reveal>

        <Reveal as="h1" className="hero-name" delay={1}>
          <span>{copy.name}.</span>
        </Reveal>

        <Reveal className="hero-role" delay={2}>
          {roleParts.map((part, i) => (
            <span key={part}>
              {i > 0 ? <span className="sep">·</span> : null}{" "}
              <span>{part}</span>
            </span>
          ))}
        </Reveal>

        <Reveal as="p" className="hero-tagline" delay={3}>
          {copy.tagline}
        </Reveal>

        <Reveal as="p" className="hero-support" delay={4}>
          {copy.intro}
        </Reveal>

        <Reveal className="hero-bottom" delay={5}>
          <div className="metric-pull">
            <div className="num">
              <Counter value="3" suffix="×" />
            </div>
            <div className="label">
              {locale === "ru"
                ? "ускорение поставки за счёт AI-инструментов и стандартизации — при кратно меньшей команде."
                : "faster delivery via AI tooling and disciplined process — with a meaningfully smaller team."}
            </div>
          </div>
          <div />
          <div className="cta-row">
            <a
              href={pdfHrefFor(locale)}
              download
              className="btn btn-primary"
            >
              {copy.primaryCta}
              <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {copy.secondaryCta}
              <ArrowOut />
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
