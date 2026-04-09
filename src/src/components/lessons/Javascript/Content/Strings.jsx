import { useState } from "react";
import { CodeSnippet, Tag, InfoBox, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.7 — STRINGS
// ═══════════════════════════════════════════════════════════════════════════════

export function StringsExplain() {
  const [str, setStr] = useState("Salom Dunyo!");
  const [method, setMethod] = useState("length");

  const methods = {
    length: { desc: "Belgilar soni", result: () => str.length },
    toUpperCase: { desc: "Katta harflarga", result: () => str.toUpperCase() },
    toLowerCase: { desc: "Kichik harflarga", result: () => str.toLowerCase() },
    trim: {
      desc: "Bosh/oxiridagi bo'shliqlarni o'chirish",
      result: () => ("  " + str + "  ").trim(),
    },
    includes: {
      desc: "Matn ichida bor/yo'q",
      result: () => String(str.includes("Dunyo")),
    },
    slice: { desc: "Bir qismini olish (0,5)", result: () => str.slice(0, 5) },
    split: {
      desc: "Massivga aylantirish (' ')",
      result: () => JSON.stringify(str.split(" ")),
    },
    replace: { desc: "Almashtirish", result: () => str.replace("Dunyo", "JS") },
    indexOf: {
      desc: "Indeksini topish ('Dunyo')",
      result: () => String(str.indexOf("Dunyo")),
    },
    startsWith: {
      desc: "Boshlanishini tekshirish ('Salom')",
      result: () => String(str.startsWith("Salom")),
    },
  };

  const cur = methods[method];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        Matnni kiriting va metodlarni sinab ko'ring:
      </p>
      <input
        value={str}
        onChange={(e) => setStr(e.target.value)}
        className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
      />
      <div className="grid grid-cols-3 gap-1.5">
        {Object.keys(methods).map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            className="p-2 text-left transition-all border rounded-lg cursor-pointer"
            style={{
              background: method === m ? "#c85c1a" : "#f2efe8",
              borderColor: method === m ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: method === m ? "#fff" : "#1a1814",
            }}
          >
            <div className="font-mono text-[10px] font-bold">.{m}()</div>
          </button>
        ))}
      </div>
      <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
        <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
          {cur.desc}
        </div>
        <CodeSnippet
          lines={[
            [
              { text: `"${str}"`, color: C.str },
              { text: `.${method}()`, color: C.fn },
            ],
            [
              { text: "// → ", color: C.cmt },
              { text: String(cur.result()), color: C.num },
            ],
          ]}
        />
      </div>
      <InfoBox color="#c85c1a" icon="💡">
        Template literals bilan interpolatsiya: <Tag>{"`Salom, ${name}!`"}</Tag>{" "}
        — satrni qo'shish uchun eng qulay usul.
      </InfoBox>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
