// ─── CODE EDITOR ──────────────────────────────────────────────────────────────
import { useState, useRef, useEffect, useCallback } from "react";
import { Quiz } from "./Quiz";

// ─── PHASE CONFIG ─────────────────────────────────────────────────────────────
const PHASES = [
  {
    id: "watch",
    label: "Watch",
    sub: "namunani ko'r",
    icon: "👁",
    color: "#185FA5",
    colorBg: "rgba(24,95,165,0.12)",
    colorBorder: "rgba(24,95,165,0.35)",
    readOnly: true,
  },
  {
    id: "try",
    label: "Try it",
    sub: "o'zing yoz",
    icon: "✏️",
    color: "#c85c1a",
    colorBg: "rgba(200,92,26,0.12)",
    colorBorder: "rgba(200,92,26,0.35)",
    readOnly: false,
  },
  {
    id: "quiz",
    label: "Quiz",
    sub: "o'zingni tekshir",
    icon: "⚡",
    color: "#4a9e60",
    colorBg: "rgba(74,158,96,0.12)",
    colorBorder: "rgba(74,158,96,0.35)",
    readOnly: false,
  },
];

// ─── PRISM THEME ──────────────────────────────────────────────────────────────
const PRISM_THEME = `
  .token.comment,.token.prolog,.token.doctype,.token.cdata{color:rgba(255,255,255,0.3);font-style:italic}
  .token.punctuation{color:rgba(255,255,255,0.5)}
  .token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#f78c6c}
  .token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#c3e88d}
  .token.operator,.token.entity,.token.url{color:#89ddff}
  .language-css .token.string,.style .token.string{color:#89ddff}
  .token.atrule,.token.attr-value,.token.keyword{color:#c792ea}
  .token.function,.token.class-name{color:#82aaff}
  .token.regex,.token.important,.token.variable{color:#f07178}
  .token.property,.token.tag{color:#f07178}
  .token.important,.token.bold{font-weight:bold}
  .token.italic{font-style:italic}
`;

// ─── CONSOLE OUTPUT ───────────────────────────────────────────────────────────
function ConsoleOutput({ lines }) {
  if (!lines.length)
    return (
      <div
        style={{
          fontFamily: "monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.2)",
          padding: "14px 16px",
        }}
      >
        ▶ RUN bosing…
      </div>
    );
  return (
    <div
      style={{
        padding: "10px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {lines.map((line, i) => (
        <div
          key={i}
          style={{
            fontFamily: "monospace",
            fontSize: 12,
            lineHeight: "22px",
            padding: "1px 6px",
            borderRadius: 4,
            color:
              line.type === "error"
                ? "#e06c75"
                : line.type === "warn"
                  ? "#febc2e"
                  : line.type === "info"
                    ? "#82aaff"
                    : "#c3e88d",
            background:
              line.type === "error"
                ? "rgba(224,108,117,0.08)"
                : line.type === "warn"
                  ? "rgba(254,188,46,0.06)"
                  : "transparent",
          }}
        >
          <span style={{ opacity: 0.4, marginRight: 6 }}>
            {line.type === "error" ? "✕" : line.type === "warn" ? "⚠" : ">"}
          </span>
          {line.text}
        </div>
      ))}
    </div>
  );
}

