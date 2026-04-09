// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.6 — CSS INTRO
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function CssIntroExplain() {
  const [active, setActive] = useState("selector");
  const parts = {
    selector: {
      color: "#c85c1a",
      label: "Selector",
      desc: "Qaysi HTML elementga stil berish. Tag, class, id yoki murakkab selectorlar.",
    },
    property: {
      color: "#185FA5",
      label: "Xususiyat",
      desc: "Nima o'zgartiriladi: rang, o'lcham, masofa, shrift...",
    },
    value: {
      color: "#4a9e60",
      label: "Qiymat",
      desc: "Xususiyatning aniq qiymati: red, 16px, bold, 1.5rem...",
    },
  };
  const selectors = [
    { sel: "p", spec: "0,0,1", type: "Tag", desc: "Barcha <p> elementlari" },
    {
      sel: ".card",
      spec: "0,1,0",
      type: "Class",
      desc: 'class="card" bo\'lganlar',
    },
    {
      sel: "#hero",
      spec: "1,0,0",
      type: "ID",
      desc: 'id="hero" bo\'lgan bitta element',
    },
    { sel: "*", spec: "0,0,0", type: "Universal", desc: "Barcha elementlar" },
    {
      sel: "a:hover",
      spec: "0,1,1",
      type: "Pseudo",
      desc: "Sichqon ustida bo'lgan havolalar",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        CSS — HTML elementlarni qanday ko'rinishini belgilaydi. Har bir qoida 3
        qismdan iborat:
      </p>

      <div className="bg-[#2c2820] rounded-xl p-4 text-center">
        <div className="inline-block font-mono text-sm leading-loose text-left">
          <button
            onClick={() => setActive("selector")}
            className="px-1 bg-transparent border-none rounded cursor-pointer"
            style={{
              color: "#c85c1a",
              background: active === "selector" ? "#c85c1a20" : "transparent",
            }}
          >
            p
          </button>{" "}
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{"{"}</span>
          <br />
          {"  "}
          <button
            onClick={() => setActive("property")}
            className="px-1 bg-transparent border-none rounded cursor-pointer"
            style={{
              color: "#82aaff",
              background: active === "property" ? "#82aaff20" : "transparent",
            }}
          >
            color
          </button>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>: </span>
          <button
            onClick={() => setActive("value")}
            className="px-1 bg-transparent border-none rounded cursor-pointer"
            style={{
              color: "#c3e88d",
              background: active === "value" ? "#c3e88d20" : "transparent",
            }}
          >
            red
          </button>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>;</span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{"}"}</span>
        </div>
      </div>

      <div
        className="p-3.5 rounded-lg border transition-all"
        style={{
          background: parts[active].color + "12",
          borderColor: parts[active].color + "35",
        }}
      >
        <strong style={{ color: parts[active].color }}>
          {parts[active].label}:{" "}
        </strong>
        <span className="text-sm text-[#1a1814]">{parts[active].desc}</span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider">
          Selector kuchliligi (specificity):
        </div>
        {selectors.map((s) => (
          <div
            key={s.sel}
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <code className="font-mono text-xs text-[#c85c1a] w-20 shrink-0">
              {s.sel}
            </code>
            <span className="font-mono text-[10px] bg-[#c85c1a15] text-[#c85c1a] px-1.5 py-0.5 rounded w-16 text-center">
              {s.spec}
            </span>
            <span className="text-xs text-[#7a7468] flex-1">{s.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
