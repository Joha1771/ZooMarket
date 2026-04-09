// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.1 — POSITION
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function PositionExplain() {
  const [active, setActive] = useState("relative");
  const positions = [
    {
      id: "static",
      color: "#7a7468",
      title: "static",
      desc: "Standart holat. top/left/right/bottom ta'sir qilmaydi. Hamma element default static.",
      code: "position: static;",
    },
    {
      id: "relative",
      color: "#c85c1a",
      title: "relative",
      desc: "O'z o'rnidan siljiydi, lekin boshqa elementlarga joy qoldiradi. Absolute uchun ota bo'ladi.",
      code: "position: relative;\ntop: 20px;\nleft: 10px;",
    },
    {
      id: "absolute",
      color: "#185FA5",
      title: "absolute",
      desc: "Eng yaqin positioned ota elementiga nisbatan joylashadi. Normal oqimdan chiqadi.",
      code: "position: absolute;\ntop: 0;\nright: 0;",
    },
    {
      id: "fixed",
      color: "#4a9e60",
      title: "fixed",
      desc: "Viewport ga nisbatan qotib qoladi. Sahifa scroll qilinganda ham o'z joyida turadi. Navbar uchun.",
      code: "position: fixed;\ntop: 0;\nwidth: 100%;",
    },
    {
      id: "sticky",
      color: "#993556",
      title: "sticky",
      desc: "Scroll qilganda ma'lum nuqtaga yetganda qotib qoladi. relative + fixed kombinatsiyasi.",
      code: "position: sticky;\ntop: 20px;",
    },
  ];
  const curr = positions.find((p) => p.id === active);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        CSS <Tag>position</Tag> xususiyati elementni sahifada qanday
        joylashishini belgilaydi. 5 ta qiymat bor:
      </p>
      <div className="flex flex-wrap gap-2">
        {positions.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold cursor-pointer border-none transition-all"
            style={{
              background: active === p.id ? p.color : p.color + "15",
              color: active === p.id ? "#fff" : p.color,
              border: `1.5px solid ${p.color}40`,
            }}
          >
            {p.title}
          </button>
        ))}
      </div>
      {curr && (
        <div
          className="overflow-hidden border rounded-xl"
          style={{ borderColor: curr.color + "40" }}
        >
          <div className="px-4 py-3" style={{ background: curr.color + "12" }}>
            <div
              className="mb-1 font-mono text-sm font-bold"
              style={{ color: curr.color }}
            >
              position: {curr.title}
            </div>
            <p className="text-xs text-[#1a1814] leading-relaxed">
              {curr.desc}
            </p>
          </div>
          <div className="bg-[#2c2820] px-4 py-3 font-mono text-xs text-[#c3e88d] leading-loose">
            {curr.code.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      )}
      <div className="p-3 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] mb-2 uppercase tracking-wider">
          Z-index haqida:
        </div>
        <p className="text-xs text-[#1a1814] leading-relaxed">
          <Tag>z-index</Tag> faqat <strong>position: static bo'lmagan</strong>{" "}
          elementlarda ishlaydi. Kattaroq z-index — ustda.
        </p>
      </div>
    </div>
  );
}

export function PositionLearn() {
  const [posType, setPosType] = useState("relative");
  const [topVal, setTopVal] = useState(20);
  const [leftVal, setLeftVal] = useState(20);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        Position turini tanlang va qiymatlarni o'zgartiring — ko'k quti qanday
        siljishini kuzating:
      </p>
      <div className="flex flex-wrap gap-2">
        {["static", "relative", "absolute"].map((p) => (
          <button
            key={p}
            onClick={() => setPosType(p)}
            className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold cursor-pointer border-none transition-all"
            style={{
              background: posType === p ? "#c85c1a" : "#f2efe8",
              color: posType === p ? "#fff" : "#1a1814",
              border: `1.5px solid ${posType === p ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
            }}
          >
            {p}
          </button>
        ))}
      </div>
      <div
        className="relative bg-[#2c2820] rounded-xl"
        style={{ height: 180, border: "1.5px solid rgba(255,255,255,0.06)" }}
      >
        <div className="absolute inset-3 rounded-lg border-2 border-dashed border-[rgba(255,255,255,0.1)] flex items-center justify-center">
          <span className="font-mono text-[10px] text-[rgba(255,255,255,0.2)]">
            Parent (relative)
          </span>
        </div>
        <div
          className="absolute w-16 h-16 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-[rgba(255,255,255,0.3)] border-2 border-dashed border-[rgba(255,255,255,0.15)]"
          style={{ top: 16, left: 16 }}
        >
          A
        </div>
        <div
          className="flex items-center justify-center font-mono text-xs font-bold text-white transition-all duration-300 rounded-lg w-14 h-14"
          style={{
            background: "#185FA5",
            border: "1.5px solid #3a7fd5",
            position: posType,
            top: posType !== "static" ? topVal : undefined,
            left: posType !== "static" ? leftVal : undefined,
          }}
        >
          B
        </div>
      </div>
      {posType !== "static" && (
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "top", value: topVal, set: setTopVal, color: "#c85c1a" },
            {
              label: "left",
              value: leftVal,
              set: setLeftVal,
              color: "#185FA5",
            },
          ].map(({ label, value, set, color }) => (
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
                min={0}
                max={120}
                value={value}
                onChange={(e) => set(Number(e.target.value))}
                className="w-full"
                style={{ accentColor: color }}
              />
            </div>
          ))}
        </div>
      )}
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <span className="text-[#82aaff]">position</span>:{" "}
        <span className="text-[#c3e88d]">{posType}</span>;
        {posType !== "static" && (
          <>
            <br />
            <span className="text-[#82aaff]">top</span>:{" "}
            <span className="text-[#f78c6c]">{topVal}px</span>;
            <br />
            <span className="text-[#82aaff]">left</span>:{" "}
            <span className="text-[#f78c6c]">{leftVal}px</span>;
          </>
        )}
      </div>
    </div>
  );
}
