import { Reveal } from "./Reveal";
import type { Content } from "@/content/types";

interface SystemsProps {
  copy: Content["systems"];
}

const visuals = [
  // 0 — CRM hub-and-spoke
  (
    <svg
      viewBox="0 0 300 130"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sys-g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity=".55" />
          <stop offset="1" stopColor="var(--accent-2)" stopOpacity=".25" />
        </linearGradient>
      </defs>
      <g stroke="var(--border-2)" strokeWidth="1" fill="none">
        <circle cx="150" cy="65" r="22" stroke="url(#sys-g1)" strokeWidth="1.4" />
        <circle cx="60" cy="35" r="12" />
        <circle cx="60" cy="95" r="12" />
        <circle cx="240" cy="35" r="12" />
        <circle cx="240" cy="95" r="12" />
        <line x1="72" y1="40" x2="130" y2="60" />
        <line x1="72" y1="90" x2="130" y2="70" />
        <line x1="228" y1="40" x2="170" y2="60" />
        <line x1="228" y1="90" x2="170" y2="70" />
      </g>
      <text
        x="150"
        y="69"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="9"
        fill="var(--text-dim)"
      >
        CRM
      </text>
    </svg>
  ),
  // 1 — Warehouse
  (
    <svg
      viewBox="0 0 300 130"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="var(--border-2)" strokeWidth="1" fill="none">
        <rect x="20" y="20" width="60" height="22" rx="3" />
        <rect x="20" y="54" width="60" height="22" rx="3" />
        <rect x="20" y="88" width="60" height="22" rx="3" />
        <rect x="120" y="40" width="60" height="50" rx="4" stroke="var(--accent)" />
        <rect x="220" y="20" width="60" height="22" rx="3" />
        <rect x="220" y="54" width="60" height="22" rx="3" />
        <rect x="220" y="88" width="60" height="22" rx="3" />
        <line x1="80" y1="31" x2="120" y2="55" />
        <line x1="80" y1="65" x2="120" y2="65" />
        <line x1="80" y1="99" x2="120" y2="75" />
        <line x1="180" y1="55" x2="220" y2="31" />
        <line x1="180" y1="65" x2="220" y2="65" />
        <line x1="180" y1="75" x2="220" y2="99" />
      </g>
      <text
        x="150"
        y="69"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="var(--text-dim)"
      >
        DWH
      </text>
    </svg>
  ),
  // 2 — Mobile + cards
  (
    <svg
      viewBox="0 0 300 130"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="var(--border-2)" fill="none">
        <rect x="60" y="14" width="60" height="100" rx="8" />
        <rect
          x="64"
          y="22"
          width="52"
          height="76"
          rx="2"
          fill="var(--surface)"
        />
        <rect x="180" y="30" width="80" height="68" rx="4" />
        <rect x="186" y="38" width="68" height="6" rx="1" fill="var(--surface-2)" />
        <rect x="186" y="50" width="48" height="4" rx="1" fill="var(--surface)" />
        <rect x="186" y="60" width="58" height="4" rx="1" fill="var(--surface)" />
        <rect x="186" y="70" width="34" height="4" rx="1" fill="var(--surface)" />
        <line x1="120" y1="64" x2="180" y2="64" />
      </g>
    </svg>
  ),
  // 3 — Org topology
  (
    <svg
      viewBox="0 0 300 130"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="var(--border-2)" fill="none">
        <circle cx="60" cy="65" r="18" />
        <circle cx="120" cy="40" r="10" />
        <circle cx="120" cy="90" r="10" />
        <circle cx="180" cy="25" r="7" />
        <circle cx="180" cy="55" r="7" />
        <circle cx="180" cy="75" r="7" />
        <circle cx="180" cy="105" r="7" />
        <circle cx="240" cy="40" r="5" />
        <circle cx="240" cy="90" r="5" />
        <line x1="78" y1="65" x2="110" y2="42" />
        <line x1="78" y1="65" x2="110" y2="88" />
        <line x1="130" y1="40" x2="173" y2="27" />
        <line x1="130" y1="40" x2="173" y2="55" />
        <line x1="130" y1="90" x2="173" y2="75" />
        <line x1="130" y1="90" x2="173" y2="103" />
        <line x1="187" y1="55" x2="235" y2="42" />
        <line x1="187" y1="75" x2="235" y2="88" />
      </g>
    </svg>
  ),
  // 4 — Microservices grid
  (
    <svg
      viewBox="0 0 300 130"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="var(--border-2)" fill="none">
        <rect x="20" y="20" width="260" height="90" rx="6" />
        <line x1="20" y1="44" x2="280" y2="44" />
        <line x1="80" y1="44" x2="80" y2="110" />
        <rect x="28" y="52" width="46" height="6" rx="1" fill="var(--surface-2)" />
        <rect x="28" y="64" width="32" height="6" rx="1" fill="var(--surface)" />
        <rect x="28" y="76" width="40" height="6" rx="1" fill="var(--surface)" />
        <rect x="28" y="88" width="30" height="6" rx="1" fill="var(--surface)" />
        <rect
          x="92"
          y="54"
          width="180"
          height="48"
          rx="3"
          fill="var(--system-vis-radial-1)"
          stroke="var(--accent-2)"
        />
      </g>
    </svg>
  ),
  // 5 — Throughput sparkline
  (
    <svg
      viewBox="0 0 300 130"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="var(--border-2)" strokeWidth="1" fill="none">
        <path
          d="M30 100 Q 80 40 150 65 T 270 30"
          stroke="var(--accent-2)"
          strokeWidth="1.6"
        />
        <circle cx="30" cy="100" r="3" fill="var(--text-dim)" stroke="none" />
        <circle cx="90" cy="58" r="3" fill="var(--text-dim)" stroke="none" />
        <circle cx="150" cy="65" r="3" fill="var(--text-dim)" stroke="none" />
        <circle cx="210" cy="46" r="3" fill="var(--text-dim)" stroke="none" />
        <circle cx="270" cy="30" r="3" fill="var(--accent)" stroke="none" />
        <line x1="20" y1="115" x2="280" y2="115" stroke="var(--border)" />
      </g>
      <text
        x="270"
        y="22"
        textAnchor="end"
        fontFamily="var(--font-mono)"
        fontSize="8"
        fill="var(--accent)"
      >
        3× THROUGHPUT
      </text>
    </svg>
  ),
];

export function SelectedSystems({ copy }: SystemsProps) {
  return (
    <section className="section section-stacked" id="systems">
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

        <div className="systems-grid">
          {copy.systems.map((s, i) => {
            const delay = i === 0 ? undefined : ((i as 1 | 2 | 3 | 4 | 5));
            return (
              <Reveal key={s.name} as="article" className="system" delay={delay}>
                <div className="vis">{visuals[i % visuals.length]}</div>
                <h4>{s.name}</h4>
                <p>{s.description}</p>
                <div className="stats">
                  {s.stats.map((stat) => (
                    <span key={stat}>{stat}</span>
                  ))}
                </div>
                <div className="tags">
                  {s.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
