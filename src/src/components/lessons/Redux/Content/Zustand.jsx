import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.4 — ZUSTAND
// ═══════════════════════════════════════════════════════════════════════════════

export function ZustandExplain() {
  const [tab, setTab] = useState("intro");
  const [zuCount, setZuCount] = useState(0);
  const [todos, setTodos] = useState([
    { id: 1, text: "Redux o'rganish", done: true },
    { id: 2, text: "Zustand o'rganish", done: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos((t) => [...t, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };
  const toggle = (id) =>
    setTodos((t) =>
      t.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    );
  const remove = (id) => setTodos((t) => t.filter((todo) => todo.id !== id));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["intro", "store", "middleware"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#e38c2a" : "#f2efe8",
              borderColor: tab === id ? "#e38c2a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "intro"
              ? "Zustand nima?"
              : id === "store"
                ? "Store + Demo"
                : "Middleware"}
          </button>
        ))}
      </div>

      {tab === "intro" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Zustand — minimal global state manager. Redux'ga nisbatan{" "}
            <strong>5-10x kam kod</strong> bilan xuddi shunday imkoniyatlar.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-[#e06c7510] border border-[#e06c7530]">
              <div className="font-mono text-xs font-bold text-[#e06c75] mb-2">
                Redux (boilerplate)
              </div>
              {[
                "actions.js",
                "reducer.js",
                "store.js",
                "Provider wrap",
                "useSelector",
                "useDispatch",
              ].map((f) => (
                <div
                  key={f}
                  className="font-mono text-[10px] text-[#7a7468] py-0.5"
                >
                  • {f}
                </div>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-[#e38c2a10] border border-[#e38c2a30]">
              <div className="font-mono text-xs font-bold text-[#e38c2a] mb-2">
                Zustand (minimal)
              </div>
              {[
                "create(store)",
                "useStore hook",
                "✓ Provider yo'q",
                "✓ Action yo'q",
                "✓ Reducer yo'q",
              ].map((f) => (
                <div
                  key={f}
                  className="font-mono text-[10px] text-[#7a7468] py-0.5"
                >
                  {f.startsWith("✓") ? (
                    <span className="text-[#4a9e60]">{f}</span>
                  ) : (
                    `• ${f}`
                  )}
                </div>
              ))}
            </div>
          </div>
          <CodeSnippet
            lines={[
              [
                {
                  text: "// Zustand store (barchasi shu yerda!)",
                  color: C.cmt,
                },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "useStore", color: C.fn },
                { text: " = ", color: C.op },
                { text: "create", color: C.fn },
                { text: "((set, get) => ({", color: C.op },
              ],
              [
                { text: "  count: ", color: "rgba(255,255,255,0.7)" },
                { text: "0", color: C.num },
                { text: ",", color: C.op },
              ],
              [
                { text: "  increment: () => ", color: "rgba(255,255,255,0.7)" },
                { text: "set", color: C.fn },
                { text: "((s) => ({ count: s.count + ", color: C.op },
                { text: "1", color: C.num },
                { text: " })),", color: C.op },
              ],
              [
                {
                  text: "  getDouble:  () => ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "get", color: C.fn },
                { text: "().count * ", color: C.op },
                { text: "2", color: C.num },
                { text: ",", color: C.op },
              ],
              [{ text: "}));", color: C.op }],
              [{ text: "" }],
              [{ text: "// Componentda:", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "{ count, increment }", color: C.fn },
                { text: " = ", color: C.op },
                { text: "useStore", color: C.fn },
                { text: "();", color: C.op },
              ],
            ]}
          />
        </div>
      )}

      {tab === "store" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Todo store — Zustand simulyatsiyasi:
          </p>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center gap-2 mb-3">
              <div className="font-mono text-xs text-[#7a7468]">
                Counter state:
              </div>
              <div className="font-mono text-xl font-black text-[#e38c2a]">
                {zuCount}
              </div>
              <div className="flex gap-1 ml-auto">
                {[
                  ["−", -1],
                  ["+", 1],
                  ["+5", 5],
                ].map(([label, val]) => (
                  <button
                    key={label}
                    onClick={() => setZuCount((c) => c + val)}
                    className="px-2.5 py-1 rounded font-mono text-xs font-bold border-none cursor-pointer"
                    style={{ background: "#e38c2a20", color: "#e38c2a" }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mb-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                placeholder="Yangi todo..."
                className="flex-1 px-3 py-1.5 rounded-lg border border-[rgba(26,24,20,0.10)] bg-white text-sm outline-none font-mono"
              />
              <button
                onClick={addTodo}
                className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
                style={{ background: "#e38c2a", color: "#fff" }}
              >
                +
              </button>
            </div>
            <div className="flex flex-col gap-1.5">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center gap-2 p-2 rounded-lg"
                  style={{
                    background: todo.done ? "#4a9e6015" : "white",
                    border: "1px solid rgba(26,24,20,0.08)",
                  }}
                >
                  <button
                    onClick={() => toggle(todo.id)}
                    className="flex-shrink-0 w-4 h-4 border-none rounded cursor-pointer"
                    style={{
                      background: todo.done ? "#4a9e60" : "rgba(26,24,20,0.10)",
                    }}
                  >
                    {todo.done && (
                      <span className="text-white text-[8px]">✓</span>
                    )}
                  </button>
                  <span
                    className="flex-1 font-mono text-xs"
                    style={{
                      textDecoration: todo.done ? "line-through" : "none",
                      color: todo.done ? "#7a7468" : "#1a1814",
                    }}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => remove(todo.id)}
                    className="text-[#e06c75] font-mono text-xs border-none bg-transparent cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "middleware" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Zustand middleware'lari store funksionalligini kengaytiradi:
          </p>
          {[
            {
              name: "persist",
              color: "#185FA5",
              desc: "localStorage'ga avtomatik saqlaydi",
              code: `const useStore = create(\n  persist(\n    (set) => ({ count: 0 }),\n    { name: 'my-store' }\n  )\n);`,
            },
            {
              name: "immer",
              color: "#4a9e60",
              desc: "State'ni to'g'ridan-to'g'ri o'zgartirish",
              code: `const useStore = create(\n  immer((set) => ({\n    users: [],\n    add: (u) => set((s) => { s.users.push(u); })\n  }))\n);`,
            },
            {
              name: "devtools",
              color: "#c85c1a",
              desc: "Redux DevTools bilan integratsiya",
              code: `const useStore = create(\n  devtools(\n    (set) => ({ count: 0 }),\n    { name: 'MyStore' }\n  )\n);`,
            },
          ].map(({ name, color, desc, code }) => (
            <div
              key={name}
              className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-xs font-bold" style={{ color }}>
                  {name}
                </span>
                <span className="text-[10px] text-[#7a7468]">— {desc}</span>
              </div>
              <div className="bg-[#2c2820] rounded p-2 font-mono text-[10px] text-[#c3e88d] whitespace-pre">
                {code}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
