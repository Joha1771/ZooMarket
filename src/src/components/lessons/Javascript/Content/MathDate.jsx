import { useState } from "react";
import { CodeSnippet, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.10 — MATH & DATE
// ═══════════════════════════════════════════════════════════════════════════════

export function MathDateExplain() {
  const [tab, setTab] = useState("math");
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [rand, setRand] = useState(Math.floor(Math.random() * 100) + 1);
  const now = new Date();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["math", "date"].map((id) => (
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
            {id === "math" ? "Math ob'yekti" : "Date ob'yekti"}
          </button>
        ))}
      </div>

      {tab === "math" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Math — matematik funksiyalar va konstantalar to'plami:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Math.round(4.6)", "5"],
              ["Math.floor(4.9)", "4"],
              ["Math.ceil(4.1)", "5"],
              ["Math.abs(-7)", "7"],
              ["Math.max(3,9,1)", "9"],
              ["Math.min(3,9,1)", "1"],
              ["Math.pow(2,10)", "1024"],
              ["Math.sqrt(16)", "4"],
              ["Math.PI", "3.14159..."],
              ["Math.random()", "[0, 1)"],
            ].map(([expr, res]) => (
              <div
                key={expr}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <code className="font-mono text-[10px] text-[#7a7468]">
                  {expr}
                </code>
                <span className="font-mono text-xs font-bold text-[#c85c1a]">
                  {res}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Tasodifiy son generatori [{min}, {max}]:
            </div>
            <div className="flex items-center gap-3 mb-3">
              {[
                { label: "Min", v: min, set: setMin },
                { label: "Max", v: max, set: setMax },
              ].map(({ label, v, set }) => (
                <div key={label} className="flex-1">
                  <div className="font-mono text-[9px] text-[#7a7468]">
                    {label}: {v}
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={v}
                    onChange={(e) => set(Number(e.target.value))}
                    className="w-full"
                    style={{ accentColor: "#c85c1a" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="font-mono text-3xl font-black text-[#c85c1a]">
                {rand}
              </div>
              <button
                onClick={() =>
                  setRand(Math.floor(Math.random() * (max - min + 1)) + min)
                }
                className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold text-white border-none cursor-pointer"
                style={{
                  background: "#c85c1a",
                  boxShadow: "0 2px 0 0 #8a3a0a",
                }}
              >
                Yangilash 🎲
              </button>
            </div>
            <CodeSnippet
              lines={[
                [
                  { text: "Math.floor(", color: C.fn },
                  { text: "Math.random()", color: C.fn },
                  { text: " * (", color: C.op },
                  { text: String(max), color: C.num },
                  { text: " - ", color: C.op },
                  { text: String(min), color: C.num },
                  { text: " + ", color: C.op },
                  { text: "1", color: C.num },
                  { text: ")) + ", color: C.op },
                  { text: String(min), color: C.num },
                ],
              ]}
            />
          </div>
        </div>
      )}

      {tab === "date" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Date — sana va vaqt bilan ishlash:
          </p>
          <div className="p-3.5 rounded-xl bg-[#1a1814] border border-[rgba(255,255,255,0.08)]">
            <div className="text-[10px] font-mono text-[rgba(255,255,255,0.3)] mb-2">
              Hozirgi vaqt:
            </div>
            <div className="font-mono text-lg font-black text-[#c85c1a]">
              {now.toLocaleTimeString("uz-UZ")}
            </div>
            <div className="font-mono text-sm text-[rgba(255,255,255,0.6)]">
              {now.toLocaleDateString("uz-UZ")}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              [`getFullYear()`, now.getFullYear()],
              [`getMonth()`, `${now.getMonth()} (0-11)`],
              [`getDate()`, now.getDate()],
              [`getDay()`, `${now.getDay()} (0=yak)`],
              [`getHours()`, now.getHours()],
              [`getMinutes()`, now.getMinutes()],
              [`getTime()`, "ms (epoch)"],
              [`Date.now()`, "Tez usul"],
            ].map(([m, v]) => (
              <div
                key={m}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <code className="font-mono text-[10px] text-[#7a7468]">
                  .{m}
                </code>
                <span className="font-mono text-xs font-bold text-[#c85c1a]">
                  {String(v)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
