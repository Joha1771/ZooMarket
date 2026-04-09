// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.8 — TRANSITION
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { InfoBox, Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function TransitionExplain() {
  const [hovered, setHovered] = useState(false);
  const [duration, setDuration] = useState(0.3);
  const [timingFn, setTimingFn] = useState("ease");
  const [property] = useState("all");

  const timings = [
    "ease",
    "linear",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "cubic-bezier(0.68,-0.55,0.27,1.55)",
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        <Tag>transition</Tag> — CSS xususiyatlari o'zgarganda silliq animatsiya.
        Sintaks:{" "}
        <code className="font-mono text-xs bg-[#c85c1a15] text-[#c85c1a] px-1.5 py-0.5 rounded">
          transition: property duration timing delay
        </code>
      </p>
      <div className="flex justify-center">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center justify-center w-32 h-32 font-mono text-sm font-bold cursor-pointer rounded-2xl"
          style={{
            background: hovered ? "#c85c1a" : "#f2efe8",
            color: hovered ? "#fff" : "#c85c1a",
            border: `2px solid #c85c1a`,
            transform: hovered
              ? "scale(1.1) rotate(5deg)"
              : "scale(1) rotate(0deg)",
            boxShadow: hovered
              ? "0 12px 32px rgba(200,92,26,0.4)"
              : "0 2px 8px rgba(26,24,20,0.1)",
            transition: `${property} ${duration}s ${timingFn}`,
          }}
        >
          {hovered ? "🔥" : "Hover!"}
        </div>
      </div>
      <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] mb-1">
          Duration: {duration}s
        </div>
        <input
          type="range"
          min={0.1}
          max={2}
          step={0.1}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: "#c85c1a" }}
        />
      </div>
      <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] mb-1.5">
          Timing function:
        </div>
        <div className="flex flex-wrap gap-1">
          {timings.map((t) => (
            <button
              key={t}
              onClick={() => setTimingFn(t)}
              className="px-2 py-0.5 rounded font-mono text-[9px] cursor-pointer border-none transition-colors"
              style={{
                background: timingFn === t ? "#c85c1a" : "transparent",
                color: timingFn === t ? "#fff" : "#7a7468",
                outline: `1px solid ${timingFn === t ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
              }}
            >
              {t.length > 20 ? "cubic-bezier(...)" : t}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <span className="text-[#82aaff]">transition</span>:{" "}
        <span className="text-[#c3e88d]">
          {property} {duration}s{" "}
          {timingFn.length > 20
            ? "cubic-bezier(0.68,-0.55,0.27,1.55)"
            : timingFn}
        </span>
        ;
      </div>
      <InfoBox color="#4a9e60" icon="💡">
        <strong>Performance maslahat:</strong> Faqat{" "}
        <Tag color="#4a9e60">transform</Tag> va{" "}
        <Tag color="#4a9e60">opacity</Tag> ga transition bering — bular GPU da
        ishlaydi va sahifani qayta hisoblashga majburlamaydi.
      </InfoBox>
    </div>
  );
}
