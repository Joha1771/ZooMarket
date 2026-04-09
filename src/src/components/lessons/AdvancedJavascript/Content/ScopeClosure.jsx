import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.2 — SCOPE AND CLOSURE
// ═══════════════════════════════════════════════════════════════════════════════

export function ScopeClosureExplain() {
  const [tab, setTab] = useState("scope");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "scope", label: "Scope" },
          { id: "chain", label: "Scope Chain" },
          { id: "closure", label: "Closure" },
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

      {tab === "scope" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Scope</strong> — o'zgaruvchi
            ko'rinish sohasi. Qayerda e'lon qilinsa, qayerdan ko'rinadi.
          </p>

          <div className="flex flex-col gap-2">
            {[
              {
                name: "Global Scope",
                color: "#4a9e60",
                desc: "Hamma joydan ko'rinadi",
                code: "var/let/const — funksiya tashqarisida",
              },
              {
                name: "Function (Local) Scope",
                color: "#185FA5",
                desc: "Faqat funksiya ichida ko'rinadi",
                code: "var/let/const — funksiya ichida",
              },
              {
                name: "Block Scope",
                color: "#c85c1a",
                desc: "Faqat {} blok ichida (let/const)",
                code: "let/const — if, for, {} ichida",
              },
            ].map(({ name, color, desc, code }) => (
              <div
                key={name}
                className="p-3 border rounded-xl"
                style={{ background: color + "0a", borderColor: color + "30" }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  {name}
                </div>
                <div className="text-xs text-[#7a7468] mb-1">{desc}</div>
                <div className="font-mono text-[10px] text-[#1a1814]">
                  {code}
                </div>
              </div>
            ))}
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "let ", color: C.kw },
                { text: "global", color: C.fn },
                { text: " = ", color: C.op },
                { text: '"Global"', color: C.str },
                { text: ";", color: C.op },
                { text: "  // Global scope", color: C.cmt },
              ],
              [{ text: "" }],
              [
                { text: "function ", color: C.kw },
                { text: "outer", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "  let ", color: C.kw },
                { text: "x", color: C.fn },
                { text: " = ", color: C.op },
                { text: '"Function scope"', color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "  if (true) {", color: C.op }],
              [
                { text: "    let ", color: C.kw },
                { text: "y", color: C.fn },
                { text: " = ", color: C.op },
                { text: '"Block scope"', color: C.str },
                { text: ";", color: C.op },
              ],
              [
                { text: "    var ", color: C.kw },
                { text: "z", color: C.fn },
                { text: " = ", color: C.op },
                { text: '"Function scope (var)"', color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "  // y ko'rinmaydi, z ko'rinadi", color: C.cmt }],
              [{ text: "}", color: C.op }],
            ]}
          />

          <div className="grid grid-cols-2 gap-2">
            <InfoBox color="#4a9e60" icon="✓">
              <strong>let/const</strong> — block-scoped. {} dan tashqarida yo'q.
            </InfoBox>
            <InfoBox color="#c85c1a" icon="⚠️">
              <strong>var</strong> — function-scoped. Block dan "chiqib ketadi"!
            </InfoBox>
          </div>
        </div>
      )}

      {tab === "chain" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Scope Chain</strong> — ichki
            funksiya tashqi scope dagi o'zgaruvchini topadi. Ichdan tashqariga
            qaraydi.
          </p>

          <div className="relative p-4 bg-[#f2efe8] rounded-xl border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Scope Chain (ichdan tashqariga):
            </div>
            {[
              {
                label: "inner() scope",
                vars: "z = 30",
                color: "#c85c1a",
                indent: 0,
              },
              {
                label: "outer() scope",
                vars: "y = 20",
                color: "#185FA5",
                indent: 16,
              },
              {
                label: "Global scope",
                vars: "x = 10",
                color: "#4a9e60",
                indent: 32,
              },
            ].map(({ label, vars, color, indent }) => (
              <div
                key={label}
                className="mb-2 p-2.5 rounded-lg border"
                style={{
                  marginLeft: indent,
                  background: color + "10",
                  borderColor: color + "40",
                }}
              >
                <div className="font-mono text-[9px] text-[#7a7468]">
                  {label}
                </div>
                <div
                  className="font-mono text-xs font-bold mt-0.5"
                  style={{ color }}
                >
                  {vars}
                </div>
              </div>
            ))}
            <div className="font-mono text-[10px] text-[#7a7468] mt-2">
              inner() → outer() → Global → (not found → ReferenceError)
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "let ", color: C.kw },
                { text: "x", color: C.fn },
                { text: " = ", color: C.op },
                { text: "10", color: C.num },
                { text: ";  ", color: C.op },
                { text: "// Global", color: C.cmt },
              ],
              [{ text: "" }],
              [
                { text: "function ", color: C.kw },
                { text: "outer", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "  let ", color: C.kw },
                { text: "y", color: C.fn },
                { text: " = ", color: C.op },
                { text: "20", color: C.num },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "  function ", color: C.kw },
                { text: "inner", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "    let ", color: C.kw },
                { text: "z", color: C.fn },
                { text: " = ", color: C.op },
                { text: "30", color: C.num },
                { text: ";", color: C.op },
              ],
              [
                { text: "    console.log(", color: C.fn },
                { text: "x", color: C.fn },
                { text: ");  ", color: C.op },
                { text: "// 10 ✓ (global)", color: C.cmt },
              ],
              [
                { text: "    console.log(", color: C.fn },
                { text: "y", color: C.fn },
                { text: ");  ", color: C.op },
                { text: "// 20 ✓ (outer)", color: C.cmt },
              ],
              [
                { text: "    console.log(", color: C.fn },
                { text: "z", color: C.fn },
                { text: ");  ", color: C.op },
                { text: "// 30 ✓ (own)", color: C.cmt },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "  inner();", color: C.fn }],
              [{ text: "}", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "closure" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Closure</strong> — ichki funksiya
            tashqi scope dagi o'zgaruvchilarni "yodlab qoladi", tashqi funksiya
            tugagandan keyin ham.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Interaktiv counter (closure bilan):
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div
                className="p-3 text-center rounded-lg"
                style={{
                  background: "#c85c1a15",
                  border: "1px solid #c85c1a30",
                }}
              >
                <div className="font-mono text-[10px] text-[#7a7468]">
                  counter1
                </div>
                <div className="font-mono text-3xl font-black text-[#c85c1a]">
                  {count}
                </div>
                <button
                  onClick={() => setCount((c) => c + 1)}
                  className="mt-1.5 px-3 py-1 font-mono text-[10px] font-bold text-white rounded border-none cursor-pointer"
                  style={{
                    background: "#c85c1a",
                    boxShadow: "0 2px 0 0 #8a3a0a",
                  }}
                >
                  increment()
                </button>
              </div>
              <div
                className="p-3 text-center rounded-lg"
                style={{
                  background: "#185FA515",
                  border: "1px solid #185FA530",
                }}
              >
                <div className="font-mono text-[10px] text-[#7a7468]">
                  counter2
                </div>
                <div className="font-mono text-3xl font-black text-[#185FA5]">
                  {count2}
                </div>
                <button
                  onClick={() => setCount2((c) => c + 1)}
                  className="mt-1.5 px-3 py-1 font-mono text-[10px] font-bold text-white rounded border-none cursor-pointer"
                  style={{
                    background: "#185FA5",
                    boxShadow: "0 2px 0 0 #0d3a66",
                  }}
                >
                  increment()
                </button>
              </div>
            </div>
            <div className="font-mono text-[10px] text-[#7a7468]">
              Har ikki counter mustaqil — o'z <Tag>count</Tag> ni saqlaydi!
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "function ", color: C.kw },
                { text: "makeCounter", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "  let ", color: C.kw },
                { text: "count", color: C.fn },
                { text: " = ", color: C.op },
                { text: "0", color: C.num },
                { text: ";  ", color: C.op },
                { text: "// closure o'zgaruvchi", color: C.cmt },
              ],
              [{ text: "" }],
              [
                { text: "  return function ", color: C.kw },
                { text: "increment", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "    ", color: C.op },
                { text: "count", color: C.fn },
                { text: "++;", color: C.op },
              ],
              [
                { text: "    return ", color: C.kw },
                { text: "count", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "  };", color: C.op }],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "counter1", color: C.fn },
                { text: " = ", color: C.op },
                { text: "makeCounter()", color: C.fn },
                { text: ";", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "counter2", color: C.fn },
                { text: " = ", color: C.op },
                { text: "makeCounter()", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "counter1()", color: C.fn },
                { text: ";  ", color: C.op },
                { text: "// 1", color: C.cmt },
              ],
              [
                { text: "counter1()", color: C.fn },
                { text: ";  ", color: C.op },
                { text: "// 2", color: C.cmt },
              ],
              [
                { text: "counter2()", color: C.fn },
                { text: ";  ", color: C.op },
                { text: "// 1 (mustaqil!)", color: C.cmt },
              ],
            ]}
          />

          <InfoBox color="#4a9e60" icon="💡">
            Closure — <strong>Data Privacy</strong> uchun. Tashqaridan{" "}
            <Tag color="#4a9e60">count</Tag> ga to'g'ridan murojaat mumkin emas,
            faqat funksiya orqali.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
