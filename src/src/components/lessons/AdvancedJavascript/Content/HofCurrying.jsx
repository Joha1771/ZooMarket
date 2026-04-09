import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.4 — HOF, CURRYING, PIPE
// ═══════════════════════════════════════════════════════════════════════════════

export function HofCurryingExplain() {
  const [tab, setTab] = useState("hof");
  const [num, setNum] = useState(5);
  const [pipeInput, setPipeInput] = useState("  salom dunyo  ");
  const [pipeResult, setPipeResult] = useState("");

  const double = (x) => x * 2;
  const square = (x) => x * x;
  const addTen = (x) => x + 10;

  const runPipe = () => {
    const trim = (s) => s.trim();
    const upper = (s) => s.toUpperCase();
    const exclaim = (s) => s + "!";
    const result = exclaim(upper(trim(pipeInput)));
    setPipeResult(result);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "hof", label: "HOF" },
          { id: "currying", label: "Currying" },
          { id: "pipe", label: "Pipe" },
          { id: "callback", label: "Callback" },
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

      {tab === "hof" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">
              HOF (Higher Order Function)
            </strong>{" "}
            — funksiyani argument sifatida qabul qiladigan yoki funksiyani
            qaytaradigan funksiya.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Sonni o'zgartiring va natijani ko'ring:
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="font-mono text-3xl font-black text-[#c85c1a]">
                {num}
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={num}
                onChange={(e) => setNum(Number(e.target.value))}
                className="flex-1"
                style={{ accentColor: "#c85c1a" }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { fn: "double", result: double(num), color: "#4a9e60" },
                { fn: "square", result: square(num), color: "#185FA5" },
                { fn: "addTen", result: addTen(num), color: "#c85c1a" },
              ].map(({ fn, result, color }) => (
                <div
                  key={fn}
                  className="p-2.5 rounded-lg text-center"
                  style={{
                    background: color + "10",
                    border: `1px solid ${color}30`,
                  }}
                >
                  <div className="font-mono text-[10px] text-[#7a7468]">
                    .{fn}({num})
                  </div>
                  <div
                    className="mt-1 font-mono text-xl font-black"
                    style={{ color }}
                  >
                    {result}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                {
                  text: "// HOF — funksiyani argument sifatida qabul qiladi",
                  color: C.cmt,
                },
              ],
              [
                { text: "function ", color: C.kw },
                { text: "apply", color: C.fn },
                { text: "(", color: C.op },
                { text: "fn", color: C.fn },
                { text: ", ", color: C.op },
                { text: "value", color: C.fn },
                { text: ") {", color: C.op },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "fn(", color: C.fn },
                { text: "value", color: C.fn },
                { text: ");", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "double", color: C.fn },
                { text: " = ", color: C.op },
                { text: "x => x * ", color: C.fn },
                { text: "2", color: C.num },
                { text: ";", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "square", color: C.fn },
                { text: " = ", color: C.op },
                { text: "x => x * x", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "apply(", color: C.fn },
                { text: "double", color: C.fn },
                { text: ", ", color: C.op },
                { text: "5", color: C.num },
                { text: ");  ", color: C.op },
                { text: "// 10", color: C.cmt },
              ],
              [
                { text: "apply(", color: C.fn },
                { text: "square", color: C.fn },
                { text: ", ", color: C.op },
                { text: "5", color: C.num },
                { text: ");  ", color: C.op },
                { text: "// 25", color: C.cmt },
              ],
              [{ text: "" }],
              [{ text: "// HOF — funksiyani qaytaradi", color: C.cmt }],
              [
                { text: "function ", color: C.kw },
                { text: "multiplier", color: C.fn },
                { text: "(", color: C.op },
                { text: "factor", color: C.fn },
                { text: ") {", color: C.op },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "x => x * ", color: C.fn },
                { text: "factor", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [
                { text: "const ", color: C.kw },
                { text: "triple", color: C.fn },
                { text: " = ", color: C.op },
                { text: "multiplier(", color: C.fn },
                { text: "3", color: C.num },
                { text: ");", color: C.op },
              ],
              [
                { text: "triple(", color: C.fn },
                { text: "5", color: C.num },
                { text: ");  ", color: C.op },
                { text: "// 15", color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "currying" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Currying</strong> — ko'p
            argumentli funksiyani bir argumentli funksiyalar zanjiriga
            aylantirish.
            <Tag color="#c85c1a">f(a,b,c)</Tag> →{" "}
            <Tag color="#4a9e60">f(a)(b)(c)</Tag>
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#e06c75] mb-1.5">
                Oddiy funksiya:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "function ", color: C.kw },
                    { text: "add", color: C.fn },
                    { text: "(a, b, c) {", color: C.op },
                  ],
                  [
                    { text: "  return ", color: C.kw },
                    { text: "a + b + c", color: C.fn },
                    { text: ";", color: C.op },
                  ],
                  [{ text: "}", color: C.op }],
                  [
                    { text: "add(", color: C.fn },
                    { text: "1", color: C.num },
                    { text: ", ", color: C.op },
                    { text: "2", color: C.num },
                    { text: ", ", color: C.op },
                    { text: "3", color: C.num },
                    { text: ");  ", color: C.op },
                    { text: "// 6", color: C.cmt },
                  ],
                ]}
              />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#4a9e60] mb-1.5">
                ✓ Curried funksiya:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "const ", color: C.kw },
                    { text: "add", color: C.fn },
                    { text: " = a => b => c =>", color: C.op },
                  ],
                  [
                    { text: "  a + b + c", color: C.fn },
                    { text: ";", color: C.op },
                  ],
                  [{ text: "" }],
                  [
                    { text: "add(", color: C.fn },
                    { text: "1", color: C.num },
                    { text: ")(", color: C.op },
                    { text: "2", color: C.num },
                    { text: ")(", color: C.op },
                    { text: "3", color: C.num },
                    { text: ");  ", color: C.op },
                    { text: "// 6", color: C.cmt },
                  ],
                ]}
              />
            </div>
          </div>

          <CodeSnippet
            lines={[
              [{ text: "// Amaliy misol: konfiguratsiya", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "greet", color: C.fn },
                { text: " = ", color: C.op },
                { text: "greeting => name =>", color: C.op },
              ],
              [
                { text: "  `${", color: C.str },
                { text: "greeting", color: C.fn },
                { text: "}, ${", color: C.str },
                { text: "name", color: C.fn },
                { text: "}!`", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "sayHello", color: C.fn },
                { text: " = ", color: C.op },
                { text: "greet(", color: C.fn },
                { text: '"Salom"', color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "sayBye", color: C.fn },
                { text: " = ", color: C.op },
                { text: "greet(", color: C.fn },
                { text: '"Xayr"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "sayHello(", color: C.fn },
                { text: '"Ali"', color: C.str },
                { text: ");  ", color: C.op },
                { text: '// "Salom, Ali!"', color: C.cmt },
              ],
              [
                { text: "sayBye(", color: C.fn },
                { text: '"Vali"', color: C.str },
                { text: ");  ", color: C.op },
                { text: '// "Xayr, Vali!"', color: C.cmt },
              ],
            ]}
          />

          <InfoBox color="#185FA5" icon="💡">
            Currying — funksiyani <strong>qayta ishlatish</strong> imkonini
            beradi. Partial application deb ham ataladi.
          </InfoBox>
        </div>
      )}

      {tab === "pipe" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Pipe</strong> — funksiyalarni
            ketma-ket qo'llash. Birinchining natijasi ikkinchiga kiradi. Chap →
            o'ng.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Pipe sinab ko'ring:
            </div>
            <input
              value={pipeInput}
              onChange={(e) => setPipeInput(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none mb-2"
            />
            <div className="flex gap-2 mb-2">
              {["trim()", "toUpperCase()", "exclaim()"].map((fn, i) => (
                <div
                  key={fn}
                  className="flex-1 text-center py-1.5 rounded font-mono text-[10px]"
                  style={{
                    background: ["#c85c1a15", "#185FA515", "#4a9e6015"][i],
                    color: ["#c85c1a", "#185FA5", "#4a9e60"][i],
                  }}
                >
                  {fn}
                </div>
              ))}
            </div>
            <button
              onClick={runPipe}
              className="w-full py-2 font-mono text-xs font-bold text-white border-none rounded-lg cursor-pointer"
              style={{ background: "#c85c1a", boxShadow: "0 2px 0 0 #8a3a0a" }}
            >
              Pipe ni ishlatish
            </button>
            {pipeResult && (
              <div className="mt-2 p-2.5 bg-[#1a1814] rounded-lg">
                <div className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] mb-1">
                  Natija:
                </div>
                <div className="font-mono text-xs text-[#c3e88d]">
                  "{pipeResult}"
                </div>
              </div>
            )}
          </div>

          <CodeSnippet
            lines={[
              [{ text: "// Pipe implementatsiyasi", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "pipe", color: C.fn },
                { text: " = (...fns) => x => fns.", color: C.op },
                { text: "reduce", color: C.fn },
                { text: "((v, f) => f(v), x);", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "process", color: C.fn },
                { text: " = ", color: C.op },
                { text: "pipe(", color: C.fn },
              ],
              [
                { text: "  str => str.", color: C.op },
                { text: "trim", color: C.fn },
                { text: "(),", color: C.op },
              ],
              [
                { text: "  str => str.", color: C.op },
                { text: "toUpperCase", color: C.fn },
                { text: "(),", color: C.op },
              ],
              [
                { text: "  str => str + ", color: C.op },
                { text: '"!"', color: C.str },
              ],
              [{ text: ");", color: C.op }],
              [{ text: "" }],
              [
                { text: "process(", color: C.fn },
                { text: '"  salom  "', color: C.str },
                { text: ");  ", color: C.op },
                { text: '// "SALOM!"', color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "callback" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Callback</strong> — boshqa
            funksiyaga argument sifatida beriladigan funksiya. Async
            operatsiyalarda va event handlerlarda keng ishlatiladi.
          </p>

          <div className="flex flex-col gap-3">
            {[
              {
                title: "Array metodlarida callback:",
                code: [
                  [
                    { text: "const ", color: C.kw },
                    { text: "nums", color: C.fn },
                    { text: " = [", color: C.op },
                    { text: "1", color: C.num },
                    { text: ",", color: C.op },
                    { text: "2", color: C.num },
                    { text: ",", color: C.op },
                    { text: "3", color: C.num },
                    { text: ",", color: C.op },
                    { text: "4", color: C.num },
                    { text: "];", color: C.op },
                  ],
                  [{ text: "" }],
                  [
                    { text: "nums.", color: C.fn },
                    { text: "filter", color: C.fn },
                    { text: "(", color: C.op },
                    { text: "x => x % ", color: C.fn },
                    { text: "2", color: C.num },
                    { text: " === ", color: C.op },
                    { text: "0", color: C.num },
                    { text: ");  ", color: C.op },
                    { text: "// [2, 4]", color: C.cmt },
                  ],
                  [
                    { text: "nums.", color: C.fn },
                    { text: "map", color: C.fn },
                    { text: "(", color: C.op },
                    { text: "x => x * ", color: C.fn },
                    { text: "2", color: C.num },
                    { text: ");     ", color: C.op },
                    { text: "// [2,4,6,8]", color: C.cmt },
                  ],
                ],
              },
              {
                title: "setTimeout callback:",
                code: [
                  [
                    { text: "setTimeout(", color: C.fn },
                    { text: "() => {", color: C.op },
                  ],
                  [
                    { text: "  console.log(", color: C.fn },
                    { text: '"1 soniyadan keyin"', color: C.str },
                    { text: ");", color: C.op },
                  ],
                  [
                    { text: "}, ", color: C.op },
                    { text: "1000", color: C.num },
                    { text: ");", color: C.op },
                  ],
                ],
              },
              {
                title: "Custom HOF bilan callback:",
                code: [
                  [
                    { text: "function ", color: C.kw },
                    { text: "doTwice", color: C.fn },
                    { text: "(", color: C.op },
                    { text: "fn", color: C.fn },
                    { text: ") {", color: C.op },
                  ],
                  [{ text: "  fn(); fn();", color: "rgba(255,255,255,0.7)" }],
                  [{ text: "}", color: C.op }],
                  [{ text: "" }],
                  [
                    { text: "doTwice(", color: C.fn },
                    { text: "() => console.log(", color: C.op },
                    { text: '"Salom!"', color: C.str },
                    { text: "));", color: C.op },
                  ],
                  [{ text: "// Salom!", color: C.cmt }],
                  [{ text: "// Salom!", color: C.cmt }],
                ],
              },
            ].map(({ title, code }) => (
              <div key={title}>
                <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
                  {title}
                </div>
                <CodeSnippet lines={code} />
              </div>
            ))}
          </div>

          <InfoBox color="#4a9e60" icon="✓">
            Zamonaviy JS da <strong>Promise</strong> va{" "}
            <strong>async/await</strong> callback hell muammosini hal qiladi.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
