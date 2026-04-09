import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.1 — EXECUTION CONTEXT AND HOISTING
// ═══════════════════════════════════════════════════════════════════════════════

export function ExecutionContextExplain() {
  const [tab, setTab] = useState("ec");
  const [phase, setPhase] = useState("creation");

  const creationData = [
    { name: "x", value: "undefined", type: "var" },
    { name: "timesTen", value: "fn() {...}", type: "function" },
    { name: "y", value: "undefined", type: "var" },
  ];

  const executionData = [
    { name: "x", value: "10", type: "var" },
    { name: "timesTen", value: "fn() {...}", type: "function" },
    { name: "y", value: "100", type: "var" },
  ];

  const data = phase === "creation" ? creationData : executionData;

  const hoistingRows = [
    ["var", "✓ Hoisted", "undefined", "#4a9e60", "#c85c1a"],
    ["let", "⚠ Partly", "TDZ Error", "#b07820", "#e06c75"],
    ["const", "⚠ Partly", "TDZ Error", "#b07820", "#e06c75"],
    ["function declaration", "✓ Hoisted", "Full body", "#4a9e60", "#4a9e60"],
    ["function expression", "✗ No", "undefined / TDZ", "#e06c75", "#e06c75"],
    ["arrow function", "✗ No", "undefined / TDZ", "#e06c75", "#e06c75"],
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "ec", label: "Execution Context" },
          { id: "hoisting", label: "Hoisting" },
          { id: "tdz", label: "TDZ" },
          { id: "callstack", label: "Call Stack" },
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

      {tab === "ec" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Execution Context</strong> — JS
            kodi ishlaydigan muhit. Har funksiya chaqirilganda yangi EC
            yaratiladi. 2 xil: <Tag>Global EC</Tag> va <Tag>Function EC</Tag>.
          </p>

          <div className="flex gap-2 p-1 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg">
            {["creation", "execution"].map((p) => (
              <button
                key={p}
                onClick={() => setPhase(p)}
                className="flex-1 py-1.5 font-mono text-[10px] font-bold rounded-md border-none cursor-pointer transition-all"
                style={{
                  background: phase === p ? "#c85c1a" : "transparent",
                  color: phase === p ? "#fff" : "#7a7468",
                }}
              >
                {p === "creation" ? "1. Creation Phase" : "2. Execution Phase"}
              </button>
            ))}
          </div>

          <div className="p-3 bg-[#1a1814] rounded-xl border border-[rgba(255,255,255,0.08)]">
            <div className="text-[10px] font-mono text-[rgba(255,255,255,0.3)] mb-2 uppercase tracking-wider">
              Variable Environment ({phase} phase):
            </div>
            <div className="flex flex-col gap-1">
              {data.map(({ name, value, type }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <span className="font-mono text-[10px] text-[rgba(255,255,255,0.3)]">
                    {type}
                  </span>
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: C.fn }}
                  >
                    {name}
                  </span>
                  <span className="text-[rgba(255,255,255,0.3)] mx-1">→</span>
                  <span
                    className="font-mono text-xs font-bold"
                    style={{
                      color:
                        phase === "creation" && value === "undefined"
                          ? "#e06c75"
                          : "#c3e88d",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "var ", color: C.kw },
                { text: "x", color: C.fn },
                { text: " = ", color: C.op },
                { text: "10", color: C.num },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "function ", color: C.kw },
                { text: "timesTen", color: C.fn },
                { text: "(a) {", color: C.op },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "a", color: C.fn },
                { text: " * ", color: C.op },
                { text: "10", color: C.num },
                { text: ";", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "var ", color: C.kw },
                { text: "y", color: C.fn },
                { text: " = ", color: C.op },
                { text: "timesTen(", color: C.fn },
                { text: "x", color: C.fn },
                { text: ");  ", color: C.op },
                { text: "// 100", color: C.cmt },
              ],
            ]}
          />

          <InfoBox color="#185FA5" icon="💡">
            EC 2 bosqichda ishlaydi: <strong>Creation</strong> — o'zgaruvchilar
            e'lon qilinadi (var → undefined, funksiyalar to'liq o'qiladi).{" "}
            <strong>Execution</strong> — qiymatlar o'zlashtiriladi.
          </InfoBox>
        </div>
      )}

      {tab === "hoisting" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Hoisting</strong> — interpretator
            e'lonlarni scope tepasiga "ko'tarib" qo'yadi (aslida Creation Phase
            da yuz beradi).
          </p>

          <div className="overflow-x-auto rounded-xl border border-[rgba(26,24,20,0.10)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#c85c1a10]">
                  {["Tur", "Hoisting", "Qiymat"].map((h) => (
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
                {hoistingRows.map(([tur, hoisting, qiymat, hColor, vColor]) => (
                  <tr key={tur}>
                    <td className="px-3 py-2 font-mono text-[#1a1814] border border-[rgba(26,24,20,0.10)]">
                      {tur}
                    </td>
                    <td
                      className="px-3 py-2 font-mono border border-[rgba(26,24,20,0.10)]"
                      style={{ color: hColor }}
                    >
                      {hoisting}
                    </td>
                    <td
                      className="px-3 py-2 font-mono border border-[rgba(26,24,20,0.10)]"
                      style={{ color: vColor }}
                    >
                      {qiymat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#4a9e60] mb-1.5">
                ✓ var hoisting:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "console.log(", color: C.fn },
                    { text: "a", color: C.fn },
                    { text: ");  ", color: C.op },
                    { text: "// undefined", color: C.cmt },
                  ],
                  [
                    { text: "var ", color: C.kw },
                    { text: "a", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: "5", color: C.num },
                    { text: ";", color: C.op },
                  ],
                ]}
              />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#e06c75] mb-1.5">
                ✗ let hoisting (TDZ):
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "console.log(", color: C.fn },
                    { text: "b", color: C.fn },
                    { text: ");  ", color: C.op },
                    { text: "// ❌ ReferenceError", color: "#e06c75" },
                  ],
                  [
                    { text: "let ", color: C.kw },
                    { text: "b", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: "5", color: C.num },
                    { text: ";", color: C.op },
                  ],
                ]}
              />
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono text-[#4a9e60] mb-1.5">
              ✓ Function declaration — to'liq hoisted:
            </div>
            <CodeSnippet
              lines={[
                [
                  { text: "greet();  ", color: C.fn },
                  { text: "// ✓ Ishlaydi! 'Salom'", color: C.cmt },
                ],
                [{ text: "" }],
                [
                  { text: "function ", color: C.kw },
                  { text: "greet", color: C.fn },
                  { text: "() {", color: C.op },
                ],
                [
                  { text: "  console.log(", color: C.fn },
                  { text: '"Salom"', color: C.str },
                  { text: ");", color: C.op },
                ],
                [{ text: "}", color: C.op }],
              ]}
            />
          </div>
        </div>
      )}

      {tab === "tdz" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">TDZ (Temporal Dead Zone)</strong>{" "}
            — o'zgaruvchi e'lon qilinishidan oldingi zona.{" "}
            <Tag color="#e06c75">let</Tag> va <Tag color="#e06c75">const</Tag>{" "}
            da TDZ dan oldin foydalanish{" "}
            <Tag color="#e06c75">ReferenceError</Tag> beradi.
          </p>

          <div className="relative p-4 bg-[#1a1814] rounded-xl border border-[rgba(255,255,255,0.08)]">
            <div className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] mb-3">
              TDZ vizualizatsiya:
            </div>
            {[
              {
                line: "{ // scope boshlanadi",
                color: "rgba(255,255,255,0.5)",
                bg: "transparent",
              },
              {
                line: "  console.log(name); // ❌ TDZ zona",
                color: "#e06c75",
                bg: "#e06c7510",
              },
              {
                line: "  // ... TDZ davom etadi ...",
                color: "#e06c75",
                bg: "#e06c7510",
              },
              {
                line: "  let name = 'Ali'; // ✓ TDZ tugadi",
                color: "#4a9e60",
                bg: "#4a9e6010",
              },
              {
                line: "  console.log(name); // ✓ 'Ali'",
                color: "#4a9e60",
                bg: "#4a9e6010",
              },
              { line: "}", color: "rgba(255,255,255,0.5)", bg: "transparent" },
            ].map(({ line, color, bg }, i) => (
              <div
                key={i}
                className="font-mono text-xs py-0.5 px-2 rounded"
                style={{ color, background: bg }}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-[#e06c7510] border border-[#e06c7530]">
              <div className="font-mono text-[10px] text-[#e06c75] mb-2">
                ❌ var — TDZ yo'q:
              </div>
              <div className="font-mono text-xs text-[rgba(255,255,255,0.6)] leading-loose bg-[#2c2820] rounded p-2">
                {
                  "{\n  // TDZ boshlanadi va tugaydi\n  console.log(x); // undefined ✓\n  var x = 5;\n}"
                }
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#4a9e6010] border border-[#4a9e6030]">
              <div className="font-mono text-[10px] text-[#4a9e60] mb-2">
                ✓ let — TDZ bor:
              </div>
              <div className="font-mono text-xs text-[rgba(255,255,255,0.6)] leading-loose bg-[#2c2820] rounded p-2">
                {
                  "{\n  // TDZ zona\n  console.log(x); // ❌ Error\n  let x = 5; // TDZ tugadi\n}"
                }
              </div>
            </div>
          </div>

          <InfoBox color="#c85c1a" icon="⚠️">
            TDZ — xavfsizlik mexanizmi. Ishlatishdan oldin e'lon qilish
            kodingizni aniq va xatosiz qiladi.
          </InfoBox>
        </div>
      )}

      {tab === "callstack" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Call Stack</strong> — JS engine
            EC larni boshqarish uchun ishlatiladigan LIFO (Last In, First Out)
            struktura.
          </p>

          <CodeSnippet
            lines={[
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
                { text: "function ", color: C.kw },
                { text: "average", color: C.fn },
                { text: "(a, b) {", color: C.op },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "add(", color: C.fn },
                { text: "a, b", color: C.fn },
                { text: ") / ", color: C.op },
                { text: "2", color: C.num },
                { text: ";", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "let ", color: C.kw },
                { text: "x", color: C.fn },
                { text: " = ", color: C.op },
                { text: "average(", color: C.fn },
                { text: "10", color: C.num },
                { text: ", ", color: C.op },
                { text: "20", color: C.num },
                { text: ");", color: C.op },
              ],
            ]}
          />

          <div className="p-3 bg-[#f2efe8] rounded-xl border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Call Stack (tepadan pastga: LIFO):
            </div>
            {[
              { fn: "add(10, 20)", color: "#c85c1a", step: "3" },
              { fn: "average(10, 20)", color: "#185FA5", step: "2" },
              { fn: "Global EC", color: "#4a9e60", step: "1" },
            ].map(({ fn, color, step }) => (
              <div
                key={fn}
                className="flex items-center gap-2 px-3 py-2 rounded-lg mb-1.5 border"
                style={{ background: color + "12", borderColor: color + "40" }}
              >
                <span className="font-mono text-[9px] text-[#7a7468] w-4">
                  {step}
                </span>
                <span className="font-mono text-xs font-bold" style={{ color }}>
                  {fn}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <InfoBox color="#4a9e60" icon="✓">
              <strong>LIFO</strong> — oxirgi kirgan birinchi chiqadi. Stack
              o'sadi va kamayadi.
            </InfoBox>
            <InfoBox color="#e06c75" icon="⚠️">
              <strong>Stack Overflow</strong> — rekursiv funksiya to'xtamasdan
              stack limitni to'ldiradi.
            </InfoBox>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
