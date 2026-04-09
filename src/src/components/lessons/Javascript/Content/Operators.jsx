// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.3 — OPERATORS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { InfoBox, Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function OperatorsExplain() {
  const [tab, setTab] = useState("arith");
  const [a, setA] = useState(10);
  const [b, setB] = useState(3);

  const results = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": +(a / b).toFixed(2),
    "**": a ** b,
    "%": a % b,
  };

  const comparisons = [
    {
      op: "==",
      a: "5",
      b: '"5"',
      res: true,
      note: 'Qiymat teng (tip tekshirmaydi). "5" == 5 → true!',
    },
    {
      op: "===",
      a: "5",
      b: '"5"',
      res: false,
      note: 'Qiymat va tip teng. 5 === "5" → false (raqam vs matn)',
    },
    {
      op: "!=",
      a: "5",
      b: '"5"',
      res: false,
      note: "Qiymat teng emas (tip tekshirmaydi)",
    },
    {
      op: "!==",
      a: "5",
      b: '"5"',
      res: true,
      note: "Qiymat yoki tip teng emas. Har doim shuni ishlating",
    },
    { op: ">", a: "10", b: "3", res: true, note: "10 katta 3 dan" },
    { op: ">=", a: "5", b: "5", res: true, note: "5 katta yoki teng 5 ga" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["arith", "compare", "logical"].map((id) => (
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
            {id === "arith"
              ? "Arifmetik"
              : id === "compare"
                ? "Taqqoslash"
                : "Mantiqiy"}
          </button>
        ))}
      </div>

      {tab === "arith" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Qiymatlarni o'zgartiring va natijani ko'ring:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "a", v: a, set: setA },
              { label: "b", v: b, set: setB },
            ].map(({ label, v, set }) => (
              <div
                key={label}
                className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div className="font-mono text-[10px] text-[#7a7468] mb-1">
                  {label}
                </div>
                <div className="font-mono text-xl font-black text-[#c85c1a]">
                  {v}
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={v}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: "#c85c1a" }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(results).map(([op, res]) => (
              <div
                key={op}
                className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] text-center"
              >
                <div className="font-mono text-[10px] text-[#7a7468] mb-1">
                  {a} {op} {b}
                </div>
                <div className="font-mono text-lg font-black text-[#c85c1a]">
                  {String(res)}
                </div>
              </div>
            ))}
          </div>
          <InfoBox color="#185FA5" icon="💡">
            <strong>%</strong> — qoldiqli bo'linish. <code>10 % 3 = 1</code> (10
            ni 3 ga bo'lganda 1 qoladi). Juft/toq tekshirishda foydali.
          </InfoBox>
        </div>
      )}

      {tab === "compare" && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">
            <Tag>==</Tag> va <Tag>===</Tag> farqini yaxshi tushuning — bu keng
            tarqalgan xato manbayi:
          </p>
          {comparisons.map((c) => (
            <div
              key={c.op + c.a}
              className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="flex items-center gap-2 mb-1">
                <code className="font-mono text-xs font-bold text-[#c85c1a]">
                  {c.a} {c.op} {c.b}
                </code>
                <span
                  className="font-mono text-xs font-bold px-1.5 py-0.5 rounded"
                  style={{
                    background: c.res ? "#4a9e6020" : "#e06c7520",
                    color: c.res ? "#2a6040" : "#e06c75",
                  }}
                >
                  {String(c.res)}
                </span>
              </div>
              <div className="text-[10px] text-[#7a7468]">{c.note}</div>
            </div>
          ))}
          <InfoBox color="#c85c1a" icon="⚠️">
            Har doim <Tag>===</Tag> (strict equality) ishlating. <Tag>==</Tag>{" "}
            kutilmagan natijalar berishi mumkin.
          </InfoBox>
        </div>
      )}

      {tab === "logical" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Mantiqiy operatorlar boolean qiymatlar bilan ishlaydi:
          </p>
          {[
            {
              op: "&&",
              name: "AND",
              rule: "Ikkisi ham true bo'lsa true",
              examples: [
                ["true && true", "true"],
                ["true && false", "false"],
                ["false && true", "false"],
              ],
            },
            {
              op: "||",
              name: "OR",
              rule: "Bittasi true bo'lsa true",
              examples: [
                ["true || false", "true"],
                ["false || false", "false"],
                ["false || true", "true"],
              ],
            },
            {
              op: "!",
              name: "NOT",
              rule: "Teskarisini qaytaradi",
              examples: [
                ["!true", "false"],
                ["!false", "true"],
                ["!!true", "true"],
              ],
            },
          ].map(({ op, name, rule, examples }) => (
            <div
              key={op}
              className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-sm font-black text-[#c85c1a]">
                  {op}
                </span>
                <span className="font-mono text-xs font-bold text-[#1a1814]">
                  {name}
                </span>
                <span className="text-[10px] text-[#7a7468] ml-auto">
                  {rule}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {examples.map(([expr, res]) => (
                  <div
                    key={expr}
                    className="p-1.5 rounded-lg text-center font-mono text-[10px]"
                    style={{
                      background: res === "true" ? "#4a9e6015" : "#e06c7515",
                      color: res === "true" ? "#2a6040" : "#e06c75",
                    }}
                  >
                    <div className="text-[#1a1814] mb-0.5">{expr}</div>
                    <div className="font-bold">{res}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
