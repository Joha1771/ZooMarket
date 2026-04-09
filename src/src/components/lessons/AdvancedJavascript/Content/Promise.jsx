import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.10 — PROMISE
// ═══════════════════════════════════════════════════════════════════════════════

export function PromiseExplain() {
  const [tab, setTab] = useState("basics");
  const [promiseState, setPromiseState] = useState("pending");
  const [promiseValue, setPromiseValue] = useState("");
  const [shouldReject, setShouldReject] = useState(false);

  const runPromise = () => {
    setPromiseState("pending");
    setPromiseValue("...");
    setTimeout(() => {
      if (shouldReject) {
        setPromiseState("rejected");
        setPromiseValue("Xato yuz berdi!");
      } else {
        setPromiseState("fulfilled");
        setPromiseValue("Ma'lumot keldi!");
      }
    }, 1500);
  };

  const stateColors = {
    pending: "#b07820",
    fulfilled: "#4a9e60",
    rejected: "#e06c75",
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "basics", label: "Promise asosi" },
          { id: "chaining", label: "Chaining" },
          { id: "static", label: "Static metodlar" },
        ].map(({ id, label }) => (
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
            {label}
          </button>
        ))}
      </div>

      {tab === "basics" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Promise</strong> — kelajakda
            tugaydigan async operatsiyani ifodalovchi ob'yekt. 3 holat:{" "}
            <Tag color="#b07820">pending</Tag>,{" "}
            <Tag color="#4a9e60">fulfilled</Tag>,{" "}
            <Tag color="#e06c75">rejected</Tag>.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Promise simulatsiyasi:
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="flex-1 p-3 text-center border rounded-lg"
                style={{
                  background: stateColors[promiseState] + "15",
                  borderColor: stateColors[promiseState] + "40",
                }}
              >
                <div className="font-mono text-[9px] text-[#7a7468]">State</div>
                <div
                  className="mt-1 font-mono text-sm font-black"
                  style={{ color: stateColors[promiseState] }}
                >
                  {promiseState}
                </div>
              </div>
              <div
                className="flex-1 p-3 text-center border rounded-lg"
                style={{
                  background: "#1a181415",
                  borderColor: "rgba(26,24,20,0.10)",
                }}
              >
                <div className="font-mono text-[9px] text-[#7a7468]">Value</div>
                <div className="font-mono text-xs mt-1 text-[#1a1814]">
                  {promiseValue || "—"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={() => setShouldReject(!shouldReject)}
                className="flex-1 py-2 font-mono text-xs border rounded-lg cursor-pointer"
                style={{
                  background: shouldReject ? "#e06c7515" : "#4a9e6015",
                  borderColor: shouldReject ? "#e06c75" : "#4a9e60",
                  color: shouldReject ? "#e06c75" : "#4a9e60",
                }}
              >
                {shouldReject ? "reject ✗" : "resolve ✓"}
              </button>
              <button
                onClick={runPromise}
                className="flex-1 py-2 font-mono text-xs font-bold text-white border-none rounded-lg cursor-pointer"
                style={{
                  background: "#c85c1a",
                  boxShadow: "0 2px 0 0 #8a3a0a",
                }}
              >
                new Promise() →
              </button>
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "promise", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "Promise(", color: C.fn },
                { text: "(resolve, reject) => {", color: C.op },
              ],
              [
                { text: "  setTimeout(", color: C.fn },
                { text: "() => {", color: C.op },
              ],
              [{ text: "    if (success) {", color: C.op }],
              [
                { text: "      resolve(", color: C.fn },
                { text: '"Ma\\\'lumot keldi!"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "    } else {", color: C.op }],
              [
                { text: "      reject(", color: C.fn },
                { text: '"Xato!"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "    }", color: C.op }],
              [
                { text: "  }, ", color: C.op },
                { text: "1000", color: C.num },
                { text: ");", color: C.op },
              ],
              [{ text: "});", color: C.op }],
              [{ text: "" }],
              [{ text: "promise", color: C.fn }],
              [
                { text: "  .then(", color: C.op },
                { text: "data => console.log(", color: C.fn },
                { text: "data", color: C.fn },
                { text: "))", color: C.op },
              ],
              [
                { text: "  .catch(", color: C.op },
                { text: "err  => console.log(", color: C.fn },
                { text: "err", color: C.fn },
                { text: "))  ", color: C.op },
              ],
              [
                { text: "  .finally(", color: C.op },
                { text: "()   => console.log(", color: C.fn },
                { text: '"Tugadi"', color: C.str },
                { text: "));", color: C.op },
              ],
            ]}
          />

          <div className="grid grid-cols-3 gap-2">
            {[
              {
                method: ".then()",
                color: "#4a9e60",
                desc: "fulfilled da ishlaydi",
              },
              {
                method: ".catch()",
                color: "#e06c75",
                desc: "rejected da ishlaydi",
              },
              {
                method: ".finally()",
                color: "#185FA5",
                desc: "har doim ishlaydi",
              },
            ].map(({ method, color, desc }) => (
              <div
                key={method}
                className="p-2.5 rounded-lg text-center"
                style={{
                  background: color + "10",
                  border: `1px solid ${color}30`,
                }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  {method}
                </div>
                <div className="text-[9px] text-[#7a7468]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "chaining" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Promise chaining</strong> —
            .then() lar zanjirlash. Har .then() yangi Promise qaytaradi.
          </p>

          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Chaining oqimi:
            </div>
            {[
              { step: "fetch(url)", result: "Response", color: "#c85c1a" },
              {
                step: ".then(res => res.json())",
                result: "JSON data",
                color: "#185FA5",
              },
              {
                step: ".then(data => process(data))",
                result: "Processed",
                color: "#4a9e60",
              },
              {
                step: ".catch(err => handle(err))",
                result: "Error handled",
                color: "#e06c75",
              },
            ].map(({ step, result, color }, i) => (
              <div key={i} className="flex items-center gap-2 mb-1.5">
                {i > 0 && (
                  <div className="ml-4 text-[#7a7468] font-mono text-[10px]">
                    ↓
                  </div>
                )}
                <div
                  className="flex-1 p-2 rounded border font-mono text-[10px]"
                  style={{
                    background: color + "10",
                    borderColor: color + "30",
                  }}
                >
                  <span style={{ color }}>{step}</span>
                  <span className="text-[#7a7468] ml-2">→ {result}</span>
                </div>
              </div>
            ))}
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "fetch(", color: C.fn },
                { text: '"https://api.example.com/user/1"', color: C.str },
                { text: ")", color: C.op },
              ],
              [
                { text: "  .then(", color: C.op },
                { text: "res => res.", color: C.fn },
                { text: "json", color: C.fn },
                { text: "())", color: C.op },
              ],
              [
                { text: "  .then(", color: C.op },
                { text: "user => {", color: C.op },
              ],
              [
                { text: "    console.log(", color: C.fn },
                { text: "user.", color: C.fn },
                { text: "name", color: C.fn },
                { text: ");", color: C.op },
              ],
              [
                { text: "    return ", color: C.kw },
                { text: "fetch(", color: C.fn },
                { text: "`/posts/${user.id}`", color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "  })", color: C.op }],
              [
                { text: "  .then(", color: C.op },
                { text: "res => res.", color: C.fn },
                { text: "json", color: C.fn },
                { text: "())", color: C.op },
              ],
              [
                { text: "  .then(", color: C.op },
                { text: "posts => console.log(", color: C.fn },
                { text: "posts", color: C.fn },
                { text: "))", color: C.op },
              ],
              [
                { text: "  .catch(", color: C.op },
                { text: "err => console.error(", color: C.fn },
                { text: "err", color: C.fn },
                { text: "));", color: C.op },
              ],
            ]}
          />
        </div>
      )}

      {tab === "static" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Promise ning 4 ta static metodi — bir necha promiseni boshqarish
            uchun:
          </p>

          {[
            {
              name: "Promise.all()",
              color: "#4a9e60",
              desc: "Barchasi fulfill bo'lganda. Bittasi reject bo'lsa — hammasi reject.",
              code: "Promise.all([p1, p2, p3]).then(([r1, r2, r3]) => ...)",
            },
            {
              name: "Promise.allSettled()",
              color: "#185FA5",
              desc: "Barchasi tugaganda (fulfill yoki reject). Natija — { status, value/reason }.",
              code: "Promise.allSettled([p1, p2]).then(results => ...)",
            },
            {
              name: "Promise.race()",
              color: "#c85c1a",
              desc: "Birinchi tugagani (fulfill yoki reject) natijasi qaytadi.",
              code: "Promise.race([p1, p2]).then(first => ...)",
            },
            {
              name: "Promise.any()",
              color: "#993556",
              desc: "Birinchi fulfill bo'lgani. Hammasi reject bo'lsa — AggregateError.",
              code: "Promise.any([p1, p2]).then(first => ...)",
            },
          ].map(({ name, color, desc, code }) => (
            <div
              key={name}
              className="p-3 border rounded-xl"
              style={{ background: color + "08", borderColor: color + "30" }}
            >
              <div
                className="mb-1 font-mono text-xs font-bold"
                style={{ color }}
              >
                {name}
              </div>
              <div className="text-xs text-[#7a7468] mb-1.5">{desc}</div>
              <code className="font-mono text-[10px] text-[#1a1814]">
                {code}
              </code>
            </div>
          ))}

          <InfoBox color="#c85c1a" icon="💡">
            Parallel requestlar uchun <Tag color="#c85c1a">Promise.all()</Tag>{" "}
            ishlating — barcha requestlar bir vaqtda ketadi, navbat kutilmaydi.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
