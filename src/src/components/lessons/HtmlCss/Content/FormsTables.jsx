// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.4 — FORMS & TABLES
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { TH, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function FormsTablesExplain() {
  const [tab, setTab] = useState("form");
  const inputs = [
    { type: "text", placeholder: "Ism...", desc: "Oddiy matn kiritish" },
    { type: "email", placeholder: "Email...", desc: "Email validatsiya bilan" },
    { type: "password", placeholder: "Parol...", desc: "Yashirilgan matn" },
    { type: "number", placeholder: "20", desc: "Faqat raqamlar" },
    { type: "date", placeholder: "", desc: "Sana tanlash" },
    { type: "range", placeholder: "", desc: "Slayder" },
    { type: "color", placeholder: "", desc: "Rang tanlash" },
    { type: "file", placeholder: "", desc: "Fayl yuklash" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["form", "table"].map((id) => (
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
            {id === "form" ? "Formalar" : "Jadvallar"}
          </button>
        ))}
      </div>

      {tab === "form" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Input turlari — foydalanuvchidan ma'lumot olish uchun:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {inputs.map((inp) => (
              <div
                key={inp.type}
                className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div className="font-mono text-[10px] text-[#c85c1a] mb-1.5">
                  type="{inp.type}"
                </div>
                <input
                  type={inp.type}
                  placeholder={inp.placeholder}
                  className="w-full px-2 py-1 rounded text-xs border border-[rgba(26,24,20,0.15)] bg-white outline-none"
                  style={{ accentColor: "#c85c1a" }}
                />
                <div className="text-[10px] text-[#7a7468] mt-1">
                  {inp.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "table" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Jadval teglari: thead, tbody, tr, th, td
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#c85c1a15]">
                  {["Teg", "Vazifa", "Misol"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-2 font-mono text-[#c85c1a] border border-[rgba(26,24,20,0.10)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["<table>", "Jadval konteyneri", "Butun jadval"],
                  ["<thead>", "Sarlavha qatori", "th elementlari"],
                  ["<tbody>", "Asosiy qismlar", "td elementlari"],
                  ["<tr>", "Jadval qatori", "Bir qator"],
                  ["<th>", "Sarlavha katak", "Qalin, markazlangan"],
                  ["<td>", "Ma'lumot katak", "Oddiy katak"],
                  ["colspan", "Ustunlarni birlashtirish", 'colspan="2"'],
                  ["rowspan", "Qatorlarni birlashtirish", 'rowspan="3"'],
                ].map(([tag, desc, ex]) => (
                  <tr
                    key={tag}
                    className="border-b border-[rgba(26,24,20,0.06)]"
                  >
                    <td className="px-3 py-2 font-mono text-[#c85c1a] border border-[rgba(26,24,20,0.10)]">
                      {tag}
                    </td>
                    <td className="px-3 py-2 text-[#1a1814] border border-[rgba(26,24,20,0.10)]">
                      {desc}
                    </td>
                    <td className="px-3 py-2 text-[#7a7468] border border-[rgba(26,24,20,0.10)]">
                      {ex}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
