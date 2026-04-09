import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.12 — PROJECT: ADMIN PANEL
// ═══════════════════════════════════════════════════════════════════════════════

const STATS = [
  {
    label: "Foydalanuvchilar",
    value: "1,248",
    icon: "👥",
    change: "+12%",
    color: "#185FA5",
  },
  {
    label: "Mahsulotlar",
    value: "342",
    icon: "📦",
    change: "+5%",
    color: "#4a9e60",
  },
  {
    label: "Buyurtmalar",
    value: "89",
    icon: "🛒",
    change: "+23%",
    color: "#c85c1a",
  },
  {
    label: "Daromad",
    value: "$12,840",
    icon: "💰",
    change: "+18%",
    color: "#764abc",
  },
];

const PAGES = [
  { id: "dashboard", icon: "📊", label: "Dashboard" },
  { id: "users", icon: "👥", label: "Foydalanuvchilar" },
  { id: "products", icon: "📦", label: "Mahsulotlar" },
  { id: "settings", icon: "⚙️", label: "Sozlamalar" },
];

export function AdminPanelExplain() {
  const [tab, setTab] = useState("structure");
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["structure", "tech", "demo"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#1a1814" : "#f2efe8",
              borderColor: tab === id ? "#1a1814" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "structure"
              ? "Tuzilma"
              : id === "tech"
                ? "Tech Stack"
                : "Demo"}
          </button>
        ))}
      </div>

      {tab === "structure" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Admin Panel — bu kursning yakuniy loyihasi. Barcha o'rganilgan
            texnologiyalar birgalikda ishlatiladi.
          </p>
          <div className="flex flex-col gap-1.5">
            {[
              { path: "src/", type: "dir", indent: 0, color: "#1a1814" },
              {
                path: "store/index.js",
                type: "file",
                indent: 1,
                color: "#764abc",
                desc: "configureStore",
              },
              {
                path: "slices/authSlice.js",
                type: "file",
                indent: 1,
                color: "#764abc",
                desc: "login/logout",
              },
              {
                path: "slices/usersSlice.js",
                type: "file",
                indent: 1,
                color: "#764abc",
                desc: "CRUD",
              },
              {
                path: "api/usersApi.js",
                type: "file",
                indent: 1,
                color: "#185FA5",
                desc: "RTK Query",
              },
              {
                path: "pages/LoginPage.jsx",
                type: "file",
                indent: 1,
                color: "#c85c1a",
                desc: "Yup + RHF",
              },
              {
                path: "pages/Dashboard.jsx",
                type: "file",
                indent: 1,
                color: "#c85c1a",
                desc: "Charts + stats",
              },
              {
                path: "pages/UsersTable.jsx",
                type: "file",
                indent: 1,
                color: "#c85c1a",
                desc: "Table + filter",
              },
              {
                path: "components/ProtectedRoute.jsx",
                type: "file",
                indent: 1,
                color: "#4a9e60",
                desc: "Auth guard",
              },
              {
                path: "components/Layout.jsx",
                type: "file",
                indent: 1,
                color: "#4a9e60",
                desc: "Sidebar + nav",
              },
            ].map((item) => (
              <div
                key={item.path}
                className="flex items-center gap-2 font-mono text-[10px]"
                style={{ paddingLeft: `${item.indent * 16}px` }}
              >
                <span className="text-[#7a7468]">
                  {item.type === "dir" ? "📁" : "📄"}
                </span>
                <span style={{ color: item.color }}>{item.path}</span>
                {item.desc && (
                  <span className="text-[#7a7468]">— {item.desc}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "tech" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Loyihada ishlatiladigan texnologiyalar:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "Redux Toolkit", desc: "Global state", color: "#764abc" },
              { name: "RTK Query", desc: "API va caching", color: "#764abc" },
              { name: "React Router v6", desc: "Routing", color: "#e44d26" },
              {
                name: "Protected Routes",
                desc: "Auth guard",
                color: "#185FA5",
              },
              { name: "Ant Design", desc: "UI komponenlar", color: "#1677ff" },
              {
                name: "React Hook Form",
                desc: "Form boshqaruv",
                color: "#ec5990",
              },
              { name: "Yup", desc: "Validatsiya", color: "#4a9e60" },
              { name: "recharts", desc: "Grafiklar", color: "#c85c1a" },
              { name: "Axios", desc: "HTTP + interceptor", color: "#5a29e4" },
              { name: "JWT", desc: "Auth tokenlar", color: "#b07820" },
              {
                name: "lazy/Suspense",
                desc: "Code splitting",
                color: "#61dafb",
              },
              { name: "Zustand", desc: "Yengil holatlar", color: "#e38c2a" },
            ].map(({ name, desc, color }) => (
              <div
                key={name}
                className="flex items-center gap-2 p-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.08)]"
              >
                <div
                  className="flex-shrink-0 w-2 h-2 rounded-full"
                  style={{ background: color }}
                />
                <div>
                  <div
                    className="font-mono text-[10px] font-bold"
                    style={{ color }}
                  >
                    {name}
                  </div>
                  <div className="text-[9px] text-[#7a7468]">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <CodeSnippet
            lines={[
              [{ text: "// package.json asosiy deplar:", color: C.cmt }],
              [
                { text: '"@reduxjs/toolkit"', color: C.str },
                { text: ",  ", color: C.op },
                { text: '"react-redux"', color: C.str },
                { text: ",", color: C.op },
              ],
              [
                { text: '"react-router-dom"', color: C.str },
                { text: ",  ", color: C.op },
                { text: '"antd"', color: C.str },
                { text: ",", color: C.op },
              ],
              [
                { text: '"react-hook-form"', color: C.str },
                { text: ",  ", color: C.op },
                { text: '"yup"', color: C.str },
                { text: ",  ", color: C.op },
                { text: '"@hookform/resolvers"', color: C.str },
                { text: ",", color: C.op },
              ],
              [
                { text: '"recharts"', color: C.str },
                { text: ",  ", color: C.op },
                { text: '"axios"', color: C.str },
                { text: ",  ", color: C.op },
                { text: '"zustand"', color: C.str },
              ],
            ]}
          />
        </div>
      )}

      {tab === "demo" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Admin Panel prototip ko'rinishi:
          </p>
          <div
            className="bg-[#1a1814] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]"
            style={{ minHeight: 300 }}
          >
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-36 bg-[#0f0d0a] p-3 flex flex-col gap-1 border-r border-[rgba(255,255,255,0.06)]">
                <div className="px-1 mb-3 font-mono text-xs font-black text-white">
                  ⬡ Admin
                </div>
                {PAGES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePage(p.id)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-lg border-none cursor-pointer transition-all text-left"
                    style={{
                      background:
                        activePage === p.id
                          ? "rgba(255,255,255,0.08)"
                          : "transparent",
                      color:
                        activePage === p.id ? "#fff" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    <span className="text-sm">{p.icon}</span>
                    <span className="font-mono text-[10px]">{p.label}</span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-4">
                {activePage === "dashboard" && (
                  <div>
                    <div className="mb-3 font-mono text-xs font-bold text-white">
                      Dashboard
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {STATS.map(({ label, value, icon, change, color }) => (
                        <div
                          key={label}
                          className="p-3 rounded-xl"
                          style={{
                            background: `${color}15`,
                            border: `1px solid ${color}30`,
                          }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[10px] text-[rgba(255,255,255,0.5)]">
                              {label}
                            </span>
                            <span className="text-sm">{icon}</span>
                          </div>
                          <div className="font-mono text-sm font-black text-white">
                            {value}
                          </div>
                          <div
                            className="font-mono text-[9px]"
                            style={{ color }}
                          >
                            {change} bu oy
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activePage === "users" && (
                  <div>
                    <div className="mb-3 font-mono text-xs font-bold text-white">
                      Foydalanuvchilar
                    </div>
                    {["Ali Karimov", "Zulfiya Nazarova", "Bobur Toshmatov"].map(
                      (n) => (
                        <div
                          key={n}
                          className="flex items-center gap-2 px-2 py-2 rounded-lg mb-1 border border-[rgba(255,255,255,0.06)]"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#764abc] flex items-center justify-center font-mono text-[10px] text-white">
                            {n[0]}
                          </div>
                          <span className="font-mono text-[10px] text-white">
                            {n}
                          </span>
                          <span
                            className="ml-auto font-mono text-[9px] px-1.5 py-0.5 rounded"
                            style={{
                              background: "#4a9e6020",
                              color: "#4a9e60",
                            }}
                          >
                            faol
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                )}
                {activePage === "products" && (
                  <div>
                    <div className="mb-3 font-mono text-xs font-bold text-white">
                      Mahsulotlar
                    </div>
                    {[
                      ["MacBook Pro", "$2399"],
                      ["iPhone 15", "$1199"],
                      ["AirPods", "$249"],
                    ].map(([n, p]) => (
                      <div
                        key={n}
                        className="flex items-center gap-2 px-2 py-2 rounded-lg mb-1 border border-[rgba(255,255,255,0.06)]"
                      >
                        <span className="font-mono text-[10px] text-white flex-1">
                          {n}
                        </span>
                        <span
                          className="font-mono text-[10px] font-bold"
                          style={{ color: "#4a9e60" }}
                        >
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {activePage === "settings" && (
                  <div>
                    <div className="mb-3 font-mono text-xs font-bold text-white">
                      Sozlamalar
                    </div>
                    <div className="font-mono text-[10px] text-[rgba(255,255,255,0.4)]">
                      Profil · Xavfsizlik · Bildirishnomalar
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
