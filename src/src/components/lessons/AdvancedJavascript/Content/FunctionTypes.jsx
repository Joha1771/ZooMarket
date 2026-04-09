import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.3 — FUNCTION TYPES AND IIFE
// ═══════════════════════════════════════════════════════════════════════════════

export function FunctionTypesExplain() {
  const [tab, setTab] = useState("types");
  const [iifeName, setIifeName] = useState("Valijon");
  const [iifeResult, setIifeResult] = useState(
    "Valijon yoshiga 18 yil qoldi (2043)",
  );

  const currentYear = new Date().getFullYear();

  const runIife = () => {
    const year = currentYear;
    const result = `(function() { return "Salom, ${iifeName}!"; })() → "Salom, ${iifeName}!"`;
    setIifeResult(result);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "types", label: "Funksiya turlari" },
          { id: "iife", label: "IIFE" },
          { id: "compare", label: "Taqqoslash" },
        ].map(({ id, label }) => (
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
            {label}
          </button>
        ))}
      </div>

      {tab === "types" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            JavaScriptda funksiyani yozishning bir necha usuli bor. Har birining
            o'z xususiyatlari va qo'llanish joylari mavjud.
          </p>

          {[
            {
              title: "1. Function Declaration",
              color: "#4a9e60",
              tag: "hoisted ✓",
              code: [
                [
                  { text: "function ", color: C.kw },
                  { text: "add", color: C.fn },
                  { text: "(a, b) {", color: C.op },
                ],
                [
                  { text: "  return ", color: C.kw },
                  { text: "a + b", color: C.fn },
                  { text: ";", color: C.op },
                ],
                [{ text: "}", color: C.op }],
                [{ text: "" }],
                [
                  { text: "add(", color: C.fn },
                  { text: "2", color: C.num },
                  { text: ", ", color: C.op },
                  { text: "3", color: C.num },
                  { text: ");  ", color: C.op },
                  { text: "// 5", color: C.cmt },
                ],
              ],
            },
            {
              title: "2. Function Expression",
              color: "#185FA5",
              tag: "not hoisted",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "add", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "function", color: C.kw },
                  { text: "(a, b) {", color: C.op },
                ],
                [
                  { text: "  return ", color: C.kw },
                  { text: "a + b", color: C.fn },
                  { text: ";", color: C.op },
                ],
                [{ text: "};", color: C.op }],
              ],
            },
            {
              title: "3. Arrow Function",
              color: "#c85c1a",
              tag: "ES6+",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "add", color: C.fn },
                  { text: " = (a, b) => a + b;", color: C.op },
                ],
                [{ text: "" }],
                [
                  { text: "const ", color: C.kw },
                  { text: "square", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "x", color: C.fn },
                  { text: " => ", color: C.op },
                  { text: "x * x", color: C.fn },
                  { text: ";", color: C.op },
                ],
              ],
            },
          ].map(({ title, color, tag, code }) => (
            <div key={title}>
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className="text-[10px] font-mono font-bold"
                  style={{ color }}
                >
                  {title}
                </div>
                <span
                  className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                  style={{ background: color + "15", color }}
                >
                  {tag}
                </span>
              </div>
              <CodeSnippet lines={code} />
            </div>
          ))}
        </div>
      )}

      {tab === "iife" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">IIFE</strong> (Immediately
            Invoked Function Expression) — e'lon qilinishi bilanoq
            chaqiriladigan funksiya. Scope pollution oldini olish uchun
            ishlatiladi.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              IIFE sinab ko'ring:
            </div>
            <input
              value={iifeName}
              onChange={(e) => setIifeName(e.target.value)}
              placeholder="Ismingizni kiriting..."
              className="w-full px-3 py-2 bg-white border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none mb-2"
            />
            <button
              onClick={runIife}
              className="w-full py-2 font-mono text-xs font-bold text-white border-none rounded-lg cursor-pointer"
              style={{ background: "#c85c1a", boxShadow: "0 2px 0 0 #8a3a0a" }}
            >
              IIFE ni ishlatish
            </button>
            {iifeResult && (
              <div className="mt-2 p-2.5 bg-[#1a1814] rounded-lg">
                <div className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] mb-1">
                  Natija:
                </div>
                <div className="font-mono text-xs text-[#c3e88d]">
                  {iifeResult}
                </div>
              </div>
            )}
          </div>

          <CodeSnippet
            lines={[
              [{ text: "// Oddiy IIFE", color: C.cmt }],
              [
                { text: "(", color: C.op },
                { text: "function", color: C.kw },
                { text: "() {", color: C.op },
              ],
              [
                { text: "  let ", color: C.kw },
                { text: "secret", color: C.fn },
                { text: " = ", color: C.op },
                { text: '"Tashqaridan ko\'rinmaydi"', color: C.str },
                { text: ";", color: C.op },
              ],
              [
                { text: "  console.log(", color: C.fn },
                { text: "secret", color: C.fn },
                { text: ");", color: C.op },
              ],
              [
                { text: "})(", color: C.op },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Arrow IIFE", color: C.cmt }],
              [{ text: "(() => {", color: C.op }],
              [
                { text: "  console.log(", color: C.fn },
                { text: '"Arrow IIFE"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "})();", color: C.op }],
              [{ text: "" }],
              [{ text: "// Parametrli IIFE", color: C.cmt }],
              [
                { text: "((", color: C.op },
                { text: "name", color: C.fn },
                { text: ") => {", color: C.op },
              ],
              [
                { text: "  console.log(", color: C.fn },
                { text: "`Salom, ${", color: C.str },
                { text: "name", color: C.fn },
                { text: "}!`", color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "})(", color: C.op },
                { text: '"Ali"', color: C.str },
                { text: ");", color: C.op },
              ],
            ]}
          />

          <InfoBox color="#185FA5" icon="💡">
            IIFE React, jQuery va boshqa kutubxonalarning ichida global scope ni
            "ifloslantirmaslik" uchun keng ishlatilgan.
          </InfoBox>
        </div>
      )}

      {tab === "compare" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Arrow funksiya va oddiy funksiyaning muhim farqlari:
          </p>

          <div className="overflow-x-auto rounded-xl border border-[rgba(26,24,20,0.10)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#c85c1a10]">
                  {["Xususiyat", "function", "arrow =>"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-2 font-mono font-bold text-[#c85c1a] border border-[rgba(26,24,20,0.10)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["this", "O'z this i bor", "Tashqi this ni oladi"],
                  [
                    "arguments",
                    "arguments object bor",
                    "Yo'q (rest ishlating)",
                  ],
                  ["Hoisting", "✓ Ko'tariladi", "✗ Ko'tarilmaydi"],
                  ["Constructor", "✓ new bilan", "✗ new bilan bo'lmaydi"],
                  ["Qisqa yozish", "Uzunroq", "Qisqa"],
                ].map(([xususiyat, fn, arrow], i) => (
                  <tr key={i}>
                    <td className="px-3 py-2 font-mono font-bold text-[#1a1814] border border-[rgba(26,24,20,0.10)]">
                      {xususiyat}
                    </td>
                    <td className="px-3 py-2 text-[#185FA5] border border-[rgba(26,24,20,0.10)]">
                      {fn}
                    </td>
                    <td className="px-3 py-2 text-[#c85c1a] border border-[rgba(26,24,20,0.10)]">
                      {arrow}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#e06c75] mb-1.5">
                this — funksiyada:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "const ", color: C.kw },
                    { text: "obj", color: C.fn },
                    { text: " = {", color: C.op },
                  ],
                  [
                    { text: "  name: ", color: "rgba(255,255,255,0.7)" },
                    { text: '"Ali"', color: C.str },
                    { text: ",", color: C.op },
                  ],
                  [
                    { text: "  greet: ", color: "rgba(255,255,255,0.7)" },
                    { text: "function", color: C.kw },
                    { text: "() {", color: C.op },
                  ],
                  [
                    { text: "    return ", color: C.kw },
                    { text: "this", color: C.kw },
                    { text: ".name;", color: C.op },
                    { text: " // 'Ali' ✓", color: C.cmt },
                  ],
                  [{ text: "  }", color: C.op }],
                  [{ text: "};", color: C.op }],
                ]}
              />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#c85c1a] mb-1.5">
                this — arrow da:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "const ", color: C.kw },
                    { text: "obj", color: C.fn },
                    { text: " = {", color: C.op },
                  ],
                  [
                    { text: "  name: ", color: "rgba(255,255,255,0.7)" },
                    { text: '"Ali"', color: C.str },
                    { text: ",", color: C.op },
                  ],
                  [
                    { text: "  greet: ", color: "rgba(255,255,255,0.7)" },
                    { text: "() => {", color: C.op },
                  ],
                  [
                    { text: "    return ", color: C.kw },
                    { text: "this", color: C.kw },
                    { text: ".name;", color: C.op },
                    { text: " // undefined ✗", color: "#e06c75" },
                  ],
                  [{ text: "  }", color: C.op }],
                  [{ text: "};", color: C.op }],
                ]}
              />
            </div>
          </div>

          <InfoBox color="#4a9e60" icon="✓">
            <strong>Qoida:</strong> Metodlarda{" "}
            <Tag color="#4a9e60">function</Tag>, callback va qisqa funksiyalarda{" "}
            <Tag color="#c85c1a">arrow</Tag> ishlating.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
