import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n/index";

// ─── ANIMATION STYLES ─────────────────────────────────────────────────────────
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
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes popIn {
    0%   { opacity: 0; transform: scale(0.7) translateY(10px); }
    70%  { transform: scale(1.05) translateY(-2px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes flowPulse {
    0%, 100% { opacity: 0.4; transform: scaleX(1); }
    50%       { opacity: 1; transform: scaleX(1.05); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; } 50% { opacity: 0; }
  }
  .animate-fadeUp    { animation: fadeUp 0.7s cubic-bezier(.16,1,.3,1) both; }
  .animate-fadeIn    { animation: fadeIn 0.5s ease both; }
  .animate-scaleIn   { animation: scaleIn 0.6s cubic-bezier(.16,1,.3,1) both; }
  .animate-slideLeft { animation: slideInLeft 0.6s cubic-bezier(.16,1,.3,1) both; }
  .animate-slideRight{ animation: slideInRight 0.6s cubic-bezier(.16,1,.3,1) both; }
  .animate-popIn     { animation: popIn 0.5s cubic-bezier(.16,1,.3,1) both; }
`;

// ─── LAYOUT COMPONENTS ────────────────────────────────────────────────────────
function Container({ children, className = "" }) {
  return (
    <div className={`max-w-4xl mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function Section({ children, dark = false, className = "" }) {
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-16 ${
        dark ? "bg-[#1a1814]" : "bg-[#e8e4dc]"
      } ${className}`}
    >
      <Container className="flex flex-col items-center w-full">
        {children}
      </Container>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-[#c85c1a] mb-3 animate-fadeUp">
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
        dark ? "text-[rgba(255,255,255,0.5)]" : "text-[#7a7468]"
      }`}
      style={{ animationDelay: "0.2s" }}
    >
      {children}
    </p>
  );
}

function NoteBox({ children, dark = false }) {
  return (
    <div
      className="w-full max-w-xl p-4 mt-8 rounded-2xl animate-fadeUp"
      style={{
        background: "rgba(200,92,26,0.08)",
        border: "1.5px solid rgba(200,92,26,0.25)",
        animationDelay: "0.5s",
      }}
    >
      <p
        className={`text-sm leading-relaxed ${
          dark ? "text-[rgba(255,255,255,0.7)]" : "text-[#1a1814]"
        }`}
      >
        <span className="text-[#c85c1a] font-mono font-bold mr-2">💡</span>
        {children}
      </p>
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
            background: i === current ? "#c85c1a" : "rgba(26,24,20,0.25)",
            width: i === current ? 8 : 6,
            height: i === current ? 8 : 6,
          }}
        />
      ))}
    </div>
  );
}

