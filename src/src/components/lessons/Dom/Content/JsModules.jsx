// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.8 — JS MODULES (ES MODULES)
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function JsModulesExplain({ t }) {
  const [tab, setTab] = useState("export");
  const d = t("lessons.js-modules.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-1.5">
        {["export", "import", "types"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-[11px] font-bold border rounded-lg cursor-pointer transition-all"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "export" ? d.exportLabel : id === "import" ? d.importLabel : "Turlari"}
          </button>
        ))}
      </div>

      {tab === "export" && (
        <div className="flex flex-col gap-2">
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">// utils.js</div>
            <div>
              <span className="text-[#82aaff]">export</span>{" "}
              <span className="text-[#82aaff]">const</span>{" "}
              <span className="text-[#c3e88d]">PI</span>
              <span className="text-[rgba(255,255,255,0.5)]"> = </span>
              <span className="text-[#f78c6c]">3.14</span>
              <span className="text-[rgba(255,255,255,0.4)]">;</span>
            </div>
            <div className="mt-1">
              <span className="text-[#82aaff]">export function</span>{" "}
              <span className="text-[#ffcb6b]">add</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"(a, b) { "}</span>
              <span className="text-[#82aaff]">return</span>{" "}
              <span className="text-[#c3e88d]">a + b</span>
              <span className="text-[rgba(255,255,255,0.5)]">{" }"}</span>
            </div>
            <div className="mt-3 text-[rgba(255,255,255,0.3)] text-[10px]">// Default export:</div>
            <div className="mt-1">
              <span className="text-[#82aaff]">export default</span>{" "}
              <span className="text-[#82aaff]">class</span>{" "}
              <span className="text-[#ffcb6b]">Calculator</span>{" "}
              <span className="text-[rgba(255,255,255,0.5)]">{"{ }"}</span>
            </div>
          </div>
        </div>
      )}

      {tab === "import" && (
        <div className="flex flex-col gap-2">
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">// main.js</div>
            <div className="text-[rgba(255,255,255,0.3)] text-[10px]">// Named import:</div>
            <div>
              <span className="text-[#82aaff]">import</span>{" "}
              <span className="text-[rgba(255,255,255,0.5)]">{"{ "}</span>
              <span className="text-[#c3e88d]">PI, add</span>
              <span className="text-[rgba(255,255,255,0.5)]">{" } from "}</span>
              <span className="text-[#f78c6c]">'./utils.js'</span>
              <span className="text-[rgba(255,255,255,0.4)]">;</span>
            </div>
            <div className="mt-2 text-[rgba(255,255,255,0.3)] text-[10px]">// Default import:</div>
            <div>
              <span className="text-[#82aaff]">import</span>{" "}
              <span className="text-[#c3e88d]">Calculator</span>{" "}
              <span className="text-[#82aaff]">from</span>{" "}
              <span className="text-[#f78c6c]">'./utils.js'</span>
              <span className="text-[rgba(255,255,255,0.4)]">;</span>
            </div>
            <div className="mt-2 text-[rgba(255,255,255,0.3)] text-[10px]">// Alias:</div>
            <div>
              <span className="text-[#82aaff]">import</span>{" "}
              <span className="text-[rgba(255,255,255,0.5)]">{"{ "}</span>
              <span className="text-[#c3e88d]">add</span>{" "}
              <span className="text-[#82aaff]">as</span>{" "}
              <span className="text-[#c3e88d]">sum</span>
              <span className="text-[rgba(255,255,255,0.5)]">{" } from "}</span>
              <span className="text-[#f78c6c]">'./utils.js'</span>
              <span className="text-[rgba(255,255,255,0.4)]">;</span>
            </div>
          </div>
        </div>
      )}

      {tab === "types" && (
        <div className="flex flex-col gap-2">
          {d.types.map((tp, i) => (
            <div
              key={i}
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: tp.color + "0a", borderColor: tp.color + "30" }}
            >
              <code className="font-mono text-xs font-bold shrink-0 w-32" style={{ color: tp.color }}>
                {tp.name}
              </code>
              <span className="text-xs text-[#7a7468] leading-relaxed">{tp.desc}</span>
            </div>
          ))}
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1">{d.commonLabel}</div>
            <div>
              <span className="text-[#e06c75]">require</span>
              <span className="text-[rgba(255,255,255,0.5)]">{"('module')"}</span>
              <span className="text-[rgba(255,255,255,0.3)]"> ← CommonJS</span>
            </div>
            <div>
              <span className="text-[#82aaff]">import</span>
              <span className="text-[rgba(255,255,255,0.5)]"> ... from </span>
              <span className="text-[#f78c6c]">'module'</span>
              <span className="text-[rgba(255,255,255,0.3)]"> ← ES Module</span>
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

