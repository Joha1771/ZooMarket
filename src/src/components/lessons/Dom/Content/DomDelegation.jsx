// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.7 — BUBBLING, CAPTURING, DELEGATION
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function DomDelegationExplain({ t }) {
  const [tab, setTab] = useState("bubbling");
  const d = t("lessons.dom-delegation.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-1.5">
        {["bubbling", "prevent", "delegation"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-[10px] font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "bubbling" ? "Bubbling" : id === "prevent" ? "preventDefault" : "Delegation"}
          </button>
        ))}
      </div>

      {tab === "bubbling" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">{d.bubblingLabel}</p>
          <p className="text-xs text-[#1a1814]">{d.bubblingDesc}</p>
          {/* Visual bubbling tree */}
          <div className="flex flex-col gap-2 items-center">
            {[
              { label: "document", color: "#993556", arrow: true },
              { label: "<body>", color: "#7a7468", arrow: true },
              { label: "<div>  ← ota", color: "#185FA5", arrow: true },
              { label: "<button> ← hodisa shu yerda", color: "#c85c1a", arrow: false },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="px-4 py-2 rounded-lg font-mono text-xs font-bold border"
                  style={{ background: item.color + "18", borderColor: item.color + "40", color: item.color }}
                >
                  {item.label}
                </div>
                {item.arrow && <div className="text-[#7a7468] text-lg leading-none">↑</div>}
              </div>
            ))}
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1">{d.stopLabel}</div>
            <div className="text-[#c3e88d]">e.stopPropagation()</div>
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mt-2 mb-1">// Bubbling to'xtatiladi</div>
          </div>
        </div>
      )}

      {tab === "prevent" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">{d.preventLabel}</p>
          {d.preventExamples.map((ex, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: "#185FA50a", borderColor: "#185FA525" }}
            >
              <code className="font-mono text-xs font-bold text-[#185FA5] w-28 shrink-0">{ex.element}</code>
              <span className="text-xs text-[#7a7468]">{ex.action}</span>
            </div>
          ))}
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
            <div className="text-[#ffcb6b]">link</div>
            <div className="text-[rgba(255,255,255,0.5)]">.</div>
            <div className="inline text-[#82aaff]">addEventListener</div>
            <span className="text-[rgba(255,255,255,0.5)]">{"('click', "}</span>
            <span className="text-[#c3e88d]">{"(e) => {"}</span>
            <div className="pl-3 text-[#f78c6c]">{"e.preventDefault();"}</div>
            <div className="pl-3 text-[rgba(255,255,255,0.3)]">{"// Sahifaga o'tmaydi"}</div>
            <span className="text-[#c3e88d]">{"}"}</span>
            <span className="text-[rgba(255,255,255,0.5)]">{")"}</span>
          </div>
        </div>
      )}

      {tab === "delegation" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">{d.delegationLabel}</p>
          <p className="text-xs text-[#1a1814]">{d.delegationDesc}</p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">// Yomon: har biriga tinglаgich</div>
            <div className="text-[#e06c75]">{"items.forEach(item => item.addEventListener(...))"}</div>
            <div className="mt-3 text-[rgba(255,255,255,0.3)] text-[10px] mb-2">// Yaxshi: delegation</div>
            <div className="text-[#ffcb6b]">list</div>
            <span className="text-[rgba(255,255,255,0.5)]">.</span>
            <span className="text-[#82aaff]">addEventListener</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"('click', (e) => {"}</span>
            <div className="pl-3">
              <span className="text-[#82aaff]">if </span>
              <span className="text-[rgba(255,255,255,0.5)]">{"("}</span>
              <span className="text-[#c3e88d]">e.target.matches</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"('.item')) {"}</span>
            </div>
            <div className="pl-6 text-[rgba(255,255,255,0.4)]">// ishlat</div>
            <div className="pl-3 text-[rgba(255,255,255,0.5)]">{"}"}</div>
            <div className="text-[rgba(255,255,255,0.5)]">{"});"}</div>
          </div>
        </div>
      )}

      <div className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#4a9e600a", borderColor: "#4a9e6025" }}>
        <span className="font-bold text-[#4a9e60]">💡 </span>
        <span className="text-[#1a1814]">{d.tip}</span>
      </div>
    </div>
  );
}

