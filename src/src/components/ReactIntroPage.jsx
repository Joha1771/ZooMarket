import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n/index";

// ─── REACT INTRO PAGE ─────────────────────────────────────────────────────────
// Brand color: #61DAFB (React cyan)

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
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  .animate-fadeUp   { animation: fadeUp   0.6s ease both; }
  .animate-fadeIn   { animation: fadeIn   0.5s ease both; }
  .animate-scaleIn  { animation: scaleIn  0.5s ease both; }
  .animate-slideLeft{ animation: slideInLeft 0.5s ease both; }
  .animate-popIn    { animation: popIn    0.5s cubic-bezier(.34,1.56,.64,1) both; }
  .react-spin       { animation: spin 8s linear infinite; }
`;

const REACT_COLOR = "#61DAFB";
const REACT_DARK = "#0a9dc7";

// ─── REUSABLE LAYOUT ──────────────────────────────────────────────────────────
function Section({ children, dark = false, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-24 ${
        dark ? "bg-[#1a1814]" : "bg-[#e8e4dc]"
      } ${className}`}
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
      className="font-mono text-[13px] uppercase tracking-[0.14em] mb-3 animate-fadeUp"
      style={{ color: REACT_COLOR }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children, dark = false }) {
  return (
    <h2
      className={`font-mono font-black text-[clamp(28px,4vw,52px)] uppercase tracking-tight leading-none mb-6 animate-fadeUp text-center ${
        dark ? "text-white" : "text-[#1a1814]"
      }`}
      style={{ animationDelay: "0.1s" }}
    >
      {children}
    </h2>
  );
}

function SectionSub({ children, dark = false }) {
  return (
    <p
      className={`text-base text-center max-w-xl mb-10 leading-relaxed animate-fadeUp ${
        dark ? "text-[rgba(255,255,255,0.55)]" : "text-[#7a7468]"
      }`}
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
        background: dark ? "rgba(97,218,251,0.08)" : "rgba(97,218,251,0.06)",
        borderColor: "rgba(97,218,251,0.25)",
        color: dark ? "rgba(255,255,255,0.6)" : "#3a6070",
      }}
    >
      {children}
    </div>
  );
}

function NavBtns({ onPrev, onNext, isFirst, isLast, onDone, t }) {
  const n = t.reactIntro.nav;
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
          style={{
            background: REACT_COLOR,
            color: "#0a1a20",
            boxShadow: `0 4px 0 0 ${REACT_DARK}`,
          }}
        >
          {n.start}
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-5 py-2.5 rounded-xl font-mono text-sm font-black uppercase tracking-wide cursor-pointer border-none"
          style={{
            background: REACT_COLOR,
            color: "#0a1a20",
            boxShadow: `0 4px 0 0 ${REACT_DARK}`,
          }}
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
            background: i === current ? REACT_COLOR : "rgba(26,24,20,0.25)",
            width: i === current ? 8 : 6,
            height: i === current ? 8 : 6,
          }}
        />
      ))}
    </div>
  );
}

// ─── SECTION 1 — What is React ────────────────────────────────────────────────
function Section1({ t }) {
  const s = t.reactIntro.s1;

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>

      {/* React logo */}
      <div className="mb-6 animate-scaleIn" style={{ animationDelay: "0.05s" }}>
        <svg
          className="react-spin"
          width="80"
          height="80"
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="0" cy="0" r="2.05" fill={REACT_COLOR} />
          <g stroke={REACT_COLOR} strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>

      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Analogy card */}
      <div
        className="w-full max-w-xl p-5 mb-8 border rounded-2xl animate-scaleIn"
        style={{
          background: "rgba(97,218,251,0.06)",
          borderColor: "rgba(97,218,251,0.2)",
          animationDelay: "0.2s",
        }}
      >
        <div className="flex items-start gap-3">
          <span className="text-3xl">{s.analogy.icon}</span>
          <div>
            <div
              className="mb-1 font-mono text-sm font-bold"
              style={{ color: REACT_COLOR }}
            >
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

