import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.8 — REACT ROUTER DOM
// ═══════════════════════════════════════════════════════════════════════════════

export function RouterDomExplain() {
  const [tab, setTab] = useState("setup");
  const [activePage, setActivePage] = useState("home");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["setup", "navigate", "nested"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#61DAFB" : "#f2efe8",
              borderColor: tab === id ? "#61DAFB" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#0a1a20" : "#1a1814",
            }}
          >
            {id === "setup"
              ? "Setup"
              : id === "navigate"
                ? "Navigatsiya"
                : "Nested"}
          </button>
        ))}
      </div>

      {tab === "setup" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React Router DOM — React'da routing uchun:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// main.jsx\nimport { BrowserRouter } from 'react-router-dom';\n\n<BrowserRouter>\n  <App />\n</BrowserRouter>`}
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// App.jsx\nimport { Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path="/" element={<HomePage />} />\n      <Route path="/cart" element={<CartPage />} />\n      <Route path="/user/:id" element={<UserPage />} />\n      <Route path="*" element={<NotFound />} />\n    </Routes>\n  );\n}`}
          </div>
        </div>
      )}

      {tab === "navigate" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Link/NavLink — sahifalar orasida o'tish. useNavigate — kod orqali:
          </p>

          {/* Demo navbar */}
          <div className="p-3 rounded-xl bg-[#1a1814] border border-[rgba(255,255,255,0.08)]">
            <div className="font-mono text-[10px] text-[rgba(255,255,255,0.3)] mb-2">
              Demo navigation:
            </div>
            <div className="flex gap-2">
              {["home", "about", "cart"].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className="px-3 py-1.5 rounded-lg font-mono text-xs cursor-pointer border-none transition-all"
                  style={{
                    background:
                      activePage === page
                        ? "#61DAFB"
                        : "rgba(255,255,255,0.08)",
                    color:
                      activePage === page ? "#0a1a20" : "rgba(255,255,255,0.6)",
                  }}
                >
                  /{page}
                </button>
              ))}
            </div>
            <div className="mt-2 font-mono text-xs text-[rgba(255,255,255,0.4)]">
              Hozirgi sahifa:{" "}
              <span style={{ color: "#61DAFB" }}>/{activePage}</span>
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "import ", color: C.kw },
                { text: "{ NavLink, useNavigate }", color: C.fn },
                { text: " from ", color: C.op },
                { text: "'react-router-dom'", color: C.str },
              ],
              [{ text: "" }],
              [
                {
                  text: "// NavLink — active class avtomatik qo'shadi",
                  color: C.cmt,
                },
              ],
              [
                { text: "<NavLink ", color: "#e34c26" },
                { text: "to", color: "#c792ea" },
                { text: '="/"', color: C.str },
                { text: ">Home</NavLink>", color: "#e34c26" },
              ],
              [{ text: "" }],
              [{ text: "// useNavigate — kod orqali o'tish", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "navigate", color: C.fn },
                { text: " = ", color: C.op },
                { text: "useNavigate", color: C.fn },
                { text: "();", color: C.op },
              ],
              [
                { text: "navigate", color: C.fn },
                { text: "('/cart');", color: C.op },
                { text: "  // login muvaffaqiyatli bo'lsa", color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "nested" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Nested routes — layout ichida sahifalar. Outlet — child render joyi:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// Nested routes\n<Routes>\n  <Route path="/" element={<Layout />}>\n    <Route index element={<HomePage />} />\n    <Route path="about" element={<AboutPage />} />\n    <Route path="users/:id" element={<UserPage />} />\n  </Route>\n</Routes>\n\n// Layout.jsx — Outlet kerak!\nfunction Layout() {\n  return (\n    <>\n      <Navbar />\n      <Outlet />  {/* Child shu yerda render */}\n    </>\n  );\n}`}
          </div>
          <InfoBox color="#61DAFB" icon="💡">
            <code>useParams()</code> — URL parametrlarini olish uchun.{" "}
            <code>/users/42</code> → <code>{`{ id: "42" }`}</code>
          </InfoBox>
        </div>
      )}
    </div>
  );
}
