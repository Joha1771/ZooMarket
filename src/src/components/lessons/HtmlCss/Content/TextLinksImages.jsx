// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.3 — TEXT, LINKS, IMAGES
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag } from "../../../../Shared/Ui";

export function TextLinksExplain() {
  const [active, setActive] = useState("h");
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const sizes = [32, 24, 20, 16, 12.8, 11.2];
  const formats = [
    {
      tag: "<b>",
      desc: "Qalin (bold) matn. Ko'zga tashlanadi.",
      example: "<b>Muhim</b>",
    },
    {
      tag: "<i>",
      desc: "Qiya (italic) matn. Ta'kid uchun.",
      example: "<i>Italik</i>",
    },
    { tag: "<u>", desc: "Tagiga chizilgan matn.", example: "<u>Chizilgan</u>" },
    {
      tag: "<mark>",
      desc: "Sariq belgilash.",
      example: "<mark>Belgilangan</mark>",
    },
    {
      tag: "<del>",
      desc: "O'chirilgan (delete) matn.",
      example: "<del>Eski narx</del>",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["h", "fmt", "link"].map((id) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: active === id ? "#c85c1a" : "#f2efe8",
              borderColor: active === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: active === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "h"
              ? "Sarlavhalar"
              : id === "fmt"
                ? "Formatlash"
                : "Havolalar"}
          </button>
        ))}
      </div>

      {active === "h" && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">
            HTML'da 6 xil sarlavha: h1 eng katta, h6 eng kichik.
          </p>
          {headings.map((h, i) => (
            <div
              key={h}
              className="flex items-baseline gap-3 px-3 py-2 bg-[#f2efe8] rounded-lg border border-[rgba(26,24,20,0.10)]"
            >
              <span className="font-mono text-[10px] text-[#c85c1a] w-5">
                &lt;{h}&gt;
              </span>
              <span
                className="text-[#1a1814] font-bold"
                style={{ fontSize: Math.max(10, sizes[i] * 0.7) }}
              >
                Sarlavha matni
              </span>
              <span className="ml-auto font-mono text-[10px] text-[#7a7468]">
                {sizes[i]}px
              </span>
            </div>
          ))}
        </div>
      )}

      {active === "fmt" && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">
            Matnni formatlash teglari — belgilash va ta'kid uchun.
          </p>
          {formats.map((f) => (
            <div
              key={f.tag}
              className="flex items-center gap-3 px-3 py-2.5 bg-[#f2efe8] rounded-lg border border-[rgba(26,24,20,0.10)]"
            >
              <code className="font-mono text-xs text-[#c85c1a] w-16 shrink-0">
                {f.tag}
              </code>
              <span className="text-sm text-[#7a7468] flex-1">{f.desc}</span>
            </div>
          ))}
        </div>
      )}

      {active === "link" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Havolalar <Tag>{"<a>"}</Tag> tegi bilan yaratiladi. <Tag>href</Tag>{" "}
            manzilni belgilaydi.
          </p>
          {[
            {
              type: "Tashqi",
              code: '<a href="https://google.com">Google</a>',
              desc: "To'liq URL — boshqa saytga",
            },
            {
              type: "Ichki",
              code: '<a href="/about">Biz haqimizda</a>',
              desc: "Nisbiy yo'l — o'z saytingizda",
            },
            {
              type: "Yangi tab",
              code: '<a href="..." target="_blank">Link</a>',
              desc: "Yangi oynada ochiladi",
            },
            {
              type: "Email",
              code: '<a href="mailto:me@site.uz">Yozing</a>',
              desc: "Email ochadi",
            },
            {
              type: "Telefon",
              code: '<a href="tel:+998901234567">Ring</a>',
              desc: "Telefon qiladi",
            },
          ].map((l) => (
            <div
              key={l.type}
              className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <span className="font-mono text-[10px] text-[#c85c1a]">
                {l.type}
              </span>
              <div className="font-mono text-xs text-[#1a1814] mt-1">
                {l.code}
              </div>
              <div className="text-[11px] text-[#7a7468] mt-0.5">{l.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
