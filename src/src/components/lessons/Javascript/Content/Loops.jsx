import { useState } from "react";
import { Tag, CodeSnippet, InfoBox, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.5 — LOOPS
// ═══════════════════════════════════════════════════════════════════════════════

export function LoopsExplain() {
  const [tab, setTab] = useState("for");
  const [n, setN] = useState(5);
  const [loopType, setLoopType] = useState("for");

  const items = Array.from({ length: n }, (_, i) => i + 1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["for", "while", "forof"].map((id) => (
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
            {id === "for" ? "for" : id === "while" ? "while" : "for...of"}
          </button>
        ))}
      </div>

      {tab === "for" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            for sikli — aniq takroriyat soni ma'lum bo'lganda. n ni
            o'zgartiring:
          </p>
          <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-1">
              n = {n}
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={n}
              onChange={(e) => setN(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#c85c1a" }}
            />
          </div>
          <CodeSnippet
            lines={[
              [
                { text: "for ", color: C.kw },
                { text: "(", color: C.op },
                { text: "let ", color: C.kw },
                { text: "i", color: C.fn },
                { text: " = ", color: C.op },
                { text: "0", color: C.num },
                { text: "; i < ", color: C.op },
                { text: String(n), color: C.num },
                { text: "; i++) {", color: C.op },
              ],
              [
                { text: `  console.log(`, color: "rgba(255,255,255,0.7)" },
                { text: "i", color: C.fn },
                { text: ");  ", color: C.op },
                { text: `// 0, 1, 2 ... ${n - 1}`, color: C.cmt },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />
          <div className="bg-[#1a1814] rounded-lg p-3 border border-[rgba(255,255,255,0.08)]">
            <div className="text-[10px] font-mono text-[rgba(255,255,255,0.3)] mb-2">
              Output ({n} marta):
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((i) => (
                <span
                  key={i}
                  className="font-mono text-xs px-2 py-0.5 rounded"
                  style={{ background: "#c85c1a20", color: "#c85c1a" }}
                >
                  {i - 1}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Initializer", code: "let i = 0", desc: "Boshlanish" },
              { label: "Condition", code: `i < ${n}`, desc: "Shart" },
              { label: "Iterator", code: "i++", desc: "Har qadamda" },
            ].map(({ label, code, desc }) => (
              <div
                key={label}
                className="p-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div className="font-mono text-[9px] text-[#c85c1a] mb-0.5">
                  {label}
                </div>
                <div className="font-mono text-xs font-bold text-[#1a1814]">
                  {code}
                </div>
                <div className="text-[10px] text-[#7a7468] mt-0.5">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "while" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            while — takroriyat soni oldindan ma'lum bo'lmasa. Shart true
            bo'lguncha ishlaydi:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
                while (shart oldin)
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "let ", color: C.kw },
                    { text: "i", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: "0", color: C.num },
                    { text: ";", color: C.op },
                  ],
                  [{ text: "" }],
                  [
                    { text: "while ", color: C.kw },
                    { text: "(", color: C.op },
                    { text: "i", color: C.fn },
                    { text: " < ", color: C.op },
                    { text: "5", color: C.num },
                    { text: ") {", color: C.op },
                  ],
                  [
                    { text: "  console.log(", color: "rgba(255,255,255,0.7)" },
                    { text: "i", color: C.fn },
                    { text: ");", color: C.op },
                  ],
                  [{ text: "  i++;", color: "rgba(255,255,255,0.7)" }],
                  [{ text: "}", color: C.op }],
                ]}
              />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
                do...while (shart keyin)
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "let ", color: C.kw },
                    { text: "i", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: "0", color: C.num },
                    { text: ";", color: C.op },
                  ],
                  [{ text: "" }],
                  [
                    { text: "do ", color: C.kw },
                    { text: "{", color: C.op },
                  ],
                  [
                    { text: "  console.log(", color: "rgba(255,255,255,0.7)" },
                    { text: "i", color: C.fn },
                    { text: ");", color: C.op },
                  ],
                  [{ text: "  i++;", color: "rgba(255,255,255,0.7)" }],
                  [
                    { text: "} ", color: C.op },
                    { text: "while ", color: C.kw },
                    { text: "(i < ", color: C.op },
                    { text: "5", color: C.num },
                    { text: ");", color: C.op },
                  ],
                ]}
              />
            </div>
          </div>
          <InfoBox color="#185FA5" icon="💡">
            <strong>Farq:</strong> <Tag>while</Tag> shart false bo'lsa hech
            qachon ishlamaydi. <Tag>do...while</Tag> esa kamida bir marta
            ishlaydi.
          </InfoBox>
        </div>
      )}

      {tab === "forof" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            for...of — massiv yoki satr elementlarini aylanish uchun. Eng
            o'qilishi oson:
          </p>
          {[
            {
              title: "Massiv ustida",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "fruits", color: C.fn },
                  { text: " = [", color: C.op },
                  { text: '"olma"', color: C.str },
                  { text: ", ", color: C.op },
                  { text: '"banan"', color: C.str },
                  { text: ", ", color: C.op },
                  { text: '"nok"', color: C.str },
                  { text: "];", color: C.op },
                ],
                [{ text: "" }],
                [
                  { text: "for ", color: C.kw },
                  { text: "(", color: C.op },
                  { text: "const ", color: C.kw },
                  { text: "fruit ", color: C.fn },
                  { text: "of ", color: C.kw },
                  { text: "fruits", color: C.fn },
                  { text: ") {", color: C.op },
                ],
                [
                  { text: "  console.log(", color: "rgba(255,255,255,0.7)" },
                  { text: "fruit", color: C.fn },
                  { text: ");  ", color: C.op },
                  { text: "// olma, banan, nok", color: C.cmt },
                ],
                [{ text: "}", color: C.op }],
              ],
            },
            {
              title: "Satr ustida",
              code: [
                [
                  { text: "for ", color: C.kw },
                  { text: "(", color: C.op },
                  { text: "const ", color: C.kw },
                  { text: "char ", color: C.fn },
                  { text: "of ", color: C.kw },
                  { text: '"salom"', color: C.str },
                  { text: ") {", color: C.op },
                ],
                [
                  { text: "  console.log(", color: "rgba(255,255,255,0.7)" },
                  { text: "char", color: C.fn },
                  { text: ");  ", color: C.op },
                  { text: "// s, a, l, o, m", color: C.cmt },
                ],
                [{ text: "}", color: C.op }],
              ],
            },
          ].map(({ title, code }) => (
            <div key={title}>
              <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
                {title}:
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
