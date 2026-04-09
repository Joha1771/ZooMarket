// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 5.12 — EXAM: SPA WITHOUT A FRAMEWORK
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";

export function SpaExamExplain({ t }) {
  const d = t("lessons.spa-exam.explain");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* What is SPA */}
      <div className="p-3.5 rounded-xl border" style={{ background: "#c85c1a08", borderColor: "#c85c1a25" }}>
        <div className="font-mono text-xs font-bold text-[#c85c1a] mb-1">{d.whatLabel}</div>
        <p className="text-xs text-[#1a1814] leading-relaxed">{d.whatDesc}</p>
      </div>

      {/* Requirements grid */}
      <div className="grid grid-cols-2 gap-2">
        {d.requirements.map(({ icon, title, desc }) => (
          <div key={title} className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="text-xl mb-1.5">{icon}</div>
            <div className="font-mono text-xs font-bold text-[#1a1814] mb-0.5">{title}</div>
            <div className="text-[11px] text-[#7a7468] leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <div>
        <div className="font-mono text-[10px] text-[#7a7468] uppercase tracking-wider mb-2">
          {d.architectureLabel}
        </div>
        <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
          <div className="text-[#c3e88d]">spa-app/</div>
          <div className="text-[#82aaff] pl-3">├── index.html</div>
          <div className="text-[#f78c6c] pl-3">├── style.css</div>
          <div className="text-[#c792ea] pl-3">├── main.js         <span className="text-[rgba(255,255,255,0.3)]">// entry</span></div>
          <div className="text-[#ffcb6b] pl-3">├── router.js       <span className="text-[rgba(255,255,255,0.3)]">// hash router</span></div>
          <div className="text-[#c3e88d] pl-3">├── pages/</div>
          <div className="text-[rgba(255,255,255,0.5)] pl-6">├── home.js</div>
          <div className="text-[rgba(255,255,255,0.5)] pl-6">├── about.js</div>
          <div className="text-[rgba(255,255,255,0.5)] pl-6">└── todos.js</div>
          <div className="text-[#c3e88d] pl-3">└── api.js          <span className="text-[rgba(255,255,255,0.3)]">// fetch</span></div>
        </div>
      </div>

      <div className="p-3 rounded-lg border text-xs leading-relaxed"
        style={{ background: "#4a9e600a", borderColor: "#4a9e6025" }}>
        <span className="font-bold text-[#4a9e60]">💡 </span>
        <span className="text-[#1a1814]">{d.tip}</span>
      </div>
    </div>
  );
}

export function SpaExamLearn({ t }) {
  const [currentPage, setCurrentPage] = useState("home");
  const d = t("lessons.spa-exam.learn");

  const pages = {
    home: {
      label: "🏠 Home",
      color: "#4a9e60",
      content: (
        <div className="flex flex-col gap-3">
          <div className="text-lg font-bold text-[#1a1814]">Bosh sahifa</div>
          <div className="text-sm text-[#7a7468]">Hash: <code className="font-mono text-[#c85c1a]">#/home</code></div>
          <div className="grid grid-cols-2 gap-2">
            {["DOM", "Events", "Fetch", "Storage"].map((t) => (
              <div key={t} className="p-3 bg-[#f2efe8] rounded-lg border border-[rgba(26,24,20,0.1)] text-center font-mono text-xs text-[#1a1814]">
                {t}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    todos: {
      label: "✅ Todos",
      color: "#185FA5",
      content: (
        <div className="flex flex-col gap-3">
          <div className="text-lg font-bold text-[#1a1814]">Vazifalar</div>
          <div className="text-sm text-[#7a7468]">Hash: <code className="font-mono text-[#c85c1a]">#/todos</code></div>
          {["JS o'rganish", "SPA yasash", "Deploy qilish"].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 px-3 py-2 bg-[#f2efe8] rounded-lg border border-[rgba(26,24,20,0.1)]">
              <div className="w-4 h-4 rounded border-2 border-[#185FA5] flex items-center justify-center">
                {i < 1 && <span className="text-[#185FA5] text-[10px]">✓</span>}
              </div>
              <span className="text-sm text-[#1a1814]">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    api: {
      label: "🌐 API",
      color: "#c85c1a",
      content: (
        <div className="flex flex-col gap-3">
          <div className="text-lg font-bold text-[#1a1814]">API Ma'lumotlar</div>
          <div className="text-sm text-[#7a7468]">Hash: <code className="font-mono text-[#c85c1a]">#/api</code></div>
          <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
            <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-1">GET /posts/1</div>
            <div className="text-[#ffcb6b]">id: <span className="text-[#c3e88d]">1</span></div>
            <div className="text-[#ffcb6b]">title: <span className="text-[#c3e88d]">"sunt aut..."</span></div>
            <div className="text-[#ffcb6b]">userId: <span className="text-[#c3e88d]">1</span></div>
          </div>
        </div>
      ),
    },
    about: {
      label: "ℹ️ About",
      color: "#993556",
      content: (
        <div className="flex flex-col gap-3">
          <div className="text-lg font-bold text-[#1a1814]">Loyiha haqida</div>
          <div className="text-sm text-[#7a7468]">Hash: <code className="font-mono text-[#c85c1a]">#/about</code></div>
          <div className="p-3 bg-[#f2efe8] rounded-lg border border-[rgba(26,24,20,0.1)]">
            <div className="text-xs text-[#7a7468] leading-relaxed">
              Bu loyiha vanilla JavaScript bilan yaratilgan. Framework ishlatilmagan. Router hash orqali ishlaydi.
            </div>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">{d.intro}</p>

      {/* SPA Shell */}
      <div className="border border-[rgba(26,24,20,0.12)] rounded-xl overflow-hidden">
        {/* Nav bar */}
        <div className="bg-[#1a1814] px-3 py-2.5 flex items-center gap-1.5">
          <div className="flex gap-1 mr-2">
            {["#f66", "#fa0", "#5a5"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
          <div className="flex-1 bg-[rgba(255,255,255,0.08)] rounded px-2 py-0.5 font-mono text-[10px] text-[rgba(255,255,255,0.4)]">
            localhost:3000/<span className="text-[#c3e88d]">#{currentPage === "home" ? "/home" : `/${currentPage}`}</span>
          </div>
        </div>

        {/* Page nav */}
        <div className="bg-[#f2efe8] border-b border-[rgba(26,24,20,0.08)] px-2 py-2 flex gap-1">
          {Object.entries(pages).map(([id, page]) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className="px-2.5 py-1.5 rounded-lg font-mono text-[11px] font-bold cursor-pointer border transition-all"
              style={{
                background: currentPage === id ? page.color : "white",
                borderColor: currentPage === id ? page.color : "rgba(26,24,20,0.08)",
                color: currentPage === id ? "#fff" : "#7a7468",
              }}
            >
              {page.label}
            </button>
          ))}
        </div>

        {/* Page content */}
        <div className="p-4 bg-white min-h-[160px]">
          {pages[currentPage].content}
        </div>
      </div>

      {/* Router code */}
      <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose">
        <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2">// router.js — hash router:</div>
        <div>
          <span className="text-[#82aaff]">window</span>
          <span className="text-[rgba(255,255,255,0.5)]">.</span>
          <span className="text-[#ffcb6b]">addEventListener</span>
          <span className="text-[rgba(255,255,255,0.5)]">{"('hashchange', () => {"}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#82aaff]">const</span>{" "}
          <span className="text-[#c3e88d]">page</span>
          <span className="text-[rgba(255,255,255,0.5)]"> = </span>
          <span className="text-[#82aaff]">location</span>
          <span className="text-[rgba(255,255,255,0.5)]">.hash.</span>
          <span className="text-[#ffcb6b]">slice</span>
          <span className="text-[rgba(255,255,255,0.5)]">{"(2)"}</span>
          <span className="text-[rgba(255,255,255,0.3)]"> || 'home';</span>
        </div>
        <div className="pl-4 text-[rgba(255,255,255,0.4)]">render(page);</div>
        <div className="text-[rgba(255,255,255,0.5)]">{"});"}</div>
      </div>
    </div>
  );
}
