// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.5 — ATTRIBUTES AND DATA-ATTRIBUTES
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function DomAttributesExplain({ t }) {
  const [tab, setTab] = useState("methods");
  const d = t("lessons.dom-attributes.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-2">
        {["methods", "data"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "methods" ? "Metodlar" : "data-*"}
          </button>
        ))}
      </div>

      {tab === "methods" ? (
        <div className="flex flex-col gap-2">
          {d.methods.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: "#c85c1a0a", borderColor: "#c85c1a25" }}
            >
              <code className="font-mono text-xs text-[#c85c1a] font-bold"
                style={{ minWidth: 240 }}>
                {m.method}
              </code>
              <span className="text-xs text-[#7a7468]">{m.desc}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">{d.dataDesc}</p>
          <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
              {d.dataLabel}
            </div>
            {/* HTML example */}
            <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose mb-3">
              <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1">HTML:</div>
              <div>
                <span className="text-[#e06c75]">&lt;div </span>
                <span className="text-[#ffcb6b]">data-user-id</span>
                <span className="text-[rgba(255,255,255,0.5)]">="</span>
                <span className="text-[#c3e88d]">123</span>
                <span className="text-[rgba(255,255,255,0.5)]">"</span>
                <span className="text-[#ffcb6b]"> data-color</span>
                <span className="text-[rgba(255,255,255,0.5)]">="</span>
                <span className="text-[#c3e88d]">red</span>
                <span className="text-[rgba(255,255,255,0.5)]">"</span>
                <span className="text-[#e06c75]">&gt;&lt;/div&gt;</span>
              </div>
            </div>
            {/* JS example */}
            <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
              <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1">JS:</div>
              {d.dataExample.split("\n").map((line, i) => (
                <div key={i} className={line.startsWith("//") ? "text-[rgba(255,255,255,0.3)]" : "text-[#c3e88d]"}>
                  {line}
                </div>
              ))}
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

export function DomAttributesLearn({ t }) {
  const [selectedEl, setSelectedEl] = useState(0);
  const [attrName, setAttrName] = useState("");
  const [attrValue, setAttrValue] = useState("");
  const [result, setResult] = useState("");
  const d = t("lessons.dom-attributes.learn");

  const elements = [
    {
      label: '<a href="/home" class="nav-link">',
      attrs: { href: "/home", class: "nav-link", id: "" },
    },
    {
      label: '<img src="pic.jpg" alt="Rasm" width="300">',
      attrs: { src: "pic.jpg", alt: "Rasm", width: "300" },
    },
    {
      label: '<button type="button" disabled>',
      attrs: { type: "button", disabled: "true", id: "" },
    },
  ];

  const [attrsState, setAttrsState] = useState(elements.map((el) => ({ ...el.attrs })));

  const currentAttrs = attrsState[selectedEl];

  const handleSet = () => {
    if (!attrName.trim()) return;
    setAttrsState((prev) => {
      const copy = [...prev];
      copy[selectedEl] = { ...copy[selectedEl], [attrName]: attrValue };
      return copy;
    });
    setResult(`setAttribute('${attrName}', '${attrValue}') ✓`);
  };

  const handleRemove = () => {
    if (!attrName.trim()) return;
    setAttrsState((prev) => {
      const copy = [...prev];
      const newAttrs = { ...copy[selectedEl] };
      delete newAttrs[attrName];
      copy[selectedEl] = newAttrs;
      return copy;
    });
    setResult(`removeAttribute('${attrName}') ✓`);
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Element selector */}
      <div>
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.selectLabel}
        </div>
        <div className="flex flex-col gap-1.5">
          {elements.map((el, i) => (
            <button
              key={i}
              onClick={() => { setSelectedEl(i); setResult(""); }}
              className="px-3 py-2 rounded-lg border text-left font-mono text-[11px] cursor-pointer transition-all"
              style={{
                background: selectedEl === i ? "#c85c1a12" : "#f2efe8",
                borderColor: selectedEl === i ? "#c85c1a40" : "rgba(26,24,20,0.10)",
                color: selectedEl === i ? "#c85c1a" : "#7a7468",
              }}
            >
              {el.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current attrs */}
      <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.attrsLabel}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {Object.entries(currentAttrs)
            .filter(([, v]) => v !== "")
            .map(([k, v]) => (
              <div
                key={k}
                className="flex items-center gap-1.5 px-2 py-1 rounded border font-mono text-[11px]"
                style={{ background: "#185FA50a", borderColor: "#185FA525" }}
              >
                <span className="text-[#ffcb6b]">{k}</span>
                <span className="text-[rgba(26,24,20,0.3)]">=</span>
                <span className="text-[#4a9e60]">"{v}"</span>
              </div>
            ))}
        </div>
      </div>

      {/* Edit controls */}
      <div>
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.editLabel}
        </div>
        <div className="flex gap-2 mb-2">
          <div className="flex-1">
            <div className="text-[10px] text-[#7a7468] mb-1">{d.nameLabel}</div>
            <input
              value={attrName}
              onChange={(e) => setAttrName(e.target.value)}
              placeholder="href, class, id..."
              className="w-full px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-xs text-[#1a1814] outline-none font-mono"
            />
          </div>
          <div className="flex-1">
            <div className="text-[10px] text-[#7a7468] mb-1">{d.valueLabel}</div>
            <input
              value={attrValue}
              onChange={(e) => setAttrValue(e.target.value)}
              placeholder="qiymat..."
              className="w-full px-3 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-lg text-xs text-[#1a1814] outline-none font-mono"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSet}
            className="flex-1 py-2 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
            style={{ background: "#185FA5", color: "#fff" }}
          >
            {d.setBtn}
          </button>
          <button
            onClick={handleRemove}
            className="flex-1 py-2 rounded-lg font-mono text-xs font-bold border cursor-pointer"
            style={{ background: "#c85c1a0a", borderColor: "#c85c1a30", color: "#c85c1a" }}
          >
            {d.removeBtn}
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-[#2c2820] rounded-lg px-3 py-2 font-mono text-xs text-[#c3e88d]">
          ✓ {result}
        </div>
      )}
    </div>
  );
}
