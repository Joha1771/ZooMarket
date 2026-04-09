// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.12 — PROJECT LANDING (explanation only)
// ═══════════════════════════════════════════════════════════════════════════════
import { InfoBox } from "../../../../Shared/Ui";

export function ProjectLandingExplain() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Bu modulning yakuniy loyihasi. Figma maketidan haqiqiy landing page
        yasaysiz.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            icon: "🎨",
            title: "Figma maket",
            desc: "Tayyor dizayn beriladi. O'lchamlar, ranglar, shriftlar.",
          },
          {
            icon: "📐",
            title: "Container",
            desc: "max-width: 1200px, margin: 0 auto. Responsive asosi.",
          },
          {
            icon: "📱",
            title: "Adaptiv",
            desc: "Desktop, tablet, mobil. Media queries bilan.",
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
          Loyiha tuzilmasi:
        </div>
        <div className="text-[#c3e88d]">landing-page/</div>
        <div className="text-[#82aaff] pl-3">├── index.html</div>
        <div className="text-[#f78c6c] pl-3">├── style.css</div>
        <div className="text-[#c792ea] pl-3">├── script.js</div>
        <div className="text-[#ffcb6b] pl-3">├── images/</div>
        <div className="text-[rgba(255,255,255,0.4)] pl-3">└── .gitignore</div>
      </div>
      <InfoBox color="#4a9e60" icon="✓">
        Barcha 11 ta darsda o'rgangan narsalarni ishlatish vaqti. Hero, navbar,
        cards, footer — hammasi.
      </InfoBox>
    </div>
  );
}
