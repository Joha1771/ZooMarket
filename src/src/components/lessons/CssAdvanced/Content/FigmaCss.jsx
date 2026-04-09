// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.7 — FIGMA TO CSS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function FigmaCssExplain() {
  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "Figma'dan o'lchamlarni olish",
      desc: "Elementni tanlang → o'ng panel → Width, Height, padding qiymatlarini ko'ring. Dev Mode yoqing.",
      visual: (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#c85c1a] mb-2 uppercase tracking-wider">
              Figma panel
            </div>
            {[
              ["W", "320px"],
              ["H", "48px"],
              ["Padding", "16px 24px"],
              ["Radius", "8px"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between font-mono text-xs py-0.5 border-b border-[rgba(26,24,20,0.06)]"
              >
                <span className="text-[#7a7468]">{k}</span>
                <span className="text-[#1a1814] font-bold">{v}</span>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-[#2c2820]">
            <div className="font-mono text-[10px] text-[#c85c1a] mb-2 uppercase tracking-wider">
              CSS natija
            </div>
            <div className="font-mono text-xs leading-loose">
              <span className="text-[#82aaff]">width</span>:{" "}
              <span className="text-[#c3e88d]">320px</span>;<br />
              <span className="text-[#82aaff]">height</span>:{" "}
              <span className="text-[#c3e88d]">48px</span>;<br />
              <span className="text-[#82aaff]">padding</span>:{" "}
              <span className="text-[#c3e88d]">16px 24px</span>;<br />
              <span className="text-[#82aaff]">border-radius</span>:{" "}
              <span className="text-[#c3e88d]">8px</span>;
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Ranglarni olish",
      desc: "Elementni tanlang → Fill bo'limi → HEX kodni nusxalang. Opacity uchun rgba ishlating.",
      visual: (
        <div className="flex flex-col gap-2">
          {[
            { name: "Primary", figma: "#C85C1A", css: "background: #c85c1a" },
            { name: "Text", figma: "#1A1814", css: "color: #1a1814" },
            { name: "Surface", figma: "#F2EFE8", css: "background: #f2efe8" },
            {
              name: "Overlay",
              figma: "rgba(26,24,20,0.6)",
              css: "background: rgba(26,24,20,0.6)",
            },
          ].map(({ name, figma, css }) => (
            <div
              key={name}
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div
                className="w-8 h-8 rounded-lg shrink-0"
                style={{ background: figma }}
              />
              <div>
                <div className="font-mono text-[10px] text-[#7a7468]">
                  {name} → {figma}
                </div>
                <div className="font-mono text-[10px] text-[#c85c1a]">
                  {css}
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Shriftlarni o'rnatish",
      desc: "Typography paneli: font name, size, weight, line-height. Google Fonts'dan import qiling.",
      visual: (
        <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
          <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">
            Google Fonts import:
          </div>
          <div className="text-[#c792ea]">@import</div>
          <div className="text-[#c3e88d] pl-2">
            url('https://fonts.googleapis.com/
          </div>
          <div className="text-[#c3e88d] pl-4">
            css2?family=Space+Grotesk:wght@400;700');
          </div>
          <br />
          <div className="text-[#82aaff]">body</div> {"{"}
          <div className="pl-2">
            <span className="text-[#82aaff]">font-family</span>:{" "}
            <span className="text-[#c3e88d]">'Space Grotesk', sans-serif</span>;
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">font-size</span>:{" "}
            <span className="text-[#c3e88d]">16px</span>;
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">line-height</span>:{" "}
            <span className="text-[#c3e88d]">1.6</span>;
          </div>
          {"}"}
        </div>
      ),
    },
    {
      title: "Container va Grid tuzilmasi",
      desc: "Figma'da asosiy frame kengligi → container max-width. Ustunlar soni → grid-template-columns.",
      visual: (
        <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
          <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">
            Figma: 1440px frame, 120px padding → Container: 1200px
          </div>
          <div>
            <span className="text-[#82aaff]">.container</span> {"{"}
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">max-width</span>:{" "}
            <span className="text-[#c3e88d]">1200px</span>;
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">margin</span>:{" "}
            <span className="text-[#c3e88d]">0 auto</span>;
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">padding</span>:{" "}
            <span className="text-[#c3e88d]">0 20px</span>;
          </div>
          {"}"}
          <br />
          <div>
            <span className="text-[#82aaff]">.cards</span> {"{"}
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">display</span>:{" "}
            <span className="text-[#c3e88d]">grid</span>;
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">grid-template-columns</span>:{" "}
            <span className="text-[#c3e88d]">repeat(3, 1fr)</span>;
          </div>
          <div className="pl-2">
            <span className="text-[#82aaff]">gap</span>:{" "}
            <span className="text-[#c3e88d]">24px</span>;
          </div>
          {"}"}
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
