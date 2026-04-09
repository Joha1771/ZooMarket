import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "../i18n/index";
import { motion, AnimatePresence, useSpring, useScroll } from "motion/react";

// ─── SHARED EASING ────────────────────────────────────────────────────────────
const EASE_OUT = [0.16, 1, 0.3, 1];
const VIEWPORT = { once: true, margin: "-80px" };

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.7, ease: EASE_OUT, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: VIEWPORT,
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.88 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: EASE_OUT, delay },
});

const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: EASE_OUT, delay },
});

const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.6, ease: EASE_OUT, delay },
});

const popIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.7, y: 10 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay },
});

// ─── LAYOUT ───────────────────────────────────────────────────────────────────
function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

function Section({ children, dark = false, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-26 ${dark ? "bg-[#1a1814]" : "bg-[#e8e4dc]"} ${className}`}
    >
      <Container className="flex flex-col items-center w-full">
        {children}
      </Container>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <motion.p
      {...fadeIn(0)}
      className="font-mono text-sm uppercase tracking-[0.14em] text-[#c85c1a] mb-3"
    >
      {children}
    </motion.p>
  );
}

function SectionTitle({ children, dark = false }) {
  return (
    <motion.h2
      {...fadeUp(0.08)}
      className={`font-mono font-black text-[clamp(32px,4vw,56px)] uppercase tracking-tight leading-none mb-6 text-center ${dark ? "text-white" : "text-[#1a1814]"}`}
    >
      {children}
    </motion.h2>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function ProgressDots({ total, current, onGo }) {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-2.5 hidden lg:flex">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onGo(i)}
          animate={{
            background: i === current ? "#c85c1a" : "rgba(26,24,20,0.25)",
            width: i === current ? 8 : 6,
            height: i === current ? 8 : 6,
          }}
          transition={{ duration: 0.25 }}
          className="p-0 border-none rounded-full cursor-pointer"
        />
      ))}
    </div>
  );
}

function NavBtns({ onPrev, onNext, isFirst, isLast, onDone, t }) {
  const i = t.intro;
  return (
    <div className="flex items-center justify-between w-full max-w-2xl mt-10">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="px-5 py-2.5 rounded-xl border border-[rgba(26,24,20,0.15)] bg-[#f2efe8] font-mono text-sm cursor-pointer transition-all duration-150 disabled:opacity-30"
        style={{ color: isFirst ? "#7a7468" : "#1a1814" }}
      >
        {i.nav.prev}
      </button>
      {isLast ? (
        <button
          onClick={onDone}
          className="px-8 py-3 rounded-xl font-mono text-sm font-bold uppercase tracking-wide text-white bg-[#c85c1a] border-none cursor-pointer transition-all duration-150 hover:-translate-y-0.5"
          style={{ boxShadow: "0 5px 0 0 #8a3a0a" }}
        >
          {i.nav.start}
        </button>
      ) : (
        <button
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl font-mono text-sm font-bold uppercase tracking-wide text-white bg-[#1a1814] border-none cursor-pointer transition-all duration-150 hover:-translate-y-0.5"
          style={{ boxShadow: "0 4px 0 0 #0a0806" }}
        >
          {i.nav.next}
        </button>
      )}
    </div>
  );
}

// ── SECTION 1 ─────────────────────────────────────────────────────────────────
function Section1({ t }) {
  const s = t.intro.s1;
  const [opened, setOpened] = useState(false);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-lg text-[#7a7468] text-center max-w-md mb-10 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      <motion.div
        {...scaleIn(0.3)}
        className="relative cursor-pointer select-none"
        style={{ perspective: "800px" }}
        onClick={() => setOpened((v) => !v)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div
          className="relative w-52 h-64 rounded-2xl border-2 border-[rgba(26,24,20,0.15)]"
          style={{
            background: "linear-gradient(145deg, #2c2820 0%, #1a1814 100%)",
            boxShadow:
              "8px 8px 0 0 #0a0806, 0 20px 60px rgba(26,24,20,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            transformStyle: "preserve-3d",
            transform: "rotateY(-8deg) rotateX(4deg)",
          }}
        >
          <motion.div
            className="absolute top-5 right-5 w-4 h-4 rounded-full border border-[rgba(255,255,255,0.15)]"
            animate={{
              background: opened ? "#4a9e60" : "#c85c1a",
              boxShadow: opened
                ? "0 0 10px 3px rgba(74,158,96,0.5)"
                : "0 0 6px 2px rgba(200,92,26,0.4)",
            }}
            transition={{ duration: 0.3 }}
          />
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute rounded-sm left-5"
              style={{
                top: 20 + i * 18,
                width: 60,
                height: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          ))}
          <div className="absolute flex gap-1 bottom-8 left-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width: 4,
                  height: 4,
                  background: "rgba(255,255,255,0.08)",
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-5 right-5 font-mono text-xs text-[rgba(255,255,255,0.2)] uppercase tracking-widest">
            VizoPC
          </div>

          {/* Lid */}
          <motion.div
            className="absolute top-0 left-0 w-full overflow-hidden rounded-t-2xl"
            style={{
              height: "50%",
              transformOrigin: "top center",
              transformStyle: "preserve-3d",
              background: "linear-gradient(180deg, #3a3428 0%, #2c2820 100%)",
              border: "2px solid rgba(255,255,255,0.08)",
              borderBottom: "none",
              zIndex: 10,
            }}
            animate={{ rotateX: opened ? -115 : 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="font-mono text-xs text-[rgba(255,255,255,0.3)] uppercase tracking-wider">
                {opened ? s.opened : s.closed}
              </div>
            </div>
          </motion.div>

          {/* Components inside */}
          <AnimatePresence>
            {opened && (
              <motion.div
                className="absolute inset-0 rounded-2xl flex flex-wrap gap-1.5 p-4 items-center justify-center"
                style={{ zIndex: 5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[
                  { label: "CPU", color: "#c85c1a" },
                  { label: "RAM", color: "#185FA5" },
                  { label: "GPU", color: "#4a9e60" },
                  { label: "SSD", color: "#993556" },
                  { label: "PSU", color: "#b07820" },
                ].map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, scale: 0.6, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{
                      delay: i * 0.07,
                      ease: [0.34, 1.56, 0.64, 1],
                      duration: 0.4,
                    }}
                    className="px-2 py-1 font-mono text-xs font-bold rounded"
                    style={{
                      background: c.color + "25",
                      border: `1px solid ${c.color}60`,
                      color: c.color,
                    }}
                  >
                    {c.label}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className="mx-auto mt-3 rounded-full"
          style={{
            width: 160,
            height: 16,
            background: "rgba(26,24,20,0.2)",
            filter: "blur(12px)",
          }}
        />
      </motion.div>

      <motion.p
        {...fadeIn(0.5)}
        className="mt-6 font-mono text-sm text-[#7a7468]"
      >
        {s.hint}
      </motion.p>
    </Section>
  );
}

// ── SECTION 2 ─────────────────────────────────────────────────────────────────
const COMP_META = [
  { id: "cpu", icon: "⚙️", color: "#c85c1a", pos: { top: "15%", left: "20%" } },
  { id: "ram", icon: "🧠", color: "#185FA5", pos: { top: "15%", left: "55%" } },
  { id: "gpu", icon: "🎮", color: "#4a9e60", pos: { top: "50%", left: "10%" } },
  { id: "ssd", icon: "💾", color: "#993556", pos: { top: "50%", left: "60%" } },
  { id: "mb", icon: "🔌", color: "#b07820", pos: { top: "75%", left: "35%" } },
];

function Section2({ t }) {
  const s = t.intro.s2;
  const [active, setActive] = useState(null);
  const activeComp = active
    ? { ...COMP_META.find((c) => c.id === active), ...s[active] }
    : null;

  return (
    <Section dark>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-base text-[rgba(255,255,255,0.45)] text-center max-w-md mb-8 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      <motion.div
        {...scaleIn(0.25)}
        className="relative w-full max-w-lg"
        style={{ height: 280 }}
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "repeating-linear-gradient(0deg,rgba(200,92,26,0.03) 0px,rgba(200,92,26,0.03) 1px,transparent 1px,transparent 28px),repeating-linear-gradient(90deg,rgba(200,92,26,0.03) 0px,rgba(200,92,26,0.03) 1px,transparent 1px,transparent 28px)",
            border: "1.5px solid rgba(255,255,255,0.06)",
            backgroundColor: "#2c2820",
          }}
        />
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {COMP_META.map((c) =>
            COMP_META.filter((t) => t.id !== c.id)
              .slice(0, 1)
              .map((t2) => (
                <line
                  key={`${c.id}-${t2.id}`}
                  x1={`calc(${c.pos.left} + 20px)`}
                  y1={`calc(${c.pos.top} + 16px)`}
                  x2={`calc(${t2.pos.left} + 20px)`}
                  y2={`calc(${t2.pos.top} + 16px)`}
                  stroke="rgba(200,92,26,0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              )),
          )}
        </svg>
        {COMP_META.map((comp, i) => (
          <motion.button
            key={comp.id}
            onClick={() => setActive(active === comp.id ? null : comp.id)}
            className="absolute flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer"
            style={{ ...comp.pos, zIndex: 2 }}
            {...popIn(0.3 + i * 0.08)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="flex items-center justify-center w-10 h-10 text-lg rounded-xl"
              animate={{
                background: active === comp.id ? comp.color : comp.color + "20",
                border: `1.5px solid ${comp.color}${active === comp.id ? "ff" : "50"}`,
                boxShadow:
                  active === comp.id
                    ? `0 0 16px ${comp.color}60`
                    : "0 0 0px transparent",
                scale: active === comp.id ? 1.15 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {comp.icon}
            </motion.div>
            <span
              className="font-mono text-[9px] font-bold"
              style={{ color: comp.color }}
            >
              {comp.id.toUpperCase()}
            </span>
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="mt-6 w-full max-w-lg min-h-[80px] rounded-2xl p-5"
        animate={{
          background: activeComp
            ? activeComp.color + "12"
            : "rgba(255,255,255,0.03)",
          border: `1.5px solid ${activeComp ? activeComp.color + "35" : "rgba(255,255,255,0.06)"}`,
        }}
        transition={{ duration: 0.25 }}
      >
        <AnimatePresence mode="wait">
          {activeComp ? (
            <motion.div
              key={activeComp.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
            >
              <div
                className="mb-1 font-mono text-sm font-bold"
                style={{ color: activeComp.color }}
              >
                {activeComp.title}
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                {activeComp.desc}
              </p>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-[rgba(255,255,255,0.25)] font-mono text-center leading-relaxed"
            >
              {s.clickHint}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

// ── SECTION 3 ─────────────────────────────────────────────────────────────────
function Section3({ t }) {
  const s = t.intro.s3;
  const [connected, setConnected] = useState([]);
  const toggle = (id) =>
    setConnected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-lg text-[#7a7468] text-center max-w-md mb-10 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      <div className="flex flex-col w-full max-w-2xl gap-6 lg:flex-row">
        {/* Input devices */}
        <motion.div
          {...slideLeft(0.3)}
          className="flex-1 p-5 rounded-2xl"
          style={{
            background: "#f2efe8",
            border: "1.5px solid rgba(26,24,20,0.1)",
          }}
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[#4a9e60] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4a9e60]" />
            {s.inputLabel}
          </div>
          <div className="flex flex-col gap-2">
            {s.input.map((d, i) => {
              const id = `in-${i}`;
              const on = connected.includes(id);
              return (
                <motion.button
                  key={id}
                  onClick={() => toggle(id)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer border-none text-left"
                  animate={{
                    background: on ? "#4a9e6015" : "transparent",
                    border: `1.5px solid ${on ? "#4a9e6050" : "rgba(26,24,20,0.08)"}`,
                  }}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-xl">{d.icon}</span>
                  <div>
                    <div
                      className="font-mono text-sm font-bold"
                      style={{ color: on ? "#2a6040" : "#1a1814" }}
                    >
                      {d.name}
                    </div>
                    <div className="text-xs text-[#7a7468]">{d.desc}</div>
                  </div>
                  <motion.div
                    className="w-2 h-2 ml-auto rounded-full"
                    animate={{
                      background: on ? "#4a9e60" : "rgba(26,24,20,0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* PC center */}
        <motion.div
          {...scaleIn(0.4)}
          className="flex items-center justify-center"
        >
          <motion.div
            className="flex flex-col items-center justify-center w-16 h-20 gap-1 font-mono text-xs font-bold tracking-wider text-white uppercase rounded-xl"
            style={{
              background: "linear-gradient(145deg,#2c2820,#1a1814)",
              border: "1.5px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 0 0 #0a0806, 0 16px 30px rgba(0,0,0,0.3)",
            }}
            animate={{ scale: connected.length > 0 ? [1, 1.06, 1] : 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-xl">🖥️</div>
            <span style={{ color: "#c85c1a" }}>PC</span>
          </motion.div>
        </motion.div>

        {/* Output devices */}
        <motion.div
          {...slideRight(0.3)}
          className="flex-1 p-5 rounded-2xl"
          style={{
            background: "#f2efe8",
            border: "1.5px solid rgba(26,24,20,0.1)",
          }}
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[#c85c1a] mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c85c1a]" />
            {s.outputLabel}
          </div>
          <div className="flex flex-col gap-2">
            {s.output.map((d, i) => {
              const id = `out-${i}`;
              const on = connected.includes(id);
              return (
                <motion.button
                  key={id}
                  onClick={() => toggle(id)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer border-none text-left"
                  animate={{
                    background: on ? "#c85c1a10" : "transparent",
                    border: `1.5px solid ${on ? "#c85c1a40" : "rgba(26,24,20,0.08)"}`,
                  }}
                  whileHover={{ x: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <span className="text-xl">{d.icon}</span>
                  <div>
                    <div
                      className="font-mono text-sm font-bold"
                      style={{ color: on ? "#c85c1a" : "#1a1814" }}
                    >
                      {d.name}
                    </div>
                    <div className="text-xs text-[#7a7468]">{d.desc}</div>
                  </div>
                  <motion.div
                    className="w-2 h-2 ml-auto rounded-full"
                    animate={{
                      background: on ? "#c85c1a" : "rgba(26,24,20,0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ── SECTION 4 ─────────────────────────────────────────────────────────────────
function Section4({ t }) {
  const s = t.intro.s4;
  const [active, setActive] = useState(4);

  return (
    <Section dark>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-base text-[rgba(255,255,255,0.45)] text-center max-w-md mb-8 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      <motion.div
        {...slideLeft(0.3)}
        className="flex flex-col w-full max-w-lg gap-2"
      >
        {s.units.map((m, i) => (
          <motion.button
            key={m.unit}
            onClick={() => setActive(i)}
            className="flex items-center gap-4 px-4 py-3 text-left border-none cursor-pointer rounded-xl"
            animate={{
              background: active === i ? "#c85c1a15" : "rgba(255,255,255,0.03)",
              border: `1.5px solid ${active === i ? "#c85c1a50" : "rgba(255,255,255,0.06)"}`,
            }}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex-shrink-0 rounded-sm"
              animate={{
                width: `${(i + 1) * 12}px`,
                height: 8,
                background:
                  active === i
                    ? "#c85c1a"
                    : `rgba(200,92,26,${0.15 + i * 0.08})`,
              }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            />
            <div className="flex items-baseline flex-1 gap-2">
              <span
                className="font-mono text-sm font-bold"
                style={{
                  color: active === i ? "#c85c1a" : "rgba(255,255,255,0.7)",
                }}
              >
                {m.unit}
              </span>
              <span className="font-mono text-[11px] text-[rgba(255,255,255,0.3)]">
                = {m.val}
              </span>
            </div>
            <AnimatePresence>
              {active === i && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-[rgba(255,255,255,0.6)] max-w-[180px] text-right leading-tight"
                >
                  {m.example}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </motion.div>
    </Section>
  );
}

// ── SECTION 5 ─────────────────────────────────────────────────────────────────
const SW_ICONS = [
  ["🌐", "📊", "🎮"],
  ["🔧", "⚙️"],
  ["🪟", "🍎", "🐧"],
  ["⚙️", "🧠", "💾"],
];
const SW_COLORS = ["#c85c1a", "#185FA5", "#4a9e60", "#7a7468"];

function Section5({ t }) {
  const s = t.intro.s5;
  const [active, setActive] = useState(null);

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-base text-[#7a7468] text-center max-w-md mb-10 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      <motion.div
        {...scaleIn(0.3)}
        className="flex flex-col w-full max-w-lg gap-2"
      >
        {s.layers.map((layer, i) => {
          const color = SW_COLORS[i];
          const icons = SW_ICONS[i];
          const isActive = active === i;

          return (
            <motion.button
              key={layer.label}
              onClick={() => setActive(isActive ? null : i)}
              className="relative flex items-center gap-4 px-5 py-4 overflow-hidden text-left border-none cursor-pointer rounded-xl"
              animate={{
                background: isActive ? color + "18" : color + "08",
                border: `1.5px solid ${isActive ? color + "60" : color + "20"}`,
                paddingLeft: `${20 + i * 12}px`,
              }}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute top-0 bottom-0 left-0 rounded-l-xl"
                style={{ width: 4, background: color }}
                animate={{ opacity: isActive ? 1 : 0.4 }}
                transition={{ duration: 0.2 }}
              />
              <div className="flex items-center gap-1">
                {icons.map((ic) => (
                  <span key={ic} className="text-base">
                    {ic}
                  </span>
                ))}
              </div>
              <div className="flex-1">
                <div
                  className="font-mono text-sm font-bold"
                  style={{ color: isActive ? color : "#1a1814" }}
                >
                  {layer.label}
                </div>
                <div className="text-xs text-[#7a7468] mt-0.5">
                  {layer.sublabel}
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      className="text-sm text-[#1a1814] leading-relaxed overflow-hidden"
                    >
                      {layer.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <motion.span
                className="font-mono text-xs text-[#7a7468]"
                animate={{ rotate: isActive ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </motion.button>
          );
        })}
      </motion.div>
    </Section>
  );
}

// ── SECTION 6 ─────────────────────────────────────────────────────────────────
function Section6({ t }) {
  const s = t.intro.s6;
  const [step, setStep] = useState(0);
  const stepsLen = s.steps.length;

  useEffect(() => {
    const timer = setInterval(
      () => setStep((prev) => (prev + 1) % stepsLen),
      1800,
    );
    return () => clearInterval(timer);
  }, [stepsLen]);

  return (
    <Section dark>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-base text-[rgba(255,255,255,0.45)] text-center max-w-md mb-10 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      <motion.div
        {...scaleIn(0.3)}
        className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-2 mb-8"
      >
        {s.steps.map((st, i) => (
          <div key={st.label} className="flex items-center gap-2">
            {i > 0 && (
              <motion.div
                className="w-8 h-0.5 rounded-full"
                animate={{
                  background: i <= step ? "#c85c1a" : "rgba(255,255,255,0.1)",
                }}
                transition={{ duration: 0.4 }}
              />
            )}
            <motion.div
              className="flex flex-col items-center gap-1.5 p-3 rounded-2xl"
              animate={{
                background: i === step ? "#c85c1a15" : "rgba(255,255,255,0.04)",
                border: `1.5px solid ${i === step ? "#c85c1a50" : "rgba(255,255,255,0.06)"}`,
                scale: i === step ? 1.08 : 1,
                boxShadow:
                  i === step
                    ? "0 0 20px rgba(200,92,26,0.2)"
                    : "0 0 0px transparent",
              }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              style={{ minWidth: 80, minHeight: 96 }}
            >
              <span className="text-2xl">{st.icon}</span>
              <span
                className="font-mono text-[11px] font-bold"
                style={{
                  color: i === step ? "#c85c1a" : "rgba(255,255,255,0.5)",
                }}
              >
                {st.label}
              </span>
              <motion.span
                animate={{ opacity: i === step ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-xs text-[rgba(255,255,255,0.5)] text-center max-w-[80px]"
                style={{ minHeight: 28 }}
              >
                {st.desc}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp(0.5)}
        className="w-full max-w-lg p-6 rounded-2xl"
        style={{
          background: "rgba(200,92,26,0.08)",
          border: "1.5px solid rgba(200,92,26,0.25)",
        }}
      >
        <div className="font-mono text-sm text-[#c85c1a] uppercase tracking-wider mb-2">
          {s.tipLabel}
        </div>
        <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed">
          {s.tip} <strong className="text-white">{s.tipQ}</strong>
          <br />
          <span className="text-[#c85c1a] font-mono">{s.tipA}</span>
        </p>
      </motion.div>
    </Section>
  );
}

// ── SECTION 7 ─────────────────────────────────────────────────────────────────
const FE_COLORS = ["#e34c26", "#264de4", "#f7df1e"];

function Section7({ t }) {
  const s = t.intro.s7;
  const [active, setActive] = useState(0);
  const curr = s.langs[active];
  const color = FE_COLORS[active];

  return (
    <Section>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-base text-[#7a7468] text-center max-w-md mb-8 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      {/* Language tabs */}
      <motion.div {...fadeUp(0.3)} className="flex gap-2 mb-6">
        {s.langs.map((l, i) => (
          <motion.button
            key={l.lang}
            onClick={() => setActive(i)}
            className="flex items-center gap-2 px-4 py-2 font-mono text-sm font-bold border-none cursor-pointer rounded-xl"
            animate={{
              background: active === i ? FE_COLORS[i] + "20" : "#f2efe8",
              border: `1.5px solid ${active === i ? FE_COLORS[i] + "60" : "rgba(26,24,20,0.1)"}`,
              color: active === i ? FE_COLORS[i] : "#7a7468",
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            {l.emoji} {l.lang}
          </motion.button>
        ))}
      </motion.div>

      {/* Code panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
          className="w-full max-w-lg overflow-hidden rounded-2xl"
          style={{ border: `1.5px solid ${color}30` }}
        >
          <div
            className="flex items-center gap-3 px-5 py-4"
            style={{ background: color + "15" }}
          >
            <span className="text-2xl">{curr.emoji}</span>
            <div>
              <div className="font-mono text-sm font-bold" style={{ color }}>
                {curr.lang} — {curr.metaphor}
              </div>
              <p className="text-sm text-[#7a7468] mt-0.5 leading-relaxed">
                {curr.desc}
              </p>
            </div>
          </div>
          <div className="bg-[#2c2820] px-5 py-4">
            <div className="flex items-center gap-1.5 mb-3">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
            <pre className="font-mono text-[13px] text-[#c3e88d] leading-loose m-0">
              {curr.code}
              <span
                className="inline-block w-0.5 h-3.5 bg-[#c85c1a] align-middle ml-0.5"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            </pre>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Frameworks */}
      <motion.div
        {...fadeUp(0.4)}
        className="w-full max-w-lg p-4 mt-5 rounded-2xl"
        style={{
          background: "#f2efe8",
          border: "1.5px solid rgba(26,24,20,0.08)",
        }}
      >
        <div className="font-mono text-xs text-[#7a7468] uppercase tracking-wider mb-3">
          {s.frameworksLabel}
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "React", color: "#61dafb" },
            { name: "Vue", color: "#42b883" },
            { name: "Next.js", color: "#1a1814" },
            { name: "Tailwind CSS", color: "#38bdf8" },
          ].map((f, i) => (
            <motion.span
              key={f.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{
                delay: i * 0.07,
                ease: [0.34, 1.56, 0.64, 1],
                duration: 0.4,
              }}
              className="px-2.5 py-1 rounded-lg font-mono text-xs font-bold"
              style={{
                background: f.color + "15",
                border: `1px solid ${f.color}40`,
                color: f.color === "#1a1814" ? "#1a1814" : f.color,
              }}
            >
              {f.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </Section>
  );
}

// ── SECTION 8 ─────────────────────────────────────────────────────────────────
function Section8({ onDone, t }) {
  const s = t.intro.s8;

  return (
    <Section dark>
      <SectionLabel>{s.label}</SectionLabel>
      <SectionTitle dark>{s.title}</SectionTitle>
      <motion.p
        {...fadeUp(0.2)}
        className="text-base text-[rgba(255,255,255,0.45)] text-center max-w-md mb-8 leading-relaxed"
      >
        {s.sub}
      </motion.p>

      {/* Iceberg */}
      <motion.div
        {...scaleIn(0.3)}
        className="relative w-full max-w-sm"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="relative h-72">
          {/* Frontend (above water) */}
          <motion.div
            className="absolute flex flex-col items-center gap-2 -translate-x-1/2 left-1/2"
            style={{ top: 0, width: "60%" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
          >
            <div
              className="flex flex-col items-center w-full gap-1 py-5 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg,#185FA525 0%,#185FA510 100%)",
                border: "1.5px solid #185FA540",
              }}
            >
              <span className="font-mono text-sm font-bold text-[#82aaff]">
                {s.frontendLabel}
              </span>
              <span className="text-xs text-[rgba(255,255,255,0.4)]">
                {s.frontendSub}
              </span>
              <div className="flex gap-2 mt-1">
                {["HTML", "CSS", "JS"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={VIEWPORT}
                    transition={{
                      delay: 0.5 + i * 0.08,
                      ease: [0.34, 1.56, 0.64, 1],
                      duration: 0.4,
                    }}
                    className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#185FA520] text-[#82aaff] border border-[#185FA530]"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Waterline */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: "40%",
              height: 2,
              background:
                "linear-gradient(90deg,transparent,rgba(24,95,165,0.6),transparent)",
            }}
          >
            <div className="text-center font-mono text-[9px] text-[rgba(255,255,255,0.2)] -mt-4 uppercase tracking-widest">
              {s.waterLine}
            </div>
          </div>

          {/* Backend (below water) */}
          <motion.div
            className="absolute flex flex-col items-center gap-2 -translate-x-1/2 left-1/2"
            style={{ top: "45%", width: "85%" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE_OUT }}
          >
            <div
              className="flex flex-col items-center w-full gap-2 py-6 rounded-xl"
              style={{
                background:
                  "linear-gradient(180deg,#c85c1a15 0%,#c85c1a08 100%)",
                border: "1.5px solid #c85c1a30",
              }}
            >
              <span className="font-mono text-sm font-bold text-[#c85c1a]">
                {s.backendLabel}
              </span>
              <span className="text-xs text-[rgba(255,255,255,0.4)]">
                {s.backendSub}
              </span>
              <div className="flex flex-wrap gap-1.5 justify-center mt-1">
                {["Node.js", "Python", "Database", "API", "Auth"].map(
                  (tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={VIEWPORT}
                      transition={{
                        delay: 0.6 + i * 0.06,
                        ease: [0.34, 1.56, 0.64, 1],
                        duration: 0.4,
                      }}
                      className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-[#c85c1a15] text-[#c85c1a] border border-[#c85c1a25]"
                    >
                      {tag}
                    </motion.span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        {...fadeUp(0.5)}
        className="w-full max-w-lg p-5 mt-6 rounded-2xl"
        style={{
          background: "rgba(200,92,26,0.08)",
          border: "1.5px solid rgba(200,92,26,0.2)",
        }}
      >
        <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed text-center">
          <span className="text-[#c85c1a] font-mono font-bold">
            {s.courseNote}
          </span>{" "}
          faqat <strong className="text-white">{s.courseNoteBold}</strong>{" "}
          {s.courseNoteSuffix}
          <br />
          <span className="font-mono text-xs text-[rgba(255,255,255,0.5)]">
            {s.coursePath}
          </span>
        </p>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        {...fadeUp(0.7)}
        className="flex flex-col items-center gap-4 mt-10"
      >
        <div className="font-mono text-sm text-[rgba(255,255,255,0.3)] uppercase tracking-widest">
          {s.readyLabel}
        </div>
        <motion.button
          onClick={onDone}
          className="px-10 py-4 rounded-2xl font-mono text-base font-bold uppercase tracking-wide text-white bg-[#c85c1a] border-none cursor-pointer"
          style={{
            boxShadow: "0 6px 0 0 #8a3a0a, 0 16px 40px rgba(200,92,26,0.3)",
          }}
          whileHover={{
            y: -4,
            boxShadow: "0 10px 0 0 #8a3a0a, 0 20px 50px rgba(200,92,26,0.4)",
          }}
          whileTap={{ y: 2, boxShadow: "0 3px 0 0 #8a3a0a" }}
          transition={{ duration: 0.1 }}
        >
          {s.ctaBtn}
        </motion.button>
        <p className="text-sm text-[rgba(255,255,255,0.25)] font-mono">
          {s.ctaSub}
        </p>
      </motion.div>
    </Section>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN — IntroPage
// ══════════════════════════════════════════════════════════════════════════════
const SECTION_COMPONENTS = [
  { Component: Section1, darkBg: false },
  { Component: Section2, darkBg: true },
  { Component: Section3, darkBg: false },
  { Component: Section4, darkBg: true },
  { Component: Section5, darkBg: false },
  { Component: Section6, darkBg: true },
  { Component: Section7, darkBg: false },
  { Component: Section8, darkBg: true },
];

const TOTAL = SECTION_COMPONENTS.length;

export default function IntroPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const goToCourses = () => navigate("/courses");

  const [current, setCurrent] = useState(0);
  const sectionRefs = useRef([]);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scrollTo = (index) => {
    setCurrent(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <ProgressDots total={TOTAL} current={current} onGo={scrollTo} />

      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl"
        style={{
          background: "rgba(26,24,20,0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 3px 0 0 #0a0806",
        }}
      >
        <Container className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c85c1a] rounded-sm" />
            <span className="font-mono text-sm font-bold tracking-widest text-white uppercase">
              {t.intro.topBar.title}
            </span>
            <span className="font-mono text-xs text-[rgba(255,255,255,0.3)] ml-2">
              {t.intro.topBar.subtitle}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-32 h-1 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#c85c1a] rounded-full"
                style={{ scaleX: smoothProgress, transformOrigin: "left" }}
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
            {t.intro.topBar.skip}
          </button>
        </Container>
      </div>

      {/* Sections */}
      <div style={{ paddingTop: 48 }}>
        {SECTION_COMPONENTS.map(({ Component, darkBg }, i) => (
          <div key={i} ref={(el) => (sectionRefs.current[i] = el)}>
            <Component
              t={t}
              {...(i === TOTAL - 1 ? { onDone: goToCourses } : {})}
            />
            {i < TOTAL - 1 && (
              <div
                className="flex justify-center pb-10"
                style={{ background: darkBg ? "#1a1814" : "#e8e4dc" }}
              >
                <NavBtns
                  onPrev={() => scrollTo(Math.max(0, i - 1))}
                  onNext={() => scrollTo(i + 1)}
                  isFirst={i === 0}
                  isLast={false}
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
