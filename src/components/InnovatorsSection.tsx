import { useEffect, useMemo, useRef, useState } from "react";

const STYLE_ID = "innovators-animations";

const innovatorFlows = [
  {
    id: "01",
    variant: "orbit",
    meta: "Evaluation",
    title: "Price Uncertainty",
    description:
      "Submit research ideas that the community stress-tests for feasibility, risk, and impact converting uncertainty into probability.",
    statLabel: "",
    statValue: "",
  },
  {
    id: "02",
    variant: "wave",
    meta: "Funding",
    title: "Trade Proof For Capital",
    description:
      "Replace grant cycles with markets that fund results. Every validated hypothesis earns liquidity and every failure, valuable data",
    statLabel: "",
    statValue: "",
  },
];

const innovatorMetrics = [
  { label: "Submit", value: "Unpriced Idea" },
  { label: "Evaluate", value: "Stress-Tested Hypothesis" },
  { label: "Fund", value: "Risk-adjusted Conviction" },
];

const palettes = {
  dark: {
    surface: "bg-slate-950 text-slate-100",
    heading: "text-white",
    muted: "text-slate-400",
    capsule: "bg-slate-800/50 border-slate-800/50 text-slate-300",
    card: "bg-slate-900/50",
    cardBorder: "border-slate-800/50",
    metric: "bg-slate-800/50 border-slate-800/50 text-slate-300",
    headingAccent: "bg-gradient-to-r from-cyan-400 to-blue-500",
    toggleSurface: "bg-slate-800/50",
    toggle: "border-slate-800/50 text-white",
    button:
      "border-slate-800/50 text-white hover:border-cyan-500/50 hover:bg-slate-800/50",
    gridColor: "rgba(6, 182, 212, 0.06)",
    overlay:
      "linear-gradient(180deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.7) 45%, rgba(2,6,23,0.92) 100%)",
    focusGlow: "rgba(6, 182, 212, 0.1)",
    iconStroke: "#22d3ee",
    iconTrail: "rgba(6, 182, 212, 0.3)",
  },
  light: {
    surface: "bg-slate-100 text-slate-900",
    heading: "text-slate-900",
    muted: "text-slate-600",
    capsule: "bg-white/70 border-slate-200 text-slate-700",
    card: "bg-white/80",
    cardBorder: "border-slate-200",
    metric: "bg-white border-slate-200 text-slate-600",
    headingAccent: "bg-gradient-to-r from-cyan-400 to-blue-500",
    toggleSurface: "bg-white",
    toggle: "border-slate-300 text-slate-900",
    button:
      "border-slate-300 text-slate-900 hover:border-cyan-500 hover:bg-slate-100",
    gridColor: "rgba(6, 182, 212, 0.08)",
    overlay:
      "linear-gradient(180deg, rgba(248,250,252,0.96) 0%, rgba(241,245,249,0.68) 45%, rgba(248,250,252,0.96) 100%)",
    focusGlow: "rgba(6, 182, 212, 0.15)",
    iconStroke: "#0891b2",
    iconTrail: "rgba(6, 182, 212, 0.4)",
  },
};

const getRootTheme = () => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }

  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  if (
    root.dataset?.theme === "dark" ||
    root.getAttribute("data-theme") === "dark"
  )
    return "dark";
  if (root.classList.contains("light")) return "light";
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

