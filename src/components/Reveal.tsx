"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  as?: ElementType;
}

export function Reveal({ children, delay, className, as }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayAttr = delay ? { "data-delay": String(delay) } : {};
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal${className ? ` ${className}` : ""}`}
      {...delayAttr}
    >
      {children}
    </Tag>
  );
}
