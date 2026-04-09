import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.5 — HANDLING EVENTS IN REACT
// ═══════════════════════════════════════════════════════════════════════════════

export function ReactEventsExplain() {
  const [tab, setTab] = useState("basic");
  const [inputVal, setInputVal] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["basic", "forms", "prevent"].map((id) => (
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
            {id === "basic"
              ? "Asosiy"
              : id === "forms"
                ? "Formlar"
                : "preventDefault"}
          </button>
        ))}
      </div>

      {tab === "basic" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React'da eventlar camelCase bilan yoziladi va funksiya uzatiladi:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#61DAFB10]">
                  {["HTML", "React", "Qachon"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-2 font-mono border border-[rgba(26,24,20,0.10)]"
                      style={{ color: "#61DAFB" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["onclick", "onClick", "Klik bosilganda"],
                  ["onchange", "onChange", "Qiymat o'zgarganda"],
                  ["onsubmit", "onSubmit", "Form yuborilganda"],
                  ["onmouseover", "onMouseEnter", "Sichqoncha ustida"],
                  ["onkeydown", "onKeyDown", "Tugma bosilganda"],
                  ["onfocus", "onFocus", "Input fokusda"],
                ].map(([html, react, when]) => (
                  <tr key={react}>
                    <td className="px-3 py-2 font-mono text-[#e06c75] border border-[rgba(26,24,20,0.10)]">
                      {html}
                    </td>
                    <td className="px-3 py-2 font-mono text-[#61DAFB] border border-[rgba(26,24,20,0.10)]">
                      {react}
                    </td>
                    <td className="px-3 py-2 text-[#7a7468] border border-[rgba(26,24,20,0.10)]">
                      {when}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeSnippet
            lines={[
              [{ text: "// ✗ HTML usuli — React'da ishlatmang", color: C.cmt }],
              [{ text: '<button onclick="handleClick()">', color: C.str }],
              [{ text: "" }],
              [{ text: "// ✓ React usuli", color: C.cmt }],
              [
                { text: "<", color: "#e34c26" },
                { text: "button ", color: "#82aaff" },
                { text: "onClick", color: "#c792ea" },
                { text: "={", color: C.op },
                { text: "handleClick", color: C.fn },
                { text: "}>", color: C.op },
              ],
              [
                { text: "<", color: "#e34c26" },
                { text: "button ", color: "#82aaff" },
                { text: "onClick", color: "#c792ea" },
                { text: "={() => ", color: C.op },
                { text: "setCount", color: C.fn },
                { text: "(", color: C.op },
                { text: "c", color: C.fn },
                { text: " + ", color: C.op },
                { text: "1", color: C.num },
                { text: ")}>", color: C.op },
              ],
            ]}
          />
        </div>
      )}

      {tab === "forms" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            <code>onChange</code> — input qiymati o'zgarganda.{" "}
            <code>e.target.value</code> — yangi qiymat:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "[value, setValue] = ", color: C.fn },
                { text: "useState", color: C.fn },
                { text: "(", color: C.op },
                { text: '""', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "<", color: "#e34c26" },
                { text: "input", color: "#82aaff" },
              ],
              [
                { text: "  value", color: "#c792ea" },
                { text: "={", color: C.op },
                { text: "value", color: C.fn },
                { text: "}", color: C.op },
              ],
              [
                { text: "  onChange", color: "#c792ea" },
                { text: "={", color: C.op },
                { text: "e", color: C.fn },
                { text: " => ", color: C.op },
                { text: "setValue", color: C.fn },
                { text: "(", color: C.op },
                { text: "e", color: C.fn },
                { text: ".target.value)}", color: C.fn },
              ],
              [{ text: "/>", color: "#e34c26" }],
            ]}
          />
          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Live demo:
            </div>
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Yozing..."
              className="w-full px-3 py-2 rounded-lg border border-[rgba(26,24,20,0.10)] bg-white text-sm outline-none mb-2"
            />
            <div className="font-mono text-xs text-[#7a7468]">
              value: <span className="text-[#61DAFB]">"{inputVal}"</span>
            </div>
          </div>
        </div>
      )}

      {tab === "prevent" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            <code>e.preventDefault()</code> — sahifa yangilanishini to'xtatadi.
            Form submit uchun muhim:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "handleSubmit", color: C.fn },
                { text: " = (", color: C.op },
                { text: "e", color: C.fn },
                { text: ") => {", color: C.op },
              ],
              [
                { text: "  e", color: C.fn },
                { text: ".preventDefault();", color: C.fn },
                { text: "  // Sahifa yangilanmaydi", color: C.cmt },
              ],
              [
                { text: "  console.log(", color: "rgba(255,255,255,0.7)" },
                { text: "value", color: C.fn },
                { text: ");", color: C.op },
              ],
              [{ text: "};", color: C.op }],
              [{ text: "" }],
              [
                { text: "<", color: "#e34c26" },
                { text: "form ", color: "#82aaff" },
                { text: "onSubmit", color: "#c792ea" },
                { text: "={", color: C.op },
                { text: "handleSubmit", color: C.fn },
                { text: "}>", color: C.op },
              ],
            ]}
          />
          <InfoBox color="#c85c1a" icon="⚠️">
            React'da form uchun <Tag>onSubmit</Tag> ishlating,{" "}
            <Tag>button onClick</Tag> emas. Keyboard Enter ham ishlashi uchun.
          </InfoBox>
        </div>
      )}
    </div>
  );
}
