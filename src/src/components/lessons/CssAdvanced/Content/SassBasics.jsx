// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.9 — SASS BASICS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function SassBasicsExplain() {
  const [tab, setTab] = useState("nesting");
  const examples = {
    nesting: {
      title: "Nesting (ichma-ich yozish)",
      desc: "SASS da HTML tuzilmasini CSS da ham aks ettirish mumkin. Selector takrorlash yo'q.",
      scss: `.card {\n  background: white;\n  padding: 20px;\n\n  .title {\n    font-size: 24px;\n    color: #c85c1a;\n  }\n\n  .btn {\n    padding: 8px 16px;\n\n    &:hover {\n      background: #c85c1a;\n    }\n  }\n}`,
      css: `.card { background: white; padding: 20px; }\n.card .title { font-size: 24px; color: #c85c1a; }\n.card .btn { padding: 8px 16px; }\n.card .btn:hover { background: #c85c1a; }`,
    },
    variables: {
      title: "O'zgaruvchilar ($variables)",
      desc: "Ranglar, o'lchamlar, shriftlarni bir joyda saqlang. O'zgartirish oson.",
      scss: `// _variables.scss\n$primary: #c85c1a;\n$dark: #1a1814;\n$radius: 12px;\n$font-mono: 'Courier New';\n\n// style.scss\n.btn {\n  background: $primary;\n  border-radius: $radius;\n  font-family: $font-mono;\n}\n\n.heading {\n  color: $dark;\n}`,
      css: `.btn {\n  background: #c85c1a;\n  border-radius: 12px;\n  font-family: 'Courier New';\n}\n.heading { color: #1a1814; }`,
    },
    ampersand: {
      title: "& belgisi (Parent reference)",
      desc: "& belgisi parent selectorni bildiradi. :hover, :focus, modifier class uchun ishlatiladi.",
      scss: `.btn {\n  background: #f2efe8;\n  color: #1a1814;\n\n  &:hover {\n    background: #c85c1a;\n    color: white;\n  }\n\n  &.active {\n    background: #1a1814;\n  }\n\n  &--large {\n    padding: 16px 32px;\n  }\n}`,
      css: `.btn { background: #f2efe8; color: #1a1814; }\n.btn:hover { background: #c85c1a; color: white; }\n.btn.active { background: #1a1814; }\n.btn--large { padding: 16px 32px; }`,
    },
    partials: {
      title: "Partials va @import",
      desc: "_ bilan boshlangan fayllar to'g'ridan CSS ga aylanmaydi. Kod bo'laklarga bo'linadi.",
      scss: `// Fayl tuzilmasi:\n// _variables.scss\n// _reset.scss  \n// _navbar.scss\n// _cards.scss\n// style.scss  ← asosiy fayl\n\n// style.scss ichida:\n@import 'variables';\n@import 'reset';\n@import 'navbar';\n@import 'cards';`,
      css: `/* Hammasi bitta style.css ga yig'iladi */\n/* Build vaqtida kompilyatsiya bo'ladi */`,
    },
  };
  const curr = examples[tab];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        SASS — CSS ning kuchaytirilgan versiyasi (superset). Brauzer
        tushunmaydi, shuning uchun{" "}
        <strong className="text-[#1a1814]">kompilatsiya</strong> qilinadi:{" "}
        <Tag>.scss</Tag> → <Tag>.css</Tag>
      </p>
      <div className="flex flex-wrap gap-1.5">
        {Object.keys(examples).map((k) => (
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
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="font-mono text-[10px] text-[#c85c1a] mb-1.5 uppercase tracking-wider">
                SCSS (yoziladi)
              </div>
              <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-[10px] text-[#c3e88d] leading-loose overflow-x-auto">
                {curr.scss.split("\n").map((line, i) => (
                  <div
                    key={i}
                    style={{
                      paddingLeft: (line.match(/^ +/) || [""])[0].length * 4,
                    }}
                  >
                    {line.trimStart() || <span>&nbsp;</span>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#7a7468] mb-1.5 uppercase tracking-wider">
                CSS (kompilyatsiya)
              </div>
              <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-[10px] text-[rgba(255,255,255,0.5)] leading-loose overflow-x-auto">
                {curr.css.split("\n").map((line, i) => (
                  <div key={i}>{line || <span>&nbsp;</span>}</div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
