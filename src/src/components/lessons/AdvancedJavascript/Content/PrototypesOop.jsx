import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.5 — PROTOTYPES AND OOP
// ═══════════════════════════════════════════════════════════════════════════════

export function PrototypesOopExplain() {
  const [tab, setTab] = useState("prototype");
  const [name, setName] = useState("Ali");
  const [legs, setLegs] = useState(4);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "prototype", label: "Prototype" },
          { id: "chain", label: "Proto Chain" },
          { id: "oop", label: "OOP 4 tamoyil" },
          { id: "constructor", label: "Constructor" },
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

      {tab === "prototype" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Prototype</strong> — JS dagi
            meros mexanizmi. Har ob'yekt o'z prototipiga havola saqlaydi. Metod
            topilmasa — prototipdan qidiriladi.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-3">
              Prototype zanjiri:
            </div>
            {[
              {
                label: "person ob'yekti",
                props: "name, age",
                methods: "—",
                color: "#c85c1a",
              },
              {
                label: "Person.prototype",
                props: "—",
                methods: "getName(), greet()",
                color: "#185FA5",
              },
              {
                label: "Object.prototype",
                props: "—",
                methods: "toString(), hasOwnProperty()",
                color: "#4a9e60",
              },
              {
                label: "null",
                props: "—",
                methods: "Zanjir tugadi",
                color: "#7a7468",
              },
            ].map(({ label, props, methods, color }, i) => (
              <div key={label} className="flex items-start gap-2 mb-2">
                {i > 0 && (
                  <div className="ml-4 text-[#7a7468] font-mono text-xs">
                    ↑ [[Prototype]]
                  </div>
                )}
                <div
                  className="flex-1 p-2.5 rounded-lg border"
                  style={{
                    background: color + "10",
                    borderColor: color + "30",
                  }}
                >
                  <div
                    className="mb-1 font-mono text-xs font-bold"
                    style={{ color }}
                  >
                    {label}
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[10px]">
                    <div className="text-[#7a7468]">
                      props: <span className="text-[#1a1814]">{props}</span>
                    </div>
                    <div className="text-[#7a7468]">
                      methods: <span className="text-[#1a1814]">{methods}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "function ", color: C.kw },
                { text: "Person", color: C.fn },
                { text: "(name) {", color: C.op },
              ],
              [
                { text: "  this", color: C.kw },
                { text: ".name = ", color: C.op },
                { text: "name", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                {
                  text: "// Prototype ga metod qo'shish (xotira samarali!)",
                  color: C.cmt,
                },
              ],
              [
                { text: "Person", color: C.fn },
                { text: ".prototype.", color: C.op },
                { text: "greet", color: C.fn },
                { text: " = function () {", color: C.op },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "`Salom, ${this", color: C.str },
                { text: ".name", color: C.op },
                { text: "}!`", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "};", color: C.op }],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "p1", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "Person(", color: C.fn },
                { text: '"Ali"', color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "p1.", color: C.fn },
                { text: "greet", color: C.fn },
                { text: "();  ", color: C.op },
                { text: '// "Salom, Ali!"', color: C.cmt },
              ],
            ]}
          />

          <InfoBox color="#185FA5" icon="💡">
            <strong>Xotira samaradorligi:</strong> metodlarni{" "}
            <Tag color="#185FA5">prototype</Tag> ga qo'yilsa, har ob'yekt uchun
            alohida nusxa yaratilmaydi — barchasi bitta metoddan foydalanadi.
          </InfoBox>
        </div>
      )}

      {tab === "chain" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Prototype Chain</strong> — metod
            yoki xususiyat qidirilganda, avval ob'yektning o'zidan, keyin
            prototipidan, keyin prototipning prototipidan qidiriladi.
          </p>

          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "arr", color: C.fn },
                { text: " = [", color: C.op },
                { text: "1", color: C.num },
                { text: ",", color: C.op },
                { text: "2", color: C.num },
                { text: ",", color: C.op },
                { text: "3", color: C.num },
                { text: "];", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// arr.map topiladi:", color: C.cmt }],
              [{ text: "// 1. arr o'zida? ✗", color: C.cmt }],
              [
                {
                  text: "// 2. Array.prototype da? ✓ → ishlaydi!",
                  color: C.cmt,
                },
              ],
              [{ text: "" }],
              [
                { text: "arr.", color: C.fn },
                { text: "map", color: C.fn },
                { text: "(", color: C.op },
                { text: "x => x * ", color: C.fn },
                { text: "2", color: C.num },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// toString topiladi:", color: C.cmt }],
              [{ text: "// 1. arr o'zida? ✗", color: C.cmt }],
              [{ text: "// 2. Array.prototype da? ✗", color: C.cmt }],
              [{ text: "// 3. Object.prototype da? ✓", color: C.cmt }],
              [
                { text: "arr.", color: C.fn },
                { text: "toString", color: C.fn },
                { text: "();", color: C.op },
              ],
            ]}
          />

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
              <div className="font-mono text-[10px] text-[#c85c1a] mb-1">
                hasOwnProperty:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "const ", color: C.kw },
                    { text: "obj", color: C.fn },
                    { text: " = { a: ", color: C.op },
                    { text: "1", color: C.num },
                    { text: " };", color: C.op },
                  ],
                  [
                    { text: "obj.hasOwnProperty(", color: C.fn },
                    { text: '"a"', color: C.str },
                    { text: ");  ", color: C.op },
                    { text: "// true", color: C.cmt },
                  ],
                  [
                    { text: "obj.hasOwnProperty(", color: C.fn },
                    { text: '"toString"', color: C.str },
                    { text: ");  ", color: C.op },
                    { text: "// false", color: C.cmt },
                  ],
                ]}
              />
            </div>
            <div className="p-2.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
              <div className="font-mono text-[10px] text-[#185FA5] mb-1">
                instanceof:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "const ", color: C.kw },
                    { text: "arr", color: C.fn },
                    { text: " = [];", color: C.op },
                  ],
                  [
                    { text: "arr instanceof ", color: C.fn },
                    { text: "Array", color: C.fn },
                    { text: ";   ", color: C.op },
                    { text: "// true", color: C.cmt },
                  ],
                  [
                    { text: "arr instanceof ", color: C.fn },
                    { text: "Object", color: C.fn },
                    { text: ";  ", color: C.op },
                    { text: "// true!", color: C.cmt },
                  ],
                ]}
              />
            </div>
          </div>
        </div>
      )}

      {tab === "oop" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            OOP ning 4 asosiy tamoyili:
          </p>

          {[
            {
              num: "1",
              name: "Encapsulation",
              color: "#c85c1a",
              desc: "Ma'lumot va metodlarni birga saqlash, ichki holatni yashirish.",
              example: "private #radius; get area() {...}",
            },
            {
              num: "2",
              name: "Inheritance",
              color: "#185FA5",
              desc: "Bir classdan boshqa class hosil qilish, xususiyatlarni meros qilib olish.",
              example: "class Dog extends Animal { bark() {...} }",
            },
            {
              num: "3",
              name: "Polymorphism",
              color: "#4a9e60",
              desc: "Bir xil metod turli classda turli xil ishlashi.",
              example:
                "class Cat { speak() { 'Miyov' } } vs class Dog { speak() { 'Hav' } }",
            },
            {
              num: "4",
              name: "Abstraction",
              color: "#993556",
              desc: "Murakkab ichki ishlashni yashirib, oddiy interfeys ko'rsatish.",
              example:
                "arr.sort() — ichida qanday ishlashini bilmasak ham foydalanamiz",
            },
          ].map(({ num, name, color, desc, example }) => (
            <div
              key={name}
              className="p-3 border rounded-xl"
              style={{ background: color + "08", borderColor: color + "30" }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="flex items-center justify-center w-5 h-5 font-mono text-xs font-black text-white rounded"
                  style={{ background: color }}
                >
                  {num}
                </span>
                <span className="font-mono text-xs font-bold" style={{ color }}>
                  {name}
                </span>
              </div>
              <p className="text-xs text-[#7a7468] mb-1.5">{desc}</p>
              <div className="font-mono text-[10px] text-[#1a1814] bg-white rounded px-2 py-1 border border-[rgba(26,24,20,0.06)]">
                {example}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "constructor" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Constructor funksiya — <Tag>new</Tag> bilan chaqirilib ob'yekt
            yaratadi. Hozir ko'proq <Tag color="#185FA5">class</Tag> sintaksisi
            ishlatiladi (syntactic sugar).
          </p>

          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <div className="font-mono text-[10px] text-[#7a7468] mb-1">
                  Ism:
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2 py-1.5 text-xs bg-white border border-[rgba(26,24,20,0.10)] rounded outline-none"
                />
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#7a7468] mb-1">
                  Oyoqlar: {legs}
                </div>
                <input
                  type="range"
                  min={2}
                  max={8}
                  step={2}
                  value={legs}
                  onChange={(e) => setLegs(Number(e.target.value))}
                  className="w-full mt-1"
                  style={{ accentColor: "#c85c1a" }}
                />
              </div>
            </div>
            <div className="p-2.5 bg-[#1a1814] rounded-lg font-mono text-xs text-[#c3e88d]">
              new Animal("{name}", {legs})<br />→{" "}
              {`{ name: "${name}", legs: ${legs}, walk: fn }`}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
                Constructor function:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "function ", color: C.kw },
                    { text: "Animal", color: C.fn },
                    { text: "(name, legs) {", color: C.op },
                  ],
                  [
                    { text: "  this", color: C.kw },
                    { text: ".name = name;", color: C.op },
                  ],
                  [
                    { text: "  this", color: C.kw },
                    { text: ".legs = legs;", color: C.op },
                  ],
                  [{ text: "}", color: C.op }],
                  [
                    { text: "Animal.prototype.", color: C.op },
                    { text: "walk", color: C.fn },
                    { text: " = function() {", color: C.op },
                  ],
                  [
                    { text: "  return ", color: C.kw },
                    { text: "`${this.name} yuradi`", color: C.str },
                  ],
                  [{ text: "};", color: C.op }],
                ]}
              />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#4a9e60] mb-1.5">
                ✓ Class (zamonaviy):
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "class ", color: C.kw },
                    { text: "Animal", color: C.fn },
                    { text: " {", color: C.op },
                  ],
                  [
                    { text: "  constructor", color: C.kw },
                    { text: "(name, legs) {", color: C.op },
                  ],
                  [
                    { text: "    this", color: C.kw },
                    { text: ".name = name;", color: C.op },
                  ],
                  [
                    { text: "    this", color: C.kw },
                    { text: ".legs = legs;", color: C.op },
                  ],
                  [{ text: "  }", color: C.op }],
                  [{ text: "  walk() {", color: C.fn }],
                  [
                    { text: "    return ", color: C.kw },
                    { text: "`${this.name} yuradi`", color: C.str },
                    { text: ";", color: C.op },
                  ],
                  [{ text: "  }", color: C.op }],
                  [{ text: "}", color: C.op }],
                ]}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
