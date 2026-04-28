import { Reveal } from "./Reveal";
import type { Content } from "@/content/types";

interface ApproachProps {
  copy: Content["approach"];
}

export function Approach({ copy }: ApproachProps) {
  return (
    <section className="section" id="approach">
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

        <div className="pillars">
          {copy.items.map((item, i) => {
            const delay = i === 0 ? undefined : ((i as 1 | 2 | 3 | 4 | 5));
            return (
              <Reveal key={item.index} className="pillar" delay={delay}>
                <span className="num">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
