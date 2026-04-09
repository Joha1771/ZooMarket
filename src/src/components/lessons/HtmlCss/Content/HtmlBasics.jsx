// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.2 — HTML BASICS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function HtmlBasicsExplain() {
  const [active, setActive] = useState(null);
  const parts = [
    {
      id: "open",
      label: "Ochiluvchi teg",
      example: "<h1>",
      color: "#4a9e60",
      desc: "Elementni boshlaydi. Burchak qavslar ichida teg nomi.",
    },
    {
      id: "close",
      label: "Yopiluvchi teg",
      example: "</h1>",
      color: "#c85c1a",
      desc: '"/" belgisi bilan farqlanadi.',
    },
    {
      id: "attr",
      label: "Atribut",
      example: 'href="..."',
      color: "#185FA5",
      desc: "Elementga qo'shimcha ma'lumot beradi. Ochiluvchi tegda yoziladi.",
    },
    {
      id: "cont",
      label: "Kontent",
      example: "Matn yoki...",
      color: "#993556",
      desc: "Teglar orasidagi asosiy ma'lumot: matn, rasm yoki boshqa teglar.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        HTML — sahifaning skeleti. Har bir{" "}
        <strong className="text-[#1a1814]">element</strong> teglardan iborat.
        Qismlarni bosib o'rganing:
      </p>

      <div className="bg-[#2c2820] rounded-xl p-4 text-center">
        <div className="font-mono text-sm leading-loose">
          <span
            onClick={() => setActive((a) => (a === "open" ? null : "open"))}
            className="px-1 transition-all rounded cursor-pointer"
            style={{
              color: "#4a9e60",
              background: active === "open" ? "#4a9e6030" : "transparent",
            }}
          >
            {"<a"}
          </span>{" "}
          <span
            onClick={() => setActive((a) => (a === "attr" ? null : "attr"))}
            className="px-1 transition-all rounded cursor-pointer"
            style={{
              color: "#ffcb6b",
              background: active === "attr" ? "#ffcb6b30" : "transparent",
            }}
          >
            href="/"
          </span>
          <span style={{ color: "#4a9e60" }}>{">"}</span>
          <span
            onClick={() => setActive((a) => (a === "cont" ? null : "cont"))}
            className="px-1 transition-all rounded cursor-pointer"
            style={{
              color: "#c3e88d",
              background: active === "cont" ? "#c3e88d20" : "transparent",
            }}
          >
            Bosh sahifa
          </span>
          <span
            onClick={() => setActive((a) => (a === "close" ? null : "close"))}
            className="px-1 transition-all rounded cursor-pointer"
            style={{
              color: "#c85c1a",
              background: active === "close" ? "#c85c1a30" : "transparent",
            }}
          >
            {"</a>"}
          </span>
        </div>
      </div>

      {active && (
        <div
          className="p-3 text-sm leading-relaxed transition-all border rounded-lg"
          style={{
            background: parts.find((p) => p.id === active)?.color + "12",
            borderColor: parts.find((p) => p.id === active)?.color + "35",
          }}
        >
          <strong style={{ color: parts.find((p) => p.id === active)?.color }}>
            {parts.find((p) => p.id === active)?.label}:{" "}
          </strong>
          {parts.find((p) => p.id === active)?.desc}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg border border-[rgba(26,24,20,0.10)] bg-[#f2efe8]">
          <div className="font-mono text-[10px] text-[#7a7468] mb-2 uppercase tracking-wider">
            Juft teglar
          </div>
          {[
            "<h1>Sarlavha</h1>",
            "<p>Paragraf</p>",
            '<a href="#">Havola</a>',
          ].map((t) => (
            <div key={t} className="font-mono text-xs text-[#1a1814] py-0.5">
              {t}
            </div>
          ))}
        </div>
        <div className="p-3 rounded-lg border border-[rgba(26,24,20,0.10)] bg-[#f2efe8]">
          <div className="font-mono text-[10px] text-[#7a7468] mb-2 uppercase tracking-wider">
            Juft bo'lmaganlar
          </div>
          {[
            '<img src="pic.jpg" />',
            "<br />",
            "<hr />",
            '<input type="text" />',
          ].map((t) => (
            <div key={t} className="font-mono text-xs text-[#1a1814] py-0.5">
              {t}
            </div>
          ))}
        </div>
      </div>

      {!active && (
        <p className="text-center text-xs text-[#7a7468] font-mono">
          👆 Kodning rangidagi qismlarini bosing
        </p>
      )}
    </div>
  );
}

export function HtmlBasicsLearn() {
  const [tag, setTag] = useState("h1");
  const [content, setContent] = useState("Salom dunyo!");
  const [attr, setAttr] = useState("");

  const selfClosing = ["img", "br", "hr", "input", "meta", "link"];
  const isSelf = selfClosing.includes(tag);
  const generated = isSelf
    ? `<${tag}${attr ? " " + attr : ""} />`
    : `<${tag}${attr ? " " + attr : ""}>${content}</${tag}>`;

  const tags = [
    { name: "h1", desc: "Katta sarlavha" },
    { name: "h2", desc: "Kichik sarlavha" },
    { name: "p", desc: "Paragraf" },
    { name: "a", desc: "Havola" },
    { name: "strong", desc: "Qalin matn" },
    { name: "em", desc: "Italic matn" },
    { name: "img", desc: "Rasm (o'z-o'zini yopadi)" },
    { name: "br", desc: "Yangi qator (o'z-o'zini yopadi)" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        Teg yaratgich — tanlang, o'zgartiring va natijani ko'ring:
      </p>
      <div className="grid grid-cols-4 gap-1.5">
        {tags.map((t) => (
          <button
            key={t.name}
            onClick={() => setTag(t.name)}
            className="p-2 text-left transition-all border rounded-lg cursor-pointer"
            style={{
              background: tag === t.name ? "#c85c1a" : "#f2efe8",
              border: `1.5px solid ${tag === t.name ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
              color: tag === t.name ? "#fff" : "#1a1814",
            }}
          >
            <div className="font-mono text-xs font-bold">&lt;{t.name}&gt;</div>
            <div className="text-[10px] mt-0.5 opacity-70">{t.desc}</div>
          </button>
        ))}
      </div>
      {!isSelf && (
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Kontent..."
          className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none font-[inherit]"
        />
      )}
      <input
        value={attr}
        onChange={(e) => setAttr(e.target.value)}
        placeholder={`Atribut: href="/" yoki src="img.jpg"`}
        className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none font-mono"
      />
      <div className="bg-[#2c2820] rounded-lg p-3.5">
        <div className="text-[10px] font-mono text-[rgba(255,255,255,0.3)] mb-2 uppercase tracking-wider">
          Natija:
        </div>
        <div className="font-mono text-sm text-[#c3e88d]">{generated}</div>
      </div>
    </div>
  );
}
