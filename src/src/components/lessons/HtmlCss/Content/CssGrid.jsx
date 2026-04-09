// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.10 — CSS GRID
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function CssGridExplain() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(8);
  const items = Array.from({ length: cols * rows }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Grid — ikki o'lchovli (2D) layout tizimi. Ustun ham, qator ham
        boshqariladi. Slayderlarni o'zgartiring:
      </p>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols},1fr)`,
          gridTemplateRows: `repeat(${rows},auto)`,
          gap,
        }}
      >
        {items.map((i) => (
          <div
            key={i}
            className="flex items-center justify-center py-3 font-mono text-xs font-bold text-white rounded-lg"
            style={{
              background:
                i % 3 === 1 ? "#c85c1a" : i % 3 === 2 ? "#185FA5" : "#4a9e60",
            }}
          >
            {i}
          </div>
        ))}
      </div>
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <span className="text-[#82aaff]">display</span>:{" "}
        <span className="text-[#c3e88d]">grid</span>;<br />
        <span className="text-[#82aaff]">grid-template-columns</span>:{" "}
        <span className="text-[#c3e88d]">repeat({cols}, 1fr)</span>;<br />
        <span className="text-[#82aaff]">gap</span>:{" "}
        <span className="text-[#c3e88d]">{gap}px</span>;
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Ustunlar", v: cols, set: setCols, min: 1, max: 6 },
          { label: "Qatorlar", v: rows, set: setRows, min: 1, max: 4 },
          { label: "Gap", v: gap, set: setGap, min: 0, max: 24 },
        ].map(({ label, v, set, min, max }) => (
          <div
            key={label}
            className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <div className="font-mono text-[10px] text-[#7a7468] mb-1">
              {label}
            </div>
            <div className="font-mono text-xl font-black text-[#c85c1a]">
              {v}
              {label === "Gap" ? "px" : ""}
            </div>
            <input
              type="range"
              min={min}
              max={max}
              value={v}
              onChange={(e) => set(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#c85c1a" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
