// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.5 — GRADIENTS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function GradientsExplain() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState("#c85c1a");
  const [color2, setColor2] = useState("#185FA5");

  const gradient =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
      : type === "radial"
        ? `radial-gradient(circle, ${color1}, ${color2})`
        : `conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1})`;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        CSS gradientlar — ikki yoki undan ko'p rang orasidagi silliq o'tish.{" "}
        <Tag>background-image</Tag> xususiyati bilan ishlatiladi.
      </p>
      <div className="flex gap-2">
        {["linear", "radial", "conic"].map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border-none rounded-lg cursor-pointer"
            style={{
              background: type === t ? "#c85c1a" : "#f2efe8",
              color: type === t ? "#fff" : "#1a1814",
              border: `1.5px solid ${type === t ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
            }}
          >
            {t}-gradient
          </button>
        ))}
      </div>
      <div
        className="h-32 transition-all duration-500 rounded-xl"
        style={{ background: gradient }}
      />
      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
          <div className="font-mono text-[10px] text-[#7a7468] mb-1">
            Rang 1
          </div>
          <input
            type="color"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="w-full h-8 border-none rounded cursor-pointer"
          />
        </div>
        <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
          <div className="font-mono text-[10px] text-[#7a7468] mb-1">
            Rang 2
          </div>
          <input
            type="color"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="w-full h-8 border-none rounded cursor-pointer"
          />
        </div>
      </div>
      {type !== "radial" && (
        <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
          <div className="font-mono text-[10px] text-[#7a7468] mb-1">
            Burchak: {angle}°
          </div>
          <input
            type="range"
            min={0}
            max={360}
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-full"
            style={{ accentColor: "#c85c1a" }}
          />
        </div>
      )}
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-[11px] text-[#c3e88d] leading-loose break-all">
        background-image: {gradient};
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          {
            label: "Multi-stop",
            code: "linear-gradient(to right, red, orange, yellow, green)",
          },
          {
            label: "Diagonal",
            code: "linear-gradient(45deg, #c85c1a 0%, #185FA5 100%)",
          },
          {
            label: "Oval radial",
            code: "radial-gradient(ellipse, #fff 30%, #c85c1a 100%)",
          },
          {
            label: "Mesh effekt",
            code: "conic-gradient(#c85c1a 0%, #185FA5 50%, #c85c1a 100%)",
          },
        ].map(({ label, code }) => (
          <div
            key={label}
            className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <div className="font-mono text-[10px] text-[#c85c1a] mb-1">
              {label}
            </div>
            <div className="h-8 rounded" style={{ background: code }} />
          </div>
        ))}
      </div>
    </div>
  );
}
