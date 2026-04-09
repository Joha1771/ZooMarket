import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.12 — PROJECT: FULL REACT APPLICATION
// ═══════════════════════════════════════════════════════════════════════════════

export function ReactProjectExplain() {
  const [tab, setTab] = useState("stack");
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      icon: "🗂️",
      title: "Sahifalar",
      desc: "Home, Detail, Favorites, Cart",
      color: "#61DAFB",
    },
    {
      icon: "🔄",
      title: "State",
      desc: "useReducer + useContext",
      color: "#4a9e60",
    },
    {
      icon: "🌐",
      title: "API",
      desc: "Axios + useFetch hook",
      color: "#c85c1a",
    },
    {
      icon: "🛤️",
      title: "Routing",
      desc: "React Router DOM v6",
      color: "#b07820",
    },
    {
      icon: "🎨",
      title: "Styling",
      desc: "Tailwind yoki CSS Modules",
      color: "#993556",
    },
    { icon: "🌍", title: "i18n", desc: "3 tilda: uz/ru/en", color: "#185FA5" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["stack", "checklist", "deploy"].map((id) => (
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
            {id === "stack"
              ? "Tech Stack"
              : id === "checklist"
                ? "Checklist"
                : "Deploy"}
          </button>
        ))}
      </div>

      {tab === "stack" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            To'liq React ilovasi uchun kerakli texnologiyalar. Bosing — batafsil
            ko'ring:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                className="p-3 text-left transition-all border cursor-pointer rounded-xl"
                style={{
                  background: activeFeature === i ? f.color + "15" : "#f2efe8",
                  borderColor:
                    activeFeature === i ? f.color : "rgba(26,24,20,0.10)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{f.icon}</span>
                  <span className="font-mono text-[11px] font-bold text-[#1a1814]">
                    {f.title}
                  </span>
                </div>
                {activeFeature === i && (
                  <div className="text-[10px] text-[#7a7468] mt-1">
                    {f.desc}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {tab === "checklist" && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">Loyiha topshirish checklist:</p>
          {[
            { text: "Barcha komponentlar propTypes yoki TS bilan", done: true },
            { text: "Loading va Error holatlari ko'rsatilgan", done: true },
            { text: "Responsive dizayn (mobile va desktop)", done: true },
            { text: "React Router bilan routing sozlangan", done: true },
            { text: "Cleanup useEffect da mavjud", done: true },
            { text: "Console da xatolar yo'q", done: false },
            { text: "Netlify/Vercel da deploy qilingan", done: false },
          ].map(({ text, done }, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-2.5 rounded-lg"
              style={{
                background: done ? "#4a9e6010" : "#f2efe8",
                border: `1px solid ${done ? "#4a9e6025" : "rgba(26,24,20,0.10)"}`,
              }}
            >
              <span
                className="text-sm"
                style={{ color: done ? "#4a9e60" : "#7a7468" }}
              >
                {done ? "✅" : "⬜"}
              </span>
              <span className="text-xs text-[#1a1814]">{text}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "deploy" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Deploy — loyihani internetga chiqarish:
          </p>
          {[
            {
              title: "Static deploy (Netlify/Vercel)",
              color: "#4a9e60",
              steps: [
                "npm run build → dist/ papka yaratiladi",
                "dist/ papkani Netlify ga drag & drop",
                "yoki Vercel CLI: vercel deploy",
              ],
            },
            {
              title: "GitHub + Vercel (Dynamic)",
              color: "#61DAFB",
              steps: [
                "Kodni GitHub ga push qiling",
                "Vercel da 'Import Project'",
                "Har push da avtomatik deploy",
              ],
            },
          ].map(({ title, color, steps }) => (
            <div
              key={title}
              className="p-3.5 rounded-xl border"
              style={{ background: color + "08", borderColor: color + "25" }}
            >
              <div
                className="font-mono text-[11px] font-bold mb-2"
                style={{ color }}
              >
                {title}
              </div>
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-2 mb-1">
                  <span
                    className="font-mono text-[10px] font-black shrink-0"
                    style={{ color }}
                  >
                    {i + 1}.
                  </span>
                  <span className="text-[10px] text-[#7a7468]">{s}</span>
                </div>
              ))}
            </div>
          ))}
          <InfoBox color="#c85c1a" icon="⚠️">
            Deploy oldidan: barcha console.log larni o'chiring, env variables
            to'g'ri sozlang, npm run build xatosiz ishlashini tekshiring.
          </InfoBox>
        </div>
      )}
    </div>
  );
}
