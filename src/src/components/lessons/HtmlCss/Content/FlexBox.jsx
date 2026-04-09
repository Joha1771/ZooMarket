// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.9 — FLEXBOX
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag, InfoBox } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

const FLEX_OPTS = {
  justifyContent: [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
  ],
  alignItems: ["flex-start", "center", "flex-end", "stretch"],
  flexDirection: ["row", "column"],
  flexWrap: ["nowrap", "wrap"],
};

export function FlexboxExplain({ t }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Flexbox — elementlarni{" "}
        <strong className="text-[#1a1814]">satr yoki ustun</strong> bo'ylab
        joylashtirishning qulay usuli. Bitta xususiyat —{" "}
        <Tag>display: flex</Tag> — hammasini o'zgartiradi.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {[
          { title: "display: block (odatiy)", flex: false },
          { title: "display: flex", flex: true },
        ].map(({ title, flex }) => (
          <div key={title}>
            <div className="text-[11px] font-mono text-[#7a7468] mb-2">
              {title}
            </div>
            <div
              className="bg-[#2c2820] rounded-lg p-3 min-h-[90px]"
              style={{
                display: flex ? "flex" : "block",
                gap: flex ? 8 : 0,
                alignItems: flex ? "center" : undefined,
              }}
            >
              {["A", "B", "C"].map((it, i) => (
                <div
                  key={it}
                  className="flex items-center justify-center font-mono text-xs font-bold text-white rounded-lg"
                  style={{
                    width: 40,
                    height: 40,
                    background: i % 2 === 0 ? "#c85c1a" : "#4a3828",
                    marginBottom: flex ? 0 : 6,
                    border: `1.5px solid ${i % 2 === 0 ? "#e07a3a" : "#6a5848"}`,
                    flexShrink: 0,
                  }}
                >
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <InfoBox color="#c85c1a">
        <strong>Asosiy g'oya:</strong> Parent elementga <Tag>display: flex</Tag>{" "}
        qo'shing — bolalar avtomatik qatorga tiziladi.
      </InfoBox>
    </div>
  );
}

export function FlexboxLearn({ t }) {
  const [props, setProps] = useState({
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  });

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        Tugmachalarni bosing va flexbox qanday ishlashini ko'ring:
      </p>
      <div
        className="bg-[#2c2820] rounded-xl p-4 min-h-[110px] border border-[rgba(26,24,20,0.10)]"
        style={{
          display: "flex",
          justifyContent: props.justifyContent,
          alignItems: props.alignItems,
          flexDirection: props.flexDirection,
          flexWrap: props.flexWrap,
          gap: 8,
        }}
      >
        {["A", "B", "C", "D"].map((b, i) => (
          <div
            key={b}
            className="flex items-center justify-center font-mono text-xs font-bold text-white rounded-lg"
            style={{
              width: i === 1 ? 52 : 40,
              height: i === 2 ? 52 : 40,
              flexShrink: 0,
              background: i % 2 === 0 ? "#c85c1a" : "#4a3828",
              border: `1.5px solid ${i % 2 === 0 ? "#e07a3a" : "#6a5848"}`,
            }}
          >
            {b}
          </div>
        ))}
      </div>
      <div className="bg-[#2c2820] px-3 py-2 rounded-lg font-mono text-[11px] leading-loose">
        <span className="text-[#82aaff]">justify-content</span>:{" "}
        <span className="text-[#ffcb6b]">{props.justifyContent}</span>;&nbsp;
        <span className="text-[#82aaff]">align-items</span>:{" "}
        <span className="text-[#c3e88d]">{props.alignItems}</span>;&nbsp;
        <span className="text-[#82aaff]">flex-direction</span>:{" "}
        <span className="text-[#82aaff]">{props.flexDirection}</span>;
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {Object.entries(FLEX_OPTS).map(([prop, values]) => (
          <div key={prop}>
            <div className="text-[10px] font-mono text-[#7a7468] mb-1.5 uppercase tracking-wider">
              {prop}
            </div>
            <div className="flex flex-wrap gap-1">
              {values.map((v) => (
                <button
                  key={v}
                  onClick={() => setProps((p) => ({ ...p, [prop]: v }))}
                  className="px-2 py-0.5 rounded text-[10px] font-mono transition-all cursor-pointer border-none"
                  style={{
                    background: props[prop] === v ? "#c85c1a" : "#f2efe8",
                    color: props[prop] === v ? "#fff" : "#1a1814",
                    outline: `1px solid ${props[prop] === v ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
                    fontWeight: props[prop] === v ? 700 : 400,
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
