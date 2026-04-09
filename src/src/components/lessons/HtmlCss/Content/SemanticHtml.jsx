// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.5 — SEMANTIC HTML
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function SemanticHtmlExplain() {
  const [view, setView] = useState("semantic");
  const tags = [
    {
      tag: "<header>",
      color: "#4a9e60",
      desc: "Sahifa yoki bo'lim sarlavhasi. Logo, nav odatda shu yerda.",
    },
    {
      tag: "<nav>",
      color: "#185FA5",
      desc: "Navigatsiya havolalari to'plami.",
    },
    {
      tag: "<main>",
      color: "#c85c1a",
      desc: "Sahifaning asosiy, yagona kontenti.",
    },
    {
      tag: "<section>",
      color: "#993556",
      desc: "Tematik bo'lim. Sarlavhasi bo'lishi kerak.",
    },
    {
      tag: "<article>",
      color: "#b07820",
      desc: "Mustaqil kontent: maqola, blog post, xabar.",
    },
    {
      tag: "<aside>",
      color: "#5a6a7a",
      desc: "Yon panel. Asosiy kontentga bog'liq qo'shimcha ma'lumot.",
    },
    {
      tag: "<footer>",
      color: "#3a6a4a",
      desc: "Pastki qism: copyright, kontaktlar, havolalar.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["semantic", "div"].map((id) => (
          <button
            key={id}
            onClick={() => setView(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: view === id ? "#c85c1a" : "#f2efe8",
              borderColor: view === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: view === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "semantic" ? "✓ Semantik" : "✗ div-soup"}
          </button>
        ))}
      </div>

      {view === "semantic" ? (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">
            Semantik teglar ma'no bildiradi. Brauzer, SEO va imkoniyat
            dasturlari uchun muhim:
          </p>
          {tags.map((t) => (
            <div
              key={t.tag}
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg border"
              style={{
                background: t.color + "0a",
                borderColor: t.color + "30",
              }}
            >
              <code
                className="w-24 font-mono text-xs font-bold shrink-0"
                style={{ color: t.color }}
              >
                {t.tag}
              </code>
              <span className="text-xs text-[#1a1814] leading-relaxed">
                {t.desc}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div
            className="px-4 py-3 mb-3 text-sm leading-relaxed border rounded-lg"
            style={{ background: "#c85c1a12", borderColor: "#c85c1a35" }}
          >
            ⚠️ "div-soup" — hamma narsa div ichida. Ma'no yo'q, SEO yomon,
            accessibility nol.
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
            <div className="text-[#e06c75]">{"<div>"}</div>
            <div className="text-[#e06c75] pl-3">
              {'<div class="nav">'}
              <span className="text-[rgba(255,255,255,0.4)]">
                ...havolalar...
              </span>
              {"</div>"}
            </div>
            <div className="text-[#e06c75] pl-3">
              {'<div class="main">'}
              <span className="text-[rgba(255,255,255,0.4)]">
                ...kontent...
              </span>
              {"</div>"}
            </div>
            <div className="text-[#e06c75] pl-3">
              {'<div class="footer">'}
              <span className="text-[rgba(255,255,255,0.4)]">...yadro...</span>
              {"</div>"}
            </div>
            <div className="text-[#e06c75]">{"</div>"}</div>
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1 uppercase tracking-wider">
              ✓ To'g'ri yozish:
            </div>
            <div className="text-[#4a9e60]">{"<body>"}</div>
            <div className="text-[#185FA5] pl-3">
              {"<nav>"}
              <span className="text-[rgba(255,255,255,0.4)]">
                ...havolalar...
              </span>
              {"</nav>"}
            </div>
            <div className="text-[#c85c1a] pl-3">
              {"<main>"}
              <span className="text-[rgba(255,255,255,0.4)]">
                ...kontent...
              </span>
              {"</main>"}
            </div>
            <div className="text-[#3a6a4a] pl-3">
              {"<footer>"}
              <span className="text-[rgba(255,255,255,0.4)]">...yadro...</span>
              {"</footer>"}
            </div>
            <div className="text-[#4a9e60]">{"</body>"}</div>
          </div>
        </div>
      )}
    </div>
  );
}
