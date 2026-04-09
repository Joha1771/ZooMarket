// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.3 — CHANGING STYLES AND CLASSES
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function DomStylingExplain({ t }) {
  const [tab, setTab] = useState("class");
  const d = t("lessons.dom-styling.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-2">
        {["style", "class"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "style" ? "style property" : "classList"}
          </button>
        ))}
      </div>

      {tab === "style" ? (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">{d.styleLabel}</p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2 uppercase tracking-wider">
              JS:
            </div>
            <div>
              <span className="text-[#82aaff]">const</span>{" "}
              <span className="text-[#c3e88d]">el</span>{" "}
              <span className="text-[rgba(255,255,255,0.6)]">=</span>{" "}
              <span className="text-[#ffcb6b]">document</span>
              <span className="text-[rgba(255,255,255,0.6)]">.</span>
              <span className="text-[#82aaff]">querySelector</span>
              <span className="text-[rgba(255,255,255,0.5)]">('.box');</span>
            </div>
            <div className="mt-1">
              <span className="text-[#c3e88d]">el</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#f78c6c]">style</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#ffcb6b]">backgroundColor</span>
              <span className="text-[rgba(255,255,255,0.5)]"> = </span>
              <span className="text-[#c3e88d]">'#c85c1a'</span>
              <span className="text-[rgba(255,255,255,0.4)]">;</span>
            </div>
            <div>
              <span className="text-[#c3e88d]">el</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#f78c6c]">style</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#ffcb6b]">fontSize</span>
              <span className="text-[rgba(255,255,255,0.5)]"> = </span>
              <span className="text-[#c3e88d]">'24px'</span>
              <span className="text-[rgba(255,255,255,0.4)]">;</span>
            </div>
            <div>
              <span className="text-[#c3e88d]">el</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#f78c6c]">style</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#ffcb6b]">display</span>
              <span className="text-[rgba(255,255,255,0.5)]"> = </span>
              <span className="text-[#c3e88d]">'none'</span>
              <span className="text-[rgba(255,255,255,0.4)]">;</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">{d.classLabel}</p>
          {d.classMethods.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: "#185FA50a", borderColor: "#185FA525" }}
            >
              <code className="font-mono text-xs text-[#185FA5] font-bold shrink-0" style={{ minWidth: 200 }}>
                {m.method}
              </code>
              <span className="text-xs text-[#7a7468]">{m.desc}</span>
            </div>
          ))}
        </div>
      )}

      <div className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#4a9e600a", borderColor: "#4a9e6025" }}>
        <span className="font-bold text-[#4a9e60]">✓ </span>
        <span className="text-[#1a1814]">{d.tip}</span>
      </div>
    </div>
  );
}

export function DomStylingLearn({ t }) {
  const [color, setColor] = useState("#c85c1a");
  const [size, setSize] = useState(16);
  const [classes, setClasses] = useState([]);
  const d = t("lessons.dom-styling.learn");

  const colorOptions = [
    { label: "Primary", value: "#c85c1a" },
    { label: "Blue", value: "#185FA5" },
    { label: "Green", value: "#4a9e60" },
    { label: "Purple", value: "#993556" },
  ];
  const sizeOptions = [12, 16, 20, 28];
  const classOptions = ["bold", "italic", "shadow", "rounded"];

  const toggleClass = (cls) =>
    setClasses((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );

  const styleMap = {
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    shadow: { textShadow: "0 2px 8px rgba(0,0,0,0.2)" },
    rounded: { borderRadius: 12 },
  };

  const combinedStyle = classes.reduce(
    (acc, cls) => ({ ...acc, ...styleMap[cls] }),
    { color, fontSize: size, transition: "all 0.2s" }
  );

  const jsCode = [
    `el.style.color = '${color}';`,
    `el.style.fontSize = '${size}px';`,
    ...classes.map((c) => `el.classList.add('${c}');`),
  ].join("\n");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Preview element */}
      <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)] flex items-center justify-center min-h-[80px]">
        <div
          className="px-5 py-3 bg-white border border-[rgba(26,24,20,0.10)]"
          style={combinedStyle}
        >
          {d.result}
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-3">
        <div>
          <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-1.5">
            {d.colorLabel}
          </div>
          <div className="flex flex-col gap-1">
            {colorOptions.map((c) => (
              <button
                key={c.value}
                onClick={() => setColor(c.value)}
                className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer border transition-all"
                style={{
                  borderColor: color === c.value ? c.value : "transparent",
                  background: color === c.value ? c.value + "15" : "transparent",
                }}
              >
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: c.value }} />
                <span className="text-[11px] font-mono text-[#1a1814]">{c.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-1.5">
            {d.sizeLabel}
          </div>
          <div className="flex flex-col gap-1">
            {sizeOptions.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer border transition-all"
                style={{
                  borderColor: size === s ? "#c85c1a" : "transparent",
                  background: size === s ? "#c85c1a15" : "transparent",
                }}
              >
                <span className="font-mono text-[11px] text-[#1a1814]">{s}px</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-1.5">
            {d.classLabel}
          </div>
          <div className="flex flex-col gap-1">
            {classOptions.map((cls) => (
              <button
                key={cls}
                onClick={() => toggleClass(cls)}
                className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer border transition-all"
                style={{
                  borderColor: classes.includes(cls) ? "#4a9e60" : "transparent",
                  background: classes.includes(cls) ? "#4a9e6015" : "transparent",
                }}
              >
                <span
                  className="w-3 h-3 rounded border flex items-center justify-center shrink-0"
                  style={{
                    borderColor: classes.includes(cls) ? "#4a9e60" : "#7a7468",
                    background: classes.includes(cls) ? "#4a9e60" : "transparent",
                  }}
                >
                  {classes.includes(cls) && (
                    <span className="text-white text-[8px]">✓</span>
                  )}
                </span>
                <span className="font-mono text-[11px] text-[#1a1814]">{cls}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Code output */}
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1.5 uppercase tracking-wider">
          {d.codeLabel}
        </div>
        {jsCode.split("\n").map((line, i) => (
          <div key={i} className="text-[#c3e88d]">{line}</div>
        ))}
      </div>
    </div>
  );
}
