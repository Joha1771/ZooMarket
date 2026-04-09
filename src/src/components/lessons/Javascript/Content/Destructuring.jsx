import { useState } from "react";
import { CodeSnippet, C, Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.11 — DESTRUCTURING
// ═══════════════════════════════════════════════════════════════════════════════

export function DestructuringExplain() {
  const [tab, setTab] = useState("array");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["array", "object", "spread"].map((id) => (
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
            {id === "array"
              ? "Array"
              : id === "object"
                ? "Object"
                : "Spread/Rest"}
          </button>
        ))}
      </div>

      {tab === "array" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Destrukturizatsiya — massiv yoki ob'yektdan qiymatlarni chiqarish.{" "}
            <strong className="text-[#1a1814]">Qisqa yozish.</strong>
          </p>
          {[
            {
              title: "Eski usul:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "arr", color: C.fn },
                  { text: " = [", color: C.op },
                  { text: "1", color: C.num },
                  { text: ", ", color: C.op },
                  { text: "2", color: C.num },
                  { text: ", ", color: C.op },
                  { text: "3", color: C.num },
                  { text: "];", color: C.op },
                ],
                [
                  { text: "const ", color: C.kw },
                  { text: "a", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "arr[0]", color: C.fn },
                  { text: ";", color: C.op },
                ],
                [
                  { text: "const ", color: C.kw },
                  { text: "b", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "arr[1]", color: C.fn },
                  { text: ";", color: C.op },
                ],
              ],
              old: true,
            },
            {
              title: "✓ Destrukturizatsiya:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "arr", color: C.fn },
                  { text: " = [", color: C.op },
                  { text: "1", color: C.num },
                  { text: ", ", color: C.op },
                  { text: "2", color: C.num },
                  { text: ", ", color: C.op },
                  { text: "3", color: C.num },
                  { text: "];", color: C.op },
                ],
                [
                  { text: "const ", color: C.kw },
                  { text: "[a, b, c]", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "arr", color: C.fn },
                  { text: ";", color: C.op },
                ],
                [{ text: "// a=1, b=2, c=3", color: C.cmt }],
                [{ text: "" }],
                [{ text: "// O'tkazib yuborish:", color: C.cmt }],
                [
                  { text: "const ", color: C.kw },
                  { text: "[first, , third]", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "arr", color: C.fn },
                ],
                [{ text: "// first=1, third=3", color: C.cmt }],
              ],
              old: false,
            },
          ].map(({ title, code, old }) => (
            <div key={title}>
              <div
                className="text-[10px] font-mono mb-1.5"
                style={{ color: old ? "#e06c75" : "#4a9e60" }}
              >
                {title}
              </div>
              <CodeSnippet lines={code} />
            </div>
          ))}
          <div>
            <div className="text-[10px] font-mono text-[#c85c1a] mb-1.5">
              Swap (almashtirish) — eng aqlli usul:
            </div>
            <CodeSnippet
              lines={[
                [
                  { text: "let ", color: C.kw },
                  { text: "a", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "1", color: C.num },
                  { text: ", ", color: C.op },
                  { text: "b", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "2", color: C.num },
                  { text: ";", color: C.op },
                ],
                [
                  { text: "[a, b] = [b, a];", color: C.fn },
                  { text: "  ", color: C.op },
                  { text: "// a=2, b=1", color: C.cmt },
                ],
              ]}
            />
          </div>
        </div>
      )}

      {tab === "object" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Ob'yekt destrukturizatsiyasi:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "user", color: C.fn },
                { text: " = {", color: C.op },
                { text: "name: ", color: "rgba(255,255,255,0.7)" },
                { text: '"Ali"', color: C.str },
                { text: ", age: ", color: "rgba(255,255,255,0.7)" },
                { text: "25", color: C.num },
                { text: "};", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Oddiy:", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "{ name, age }", color: C.fn },
                { text: " = ", color: C.op },
                { text: "user", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Nom o'zgartirish:", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "{ name: userName }", color: C.fn },
                { text: " = ", color: C.op },
                { text: "user", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Default qiymat:", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "{ city = ", color: C.fn },
                { text: '"Toshkent"', color: C.str },
                { text: " }", color: C.fn },
                { text: " = ", color: C.op },
                { text: "user", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Funksiya parametrida:", color: C.cmt }],
              [
                { text: "function ", color: C.kw },
                { text: "greet", color: C.fn },
                { text: "(", color: C.op },
                { text: "{ name, age }", color: C.fn },
                { text: ") {", color: C.op },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "`${name} (${age})`", color: C.str },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "spread" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            <Tag>...</Tag> — spread va rest operatori:
          </p>
          {[
            {
              title: "Spread — massivlarni birlashtirish:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "a", color: C.fn },
                  { text: " = [", color: C.op },
                  { text: "1", color: C.num },
                  { text: ",", color: C.op },
                  { text: "2", color: C.num },
                  { text: "];", color: C.op },
                ],
                [
                  { text: "const ", color: C.kw },
                  { text: "b", color: C.fn },
                  { text: " = [", color: C.op },
                  { text: "3", color: C.num },
                  { text: ",", color: C.op },
                  { text: "4", color: C.num },
                  { text: "];", color: C.op },
                ],
                [
                  { text: "const ", color: C.kw },
                  { text: "c", color: C.fn },
                  { text: " = [", color: C.op },
                  { text: "...a", color: C.fn },
                  { text: ", ", color: C.op },
                  { text: "...b", color: C.fn },
                  { text: "];", color: C.op },
                  { text: "  ", color: C.op },
                  { text: "// [1,2,3,4]", color: C.cmt },
                ],
              ],
            },
            {
              title: "Spread — ob'yektlarni birlashtirish:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "defaults", color: C.fn },
                  { text: " = { ", color: C.op },
                  { text: "color: ", color: "rgba(255,255,255,0.7)" },
                  { text: '"red"', color: C.str },
                  { text: ", size: ", color: "rgba(255,255,255,0.7)" },
                  { text: "10", color: C.num },
                  { text: " };", color: C.op },
                ],
                [
                  { text: "const ", color: C.kw },
                  { text: "custom", color: C.fn },
                  { text: " = { ", color: C.op },
                  { text: "...defaults", color: C.fn },
                  { text: ", size: ", color: "rgba(255,255,255,0.7)" },
                  { text: "20", color: C.num },
                  { text: " };", color: C.op },
                ],
                [{ text: "// { color: 'red', size: 20 }", color: C.cmt }],
              ],
            },
            {
              title: "Rest — qolganlarini yig'ish:",
              code: [
                [
                  { text: "function ", color: C.kw },
                  { text: "sum", color: C.fn },
                  { text: "(", color: C.op },
                  { text: "...nums", color: C.fn },
                  { text: ") {", color: C.op },
                ],
                [
                  { text: "  return ", color: C.kw },
                  { text: "nums", color: C.fn },
                  { text: ".reduce((a,b) => a+b, ", color: C.op },
                  { text: "0", color: C.num },
                  { text: ");", color: C.op },
                ],
                [{ text: "}", color: C.op }],
                [
                  { text: "sum(", color: C.fn },
                  { text: "1", color: C.num },
                  { text: ",", color: C.op },
                  { text: "2", color: C.num },
                  { text: ",", color: C.op },
                  { text: "3", color: C.num },
                  { text: ",", color: C.op },
                  { text: "4", color: C.num },
                  { text: ");", color: C.op },
                  { text: "  ", color: C.op },
                  { text: "// 10", color: C.cmt },
                ],
              ],
            },
          ].map(({ title, code }) => (
            <div key={title}>
              <div className="text-[10px] font-mono text-[#c85c1a] mb-1.5">
                {title}
              </div>
              <CodeSnippet lines={code} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.12 — ARRAY METHODS (FUNCTIONAL)
// ═══════════════════════════════════════════════════════════════════════════════
