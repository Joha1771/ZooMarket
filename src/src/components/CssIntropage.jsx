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

const CSS_COLOR = "#264de4";
const CSS_COLOR_LIGHT = "#4a6ef5";

function Section({ children, dark = false, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-24 ${dark ? "bg-[#0f1020]" : "bg-[#eef0f8]"} ${className}`}
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
      style={{ color: CSS_COLOR_LIGHT }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children, dark = false }) {
  return (
    <h2
      className={`font-mono font-black text-[clamp(28px,4vw,52px)] uppercase tracking-tight leading-none mb-6 animate-fadeUp text-center ${dark ? "text-white" : "text-[#0f1020]"}`}
      style={{ animationDelay: "0.1s" }}
    >
      {children}
    </h2>
  );
}

function SectionSub({ children, dark = false }) {
  return (
    <p
      className={`text-base text-center max-w-xl mb-10 leading-relaxed animate-fadeUp ${dark ? "text-[rgba(255,255,255,0.55)]" : "text-[#4a4a6a]"}`}
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
        background: dark ? "rgba(74,110,245,0.10)" : "rgba(38,77,228,0.07)",
        borderColor: "rgba(74,110,245,0.25)",
        color: dark ? "rgba(255,255,255,0.6)" : "#4a4a6a",
      }}
    >
      {children}
    </div>
  );
}

function NavBtns({ onPrev, onNext, isFirst, isLast, onDone, t }) {
  const n = t.cssIntro.nav;
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mt-10">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="px-5 py-2.5 rounded-xl font-mono text-sm cursor-pointer transition-all duration-150 disabled:opacity-30"
        style={{
          border: "1px solid rgba(38,77,228,0.2)",
          background: "#eef0f8",
          color: isFirst ? "#9090b0" : "#0f1020",
        }}
      >
        {n.prev}
      </button>
      {isLast ? (
        <button
          onClick={onDone}
          className="px-7 py-2.5 rounded-xl font-mono text-sm font-black uppercase tracking-wide cursor-pointer border-none text-white"
          style={{ background: CSS_COLOR, boxShadow: `0 4px 0 0 #1a2fa0` }}
        >
          {n.start}
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-5 py-2.5 rounded-xl font-mono text-sm font-black uppercase tracking-wide cursor-pointer border-none text-white"
          style={{ background: CSS_COLOR, boxShadow: `0 4px 0 0 #1a2fa0` }}
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
            background: i === current ? CSS_COLOR : "rgba(38,77,228,0.25)",
            width: i === current ? 8 : 6,
            height: i === current ? 8 : 6,
          }}
        />
      ))}
    </div>
  );
}

