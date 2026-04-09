// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.10 — FETCH + DOM: REAL DATA
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function FetchDomExplain({ t }) {
  const [tab, setTab] = useState("flow");
  const d = t("lessons.fetch-dom.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      <div className="flex gap-1.5">
        {["flow", "async", "http"].map((id) => (
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
            {id === "flow" ? d.flowLabel : id === "async" ? "async/await" : "HTTP"}
          </button>
        ))}
      </div>

      {tab === "flow" && (
        <div className="flex flex-col gap-2">
          {d.flow.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && (
                <div className="absolute ml-[13px] -mt-3 w-0.5 h-3 bg-[rgba(26,24,20,0.1)]" />
              )}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{ background: step.color, color: "#fff" }}
              >
                {i + 1}
              </div>
              <div
                className="flex-1 flex items-center gap-3 px-3 py-2 rounded-lg border"
                style={{ background: step.color + "0a", borderColor: step.color + "30" }}
              >
                <code className="font-mono text-xs font-bold" style={{ color: step.color, minWidth: 180 }}>
                  {step.step}
                </code>
                <span className="text-xs text-[#7a7468]">{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "async" && (
        <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
          <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">{d.asyncLabel}</div>
          <div>
            <span className="text-[#82aaff]">async function</span>{" "}
            <span className="text-[#ffcb6b]">getData</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"() {"}</span>
          </div>
          <div className="pl-4">
            <span className="text-[#82aaff]">try </span>
            <span className="text-[rgba(255,255,255,0.5)]">{"{"}</span>
          </div>
          <div className="pl-8">
            <span className="text-[#82aaff]">const</span>{" "}
            <span className="text-[#c3e88d]">res</span>
            <span className="text-[rgba(255,255,255,0.5)]"> = </span>
            <span className="text-[#82aaff]">await</span>{" "}
            <span className="text-[#ffcb6b]">fetch</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"(url);"}</span>
          </div>
          <div className="pl-8">
            <span className="text-[#82aaff]">const</span>{" "}
            <span className="text-[#c3e88d]">data</span>
            <span className="text-[rgba(255,255,255,0.5)]"> = </span>
            <span className="text-[#82aaff]">await</span>{" "}
            <span className="text-[#c3e88d]">res</span>
            <span className="text-[rgba(255,255,255,0.5)]">.</span>
            <span className="text-[#ffcb6b]">json</span>
            <span className="text-[rgba(255,255,255,0.5)]">{"();"}</span>
          </div>
          <div className="pl-8 text-[rgba(255,255,255,0.4)]">// data bilan ishlash</div>
          <div className="pl-4 text-[rgba(255,255,255,0.5)]">
            {"} "}<span className="text-[#82aaff]">catch</span>{"(err) {"}
          </div>
          <div className="pl-8 text-[#e06c75]">{"console.error(err);"}</div>
          <div className="pl-4 text-[rgba(255,255,255,0.5)]">{"}"}</div>
          <div className="text-[rgba(255,255,255,0.5)]">{"}"}</div>
        </div>
      )}

      {tab === "http" && (
        <div className="flex flex-col gap-2">
          <p className="text-xs text-[#7a7468]">{d.httpLabel}</p>
          {d.http.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
              style={{ background: h.color + "0a", borderColor: h.color + "30" }}
            >
              <span
                className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                style={{ background: h.color + "20", color: h.color, minWidth: 80, textAlign: "center" }}
              >
                {h.method}
              </span>
              <span className="text-xs text-[#1a1814]">{h.action}</span>
            </div>
          ))}
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

export function FetchDomLearn({ t }) {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts/1");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const d = t("lessons.fetch-dom.learn");

  const presets = [
    { label: "Post", url: "https://jsonplaceholder.typicode.com/posts/1" },
    { label: "User", url: "https://jsonplaceholder.typicode.com/users/1" },
    { label: "Todo", url: "https://jsonplaceholder.typicode.com/todos/1" },
  ];

  const handleFetch = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* Preset URLs */}
      <div className="flex gap-1.5">
        {presets.map((p) => (
          <button
            key={p.label}
            onClick={() => setUrl(p.url)}
            className="px-3 py-1.5 rounded-lg border font-mono text-[11px] cursor-pointer transition-all"
            style={{
              background: url === p.url ? "#185FA5" : "#f2efe8",
              borderColor: url === p.url ? "#185FA5" : "rgba(26,24,20,0.10)",
              color: url === p.url ? "#fff" : "#7a7468",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* URL input */}
      <div>
        <div className="text-[10px] text-[#7a7468] font-mono mb-1">{d.urlLabel}</div>
        <div className="flex gap-2">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-3 py-2 bg-[#2c2820] text-[#c3e88d] font-mono text-xs rounded-lg border border-[rgba(255,255,255,0.1)] outline-none"
          />
          <button
            onClick={handleFetch}
            disabled={loading}
            className="px-4 py-2 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
            style={{
              background: loading ? "#7a7468" : "#c85c1a",
              color: "#fff",
              boxShadow: loading ? "none" : "0 3px 0 0 #8a3a0a",
            }}
          >
            {loading ? "..." : d.sendBtn}
          </button>
        </div>
      </div>

      {/* Result */}
      {loading && (
        <div className="text-center py-4 font-mono text-xs text-[#7a7468]">
          ⏳ {d.loadingLabel}
        </div>
      )}

      {error && (
        <div className="px-3 py-2.5 rounded-lg border font-mono text-xs"
          style={{ background: "#c85c1a0a", borderColor: "#c85c1a30", color: "#c85c1a" }}>
          ⚠️ {d.errorLabel}: {error}
        </div>
      )}

      {data && (
        <div className="bg-[#2c2820] rounded-lg p-3.5">
          <div className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] mb-2 uppercase tracking-wider">
            {d.resultLabel}:
          </div>
          <div className="font-mono text-xs leading-relaxed max-h-48 overflow-y-auto">
            {Object.entries(data).map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="text-[#ffcb6b] shrink-0">{k}:</span>
                <span className="text-[#c3e88d] break-all">
                  {typeof v === "object" ? JSON.stringify(v) : String(v)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
