import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.8 — ERROR HANDLING
// ═══════════════════════════════════════════════════════════════════════════════

export function ErrorHandlingExplain() {
  const [tab, setTab] = useState("types");
  const [tryInput, setTryInput] = useState("5");
  const [tryResult, setTryResult] = useState(null);

  const runTryCatch = () => {
    try {
      const num = Number(tryInput);
      if (isNaN(num)) throw new TypeError("Raqam kiriting!");
      if (num < 0) throw new RangeError("Musbat son kiriting!");
      setTryResult({ ok: true, msg: `✓ JSON: ${Math.sqrt(num).toFixed(3)}` });
    } catch (e) {
      setTryResult({ ok: false, msg: `${e.name}: ${e.message}` });
    }
  };

  const errorTypes = [
    {
      name: "ReferenceError",
      color: "#e06c75",
      example: "console.log(x)  // x e'lonlanmagan",
      desc: "E'lonlanmagan o'zgaruvchi ishlatilganda",
    },
    {
      name: "TypeError",
      color: "#c85c1a",
      example: '"abc".toFixed(5)',
      desc: "Noto'g'ri tur ustida operatsiya",
    },
    {
      name: "SyntaxError",
      color: "#993556",
      example: "a =; 5",
      desc: "Sintaksis xatosi (parse vaqtida)",
    },
    {
      name: "RangeError",
      color: "#b07820",
      example: "arr.length = 9**99",
      desc: "Qiymat ruxsat etilgan doiradan tashqari",
    },
    {
      name: "URIError",
      color: "#185FA5",
      example: "decodeURI('%')",
      desc: "URI funksiyasida xato",
    },
    {
      name: "EvalError",
      color: "#4a9e60",
      example: "— (kamdan-kam)",
      desc: "eval() bilan bog'liq xato",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "types", label: "Xato turlari" },
          { id: "trycatch", label: "try/catch" },
          { id: "throw", label: "throw" },
          { id: "strict", label: "Strict mode" },
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
            JavaScriptda{" "}
            <strong className="text-[#1a1814]">7 turdagi xato</strong> mavjud.
            Har birini tanib olish debug qilishni osonlashtiradi.
          </p>

          <div className="flex flex-col gap-2">
            {errorTypes.map(({ name, color, example, desc }) => (
              <div
                key={name}
                className="p-3 border rounded-xl"
                style={{ background: color + "08", borderColor: color + "30" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="font-mono text-xs font-bold w-28 shrink-0"
                    style={{ color }}
                  >
                    {name}
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-[#7a7468] mb-1">
                      {desc}
                    </div>
                    <code className="font-mono text-[10px] text-[#1a1814]">
                      {example}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "trycatch" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <Tag>try/catch/finally</Tag> — xatolarni ushlab, dastur ishini davom
            ettirish.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Sinab ko'ring (son yoki matn kiriting):
            </div>
            <div className="flex gap-2 mb-2">
              <input
                value={tryInput}
                onChange={(e) => setTryInput(e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-[rgba(26,24,20,0.10)] rounded-lg text-sm outline-none"
                placeholder="Qiymat kiriting..."
              />
              <button
                onClick={runTryCatch}
                className="px-4 py-2 font-mono text-xs font-bold text-white border-none rounded-lg cursor-pointer"
                style={{
                  background: "#c85c1a",
                  boxShadow: "0 2px 0 0 #8a3a0a",
                }}
              >
                Ishlatish
              </button>
            </div>
            {tryResult && (
              <div
                className="p-2.5 rounded-lg font-mono text-xs"
                style={{
                  background: tryResult.ok ? "#4a9e6015" : "#e06c7515",
                  border: `1px solid ${tryResult.ok ? "#4a9e60" : "#e06c75"}40`,
                  color: tryResult.ok ? "#2a6040" : "#e06c75",
                }}
              >
                {tryResult.msg}
              </div>
            )}
          </div>

          <CodeSnippet
            lines={[
              [{ text: "try {", color: C.kw }],
              [{ text: "  // Xato chiqishi mumkin bo'lgan kod", color: C.cmt }],
              [
                { text: "  let ", color: C.kw },
                { text: "result", color: C.fn },
                { text: " = ", color: C.op },
                { text: "JSON.parse(", color: C.fn },
                { text: "data", color: C.fn },
                { text: ");", color: C.op },
              ],
              [
                { text: "  console.log(", color: C.fn },
                { text: "result", color: C.fn },
                { text: ");", color: C.op },
              ],
              [
                { text: "} ", color: C.kw },
                { text: "catch ", color: C.kw },
                { text: "(", color: C.op },
                { text: "error", color: C.fn },
                { text: ") {", color: C.op },
              ],
              [{ text: "  // Xato ushlandi", color: C.cmt }],
              [
                { text: "  console.log(", color: C.fn },
                { text: "error.", color: C.fn },
                { text: "name", color: C.fn },
                { text: ");    ", color: C.op },
                { text: "// SyntaxError", color: C.cmt },
              ],
              [
                { text: "  console.log(", color: C.fn },
                { text: "error.", color: C.fn },
                { text: "message", color: C.fn },
                { text: "); ", color: C.op },
                { text: "// xato matni", color: C.cmt },
              ],
              [
                { text: "} ", color: C.kw },
                { text: "finally ", color: C.kw },
                { text: "{", color: C.op },
              ],
              [
                {
                  text: "  // Har doim ishlaydi (xato bo'lsa ham)",
                  color: C.cmt,
                },
              ],
              [
                { text: "  console.log(", color: C.fn },
                { text: '"Tugadi"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />

          <div className="grid grid-cols-3 gap-2">
            {[
              {
                block: "try",
                color: "#4a9e60",
                desc: "Xato bo'lishi mumkin bo'lgan kod",
              },
              {
                block: "catch",
                color: "#c85c1a",
                desc: "Xato ushlanganda ishlaydi",
              },
              {
                block: "finally",
                color: "#185FA5",
                desc: "Har doim — xato bo'lsa ham",
              },
            ].map(({ block, color, desc }) => (
              <div
                key={block}
                className="p-2.5 rounded-lg text-center"
                style={{
                  background: color + "10",
                  border: `1px solid ${color}30`,
                }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  {block}
                </div>
                <div className="text-[9px] text-[#7a7468]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "throw" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <Tag>throw</Tag> — o'z xatolaringizni yaratish. Funksiyada kiruvchi
            ma'lumotni tekshirishda juda foydali.
          </p>

          <CodeSnippet
            lines={[
              [
                { text: "function ", color: C.kw },
                { text: "divide", color: C.fn },
                { text: "(a, b) {", color: C.op },
              ],
              [
                { text: "  if (typeof ", color: C.op },
                { text: "a", color: C.fn },
                { text: " !== ", color: C.op },
                { text: '"number"', color: C.str },
                { text: " || typeof ", color: C.op },
                { text: "b", color: C.fn },
                { text: " !== ", color: C.op },
                { text: '"number"', color: C.str },
                { text: ") {", color: C.op },
              ],
              [
                { text: "    throw new ", color: C.kw },
                { text: "TypeError(", color: C.fn },
                { text: '"Raqam kiriting!"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [
                { text: "  if (", color: C.op },
                { text: "b", color: C.fn },
                { text: " === ", color: C.op },
                { text: "0", color: C.num },
                { text: ") {", color: C.op },
              ],
              [
                { text: "    throw new ", color: C.kw },
                { text: "RangeError(", color: C.fn },
                { text: '"Nolga bo\\\'lish mumkin emas!"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [
                { text: "  return ", color: C.kw },
                { text: "a / b", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [{ text: "try {", color: C.kw }],
              [
                { text: "  divide(", color: C.fn },
                { text: "10", color: C.num },
                { text: ", ", color: C.op },
                { text: "0", color: C.num },
                { text: ");", color: C.op },
              ],
              [
                { text: "} ", color: C.kw },
                { text: "catch ", color: C.kw },
                { text: "(e) {", color: C.op },
              ],
              [
                { text: "  console.log(", color: C.fn },
                { text: "e.", color: C.fn },
                { text: "message", color: C.fn },
                { text: ");  ", color: C.op },
                { text: '// "Nolga bo\'lish mumkin emas!"', color: C.cmt },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />

          <InfoBox color="#c85c1a" icon="⚠️">
            Har doim mavjud Error turlaridan foydalaning:{" "}
            <Tag color="#c85c1a">TypeError</Tag>, <Tag>RangeError</Tag>,{" "}
            <Tag>Error</Tag>. Bu <code>error.name</code> ni aniq ko'rsatadi.
          </InfoBox>
        </div>
      )}

      {tab === "strict" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <Tag color="#4a9e60">"use strict"</Tag> — xavfli va eskirgan JS
            xususiyatlarini taqiqlaydi. Xatolarni oldindan ushlash imkonini
            beradi.
          </p>

          <CodeSnippet
            lines={[
              [
                { text: '"use strict";', color: C.str },
                { text: "  // Global strict mode", color: C.cmt },
              ],
              [{ text: "" }],
              [{ text: "// Yoki faqat funksiyada:", color: C.cmt }],
              [
                { text: "function ", color: C.kw },
                { text: "strict", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "  ", color: C.op },
                { text: '"use strict";', color: C.str },
              ],
              [{ text: "  // ...", color: C.cmt }],
              [{ text: "}", color: C.op }],
            ]}
          />

          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider">
              Strict mode TAQIQLAYDI:
            </div>
            {[
              {
                bad: "x = 10;",
                good: "let x = 10;",
                desc: "E'lonlanmagan o'zgaruvchi",
              },
              {
                bad: "delete obj;",
                good: "— (delete mumkin emas)",
                desc: "O'zgaruvchini delete qilish",
              },
              {
                bad: "function(a, a) {}",
                good: "function(a, b) {}",
                desc: "Parametr nomlarini takrorlash",
              },
              {
                bad: "with (obj) {...}",
                good: "const { x } = obj;",
                desc: "with operatori",
              },
            ].map(({ bad, good, desc }) => (
              <div
                key={bad}
                className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div className="text-[10px] text-[#7a7468] mb-1.5">{desc}:</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-mono text-[10px] text-[#e06c75]">
                    ✗ {bad}
                  </div>
                  <div className="font-mono text-[10px] text-[#4a9e60]">
                    ✓ {good}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <InfoBox color="#4a9e60" icon="✓">
            <strong>ES6 modules</strong> va <strong>class</strong> ichida strict
            mode avtomatik yoqiladi. Yozmasangiz ham ishlaydi.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
