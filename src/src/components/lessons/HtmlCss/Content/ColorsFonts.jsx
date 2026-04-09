// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.7 — COLORS & FONTS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { TH, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function ColorsFontsExplain() {
  const [tab, setTab] = useState("color");
  const [r, setR] = useState(200);
  const [g, setG] = useState(92);
  const [b, setBlu] = useState(26);
  const [a, setA] = useState(100);

  const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  const rgba = `rgba(${r}, ${g}, ${b}, ${(a / 100).toFixed(1)})`;
  const bgColor = `rgba(${r},${g},${b},${a / 100})`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["color", "font"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "color" ? "Ranglar" : "Shriftlar"}
          </button>
        ))}
      </div>

      {tab === "color" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            CSS'da 4 xil rang formati. RGB slayderlarini o'zgartirib ko'ring:
          </p>
          <div
            className="h-14 rounded-xl border border-[rgba(26,24,20,0.10)] transition-colors duration-200 flex items-center justify-center font-mono text-xs font-bold"
            style={{
              background: bgColor,
              color:
                r * 0.299 + g * 0.587 + b * 0.114 > 128 ? "#1a1814" : "#fff",
            }}
          >
            {hex} • {rgba}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "R", v: r, set: setR, color: "#e06c75" },
              { label: "G", v: g, set: setG, color: "#4a9e60" },
              { label: "B", v: b, set: setBlu, color: "#82aaff" },
            ].map((c) => (
              <div
                key={c.label}
                className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div
                  className="font-mono text-[10px] mb-1"
                  style={{ color: c.color }}
                >
                  {c.label}
                </div>
                <div className="font-mono text-lg font-bold text-[#1a1814]">
                  {c.v}
                </div>
                <input
                  type="range"
                  min={0}
                  max={255}
                  value={c.v}
                  onChange={(e) => c.set(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: c.color }}
                />
              </div>
            ))}
          </div>
          <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-1">
              Alpha (shaffoflik)
            </div>
            <div className="font-mono text-lg font-bold text-[#1a1814]">
              {a}%
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={a}
              onChange={(e) => setA(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#c85c1a" }}
            />
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1">
              Formatlari:
            </div>
            <div>
              <span className="text-[#82aaff]">color</span>:{" "}
              <span className="text-[#c3e88d]">red</span>;
            </div>
            <div>
              <span className="text-[#82aaff]">color</span>:{" "}
              <span className="text-[#c3e88d]">{hex}</span>;
            </div>
            <div>
              <span className="text-[#82aaff]">color</span>:{" "}
              <span className="text-[#c3e88d]">
                rgb({r},{g},{b})
              </span>
              ;
            </div>
            <div>
              <span className="text-[#82aaff]">color</span>:{" "}
              <span className="text-[#c3e88d]">{rgba}</span>;
            </div>
          </div>
        </div>
      )}

      {tab === "font" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">Shrift xususiyatlari:</p>
          {[
            {
              prop: "font-family",
              values: ["serif", "sans-serif", "monospace"],
              desc: "Shrift turi",
            },
            {
              prop: "font-size",
              values: ["12px", "16px", "24px", "1.5rem", "2em"],
              desc: "Shrift o'lchami",
            },
            {
              prop: "font-weight",
              values: ["100", "400", "700", "900", "bold"],
              desc: "Qalinlik",
            },
            {
              prop: "font-style",
              values: ["normal", "italic", "oblique"],
              desc: "Qiyalik",
            },
            {
              prop: "line-height",
              values: ["1", "1.5", "2", "normal"],
              desc: "Qator balandligi",
            },
            {
              prop: "text-align",
              values: ["left", "center", "right", "justify"],
              desc: "Hizalash",
            },
            {
              prop: "text-transform",
              values: ["none", "uppercase", "lowercase", "capitalize"],
              desc: "Harf registri",
            },
            {
              prop: "letter-spacing",
              values: ["normal", "0.05em", "0.1em", "0.2em"],
              desc: "Harflar oralig'i",
            },
          ].map((f) => (
            <div
              key={f.prop}
              className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="font-mono text-[10px] text-[#c85c1a] mb-1.5">
                {f.prop}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {f.values.map((v) => (
                  <span
                    key={v}
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#c85c1a10] text-[#c85c1a]"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <div className="text-[10px] text-[#7a7468]">{f.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
