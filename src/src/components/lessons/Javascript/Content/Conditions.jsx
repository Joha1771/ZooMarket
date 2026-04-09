import { useState } from "react";
import { InfoBox, CodeSnippet, C, Tag } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.4 — CONDITIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function ConditionsExplain() {
  const [score, setScore] = useState(75);
  const [tab, setTab] = useState("if");

  const grade =
    score >= 90
      ? "A"
      : score >= 80
        ? "B"
        : score >= 70
          ? "C"
          : score >= 60
            ? "D"
            : "F";
  const gradeColor =
    score >= 90 ? "#4a9e60" : score >= 70 ? "#c85c1a" : "#e06c75";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["if", "switch", "ternary"].map((id) => (
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
            {id === "if"
              ? "if/else"
              : id === "switch"
                ? "switch"
                : "ternary ?:"}
          </button>
        ))}
      </div>

      {tab === "if" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Bahoni slayderda o'zgartiring — qaysi shart ishlashini kuzating:
          </p>
          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#7a7468]">
                Ball: {score}
              </span>
              <span
                className="font-mono text-xl font-black"
                style={{ color: gradeColor }}
              >
                {grade}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: "#c85c1a" }}
            />
          </div>
          <CodeSnippet
            lines={[
              [
                { text: "if ", color: C.kw },
                { text: "(", color: C.op },
                { text: "score", color: C.fn },
                { text: " >= ", color: C.op },
                { text: "90", color: C.num },
                { text: ") {", color: C.op },
              ],
              [
                { text: `  grade = `, color: "rgba(255,255,255,0.6)" },
                {
                  text: '"A"',
                  color: score >= 90 ? C.str : "rgba(255,255,255,0.3)",
                },
              ],
              [
                { text: "} ", color: C.op },
                { text: "else if ", color: C.kw },
                { text: "(score >= ", color: C.op },
                { text: "80", color: C.num },
                { text: ") {", color: C.op },
              ],
              [
                { text: `  grade = `, color: "rgba(255,255,255,0.6)" },
                {
                  text: '"B"',
                  color:
                    score >= 80 && score < 90 ? C.str : "rgba(255,255,255,0.3)",
                },
              ],
              [
                { text: "} ", color: C.op },
                { text: "else if ", color: C.kw },
                { text: "(score >= ", color: C.op },
                { text: "70", color: C.num },
                { text: ") {", color: C.op },
              ],
              [
                { text: `  grade = `, color: "rgba(255,255,255,0.6)" },
                {
                  text: '"C"',
                  color:
                    score >= 70 && score < 80 ? C.str : "rgba(255,255,255,0.3)",
                },
              ],
              [
                { text: "} ", color: C.op },
                { text: "else", color: C.kw },
                { text: " {", color: C.op },
              ],
              [
                { text: `  grade = `, color: "rgba(255,255,255,0.6)" },
                {
                  text: '"F"',
                  color: score < 70 ? C.str : "rgba(255,255,255,0.3)",
                },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "switch" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            switch — ko'p if/else o'rniga. Bir o'zgaruvchining turli
            qiymatlarini tekshiradi:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "switch ", color: C.kw },
                { text: "(", color: C.op },
                { text: "day", color: C.fn },
                { text: ") {", color: C.op },
              ],
              [
                { text: "  case ", color: C.kw },
                { text: '"dushanba"', color: C.str },
                { text: ":", color: C.op },
              ],
              [
                { text: "  case ", color: C.kw },
                { text: '"seshanba"', color: C.str },
                { text: ":", color: C.op },
              ],
              [
                { text: "    console.log(", color: C.fn },
                { text: '"Ish kuni"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "    break;", color: C.kw }],
              [
                { text: "  case ", color: C.kw },
                { text: '"shanba"', color: C.str },
                { text: ":", color: C.op },
              ],
              [
                { text: "  case ", color: C.kw },
                { text: '"yakshanba"', color: C.str },
                { text: ":", color: C.op },
              ],
              [
                { text: "    console.log(", color: C.fn },
                { text: '"Dam olish"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "    break;", color: C.kw }],
              [{ text: "  default:", color: C.kw }],
              [
                { text: "    console.log(", color: C.fn },
                { text: '"Noma\\\'lum"', color: C.str },
                { text: ");", color: C.op },
              ],

              [{ text: "}", color: C.op }],
            ]}
          />
          <InfoBox color="#185FA5" icon="⚠️">
            <strong>break</strong> unutilsa — keyingi case ham ishlaydi!
            ("Fall-through" deyiladi)
          </InfoBox>
        </div>
      )}

      {tab === "ternary" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Ternary — qisqa if/else. Bitta satrda shart:
          </p>
          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Sintaksis:
            </div>
            <div className="font-mono text-sm text-[#1a1814]">
              <span style={{ color: C.fn }}>shart</span>
              <span style={{ color: C.op }}> ? </span>
              <span style={{ color: C.str }}>true_qiymat</span>
              <span style={{ color: C.op }}> : </span>
              <span style={{ color: C.kw }}>false_qiymat</span>
            </div>
          </div>
          {[
            {
              before:
                "if (age >= 18) {\n  status = 'Voyaga yetgan'\n} else {\n  status = 'Voyaga yetmagan'\n}",
              after:
                "const status = age >= 18 ? 'Voyaga yetgan' : 'Voyaga yetmagan';",
            },
            {
              before:
                "if (isLoggedIn) {\n  greeting = 'Xush kelibsiz!'\n} else {\n  greeting = 'Iltimos, kiring'\n}",
              after:
                "const greeting = isLoggedIn ? 'Xush kelibsiz!' : 'Iltimos, kiring';",
            },
          ].map((ex, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[10px] font-mono text-[#e06c75] mb-1">
                    Uzun yozish:
                  </div>
                  <div className="bg-[#2c2820] rounded p-2 font-mono text-[10px] text-[#c3e88d] whitespace-pre leading-loose">
                    {ex.before}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#4a9e60] mb-1">
                    ✓ Ternary:
                  </div>
                  <div className="bg-[#2c2820] rounded p-2 font-mono text-[10px] text-[#c3e88d] whitespace-pre leading-loose">
                    {ex.after}
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
