// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.4 — CREATING AND REMOVING ELEMENTS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function DomManipulatingExplain({ t }) {
  const [tab, setTab] = useState("create");
  const d = t("lessons.dom-manipulating.explain");

  const groups = {
    create: {
      label: d.createLabel,
      items: d.methods.slice(0, 3),
    },
    append: {
      label: d.appendLabel,
      items: d.methods.slice(3, 6),
    },
    remove: {
      label: d.removeLabel,
      items: d.methods.slice(6),
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-1.5">
        {Object.keys(groups).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className="flex-1 py-2 font-mono text-[11px] font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: tab === key ? "#c85c1a" : "#f2efe8",
              borderColor: tab === key ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === key ? "#fff" : "#1a1814",
            }}
          >
            {key === "create" ? "Yaratish" : key === "append" ? "Qo'shish" : "O'chirish"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs text-[#7a7468] font-mono">{groups[tab].label}</p>
        {groups[tab].items.map((m, i) => (
          <div
            key={i}
            className="px-3 py-2.5 rounded-lg border"
            style={{
              background:
                tab === "remove" ? "#c85c1a0a" : tab === "append" ? "#4a9e600a" : "#185FA50a",
              borderColor:
                tab === "remove" ? "#c85c1a25" : tab === "append" ? "#4a9e6025" : "#185FA525",
            }}
          >
            <code
              className="font-mono text-xs font-bold block mb-0.5"
              style={{
                color: tab === "remove" ? "#c85c1a" : tab === "append" ? "#4a9e60" : "#185FA5",
              }}
            >
              {m.method}
            </code>
            <span className="text-xs text-[#7a7468]">{m.desc}</span>
          </div>
        ))}
      </div>

      {/* innerHTML warning */}
      <div className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#c85c1a0a", borderColor: "#c85c1a35" }}>
        <span className="font-bold text-[#c85c1a]">⚠️ </span>
        <span className="text-[#1a1814]">{d.warn}</span>
      </div>
    </div>
  );
}

export function DomManipulatingLearn({ t }) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "Birinchi element" },
    { id: 2, text: "Ikkinchi element" },
  ]);
  const [lastCode, setLastCode] = useState("");
  const d = t("lessons.dom-manipulating.learn");

  const addItem = () => {
    if (!input.trim()) return;
    const newItem = { id: Date.now(), text: input.trim() };
    setItems((prev) => [...prev, newItem]);
    setLastCode(
      `const el = document.createElement('div');\nel.textContent = '${input.trim()}';\nlist.appendChild(el);`
    );
    setInput("");
  };

  const removeItem = (id, text) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
    setLastCode(`el.remove();\n// yoki\nparent.removeChild(el);`);
  };

  const clearAll = () => {
    setItems([]);
    setLastCode(`list.innerHTML = '';\n// yoki barcha bolalarni o'chirish`);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Add input */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          placeholder={d.addLabel}
          className="flex-1 px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
        />
        <button
          onClick={addItem}
          className="px-4 py-2 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
          style={{
            background: "#c85c1a",
            color: "#fff",
            boxShadow: "0 3px 0 0 #8a3a0a",
          }}
        >
          {d.addBtn}
        </button>
        <button
          onClick={clearAll}
          className="px-3 py-2 rounded-lg font-mono text-xs border cursor-pointer"
          style={{ background: "#f2efe8", borderColor: "rgba(26,24,20,0.10)", color: "#7a7468" }}
        >
          {d.clearBtn}
        </button>
      </div>

      {/* DOM list */}
      <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)] min-h-[100px]">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.listLabel} ({items.length})
        </div>
        {items.length === 0 ? (
          <p className="text-xs text-[#7a7468] text-center py-4 font-mono">{d.emptyLabel}</p>
        ) : (
          <div className="flex flex-col gap-1.5">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center gap-2.5 px-3 py-2 bg-white rounded-lg border border-[rgba(26,24,20,0.08)]"
              >
                <span className="font-mono text-[10px] text-[#7a7468] w-5">{idx}</span>
                <span className="text-xs text-[#1a1814] flex-1">{item.text}</span>
                <button
                  onClick={() => removeItem(item.id, item.text)}
                  className="font-mono text-[10px] px-2 py-0.5 rounded border cursor-pointer"
                  style={{ color: "#c85c1a", borderColor: "#c85c1a30", background: "#c85c1a0a" }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Code output */}
      {lastCode && (
        <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
          <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1.5 uppercase tracking-wider">
            {d.codeLabel}
          </div>
          {lastCode.split("\n").map((line, i) => (
            <div key={i} className={line.startsWith("//") ? "text-[rgba(255,255,255,0.3)]" : "text-[#c3e88d]"}>
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
