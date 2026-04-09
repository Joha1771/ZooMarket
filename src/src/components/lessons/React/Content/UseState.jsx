import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.4 — USESTATE: STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════════════

export function UseStateExplain() {
  const [tab, setTab] = useState("concept");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ali");
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["concept", "types", "rules"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#61DAFB" : "#f2efe8",
              borderColor: tab === id ? "#61DAFB" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#0a1a20" : "#1a1814",
            }}
          >
            {id === "concept"
              ? "Tushuncha"
              : id === "types"
                ? "State turlari"
                : "Qoidalar"}
          </button>
        ))}
      </div>

      {tab === "concept" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useState — React'da o'zgaruvchi holatni saqlash uchun hook.
            O'zgartirilganda komponent qayta render bo'ladi:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "[", color: C.op },
                { text: "count", color: C.fn },
                { text: ", ", color: C.op },
                { text: "setCount", color: C.fn },
                { text: "] = ", color: C.op },
                { text: "useState", color: C.fn },
                { text: "(", color: C.op },
                { text: "0", color: C.num },
                { text: ");", color: C.op },
              ],
              [
                {
                  text: "//  ↑ qiymat   ↑ o'zgartiruvchi  ↑ boshlang'ich",
                  color: C.cmt,
                },
              ],
            ]}
          />

          {/* Interactive counter */}
          <div className="p-4 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-3">
              Live demo — Counter:
            </div>
            <div className="flex items-center justify-center gap-4 mb-3">
              <button
                onClick={() => setCount((c) => c - 1)}
                className="font-mono text-lg font-black text-white border-none rounded-lg cursor-pointer w-9 h-9"
                style={{
                  background: "#e06c75",
                  boxShadow: "0 2px 0 0 #a02040",
                }}
              >
                −
              </button>
              <span className="font-mono text-4xl font-black text-[#1a1814] w-16 text-center">
                {count}
              </span>
              <button
                onClick={() => setCount((c) => c + 1)}
                className="font-mono text-lg font-black text-white border-none rounded-lg cursor-pointer w-9 h-9"
                style={{
                  background: "#4a9e60",
                  boxShadow: "0 2px 0 0 #2a6040",
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={() => setCount(0)}
              className="w-full py-1.5 rounded-lg font-mono text-xs cursor-pointer"
              style={{
                background: "#f2efe8",
                border: "1px solid rgba(26,24,20,0.10)",
                color: "#7a7468",
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {tab === "types" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useState har qanday turdagi qiymat saqlaydi:
          </p>
          {[
            {
              label: "Number",
              code: "useState(0)",
              color: "#f78c6c",
              demo: (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCount((c) => c - 1)}
                    className="px-2 py-0.5 rounded text-white text-xs cursor-pointer border-none"
                    style={{ background: "#e06c75" }}
                  >
                    −
                  </button>
                  <span className="font-mono text-sm font-bold text-[#f78c6c]">
                    {count}
                  </span>
                  <button
                    onClick={() => setCount((c) => c + 1)}
                    className="px-2 py-0.5 rounded text-white text-xs cursor-pointer border-none"
                    style={{ background: "#4a9e60" }}
                  >
                    +
                  </button>
                </div>
              ),
            },
            {
              label: "String",
              code: 'useState("Ali")',
              color: "#c3e88d",
              demo: (
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-2 py-0.5 rounded text-xs border border-[rgba(26,24,20,0.15)] outline-none w-24 bg-white"
                />
              ),
            },
            {
              label: "Array",
              code: "useState(['Apple', 'Banana'])",
              color: "#82aaff",
              demo: (
                <div className="flex gap-1">
                  {items.map((it, i) => (
                    <span
                      key={i}
                      className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                      style={{ background: "#82aaff20", color: "#82aaff" }}
                    >
                      {it}
                    </span>
                  ))}
                  <button
                    onClick={() => setItems((prev) => [...prev, "Cherry"])}
                    className="font-mono text-[9px] px-1.5 py-0.5 rounded cursor-pointer border-none"
                    style={{ background: "#4a9e6020", color: "#4a9e60" }}
                  >
                    +
                  </button>
                </div>
              ),
            },
          ].map(({ label, code, color, demo }) => (
            <div
              key={label}
              className="flex items-center justify-between p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div>
                <div
                  className="font-mono text-[10px] font-bold mb-0.5"
                  style={{ color }}
                >
                  {label}
                </div>
                <div className="font-mono text-[10px] text-[#7a7468]">
                  {code}
                </div>
              </div>
              {demo}
            </div>
          ))}
        </div>
      )}

      {tab === "rules" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Hooks qoidalari — buzilsa xato bo'ladi:
          </p>
          {[
            {
              icon: "✓",
              text: "Faqat funksional komponent ichida ishlating",
              color: "#4a9e60",
            },
            {
              icon: "✓",
              text: "Faqat komponent tepasida — if/loop ichida emas",
              color: "#4a9e60",
            },
            {
              icon: "✓",
              text: "State to'g'ridan-to'g'ri o'zgartirmang — setter ishlating",
              color: "#4a9e60",
            },
            {
              icon: "✗",
              text: "count++ yoki count = 5 qilmang",
              color: "#e06c75",
            },
            {
              icon: "✗",
              text: "Hook nomini use bilan boshlash kerak",
              color: "#e06c75",
            },
          ].map(({ icon, text, color }, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-2.5 rounded-lg"
              style={{
                background: color + "08",
                border: `1px solid ${color}25`,
              }}
            >
              <span
                className="font-mono text-sm font-black mt-0.5"
                style={{ color }}
              >
                {icon}
              </span>
              <span className="text-xs text-[#1a1814] leading-relaxed">
                {text}
              </span>
            </div>
          ))}
          <CodeSnippet
            lines={[
              [
                {
                  text: "// ✗ Noto'g'ri — to'g'ridan-to'g'ri o'zgartirish",
                  color: C.cmt,
                },
              ],
              [
                { text: "count", color: C.fn },
                { text: "++;", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// ✓ To'g'ri — setter orqali", color: C.cmt }],
              [
                { text: "setCount", color: C.fn },
                { text: "(", color: C.op },
                { text: "count", color: C.fn },
                { text: " + ", color: C.op },
                { text: "1", color: C.num },
                { text: ");", color: C.op },
              ],
              [
                { text: "setCount", color: C.fn },
                { text: "(", color: C.op },
                { text: "prev", color: C.fn },
                { text: " => ", color: C.op },
                { text: "prev", color: C.fn },
                { text: " + ", color: C.op },
                { text: "1", color: C.num },
                { text: ");", color: C.op },
              ],
            ]}
          />
        </div>
      )}
    </div>
  );
}
