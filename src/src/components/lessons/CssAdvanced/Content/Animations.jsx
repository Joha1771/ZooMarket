// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.4 — ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag, InfoBox } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function AnimationsExplain() {
  const [playing, setPlaying] = useState(true);
  const [duration, setDuration] = useState(1.5);
  const [timing, setTiming] = useState("ease");
  const [iterCount, setIterCount] = useState("infinite");

  const timings = ["ease", "linear", "ease-in", "ease-out", "ease-in-out"];
  const iters = ["1", "2", "3", "infinite"];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        CSS animatsiyalar ikkita qismdan iborat: <Tag>@keyframes</Tag> (harakat
        stsenariyi) va <Tag>animation</Tag> (qo'llash).
      </p>
      <div
        className="bg-[#2c2820] rounded-xl flex items-center justify-center gap-8"
        style={{ height: 140 }}
      >
        <div
          className="flex items-center justify-center font-mono text-xs font-bold text-white w-14 h-14 rounded-xl"
          style={{
            background: "#c85c1a",
            border: "2px solid #e07a3a",
            animation: playing
              ? `cssAnimDemo ${duration}s ${timing} ${iterCount} alternate`
              : "none",
          }}
        >
          VZ
        </div>
      </div>
      <style>{`
        @keyframes cssAnimDemo {
          from { transform: translateX(-40px) rotate(-15deg); opacity: 0.5; }
          to   { transform: translateX(40px) rotate(15deg); opacity: 1; }
        }
      `}</style>
      <div className="flex gap-2">
        <button
          onClick={() => setPlaying(!playing)}
          className="flex-1 py-2 font-mono text-xs font-bold transition-all border-none rounded-lg cursor-pointer"
          style={{
            background: playing ? "#c85c1a" : "#4a9e60",
            color: "#fff",
            boxShadow: `0 3px 0 0 ${playing ? "#8a3a0a" : "#2a6040"}`,
          }}
        >
          {playing ? "⏸ To'xtatish" : "▶ Boshlash"}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
          <div className="font-mono text-[10px] text-[#7a7468] mb-1.5">
            animation-duration
          </div>
          <div className="font-mono text-xl font-black text-[#c85c1a] mb-1">
            {duration}s
          </div>
          <input
            type="range"
            min={0.2}
            max={4}
            step={0.1}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full"
            style={{ accentColor: "#c85c1a" }}
          />
        </div>
        <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
          <div className="font-mono text-[10px] text-[#7a7468] mb-1.5">
            animation-iteration-count
          </div>
          <div className="flex flex-wrap gap-1">
            {iters.map((v) => (
              <button
                key={v}
                onClick={() => setIterCount(v)}
                className="px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer border-none transition-all"
                style={{
                  background: iterCount === v ? "#c85c1a" : "transparent",
                  color: iterCount === v ? "#fff" : "#7a7468",
                  outline: `1px solid ${iterCount === v ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] mb-1.5">
          animation-timing-function
        </div>
        <div className="flex flex-wrap gap-1">
          {timings.map((v) => (
            <button
              key={v}
              onClick={() => setTiming(v)}
              className="px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer border-none transition-all"
              style={{
                background: timing === v ? "#c85c1a" : "transparent",
                color: timing === v ? "#fff" : "#7a7468",
                outline: `1px solid ${timing === v ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2 uppercase tracking-wider">
          @keyframes + animation:
        </div>
        <div>
          <span className="text-[#c792ea]">@keyframes</span>{" "}
          <span className="text-[#82aaff]">bounce</span> {"{"}
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#ffcb6b]">from</span> {"{ "}
          <span className="text-[#82aaff]">transform</span>:{" "}
          <span className="text-[#c3e88d]">translateX(-40px)</span>
          {"}"}
        </div>
        <div>
          &nbsp;&nbsp;<span className="text-[#ffcb6b]">to</span> {"{ "}
          <span className="text-[#82aaff]">transform</span>:{" "}
          <span className="text-[#c3e88d]">translateX(40px)</span>
          {"}"}
        </div>
        <div>{"}"}</div>
        <div className="mt-1">
          <span className="text-[#82aaff]">animation</span>:{" "}
          <span className="text-[#c3e88d]">
            bounce {duration}s {timing} {iterCount} alternate
          </span>
          ;
        </div>
      </div>
    </div>
  );
}