export function DomDelegationLearn({ t }) {
  const [demo, setDemo] = useState("bubbling");
  const [log, setLog] = useState([]);
  const [items, setItems] = useState(["Mahsulot 1", "Mahsulot 2", "Mahsulot 3"]);
  const [newItem, setNewItem] = useState("");
  const [delegationLog, setDelegationLog] = useState([]);
  const d = t("lessons.dom-delegation.learn");

  const addLog = (msg, color) =>
    setLog((prev) => [{ id: Date.now(), msg, color }, ...prev].slice(0, 5));

  const addDelegationLog = (item) =>
    setDelegationLog((prev) => [{ id: Date.now(), item }, ...prev].slice(0, 5));

  const addItem = () => {
    if (!newItem.trim()) return;
    setItems((prev) => [...prev, newItem.trim()]);
    setNewItem("");
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-2">
        {["bubbling", "delegation"].map((id) => (
          <button
            key={id}
            onClick={() => setDemo(id)}
            className="flex-1 py-2 font-mono text-xs font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: demo === id ? "#c85c1a" : "#f2efe8",
              borderColor: demo === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: demo === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "bubbling" ? d.bubblingDemo : d.delegationDemo}
          </button>
        ))}
      </div>

      {demo === "bubbling" && (
        <>
          {/* Nested boxes */}
          <div
            className="p-3 rounded-xl border-2 cursor-pointer transition-all"
            style={{ borderColor: "#993556", background: "#99355608" }}
            onClick={(e) => { e.stopPropagation(); addLog("document clicked", "#993556"); }}
          >
            <div className="font-mono text-[10px] text-[#993556] mb-2">document (tashqi)</div>
            <div
              className="p-3 rounded-lg border-2 cursor-pointer"
              style={{ borderColor: "#185FA5", background: "#185FA508" }}
              onClick={(e) => { e.stopPropagation(); addLog("div.container clicked", "#185FA5"); }}
            >
              <div className="font-mono text-[10px] text-[#185FA5] mb-2">div.container</div>
              <button
                className="px-4 py-2 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
                style={{ background: "#c85c1a", color: "#fff" }}
                onClick={(e) => { addLog("button clicked → bubbling ↑", "#c85c1a"); }}
              >
                Button (bosing)
              </button>
            </div>
          </div>
          <div className="bg-[#2c2820] rounded-lg p-2.5 min-h-[60px]">
            {log.map((l) => (
              <div key={l.id} className="font-mono text-xs" style={{ color: l.color }}>↑ {l.msg}</div>
            ))}
          </div>
        </>
      )}

      {demo === "delegation" && (
        <>
          <div className="flex gap-2">
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addItem()}
              placeholder="Yangi element..."
              className="flex-1 px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-xs text-[#1a1814] outline-none"
            />
            <button
              onClick={addItem}
              className="px-3 py-2 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
              style={{ background: "#4a9e60", color: "#fff" }}
            >
              {d.addItem}
            </button>
          </div>
          {/* Delegation list — single listener on parent */}
          <div
            className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]"
            onClick={(e) => {
              const li = e.target.closest("[data-item]");
              if (li) addDelegationLog(li.dataset.item);
            }}
          >
            <div className="font-mono text-[10px] text-[#7a7468] mb-2 uppercase tracking-wider">
              {d.logLabel} (bitta listener — ota elementda):
            </div>
            <div className="flex flex-col gap-1">
              {items.map((item, i) => (
                <div
                  key={i}
                  data-item={item}
                  className="px-3 py-2 bg-white rounded-lg border border-[rgba(26,24,20,0.08)] font-mono text-xs text-[#1a1814] cursor-pointer hover:border-[#185FA540] transition-all"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#2c2820] rounded-lg p-2.5 min-h-[50px]">
            {delegationLog.map((l) => (
              <div key={l.id} className="font-mono text-xs text-[#c3e88d]">
                e.target → "{l.item}"
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