// ─── LINE NUMBERS ─────────────────────────────────────────────────────────────
function LineNumbers({ count }) {
  return (
    <div
      style={{
        padding: "14px 0",
        background: "rgba(0,0,0,0.2)",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        userSelect: "none",
        minWidth: 36,
        flexShrink: 0,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        overflowY: "hidden",
        zIndex: 2,
      }}
    >
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          style={{
            fontFamily: "monospace",
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            textAlign: "right",
            padding: "0 10px",
            lineHeight: "24px",
          }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}

// ─── HIGHLIGHTED EDITOR ───────────────────────────────────────────────────────
function HighlightedEditor({ value, onChange, onKeyDown, readOnly, lang }) {
  const taRef = useRef(null);
  const preRef = useRef(null);
  const [highlighted, setHighlighted] = useState("");
  const [prismReady, setPrismReady] = useState(false);

  const LINE_NUMS_W = 36;

  const syncScroll = useCallback(() => {
    if (preRef.current && taRef.current) {
      preRef.current.scrollTop = taRef.current.scrollTop;
      preRef.current.scrollLeft = taRef.current.scrollLeft;
    }
  }, []);

  // Load Prism once
  useEffect(() => {
    if (window.Prism) {
      setPrismReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js";
    script.onload = () => {
      const extra = ["css", "javascript"];
      let done = 0;
      extra.forEach((l) => {
        const s = document.createElement("script");
        s.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${l}.min.js`;
        s.onload = () => {
          done++;
          if (done === extra.length) setPrismReady(true);
        };
        document.head.appendChild(s);
      });
    };
    document.head.appendChild(script);
  }, []);

  // Re-highlight on value or lang change
  useEffect(() => {
    if (!prismReady || !window.Prism) return;
    const map = { js: "javascript", css: "css", html: "markup" };
    const langName = map[lang] || "markup";
    const grammar = window.Prism.languages[langName];
    if (grammar) {
      setHighlighted(window.Prism.highlight(value, grammar, langName));
    }
  }, [value, prismReady, lang]);

  const lineCount = (value.match(/\n/g) || []).length + 1;

  return (
    <div
      style={{
        position: "relative",
        flex: 1,
        minHeight: 380,
        overflow: "hidden",
      }}
    >
      <style>{PRISM_THEME}</style>

      <LineNumbers count={lineCount} />

      {/* Highlighted pre */}
      <pre
        ref={preRef}
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: LINE_NUMS_W,
          right: 0,
          bottom: 0,
          margin: 0,
          padding: "14px 14px",
          fontFamily: "monospace",
          fontSize: 13,
          lineHeight: "24px",
          color: "#c3e88d",
          background: "transparent",
          pointerEvents: "none",
          overflow: "hidden",
          whiteSpace: "pre",
          wordBreak: "normal",
          boxSizing: "border-box",
        }}
      >
        <code
          dangerouslySetInnerHTML={{
            __html: prismReady ? highlighted + "\n" : "",
          }}
          style={{ fontFamily: "monospace", fontSize: 13, lineHeight: "24px" }}
        />
        {/* Fallback before Prism */}
        {!prismReady && <span style={{ color: "#c3e88d" }}>{value}</span>}
      </pre>

      {/* Editable textarea */}
      <textarea
        ref={taRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onScroll={syncScroll}
        readOnly={readOnly}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        style={{
          position: "absolute",
          top: 0,
          left: LINE_NUMS_W,
          right: 0,
          bottom: 0,
          width: `calc(100% - ${LINE_NUMS_W}px)`,
          height: "100%",
          padding: "14px 14px",
          fontFamily: "monospace",
          fontSize: 13,
          lineHeight: "24px",
          color: "transparent",
          caretColor: readOnly ? "transparent" : "#fff",
          background: "transparent",
          border: "none",
          outline: "none",
          resize: "none",
          boxSizing: "border-box",
          overflow: "auto",
          whiteSpace: "pre",
          wordBreak: "normal",
          cursor: readOnly ? "default" : "text",
          zIndex: 1,
        }}
      />

      {/* Hint */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          right: 10,
          zIndex: 3,
          fontSize: 10,
          fontFamily: "monospace",
          color: "rgba(255,255,255,0.15)",
          pointerEvents: "none",
        }}
      >
        {readOnly ? "👁 faqat ko'rish" : "Ctrl+Enter → Run"}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function CodeEditor({
  starterCode,
  starterHTML,
  lang = "html",
  quiz,
  lessonId,
  xp,
  onComplete,
  t,
}) {
  const [phase, setPhase] = useState(0);
  const [css, setCss] = useState(starterCode || "");
  const [html, setHtml] = useState(starterHTML || "");
  const [tryCode, setTryCode] = useState(
    lang === "js" ? "// O'zingiz yozing...\n" : starterCode || "",
  );
  const [view, setView] = useState("split");
  const [activeTab, setActiveTab] = useState(lang === "js" ? "js" : "css");
  const [consoleLines, setConsoleLines] = useState([]);
  const iframeRef = useRef(null);

  const currentPhase = PHASES[phase];
  const isReadOnly = currentPhase.readOnly;

  const displayCode = isReadOnly
    ? lang === "js"
      ? css
      : activeTab === "css"
        ? css
        : html
    : lang === "js"
      ? tryCode
      : activeTab === "css"
        ? tryCode
        : html;

  const displayLang =
    lang === "js" ? "js" : activeTab === "css" ? "css" : "html";

  // ─── RUN ────────────────────────────────────────────────────────────────────
  const runPreview = useCallback(() => {
    if (!iframeRef.current) return;
    const code = phase === 0 ? css : tryCode;
    let doc;
    if (lang === "js") {
      doc = `<!DOCTYPE html><html><body><script>
        ['log','warn','error','info'].forEach(m=>{const o=console[m];console[m]=function(...a){o(...a);window.parent.postMessage({type:'console',level:m,text:a.map(x=>typeof x==='object'?JSON.stringify(x):String(x)).join(' ')},'*');}});
        window.onerror=function(msg){window.parent.postMessage({type:'console',level:'error',text:msg},'*');return true;};
        try{${code}}catch(e){window.parent.postMessage({type:'console',level:'error',text:e.message},'*');}
      <\/script></body></html>`;
    } else {
      const fullHTML = html.replace(
        /<style>[\s\S]*?<\/style>/,
        `<style>\n${code}\n</style>`,
      );
      doc = fullHTML.includes("<style>")
        ? fullHTML
        : html.replace("</head>", `<style>\n${code}\n</style></head>`);
    }
    setConsoleLines([]);
    iframeRef.current.srcdoc = doc;
  }, [css, tryCode, html, lang, phase]);

  useEffect(() => {
    const h = (e) => {
      if (e.data?.type === "console")
        setConsoleLines((p) => [
          ...p,
          { type: e.data.level, text: e.data.text },
        ]);
    };
    window.addEventListener("message", h);
    return () => window.removeEventListener("message", h);
  }, []);

  useEffect(() => {
    runPreview();
  }, []);

  // ─── KEY HANDLERS ────────────────────────────────────────────────────────────
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const ta = e.target;
        const s = ta.selectionStart,
          end = ta.selectionEnd,
          v = ta.value;
        ta.value = v.substring(0, s) + "  " + v.substring(end);
        ta.selectionStart = ta.selectionEnd = s + 2;
        if (isReadOnly) return;
        if (lang === "js") setTryCode(ta.value);
        else if (activeTab === "css") setTryCode(ta.value);
        else setHtml(ta.value);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runPreview();
      }
    },
    [lang, activeTab, runPreview, isReadOnly],
  );

  const handleChange = useCallback(
    (e) => {
      if (isReadOnly) return;
      if (lang === "js") setTryCode(e.target.value);
      else if (activeTab === "css") setTryCode(e.target.value);
      else setHtml(e.target.value);
    },
    [isReadOnly, lang, activeTab],
  );

  const viewButtons = [
    { id: "code", icon: "</>" },
    { id: "split", icon: "⊞" },
    { id: "preview", icon: "◉" },
  ];

  return (
    <div className="flex flex-col bg-[#2c2820] rounded-xl border border-[rgba(26,24,20,0.10)] overflow-hidden">
      {/* Phase tabs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          background: "#1e1b16",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {PHASES.map((p, i) => {
          const isActive = phase === i;
          const isDone = i < phase;
          return (
            <button
              key={p.id}
              onClick={() => setPhase(i)}
              style={{
                padding: "11px 8px",
                border: "none",
                borderBottom: isActive
                  ? `2px solid ${p.color}`
                  : "2px solid transparent",
                borderRight:
                  i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                background: isActive ? p.colorBg : "transparent",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                transition: "all 0.15s",
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isActive
                    ? p.colorBg
                    : isDone
                      ? "rgba(74,158,96,0.15)"
                      : "rgba(255,255,255,0.05)",
                  border: `1.5px solid ${isActive ? p.colorBorder : isDone ? "rgba(74,158,96,0.3)" : "rgba(255,255,255,0.08)"}`,
                  fontSize: 13,
                  transition: "all 0.2s",
                }}
              >
                {isDone ? (
                  <span style={{ fontSize: 12, color: "#4a9e60" }}>✓</span>
                ) : (
                  p.icon
                )}
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive
                    ? p.color
                    : isDone
                      ? "#4a9e60"
                      : "rgba(255,255,255,0.35)",
                }}
              >
                {p.label}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: isActive ? p.color : "rgba(255,255,255,0.2)",
                  opacity: isActive ? 0.8 : 0.6,
                }}
              >
                {p.sub}
              </div>
            </button>
          );
        })}
      </div>

      {/* Quiz phase */}
      {phase === 2 && (
        <div className="p-5 bg-[#f2efe8]">
          <Quiz
            quiz={quiz}
            lessonId={lessonId}
            xp={xp}
            t={t}
            onComplete={onComplete}
          />
        </div>
      )}

      {/* Editor + Preview */}
      {phase !== 2 && (
        <>
          {/* Toolbar */}
          <div
            className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[rgba(255,255,255,0.06)]"
            style={{ background: "rgba(0,0,0,0.15)" }}
          >
            <div className="flex gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>

            {isReadOnly && (
              <div
                style={{
                  padding: "2px 8px",
                  borderRadius: 6,
                  background: "rgba(24,95,165,0.15)",
                  border: "1px solid rgba(24,95,165,0.3)",
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: "#82aaff",
                }}
              >
                👁 read-only namuna
              </div>
            )}

            {lang !== "js" && !isReadOnly && (
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
                      color:
                        activeTab === tab ? "#fff" : "rgba(255,255,255,0.4)",
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
              className="px-3.5 py-1 rounded-lg border-none cursor-pointer text-white font-mono text-xs font-bold"
              style={{
                background: currentPhase.color,
                boxShadow: `0 3px 0 0 ${currentPhase.color}80`,
              }}
            >
              ▶ RUN
            </button>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: view === "split" ? "1fr 1fr" : "1fr",
              minHeight: 380,
            }}
          >
            {(view === "code" || view === "split") && (
              <div
                style={{
                  display: "flex",
                  borderRight:
                    view === "split"
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  minHeight: 380,
                }}
              >
                <HighlightedEditor
                  value={displayCode}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  readOnly={isReadOnly}
                  lang={displayLang}
                />
              </div>
            )}

            {(view === "preview" || view === "split") && (
              <div className="flex flex-col">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1"
                  style={{
                    background: "rgba(0,0,0,0.08)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4a9e60]" />
                  <span className="font-mono text-[10px] text-white/25">
                    localhost preview
                  </span>
                </div>
                {lang === "js" ? (
                  <div
                    className="flex-1 min-h-[500px] overflow-auto"
                    style={{ background: "#0f0d0a" }}
                  >
                    <div
                      style={{
                        padding: "8px 14px 4px",
                        fontFamily: "monospace",
                        fontSize: 10,
                        color: "rgba(255,255,255,0.2)",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      Console
                    </div>
                    <ConsoleOutput lines={consoleLines} />
                  </div>
                ) : (
                  <div className="relative flex-1 bg-white">
                    <iframe
                      ref={iframeRef}
                      sandbox="allow-scripts"
                      className="w-full h-full min-h-[500px] border-none block"
                      title="preview"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Next phase CTA */}
          <div
            className="flex items-center justify-end gap-3 px-4 py-2.5"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.28)",
                fontFamily: "monospace",
              }}
            >
              {phase === 0 ? "Namunani ko'rdingizmi?" : "Kodni yozdingizmi?"}
            </span>
            <button
              onClick={() => setPhase((p) => p + 1)}
              style={{
                padding: "5px 14px",
                borderRadius: 8,
                border: `1.5px solid ${PHASES[phase + 1].colorBorder}`,
                background: PHASES[phase + 1].colorBg,
                color: PHASES[phase + 1].color,
                fontFamily: "monospace",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {PHASES[phase + 1].icon} {PHASES[phase + 1].label} →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
