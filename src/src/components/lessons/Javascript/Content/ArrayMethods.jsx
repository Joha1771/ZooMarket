import { useState } from "react";
import { CodeSnippet, Tag, InfoBox } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.12 — ARRAY METHODS
// ═══════════════════════════════════════════════════════════════════════════════

export function ArrayMethodsExplain() {
  const [method, setMethod] = useState("map");
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  const methods = {
    map: {
      desc: "Har elementni o'zgartirib yangi massiv qaytaradi",
      code: "arr.map(x => x * 2)",
      result: data.map((x) => x * 2),
      color: "#4a9e60",
    },
    filter: {
      desc: "Shart to'g'ri bo'lgan elementlarni qaytaradi",
      code: "arr.filter(x => x % 2 === 0)",
      result: data.filter((x) => x % 2 === 0),
      color: "#185FA5",
    },
    reduce: {
      desc: "Barcha elementlarni bitta qiymatga qisqartiradi",
      code: "arr.reduce((acc, x) => acc + x, 0)",
      result: [data.reduce((a, b) => a + b, 0)],
      color: "#c85c1a",
    },
    find: {
      desc: "Shart to'g'ri bo'lgan birinchi elementni qaytaradi",
      code: "arr.find(x => x > 4)",
      result: [data.find((x) => x > 4)],
      color: "#993556",
    },
    forEach: {
      desc: "Har element ustida funksiya chaqiradi, qaytarmaydi",
      code: "arr.forEach(x => console.log(x))",
      result: data,
      color: "#b07820",
    },
    some: {
      desc: "Birorta element shart to'g'ri bo'lsa true",
      code: "arr.some(x => x > 6)",
      result: [String(data.some((x) => x > 6))],
      color: "#7a4a9e",
    },
    every: {
      desc: "Barcha element shart to'g'ri bo'lsa true",
      code: "arr.every(x => x > 0)",
      result: [String(data.every((x) => x > 0))],
      color: "#3a6a4a",
    },
  };

  const cur = methods[method];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Funksional metodlar — massivlar bilan ishlashning zamonaviy usuli. Har
        metodni bosib sinab ko'ring:
      </p>

      <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] mb-2">
          Boshlang'ich massiv:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {data.map((n) => (
            <div
              key={n}
              className="font-mono text-xs font-bold px-2.5 py-1.5 rounded-lg bg-[#c85c1a15] text-[#c85c1a] border border-[#c85c1a30]"
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        {Object.keys(methods).map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className="py-2 rounded-lg font-mono text-[10px] font-bold border transition-all cursor-pointer"
            style={{
              background: method === m ? methods[m].color : "#f2efe8",
              borderColor:
                method === m ? methods[m].color : "rgba(26,24,20,0.10)",
              color: method === m ? "#fff" : "#1a1814",
            }}
          >
            .{m}()
          </button>
        ))}
      </div>

      <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
        <div className="text-xs text-[#7a7468] mb-2">{cur.desc}</div>
        <CodeSnippet
          lines={[
            [
              { text: "const result = ", color: "rgba(255,255,255,0.7)" },
              { text: cur.code, color: cur.color },
            ],
          ]}
        />
        <div className="mt-3">
          <div className="font-mono text-[10px] text-[#7a7468] mb-1.5">
            Natija:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cur.result.map((n, i) => (
              <div
                key={i}
                className="font-mono text-xs font-bold px-2.5 py-1.5 rounded-lg"
                style={{
                  background: cur.color + "20",
                  color: cur.color,
                  border: `1px solid ${cur.color}40`,
                }}
              >
                {String(n)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <InfoBox color="#4a9e60" icon="✓">
        Zanjir:{" "}
        <Tag color="#4a9e60">
          arr.filter(x =&gt; x &gt; 2).map(x =&gt; x * 10)
        </Tag>{" "}
        — metodlarni ketma-ket qo'llash mumkin!
      </InfoBox>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
