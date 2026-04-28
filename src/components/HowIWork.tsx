"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import type { Content } from "@/content/types";

interface HowIWorkProps {
  copy: Content["howIWork"];
}

export function HowIWork({ copy }: HowIWorkProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>(".principle"),
    );
    const handlers = cards.map((card) => {
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty("--px", `${x}%`);
        card.style.setProperty("--py", `${y}%`);
      };
      card.addEventListener("mousemove", onMove);
      return { card, onMove };
    });
    return () => {
      for (const { card, onMove } of handlers) {
        card.removeEventListener("mousemove", onMove);
      }
    };
  }, []);

  return (
    <section className="section section-stacked" id="philosophy">
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

        <div className="principles" ref={rootRef}>
          {copy.principles.map((p, i) => {
            const delay = i === 0 ? undefined : ((i as 1 | 2 | 3 | 4 | 5));
            return (
              <Reveal key={p.number} as="article" className="principle" delay={delay}>
                <span className="index">P / {p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
