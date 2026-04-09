// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.8 — BOX MODEL
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { getByPath as get } from "../../../../Shared/utils";

export function BoxModelExplain({ t }) {
  const [active, setActive] = useState(null);
  const layers = [
    {
      key: "margin",
      color: "#b07820",
      isSolid: false,
      desc:
        get(t, "lessons.boxModel.explain.margin") ||
        "Elementdan tashqaridagi bo'sh joy.",
    },
    {
      key: "border",
      color: "#c85c1a",
      isSolid: true,
      desc:
        get(t, "lessons.boxModel.explain.border") ||
        "Element atrofidagi chegara.",
    },
    {
      key: "padding",
      color: "#4a9e60",
      isSolid: false,
      desc:
        get(t, "lessons.boxModel.explain.padding") ||
        "Kontent bilan border orasidagi bo'sh joy.",
    },
    {
      key: "content",
      color: "#4060c0",
      isSolid: false,
      desc: get(t, "lessons.boxModel.explain.content") || "Asosiy kontent.",
    },
  ];

  return (
    <div>
      <p className="text-sm text-[#7a7468] mb-5 leading-relaxed">
        {get(t, "lessons.boxModel.explain.intro") ||
          "Har bir HTML element — quti. Bu qutining 4 qatlami bor. Bosib o'rganing:"}
      </p>
      <div className="flex justify-center mb-5">
        <div className="relative inline-block">
          {layers.map((l, i) => {
            const isActive = active === l.key;
            const pads = ["p-7", "p-5", "p-4", "p-0"][i];
            return (
              <div
                key={l.key}
                onClick={() => setActive((a) => (a === l.key ? null : l.key))}
                className={`${pads} rounded-lg cursor-pointer relative transition-all duration-200 border-2 ${l.isSolid ? "border-solid" : "border-dashed"}`}
                style={{
                  borderColor: isActive ? l.color : l.color + "80",
                  background: isActive ? l.color + "40" : l.color + "15",
                }}
              >
                <span
                  className="absolute top-1 left-2 text-[10px] font-mono font-bold px-1 rounded"
                  style={{ color: l.color, background: "#f2efe8" }}
                >
                  {l.key.toUpperCase()}
                </span>
                {i === layers.length - 1 && (
                  <div className="px-7 py-3 rounded text-center font-mono text-xs font-bold text-[#4060c0] border-2 border-dashed border-[#82aaff60] bg-[#82aaff15]">
                    CONTENT
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {active ? (
        <div
          className="p-3 text-sm leading-relaxed border rounded-lg"
          style={{
            background: layers.find((l) => l.key === active)?.color + "15",
            borderColor: layers.find((l) => l.key === active)?.color + "40",
          }}
        >
          <strong
            style={{ color: layers.find((l) => l.key === active)?.color }}
          >
            {active.toUpperCase()}:{" "}
          </strong>
          {layers.find((l) => l.key === active)?.desc}
        </div>
      ) : (
        <p className="text-center text-xs text-[#7a7468] font-mono">
          👆{" "}
          {get(t, "lessons.boxModel.explain.hint") ||
            "Qatlamni bosib tushuntirishni ko'ring"}
        </p>
      )}
    </div>
  );
}

export function BoxModelLearn({ t }) {
  const [padding, setPadding] = useState(20);
  const [margin, setMargin] = useState(16);
  const [border, setBorder] = useState(4);

  return (
    <div>
      <p className="text-xs text-[#7a7468] mb-4 leading-relaxed">
        {get(t, "lessons.boxModel.learn.intro") ||
          "Slayderlarni suring va quti qanday o'zgarishini kuzating:"}
      </p>
      <div className="flex justify-center mb-5">
        <div
          className="relative bg-[#f5c87820] rounded-lg border-2 border-dashed border-[#f5c87880]"
          style={{ padding: margin }}
        >
          <span className="absolute top-1 left-2 text-[9px] font-mono text-[#b07820] bg-[#f2efe8] px-1 rounded">
            margin: {margin}px
          </span>
          <div
            className="relative rounded"
            style={{
              border: `${border}px solid #c85c1a`,
              background: "#c85c1a15",
            }}
          >
            <span className="absolute -top-4 left-1.5 text-[9px] font-mono text-[#c85c1a] bg-[#f2efe8] px-1 rounded whitespace-nowrap">
              border: {border}px
            </span>
            <div
              className="rounded m-1.5 relative border-2 border-dashed border-[#4a9e6060] bg-[#4a9e6015]"
              style={{ padding }}
            >
              <span className="absolute top-1 left-1.5 text-[9px] font-mono text-[#2a7040] bg-[#f2efe8] px-1 rounded">
                padding: {padding}px
              </span>
              <div className="px-5 py-2.5 rounded text-center font-mono text-xs font-bold text-[#4060c0] border-2 border-dashed border-[#82aaff60] bg-[#82aaff15]">
                CONTENT
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          {
            label: "padding",
            value: padding,
            set: setPadding,
            min: 4,
            max: 40,
            color: "#4a9e60",
          },
          {
            label: "border",
            value: border,
            set: setBorder,
            min: 1,
            max: 16,
            color: "#c85c1a",
          },
          {
            label: "margin",
            value: margin,
            set: setMargin,
            min: 4,
            max: 40,
            color: "#b07820",
          },
        ].map(({ label, value, set, min, max, color }) => (
          <div
            key={label}
            className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <div className="font-mono text-[10px] mb-1" style={{ color }}>
              {label}
            </div>
            <div
              className="mb-1 font-mono text-xl font-black"
              style={{ color }}
            >
              {value}px
            </div>
            <input
              type="range"
              min={min}
              max={max}
              value={value}
              onChange={(e) => set(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: color }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3.5 bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <span className="text-[#82aaff]">padding</span>:{" "}
        <span className="text-[#f78c6c]">{padding}px</span>;<br />
        <span className="text-[#82aaff]">border</span>:{" "}
        <span className="text-[#f78c6c]">{border}px</span>{" "}
        <span className="text-[#82aaff]">solid</span>{" "}
        <span className="text-[#f78c6c]">#c85c1a</span>;<br />
        <span className="text-[#82aaff]">margin</span>:{" "}
        <span className="text-[#f78c6c]">{margin}px</span>;
      </div>
    </div>
  );
}
