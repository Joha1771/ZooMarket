// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.2 — SELECTING AND TRAVERSING ELEMENTS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function DomSelectingExplain({ t }) {
  const [active, setActive] = useState(null);
  const [activeTraverse, setActiveTraverse] = useState(null);
  const d = t("lessons.dom-selecting.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Selector methods */}
      <div className="flex flex-col gap-2">
        {d.methods.map((m, i) => (
          <button
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            className="p-3 text-left rounded-xl border transition-all cursor-pointer"
            style={{
              background: active === i ? m.color + "15" : m.color + "08",
              borderColor: active === i ? m.color + "60" : m.color + "25",
            }}
          >
            <div className="flex items-center justify-between">
              <code className="font-mono text-xs font-bold" style={{ color: m.color }}>
                {m.name}
              </code>
              <span className="text-[10px] text-[#7a7468]">{m.desc}</span>
            </div>
            {active === i && (
              <div className="mt-2 bg-[#2c2820] rounded-lg p-2.5 font-mono text-xs text-[#c3e88d]">
                {m.example}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Traversing */}
      <div>
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.traverseLabel}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {d.traversals.map((tr, i) => (
            <button
              key={i}
              onClick={() => setActiveTraverse(activeTraverse === i ? null : i)}
              className="p-2.5 text-left rounded-lg border transition-all cursor-pointer"
              style={{
                background: activeTraverse === i ? "#185FA515" : "#f2efe8",
                borderColor: activeTraverse === i ? "#185FA540" : "rgba(26,24,20,0.10)",
              }}
            >
              <code className="font-mono text-[11px] font-bold text-[#185FA5] block">
                .{tr.prop}
              </code>
              {activeTraverse === i && (
                <span className="text-[11px] text-[#7a7468] mt-0.5 block">{tr.desc}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Hint */}
      <div className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#c85c1a0a", borderColor: "#c85c1a25" }}>
        <span className="font-bold text-[#c85c1a]">💡 </span>
        <span className="text-[#1a1814]">{d.hint}</span>
      </div>
    </div>
  );
}

export function DomSelectingLearn({ t }) {
  const [selected, setSelected] = useState(null);
  const d = t("lessons.dom-selecting.learn");

  const demoElements = [
    { id: "title", tag: "h2", class: "title", text: "Sarlavha", color: "#c85c1a" },
    { id: "card1", tag: "div", class: "card", text: "Karta 1", color: "#185FA5" },
    { id: "card2", tag: "div", class: "card", text: "Karta 2", color: "#185FA5" },
    { id: "btn", tag: "button", class: "btn primary", text: "Tugma", color: "#4a9e60" },
  ];

  const selectors = [
    { label: "#title", match: ["title"], code: "document.getElementById('title')" },
    { label: ".card", match: ["card1"], code: "document.querySelector('.card')" },
    { label: ".card (all)", match: ["card1", "card2"], code: "document.querySelectorAll('.card')" },
    { label: "button", match: ["btn"], code: "document.querySelector('button')" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Selectors to try */}
      <div>
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.tryLabel}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {selectors.map((s, i) => (
            <button
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="px-3 py-1.5 rounded-lg border font-mono text-xs font-bold cursor-pointer transition-all"
              style={{
                background: selected === i ? "#c85c1a" : "#f2efe8",
                borderColor: selected === i ? "#c85c1a" : "rgba(26,24,20,0.12)",
                color: selected === i ? "#fff" : "#1a1814",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Demo DOM */}
      <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2.5">
          {d.resultLabel}
        </div>
        <div className="flex flex-col gap-2">
          {demoElements.map((el) => {
            const isHighlighted =
              selected !== null && selectors[selected].match.includes(el.id);
            return (
              <div
                key={el.id}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-all duration-200"
                style={{
                  background: isHighlighted ? el.color + "18" : "white",
                  borderColor: isHighlighted ? el.color : "rgba(26,24,20,0.08)",
                  transform: isHighlighted ? "scale(1.01)" : "scale(1)",
                }}
              >
                <code className="font-mono text-[10px] text-[#7a7468] w-14">{el.tag}</code>
                <code className="font-mono text-[10px] w-24"
                  style={{ color: isHighlighted ? el.color : "#7a7468" }}>
                  #{el.id}
                </code>
                <span className="text-xs text-[#1a1814] font-medium">{el.text}</span>
                {isHighlighted && (
                  <span className="ml-auto text-[10px] font-bold font-mono"
                    style={{ color: el.color }}>✓ tanlandi</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Code output */}
      {selected !== null && (
        <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs">
          <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1.5 uppercase tracking-wider">
            JS:
          </div>
          <div className="text-[#c3e88d]">{selectors[selected].code}</div>
        </div>
      )}
    </div>
  );
}