function NavBtns({ onPrev, onNext, isFirst, isLast, onDone, t }) {
  const s = t.jsIntro.nav;
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mt-10">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="px-5 py-2.5 rounded-xl border border-[rgba(26,24,20,0.15)] bg-[#f2efe8] font-mono text-sm cursor-pointer transition-all duration-150 disabled:opacity-30"
        style={{ color: isFirst ? "#7a7468" : "#1a1814" }}
      >
        {s.prev}
      </button>
      {isLast ? (
        <button
          onClick={onDone}
          className="px-8 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wide text-white bg-[#c85c1a] border-none cursor-pointer transition-all duration-150 hover:-translate-y-0.5"
          style={{ boxShadow: "0 5px 0 0 #8a3a0a" }}
        >
          {s.start}
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wide text-white bg-[#1a1814] border-none cursor-pointer transition-all duration-150 hover:-translate-y-0.5"
          style={{ boxShadow: "0 4px 0 0 #0a0806" }}
        >
          {s.next}
        </button>
      )}
    </div>
  );
}

// ── SECTION 1 — JS nima? ──────────────────────────────────────────────────────
function Section1({ t }) {
  const s = t.jsIntro.s1;
  const [activeCard, setActiveCard] = useState(null);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* 3 cards: Sen → JavaScript → Brauzer */}
      <div
        className="flex flex-col items-center w-full max-w-2xl gap-4 lg:flex-row animate-scaleIn"
        style={{ animationDelay: "0.3s" }}
      >
        {s.cards.map((card, i) => (
          <div key={i} className="flex items-center flex-1 w-full gap-4">
            <button
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              className="flex flex-col items-center flex-1 gap-3 p-6 transition-all duration-300 border-2 cursor-pointer rounded-2xl"
              style={{
                background: activeCard === i ? "#c85c1a15" : "#f2efe8",
                borderColor:
                  activeCard === i ? "#c85c1a" : "rgba(26,24,20,0.12)",
                transform: activeCard === i ? "translateY(-4px)" : "none",
                boxShadow:
                  activeCard === i ? "0 8px 24px rgba(200,92,26,0.15)" : "none",
              }}
            >
              <span className="text-4xl">{card.icon}</span>
              <span
                className="font-mono text-sm font-bold"
                style={{
                  color: activeCard === i ? "#c85c1a" : "#1a1814",
                }}
              >
                {card.title}
              </span>
              {activeCard === i && (
                <span className="text-sm text-[#7a7468] text-center leading-relaxed animate-fadeIn">
                  {card.desc}
                </span>
              )}
            </button>

            {/* Arrow between cards */}
            {i < s.cards.length - 1 && (
              <div className="flex-col items-center flex-shrink-0 hidden gap-1 lg:flex">
                <div
                  className="font-mono text-[#c85c1a] text-2xl"
                  style={{ animation: "flowPulse 2s ease-in-out infinite" }}
                >
                  →
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {!activeCard && (
        <p
          className="mt-6 font-mono text-sm text-[#7a7468] animate-fadeUp"
          style={{ animationDelay: "0.5s" }}
        >
          👆 Bosing
        </p>
      )}

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ── SECTION 2 — V8 qanday ishlaydi ───────────────────────────────────────────
function Section2({ t }) {
  const s = t.jsIntro.s2;
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveStep((prev) => (prev + 1) % s.steps.length),
      1800,
    );
    return () => clearInterval(timer);
  }, [s.steps.length]);

  return (
    <Section dark>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      {/* Flow steps */}
      <div
        className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-2 mb-8 animate-scaleIn"
        style={{ animationDelay: "0.3s" }}
      >
        {s.steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <div
                className="w-8 h-0.5 rounded-full transition-all duration-500"
                style={{
                  background:
                    i <= activeStep ? "#c85c1a" : "rgba(255,255,255,0.1)",
                }}
              />
            )}
            <div
              className="flex flex-col items-center gap-2 p-4 transition-all duration-500 cursor-pointer rounded-2xl"
              style={{
                background:
                  i === activeStep
                    ? step.color + "20"
                    : "rgba(255,255,255,0.04)",
                border: `1.5px solid ${
                  i === activeStep
                    ? step.color + "60"
                    : "rgba(255,255,255,0.06)"
                }`,
                transform: i === activeStep ? "scale(1.08)" : "scale(1)",
                boxShadow:
                  i === activeStep ? `0 0 20px ${step.color}30` : "none",
                minWidth: 90,
              }}
              onClick={() => setActiveStep(i)}
            >
              <span className="text-2xl">{step.icon}</span>
              <span
                className="font-mono text-[11px] font-bold text-center"
                style={{
                  color:
                    i === activeStep ? step.color : "rgba(255,255,255,0.4)",
                }}
              >
                {step.label}
              </span>
              {i === activeStep && (
                <span className="text-xs text-[rgba(255,255,255,0.5)] text-center max-w-[100px] animate-fadeIn leading-tight">
                  {step.desc}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Code example live */}
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl animate-fadeUp"
        style={{
          border: "1.5px solid rgba(255,255,255,0.08)",
          animationDelay: "0.4s",
        }}
      >
        <div className="bg-[#2c2820] px-5 py-3 flex items-center gap-2 border-b border-[rgba(255,255,255,0.06)]">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div
              key={c}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c }}
            />
          ))}
          <span className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] ml-2">
            main.js
          </span>
        </div>
        <div className="bg-[#1a1814] px-5 py-4">
          <pre className="font-mono text-[13px] text-[#c3e88d] leading-loose m-0">
            <span style={{ color: "#82aaff" }}>console</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>.</span>
            <span style={{ color: "#82aaff" }}>log</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>(</span>
            <span style={{ color: "#c3e88d" }}>"Salom, V8!"</span>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>);</span>
            <span
              className="inline-block w-0.5 h-3.5 bg-[#c85c1a] align-middle ml-0.5"
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </pre>
          <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.06)]">
            <span className="font-mono text-[10px] text-[rgba(255,255,255,0.25)] uppercase tracking-wider">
              Console output:
            </span>
            <div className="font-mono text-sm text-[#4a9e60] mt-1">
              &gt; Salom, V8!
            </div>
          </div>
        </div>
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ── SECTION 3 — HTML + CSS + JS uchlik ───────────────────────────────────────
function Section3({ t }) {
  const s = t.jsIntro.s3;
  const [active, setActive] = useState(null);
  const curr = active !== null ? s.trio[active] : null;

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Trio cards */}
      <div
        className="flex flex-col w-full max-w-2xl gap-4 lg:flex-row animate-scaleIn"
        style={{ animationDelay: "0.3s" }}
      >
        {s.trio.map((item, i) => (
          <button
            key={item.lang}
            onClick={() => setActive(active === i ? null : i)}
            className="flex flex-col flex-1 gap-3 p-5 text-left transition-all duration-300 border-2 cursor-pointer rounded-2xl"
            style={{
              background: active === i ? item.color + "12" : "#f2efe8",
              borderColor: active === i ? item.color : "rgba(26,24,20,0.12)",
              transform: active === i ? "translateY(-4px)" : "none",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <div
                  className="font-mono text-lg font-black"
                  style={{ color: active === i ? item.color : "#1a1814" }}
                >
                  {item.lang}
                </div>
                <div className="text-xs text-[#7a7468]">{item.role}</div>
              </div>
            </div>

            {active === i && (
              <div className="animate-fadeIn">
                <p className="text-sm text-[#1a1814] leading-relaxed mb-3">
                  {item.desc}
                </p>
                <div
                  className="px-3 py-2 font-mono text-xs rounded-lg"
                  style={{
                    background: item.color + "15",
                    color: item.color,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.example}
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {!curr && (
        <p
          className="mt-4 font-mono text-sm text-[#7a7468] animate-fadeUp"
          style={{ animationDelay: "0.4s" }}
        >
          👆 Har birini bosib o'rganing
        </p>
      )}

      {/* How they connect */}
      <div
        className="w-full max-w-xl p-5 mt-8 rounded-2xl animate-fadeUp"
        style={{
          background: "#f2efe8",
          border: "1.5px solid rgba(26,24,20,0.1)",
          animationDelay: "0.4s",
        }}
      >
        <div className="font-mono text-[11px] text-[#7a7468] uppercase tracking-wider mb-3">
          {s.connectionNote}
        </div>
        <div className="bg-[#2c2820] rounded-xl px-4 py-3 font-mono text-xs text-[#c3e88d] leading-loose">
          {s.connectionCode.split("\n").map((line, i) => (
            <div key={i}>
              {i === 0 ? (
                <>
                  <span style={{ color: "#f07178" }}>&lt;link </span>
                  <span style={{ color: "#ffcb6b" }}>rel</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>=</span>
                  <span style={{ color: "#c3e88d" }}>"stylesheet"</span>
                  <span style={{ color: "#ffcb6b" }}> href</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>=</span>
                  <span style={{ color: "#c3e88d" }}>"style.css"</span>
                  <span style={{ color: "#f07178" }}>&gt;</span>
                </>
              ) : (
                <>
                  <span style={{ color: "#f07178" }}>&lt;script </span>
                  <span style={{ color: "#ffcb6b" }}>src</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>=</span>
                  <span style={{ color: "#c3e88d" }}>"main.js"</span>
                  <span style={{ color: "#f07178" }}>&gt;&lt;/script&gt;</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── SECTION 4 — DevTools va console.log ──────────────────────────────────────
function Section4({ t }) {
  const s = t.jsIntro.s4;
  const [activeExample, setActiveExample] = useState(0);

  return (
    <Section dark>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      <div className="flex flex-col w-full max-w-2xl gap-5">
        {/* What is console.log */}
        <div
          className="p-5 rounded-2xl animate-slideLeft"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1.5px solid rgba(255,255,255,0.08)",
            animationDelay: "0.3s",
          }}
        >
          <div className="font-mono text-sm font-bold text-[#c85c1a] mb-2">
            {s.whatIs}
          </div>
          <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed mb-4">
            {s.whatIsDesc}
          </p>
          {/* Visual breakdown */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { text: "console", color: "#82aaff", desc: "Brauzer ob'yekti" },
              { text: ".", color: "rgba(255,255,255,0.3)", desc: "" },
              { text: "log", color: "#c85c1a", desc: "Metod" },
              { text: "(", color: "rgba(255,255,255,0.3)", desc: "" },
              { text: '"Salom"', color: "#c3e88d", desc: "Argument" },
              { text: ")", color: "rgba(255,255,255,0.3)", desc: "" },
            ].map((part, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className="font-mono text-base font-bold"
                  style={{ color: part.color }}
                >
                  {part.text}
                </span>
                {part.desc && (
                  <span className="font-mono text-[9px] text-[rgba(255,255,255,0.3)] mt-0.5">
                    {part.desc}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How to open DevTools */}
        <div
          className="p-5 rounded-2xl animate-slideRight"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1.5px solid rgba(255,255,255,0.08)",
            animationDelay: "0.35s",
          }}
        >
          <div className="font-mono text-sm font-bold text-[#c85c1a] mb-3">
            {s.howOpen}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {s.shortcuts.map((sc, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <kbd
                  className="font-mono text-[11px] font-bold px-2 py-1 rounded-lg flex-shrink-0"
                  style={{
                    background: "#c85c1a20",
                    color: "#c85c1a",
                    border: "1px solid #c85c1a40",
                  }}
                >
                  {sc.key}
                </kbd>
                <span className="text-xs text-[rgba(255,255,255,0.5)]">
                  {sc.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive examples */}
        <div className="animate-fadeUp" style={{ animationDelay: "0.4s" }}>
          <div className="font-mono text-[11px] text-[rgba(255,255,255,0.3)] uppercase tracking-wider mb-2">
            Misollar — bosib ko'ring:
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {s.examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setActiveExample(i)}
                className="px-3 py-1.5 rounded-lg font-mono text-xs cursor-pointer border-none transition-all"
                style={{
                  background:
                    activeExample === i ? "#c85c1a" : "rgba(255,255,255,0.06)",
                  color: activeExample === i ? "#fff" : "rgba(255,255,255,0.5)",
                }}
              >
                {ex.desc}
              </button>
            ))}
          </div>
          <div
            className="overflow-hidden rounded-xl"
            style={{ border: "1.5px solid rgba(255,255,255,0.08)" }}
          >
            <div className="bg-[#2c2820] px-4 py-3 flex items-center gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
              <span className="font-mono text-[10px] text-[rgba(255,255,255,0.25)] ml-2">
                console
              </span>
            </div>
            <div className="bg-[#1a1814] px-4 py-3">
              <div className="font-mono text-sm text-[#c3e88d] mb-2">
                &gt; {s.examples[activeExample].code}
              </div>
              <div
                className="pl-2 font-mono text-sm border-l-2"
                style={{
                  color: s.examples[activeExample].isError
                    ? "#e06c75"
                    : "#4a9e60",
                  borderColor: s.examples[activeExample].isError
                    ? "#e06c75"
                    : "#4a9e60",
                }}
              >
                {s.examples[activeExample].result}
              </div>
            </div>
          </div>
        </div>
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ── SECTION 5 — Xatolar ───────────────────────────────────────────────────────
function Section5({ t }) {
  const s = t.jsIntro.s5;
  const [activeError, setActiveError] = useState(0);
  const curr = s.types[activeError];

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      <div className="flex flex-col w-full max-w-2xl gap-5">
        {/* Error type selector */}
        <div
          className="flex gap-2 animate-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          {s.types.map((err, i) => (
            <button
              key={err.name}
              onClick={() => setActiveError(i)}
              className="flex-1 py-2.5 px-3 rounded-xl font-mono text-xs font-bold cursor-pointer border-none transition-all duration-200"
              style={{
                background: activeError === i ? err.color + "20" : "#f2efe8",
                border: `1.5px solid ${
                  activeError === i ? err.color : "rgba(26,24,20,0.1)"
                }`,
                color: activeError === i ? err.color : "#7a7468",
              }}
            >
              {err.name}
            </button>
          ))}
        </div>

        {/* Error detail */}
        <div
          className="p-5 rounded-2xl animate-fadeIn"
          style={{
            background: curr.color + "08",
            border: `1.5px solid ${curr.color}30`,
          }}
        >
          <p className="text-sm text-[#1a1814] leading-relaxed mb-4">
            {curr.desc}
          </p>
          {/* Error in console */}
          <div
            className="mb-3 overflow-hidden rounded-xl"
            style={{ border: `1.5px solid ${curr.color}40` }}
          >
            <div
              className="px-4 py-2 font-mono text-[10px] uppercase tracking-wider"
              style={{ background: curr.color + "15", color: curr.color }}
            >
              Console — xato
            </div>
            <div className="bg-[#1a1814] px-4 py-3">
              <div className="font-mono text-sm text-[rgba(255,255,255,0.6)] mb-1">
                &gt; {curr.example}
              </div>
              <div className="font-mono text-sm" style={{ color: curr.color }}>
                ✗ {curr.name}: {curr.fix.split(":")[0]}
              </div>
            </div>
          </div>
          {/* Fix */}
          <div
            className="flex items-start gap-3 p-3 rounded-xl"
            style={{
              background: "#4a9e6015",
              border: "1px solid #4a9e6030",
            }}
          >
            <span className="text-[#4a9e60] text-base flex-shrink-0">✓</span>
            <div>
              <div className="font-mono text-[11px] text-[#4a9e60] mb-0.5 uppercase tracking-wider">
                Yechim:
              </div>
              <p className="text-sm text-[#1a1814]">{curr.fix}</p>
            </div>
          </div>
        </div>

        {/* How to read an error */}
        <div
          className="p-5 rounded-2xl animate-slideLeft"
          style={{
            background: "#f2efe8",
            border: "1.5px solid rgba(26,24,20,0.1)",
            animationDelay: "0.3s",
          }}
        >
          <div className="font-mono text-sm font-bold text-[#1a1814] mb-3">
            {s.howToRead}
          </div>
          <div className="flex flex-col gap-2">
            {s.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center flex-shrink-0 w-6 h-6 font-mono text-xs font-bold text-white rounded-full"
                  style={{ background: "#c85c1a" }}
                >
                  {i + 1}
                </div>
                <p className="text-sm text-[#1a1814] leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <NoteBox>{s.note}</NoteBox>

      {/* Final CTA */}
      <div
        className="flex flex-col items-center gap-4 mt-10 animate-fadeUp"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="font-mono text-sm text-[#7a7468] uppercase tracking-widest">
          Tayyor bo'ldingizmi?
        </div>
      </div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN — JSIntroPage
// ══════════════════════════════════════════════════════════════════════════════
const TOTAL = 5;

export default function JSIntroPage({ onDone }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const sectionRefs = useRef([]);

  // Mark as seen in localStorage
  useEffect(() => {
    localStorage.setItem("jsIntroSeen", "true");
  }, []);

  const goToCourses = () => {
    if (onDone) onDone();
    else navigate("/courses");
  };

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
      <ProgressDots total={TOTAL} current={current} onGo={scrollTo} />

      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl"
        style={{
          background: "rgba(26,24,20,0.9)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 3px 0 0 #0a0806",
        }}
      >
        <div className="flex items-center justify-between max-w-4xl px-6 py-3 mx-auto md:px-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c85c1a] rounded-sm" />
            <span className="font-mono text-sm font-bold tracking-widest text-white uppercase">
              {t.jsIntro.topBar.title}
            </span>
            <span className="font-mono text-xs text-[rgba(255,255,255,0.3)] ml-2">
              {t.jsIntro.topBar.subtitle}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-28 h-1 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#c85c1a] rounded-full transition-all duration-500"
                style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
              />
            </div>
            <span className="font-mono text-xs text-[rgba(255,255,255,0.35)]">
              {current + 1}/{TOTAL}
            </span>
          </div>
          <button
            onClick={goToCourses}
            className="font-mono text-xs text-[rgba(255,255,255,0.35)] hover:text-[#c85c1a] border-none bg-transparent cursor-pointer transition-colors uppercase tracking-wider"
          >
            {t.jsIntro.topBar.skip}
          </button>
        </div>
      </div>

      {/* Sections */}
      <div style={{ paddingTop: 48 }}>
        {sections.map((section, i) => (
          <div key={i} ref={(el) => (sectionRefs.current[i] = el)}>
            {section}
            {i < TOTAL - 1 && (
              <div
                className="flex justify-center pb-10"
                style={{
                  background: i % 2 === 0 ? "#e8e4dc" : "#1a1814",
                }}
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
      </div>
    </div>
  );
}
