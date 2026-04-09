// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 2.2 — PSEUDO CLASS & PSEUDO ELEMENT
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function PseudoExplain() {
  const [tab, setTab] = useState("class");
  const pseudoClasses = [
    {
      sel: ":hover",
      desc: "Sichqon ustida turganda",
      ex: "a:hover { color: red }",
    },
    {
      sel: ":focus",
      desc: "Fokus olganda (input)",
      ex: "input:focus { border-color: blue }",
    },
    {
      sel: ":first-child",
      desc: "Ota ichidagi birinchi element",
      ex: "li:first-child { font-weight: bold }",
    },
    {
      sel: ":last-child",
      desc: "Ota ichidagi oxirgi element",
      ex: "li:last-child { color: gray }",
    },
    {
      sel: ":nth-child(n)",
      desc: "n-chi element. even/odd ham ishlaydi",
      ex: "tr:nth-child(even) { background: #f5f5f5 }",
    },
    {
      sel: ":not(selector)",
      desc: "Selectorga mos bo'lmaganlar",
      ex: "p:not(.special) { opacity: 0.7 }",
    },
    {
      sel: ":checked",
      desc: "Belgilangan checkbox/radio",
      ex: "input:checked + label { color: green }",
    },
    {
      sel: ":disabled",
      desc: "O'chirilgan form elementi",
      ex: "button:disabled { opacity: 0.5 }",
    },
  ];
  const pseudoElements = [
    {
      sel: "::before",
      desc: "Elementdan oldin kontent qo'shadi. content: '' kerak",
      ex: ".btn::before { content: '→ '; }",
    },
    {
      sel: "::after",
      desc: "Elementdan keyin kontent qo'shadi. Dekoratsiya uchun",
      ex: ".price::after { content: ' so\\'m'; }",
    },
    {
      sel: "::first-line",
      desc: "Paragrafning birinchi qatoriga stil beradi",
      ex: "p::first-line { font-weight: bold }",
    },
    {
      sel: "::first-letter",
      desc: "Birinchi harfga katta dropcap effekti",
      ex: "p::first-letter { font-size: 3em; float: left }",
    },
    {
      sel: "::placeholder",
      desc: "Input placeholder matni stili",
      ex: "input::placeholder { color: #999; font-style: italic }",
    },
    {
      sel: "::selection",
      desc: "Foydalanuvchi tanlagan matn stili",
      ex: "::selection { background: #c85c1a; color: white }",
    },
  ];
  const items = tab === "class" ? pseudoClasses : pseudoElements;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Pseudo-class va pseudo-element — CSS ning kuchli vositasi. Qo'shimcha
        class qo'shmasdan elementlarni maqsadli stillashtirish.
      </p>
      <div className="flex gap-2">
        {["class", "element"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "class" ? ":pseudo-class" : "::pseudo-element"}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.sel}
            className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
          >
            <div className="flex items-center gap-2 mb-1">
              <code className="font-mono text-xs font-bold text-[#c85c1a]">
                {item.sel}
              </code>
              <span className="text-[10px] text-[#7a7468]">{item.desc}</span>
            </div>
            <div className="bg-[#2c2820] rounded px-2 py-1 font-mono text-[10px] text-[#c3e88d]">
              {item.ex}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PseudoLearn() {
  const [hovered, setHovered] = useState(false);
  const [nthType, setNthType] = useState("even");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        ::before va ::after amalda — tugmaga hover qiling:
      </p>
      <div className="flex justify-center">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative px-8 py-3 overflow-hidden font-mono text-sm font-bold transition-all duration-300 border-none cursor-pointer rounded-xl"
          style={{
            background: hovered ? "#c85c1a" : "#f2efe8",
            color: hovered ? "#fff" : "#1a1814",
            border: "1.5px solid #c85c1a",
          }}
        >
          <span
            className="transition-all duration-300"
            style={{ marginRight: hovered ? 8 : 0 }}
          >
            {hovered ? "→ " : ""}
          </span>
          Hover qiling
          {hovered && <span> ←</span>}
        </button>
      </div>
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <span className="text-[#82aaff]">.btn</span>
        <span className="text-[rgba(255,255,255,0.4)]">::before</span> {"{"}
        <br />
        &nbsp;&nbsp;<span className="text-[#82aaff]">content</span>:{" "}
        <span className="text-[#c3e88d]">"→ "</span>;
        <br />
        {"}"}
        <br />
        <span className="text-[#82aaff]">.btn</span>
        <span className="text-[rgba(255,255,255,0.4)]">::after</span> {"{"}
        <br />
        &nbsp;&nbsp;<span className="text-[#82aaff]">content</span>:{" "}
        <span className="text-[#c3e88d]">" ←"</span>;
        <br />
        {"}"}
      </div>
      <p className="text-xs text-[#7a7468]">
        :nth-child() misoli — qatorni tanlang:
      </p>
      <div className="flex flex-wrap gap-2">
        {["even", "odd", "2n+1", "3n", "1"].map((v) => (
          <button
            key={v}
            onClick={() => setNthType(v)}
            className="px-3 py-1 font-mono text-xs transition-all border-none rounded cursor-pointer"
            style={{
              background: nthType === v ? "#c85c1a" : "#f2efe8",
              color: nthType === v ? "#fff" : "#1a1814",
              border: `1px solid ${nthType === v ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
            }}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {[1, 2, 3, 4, 5, 6].map((i) => {
          const isMatch = (() => {
            if (nthType === "even") return i % 2 === 0;
            if (nthType === "odd") return i % 2 !== 0;
            if (nthType === "2n+1") return i % 2 !== 0;
            if (nthType === "3n") return i % 3 === 0;
            if (nthType === "1") return i === 1;
            return false;
          })();
          return (
            <div
              key={i}
              className="px-3 py-2 font-mono text-xs transition-all duration-200 rounded-lg"
              style={{
                background: isMatch ? "#c85c1a15" : "#f2efe8",
                border: `1px solid ${isMatch ? "#c85c1a50" : "rgba(26,24,20,0.10)"}`,
                color: isMatch ? "#c85c1a" : "#7a7468",
                fontWeight: isMatch ? 700 : 400,
              }}
            >
              li:nth-child({i}) {isMatch && "← mos keladi"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
