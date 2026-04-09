// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.2 — VARIABLES
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { CodeSnippet, Tag, InfoBox, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

export function VariablesExplain() {
  const [tab, setTab] = useState("concept");

  const types = [
    {
      kw: "var",
      color: "#e06c75",
      scope: "Function",
      hoisting: "undefined",
      redeclare: "✓",
      reassign: "✓",
      note: "Eski usul. Hozir ishlatmang.",
    },
    {
      kw: "let",
      color: "#c85c1a",
      scope: "Block",
      hoisting: "TDZ",
      redeclare: "✗",
      reassign: "✓",
      note: "Qiymat o'zgarsa ishlatiladi.",
    },
    {
      kw: "const",
      color: "#4a9e60",
      scope: "Block",
      hoisting: "TDZ",
      redeclare: "✗",
      reassign: "✗",
      note: "Eng ko'p ishlatiladi. Default tanlov.",
    },
  ];

  const primitives = [
    {
      type: "string",
      example: "\"Salom\", 'JS'",
      color: "#c3e88d",
      desc: "Matn",
    },
    {
      type: "number",
      example: "42, 3.14, -7",
      color: "#f78c6c",
      desc: "Raqam (int va float ham)",
    },
    {
      type: "boolean",
      example: "true, false",
      color: "#82aaff",
      desc: "Ha/yo'q qiymat",
    },
    {
      type: "undefined",
      example: "let x;",
      color: "#7a7468",
      desc: "Qiymat berilmagan",
    },
    {
      type: "null",
      example: "let n = null;",
      color: "#993556",
      desc: "Ataylab bo'sh",
    },
    {
      type: "bigint",
      example: "123n",
      color: "#c792ea",
      desc: "Juda katta sonlar",
    },
    {
      type: "symbol",
      example: "Symbol()",
      color: "#b07820",
      desc: "Yagona kalit",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["concept", "types", "data"].map((id) => (
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
            {id === "concept"
              ? "Tushuncha"
              : id === "types"
                ? "var/let/const"
                : "Turlar"}
          </button>
        ))}
      </div>

      {tab === "concept" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            O'zgaruvchi — ma'lumot saqlash uchun nomlangan quti. Xotiraning bir
            bo'lagini "band" qiladi.
          </p>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center gap-3 mb-3">
              {["name = 'Ali'", "age = 25", "isStudent = true"].map((v, i) => (
                <div
                  key={v}
                  className="flex-1 p-2.5 rounded-lg text-center border"
                  style={{
                    background: ["#c85c1a15", "#4a9e6015", "#185FA515"][i],
                    borderColor: ["#c85c1a40", "#4a9e6040", "#185FA540"][i],
                  }}
                >
                  <div className="text-[10px] font-mono text-[#7a7468] mb-1">
                    📦 box
                  </div>
                  <div className="font-mono text-xs font-bold text-[#1a1814]">
                    {v}
                  </div>
                </div>
              ))}
            </div>
            <CodeSnippet
              lines={[
                [
                  { text: "let ", color: C.kw },
                  { text: "name", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: '"Ali"', color: C.str },
                  { text: ";  ", color: C.op },
                  { text: "// e'lon + qiymat", color: C.cmt },
                ],
                [
                  { text: "let ", color: C.kw },
                  { text: "age", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "25", color: C.num },
                  { text: ";", color: C.op },
                ],
                [
                  { text: "age", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "26", color: C.num },
                  { text: ";    ", color: C.op },
                  { text: "// qayta o'zlashtirish", color: C.cmt },
                ],
              ]}
            />
          </div>
        </div>
      )}

      {tab === "types" && (
        <div className="flex flex-col gap-2">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#c85c1a10]">
                  {[
                    "Kalit so'z",
                    "Scope",
                    "Hoisting",
                    "Qayta e'lon",
                    "Qayta qiymat",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-2 font-mono text-[#c85c1a] border border-[rgba(26,24,20,0.10)] whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {types.map((row) => (
                  <tr key={row.kw}>
                    <td
                      className="px-3 py-2 font-mono font-bold border border-[rgba(26,24,20,0.10)]"
                      style={{ color: row.color }}
                    >
                      {row.kw}
                    </td>
                    <td className="px-3 py-2 text-[#1a1814] border border-[rgba(26,24,20,0.10)]">
                      {row.scope}
                    </td>
                    <td
                      className="px-3 py-2 font-mono border border-[rgba(26,24,20,0.10)]"
                      style={{
                        color: row.hoisting === "TDZ" ? "#e06c75" : "#4a9e60",
                      }}
                    >
                      {row.hoisting}
                    </td>
                    <td
                      className="px-3 py-2 text-center border border-[rgba(26,24,20,0.10)]"
                      style={{
                        color: row.redeclare === "✓" ? "#4a9e60" : "#e06c75",
                      }}
                    >
                      {row.redeclare}
                    </td>
                    <td
                      className="px-3 py-2 text-center border border-[rgba(26,24,20,0.10)]"
                      style={{
                        color: row.reassign === "✓" ? "#4a9e60" : "#e06c75",
                      }}
                    >
                      {row.reassign}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoBox color="#4a9e60" icon="✓">
            <strong>Qoida:</strong> Har doim <Tag color="#4a9e60">const</Tag>{" "}
            ishlating. Qiymat o'zgarsa — <Tag color="#c85c1a">let</Tag>.{" "}
            <Tag color="#e06c75">var</Tag> dan uzoqlashing.
          </InfoBox>
        </div>
      )}

      {tab === "data" && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">
            JS'da 7 ta primitiv ma'lumot turi:
          </p>
          {primitives.map((p) => (
            <div
              key={p.type}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <code
                className="w-20 font-mono text-xs font-bold shrink-0"
                style={{ color: p.color }}
              >
                {p.type}
              </code>
              <code className="font-mono text-[10px] text-[#7a7468] flex-1">
                {p.example}
              </code>
              <span className="text-xs text-[#1a1814]">{p.desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function VariablesLearn() {
  const [name, setName] = useState("Ali");
  const [age, setAge] = useState(25);
  const [year] = useState(new Date().getFullYear());

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        O'zgaruvchilarni o'zgartiring va natija qanday o'zgarishini kuzating:
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-mono text-[#7a7468] uppercase tracking-wider">
            name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-mono text-[#7a7468] uppercase tracking-wider">
            age
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
          />
        </div>
      </div>
      <CodeSnippet
        lines={[
          [
            { text: "const ", color: C.kw },
            { text: "name", color: C.fn },
            { text: " = ", color: C.op },
            { text: `"${name}"`, color: C.str },
            { text: ";", color: C.op },
          ],
          [
            { text: "const ", color: C.kw },
            { text: "age", color: C.fn },
            { text: " = ", color: C.op },
            { text: String(age), color: C.num },
            { text: ";", color: C.op },
          ],
          [
            { text: "const ", color: C.kw },
            { text: "birthYear", color: C.fn },
            { text: " = ", color: C.op },
            { text: String(year - age), color: C.num },
            { text: ";", color: C.op },
          ],
          [{ text: "" }],
          [
            { text: "console", color: C.fn },
            { text: ".log(", color: C.op },
            { text: "`Salom, ${", color: C.str },
            { text: "name", color: C.fn },
            { text: "}! Siz ${", color: C.str },
            { text: "age", color: C.fn },
            { text: "} yoshdasiz.`", color: C.str },
            { text: ");", color: C.op },
          ],
        ]}
      />
      <div className="bg-[#1a1814] rounded-lg p-3 border border-[rgba(255,255,255,0.08)]">
        <div className="text-[10px] font-mono text-[rgba(255,255,255,0.3)] mb-1.5 uppercase tracking-wider">
          Console output:
        </div>
        <div className="font-mono text-sm text-[#4a9e60]">
          &gt; Salom, {name}! Siz {age} yoshdasiz.
        </div>
        <div className="font-mono text-xs text-[rgba(255,255,255,0.4)] mt-1">
          &gt; Tug'ilgan yil: {year - age}
        </div>
      </div>
    </div>
  );
}
