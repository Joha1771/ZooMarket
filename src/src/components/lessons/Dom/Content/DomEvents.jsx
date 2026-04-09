// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.6 — EVENTS: CLICK, KEYBOARD, SCROLL
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function DomEventsExplain({ t }) {
  const [tab, setTab] = useState("mouse");
  const d = t("lessons.dom-events.explain");

  const tabs = [
    { id: "mouse", label: "🖱 Mouse" },
    { id: "keyboard", label: "⌨️ Keyboard" },
    { id: "add", label: "📌 Sintaksis" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-1.5">
        {tabs.map((tb) => (
          <button
            key={tb.id}
            onClick={() => setTab(tb.id)}
            className="flex-1 py-2 font-mono text-[11px] font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: tab === tb.id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === tb.id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === tb.id ? "#fff" : "#1a1814",
            }}
          >
            {tb.label}
          </button>
        ))}
      </div>

      {tab === "mouse" && (
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-[#7a7468]">{d.mouseLabel}</p>
          {d.mouse.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-lg border"
              style={{ background: "#c85c1a0a", borderColor: "#c85c1a20" }}
            >
              <code className="font-mono text-xs font-bold text-[#c85c1a] w-28 shrink-0">
                {m.event}
              </code>
              <span className="text-xs text-[#7a7468]">{m.desc}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "keyboard" && (
        <div className="flex flex-col gap-1.5">
          <p className="text-xs text-[#7a7468]">{d.keyLabel}</p>
          {d.keyboard.map((k, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-lg border"
              style={{ background: "#185FA50a", borderColor: "#185FA520" }}
            >
              <code className="font-mono text-xs font-bold text-[#185FA5] w-28 shrink-0">
                {k.event}
              </code>
              <span className="text-xs text-[#7a7468]">{k.desc}</span>
            </div>
          ))}
        </div>
      )}

      {tab === "add" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">{d.addLabel}</p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">1 — HTML atribut:</div>
            <div className="text-[#e06c75] mb-3">{"<button onclick=\"func()\"> Click </button>"}</div>
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">2 — DOM property:</div>
            <div className="mb-3">
              <span className="text-[#ffcb6b]">btn</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#82aaff]">onclick</span>
              <span className="text-[rgba(255,255,255,0.5)]"> = </span>
              <span className="text-[#c3e88d]">function() {"{ }"}</span>
            </div>
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">3 — addEventListener (tavsiya):</div>
            <div>
              <span className="text-[#ffcb6b]">btn</span>
              <span className="text-[rgba(255,255,255,0.5)]">.</span>
              <span className="text-[#82aaff]">addEventListener</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"('click', "}</span>
              <span className="text-[#c3e88d]">{"(e) => { }"}</span>
              <span className="text-[rgba(255,255,255,0.5)]">{")"}</span>
            </div>
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

export function DomEventsLearn({ t }) {
  const [log, setLog] = useState([]);
  const [pressedKey, setPressedKey] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const d = t("lessons.dom-events.learn");

  const addLog = (type, detail) => {
    const entry = { id: Date.now(), type, detail, time: new Date().toLocaleTimeString("uz") };
    setLog((prev) => [entry, ...prev].slice(0, 8));
  };

  const handleClick = (e) => {
    setClickCount((c) => c + 1);
    addLog("click", `x:${e.clientX} y:${e.clientY}`);
  };

  const handleDblClick = () => addLog("dblclick", "2x bosildi");
  const handleMouseEnter = () => addLog("mouseenter", "Ustiga keldi");
  const handleMouseLeave = () => addLog("mouseleave", "Ustidan ketdi");

  const handleKeyDown = (e) => {
    setPressedKey(e.key);
    addLog("keydown", `key: "${e.key}"`);
  };

  const typeColors = {
    click: "#c85c1a",
    dblclick: "#993556",
    mouseenter: "#4a9e60",
    mouseleave: "#7a7468",
    keydown: "#185FA5",
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Click area */}
      <button
        onClick={handleClick}
        onDoubleClick={handleDblClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full py-5 rounded-xl border-2 border-dashed font-mono text-sm cursor-pointer transition-all"
        style={{ borderColor: "#c85c1a40", background: "#c85c1a08", color: "#c85c1a" }}
      >
        {d.clickArea} {clickCount > 0 && `(${clickCount}×)`}
      </button>

      {/* Keyboard area */}
      <input
        onKeyDown={handleKeyDown}
        placeholder={d.keyArea}
        className="w-full px-3 py-3 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-sm outline-none font-mono text-[#1a1814]"
      />
      {pressedKey && (
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-[#7a7468]">e.key =</span>
          <kbd className="px-2.5 py-1 rounded border font-bold text-[#185FA5]"
            style={{ background: "#185FA510", borderColor: "#185FA535" }}>
            "{pressedKey}"
          </kbd>
        </div>
      )}

      {/* Event log */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider">
            {d.logLabel}
          </div>
          <button
            onClick={() => setLog([])}
            className="font-mono text-[10px] text-[#7a7468] cursor-pointer"
          >
            {d.clearLog}
          </button>
        </div>
        <div className="bg-[#2c2820] rounded-lg p-3 min-h-[80px] flex flex-col gap-1">
          {log.length === 0 ? (
            <div className="text-[rgba(255,255,255,0.2)] font-mono text-xs text-center py-4">
              — hodisalar yo'q —
            </div>
          ) : (
            log.map((entry) => (
              <div key={entry.id} className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[rgba(255,255,255,0.3)] text-[10px] w-16 shrink-0">
                  {entry.time}
                </span>
                <span className="font-bold w-20 shrink-0" style={{ color: typeColors[entry.type] || "#fff" }}>
                  {entry.type}
                </span>
                <span className="text-[rgba(255,255,255,0.5)] text-[10px]">{entry.detail}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
