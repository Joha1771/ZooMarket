// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.10 — SASS ADVANCED
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function SassAdvancedExplain() {
  const [tab, setTab] = useState("mixins");
  const topics = {
    mixins: {
      title: "@mixin — qayta ishlatiladigan stil bloki",
      desc: "Mixin — parametrli funksiya. Bir xil stillar takrorlanmasin.",
      code: `// Mixin e'lon qilish\n@mixin flex-center($gap: 8px) {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: $gap;\n}\n\n@mixin button-style($bg, $color: white) {\n  background: $bg;\n  color: $color;\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  &:hover { filter: brightness(1.1); }\n}\n\n// Mixin ishlatish\n.navbar { @include flex-center(16px); }\n.hero   { @include flex-center; }\n.btn-primary { @include button-style(#c85c1a); }\n.btn-dark    { @include button-style(#1a1814); }`,
    },
    functions: {
      title: "@function — qiymat qaytaruvchi funksiya",
      desc: "Function hisoblash va qiymat qaytaradi. @return kerak.",
      code: `// Funksiyalar\n@function rem($px) {\n  @return #{$px / 16}rem;\n}\n\n@function lighten-custom($color, $amount) {\n  @return mix(white, $color, $amount);\n}\n\n@function z($layer) {\n  $layers: (modal: 100, dropdown: 50, fixed: 10);\n  @return map-get($layers, $layer);\n}\n\n// Ishlatish\n.heading { font-size: rem(48); }\n.card { background: lighten-custom(#c85c1a, 80%); }\n.modal { z-index: z(modal); }`,
    },
    extend: {
      title: "@extend — stillarni meros olish",
      desc: "@extend bir elementning stillarini boshqasiga beradi. DRY prinsipi.",
      code: `%button-base {\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  font-weight: 700;\n  transition: all 0.2s;\n}\n\n.btn-primary {\n  @extend %button-base;\n  background: #c85c1a;\n  color: white;\n}\n\n.btn-secondary {\n  @extend %button-base;\n  background: transparent;\n  border: 1.5px solid #1a1814;\n  color: #1a1814;\n}\n\n.btn-ghost {\n  @extend %button-base;\n  background: transparent;\n  color: #c85c1a;\n}`,
    },
    structure: {
      title: "7-1 fayl tuzilmasi",
      desc: "Katta loyihalarda SASS fayllarini tartibli saqlash uchun 7-1 pattern ishlatiladi.",
      code: `sass/\n├── abstracts/   # o'zgaruvchilar, mixinlar\n│   ├── _variables.scss\n│   ├── _mixins.scss\n│   └── _functions.scss\n├── base/        # asosiy stillar\n│   ├── _reset.scss\n│   └── _typography.scss\n├── components/  # qayta ishlatiladigan\n│   ├── _buttons.scss\n│   ├── _cards.scss\n│   └── _forms.scss\n├── layout/      # sahifa tuzilmasi\n│   ├── _navbar.scss\n│   ├── _footer.scss\n│   └── _grid.scss\n├── pages/       # sahifaga xos\n│   ├── _home.scss\n│   └── _about.scss\n├── themes/      # mavzular\n│   └── _dark.scss\n├── vendors/     # tashqi kutubxonalar\n└── main.scss    # hamma import`,
    },
  };
  const curr = topics[tab];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        SASS ning ilg'or imkoniyatlari —{" "}
        <strong className="text-[#1a1814]">mixin, function, extend</strong> va
        fayl tuzilmasi. Professional dasturchilar bulardan foydalanadi.
      </p>
      <div className="flex flex-wrap gap-1.5">
        {Object.keys(topics).map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold cursor-pointer border-none transition-all"
            style={{
              background: tab === k ? "#c85c1a" : "#f2efe8",
              color: tab === k ? "#fff" : "#1a1814",
              border: `1.5px solid ${tab === k ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
            }}
          >
            {k}
          </button>
        ))}
      </div>
      {curr && (
        <>
          <div
            className="p-3 rounded-xl"
            style={{ background: "#c85c1a12", border: "1.5px solid #c85c1a35" }}
          >
            <div className="font-mono text-xs font-bold text-[#c85c1a] mb-1">
              {curr.title}
            </div>
            <p className="text-xs text-[#1a1814] leading-relaxed">
              {curr.desc}
            </p>
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-[10px] text-[#c3e88d] leading-loose overflow-x-auto max-h-64 overflow-y-auto">
            {curr.code.split("\n").map((line, i) => (
              <div key={i}>{line || <span>&nbsp;</span>}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
