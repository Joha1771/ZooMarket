// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.3 — TRANSFORMS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function TransformsExplain() {
  const [rotate, setRotate] = useState(0);
  const [scaleVal, setScaleVal] = useState(100);
  const [translateX, setTranslateX] = useState(0);
  const [skewX, setSkewX] = useState(0);

  const transforms = [
    {
      name: "translate(x, y)",
      desc: "Elementni gorizontal va vertikal siljitadi. px yoki % qiymatlar.",
    },
    {
      name: "rotate(deg)",
      desc: "Elementni markazidan aylantiradi. Musbat — soat yo'nalishi, manfiy — teskari.",
    },
    {
      name: "scale(n)",
      desc: "Elementni kattalashtiradi yoki kichraytiradi. 1 = asl o'lcham, 2 = 2 barobar.",
    },
    {
      name: "skew(x, y)",
      desc: "Elementni qiyshitadi. CSS shrift effektlari, zamonaviy dizaynlarda ishlatiladi.",
    },
    {
      name: "matrix()",
      desc: "Barcha transformlarni bitta qiymatda birlashtiradi. Kamera animatsiyalari uchun.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        <Tag>transform</Tag> xususiyati elementni{" "}
        <strong className="text-[#1a1814]">
          siljitish, aylantirish, o'lchov va qiyshitish
        </strong>{" "}
        imkonini beradi — sahifaning oqimiga ta'sir qilmaydi.
      </p>
      <div className="flex flex-col gap-2">
        {transforms.map((t) => (
          <div
            key={t.name}
            className="flex items-start gap-3 px-3 py-2.5 bg-[#f2efe8] rounded-lg border border-[rgba(26,24,20,0.10)]"
          >
            <code className="font-mono text-xs text-[#c85c1a] font-bold shrink-0 w-36">
              {t.name}
            </code>
            <span className="text-xs text-[#7a7468] leading-relaxed">
              {t.desc}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#7a7468]">
        Interaktiv demo — slayderlarni o'zgartiring:
      </p>
      <div
        className="bg-[#2c2820] rounded-xl flex items-center justify-center"
        style={{ height: 200 }}
      >
        <div
          className="flex items-center justify-center w-20 h-20 font-mono text-sm font-bold text-white transition-all duration-200 rounded-xl"
          style={{
            background: "#c85c1a",
            border: "2px solid #e07a3a",
            transform: `rotate(${rotate}deg) scale(${scaleVal / 100}) translateX(${translateX}px) skewX(${skewX}deg)`,
          }}
        >
          VZ
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          {
            label: "rotate",
            value: rotate,
            set: setRotate,
            min: -180,
            max: 180,
            unit: "deg",
            color: "#c85c1a",
          },
          {
            label: "scale",
            value: scaleVal,
            set: setScaleVal,
            min: 20,
            max: 200,
            unit: "%",
            color: "#185FA5",
          },
          {
            label: "translateX",
            value: translateX,
            set: setTranslateX,
            min: -80,
            max: 80,
            unit: "px",
            color: "#4a9e60",
          },
          {
            label: "skewX",
            value: skewX,
            set: setSkewX,
            min: -45,
            max: 45,
            unit: "deg",
            color: "#993556",
          },
        ].map(({ label, value, set, min, max, unit, color }) => (
          <div
            key={label}
            className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <div className="font-mono text-[10px] mb-0.5" style={{ color }}>
              {label}
            </div>
            <div
              className="mb-1 font-mono text-lg font-black"
              style={{ color }}
            >
              {value}
              {unit}
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
    </div>
  );
}