// ─── SECTION 2 — Virtual DOM ──────────────────────────────────────────────────
function Section2({ t }) {
  const s = t.reactIntro.s2;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setStep((p) => (p + 1) % s.steps.length),
      1400,
    );
    return () => clearInterval(id);
  }, [s.steps.length]);

  return (
    <Section dark>
      <SectionLabel dark>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      {/* DOM comparison */}
      <div className="grid w-full max-w-xl grid-cols-2 gap-4 mb-8">
        {[s.real, s.virtual].map((side) => (
          <div
            key={side.title}
            className="p-4 border rounded-2xl"
            style={{
              background: side.color + "10",
              borderColor: side.color + "30",
            }}
          >
            <div
              className="mb-3 font-mono text-sm font-black"
              style={{ color: side.color }}
            >
              {side.title}
            </div>
            <div className="flex flex-col gap-2">
              {side.points.map((p, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className="text-xs mt-0.5 shrink-0"
                    style={{ color: side.color }}
                  >
                    •
                  </span>
                  <span className="text-xs text-[rgba(255,255,255,0.65)] leading-relaxed">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Reconciliation flow */}
      <div className="w-full max-w-xl">
        <div className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] uppercase tracking-wider mb-3 text-center">
          Reconciliation jarayoni
        </div>
        <div className="flex items-center justify-between gap-1">
          {s.steps.map((st, i) => (
            <div key={i} className="flex items-center flex-1 gap-1">
              <div
                className="flex-1 flex flex-col items-center gap-1.5 p-2.5 rounded-xl border transition-all duration-300"
                style={{
                  background:
                    step === i ? st.color + "20" : "rgba(255,255,255,0.03)",
                  borderColor: step === i ? st.color : "rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-lg">{st.icon}</span>
                <span
                  className="font-mono text-[9px] text-center leading-tight"
                  style={{
                    color: step === i ? st.color : "rgba(255,255,255,0.3)",
                  }}
                >
                  {st.label}
                </span>
              </div>
              {i < s.steps.length - 1 && (
                <span className="text-[rgba(255,255,255,0.15)] text-xs shrink-0">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 3 — SPA vs MPA ───────────────────────────────────────────────────
function Section3({ t }) {
  const s = t.reactIntro.s3;
  const [active, setActive] = useState("spa");
  const cur = active === "spa" ? s.spa : s.mpa;

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Toggle */}
      <div className="flex w-full max-w-sm gap-2 mb-7">
        {["spa", "mpa"].map((id) => {
          const item = s[id];
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="flex-1 py-2.5 rounded-xl font-mono text-sm font-bold cursor-pointer border transition-all duration-200"
              style={{
                background: active === id ? item.color : "#f2efe8",
                borderColor: active === id ? item.color : "rgba(26,24,20,0.10)",
                color:
                  active === id
                    ? id === "spa"
                      ? "#0a1a20"
                      : "#fff"
                    : "#1a1814",
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Detail card */}
      <div
        className="w-full max-w-xl p-5 mb-5 border rounded-2xl animate-scaleIn"
        style={{
          background: cur.color + "08",
          borderColor: cur.color + "25",
        }}
      >
        <div
          className="mb-1 font-mono text-xs font-black"
          style={{ color: cur.color }}
        >
          {cur.full}
        </div>
        <p className="text-sm text-[#5a4a40] mb-4 leading-relaxed">
          {cur.desc}
        </p>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="font-mono text-[10px] text-[#4a9e60] uppercase mb-1.5">
              Afzalliklar
            </div>
            {cur.pros.map((p, i) => (
              <div key={i} className="flex items-center gap-1.5 mb-1">
                <span className="text-[#4a9e60] text-xs">✓</span>
                <span className="text-xs text-[#1a1814]">{p}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="font-mono text-[10px] text-[#e06c75] uppercase mb-1.5">
              Kamchiliklar
            </div>
            {cur.cons.map((c, i) => (
              <div key={i} className="flex items-center gap-1.5 mb-1">
                <span className="text-[#e06c75] text-xs">✗</span>
                <span className="text-xs text-[#1a1814]">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-[rgba(26,24,20,0.08)]">
          <span className="font-mono text-[10px] text-[#7a7468]">
            Misollar:{" "}
          </span>
          {cur.examples.map((e, i) => (
            <span
              key={i}
              className="font-mono text-[10px] px-1.5 py-0.5 rounded mr-1"
              style={{ background: cur.color + "15", color: cur.color }}
            >
              {e}
            </span>
          ))}
        </div>
      </div>

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 4 — JSX & Components ────────────────────────────────────────────
function Section4({ t }) {
  const s = t.reactIntro.s4;
  const [showConverted, setShowConverted] = useState(false);

  return (
    <Section dark>
      <SectionLabel dark>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      {/* JSX demo */}
      <div className="w-full max-w-xl mb-6">
        <div
          className="mb-3 font-mono text-sm font-bold"
          style={{ color: REACT_COLOR }}
        >
          {s.jsxTitle}
        </div>
        <p className="text-xs text-[rgba(255,255,255,0.5)] mb-3 leading-relaxed">
          {s.jsxDesc}
        </p>

        <div className="flex gap-1.5 mb-3">
          {["JSX", "Compiled JS"].map((tab, i) => (
            <button
              key={tab}
              onClick={() => setShowConverted(i === 1)}
              className="px-3 py-1.5 rounded-lg font-mono text-[11px] cursor-pointer border-none transition-all"
              style={{
                background:
                  showConverted === (i === 1)
                    ? REACT_COLOR + "25"
                    : "rgba(255,255,255,0.05)",
                color:
                  showConverted === (i === 1)
                    ? REACT_COLOR
                    : "rgba(255,255,255,0.4)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-[#111] rounded-xl p-4 font-mono text-xs text-[#c3e88d] leading-loose border border-[rgba(255,255,255,0.06)]">
          {!showConverted ? (
            <>
              <div>
                <span className="text-[rgba(255,255,255,0.3)]">
                  {"// JSX (sen yozasan)"}
                </span>
              </div>
              <div>
                <span style={{ color: "#c792ea" }}>const </span>
                <span style={{ color: "#82aaff" }}>el</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}> = </span>
                <span style={{ color: "#e34c26" }}>{"<h1>"}</span>
                <span style={{ color: "#c3e88d" }}>Salom, </span>
                <span style={{ color: "#f78c6c" }}>{"{name}"}</span>
                <span style={{ color: "#c3e88d" }}>!</span>
                <span style={{ color: "#e34c26" }}>{"</h1>"}</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>;</span>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-[rgba(255,255,255,0.3)]">
                  {"// Babel aylantiradi"}
                </span>
              </div>
              <div>
                <span style={{ color: "#c792ea" }}>const </span>
                <span style={{ color: "#82aaff" }}>el</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}> = </span>
                <span style={{ color: "#82aaff" }}>React</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>.</span>
                <span style={{ color: "#82aaff" }}>createElement</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>(</span>
              </div>
              <div>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>{"  "}</span>
                <span style={{ color: "#c3e88d" }}>'h1'</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>, </span>
                <span style={{ color: "#f78c6c" }}>null</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>, </span>
                <span style={{ color: "#c3e88d" }}>{"`Salom, ${name}!`"}</span>
              </div>
              <div>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>);</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Component rules */}
      <div className="w-full max-w-xl">
        <div
          className="mb-3 font-mono text-sm font-bold"
          style={{ color: REACT_COLOR }}
        >
          {s.componentTitle}
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {s.rules.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-xl border animate-slideLeft"
              style={{
                background: "rgba(97,218,251,0.05)",
                borderColor: "rgba(97,218,251,0.12)",
                animationDelay: `${0.1 + i * 0.07}s`,
              }}
            >
              <span className="text-base shrink-0">{r.icon}</span>
              <span className="text-xs text-[rgba(255,255,255,0.65)] leading-relaxed">
                {r.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 5 — NodeJS & Setup ───────────────────────────────────────────────
function Section5({ t }) {
  const s = t.reactIntro.s5;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Node.js info */}
      <div
        className="w-full max-w-xl p-4 border mb-7 rounded-2xl animate-scaleIn"
        style={{
          background: "rgba(97,218,251,0.06)",
          borderColor: "rgba(97,218,251,0.2)",
          animationDelay: "0.2s",
        }}
      >
        <div
          className="font-mono font-bold text-sm mb-1.5"
          style={{ color: REACT_COLOR }}
        >
          {s.nodeTitle}
        </div>
        <p className="text-sm text-[#5a4a40] leading-relaxed">{s.nodeDesc}</p>
      </div>

      {/* Steps */}
      <div className="w-full max-w-xl mb-7">
        <div className="flex flex-col gap-2.5">
          {s.steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(activeStep === i ? -1 : i)}
              className="overflow-hidden transition-all duration-200 border cursor-pointer rounded-xl"
              style={{
                borderColor:
                  activeStep === i ? step.color : "rgba(26,24,20,0.10)",
                background: activeStep === i ? step.color + "0a" : "#f2efe8",
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <span
                  className="font-mono text-[11px] font-black px-2 py-0.5 rounded"
                  style={{ background: step.color + "20", color: step.color }}
                >
                  {step.num}
                </span>
                <span className="font-mono text-sm font-bold text-[#1a1814]">
                  {step.title}
                </span>
                <span
                  className="ml-auto font-mono text-xs transition-transform duration-200"
                  style={{
                    color: step.color,
                    transform: activeStep === i ? "rotate(180deg)" : "none",
                  }}
                >
                  ▾
                </span>
              </div>
              {activeStep === i && (
                <div
                  className="px-4 pb-3 font-mono text-xs text-[#c3e88d] bg-[#1a1814] leading-loose whitespace-pre border-t"
                  style={{ borderColor: step.color + "20" }}
                >
                  {step.code}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* File structure */}
      <div className="w-full max-w-xl">
        <div className="font-mono font-bold text-sm text-[#1a1814] mb-3">
          {s.structure.title}
        </div>
        <div className="bg-[#1a1814] rounded-xl p-4 border border-[rgba(255,255,255,0.06)]">
          {s.structure.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-1.5 border-b border-[rgba(255,255,255,0.04)] last:border-0"
            >
              <code
                className="font-mono text-xs w-36 shrink-0"
                style={{ color: item.color }}
              >
                {item.name}
              </code>
              <span className="text-xs text-[rgba(255,255,255,0.45)]">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function ReactIntroPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToCourses = () => {
    localStorage.setItem("reactIntroSeen", "true");
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
            {t.reactIntro.topBar.title}
          </span>
          <span className="font-mono text-sm text-[rgba(255,255,255,0.35)]">
            {t.reactIntro.topBar.subtitle}
          </span>
          <div className="flex-1 h-0.5 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden mx-2">
            <div
              className="h-full transition-all duration-500 rounded-full"
              style={{
                width: `${((current + 1) / TOTAL) * 100}%`,
                background: REACT_COLOR,
              }}
            />
          </div>
          <span className="font-mono text-xs text-[rgba(255,255,255,0.35)]">
            {current + 1}/{TOTAL}
          </span>
          <button
            onClick={goToCourses}
            className="font-mono text-xs tracking-wider uppercase transition-colors bg-transparent border-none cursor-pointer"
            style={{ color: "rgba(255,255,255,0.35)" }}
            onMouseEnter={(e) => (e.target.style.color = REACT_COLOR)}
            onMouseLeave={(e) =>
              (e.target.style.color = "rgba(255,255,255,0.35)")
            }
          >
            {t.reactIntro.topBar.skip}
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
            className="px-10 py-4 font-mono text-base font-black tracking-wide uppercase border-none cursor-pointer rounded-2xl"
            style={{
              background: REACT_COLOR,
              color: "#0a1a20",
              boxShadow: `0 6px 0 0 ${REACT_DARK}`,
            }}
          >
            {t.reactIntro.nav.start}
          </button>
        </div>
      </div>
    </div>
  );
}
