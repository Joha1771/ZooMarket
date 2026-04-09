// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.12 — EXAM FIGMA PROJECT
// ═══════════════════════════════════════════════════════════════════════════════

import { InfoBox } from "../../../../Shared/Ui";

export function ExamFigmaExplain() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Bu modulning yakuniy imtihoni. Figma maketdan to'liq responsive sayt
        yasaysiz va SASS bilan stillashtiraysiz.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            icon: "🎨",
            title: "Figma maket",
            desc: "Tayyor dizayn beriladi. Desktop + mobil versiyasi.",
          },
          {
            icon: "📱",
            title: "Responsive",
            desc: "3 ta breakpoint: 1200px, 768px, 480px.",
          },
          {
            icon: "✦",
            title: "SASS",
            desc: "Variables, mixins, nesting — barchasi ishlatilishi kerak.",
          },
          {
            icon: "⚡",
            title: "Animatsiyalar",
            desc: "hover, transition, kamida 1 ta CSS animation.",
          },
          {
            icon: "🔌",
            title: "Position",
            desc: "Sticky navbar, fixed button, absolute overlay.",
          },
          {
            icon: "🚀",
            title: "Deploy",
            desc: "GitHub → Netlify. Haqiqiy URL olasiz.",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <div className="mb-2 text-2xl">{icon}</div>
            <div className="font-mono text-xs font-bold text-[#1a1814] mb-1">
              {title}
            </div>
            <div className="text-xs text-[#7a7468] leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
        <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2 uppercase tracking-wider">
          Tavsiya etilgan fayl tuzilmasi:
        </div>
        <div className="text-[#c3e88d]">exam-project/</div>
        <div className="text-[#82aaff] pl-3">├── index.html</div>
        <div className="text-[#f78c6c] pl-3">├── sass/</div>
        <div className="text-[#f78c6c] pl-6">├── _variables.scss</div>
        <div className="text-[#f78c6c] pl-6">├── _mixins.scss</div>
        <div className="text-[#f78c6c] pl-6">├── _navbar.scss</div>
        <div className="text-[#f78c6c] pl-6">├── _hero.scss</div>
        <div className="text-[#f78c6c] pl-6">├── _cards.scss</div>
        <div className="text-[#f78c6c] pl-6">└── main.scss</div>
        <div className="text-[#c792ea] pl-3">├── css/</div>
        <div className="text-[#c792ea] pl-6">└── main.css ← kompilyatsiya</div>
        <div className="text-[#ffcb6b] pl-3">└── images/</div>
      </div>
      <InfoBox color="#4a9e60" icon="✓">
        02-modul barcha CSS Advanced texnikalarini o'z ichiga oladi. Imtihon
        loyihasi ularning barchasini amalda qo'llash imkonini beradi.
      </InfoBox>
    </div>
  );
}
