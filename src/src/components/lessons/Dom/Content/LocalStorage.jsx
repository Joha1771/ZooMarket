// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.9 — LOCALSTORAGE AND JSON
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function LocalStorageExplain({ t }) {
  const [tab, setTab] = useState("types");
  const d = t("lessons.localstorage.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-1.5">
        {["types", "methods", "json"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-[11px] font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "types" ? "Turlari" : id === "methods" ? "Metodlar" : "JSON"}
          </button>
        ))}
      </div>

      {tab === "types" && (
        <div className="flex flex-col gap-2">
          {d.types.map((tp, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: tp.color + "0a", borderColor: tp.color + "30" }}
            >
              <code className="font-mono text-xs font-bold w-28 shrink-0" style={{ color: tp.color }}>
                {tp.name}
              </code>
              <span className="text-xs text-[#7a7468]">{tp.desc}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "methods" && (
        <div className="flex flex-col gap-2">
          {d.methods.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: "#4a9e600a", borderColor: "#4a9e6025" }}
            >
              <code className="font-mono text-xs font-bold text-[#4a9e60]"
                style={{ minWidth: 260 }}>
                {m.method}
              </code>
              <span className="text-xs text-[#7a7468]">{m.desc}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "json" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">{d.jsonDesc}</p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">// Ob'yektni saqlash:</div>
            <div>
              <span className="text-[#82aaff]">const</span>{" "}
              <span className="text-[#c3e88d]">user</span>
              <span className="text-[rgba(255,255,255,0.5)]"> = {"{ name: 'Ali', age: 20 }"}</span>
            </div>
            <div className="mt-1">
              <span className="text-[#ffcb6b]">localStorage</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#82aaff]">setItem</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"("}</span>
              <span className="text-[#f78c6c]">'user'</span>
              <span className="text-[rgba(255,255,255,0.5)]">{", "}</span>
              <span className="text-[#82aaff]">JSON</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#ffcb6b]">stringify</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"(user));"}</span>
            </div>
            <div className="mt-3 text-[rgba(255,255,255,0.3)] text-[10px]">// O'qib olish:</div>
            <div>
              <span className="text-[#82aaff]">const</span>{" "}
              <span className="text-[#c3e88d]">saved</span>
              <span className="text-[rgba(255,255,255,0.5)]"> = </span>
              <span className="text-[#82aaff]">JSON</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#ffcb6b]">parse</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"("}</span>
              <span className="text-[#ffcb6b]">localStorage</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#82aaff]">getItem</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"('user'));"}</span>
            </div>
            <div className="mt-1 text-[rgba(255,255,255,0.3)]">
              // saved.name → 'Ali'
            </div>
          </div>
        </div>
      )}

      <div className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#185FA50a", borderColor: "#185FA525" }}>
        <span className="font-bold text-[#185FA5]">💡 </span>
        <span className="text-[#1a1814]">{d.tip}</span>
      </div>
    </div>
  );
}

export function LocalStorageLearn({ t }) {
  const [key, setKey] = useState("username");
  const [value, setValue] = useState("Ali");
  const [storage, setStorage] = useState({ theme: "dark", lang: "uz" });
  const [result, setResult] = useState(null);
  const d = t("lessons.localstorage.learn");

  const handleSet = () => {
    if (!key.trim()) return;
    setStorage((prev) => ({ ...prev, [key]: value }));
    setResult({ type: "set", msg: `"${key}" = "${value}" saqlandi ✓` });
  };

  const handleGet = () => {
    if (!key.trim()) return;
    const val = storage[key];
    setResult({ type: "get", msg: val !== undefined ? `"${key}" → "${val}"` : `"${key}" topilmadi` });
  };

  const handleRemove = () => {
    if (!key.trim()) return;
    setStorage((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
    setResult({ type: "remove", msg: `"${key}" o'chirildi ✓` });
  };

  const handleClear = () => {
    setStorage({});
    setResult({ type: "clear", msg: "Barchasi tozalandi ✓" });
  };

  const resultColors = { set: "#4a9e60", get: "#185FA5", remove: "#c85c1a", clear: "#993556" };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="text-[10px] text-[#7a7468] font-mono mb-1">{d.keyLabel}</div>
          <input
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-xs text-[#1a1814] outline-none font-mono"
          />
        </div>
        <div>
          <div className="text-[10px] text-[#7a7468] font-mono mb-1">{d.valueLabel}</div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-xs text-[#1a1814] outline-none font-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: d.setBtn, fn: handleSet, color: "#4a9e60" },
          { label: d.getBtn, fn: handleGet, color: "#185FA5" },
          { label: d.removeBtn, fn: handleRemove, color: "#c85c1a" },
          { label: d.clearBtn, fn: handleClear, color: "#7a7468" },
        ].map((btn) => (
          <button
            key={btn.label}
            onClick={btn.fn}
            className="py-2 rounded-lg font-mono text-xs font-bold border-none cursor-pointer transition-all"
            style={{ background: btn.color, color: "#fff" }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Storage state */}
      <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.storageLabel} ({Object.keys(storage).length} kalit)
        </div>
        {Object.keys(storage).length === 0 ? (
          <div className="font-mono text-xs text-[#7a7468] text-center py-2">— bo'sh —</div>
        ) : (
          <div className="flex flex-col gap-1">
            {Object.entries(storage).map(([k, v]) => (
              <div key={k} className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#c85c1a] w-24 shrink-0">"{k}"</span>
                <span className="text-[rgba(26,24,20,0.3)]">→</span>
                <span className="text-[#4a9e60]">"{v}"</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {result && (
        <div
          className="px-3 py-2 rounded-lg font-mono text-xs border"
          style={{
            background: resultColors[result.type] + "12",
            borderColor: resultColors[result.type] + "35",
            color: resultColors[result.type],
          }}
        >
          {result.msg}
        </div>
      )}
    </div>
  );
}
