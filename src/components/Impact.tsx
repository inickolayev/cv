import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import type { Content } from "@/content/types";

interface ImpactProps {
  copy: Content["impact"];
}

const TAG_LABELS = ["Throughput", "Team", "Platform", "Scale", "Comms", "Core"];

export function Impact({ copy }: ImpactProps) {
  return (
    <section className="section section-stacked" id="impact">
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

        <div className="metrics">
          {copy.metrics.map((m, i) => {
            const delay = i === 0 ? undefined : ((i as 1 | 2 | 3 | 4 | 5));
            return (
              <Reveal key={m.label} className="metric" delay={delay}>
                <div className="big">
                  <Counter value={m.value} suffix={m.unit ?? ""} />
                </div>
                <div className="desc">{m.label}</div>
                <span className="tag">{TAG_LABELS[i] ?? "Outcome"}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
