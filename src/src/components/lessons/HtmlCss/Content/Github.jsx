// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.11 — GITHUB

import { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
export function GithubExplain() {
  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "Git nima?",
      desc: "Git — kodning versiyalarini nazorat qiluvchi tizim. Har bir o'zgarish saqlanadi. Istagan vaqt orqaga qaytish mumkin.",
      visual: (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {["v1.0", "v1.1", "v1.2", "v2.0 ← Hozir"].map((v, i) => (
            <div key={v} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#7a7468] text-xs">→</span>}
              <div
                className="px-3 py-2 font-mono text-xs font-bold rounded-lg"
                style={{
                  background: i === 3 ? "#c85c1a20" : "#f2efe8",
                  color: i === 3 ? "#c85c1a" : "#1a1814",
                  border: `1.5px solid ${i === 3 ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Birinchi marta sozlash",
      desc: "Git o'rnatilgandan keyin ismingiz va emailingizni kiriting. Bu commit'larda ko'rinadi.",
      visual: (
        <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
          <div className="text-[rgba(255,255,255,0.4)] text-[10px] mb-2">
            Terminal:
          </div>
          <div>
            <span className="text-[#4a9e60]">$</span>{" "}
            <span className="text-[#c3e88d]">
              git config --global user.name
            </span>{" "}
            <span className="text-[#f78c6c]">"Isming"</span>
          </div>
          <div>
            <span className="text-[#4a9e60]">$</span>{" "}
            <span className="text-[#c3e88d]">
              git config --global user.email
            </span>{" "}
            <span className="text-[#f78c6c]">"email@example.com"</span>
          </div>
        </div>
      ),
    },
    {
      title: "Asosiy buyruqlar",
      desc: "Har kuni ishlatadigan 5 ta buyruq. Tartib: add → commit → push.",
      visual: (
        <div className="flex flex-col gap-1.5">
          {[
            { cmd: "git init", color: "#4a9e60", desc: "Papkada git boshlash" },
            {
              cmd: "git add .",
              color: "#185FA5",
              desc: "Barcha o'zgarishlarni sahnaga olish",
            },
            {
              cmd: 'git commit -m "..."',
              color: "#c85c1a",
              desc: "O'zgarishlarni izoh bilan saqlash",
            },
            { cmd: "git push", color: "#993556", desc: "GitHub'ga yuborish" },
            { cmd: "git pull", color: "#b07820", desc: "GitHub'dan olish" },
          ].map(({ cmd, color, desc }) => (
            <div
              key={cmd}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg border"
              style={{ background: color + "0a", borderColor: color + "30" }}
            >
              <code
                className="font-mono text-xs font-bold"
                style={{ color, minWidth: 160 }}
              >
                {cmd}
              </code>
              <span className="text-xs text-[#7a7468]">{desc}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Netlify'ga deploy",
      desc: "Loyihangizni internetga chiqarish. GitHub'ga push qilasiz — Netlify avtomatik yangilaydi.",
      visual: (
        <div className="flex flex-col gap-2">
          {[
            "1. GitHub'da yangi repo yarating",
            "2. git push qiling",
            "3. netlify.com'da GitHub'ni ulang",
            "4. Branch tanlang → Deploy",
            "✓ Saytingiz tayyor!",
          ].map((s, i) => (
            <div
              key={s}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
              style={{
                background: i === 4 ? "#4a9e6015" : "#f2efe8",
                border: `1px solid ${i === 4 ? "#4a9e6040" : "rgba(26,24,20,0.10)"}`,
              }}
            >
              <span
                className="font-mono text-[10px] font-bold"
                style={{ color: i === 4 ? "#2a6040" : "#c85c1a" }}
              >
                {i === 4 ? "✓" : i + 1}
              </span>
              <span className="text-xs text-[#1a1814]">{s}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)] mb-3.5">
        <div className="text-sm font-bold text-[#1a1814] mb-1.5">
          {steps[step].title}
        </div>
        <p className="text-xs text-[#7a7468] mb-3.5 leading-relaxed">
          {steps[step].desc}
        </p>
        {steps[step].visual}
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="px-4 py-2 rounded-lg border border-[rgba(26,24,20,0.10)] bg-[#f2efe8] font-mono text-xs cursor-pointer"
          style={{ color: step === 0 ? "#7a7468" : "#1a1814" }}
        >
          ← Oldingi
        </button>
        <div className="flex gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              onClick={() => setStep(i)}
              className="h-2 transition-all duration-200 rounded-full cursor-pointer"
              style={{
                width: i === step ? 20 : 8,
                background: i === step ? "#c85c1a" : "rgba(26,24,20,0.10)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
          className="px-4 py-2 font-mono text-xs font-bold border-none rounded-lg cursor-pointer"
          style={{
            background: step === steps.length - 1 ? "#f2efe8" : "#c85c1a",
            color: step === steps.length - 1 ? "#7a7468" : "#fff",
            boxShadow: step === steps.length - 1 ? "none" : "0 3px 0 0 #8a3a0a",
          }}
        >
          Keyingi →
        </button>
      </div>
    </div>
  );
}
