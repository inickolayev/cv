import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Igor Nikolaev — CTO · VP of Engineering · Head of Engineering",
    description:
      "Engineering leader with 8+ years of experience. Building organizations, platforms, and processes for scale through AI, no-code/low-code, and standardization.",
  },
  nav: {
    approach: "Approach",
    impact: "Impact",
    experience: "Experience",
    systems: "Systems",
    contact: "Contact",
    downloadCv: "Download CV",
    switchToOther: "RU",
    toggleTheme: "Toggle theme",
    themeLight: "Light",
    themeDark: "Dark",
  },
  hero: {
    version: "v01",
    status: "Open to CTO / Head of Eng roles",
    name: "Igor Nikolaev",
    role: "CTO · VP of Engineering · Head of Engineering",
    location: "Tbilisi · Remote / Hybrid",
    tagline:
      "I build engineering organizations, platforms, and processes for scale — making delivery predictable and effectiveness independent of team size through AI, no-code/low-code, and standardization.",
    intro:
      "Engineering leader with 8+ years of experience. I specialize in rapidly building teams and technology functions from scratch and delivering measurable results under resource constraints — typically increasing delivery speed ~3× with significantly smaller teams.",
    primaryCta: "Download CV",
    secondaryCta: "Get in touch",
    scrollHint: "Scroll",
  },
  approach: {
    eyebrow: "Approach",
    heading: "What I do",
    lead: "Four through-lines that have shown up in every role — from individual contributor to CTO.",
    items: [
      {
        index: "01",
        title: "0→1→Scale",
        body: "Architecture, processes, data pipelines, and product platforms shaped from scratch and scaled further without losing manageability.",
      },
      {
        index: "02",
        title: "AI-driven SDLC",
        body: "A complete software lifecycle wired with AI tooling, no-code / low-code, and automation — small teams ship the volume of large IT departments.",
      },
      {
        index: "03",
        title: "Resource-constrained delivery",
        body: "Right-sized teams, clear contracts, no-bloat platforms. Predictable output even when budget and headcount are tight.",
      },
      {
        index: "04",
        title: "Engineering leadership",
        body: "Hiring, growing engineers to senior grades, building cross-functional full-cycle teams, and setting the standards everyone reads from.",
      },
    ],
  },
  impact: {
    eyebrow: "Impact",
    heading: "Outcomes that compounded",
    lead: "A few of the numbers that show up across roles when AI, standardization, and the right team shape line up.",
    metrics: [
      {
        value: "3",
        unit: "×",
        label: "Faster delivery",
        hint: "Through AI tooling and disciplined process at LOOV.",
      },
      {
        value: "10",
        unit: " vs 40–50",
        label: "Team size vs. classical estimate",
        hint: "Same scope, fraction of the headcount.",
      },
      {
        value: "120",
        unit: "+",
        label: "Employees on the platform",
        hint: "LOOV — full operational digital ecosystem.",
      },
      {
        value: "30k",
        unit: "+",
        label: "Users on the HR platform",
        hint: "Dodo — 1000+ restaurants, high turnover.",
      },
      {
        value: "100k",
        unit: "/wk",
        label: "Personalized messages delivered",
        hint: "Multi-region admin, scaled to entire workforce.",
      },
      {
        value: "20",
        unit: "+",
        label: "Microservices in MOEX onboarding",
        hint: "Hours-to-seconds registration for the exchange.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    heading: "Selected work",
    lead: "Five roles, one arc — engineer → lead → CTO. Below, the work and the outcomes that mattered most.",
    roles: [
      {
        company: "LOOV — retail & medtech",
        role: "CTO / Head of Engineering",
        dates: "March 2024 — present",
        context:
          "Digital platform and internal products powering all operational activities for a 120+ person company.",
        bullets: [
          "Formed and led the company's technology function, building robust IT infrastructure and a unified digital ecosystem for the business.",
          "Within the first year, executed a strategic migration to a unified CRM platform — consolidating operational processes and data into one workflow.",
          "Designed and launched a data platform with DWH delivering near real-time updates and 60+ management & operational dashboards.",
          "Established the data direction and pipeline practices, turning analytics from reporting into a continuous source of business value.",
          "Implemented customer profiles and segmentation, laying the foundation for personalized scenarios and a customer mobile app.",
          "Launched an employee mobile app as a unified operational interface: dashboards, tasks, knowledge base, standards, teams — extensible by design.",
          "Built internal tools that extend the CRM into a true operational platform.",
          "Launched a customer mobile app: orders, prescriptions, lenses, warranties, loyalty program, tiers, and bonus points.",
          "Stood up a separate technology track for the global direction, enabling rapid hypothesis testing for new business lines.",
          "Built a unified internal-process loop: task tracking, centralized knowledge base, and team collaboration tooling.",
          "All development was delivered by a 10-person team — a comparable scope under classical assumptions would require 40–50 specialists. AI tooling and modern approaches lifted delivery speed ~3×.",
        ],
      },
      {
        company: "Dodo Engineering — DodoIS",
        role: "Engineering Lead → Product Owner",
        dates: "March 2021 — February 2024",
        context:
          "HR platform for a network of 1000+ restaurants and 30,000+ employees.",
        bullets: [
          "Grew from backend developer to Engineering Lead and HR-product owner.",
          "Led two cross-functional, full-cycle teams (development, testing, design) — accountable for delivery, quality, and people growth.",
          "Acted as technical leader: ran one-on-ones, hired engineers, grew several to senior grades inside Dodo.",
          "Designed and shipped COVID monitoring for staff on a tight deadline, sustaining operational processes through the pandemic.",
          "Designed and launched a large-scale HR platform for 30,000+ employees and high turnover — covering hiring, onboarding, and core HR processes.",
          "Built and scaled a personalized employee communications system: 30k users, 100k messages/week, with a flexible admin for branches and regions.",
          "Launched feedback tooling: regular pulse surveys, employee-satisfaction index, analytics on team and region health.",
          "Created internal products for motivation and engagement: merch store, employee contests, integrated into the Dodo ecosystem.",
          "Under tight resourcing, leaned into no-code / low-code — enabling fast launches and scalable iteration on platforms.",
          "Initiated and ran a systematic legacy migration in parallel with new feature delivery, with no business-process downtime.",
        ],
      },
      {
        company: "Moscow Exchange",
        role: "Full-Stack Engineer (FinTech)",
        dates: "December 2019 — March 2021",
        context:
          "High-load services and client onboarding for the exchange's core infrastructure.",
        bullets: [
          "Designed and implemented a new client-registration core for the exchange.",
          "Moved registration to an API-first, high-performance online flow — cutting time from hours to seconds.",
          "Implemented a microservices architecture (20+ services) with strict reliability, security, and scalability requirements.",
          "Refactored complex legacy logic end-to-end: decomposed thousands of lines of SQL into testable, maintainable services.",
          "Embedded data validation, integrity checks, and internal security loops into the registration flow.",
          "Delivered a stable launch with growing traffic and operational resilience for the exchange's key onboarding pipeline.",
          "Onboarded engineers and contributed to engineering standards for high-load fintech systems.",
        ],
      },
      {
        company: "IT Global",
        role: "Full-Stack Engineer",
        dates: "November 2017 — December 2019",
        context:
          "Infrastructure and fintech projects for corporate clients.",
        bullets: [
          "Designed and implemented a high-performance OTC trading bot: real-time market data, trading logic, fault tolerance.",
          "Built architecture and algorithms for trading systems in atypical market conditions — stability, extensibility, risk control.",
          "Fully implemented the admin layer of a financial-markets education platform (content, roles, access, user/permission management).",
          "Designed and shipped key modules of a major early-market crypto exchange: high load, fast releases, scalable backend components.",
          "Built an internal desktop app for derivatives trading (options & futures) with a focus on performance and reliability.",
          "Created a mobile trading app for the financial sector (Xamarin): client logic, trading-system integration, stable under load.",
          "Designed and shipped a mobile event-management application end-to-end — business logic, algorithms, scale-ready architecture.",
          "Across all projects: laid down architectural decisions for long-term maintainability, fast feature delivery, and system scaling.",
        ],
      },
      {
        company: "Kilograpp",
        role: "iOS Developer (Intern)",
        dates: "January 2017 — March 2017",
        context: "Mobile development studio.",
        bullets: [
          "Picked up iOS (Objective-C, Swift) from scratch and started shipping commercial work in weeks.",
          "Built the core venue-search feature for a TripAdvisor-like travel app: geolocation, filters, autocomplete, maps and ratings.",
          "Contributed to a mobile app for theatre/opera visitors: schedules, tickets, hall navigation.",
        ],
      },
    ],
  },
  howIWork: {
    eyebrow: "How I work",
    heading: "Operating principles",
    lead: "The non-negotiables I bring to every team.",
    principles: [
      {
        number: "01",
        title: "Outcomes over output",
        body: "Roadmaps are scored against business outcomes, not ticket throughput. Velocity that doesn't move a metric is waste.",
      },
      {
        number: "02",
        title: "Standardize, then automate",
        body: "Process before tooling. AI and automation amplify whatever is underneath — make the underneath good first.",
      },
      {
        number: "03",
        title: "Tight loops",
        body: "Short iterations, visible progress, fast feedback. Every week ends with something demoable and something learned.",
      },
      {
        number: "04",
        title: "Grow people, not just product",
        body: "One-on-ones, deliberate stretch, transparent grade frameworks. The platform is people; people compound.",
      },
    ],
  },
  systems: {
    eyebrow: "Selected systems",
    heading: "Things I have shipped",
    lead: "A small slice — picked for variety and the trade-offs each one forced.",
    systems: [
      {
        name: "LOOV CRM Platform",
        tags: ["CRM", "Operations", "Internal tools"],
        description:
          "Migrated a 120+ person company onto a unified CRM platform and extended it with internal tools — turning a system of record into an operational platform.",
        stats: ["120+ users", "60+ dashboards", "10 engineers"],
      },
      {
        name: "LOOV Data Platform / DWH",
        tags: ["Data", "Analytics", "DWH"],
        description:
          "Near real-time DWH, customer profiles and segmentation, and a pipeline practice that turned analytics from reporting into a continuous business signal.",
        stats: ["Near real-time", "Customer 360", "Segmentation"],
      },
      {
        name: "LOOV Mobile (employees & customers)",
        tags: ["Mobile", "Loyalty", "Operations"],
        description:
          "Two apps, one ecosystem: an operational interface for staff (tasks, knowledge base, standards) and a customer app with orders, prescriptions, warranties, and loyalty.",
        stats: ["2 apps", "Loyalty + tiers", "Knowledge base"],
      },
      {
        name: "DodoIS HR Platform",
        tags: ["HR", "Comms", "Engagement"],
        description:
          "Hiring, onboarding, and engagement for 30,000+ employees across 1000+ restaurants. Personalized comms reaching 100k messages a week, plus a merch store and employee contests.",
        stats: ["30k+ users", "100k msgs/wk", "1000+ locations"],
      },
      {
        name: "MOEX Client Onboarding Core",
        tags: ["FinTech", "High-load", "Microservices"],
        description:
          "Replaced a SQL-heavy legacy registration flow with an API-first microservices core. Hours-to-seconds onboarding for the exchange's clients.",
        stats: ["20+ services", "Hours → seconds", "API-first"],
      },
      {
        name: "IT Global Trading Systems",
        tags: ["Trading", "OTC", "Crypto"],
        description:
          "OTC trading bot with real-time market data, an early-market crypto-exchange backend, and a Xamarin trading app — built for high load and fast releases.",
        stats: ["Real-time", "High-load", "Multi-platform"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's talk",
    lead: "Hiring for a CTO/Head of Engineering role, exploring fractional engagements, or just want to compare notes on AI-augmented delivery — I'd love to hear from you.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    cvLabel: "Download CV",
  },
  footer: {
    copy: "© 2026 Igor Nikolaev",
    hint: "Press G to scroll up · C to jump to contact",
  },
};
