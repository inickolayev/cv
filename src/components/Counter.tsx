"use client";

import { useEffect, useRef } from "react";

interface CounterProps {
  value: string;
  suffix?: string;
  className?: string;
}

function parseNumeric(value: string): { num: number | null; tail: string } {
  const m = value.match(/^([\d.,]+)(.*)$/);
  if (!m) return { num: null, tail: value };
  const numStr = m[1].replace(",", ".");
  const num = Number.parseFloat(numStr);
  if (Number.isNaN(num)) return { num: null, tail: value };
  return { num, tail: m[2] };
}

export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const { num, tail } = parseNumeric(value);
  const finalText = `${value}${suffix}`;
  const tailWithSuffix = `${tail}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (num === null) {
      el.textContent = finalText;
      return;
    }

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.textContent = finalText;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const target = num;
          const isInt = Number.isInteger(target);
          const duration = 1100;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const v = target * eased;
            const display = isInt ? Math.round(v).toString() : v.toFixed(1);
            el.textContent = `${display}${tailWithSuffix}`;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = finalText;
          };
          requestAnimationFrame(step);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num, finalText, tailWithSuffix]);

  return (
    <span ref={ref} className={className}>
      {finalText}
    </span>
  );
}
