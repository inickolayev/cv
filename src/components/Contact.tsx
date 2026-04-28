import { Reveal } from "./Reveal";
import type { Content } from "@/content/types";
import type { Locale } from "@/lib/locale";
import { pdfHrefFor } from "@/lib/locale";

const ArrowOut = () => (
  <svg
    className="arrow"
    width="18"
    height="18"
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

interface ContactProps {
  locale: Locale;
  copy: Content["contact"];
}

export function Contact({ locale, copy }: ContactProps) {
  const headingHtml = (() => {
    const m = copy.heading.match(/^(\S+)\s+(.+)$/);
    if (m) return { lead: m[1], em: m[2] };
    return { lead: copy.heading, em: "" };
  })();

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">
          {copy.eyebrow}
        </Reveal>
        <Reveal as="h2" className="contact-cta" delay={1}>
          {headingHtml.lead} {headingHtml.em && <em>{headingHtml.em}</em>}
        </Reveal>

        <div className="contact-grid">
          <Reveal as="p" className="contact-now" delay={2}>
            {copy.lead}
          </Reveal>

          <Reveal className="contact-links" delay={3}>
            <a href="mailto:igorabcp@gmail.com" aria-label={copy.emailLabel}>
              <div>
                <div className="label">{copy.emailLabel}</div>
                <div className="value">igorabcp@gmail.com</div>
              </div>
              <ArrowOut />
            </a>
            <a
              href="https://www.linkedin.com/in/igorrrain/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={copy.linkedinLabel}
            >
              <div>
                <div className="label">{copy.linkedinLabel}</div>
                <div className="value">/in/igorrrain</div>
              </div>
              <ArrowOut />
            </a>
            <a href={pdfHrefFor(locale)} download aria-label={copy.cvLabel}>
              <div>
                <div className="label">{copy.cvLabel}</div>
                <div className="value">
                  Nikolaev_Igor_CV_{locale === "ru" ? "RU" : "EN"}.pdf
                </div>
              </div>
              <ArrowOut />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
