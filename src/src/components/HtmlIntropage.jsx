import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n/index";

const GLOBAL_STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes popIn {
    0%   { opacity: 0; transform: scale(0.7) translateY(10px); }
    70%  { transform: scale(1.04) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  .animate-fadeUp   { animation: fadeUp   0.6s ease both; }
  .animate-fadeIn   { animation: fadeIn   0.5s ease both; }
  .animate-scaleIn  { animation: scaleIn  0.5s ease both; }
  .animate-slideLeft{ animation: slideInLeft 0.5s ease both; }
  .animate-popIn    { animation: popIn    0.5s cubic-bezier(.34,1.56,.64,1) both; }
`;

// ─── REUSABLE LAYOUT ────────────────────────────────────────────────────────
function Section({ children, dark = false, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-24 ${dark ? "bg-[#1a1814]" : "bg-[#e8e4dc]"} ${className}`}
    >
      <div className="flex flex-col items-center w-full max-w-3xl px-6 mx-auto">
        {children}
      </div>
    </div>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <p
      className={`font-mono text-[13px] uppercase tracking-[0.14em] mb-3 animate-fadeUp ${dark ? "text-[#e34c26]" : "text-[#e34c26]"}`}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children, dark = false }) {
  return (
    <h2
      className={`font-mono font-black text-[clamp(28px,4vw,52px)] uppercase tracking-tight leading-none mb-6 animate-fadeUp text-center ${dark ? "text-white" : "text-[#1a1814]"}`}
      style={{ animationDelay: "0.1s" }}
    >
      {children}
    </h2>
  );
}

function SectionSub({ children, dark = false }) {
  return (
    <p
      className={`text-base text-center max-w-xl mb-10 leading-relaxed animate-fadeUp ${dark ? "text-[rgba(255,255,255,0.55)]" : "text-[#7a7468]"}`}
      style={{ animationDelay: "0.15s" }}
    >
      {children}
    </p>
  );
}

function NoteBox({ children, dark = false }) {
  return (
    <div
      className="w-full max-w-xl px-4 py-3 mt-6 font-mono text-xs leading-relaxed text-center border rounded-xl animate-fadeUp"
      style={{
        animationDelay: "0.4s",
        background: dark ? "rgba(227,76,38,0.10)" : "rgba(227,76,38,0.08)",
        borderColor: "rgba(227,76,38,0.25)",
        color: dark ? "rgba(255,255,255,0.6)" : "#5a4a40",
      }}
    >
      {children}
    </div>
  );
}

function NavBtns({ onPrev, onNext, isFirst, isLast, onDone, t }) {
  const n = t.htmlIntro.nav;
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mt-10">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="px-5 py-2.5 rounded-xl border border-[rgba(26,24,20,0.15)] bg-[#f2efe8] font-mono text-sm cursor-pointer transition-all duration-150 disabled:opacity-30"
        style={{ color: isFirst ? "#7a7468" : "#1a1814" }}
      >
        {n.prev}
      </button>
      {isLast ? (
        <button
          onClick={onDone}
          className="px-7 py-2.5 rounded-xl font-mono text-sm font-black uppercase tracking-wide cursor-pointer border-none text-white"
          style={{ background: "#e34c26", boxShadow: "0 4px 0 0 #a02810" }}
        >
          {n.start}
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-5 py-2.5 rounded-xl font-mono text-sm font-black uppercase tracking-wide cursor-pointer border-none text-white"
          style={{ background: "#e34c26", boxShadow: "0 4px 0 0 #a02810" }}
        >
          {n.next}
        </button>
      )}
    </div>
  );
}

function ProgressDots({ total, current, onGo }) {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-2.5 hidden lg:flex">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onGo(i)}
          className="p-0 transition-all duration-300 border-none rounded-full cursor-pointer"
          style={{
            background: i === current ? "#e34c26" : "rgba(26,24,20,0.25)",
            width: i === current ? 8 : 6,
            height: i === current ? 8 : 6,
          }}
        />
      ))}
    </div>
  );
}

