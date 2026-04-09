import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 3.8 — ARRAYS
// ═══════════════════════════════════════════════════════════════════════════════

export function ArraysExplain() {
  const [arr, setArr] = useState([3, 1, 4, 1, 5, 9, 2, 6]);
  const [method, setMethod] = useState("push");
  const [input, setInput] = useState("7");

  const applyMethod = () => {
    const num = Number(input);
    const ops = {
      push: () => {
        const a = [...arr, num];
        setArr(a);
      },
      pop: () => {
        const a = [...arr];
        a.pop();
        setArr(a);
      },
      unshift: () => {
        setArr([num, ...arr]);
      },
      shift: () => {
        const a = [...arr];
        a.shift();
        setArr(a);
      },
      reverse: () => setArr([...arr].reverse()),
      sort: () => setArr([...arr].sort((a, b) => a - b)),
    };
    ops[method]?.();
  };

  const readMethods = {
    indexOf: {
      desc: "Indeksini topish",
      result: () => arr.indexOf(Number(input)),
    },
    includes: { desc: "Bor/yo'q", result: () => arr.includes(Number(input)) },
    join: { desc: "Satrga aylantirish ('-')", result: () => arr.join("-") },
    slice: {
      desc: "Nusxa olish (0,3)",
      result: () => JSON.stringify(arr.slice(0, 3)),
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468]">
        Massiv bilan ishlash. Hozirgi massiv:
      </p>
      <div className="flex flex-wrap gap-1.5 p-3 bg-[#f2efe8] rounded-xl border border-[rgba(26,24,20,0.10)]">
        {arr.map((item, i) => (
          <div
            key={i}
            className="font-mono text-xs font-bold px-2.5 py-1.5 rounded-lg"
            style={{
              background: "#c85c1a20",
              color: "#c85c1a",
              border: "1px solid #c85c1a40",
            }}
          >
            <span className="text-[#7a7468] text-[9px]">[{i}] </span>
            {item}
          </div>
        ))}
      </div>

      <div className="grid items-end grid-cols-2 gap-2">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-mono text-[#7a7468]">Metod</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
          >
            {["push", "pop", "unshift", "shift", "reverse", "sort"].map((m) => (
              <option key={m} value={m}>
                {m}()
              </option>
            ))}
          </select>
        </div>
        {["push", "unshift"].includes(method) && (
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono text-[#7a7468]">
              Qiymat
            </label>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
            />
          </div>
        )}
      </div>
      <button
        onClick={applyMethod}
        className="w-full py-2.5 rounded-lg font-mono text-xs font-bold text-white border-none cursor-pointer"
        style={{ background: "#c85c1a", boxShadow: "0 3px 0 0 #8a3a0a" }}
      >
        .{method}({["push", "unshift"].includes(method) ? input : ""}) ni
        qo'llash
      </button>

      <div className="flex flex-col gap-2">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider">
          O'qish metodlari:
        </div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Qiymat kiriting..."
          className="px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
        />
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(readMethods).map(([m, { desc, result }]) => (
            <div
              key={m}
              className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="font-mono text-[10px] text-[#c85c1a] mb-0.5">
                .{m}()
              </div>
              <div className="text-[10px] text-[#7a7468] mb-1">{desc}</div>
              <div className="font-mono text-xs font-bold text-[#1a1814]">
                {String(result())}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
