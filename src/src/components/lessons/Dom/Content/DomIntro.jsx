// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.1 — WHAT IS DOM AND ITS STRUCTURE
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function DomIntroExplain({ t }) {
  const [activeNode, setActiveNode] = useState(null);
  const d = t("lessons.dom-intro.explain");
  const nodes = d.nodes;

  const treeNodes = [
    { id: "doc", label: "document", depth: 0, color: "#993556" },
    { id: "html", label: "<html>", depth: 1, color: "#c85c1a" },
    { id: "head", label: "<head>", depth: 2, color: "#185FA5" },
    { id: "body", label: "<body>", depth: 2, color: "#4a9e60" },
    { id: "h1", label: "<h1>", depth: 3, color: "#c85c1a" },
    { id: "txt", label: '"Salom"', depth: 4, color: "#4a9e60" },
    { id: "p", label: "<p>", depth: 3, color: "#c85c1a" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Node types */}
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider">
          {d.nodeTypes}
        </div>
        <p className="text-xs text-[#7a7468]">{d.nodeDesc}</p>
        <div className="grid grid-cols-2 gap-2">
          {nodes.map((n, i) => (
            <button
              key={i}
              onClick={() => setActiveNode(activeNode === i ? null : i)}
              className="p-2.5 text-left rounded-lg border transition-all cursor-pointer"
              style={{
                background: activeNode === i ? n.color + "20" : n.color + "0a",
                borderColor: activeNode === i ? n.color : n.color + "40",
              }}
            >
              <div className="font-mono text-xs font-bold" style={{ color: n.color }}>
                {n.name}
              </div>
              {activeNode === i && (
                <div className="text-[11px] text-[#1a1814] mt-1 leading-relaxed font-mono">
                  {n.desc}
                </div>
              )}
            </button>
          ))}
        </div>
        {activeNode === null && (
          <p className="text-center text-xs text-[#7a7468] font-mono">
            👆 {d.hint}
          </p>
        )}
      </div>

      {/* DOM Tree visual */}
      <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-3">
          {d.treeLabel}
        </div>
        <div className="flex flex-col gap-1">
          {treeNodes.map((node) => (
            <div
              key={node.id}
              className="flex items-center gap-1.5 font-mono text-xs"
              style={{ paddingLeft: node.depth * 16 }}
            >
              {node.depth > 0 && (
                <span className="text-[rgba(26,24,20,0.25)] text-[10px]">└─</span>
              )}
              <span
                className="px-2 py-0.5 rounded"
                style={{ background: node.color + "18", color: node.color }}
              >
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DomIntroLearn({ t }) {
  const [activeStep, setActiveStep] = useState(null);
  const d = t("lessons.dom-intro.learn");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex flex-col gap-2">
        {d.steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
            className="flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer"
            style={{
              background: activeStep === i ? "#c85c1a12" : "#f2efe8",
              borderColor: activeStep === i ? "#c85c1a40" : "rgba(26,24,20,0.10)",
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0"
              style={{
                background: activeStep === i ? "#c85c1a" : "rgba(26,24,20,0.08)",
                color: activeStep === i ? "#fff" : "#7a7468",
              }}
            >
              {i + 1}
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#1a1814]">{step.label}</div>
              {activeStep === i && (
                <div className="text-xs text-[#7a7468] mt-0.5">{step.desc}</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* DevTools tip */}
      <div
        className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#4a9e6010", borderColor: "#4a9e6030" }}
      >
        <span className="font-bold" style={{ color: "#4a9e60" }}>💡 </span>
        <span className="text-[#1a1814]">{d.tip}</span>
      </div>

      {/* Code block showing DOM tree structure */}
      <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
        <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2 uppercase tracking-wider">
          console.log(document)
        </div>
        <div className="text-[#c3e88d]">▼ #document</div>
        <div className="text-[#82aaff] pl-3">▼ &lt;html&gt;</div>
        <div className="text-[#ffcb6b] pl-6">▶ &lt;head&gt;</div>
        <div className="text-[#c3e88d] pl-6">▼ &lt;body&gt;</div>
        <div className="text-[#f78c6c] pl-9">▶ &lt;h1&gt;</div>
        <div className="text-[#f78c6c] pl-9">▶ &lt;p&gt;</div>
        <div className="text-[rgba(255,255,255,0.3)] pl-6">...</div>
      </div>
    </div>
  );
}
