import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.1 — REDUX TOOLKIT: STORE, SLICE, ACTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function RtkBasicsExplain() {
  const [tab, setTab] = useState("why");
  const [count, setCount] = useState(0);
  const [dispatchLog, setDispatchLog] = useState([]);

  const dispatch = (action, payload) => {
    setDispatchLog((prev) => [
      { action, payload, time: new Date().toLocaleTimeString() },
      ...prev.slice(0, 4),
    ]);
    if (action === "increment") setCount((c) => c + 1);
    if (action === "decrement") setCount((c) => c - 1);
    if (action === "incrementByAmount") setCount((c) => c + payload);
    if (action === "reset") setCount(0);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["why", "slice", "store"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#764abc" : "#f2efe8",
              borderColor: tab === id ? "#764abc" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "why"
              ? "Nima uchun?"
              : id === "slice"
                ? "createSlice"
                : "Store"}
          </button>
        ))}
      </div>

      {tab === "why" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Ko'p komponentli React ilovada state ulashish muammosi yuzaga
            keladi. Redux — global state manager, RTK esa uning
            soddalashtirilgan versiyasi.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                icon: "🗃️",
                label: "Redux",
                desc: "Ko'p boilerplate, murakkab",
                color: "#e06c75",
                bad: true,
              },
              {
                icon: "⚡",
                label: "RTK",
                desc: "Az kod, qulay API, built-in thunk",
                color: "#764abc",
                bad: false,
              },
              {
                icon: "🐻",
                label: "Zustand",
                desc: "Eng sodda, kichik loyihalar",
                color: "#4a9e60",
                bad: false,
              },
            ].map(({ icon, label, desc, color, bad }) => (
              <div
                key={label}
                className="p-3 text-center border rounded-xl"
                style={{ background: `${color}10`, borderColor: `${color}40` }}
              >
                <div className="mb-1 text-2xl">{icon}</div>
                <div className="font-mono text-xs font-bold" style={{ color }}>
                  {label}
                </div>
                <div className="text-[10px] text-[#7a7468] mt-1">{desc}</div>
                {bad && (
                  <div className="text-[9px] text-[#e06c75] mt-1">
                    ✗ Eski usul
                  </div>
                )}
              </div>
            ))}
          </div>
          <CodeSnippet
            lines={[
              [{ text: "// O'rnatish", color: C.cmt }],
              [{ text: "yarn add @reduxjs/toolkit react-redux", color: C.str }],
            ]}
          />
          <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
            <div className="text-[10px] font-mono text-[#7a7468] mb-2">
              Fayl tuzilmasi:
            </div>
            {[
              "src/store/index.js",
              "src/slices/counterSlice.js",
              "src/slices/todoSlice.js",
            ].map((f) => (
              <div key={f} className="font-mono text-xs text-[#764abc] py-0.5">
                📄 {f}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "slice" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            createSlice — name, initialState va reducers dan iborat. Actions
            avtomatik yaratiladi:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "counterSlice", color: C.fn },
                { text: " = ", color: C.op },
                { text: "createSlice", color: C.fn },
                { text: "({", color: C.op },
              ],
              [
                { text: "  name: ", color: "rgba(255,255,255,0.7)" },
                { text: '"counter"', color: C.str },
                { text: ",", color: C.op },
              ],
              [
                { text: "  initialState: ", color: "rgba(255,255,255,0.7)" },
                { text: "{ value: ", color: C.op },
                { text: "0", color: C.num },
                { text: " },", color: C.op },
              ],
              [{ text: "  reducers: {", color: "rgba(255,255,255,0.7)" }],
              [
                { text: "    increment", color: C.fn },
                { text: ": (state) => { state.value++ },", color: C.op },
              ],
              [
                { text: "    decrement", color: C.fn },
                { text: ": (state) => { state.value-- },", color: C.op },
              ],
              [
                { text: "    incrementByAmount", color: C.fn },
                { text: ": (state, action) => {", color: C.op },
              ],
              [
                {
                  text: "      state.value += action.payload;",
                  color: "rgba(255,255,255,0.6)",
                },
              ],
              [{ text: "    }", color: C.op }],
              [{ text: "  }", color: C.op }],
              [{ text: "});", color: C.op }],
              [{ text: "" }],
              [
                { text: "export const ", color: C.kw },
                {
                  text: "{ increment, decrement, incrementByAmount }",
                  color: C.fn,
                },
                { text: " = counterSlice.actions;", color: C.op },
              ],
              [
                { text: "export default ", color: C.kw },
                { text: "counterSlice.reducer;", color: C.fn },
              ],
            ]}
          />
          <InfoBox color="#764abc" icon="💡">
            RTK ichida <Tag color="#764abc">Immer</Tag> ishlatadi — state'ni
            to'g'ridan-to'g'ri o'zgartirsa bo'ladi.
            <code> state.value++</code> aslida immutable yangilanish qiladi.
          </InfoBox>
        </div>
      )}

      {tab === "store" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Store — barcha state markaziy joyi. Dispatch bosing va state qanday
            o'zgarishini ko'ring:
          </p>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center justify-between mb-3">
              <div className="font-mono text-xs text-[#7a7468]">
                store.getState().counter.value
              </div>
              <div className="font-mono text-2xl font-black text-[#764abc]">
                {count}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "increment()", action: "increment" },
                { label: "decrement()", action: "decrement" },
                { label: "+5", action: "incrementByAmount", payload: 5 },
                { label: "reset()", action: "reset" },
              ].map(({ label, action, payload }) => (
                <button
                  key={label}
                  onClick={() => dispatch(action, payload)}
                  className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
                  style={{
                    background: "#764abc20",
                    color: "#764abc",
                    border: "1.5px solid #764abc40",
                  }}
                >
                  dispatch({label})
                </button>
              ))}
            </div>
          </div>
          {dispatchLog.length > 0 && (
            <div className="bg-[#1a1814] rounded-lg p-3">
              <div className="text-[10px] font-mono text-[rgba(255,255,255,0.3)] mb-1.5">
                Dispatch log:
              </div>
              {dispatchLog.map((log, i) => (
                <div
                  key={i}
                  className="font-mono text-[10px] py-0.5 flex gap-2"
                >
                  <span className="text-[rgba(255,255,255,0.3)]">
                    {log.time}
                  </span>
                  <span className="text-[#c792ea]">counter/{log.action}</span>
                  {log.payload && (
                    <span className="text-[#f78c6c]">({log.payload})</span>
                  )}
                </div>
              ))}
            </div>
          )}
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "store", color: C.fn },
                { text: " = ", color: C.op },
                { text: "configureStore", color: C.fn },
                { text: "({", color: C.op },
              ],
              [
                {
                  text: "  reducer: { counter: counterReducer }",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [{ text: "});", color: C.op }],
              [{ text: "" }],
              [{ text: "// Componentda:", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "count", color: C.fn },
                { text: " = ", color: C.op },
                { text: "useSelector", color: C.fn },
                { text: "(s => s.counter.value);", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "dispatch", color: C.fn },
                { text: " = ", color: C.op },
                { text: "useDispatch", color: C.fn },
                { text: "();", color: C.op },
              ],
            ]}
          />
        </div>
      )}
    </div>
  );
}