export function JsModulesLearn({ t }) {
  const [activeFile, setActiveFile] = useState("utils.js");
  const d = t("lessons.js-modules.learn");

  const files = {
    "utils.js": {
      color: "#ffcb6b",
      content: [
        { type: "export", text: "export const PI = 3.14;" },
        { type: "export", text: "export function add(a, b) { return a + b; }" },
        { type: "export", text: "export function greet(name) {" },
        { type: "normal", text: "  return `Salom, ${name}!`;" },
        { type: "normal", text: "}" },
      ],
      exports: ["PI", "add", "greet"],
    },
    "api.js": {
      color: "#82aaff",
      content: [
        { type: "export", text: "export async function fetchData(url) {" },
        { type: "normal", text: "  const res = await fetch(url);" },
        { type: "normal", text: "  return res.json();" },
        { type: "normal", text: "}" },
        { type: "default", text: "export default { baseURL: '/api' };" },
      ],
      exports: ["fetchData", "default"],
    },
    "main.js": {
      color: "#c3e88d",
      content: [
        { type: "import", text: "import { PI, add } from './utils.js';" },
        { type: "import", text: "import { fetchData } from './api.js';" },
        { type: "import", text: "import config from './api.js';" },
        { type: "normal", text: "" },
        { type: "normal", text: "console.log(add(2, 3)); // 5" },
      ],
      imports: ["utils.js", "api.js"],
    },
  };

  const fileList = Object.keys(files);
  const current = files[activeFile];

  const typeColors = {
    export: "#c3e88d",
    import: "#82aaff",
    default: "#ffcb6b",
    normal: "rgba(255,255,255,0.6)",
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* File tabs */}
      <div>
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.fileLabel}
        </div>
        <div className="flex gap-1.5">
          {fileList.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFile(f)}
              className="px-3 py-1.5 rounded-lg border font-mono text-[11px] cursor-pointer transition-all"
              style={{
                background: activeFile === f ? files[f].color + "20" : "#f2efe8",
                borderColor: activeFile === f ? files[f].color + "60" : "rgba(26,24,20,0.10)",
                color: activeFile === f ? files[f].color : "#7a7468",
                fontWeight: activeFile === f ? "bold" : "normal",
              }}
            >
              📄 {f}
            </button>
          ))}
        </div>
      </div>

      {/* File content */}
      <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
        <div
          className="text-[10px] mb-2 uppercase tracking-wider font-bold"
          style={{ color: current.color }}
        >
          {activeFile}
        </div>
        {current.content.map((line, i) => (
          <div key={i} style={{ color: typeColors[line.type] }}>
            {line.text || " "}
          </div>
        ))}
      </div>

      {/* Export/import connections */}
      <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.structureLabel}
        </div>
        <div className="flex items-center justify-around gap-2">
          {["utils.js", "api.js"].map((f) => (
            <div key={f} className="flex flex-col items-center gap-1">
              <div className="px-3 py-2 rounded-lg font-mono text-[11px] font-bold border"
                style={{ background: files[f].color + "15", borderColor: files[f].color + "40", color: files[f].color }}>
                {f}
              </div>
              <div className="text-[#7a7468] text-xs">↓ export</div>
            </div>
          ))}
          <div className="flex flex-col items-center gap-1">
            <div className="text-[#7a7468] text-xs">import ↑</div>
            <div className="px-3 py-2 rounded-lg font-mono text-[11px] font-bold border"
              style={{ background: files["main.js"].color + "15", borderColor: files["main.js"].color + "40", color: files["main.js"].color }}>
              main.js
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
