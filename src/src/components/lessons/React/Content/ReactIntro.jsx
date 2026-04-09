import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.1 — WHY REACT: VIRTUAL DOM
// ═══════════════════════════════════════════════════════════════════════════════

export function ReactIntroExplain() {
  const [tab, setTab] = useState("vdom");
  const [domStep, setDomStep] = useState(0);

  const domSteps = [
    {
      label: "State o'zgaradi",
      icon: "📝",
      realDesc: "Real DOM: Butun sahifani qayta chizadi",
      virtualDesc: "Virtual DOM: Xotirada nusxani yangilaydi",
      realColor: "#e06c75",
      virtualColor: "#61DAFB",
    },
    {
      label: "Farq hisoblanadi",
      icon: "🔍",
      realDesc: "Real DOM: Hamma element tekshiriladi",
      virtualDesc: "Virtual DOM: Faqat o'zgargan joy topiladi (diff)",
      realColor: "#e06c75",
      virtualColor: "#61DAFB",
    },
    {
      label: "DOM yangilanadi",
      icon: "✅",
      realDesc: "Real DOM: Barcha elementlar qayta render",
      virtualDesc: "Virtual DOM: Faqat farq Real DOM'ga yoziladi",
      realColor: "#e06c75",
      virtualColor: "#4a9e60",
    },
  ];

  const cur = domSteps[domStep];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["vdom", "spa", "lib"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#61DAFB" : "#f2efe8",
              borderColor: tab === id ? "#61DAFB" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#0a1a20" : "#1a1814",
            }}
          >
            {id === "vdom"
              ? "Virtual DOM"
              : id === "spa"
                ? "SPA/MPA"
                : "Library"}
          </button>
        ))}
      </div>

      {tab === "vdom" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React tez ishlashining sababi — Virtual DOM. Har bir qadamni bosing:
          </p>

          <div className="flex gap-1.5 mb-1">
            {domSteps.map((s, i) => (
              <button
                key={i}
                onClick={() => setDomStep(i)}
                className="flex-1 py-1.5 rounded-lg font-mono text-[10px] font-bold cursor-pointer border transition-all"
                style={{
                  background: domStep === i ? "#61DAFB" : "#f2efe8",
                  borderColor:
                    domStep === i ? "#61DAFB" : "rgba(26,24,20,0.10)",
                  color: domStep === i ? "#0a1a20" : "#7a7468",
                }}
              >
                {i + 1}. {s.icon}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs font-bold text-[#1a1814] text-center py-1">
            {cur.label}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div
              className="p-3 border rounded-xl"
              style={{
                background: cur.realColor + "10",
                borderColor: cur.realColor + "30",
              }}
            >
              <div
                className="font-mono text-[10px] font-bold mb-2"
                style={{ color: cur.realColor }}
              >
                Real DOM
              </div>
              <div className="text-xs text-[#1a1814] leading-relaxed">
                {cur.realDesc}
              </div>
            </div>
            <div
              className="p-3 border rounded-xl"
              style={{
                background: cur.virtualColor + "10",
                borderColor: cur.virtualColor + "30",
              }}
            >
              <div
                className="font-mono text-[10px] font-bold mb-2"
                style={{ color: cur.virtualColor }}
              >
                Virtual DOM
              </div>
              <div className="text-xs text-[#1a1814] leading-relaxed">
                {cur.virtualDesc}
              </div>
            </div>
          </div>

          <InfoBox color="#61DAFB" icon="⚡">
            Bu jarayon <strong>Reconciliation</strong> deyiladi. React bu
            jarayonni avtomatik boshqaradi — sen faqat state ni o'zgartirasiz.
          </InfoBox>
        </div>
      )}

      {tab === "spa" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React — bu SPA texnologiyasi. SPA va MPA o'rtasidagi farq:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#61DAFB10]">
                  {["", "SPA", "MPA"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-2 font-mono border border-[rgba(26,24,20,0.10)]"
                      style={{ color: "#61DAFB" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["SEO", "✗ Qiyin", "✓ Oson"],
                  ["Birinchi yuklash", "✗ Sekin", "✓ Tez"],
                  ["Navigatsiya tezligi", "✓ Tez", "✗ Sekin"],
                  ["Server yuki", "✓ Kam", "✗ Ko'p"],
                  ["UX sifati", "✓ Yaxshi", "○ O'rtacha"],
                  ["Misollar", "Gmail, Figma", "Wikipedia, Gov"],
                ].map(([label, spa, mpa]) => (
                  <tr key={label}>
                    <td className="px-3 py-2 font-mono text-[#7a7468] border border-[rgba(26,24,20,0.10)]">
                      {label}
                    </td>
                    <td
                      className="px-3 py-2 border border-[rgba(26,24,20,0.10)]"
                      style={{
                        color: spa.startsWith("✓")
                          ? "#4a9e60"
                          : spa.startsWith("✗")
                            ? "#e06c75"
                            : "#1a1814",
                      }}
                    >
                      {spa}
                    </td>
                    <td
                      className="px-3 py-2 border border-[rgba(26,24,20,0.10)]"
                      style={{
                        color: mpa.startsWith("✓")
                          ? "#4a9e60"
                          : mpa.startsWith("✗")
                            ? "#e06c75"
                            : "#1a1814",
                      }}
                    >
                      {mpa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoBox color="#4a9e60" icon="💡">
            Next.js orqali React ham server-side rendering (SSR) qila oladi — bu
            SPA'ning SEO muammosini hal qiladi.
          </InfoBox>
        </div>
      )}

      {tab === "lib" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React — bu library (kutubxona), framework emas. Farqi katta:
          </p>
          {[
            {
              title: "Library (React)",
              color: "#61DAFB",
              icon: "📚",
              desc: "Faqat UI qismi uchun javob beradi. Routing, state, fetch — o'zing tanlaysan.",
              items: [
                "Kichik, moslashuvchan",
                "O'zingiz tool tanlaysiz",
                "React Router, Axios — qo'shimcha",
              ],
            },
            {
              title: "Framework (Angular, Vue)",
              color: "#c85c1a",
              icon: "🏗️",
              desc: "Hamma narsa ichida — routing, HTTP, form, testing barchasi bor.",
              items: [
                "Katta, to'liq yechim",
                "Tool tanlov cheklangan",
                "Hamma narsa built-in",
              ],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-3.5 rounded-xl border"
              style={{
                background: item.color + "08",
                borderColor: item.color + "25",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{item.icon}</span>
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: item.color }}
                >
                  {item.title}
                </span>
              </div>
              <p className="text-xs text-[#7a7468] mb-2 leading-relaxed">
                {item.desc}
              </p>
              {item.items.map((it, i) => (
                <div key={i} className="flex items-center gap-1.5 mb-0.5">
                  <span style={{ color: item.color }} className="text-xs">
                    •
                  </span>
                  <span className="text-xs text-[#1a1814]">{it}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