// ─── SECTION 1 — What is CSS ─────────────────────────────────────────────────
function Section1({ t }) {
  const s = t.cssIntro.s1;
  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Analogy */}
      <div
        className="w-full max-w-xl p-5 mb-8 border rounded-2xl animate-scaleIn"
        style={{
          background: "rgba(38,77,228,0.06)",
          borderColor: "rgba(38,77,228,0.2)",
          animationDelay: "0.2s",
        }}
      >
        <div className="flex items-start gap-3">
          <span className="text-3xl">{s.analogy.icon}</span>
          <div>
            <div
              className="mb-1 font-mono text-sm font-bold"
              style={{ color: CSS_COLOR }}
            >
              {s.analogy.title}
            </div>
            <p className="text-sm text-[#4a4a6a] leading-relaxed">
              {s.analogy.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Before/After demo */}
      <div className="grid w-full max-w-xl grid-cols-2 gap-4 mb-6">
        <div className="animate-popIn" style={{ animationDelay: "0.2s" }}>
          <div className="font-mono text-[10px] text-[#9090b0] mb-2 uppercase tracking-wider">
            Без CSS
          </div>
          <div
            className="bg-white rounded-xl p-4 border border-[rgba(38,77,228,0.1)]"
            style={{ fontFamily: "serif" }}
          >
            <div style={{ fontSize: 18, fontWeight: "bold", marginBottom: 4 }}>
              Sarlavha
            </div>
            <div style={{ fontSize: 13, color: "#333", marginBottom: 8 }}>
              Bu oddiy matn paragraf.
            </div>
            <button
              style={{ padding: "4px 8px", border: "2px outset", fontSize: 12 }}
            >
              Tugma
            </button>
          </div>
        </div>
        <div className="animate-popIn" style={{ animationDelay: "0.3s" }}>
          <div
            className="font-mono text-[10px] mb-2 uppercase tracking-wider"
            style={{ color: CSS_COLOR }}
          >
            CSS bilan
          </div>
          <div
            className="p-4 border rounded-xl"
            style={{
              background: "linear-gradient(135deg,#264de4 0%,#4a6ef5 100%)",
              borderColor: "transparent",
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: "black",
                marginBottom: 4,
                color: "white",
                fontFamily: "monospace",
              }}
            >
              Sarlavha
            </div>
            <div
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.7)",
                marginBottom: 8,
              }}
            >
              Bu oddiy matn paragraf.
            </div>
            <button
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                border: "none",
                background: "white",
                color: "#264de4",
                fontWeight: "bold",
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              Tugma
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid w-full max-w-xl grid-cols-3 gap-3">
        {s.cards.map((c, i) => (
          <div
            key={i}
            className="p-4 text-center border rounded-xl animate-popIn"
            style={{
              background: "#f4f5fd",
              borderColor: "rgba(38,77,228,0.12)",
              animationDelay: `${0.3 + i * 0.08}s`,
            }}
          >
            <div className="mb-2 text-2xl">{c.icon}</div>
            <div className="font-mono font-bold text-xs text-[#0f1020] mb-0.5">
              {c.title}
            </div>
            <div className="font-mono text-[10px] text-[#9090b0]">{c.desc}</div>
          </div>
        ))}
      </div>

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 2 — Selector/Property/Value ─────────────────────────────────────
function Section2({ t }) {
  const s = t.cssIntro.s2;
  const [activeSelector, setActiveSelector] = useState(0);

  return (
    <Section dark>
      <SectionLabel dark>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      {/* CSS rule anatomy */}
      <div
        className="w-full max-w-xl p-5 font-mono text-lg border mb-7 rounded-2xl animate-scaleIn"
        style={{
          animationDelay: "0.2s",
          background: "rgba(255,255,255,0.04)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex flex-wrap items-center gap-2">
          {s.parts.map((part, i) => (
            <span key={i} className="flex flex-col items-center gap-1">
              <span
                className="px-3 py-1.5 rounded-lg font-bold text-sm"
                style={{
                  background: part.color + "25",
                  color: part.color,
                  border: `1px solid ${part.color}40`,
                }}
              >
                {part.example}
              </span>
              <span className="text-[10px] text-[rgba(255,255,255,0.4)]">
                {part.name}
              </span>
              {i < s.parts.length - 1 && (
                <span className="text-[rgba(255,255,255,0.2)] text-xs"></span>
              )}
            </span>
          ))}
          <span className="text-[rgba(255,255,255,0.3)] text-lg ml-1">
            {"{ }"}
          </span>
        </div>
        <div className="mt-3 text-xs text-[rgba(255,255,255,0.35)] border-t border-[rgba(255,255,255,0.06)] pt-3">
          {s.rule}
        </div>
      </div>

      {/* Selectors */}
      <div className="w-full max-w-xl">
        <div className="font-mono text-[11px] text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-3">
          Selektor turlari
        </div>
        <div className="flex flex-col gap-2">
          {s.selectors.map((sel, i) => (
            <div
              key={i}
              onClick={() => setActiveSelector(i)}
              className="flex items-center gap-3 px-4 py-3 transition-all duration-200 border cursor-pointer rounded-xl"
              style={{
                borderColor:
                  activeSelector === i ? sel.color : "rgba(255,255,255,0.06)",
                background:
                  activeSelector === i
                    ? sel.color + "15"
                    : "rgba(255,255,255,0.03)",
              }}
            >
              <code
                className="font-mono text-sm font-bold px-2.5 py-0.5 rounded flex-shrink-0"
                style={{ background: sel.color + "25", color: sel.color }}
              >
                {sel.sel}
              </code>
              <span className="font-mono text-xs text-[rgba(255,255,255,0.55)]">
                {sel.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 3 — Cascade / Specificity ───────────────────────────────────────
function Section3({ t }) {
  const s = t.cssIntro.s3;
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setShown((p) => Math.min(p + 1, s.rules.length - 1)),
      700,
    );
    return () => clearInterval(t);
  }, [s.rules.length]);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      {/* Waterfall of rules */}
      <div className="flex flex-col w-full max-w-xl gap-2 mb-6">
        {s.rules.map((rule, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 transition-all duration-500 border rounded-xl"
            style={{
              opacity: i <= shown ? 1 : 0.2,
              transform: i <= shown ? "none" : "translateY(8px)",
              borderColor: i === 0 ? rule.color : "rgba(26,24,20,0.10)",
              background: i === 0 ? rule.color + "10" : "#f4f5fd",
            }}
          >
            <span
              className="font-mono text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: rule.color, color: "white" }}
            >
              {rule.priority}
            </span>
            <span
              className="font-mono text-sm font-bold"
              style={{ color: rule.color }}
            >
              {rule.title}
            </span>
            <span className="font-mono text-xs text-[#4a4a6a] ml-1">
              {rule.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Live demo */}
      <div
        className="w-full max-w-xl bg-[#0f1020] rounded-2xl p-5 border border-[rgba(255,255,255,0.06)] font-mono text-xs animate-scaleIn"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="text-[#7a7468] mb-3 text-[10px] uppercase tracking-wider">
          Demo — qaysi qoida g'alaba qiladi?
        </div>
        <div className="text-[#c792ea]">
          p {"{"} color: <span className="text-[#f78c6c]">blue</span>; {"}"}
        </div>
        <div className="text-[#c792ea]">
          .text {"{"} color: <span className="text-[#f78c6c]">green</span>;{" "}
          {"}"}
        </div>
        <div className="text-[#c792ea]">
          #main {"{"} color: <span className="text-[#f78c6c]">red</span>; {"}"}
        </div>
        <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.5)]">
          {"<p class='text' id='main'>"}
          <span style={{ color: "#e06c75" }}> ← Bu matn qizil bo'ladi</span>
        </div>
      </div>

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 4 — Box Model ───────────────────────────────────────────────────
function Section4({ t }) {
  const s = t.cssIntro.s4;
  const [activeLayer, setActiveLayer] = useState(null);

  return (
    <Section dark>
      <SectionLabel dark>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <SectionSub dark>{s.sub}</SectionSub>

      <div className="grid items-center w-full max-w-xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* Interactive Box Model visual */}
        <div className="flex justify-center">
          <div className="relative">
            {[
              { name: "Margin", color: "#b07820", pad: "p-8" },
              { name: "Border", color: "#c85c1a", pad: "p-5" },
              { name: "Padding", color: "#4a9e60", pad: "p-4" },
            ].map((layer, i) => (
              <div
                key={layer.name}
                onClick={() =>
                  setActiveLayer(activeLayer === layer.name ? null : layer.name)
                }
                className={`${layer.pad} rounded-xl cursor-pointer transition-all duration-200 border-2`}
                style={{
                  borderColor:
                    activeLayer === layer.name
                      ? layer.color
                      : layer.color + "60",
                  background:
                    activeLayer === layer.name
                      ? layer.color + "35"
                      : layer.color + "12",
                }}
              >
                <span
                  className="absolute font-mono text-[9px] font-bold px-1 rounded"
                  style={{
                    top: i * 2 + 2,
                    left: i * 2 + 6,
                    color: layer.color,
                    background: "#0f1020",
                  }}
                >
                  {layer.name.toUpperCase()}
                </span>
                {i === 2 && (
                  <div
                    className="px-6 py-3 font-mono text-xs font-bold text-center border-2 border-dashed rounded-lg"
                    style={{
                      color: CSS_COLOR_LIGHT,
                      borderColor: CSS_COLOR + "50",
                      background: CSS_COLOR + "20",
                    }}
                  >
                    CONTENT
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Layer descriptions */}
        <div className="flex flex-col gap-2">
          {s.layers.map((layer, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 rounded-xl border transition-all duration-200 cursor-pointer"
              onClick={() =>
                setActiveLayer(activeLayer === layer.name ? null : layer.name)
              }
              style={{
                borderColor:
                  activeLayer === layer.name
                    ? layer.color
                    : "rgba(255,255,255,0.08)",
                background:
                  activeLayer === layer.name
                    ? layer.color + "15"
                    : "rgba(255,255,255,0.03)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                style={{ background: layer.color }}
              />
              <div>
                <div className="font-mono text-xs font-bold text-white mb-0.5">
                  {layer.name}
                </div>
                <div className="font-mono text-[10px] text-[rgba(255,255,255,0.45)]">
                  {layer.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tip */}
      <div
        className="w-full max-w-xl px-4 py-3 mt-5 font-mono text-xs border rounded-xl animate-fadeUp"
        style={{
          animationDelay: "0.3s",
          background: "rgba(74,110,245,0.12)",
          borderColor: "rgba(74,110,245,0.3)",
          color: "#82aaff",
        }}
      >
        💡 {s.tip}
      </div>

      <NoteBox dark>{s.note}</NoteBox>
    </Section>
  );
}

// ─── SECTION 5 — Where to write CSS ──────────────────────────────────────────
function Section5({ t }) {
  const s = t.cssIntro.s5;
  const [active, setActive] = useState(0);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <SectionSub>{s.sub}</SectionSub>

      <div className="flex flex-col w-full max-w-xl gap-4">
        {s.methods.map((method, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className="overflow-hidden transition-all duration-200 border cursor-pointer rounded-2xl animate-slideLeft"
            style={{
              borderColor: active === i ? method.color : "rgba(38,77,228,0.12)",
              background: active === i ? method.color + "08" : "#f4f5fd",
              animationDelay: `${0.2 + i * 0.08}s`,
            }}
          >
            <div className="flex items-center gap-3 px-5 py-3.5">
              {method.recommended && (
                <span
                  className="font-mono text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider flex-shrink-0"
                  style={{
                    background: method.color + "20",
                    color: method.color,
                  }}
                >
                  ✓ To'g'ri
                </span>
              )}
              {!method.recommended && i === 2 && (
                <span
                  className="font-mono text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider flex-shrink-0"
                  style={{
                    background: method.color + "20",
                    color: method.color,
                  }}
                >
                  ✗ Qochish
                </span>
              )}
              <span
                className="font-mono text-sm font-bold"
                style={{ color: active === i ? method.color : "#0f1020" }}
              >
                {method.title}
              </span>
              <span className="ml-auto font-mono text-[10px] text-[#9090b0]">
                {method.pros}
              </span>
            </div>
            {active === i && (
              <div
                className="px-5 pb-4 font-mono text-xs leading-relaxed border-t"
                style={{
                  borderColor: method.color + "20",
                  color: method.color,
                  background: method.color + "05",
                }}
              >
                <pre className="mt-3 whitespace-pre-wrap">{method.code}</pre>
              </div>
            )}
          </div>
        ))}
      </div>

      <NoteBox>{s.note}</NoteBox>
    </Section>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function CssIntroPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goToCourses = () => {
    localStorage.setItem("cssIntroSeen", "true");
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
      <div
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: "#0f1020", borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center max-w-3xl gap-4 px-6 py-3 mx-auto">
          <span className="font-mono text-sm font-black text-white">
            {t.cssIntro.topBar.title}
          </span>
          <span className="font-mono text-sm text-[rgba(255,255,255,0.35)]">
            {t.cssIntro.topBar.subtitle}
          </span>
          <div className="flex-1 h-0.5 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden mx-2">
            <div
              className="h-full transition-all duration-500 rounded-full"
              style={{
                width: `${((current + 1) / TOTAL) * 100}%`,
                background: CSS_COLOR_LIGHT,
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = CSS_COLOR_LIGHT)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
            }
          >
            {t.cssIntro.topBar.skip}
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
                style={{ background: i % 2 === 0 ? "#eef0f8" : "#0f1020" }}
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
          style={{ background: "#eef0f8" }}
        >
          <button
            onClick={goToCourses}
            className="px-10 py-4 font-mono text-base font-black tracking-wide text-white uppercase border-none cursor-pointer rounded-2xl"
            style={{ background: CSS_COLOR, boxShadow: "0 6px 0 0 #1a2fa0" }}
          >
            {t.cssIntro.nav.start}
          </button>
        </div>
      </div>
    </div>
  );
}
