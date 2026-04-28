import { Reveal } from "./Reveal";
import type { Content } from "@/content/types";

interface ExperienceProps {
  copy: Content["experience"];
}

export function Experience({ copy }: ExperienceProps) {
  return (
    <section className="section section-stacked" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as="span" className="eyebrow">
              {copy.eyebrow}
            </Reveal>
            <Reveal as="h2" className="h-section" delay={1}>
              {copy.heading}
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={2}>
            {copy.lead}
          </Reveal>
        </div>

        <div className="exp">
          {copy.roles.map((role) => (
            <Reveal key={role.company + role.dates} as="article" className="exp-row">
              <div className="exp-meta">
                <span className="years">{role.dates}</span>
                <span className="role-label">{role.role}</span>
              </div>
              <div className="exp-body">
                <h3>
                  {role.company.split("—")[0].trim()}{" "}
                  <span className="at">
                    {role.company.includes("—")
                      ? `— ${role.company.split("—").slice(1).join("—").trim()}`
                      : ""}
                  </span>
                </h3>
                <p className="exp-context">{role.context}</p>
                <ul className="exp-impacts">
                  {role.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
