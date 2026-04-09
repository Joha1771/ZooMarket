// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.11 — CRUD WITH LOCALSTORAGE
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function CrudLocalStorageExplain({ t }) {
  const [activeOp, setActiveOp] = useState(null);
  const d = t("lessons.crud-localstorage.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div>
        <p className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.crudLabel}
        </p>
        <div className="grid grid-cols-2 gap-2">
          {d.crud.map((op, i) => (
            <button
              key={i}
              onClick={() => setActiveOp(activeOp === i ? null : i)}
              className="p-3 text-left rounded-xl border transition-all cursor-pointer"
              style={{
                background: activeOp === i ? op.color + "18" : op.color + "0a",
                borderColor: activeOp === i ? op.color + "60" : op.color + "25",
              }}
            >
              <div className="font-mono text-xs font-bold" style={{ color: op.color }}>
                {op.op}
              </div>
              <code className="font-mono text-[10px] text-[#7a7468] block mt-0.5">{op.method}</code>
              {activeOp === i && (
                <div className="text-xs text-[#1a1814] mt-1.5 leading-relaxed">{op.desc}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern */}
      <div>
        <p className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.patternLabel}
        </p>
        <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
          <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">// To'plam (massiv) saqlash:</div>
          <div>
            <span className="text-[#82aaff]">let</span>{" "}
            <span className="text-[#c3e88d]">items</span>
            <span className="text-[rgba(255,255,255,0.5)]"> = </span>
            <span className="text-[#82aaff]">JSON</span>
            <span className="text-[rgba(255,255,255,0.5)]">.</span>
            <span className="text-[#ffcb6b]">parse</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"("}</span>
            <span className="text-[#ffcb6b]">localStorage</span>
            <span className="text-[rgba(255,255,255,0.5)]">.</span>
            <span className="text-[#82aaff]">getItem</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"('items')) ?? [];"}</span>
          </div>
          <div className="mt-2 text-[rgba(255,255,255,0.3)] text-[10px]">// Yangi element qo'shish:</div>
          <div>
            <span className="text-[#c3e88d]">items</span>
            <span className="text-[rgba(255,255,255,0.5)]">.</span>
            <span className="text-[#ffcb6b]">push</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"({ id: Date.now(), text })"}</span>
          </div>
          <div>
            <span className="text-[#ffcb6b]">localStorage</span>
            <span className="text-[rgba(255,255,255,0.5)]">.</span>
            <span className="text-[#82aaff]">setItem</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"("}</span>
            <span className="text-[#f78c6c]">'items'</span>
            <span className="text-[rgba(255,255,255,0.5)]">{", "}</span>
            <span className="text-[#82aaff]">JSON</span>
            <span className="text-[rgba(255,255,255,0.5)]">.</span>
            <span className="text-[#ffcb6b]">stringify</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"(items));"}</span>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#4a9e600a", borderColor: "#4a9e6025" }}>
        <span className="font-bold text-[#4a9e60]">💡 </span>
        <span className="text-[#1a1814]">{d.tip}</span>
      </div>
    </div>
  );
}

export function CrudLocalStorageLearn({ t }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "HTML o'rganish", done: true },
    { id: 2, text: "CSS o'rganish", done: true },
    { id: 3, text: "JS DOM o'rganish", done: false },
  ]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const d = t("lessons.crud-localstorage.learn");

  const add = () => {
    if (!input.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  };

  const toggle = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;
    setTodos((prev) => prev.map((t) => (t.id === editId ? { ...t, text: editText } : t)));
    setEditId(null);
    setEditText("");
  };

  const remove = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const done = todos.filter((t) => t.done).length;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Add */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder={d.inputPlaceholder}
          className="flex-1 px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm text-[#1a1814] outline-none"
        />
        <button
          onClick={add}
          className="px-4 py-2 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
          style={{ background: "#4a9e60", color: "#fff", boxShadow: "0 3px 0 0 #2a6040" }}
        >
          {d.addBtn}
        </button>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-[rgba(26,24,20,0.08)] rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${todos.length ? (done / todos.length) * 100 : 0}%`, background: "#4a9e60" }}
          />
        </div>
        <span className="font-mono text-[11px] text-[#7a7468]">{done}/{todos.length}</span>
        <span className="font-mono text-[10px] text-[#4a9e60]">{d.savedLabel} ✓</span>
      </div>

      {/* Todos */}
      <div className="flex flex-col gap-1.5">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border transition-all"
            style={{
              background: todo.done ? "#4a9e6008" : "white",
              borderColor: todo.done ? "#4a9e6025" : "rgba(26,24,20,0.08)",
            }}
          >
            {/* Checkbox */}
            <button
              onClick={() => toggle(todo.id)}
              className="w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 cursor-pointer transition-all"
              style={{
                borderColor: todo.done ? "#4a9e60" : "rgba(26,24,20,0.2)",
                background: todo.done ? "#4a9e60" : "transparent",
              }}
            >
              {todo.done && <span className="text-white text-[10px]">✓</span>}
            </button>

            {/* Text or edit */}
            {editId === todo.id ? (
              <input
                autoFocus
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                onBlur={saveEdit}
                className="flex-1 px-2 py-0.5 bg-[#f2efe8] border border-[rgba(26,24,20,0.15)] rounded text-sm text-[#1a1814] outline-none"
              />
            ) : (
              <span
                className="flex-1 text-sm"
                style={{
                  color: todo.done ? "#7a7468" : "#1a1814",
                  textDecoration: todo.done ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            )}

            {/* Actions */}
            <div className="flex gap-1 shrink-0">
              <button
                onClick={() => startEdit(todo)}
                className="px-2 py-0.5 rounded font-mono text-[10px] border cursor-pointer"
                style={{ color: "#185FA5", borderColor: "#185FA525", background: "#185FA508" }}
              >
                ✎
              </button>
              <button
                onClick={() => remove(todo.id)}
                className="px-2 py-0.5 rounded font-mono text-[10px] border cursor-pointer"
                style={{ color: "#c85c1a", borderColor: "#c85c1a25", background: "#c85c1a08" }}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
