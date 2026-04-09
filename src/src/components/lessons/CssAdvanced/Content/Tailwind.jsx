// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.11 — TAILWIND
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { InfoBox } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function TailwindExplain() {
  const [tab, setTab] = useState("concept");
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Tailwind CSS — utility-first framework. Har bir CSS xususiyati uchun
        tayyor class mavjud. CSS faylini minimal ushlab turadi.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {["concept", "classes", "responsive", "config"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold cursor-pointer border-none transition-all"
            style={{
              background: tab === t ? "#38bdf8" : "#f2efe8",
              color: tab === t ? "#fff" : "#1a1814",
              border: `1.5px solid ${tab === t ? "#38bdf8" : "rgba(26,24,20,0.10)"}`,
            }}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === "concept" && (
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="font-mono text-[10px] text-[#c85c1a] mb-1.5 uppercase tracking-wider">
                Oddiy CSS
              </div>
              <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs text-[rgba(255,255,255,0.5)] leading-loose">
                {'<div class="card">'}
                <br />
                &nbsp;&nbsp;{"<h2>Sarlavha</h2>"}
                <br />
                {"</div>"}
                <br />
                <br />
                {".card {"}
                <br />
                &nbsp;&nbsp;background: white;
                <br />
                &nbsp;&nbsp;padding: 16px 24px;
                <br />
                &nbsp;&nbsp;border-radius: 12px;
                <br />
                &nbsp;&nbsp;box-shadow: 0 4px 12px ...;
                <br />
                {"}"}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#38bdf8] mb-1.5 uppercase tracking-wider">
                Tailwind CSS
              </div>
              <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs text-[#c3e88d] leading-loose">
                {"<div class="}
                <br />
                &nbsp;&nbsp;<span className="text-[#ffcb6b]">"bg-white</span>
                <br />
                &nbsp;&nbsp;<span className="text-[#ffcb6b]">px-6 py-4</span>
                <br />
                &nbsp;&nbsp;<span className="text-[#ffcb6b]">rounded-xl</span>
                <br />
                &nbsp;&nbsp;<span className="text-[#ffcb6b]">shadow-lg"</span>
                <br />
                {">"}
                <br />
                &nbsp;&nbsp;{"<h2>Sarlavha</h2>"}
                <br />
                {"</div>"}
              </div>
            </div>
          </div>
          <InfoBox color="#38bdf8" icon="💡">
            <strong>Afzalligi:</strong> CSS fayl yozmaysiz. Class nomlarini
            bilganingiz kifoya. Loyiha o'sishi bilan CSS hajmi o'smaydi.
          </InfoBox>
        </div>
      )}
      {tab === "classes" && (
        <div className="flex flex-col gap-2">
          {[
            {
              cat: "Spacing",
              classes: ["p-4", "px-6", "py-2", "mt-4", "mb-8", "gap-4"],
              desc: "padding, margin, gap",
            },
            {
              cat: "Colors",
              classes: [
                "bg-white",
                "bg-gray-100",
                "text-black",
                "border-gray-200",
              ],
              desc: "background, text, border rangi",
            },
            {
              cat: "Typography",
              classes: [
                "text-sm",
                "text-xl",
                "font-bold",
                "text-center",
                "tracking-wide",
              ],
              desc: "shrift o'lchami, og'irligi, joylashuv",
            },
            {
              cat: "Layout",
              classes: [
                "flex",
                "grid",
                "hidden",
                "block",
                "items-center",
                "justify-between",
              ],
              desc: "display, flex/grid alignment",
            },
            {
              cat: "Sizing",
              classes: ["w-full", "w-64", "h-12", "max-w-lg", "min-h-screen"],
              desc: "kenglik, balandlik",
            },
            {
              cat: "Effects",
              classes: [
                "rounded-xl",
                "shadow-lg",
                "opacity-50",
                "overflow-hidden",
              ],
              desc: "radius, shadow, opacity",
            },
          ].map(({ cat, classes, desc }) => (
            <div
              key={cat}
              className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[10px] font-bold text-[#38bdf8]">
                  {cat}
                </span>
                <span className="text-[10px] text-[#7a7468]">{desc}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {classes.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                    style={{
                      background: "#38bdf815",
                      color: "#0ea5e9",
                      border: "1px solid #38bdf830",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      {tab === "responsive" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Tailwind mobile-first. Prefix qo'shib responsive qiling:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs text-[#c3e88d] leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">
              Breakpoints:
            </div>
            {[
              ["sm:", "640px+"],
              ["md:", "768px+"],
              ["lg:", "1024px+"],
              ["xl:", "1280px+"],
              ["2xl:", "1536px+"],
            ].map(([p, w]) => (
              <div key={p}>
                <span className="text-[#c792ea]">{p}</span>{" "}
                <span className="text-[rgba(255,255,255,0.3)]">
                  → min-width: {w}
                </span>
              </div>
            ))}
            <br />
            <div className="text-[rgba(255,255,255,0.3)] mb-1">Misol:</div>
            <div>
              {"<div class="}
              <span className="text-[#ffcb6b]">
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              </span>
              {">"}
            </div>
          </div>
        </div>
      )}
      {tab === "config" && (
        <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
          <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">
            tailwind.config.js:
          </div>
          <div>
            <span className="text-[#c792ea]">module</span>.
            <span className="text-[#82aaff]">exports</span> = {"{"}
          </div>
          <div>
            &nbsp;&nbsp;<span className="text-[#ffcb6b]">content</span>: [
            <span className="text-[#c3e88d]">{"'./src/**/*.{js,jsx}'"}</span>],
          </div>
          <div>
            &nbsp;&nbsp;<span className="text-[#ffcb6b]">theme</span>: {"{"}
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#ffcb6b]">extend</span>: {"{"}
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#ffcb6b]">colors</span>: {"{"}
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#ffcb6b]">primary</span>:{" "}
            <span className="text-[#c3e88d]">'#c85c1a'</span>,
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-[#ffcb6b]">dark</span>:{" "}
            <span className="text-[#c3e88d]">'#1a1814'</span>,
          </div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</div>
          <div>&nbsp;&nbsp;{"}"}</div>
          <div>{"}"}</div>
        </div>
      )}
    </div>
  );
}
