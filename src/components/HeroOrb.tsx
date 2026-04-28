"use client";

import { useEffect, useRef } from "react";

export function HeroOrb() {
  const orbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;
    const hero = orb.closest(".hero") as HTMLElement | null;
    if (!hero) return;
    const supportsHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return;

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      orb.style.setProperty("--mx", `${x}%`);
      orb.style.setProperty("--my", `${y}%`);
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={orbRef} className="hero-orb" aria-hidden="true" />;
}
