import { useState } from "react";
import { CodeSnippet, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.6 — FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function FunctionsExplain() {
  const [tab, setTab] = useState("types");
  const [a, setA] = useState(5);
  const [b, setBVal] = useState(3);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["types", "params", "arrow"].map((id) => (
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
            {id === "types"
              ? "Turlari"
              : id === "params"
                ? "Parametrlar"
                : "Arrow ⇒"}
          </button>
        ))}
      </div>

      {tab === "types" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Funksiya — takrorlanadigan kod bloki. Bir marta yoziladi, ko'p marta
            chaqiriladi.
          </p>
          {[
            {
              title: "Declaration (e'lon)",
              hoisting: true,
              code: [
                [
                  { text: "function ", color: C.kw },
                  { text: "add", color: C.fn },
                  { text: "(", color: C.op },
                  { text: "a, b", color: C.fn },
                  { text: ") {", color: C.op },
                ],
                [
                  { text: "  return ", color: C.kw },
                  { text: "a", color: C.fn },
                  { text: " + ", color: C.op },
                  { text: "b", color: C.fn },
                  { text: ";", color: C.op },
                ],
                [{ text: "}", color: C.op }],
                [{ text: "" }],
                [
                  { text: "add(", color: C.fn },
                  { text: "5", color: C.num },
                  { text: ", ", color: C.op },
                  { text: "3", color: C.num },
                  { text: ");  ", color: C.op },
                  { text: "// → 8", color: C.cmt },
                ],
              ],
            },
            {
              title: "Expression (ifoda)",
              hoisting: false,
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "add", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "function", color: C.kw },
                  { text: "(", color: C.op },
                  { text: "a, b", color: C.fn },
                  { text: ") {", color: C.op },
                ],
                [
                  { text: "  return ", color: C.kw },
                  { text: "a", color: C.fn },
                  { text: " + ", color: C.op },
                  { text: "b", color: C.fn },
                  { text: ";", color: C.op },
                ],
                [{ text: "};", color: C.op }],
              ],
            },
          ].map(({ title, hoisting, code }) => (
            <div key={title}>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="text-[10px] font-mono text-[#7a7468]">
                  {title}
                </div>
                <span
                  className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                  style={{
                    background: hoisting ? "#4a9e6015" : "#c85c1a15",
                    color: hoisting ? "#2a6040" : "#c85c1a",
                  }}
                >
                  {hoisting ? "hoisted" : "not hoisted"}
                </span>
              </div>
              <CodeSnippet lines={code} />
            </div>
          ))}
        </div>
      )}

      {tab === "params" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            a va b qiymatlarini o'zgartiring:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "a", v: a, set: setA },
              { label: "b", v: b, set: setBVal },
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
                  max={15}
                  value={v}
                  onChange={(e) => set(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: "#c85c1a" }}
                />
              </div>
            ))}
          </div>
          <CodeSnippet
            lines={[
              [
                { text: "function ", color: C.kw },
                { text: "calc", color: C.fn },
                { text: "(", color: C.op },
                { text: "a", color: C.fn },
                { text: ", ", color: C.op },
                { text: "b", color: C.fn },
                { text: " = ", color: C.op },
                { text: "1", color: C.num },
                { text: ") {  ", color: C.op },
                { text: "// default qiymat", color: C.cmt },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "{", color: C.op },
              ],
              [
                { text: "    sum: ", color: "rgba(255,255,255,0.7)" },
                { text: "a", color: C.fn },
                { text: " + ", color: C.op },
                { text: "b", color: C.fn },
                { text: ",", color: C.op },
              ],
              [
                { text: "    mul: ", color: "rgba(255,255,255,0.7)" },
                { text: "a", color: C.fn },
                { text: " * ", color: C.op },
                { text: "b", color: C.fn },
                { text: ",", color: C.op },
              ],
              [
                { text: "    pow: ", color: "rgba(255,255,255,0.7)" },
                { text: "a", color: C.fn },
                { text: " ** ", color: C.op },
                { text: "b", color: C.fn },
                { text: ",", color: C.op },
              ],
              [{ text: "  };", color: C.op }],
              [{ text: "}", color: C.op }],
            ]}
          />
          <div className="bg-[#1a1814] rounded-lg p-3 border border-[rgba(255,255,255,0.08)]">
            <div className="text-[10px] font-mono text-[rgba(255,255,255,0.3)] mb-1.5">
              calc({a}, {b}) natijasi:
            </div>
            {[
              ["sum", a + b],
              ["mul", a * b],
              ["pow", a ** b],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between font-mono text-xs py-0.5"
              >
                <span className="text-[rgba(255,255,255,0.5)]">{k}:</span>
                <span className="text-[#c85c1a] font-bold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "arrow" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Arrow funksiya — qisqaroq yozish usuli. ES6 dan:
          </p>
          {[
            {
              from: "function add(a, b) { return a + b; }",
              to: "const add = (a, b) => a + b;",
            },
            {
              from: "function square(x) { return x * x; }",
              to: "const square = x => x * x;",
            },
            {
              from: "function greet(name) {\n  const msg = 'Salom, ' + name;\n  return msg;\n}",
              to: "const greet = name => {\n  const msg = 'Salom, ' + name;\n  return msg;\n};",
            },
          ].map((ex, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[9px] font-mono text-[#7a7468] mb-1">
                    Eski usul:
                  </div>
                  <div className="bg-[#2c2820] rounded p-2 font-mono text-[10px] text-[rgba(255,255,255,0.5)] whitespace-pre">
                    {ex.from}
                  </div>
                </div>
                <div>
                  <div className="text-[9px] font-mono text-[#4a9e60] mb-1">
                    ✓ Arrow:
                  </div>
                  <div className="bg-[#2c2820] rounded p-2 font-mono text-[10px] text-[#c3e88d] whitespace-pre">
                    {ex.to}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