function InnovatorsSection() {
  const [theme, setTheme] = useState(() => getRootTheme());
  const [introReady, setIntroReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.innerHTML = `
      @keyframes bento3-card-in {
        0% { opacity: 0; transform: translate3d(0, 28px, 0) scale(0.97); filter: blur(12px); }
        60% { filter: blur(0); }
        100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
      }
      @keyframes bento3-flare {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes bento3-dash {
        0% { transform: translateX(-25%); opacity: 0; }
        30% { opacity: 1; }
        70% { opacity: 1; }
        100% { transform: translateX(25%); opacity: 0; }
      }
      @keyframes bento3-wave {
        0% { transform: translateX(-45%); }
        100% { transform: translateX(45%); }
      }
      @keyframes bento3-pulse {
        0% { transform: scale(0.8); opacity: 0.6; }
        70% { opacity: 0.05; }
        100% { transform: scale(1.35); opacity: 0; }
      }
      .bento3-innovators-root {
        padding-inline: 0;
        min-height: min(100vh, 960px);
      }
      .bento3-innovators-section {
        gap: clamp(3rem, 6vw, 5rem);
        padding-inline: clamp(1.25rem, 5vw, 3.75rem);
        width: min(100%, 72rem);
      }
      .bento3-innovators-grid {
        gap: clamp(1.25rem, 4vw, 2.5rem);
      }
      .bento3-innovators-metrics {
        gap: clamp(1rem, 3vw, 1.5rem);
        padding: clamp(1.25rem, 4vw, 2.5rem);
      }
      .bento3-innovators-footer {
        gap: clamp(1.15rem, 3.5vw, 2.4rem);
      }
      .bento3-innovators-pill {
        flex-wrap: wrap;
      }
      .bento3-innovators-pill span:last-child {
        flex-shrink: 0;
      }
      .bento3-innovators-card {
        opacity: 0;
        transform: translate3d(0, 32px, 0);
        filter: blur(14px);
        transition: border-color 400ms ease, background 400ms ease, padding 300ms ease;
        padding: clamp(1.2rem, 3vw, 2.4rem);
        border-radius: clamp(1.5rem, 4vw, 28px);
      }
      .bento3-innovators-card[data-visible="true"] {
        animation: bento3-card-in 760ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
        animation-delay: var(--bento3-delay, 0ms);
      }
      .bento3-innovators-icon {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: clamp(2.75rem, 6vw, 3.25rem);
        width: clamp(2.75rem, 6vw, 3.25rem);
        border-radius: 9999px;
        overflow: hidden;
        isolation: isolate;
      }
      .bento3-innovators-icon::before,
      .bento3-innovators-icon::after {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: inherit;
        border: 1px solid var(--bento3-icon-trail);
        opacity: 0.45;
      }
      .bento3-innovators-icon::after {
        inset: 10px;
        opacity: 0.2;
      }
      .bento3-innovators-icon[data-variant="orbit"] span {
        position: absolute;
        height: 140%;
        width: 3px;
        background: linear-gradient(180deg, transparent, var(--bento3-icon-stroke) 55%, transparent);
        transform-origin: center;
        animation: bento3-flare 8s linear infinite;
      }
      .bento3-innovators-icon[data-variant="relay"] span {
        position: absolute;
        inset: 18px;
        border-top: 1px solid var(--bento3-icon-stroke);
        border-bottom: 1px solid var(--bento3-icon-stroke);
        transform: skewX(-15deg);
      }
      .bento3-innovators-icon[data-variant="relay"] span::before,
      .bento3-innovators-icon[data-variant="relay"] span::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 120%;
        left: -10%;
        background: linear-gradient(90deg, transparent, var(--bento3-icon-stroke), transparent);
        animation: bento3-dash 2.6s ease-in-out infinite;
      }
      .bento3-innovators-icon[data-variant="relay"] span::after {
        top: 70%;
        animation-delay: 0.9s;
      }
      .bento3-innovators-icon[data-variant="wave"] span {
        position: absolute;
        inset: 12px;
        border-radius: 999px;
        overflow: hidden;
      }
      .bento3-innovators-icon[data-variant="wave"] span::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, transparent 5%, var(--bento3-icon-stroke) 50%, transparent 95%);
        transform: translateX(-45%);
        animation: bento3-wave 2.8s ease-in-out infinite alternate;
      }
      .bento3-innovators-icon[data-variant="spark"] span {
        position: absolute;
        inset: 0;
      }
      .bento3-innovators-icon[data-variant="spark"] span::before,
      .bento3-innovators-icon[data-variant="spark"] span::after {
        content: "";
        position: absolute;
        inset: 12px;
        border-radius: 9999px;
        border: 1px solid var(--bento3-icon-stroke);
        opacity: 0.28;
        animation: bento3-pulse 2.8s ease-out infinite;
      }
      .bento3-innovators-icon[data-variant="spark"] span::after {
        animation-delay: 0.9s;
      }
      .bento3-innovators-icon[data-variant="loop"] span {
        position: absolute;
        inset: 12px;
      }
      .bento3-innovators-icon[data-variant="loop"] span::before,
      .bento3-innovators-icon[data-variant="loop"] span::after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        top: 50%;
        left: 0;
        background: linear-gradient(90deg, transparent, var(--bento3-icon-stroke), transparent);
      }
      .bento3-innovators-icon[data-variant="loop"] span::before {
        transform: rotate(90deg);
      }
      .bento3-innovators-icon[data-variant="loop"] span::after {
        opacity: 0.4;
        transform: rotate(0deg);
      }
      @media (max-width: 1024px) {
        .bento3-innovators-section {
          gap: clamp(2.5rem, 6vw, 4rem);
          padding-inline: clamp(1.1rem, 6vw, 3rem);
        }
        .bento3-innovators-metrics {
          border-radius: 24px;
        }
      }
      @media (max-width: 768px) {
        .bento3-innovators-root {
          min-height: auto;
        }
        .bento3-innovators-section {
          gap: clamp(2rem, 7vw, 3.5rem);
          padding-inline: clamp(1rem, 8vw, 2.25rem);
          padding-block: clamp(3rem, 10vw, 4rem);
        }
        .bento3-innovators-card {
          padding: clamp(1rem, 5vw, 1.6rem);
          border-radius: 22px;
        }
        .bento3-innovators-grid {
          gap: clamp(1rem, 6vw, 2rem);
        }
        .bento3-innovators-metrics {
          padding: clamp(1rem, 6vw, 1.8rem);
          gap: clamp(0.75rem, 4vw, 1.25rem);
        }
        .bento3-innovators-footer {
          gap: clamp(1rem, 6vw, 1.75rem);
        }
      }
      @media (max-width: 640px) {
        .bento3-innovators-section {
          gap: clamp(1.75rem, 8vw, 3rem);
        }
        .bento3-innovators-pill {
          justify-content: center;
          text-align: center;
        }
        .bento3-innovators-pill span:last-child {
          width: 100%;
          text-align: center;
        }
        .bento3-innovators-card {
          padding: clamp(0.85rem, 6vw, 1.4rem);
        }
        .bento3-innovators-icon {
          height: clamp(2.25rem, 8vw, 2.75rem);
          width: clamp(2.25rem, 8vw, 2.75rem);
        }
        .bento3-innovators-metrics div {
          padding-block: clamp(1rem, 6vw, 1.5rem);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIntroReady(true);
      setVisible(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const syncTheme = () => {
      const next = getRootTheme();
      setTheme((prev) => (prev === next ? prev : next));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const handleStorage = (event) => {
      if (event.key === "bento-theme") syncTheme();
    };

    const media =
      typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)")
        : null;

    const handleMedia = () => syncTheme();

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorage);
    }
    media?.addEventListener("change", handleMedia);

    return () => {
      observer.disconnect();
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorage);
      }
      media?.removeEventListener("change", handleMedia);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const palette = useMemo(() => palettes[theme], [theme]);

  const containerStyle = useMemo(
    () => ({
      "--bento3-grid-color": palette.gridColor,
      "--bento3-focus-glow": palette.focusGlow,
      "--bento3-icon-stroke": palette.iconStroke,
      "--bento3-icon-trail": palette.iconTrail,
    }),
    [
      palette.gridColor,
      palette.focusGlow,
      palette.iconStroke,
      palette.iconTrail,
    ]
  );

  return (
    <div
      className={`bento3-innovators-root relative w-full overflow-hidden transition-colors duration-700 ${palette.surface}`}
      style={containerStyle}
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--bento3-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--bento3-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "22px 22px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          WebkitMaskImage: `
            repeating-linear-gradient(to right, black 0px, black 3px, transparent 3px, transparent 8px),
            repeating-linear-gradient(to bottom, black 0px, black 3px, transparent 3px, transparent 8px)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: palette.overlay }}
      />

      <section
        ref={sectionRef}
        className={`bento3-innovators-section relative z-10 mx-auto flex max-w-6xl flex-col gap-12 py-24 md:gap-16 ${
          introReady && visible ? "" : "opacity-0"
        }`}
      >
        <header className="flex flex-col gap-10">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-full px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-300">
              <span className="h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              For Innovators
            </div>
            <h1
              className={`text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl ${palette.heading}`}
            >
              Turn ideas into funded projects
            </h1>
            <p
              className={`max-w-2xl text-sm sm:text-base md:text-lg ${palette.muted}`}
            >
              What if your research could find believers before it finds
              investors? If your next breakthrough could attract funding the
              moment people believe in it? If a market could prove your idea's
              value before you ever run the experiment?
            </p>
          </div>
        </header>

        <div className="bento3-innovators-grid grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 xl:gap-8">
          {innovatorFlows.map((flow, index) => (
            <FlowCard
              key={flow.id}
              flow={flow}
              palette={palette}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        <div
          className={`bento3-innovators-metrics grid grid-cols-1 gap-4 rounded-[28px] border p-6 sm:grid-cols-2 md:grid-cols-3 ${palette.cardBorder} ${palette.card}`}
        >
          {innovatorMetrics.map((metric) => (
            <div
              key={metric.label}
              className={`rounded-[22px] border px-5 py-6 text-xs uppercase tracking-[0.22em] text-center sm:text-sm sm:tracking-[0.25em] ${palette.metric}`}
            >
              <span className="block text-[10px] opacity-60 sm:text-[11px]">
                {metric.label}
              </span>
              <span className="mt-2 block text-base font-semibold tracking-[0.08em] sm:text-lg sm:tracking-[0.12em]">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function FlowCard({ flow, palette, index, visible }) {
  const cardRef = useRef(null);

  const setGlow = (event) => {
    const target = cardRef.current;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--bento3-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--bento3-y", `${event.clientY - rect.top}px`);
  };

  const clearGlow = () => {
    const target = cardRef.current;
    if (!target) return;
    target.style.removeProperty("--bento3-x");
    target.style.removeProperty("--bento3-y");
  };

  return (
    <article
      ref={cardRef}
      className={`bento3-innovators-card group relative overflow-hidden rounded-[28px] border ${palette.cardBorder} ${palette.card} p-6 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10`}
      data-visible={visible}
      style={{ "--bento3-delay": `${index * 90}ms` }}
      onMouseMove={setGlow}
      onMouseLeave={clearGlow}
    >
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-xs uppercase tracking-[0.3em] opacity-50 sm:h-12 sm:w-12">
          {flow.id}
        </div>
        <div className="flex flex-col gap-4 lg:flex-1">
          <span
            className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.4em] bg-cyan-500/10 border-cyan-500/20 text-cyan-400`}
          >
            {flow.meta}
          </span>
          <h3
            className={`text-xl font-semibold leading-tight sm:text-2xl ${palette.heading}`}
          >
            {flow.title}
          </h3>
          <p
            className={`text-sm leading-relaxed sm:text-base ${palette.muted}`}
          >
            {flow.description}
          </p>
        </div>
        <div
          className={`mt-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${palette.cardBorder} ${palette.card} sm:h-14 sm:w-14 lg:ml-auto lg:mt-0 lg:h-16 lg:w-16`}
        >
          <AnimatedIcon variant={flow.variant} />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-3 text-[0.65rem] uppercase tracking-[0.25em] opacity-70 sm:text-xs sm:tracking-[0.35em] sm:flex-row sm:items-center sm:justify-between">
        <span className="text-center sm:text-left">{flow.statLabel}</span>
        <span className="text-center font-semibold text-current sm:text-right">
          {flow.statValue}
        </span>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(200px circle at var(--bento3-x, 50%) var(--bento3-y, 50%), var(--bento3-focus-glow), transparent 68%)`,
        }}
      />
    </article>
  );
}

function AnimatedIcon({ variant }) {
  return (
    <span className="bento3-innovators-icon" data-variant={variant}>
      <span />
    </span>
  );
}

export default InnovatorsSection;
export { InnovatorsSection };
