// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.1 — JS INTRO
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function JsIntroExplain() {
  const [active, setActive] = useState(null);
  const roles = [
    {
      id: "html",
      icon: "◧",
      label: "HTML",
      color: "#e06c75",
      desc: "Sahifaning skeleti — tuzilma. Zamonaviy binoning temir-beton armatürasi kabi.",
    },
    {
      id: "css",
      icon: "✦",
      label: "CSS",
      color: "#185FA5",
      desc: "Ko'rinish va dizayn — ranglar, o'lchamlar, animatsiyalar. Binoning fasadi.",
    },
    {
      id: "js",
      icon: "⚡",
      label: "JavaScript",
      color: "#c85c1a",
      desc: "Interaktivlik va mantiq — tugma bosilganda nima bo'ladi? Binoning elektr tizimi.",
    },
  ];

  const timeline = [
    {
      year: "1995",
      text: "Brendan Eich 10 kunda yaratdi. Netscape Navigator.",
      color: "#4a9e60",
    },
    {
      year: "1997",
      text: "ECMAScript standarti — ES1. Barcha brauzerlar uchun.",
      color: "#185FA5",
    },
    {
      year: "2009",
      text: "ES5 — JSON, strict mode, Array metodlari.",
      color: "#993556",
    },
    {
      year: "2015",
      text: "ES6 — let/const, arrow, class, Promise. Revolyutsiya!",
      color: "#c85c1a",
    },
    {
      year: "Hozir",
      text: "ES2024+ — har yil yangi imkoniyatlar.",
      color: "#b07820",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Veb-dasturlashning 3 asosi bor. Har biri o'z vazifasini bajaradi:
      </p>
      <div className="grid grid-cols-3 gap-2">
        {roles.map((r) => (
          <button
            key={r.id}
            onClick={() => setActive(active === r.id ? null : r.id)}
            className="p-3 text-left transition-all duration-200 border-2 cursor-pointer rounded-xl"
            style={{
              background: active === r.id ? r.color + "20" : r.color + "0a",
              borderColor: active === r.id ? r.color : r.color + "40",
            }}
          >
            <div className="text-xl mb-1.5">{r.icon}</div>
            <div
              className="font-mono text-sm font-bold"
              style={{ color: r.color }}
            >
              {r.label}
            </div>
            {active === r.id && (
              <div className="text-xs text-[#1a1814] mt-2 leading-relaxed">
                {r.desc}
              </div>
            )}
          </button>
        ))}
      </div>
      {!active && (
        <p className="text-center text-xs text-[#7a7468] font-mono">
          👆 Bosing
        </p>
      )}
      <div className="flex flex-col gap-1.5">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-1">
          JS tarixi:
        </div>
        {timeline.map((t) => (
          <div
            key={t.year}
            className="flex items-start gap-3 px-3 py-2 border rounded-lg"
            style={{ background: t.color + "0a", borderColor: t.color + "25" }}
          >
            <span
              className="font-mono text-xs font-bold w-14 shrink-0"
              style={{ color: t.color }}
            >
              {t.year}
            </span>
            <span className="text-xs text-[#1a1814]">{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function JsIntroLearn() {
  const [where, setWhere] = useState("external");
  const examples = {
    inline: {
      label: "Inline (to'g'ridan-to'g'ri tegda)",
      code: `<button onclick="alert('Bosildi!')">Bosing</button>`,
      pros: "Tez yozish mumkin",
      cons: "HTML va JS aralashib ketadi — yomon amaliyot",
    },
    internal: {
      label: "Internal (script tegi ichida)",
      code: `<script>\n  console.log('Salom!');\n</script>`,
      pros: "Alohida fayl kerak emas",
      cons: "Katta loyihalarda tartibsiz bo'ladi",
    },
    external: {
      label: "External (alohida .js fayl)",
      code: `<script src="main.js"></script>\n\n// main.js faylida:\nconsole.log('Salom!');`,
      pros: "✓ Eng yaxshi amaliyot. Kodni qayta ishlatish oson",
      cons: "Bitta qo'shimcha fayl kerak",
    },
  };

  const cur = examples[where];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        JS kodni HTML'ga 3 xil usulda qo'shish mumkin. Eng yaxshi usulni
        tanlang:
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {Object.entries(examples).map(([key]) => (
          <button
            key={key}
            onClick={() => setWhere(key)}
            className="p-2.5 rounded-lg text-left border cursor-pointer transition-all"
            style={{
              background: where === key ? "#c85c1a" : "#f2efe8",
              borderColor: where === key ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: where === key ? "#fff" : "#1a1814",
            }}
          >
            <div className="font-mono text-[10px] font-bold">{key}</div>
          </button>
        ))}
      </div>
      <div className="text-xs font-semibold text-[#1a1814]">{cur.label}</div>
      <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
        {cur.code}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-lg bg-[#4a9e6015] border border-[#4a9e6030]">
          <div className="text-[10px] font-mono text-[#2a6040] mb-1">AFZAL</div>
          <div className="text-xs text-[#1a1814]">{cur.pros}</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#c85c1a10] border border-[#c85c1a25]">
          <div className="text-[10px] font-mono text-[#c85c1a] mb-1">
            KAMCHILIK
          </div>
          <div className="text-xs text-[#1a1814]">{cur.cons}</div>
        </div>
      </div>
    </div>
  );
}