// ─── SECTION 1 — What is HTML ────────────────────────────────────────────────
function Section1({ t }) {
  const s = t.htmlIntro.s1;
  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Analogy card */}
      <div
        className="w-full max-w-xl p-5 mb-8 border rounded-2xl animate-scaleIn"
        style={{
          background: "rgba(227,76,38,0.06)",
          borderColor: "rgba(227,76,38,0.2)",
          animationDelay: "0.2s",
        }}
      >
        <div className="flex items-start gap-3">
          <span className="text-3xl">{s.analogy.icon}</span>
          <div>
            <div className="font-mono font-bold text-sm text-[#e34c26] mb-1">
              {s.analogy.title}
            </div>
            <p className="text-sm text-[#5a4a40] leading-relaxed">
              {s.analogy.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid w-full max-w-xl grid-cols-3 gap-3 mb-6">
        {s.cards.map((c, i) => (
          <div
            key={i}
            className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.08)] text-center animate-popIn"
            style={{ animationDelay: `${0.25 + i * 0.08}s` }}
          >
            <div className="mb-2 text-2xl">{c.icon}</div>
            <div className="font-mono font-bold text-xs text-[#1a1814] mb-0.5">
              {c.title}
            </div>
            <div className="font-mono text-[10px] text-[#7a7468]">{c.desc}</div>
          </div>
        ))}
      </div>

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 2 — Tags ────────────────────────────────────────────────────────
function Section2({ t }) {
  const s = t.htmlIntro.s2;
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <Section dark>
      <SectionLabel dark>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      {/* Rule */}
      <div
        className="w-full max-w-xl px-4 py-3 font-mono text-sm text-center border mb-7 rounded-xl animate-fadeUp"
        style={{
          animationDelay: "0.2s",
          background: "rgba(227,76,38,0.12)",
          borderColor: "rgba(227,76,38,0.3)",
          color: "#ff9a7a",
        }}
      >
        ⚠️ {s.rule}
      </div>

      {/* Tag examples */}
      <div className="flex flex-col w-full max-w-xl gap-3">
        {s.examples.map((ex, i) => (
          <div
            key={i}
            onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            className="overflow-hidden transition-all duration-200 border cursor-pointer rounded-xl animate-slideLeft"
            style={{
              borderColor:
                activeIdx === i ? ex.color : "rgba(255,255,255,0.08)",
              background:
                activeIdx === i ? ex.color + "18" : "rgba(255,255,255,0.04)",
              animationDelay: `${0.2 + i * 0.07}s`,
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3">
              <code
                className="font-mono text-sm font-bold px-2 py-0.5 rounded"
                style={{ background: ex.color + "25", color: ex.color }}
              >
                {ex.tag}
              </code>
              {ex.close && (
                <>
                  <span className="text-[rgba(255,255,255,0.3)] font-mono text-xs">
                    …content…
                  </span>
                  <code
                    className="font-mono text-sm font-bold px-2 py-0.5 rounded"
                    style={{ background: ex.color + "25", color: ex.color }}
                  >
                    {ex.close}
                  </code>
                </>
              )}
              {!ex.close && (
                <span className="font-mono text-xs text-[rgba(255,255,255,0.4)]">
                  {ex.content}
                </span>
              )}
              <span
                className="ml-auto font-mono text-[10px]"
                style={{ color: ex.color }}
              >
                {ex.desc}
              </span>
            </div>
            {activeIdx === i && (
              <div
                className="px-4 py-2.5 font-mono text-xs border-t"
                style={{
                  borderColor: ex.color + "30",
                  color: "rgba(255,255,255,0.6)",
                  background: ex.color + "10",
                }}
              >
                {ex.close
                  ? `${ex.tag}${ex.content}${ex.close}`
                  : `<${ex.tag.slice(1, -1)} ${ex.content}>`}
              </div>
            )}
          </div>
        ))}
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 3 — DOM ─────────────────────────────────────────────────────────
function Section3({ t }) {
  const s = t.htmlIntro.s3;
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((p) => (p + 1) % s.steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [s.steps.length]);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Pipeline animation */}
      <div className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-2 mb-8">
        {s.steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="flex flex-col items-center px-4 py-3 transition-all duration-500 border rounded-xl"
              style={{
                background: activeStep === i ? step.color + "18" : "#f2efe8",
                borderColor:
                  activeStep === i ? step.color : "rgba(26,24,20,0.10)",
                transform: activeStep === i ? "translateY(-4px)" : "none",
                boxShadow:
                  activeStep === i ? `0 8px 24px ${step.color}30` : "none",
              }}
            >
              <span className="mb-1 text-2xl">{step.icon}</span>
              <span className="font-mono text-xs font-bold text-[#1a1814] mb-0.5">
                {step.label}
              </span>
              <span className="font-mono text-[10px] text-[#7a7468] text-center max-w-[90px]">
                {step.desc}
              </span>
            </div>
            {i < s.steps.length - 1 && (
              <span
                className="font-mono text-lg transition-colors duration-300"
                style={{
                  color: activeStep > i ? "#e34c26" : "rgba(26,24,20,0.2)",
                }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* DOM Tree visual */}
      <div
        className="w-full max-w-xl bg-[#1a1814] rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] font-mono text-xs animate-scaleIn"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="text-[#7a7468] mb-3 text-[10px] uppercase tracking-wider">
          DOM Tree
        </div>
        <div className="text-[#e34c26]">&lt;html&gt;</div>
        <div className="ml-4 text-[#c85c1a]">├── &lt;head&gt;</div>
        <div className="ml-8 text-[#7a7468]">
          │ └── &lt;title&gt; · &lt;link&gt;
        </div>
        <div className="ml-4 text-[#4a9e60]">└── &lt;body&gt;</div>
        <div className="ml-8 text-[#82aaff]"> ├── &lt;h1&gt; "Sarlavha"</div>
        <div className="ml-8 text-[#82aaff]"> ├── &lt;p&gt; "Matn"</div>
        <div className="ml-8 text-[#82aaff]"> └── &lt;button&gt; "Tugma"</div>
      </div>

      <NoteBox>{s.treeNote}</NoteBox>
    </Section>
  );
}

// ─── SECTION 4 — Attributes ──────────────────────────────────────────────────
function Section4({ t }) {
  const s = t.htmlIntro.s4;
  const [active, setActive] = useState(0);

  return (
    <Section dark>
      <SectionLabel dark>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      <div className="flex flex-col w-full max-w-xl gap-3">
        {s.examples.map((ex, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="overflow-hidden transition-all duration-200 border cursor-pointer rounded-xl"
            style={{
              borderColor: active === i ? ex.color : "rgba(255,255,255,0.08)",
              background:
                active === i
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.02)",
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3">
              <code
                className="font-mono text-[11px] px-2 py-1 rounded flex-shrink-0"
                style={{ background: ex.color + "20", color: ex.color }}
              >
                {ex.attr}
              </code>
              <span className="font-mono text-[11px] text-[rgba(255,255,255,0.5)]">
                {ex.desc}
              </span>
            </div>
            {active === i && (
              <div
                className="px-4 py-3 font-mono text-xs leading-relaxed border-t"
                style={{
                  borderColor: ex.color + "25",
                  color: "#c3e88d",
                  background: "rgba(0,0,0,0.2)",
                }}
              >
                {ex.code}
              </div>
            )}
          </div>
        ))}
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 5 — Page skeleton ───────────────────────────────────────────────
function Section5({ t }) {
  const s = t.htmlIntro.s5;
  const [activePart, setActivePart] = useState(null);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      <div className="grid w-full max-w-2xl grid-cols-1 gap-5 md:grid-cols-2">
        {/* Code */}
        <div
          className="bg-[#1a1814] rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] font-mono text-xs text-[#c3e88d] leading-loose animate-slideLeft"
          style={{ animationDelay: "0.2s" }}
        >
          {s.skeleton.split("\n").map((line, i) => (
            <div
              key={i}
              className="px-1 transition-colors duration-150 rounded cursor-pointer"
              style={{
                background: s.parts.some(
                  (p) => line.includes(p.tag) && activePart === p.tag,
                )
                  ? "rgba(227,76,38,0.15)"
                  : "transparent",
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Part descriptions */}
        <div
          className="flex flex-col gap-2.5 animate-slideLeft"
          style={{ animationDelay: "0.3s" }}
        >
          {s.parts.map((part, i) => (
            <div
              key={i}
              onClick={() =>
                setActivePart(activePart === part.tag ? null : part.tag)
              }
              className="flex items-start gap-3 p-3 transition-all duration-200 border cursor-pointer rounded-xl"
              style={{
                borderColor:
                  activePart === part.tag ? part.color : "rgba(26,24,20,0.10)",
                background:
                  activePart === part.tag ? part.color + "10" : "#f2efe8",
              }}
            >
              <code
                className="font-mono text-[10px] px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5"
                style={{ background: part.color + "20", color: part.color }}
              >
                {part.tag}
              </code>
              <span className="font-mono text-xs text-[#5a4a40] leading-relaxed">
                {part.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function HtmlIntroPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goToCourses = () => {
    localStorage.setItem("htmlIntroSeen", "true");
    navigate("/courses");
  };

  const [current, setCurrent] = useState(0);
  const sectionRefs = useRef([]);
  const TOTAL = 5;

  const scrollTo = (index) => {
    setCurrent(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    let nearest = 0,
      minDist = Infinity;
    sectionRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const dist = Math.abs(ref.getBoundingClientRect().top);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    });
    setCurrent(nearest);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    <Section1 t={t} />,
    <Section2 t={t} />,
    <Section3 t={t} />,
    <Section4 t={t} />,
    <Section5 t={t} />,
  ];

  return (
    <div className="relative">
      <style>{GLOBAL_STYLES}</style>

      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1a1814] border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center max-w-3xl gap-4 px-6 py-3 mx-auto">
          <span className="font-mono text-sm font-black text-white">
            {t.htmlIntro.topBar.title}
          </span>
          <span className="font-mono text-sm text-[rgba(255,255,255,0.35)]">
            {t.htmlIntro.topBar.subtitle}
          </span>
          <div className="flex-1 h-0.5 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden mx-2">
            <div
              className="h-full bg-[#e34c26] rounded-full transition-all duration-500"
              style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
            />
          </div>
          <span className="font-mono text-xs text-[rgba(255,255,255,0.35)]">
            {current + 1}/{TOTAL}
          </span>
          <button
            onClick={goToCourses}
            className="font-mono text-xs text-[rgba(255,255,255,0.35)] hover:text-[#e34c26] border-none bg-transparent cursor-pointer transition-colors uppercase tracking-wider"
          >
            {t.htmlIntro.topBar.skip}
          </button>
        </div>
      </div>

      <ProgressDots total={TOTAL} current={current} onGo={scrollTo} />

      {/* Sections */}
      <div style={{ paddingTop: 48 }}>
        {sections.map((section, i) => (
          <div key={i} ref={(el) => (sectionRefs.current[i] = el)}>
            {section}
            {i < TOTAL - 1 && (
              <div
                className="flex justify-center pb-10"
                style={{ background: i % 2 === 0 ? "#e8e4dc" : "#1a1814" }}
              >
                <NavBtns
                  onPrev={() => scrollTo(Math.max(0, i - 1))}
                  onNext={() => scrollTo(i + 1)}
                  isFirst={i === 0}
                  isLast={i === TOTAL - 1}
                  onDone={goToCourses}
                  t={t}
                />
              </div>
            )}
          </div>
        ))}

        {/* Final CTA */}
        <div
          className="flex justify-center pb-16"
          style={{ background: "#e8e4dc" }}
        >
          <button
            onClick={goToCourses}
            className="px-10 py-4 font-mono text-base font-black tracking-wide text-white uppercase border-none cursor-pointer rounded-2xl"
            style={{ background: "#e34c26", boxShadow: "0 6px 0 0 #a02810" }}
          >
            {t.htmlIntro.nav.start}
          </button>
        </div>
      </div>
    </div>
  );
}
