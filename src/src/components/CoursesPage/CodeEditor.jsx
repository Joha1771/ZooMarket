// ─── CODE EDITOR ──────────────────────────────────────────────────────────────
import { useState, useRef, useEffect, useCallback } from "react";

export function CodeEditor({ starterCode, starterHTML, lang = "html" }) {
  const [css, setCss] = useState(starterCode || "");
  const [html, setHtml] = useState(starterHTML || "");
  const [view, setView] = useState("split");
  const [activeTab, setActiveTab] = useState(lang === "js" ? "js" : "html");
  const iframeRef = useRef(null);

  const runPreview = useCallback(() => {
    if (!iframeRef.current) return;
    let doc;
    if (lang === "js") {
      doc = `<!DOCTYPE html><html><body>
        <div id="output" style="font-family:monospace;font-size:13px;padding:16px;color:#1a1814;"></div>
        <script>
        const origLog = console.log;
        console.log = function(...args) {
          origLog(...args);
          const out = document.getElementById('output');
          const line = document.createElement('div');
          line.style.cssText = 'padding:3px 0;border-bottom:1px solid rgba(26,24,20,0.08)';
          line.textContent = '> ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
          out.appendChild(line);
        };
        try { ${css} } catch(e) {
          document.getElementById('output').innerHTML = '<span style="color:#c85c1a">Error: ' + e.message + '</span>';
        }
        </script></body></html>`;
    } else {
      const fullHTML = html.replace(
        /<style>[\s\S]*?<\/style>/,
        `<style>\n${css}\n</style>`,
      );
      doc = fullHTML.includes("<style>")
        ? fullHTML
        : html.replace("</head>", `<style>\n${css}\n</style></head>`);
    }
    iframeRef.current.srcdoc = doc;
  }, [css, html, lang]);

  useEffect(() => {
    runPreview();
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const ta = e.target;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const val = ta.value;
        ta.value = val.substring(0, start) + "  " + val.substring(end);
        ta.selectionStart = ta.selectionEnd = start + 2;
        if (lang === "js" || activeTab === "css") setCss(ta.value);
        else setHtml(ta.value);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runPreview();
      }
    },
    [lang, activeTab, runPreview],
  );

  const viewButtons = [
    { id: "code", icon: "</>" },
    { id: "split", icon: "⊞" },
    { id: "preview", icon: "◉" },
  ];

  return (
    <div className="flex flex-col bg-[#2c2820] rounded-xl border border-[rgba(26,24,20,0.10)] overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[rgba(255,255,255,0.06)] bg-black/15">
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div
              key={c}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c }}
            />
          ))}
        </div>
        {lang !== "js" && (
          <div className="flex gap-0.5 ml-2">
            {["css", "html"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono cursor-pointer border-none"
                style={{
                  background:
                    activeTab === tab
                      ? "rgba(255,255,255,0.12)"
                      : "transparent",
                  color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.4)",
                }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        )}
        <div className="flex-1" />
        <div className="flex gap-0.5 bg-black/20 rounded-lg p-0.5">
          {viewButtons.map(({ id, icon }) => (
            <button
              key={id}
              onClick={() => setView(id)}
              className="px-2.5 py-1 rounded text-xs font-mono cursor-pointer border-none transition-all duration-150"
              style={{
                background:
                  view === id ? "rgba(255,255,255,0.15)" : "transparent",
                color: view === id ? "#fff" : "rgba(255,255,255,0.4)",
              }}
            >
              {icon}
            </button>
          ))}
        </div>
        <button
          onClick={runPreview}
          className="px-3.5 py-1 rounded-lg border-none cursor-pointer bg-[#c85c1a] text-white font-mono text-xs font-bold"
          style={{ boxShadow: "0 3px 0 0 #8a3a0a" }}
        >
          ▶ RUN
        </button>
      </div>

      {/* Editor + Preview */}
      <div
        className="grid min-h-[420px]"
        style={{ gridTemplateColumns: view === "split" ? "1fr 1fr" : "1fr" }}
      >
        {(view === "code" || view === "split") && (
          <div
            className="relative"
            style={{
              borderRight:
                view === "split" ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <textarea
              value={lang === "js" ? css : activeTab === "css" ? css : html}
              onChange={(e) => {
                if (lang === "js" || activeTab === "css")
                  setCss(e.target.value);
                else setHtml(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              className="w-full h-full min-h-[420px] p-4 bg-transparent text-[#c3e88d] font-mono leading-loose border-none outline-none resize-none box-border"
              style={{ fontSize: "var(--lesson-font-size, 14px)" }}
            />
            <div className="absolute bottom-2 right-2.5 text-[10px] font-mono text-white/20">
              Ctrl+Enter → Run
            </div>
          </div>
        )}
        {(view === "preview" || view === "split") && (
          <div className="relative bg-white">
            <div className="absolute top-0 left-0 right-0 px-2.5 py-1 bg-black/[0.04] border-b border-black/[0.08] flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4a9e60]" />
              <span className="font-mono text-[10px] text-[#7a7468]">
                localhost preview
              </span>
            </div>
            <iframe
              ref={iframeRef}
              sandbox="allow-scripts"
              className="w-full h-full min-h-[420px] border-none mt-6"
              title="preview"
            />
          </div>
        )}
      </div>
    </div>
  );
}
