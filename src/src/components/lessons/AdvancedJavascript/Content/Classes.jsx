import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.6 — CLASSES: INHERITANCE AND ENCAPSULATION
// ═══════════════════════════════════════════════════════════════════════════════

export function ClassesExplain() {
  const [tab, setTab] = useState("basics");
  const [radius, setRadius] = useState(5);
  const area = (Math.PI * radius * radius).toFixed(2);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "basics", label: "Class asoslari" },
          { id: "inheritance", label: "Inheritance" },
          { id: "encapsulation", label: "Encapsulation" },
          { id: "static", label: "Static" },
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

      {tab === "basics" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Class</strong> — ob'yekt yaratish
            uchun shablon. Constructor function ustidagi syntactic sugar.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Circle kalkulyatori:
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="font-mono text-[10px] text-[#7a7468]">
                radius: {radius}
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="flex-1"
                style={{ accentColor: "#c85c1a" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div
                className="p-2 text-center rounded-lg"
                style={{
                  background: "#c85c1a15",
                  border: "1px solid #c85c1a30",
                }}
              >
                <div className="font-mono text-[9px] text-[#7a7468]">
                  circle.radius
                </div>
                <div className="font-mono text-xl font-black text-[#c85c1a]">
                  {radius}
                </div>
              </div>
              <div
                className="p-2 text-center rounded-lg"
                style={{
                  background: "#185FA515",
                  border: "1px solid #185FA530",
                }}
              >
                <div className="font-mono text-[9px] text-[#7a7468]">
                  circle.area
                </div>
                <div className="font-mono text-xl font-black text-[#185FA5]">
                  {area}
                </div>
              </div>
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "class ", color: C.kw },
                { text: "Circle", color: C.fn },
                { text: " {", color: C.op },
              ],
              [
                { text: "  constructor", color: C.kw },
                { text: "(radius) {", color: C.op },
              ],
              [
                { text: "    this", color: C.kw },
                { text: ".radius = radius;", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "" }],
              [{ text: "  // Getter", color: C.cmt }],
              [
                { text: "  get ", color: C.kw },
                { text: "area", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "    return ", color: C.kw },
                { text: "Math.PI * ", color: C.fn },
                { text: "this", color: C.kw },
                { text: ".radius ** ", color: C.op },
                { text: "2", color: C.num },
                { text: ";", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "" }],
              [{ text: "  // Setter", color: C.cmt }],
              [
                { text: "  set ", color: C.kw },
                { text: "radius", color: C.fn },
                { text: "(value) {", color: C.op },
              ],
              [
                { text: "    if (value < ", color: C.op },
                { text: "0", color: C.num },
                { text: ") throw new ", color: C.kw },
                { text: "Error(", color: C.fn },
                { text: '"Musbat bolsin"', color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "    this", color: C.kw },
                { text: "._radius = value;", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "c", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "Circle(", color: C.fn },
                { text: "5", color: C.num },
                { text: ");", color: C.op },
              ],
              [
                { text: "c.", color: C.fn },
                { text: "area", color: C.fn },
                { text: ";  ", color: C.op },
                { text: "// 78.54", color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "inheritance" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Inheritance</strong> — bir class
            boshqa classdan xususiyat va metodlarni meros oladi.
            <Tag color="#185FA5">extends</Tag> va{" "}
            <Tag color="#c85c1a">super</Tag> kalit so'zlari.
          </p>

          <div className="flex flex-col gap-1.5">
            <div
              className="p-2.5 rounded-lg border"
              style={{ background: "#4a9e6010", borderColor: "#4a9e6040" }}
            >
              <div className="font-mono text-xs font-bold text-[#4a9e60]">
                Animal (parent)
              </div>
              <div className="font-mono text-[10px] text-[#7a7468] mt-0.5">
                legs, walk()
              </div>
            </div>
            <div className="ml-4 text-[#7a7468] font-mono text-xs">
              ↓ extends
            </div>
            <div className="grid grid-cols-2 gap-2 ml-4">
              {[
                { name: "Dog (child)", extra: "bark()", color: "#c85c1a" },
                { name: "Bird (child)", extra: "fly()", color: "#185FA5" },
              ].map(({ name, extra, color }) => (
                <div
                  key={name}
                  className="p-2.5 rounded-lg border"
                  style={{
                    background: color + "10",
                    borderColor: color + "40",
                  }}
                >
                  <div
                    className="font-mono text-xs font-bold"
                    style={{ color }}
                  >
                    {name}
                  </div>
                  <div className="font-mono text-[10px] text-[#7a7468] mt-0.5">
                    inherits walk() + {extra}
                  </div>
                </div>
              ))}
            </div>
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
                { text: "(legs) { this", color: C.op },
                { text: ".legs = legs; }", color: C.op },
              ],
              [
                { text: "  walk() { return ", color: C.kw },
                { text: "`${this.legs} oyoqda yuradi`", color: C.str },
                { text: "; }", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "class ", color: C.kw },
                { text: "Dog", color: C.fn },
                { text: " extends ", color: C.kw },
                { text: "Animal", color: C.fn },
                { text: " {", color: C.op },
              ],
              [
                { text: "  constructor", color: C.kw },
                { text: "(name) {", color: C.op },
              ],
              [
                { text: "    super(", color: C.kw },
                { text: "4", color: C.num },
                { text: ");  ", color: C.op },
                { text: "// Animal(4) chaqiradi", color: C.cmt },
              ],
              [
                { text: "    this", color: C.kw },
                { text: ".name = name;", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [
                { text: "  bark() { return ", color: C.kw },
                { text: '"Hav hav!"', color: C.str },
                { text: "; }", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "dog", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "Dog(", color: C.fn },
                { text: '"Rex"', color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "dog.", color: C.fn },
                { text: "walk", color: C.fn },
                { text: "();  ", color: C.op },
                { text: '// "4 oyoqda yuradi"', color: C.cmt },
              ],
              [
                { text: "dog.", color: C.fn },
                { text: "bark", color: C.fn },
                { text: "();  ", color: C.op },
                { text: '// "Hav hav!"', color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "encapsulation" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Encapsulation</strong> — ichki
            ma'lumotni yashirish. <Tag color="#e06c75">#</Tag> prefiksi bilan
            private xususiyatlar yaratiladi.
          </p>

          <div className="grid grid-cols-3 gap-2">
            {[
              {
                mod: "public",
                symbol: "name",
                color: "#4a9e60",
                desc: "Hamma ko'radi, o'zgartira oladi",
              },
              {
                mod: "private",
                symbol: "#balance",
                color: "#c85c1a",
                desc: "Faqat class ichida ko'rinadi",
              },
              {
                mod: "protected",
                symbol: "_salary",
                color: "#185FA5",
                desc: "Convention: _ bilan (haqiqiy emas)",
              },
            ].map(({ mod, symbol, color, desc }) => (
              <div
                key={mod}
                className="p-2.5 rounded-xl border text-center"
                style={{ background: color + "10", borderColor: color + "30" }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  {mod}
                </div>
                <code className="font-mono text-[10px]" style={{ color }}>
                  {symbol}
                </code>
                <div className="text-[9px] text-[#7a7468] mt-1">{desc}</div>
              </div>
            ))}
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "class ", color: C.kw },
                { text: "BankAccount", color: C.fn },
                { text: " {", color: C.op },
              ],
              [
                { text: "  #balance = ", color: C.kw },
                { text: "0", color: C.num },
                { text: ";  ", color: C.op },
                { text: "// private", color: C.cmt },
              ],
              [{ text: "" }],
              [
                { text: "  constructor", color: C.kw },
                { text: "(initialBalance) {", color: C.op },
              ],
              [
                { text: "    this", color: C.kw },
                { text: ".#balance = initialBalance;", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "" }],
              [{ text: "  deposit(amount) {", color: C.fn }],
              [
                { text: "    if (amount > ", color: C.op },
                { text: "0", color: C.num },
                { text: ") this", color: C.kw },
                { text: ".#balance += amount;", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "" }],
              [
                { text: "  get ", color: C.kw },
                { text: "balance", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "    return ", color: C.kw },
                { text: "this", color: C.kw },
                { text: ".#balance;", color: C.op },
                { text: "  // getter orqali o'qish", color: C.cmt },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "acc", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "BankAccount(", color: C.fn },
                { text: "1000", color: C.num },
                { text: ");", color: C.op },
              ],
              [
                { text: "acc.", color: C.fn },
                { text: "#balance", color: C.fn },
                { text: ";  ", color: C.op },
                { text: "// ❌ SyntaxError!", color: "#e06c75" },
              ],
              [
                { text: "acc.", color: C.fn },
                { text: "balance", color: C.fn },
                { text: ";  ", color: C.op },
                { text: "// ✓ 1000", color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "static" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">static</strong> — instance emas,
            class o'ziga tegishli metod yoki xususiyat. <Tag>new</Tag> siz
            chaqiriladi.
          </p>

          <CodeSnippet
            lines={[
              [
                { text: "class ", color: C.kw },
                { text: "MathHelper", color: C.fn },
                { text: " {", color: C.op },
              ],
              [
                { text: "  static ", color: C.kw },
                { text: "PI", color: C.fn },
                { text: " = ", color: C.op },
                { text: "3.14159", color: C.num },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "  static ", color: C.kw },
                { text: "square", color: C.fn },
                { text: "(x) {", color: C.op },
              ],
              [
                { text: "    return ", color: C.kw },
                { text: "x * x", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "}", color: C.op }],
              [{ text: "" }],
              [
                { text: "MathHelper.", color: C.fn },
                { text: "PI", color: C.fn },
                { text: ";       ", color: C.op },
                { text: "// 3.14159", color: C.cmt },
              ],
              [
                { text: "MathHelper.", color: C.fn },
                { text: "square(", color: C.fn },
                { text: "5", color: C.num },
                { text: ");  ", color: C.op },
                { text: "// 25", color: C.cmt },
              ],
              [{ text: "" }],
              [{ text: "// Counter misoli:", color: C.cmt }],
              [
                { text: "class ", color: C.kw },
                { text: "User", color: C.fn },
                { text: " {", color: C.op },
              ],
              [
                { text: "  static ", color: C.kw },
                { text: "count", color: C.fn },
                { text: " = ", color: C.op },
                { text: "0", color: C.num },
                { text: ";", color: C.op },
              ],
              [
                { text: "  constructor", color: C.kw },
                { text: "() { User.", color: C.fn },
                { text: "count", color: C.fn },
                { text: "++; }", color: C.op },
              ],
              [{ text: "}", color: C.op }],
              [
                { text: "new ", color: C.kw },
                { text: "User", color: C.fn },
                { text: "(); new ", color: C.kw },
                { text: "User", color: C.fn },
                { text: "();", color: C.op },
              ],
              [
                { text: "User.", color: C.fn },
                { text: "count", color: C.fn },
                { text: ";  ", color: C.op },
                { text: "// 2", color: C.cmt },
              ],
            ]}
          />

          <div className="grid grid-cols-2 gap-2">
            {[
              {
                title: "instance metod",
                color: "#c85c1a",
                desc: "this orqali, har ob'yektda bor",
                code: "obj.greet()",
              },
              {
                title: "static metod",
                color: "#4a9e60",
                desc: "class orqali, new siz",
                code: "ClassName.util()",
              },
            ].map(({ title, color, desc, code }) => (
              <div
                key={title}
                className="p-2.5 rounded-xl border"
                style={{ background: color + "10", borderColor: color + "30" }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  {title}
                </div>
                <div className="text-[10px] text-[#7a7468] mb-1">{desc}</div>
                <code className="font-mono text-[10px]" style={{ color }}>
                  {code}
                </code>
              </div>
            ))}
          </div>

          <InfoBox color="#185FA5" icon="💡">
            Built-in static misollari: <Tag color="#185FA5">Object.keys()</Tag>,{" "}
            <Tag color="#185FA5">Array.isArray()</Tag>,{" "}
            <Tag color="#185FA5">Math.random()</Tag>
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
