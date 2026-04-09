import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.9 — OBJECTS
// ═══════════════════════════════════════════════════════════════════════════════

export function ObjectsExplain() {
  const [tab, setTab] = useState("basics");
  const [obj] = useState({ name: "Ali", age: 25, city: "Toshkent" });
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["basics", "access", "methods"].map((id) => (
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
            {id === "basics"
              ? "Asoslar"
              : id === "access"
                ? "Murojaat"
                : "Metodlar"}
          </button>
        ))}
      </div>

      {tab === "basics" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Object — kalit:qiymat juftlari to'plami. Haqiqiy dunyo ob'yektlarini
            modellashtiradi.
          </p>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-3">
              Ob'yektni bosing — qiymatni ko'ring:
            </div>
            <div className="flex flex-col gap-1.5">
              {Object.entries(obj).map(([k, v]) => (
                <button
                  key={k}
                  onClick={() => setSelected(selected === k ? null : k)}
                  className="flex items-center gap-3 p-2.5 rounded-lg text-left border cursor-pointer transition-all"
                  style={{
                    background: selected === k ? "#c85c1a20" : "white",
                    borderColor:
                      selected === k ? "#c85c1a" : "rgba(26,24,20,0.10)",
                  }}
                >
                  <span className="font-mono text-xs font-bold text-[#c85c1a] w-16">
                    {k}:
                  </span>
                  <span className="font-mono text-xs text-[#1a1814]">
                    {typeof v === "string" ? `"${v}"` : v}
                  </span>
                  <span className="ml-auto text-[9px] font-mono text-[#7a7468]">
                    {typeof v}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "person", color: C.fn },
                { text: " = {", color: C.op },
              ],
              [
                { text: `  name: `, color: "rgba(255,255,255,0.7)" },
                { text: '"Ali"', color: C.str },
                { text: ",", color: C.op },
              ],
              [
                { text: `  age: `, color: "rgba(255,255,255,0.7)" },
                { text: "25", color: C.num },
                { text: ",", color: C.op },
              ],
              [
                { text: `  city: `, color: "rgba(255,255,255,0.7)" },
                { text: '"Toshkent"', color: C.str },
              ],
              [{ text: "};", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "access" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Ob'yekt xususiyatlariga 2 usulda murojaat qilish:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#4a9e60] mb-1.5">
                ✓ Nuqta (dot) orqali:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "person", color: C.fn },
                    { text: ".name", color: C.fn },
                    { text: "  ", color: C.op },
                    { text: '// "Ali"', color: C.cmt },
                  ],
                  [
                    { text: "person", color: C.fn },
                    { text: ".age", color: C.fn },
                    { text: "   ", color: C.op },
                    { text: "// 25", color: C.cmt },
                  ],
                  [{ text: "" }],
                  [
                    { text: "person", color: C.fn },
                    { text: ".job", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: '"dev"', color: C.str },
                    { text: ";", color: C.op },
                  ],
                  [
                    { text: "delete ", color: C.kw },
                    { text: "person", color: C.fn },
                    { text: ".city;", color: C.fn },
                  ],
                ]}
              />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#185FA5] mb-1.5">
                Kvadrat qavs orqali:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "person", color: C.fn },
                    { text: '["name"]', color: C.str },
                    { text: " ", color: C.op },
                    { text: '// "Ali"', color: C.cmt },
                  ],
                  [{ text: "" }],
                  [{ text: "// Dinamik kalit:", color: C.cmt }],
                  [
                    { text: "const ", color: C.kw },
                    { text: "key", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: '"age"', color: C.str },
                    { text: ";", color: C.op },
                  ],
                  [
                    { text: "person", color: C.fn },
                    { text: "[", color: C.op },
                    { text: "key", color: C.fn },
                    { text: "]", color: C.op },
                    { text: " ", color: C.op },
                    { text: "// 25", color: C.cmt },
                  ],
                ]}
              />
            </div>
          </div>
          <InfoBox color="#185FA5" icon="💡">
            Kalit nomi o'zgaruvchida saqlanganida <Tag color="#185FA5">[]</Tag>{" "}
            ishlatish kerak.
          </InfoBox>
        </div>
      )}

      {tab === "methods" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Object konstruktorining foydali metodlari:
          </p>
          {[
            {
              name: "Object.keys(obj)",
              desc: "Kalitlar massivini qaytaradi",
              result: '["name", "age", "city"]',
            },
            {
              name: "Object.values(obj)",
              desc: "Qiymatlar massivini qaytaradi",
              result: '["Ali", 25, "Toshkent"]',
            },
            {
              name: "Object.entries(obj)",
              desc: "Kalit-qiymat juftlari massivi",
              result: '[["name","Ali"], ...]',
            },
            {
              name: "{...obj, ...other}",
              desc: "Spread — ob'yektlarni birlashtirish",
              result: '{name:"Ali",age:25,...}',
            },
          ].map(({ name, desc, result }) => (
            <div
              key={name}
              className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="font-mono text-xs font-bold text-[#c85c1a] mb-0.5">
                {name}
              </div>
              <div className="text-[10px] text-[#7a7468] mb-1">{desc}</div>
              <div className="font-mono text-[10px] text-[#1a1814]">
                → {result}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
