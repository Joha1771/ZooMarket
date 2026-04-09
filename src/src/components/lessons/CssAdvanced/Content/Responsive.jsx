// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.6 — RESPONSIVE
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function ResponsiveExplain() {
  const [device, setDevice] = useState("desktop");
  const devices = [
    {
      id: "mobile",
      label: "📱 Mobil",
      width: 375,
      breakpoint: "max-width: 600px",
    },
    {
      id: "tablet",
      label: "📋 Tablet",
      width: 768,
      breakpoint: "max-width: 1000px",
    },
    {
      id: "desktop",
      label: "🖥️ Desktop",
      width: 1440,
      breakpoint: "asosiy stil",
    },
  ];
  const curr = devices.find((d) => d.id === device);

  const units = [
    {
      unit: "px",
      desc: "Piksel — aniq o'lcham. Responsive emas.",
      ex: "font-size: 16px",
    },
    {
      unit: "em",
      desc: "Parent elementning font-size ga nisbiy.",
      ex: "padding: 1.5em",
    },
    {
      unit: "rem",
      desc: "Root (html) ning font-size ga nisbiy. Tavsiya etiladi.",
      ex: "font-size: 1.25rem",
    },
    { unit: "vw", desc: "Viewport kengligining foizi.", ex: "width: 50vw" },
    { unit: "vh", desc: "Viewport balandligining foizi.", ex: "height: 100vh" },
    { unit: "%", desc: "Parent elementga nisbiy foiz.", ex: "width: 100%" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Responsive dizayn — saytni har qanday ekran o'lchamiga moslashtirish.
        Ikkita asosiy qoida: <Tag>viewport meta</Tag> va <Tag>@media</Tag>{" "}
        queries.
      </p>
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1 uppercase tracking-wider">
          HTML head ichida (majburiy!):
        </div>
        <span className="text-[#f07178]">&lt;meta</span>{" "}
        <span className="text-[#ffcb6b]">name</span>=
        <span className="text-[#c3e88d]">"viewport"</span>{" "}
        <span className="text-[#ffcb6b]">content</span>=
        <span className="text-[#c3e88d]">
          "width=device-width, initial-scale=1"
        </span>
        <span className="text-[#f07178]"> /&gt;</span>
      </div>
      <div className="flex gap-2">
        {devices.map((d) => (
          <button
            key={d.id}
            onClick={() => setDevice(d.id)}
            className="flex-1 py-2 font-mono text-[11px] font-bold cursor-pointer border-none rounded-lg transition-all"
            style={{
              background: device === d.id ? "#c85c1a" : "#f2efe8",
              color: device === d.id ? "#fff" : "#1a1814",
              border: `1.5px solid ${device === d.id ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
            }}
          >
            {d.label}
          </button>
        ))}
      </div>
      <div
        className="p-3 border rounded-xl"
        style={{
          background: "#f2efe8",
          border: "1.5px solid rgba(26,24,20,0.10)",
        }}
      >
        <div className="font-mono text-[10px] text-[#7a7468] mb-2">
          {curr?.width}px — {curr?.breakpoint}
        </div>
        <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
          {device === "desktop" && (
            <>
              <div>
                <span className="text-[#82aaff]">.container</span> {"{"}
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-[#82aaff]">max-width</span>:{" "}
                <span className="text-[#c3e88d]">1200px</span>;
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-[#82aaff]">margin</span>:{" "}
                <span className="text-[#c3e88d]">0 auto</span>;
              </div>
              <div>{"}"}</div>
            </>
          )}
          {device === "tablet" && (
            <>
              <div>
                <span className="text-[#c792ea]">@media</span> (
                <span className="text-[#ffcb6b]">max-width: 1000px</span>) {"{"}
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-[#82aaff]">.grid</span> {"{"}
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#82aaff]">
                  grid-template-columns
                </span>: <span className="text-[#c3e88d]">1fr 1fr</span>;
              </div>
              <div>&nbsp;&nbsp;{"}"}</div>
              <div>{"}"}</div>
            </>
          )}
          {device === "mobile" && (
            <>
              <div>
                <span className="text-[#c792ea]">@media</span> (
                <span className="text-[#ffcb6b]">max-width: 600px</span>) {"{"}
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-[#82aaff]">.grid</span> {"{"}
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#82aaff]">
                  grid-template-columns
                </span>: <span className="text-[#c3e88d]">1fr</span>;
              </div>
              <div>&nbsp;&nbsp;{"}"}</div>
              <div>
                &nbsp;&nbsp;<span className="text-[#82aaff]">.navbar</span>{" "}
                {"{"}
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#82aaff]">flex-direction</span>:{" "}
                <span className="text-[#c3e88d]">column</span>;
              </div>
              <div>&nbsp;&nbsp;{"}"}</div>
              <div>{"}"}</div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider">
          CSS birliklari:
        </div>
        {units.map((u) => (
          <div
            key={u.unit}
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <span className="font-mono text-sm font-bold text-[#c85c1a] w-8">
              {u.unit}
            </span>
            <span className="text-xs text-[#7a7468] flex-1">{u.desc}</span>
            <code className="font-mono text-[10px] text-[#1a1814] bg-[#c85c1a10] px-1.5 py-0.5 rounded">
              {u.ex}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
