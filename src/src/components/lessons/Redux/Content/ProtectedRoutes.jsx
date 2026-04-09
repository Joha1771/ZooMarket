import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.5 — PROTECTED ROUTES & AUTHENTICATION
// ═══════════════════════════════════════════════════════════════════════════════

export function ProtectedExplain() {
  const [tab, setTab] = useState("flow");
  const [isAuth, setIsAuth] = useState(false);
  const [currentPath, setCurrentPath] = useState("/login");

  const navigate = (path) => {
    if (["/dashboard", "/profile"].includes(path) && !isAuth) {
      setCurrentPath("/login");
    } else {
      setCurrentPath(path);
    }
  };

  const login = () => {
    setIsAuth(true);
    setCurrentPath("/dashboard");
  };
  const logout = () => {
    setIsAuth(false);
    setCurrentPath("/login");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["flow", "code", "demo"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#185FA5" : "#f2efe8",
              borderColor: tab === id ? "#185FA5" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "flow" ? "Auth Flow" : id === "code" ? "Kod" : "Demo"}
          </button>
        ))}
      </div>

      {tab === "flow" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Protected route — foydalanuvchi autentifikatsiya bo'lmasa,
            himoyalangan sahifaga kirishini taqiqlaydi.
          </p>
          {[
            {
              step: "1",
              icon: "🔑",
              label: "Login",
              desc: "Email + parol → server /auth/login",
              color: "#c85c1a",
            },
            {
              step: "2",
              icon: "🎟️",
              label: "Token",
              desc: "Server JWT token qaytaradi → localStorage",
              color: "#185FA5",
            },
            {
              step: "3",
              icon: "🛡️",
              label: "ProtectedRoute",
              desc: "Token bor → sahifani ko'rsat, yo'q → /login",
              color: "#764abc",
            },
            {
              step: "4",
              icon: "🚪",
              label: "Navigate",
              desc: "401 xato → token o'chir → /login ga yo'nalt",
              color: "#4a9e60",
            },
          ].map(({ step, icon, label, desc, color }) => (
            <div
              key={step}
              className="flex items-start gap-3 p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div
                className="flex items-center justify-center flex-shrink-0 w-6 h-6 font-mono text-xs font-bold text-white rounded-full"
                style={{ background: color }}
              >
                {step}
              </div>
              <div>
                <div className="font-mono text-xs font-bold text-[#1a1814]">
                  {icon} {label}
                </div>
                <div className="text-[10px] text-[#7a7468]">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "code" && (
        <div className="flex flex-col gap-3">
          <div className="text-[10px] font-mono text-[#7a7468] mb-1">
            ProtectedRoute komponenti:
          </div>
          <CodeSnippet
            lines={[
              [
                { text: "function ", color: C.kw },
                { text: "ProtectedRoute", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "  const ", color: C.kw },
                { text: "token", color: C.fn },
                { text: " = localStorage.getItem(", color: C.op },
                { text: "'token'", color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "  return ", color: C.kw },
                { text: "token", color: C.fn },
              ],
              [
                { text: "    ? ", color: C.op },
                { text: "<Outlet />", color: C.str },
                { text: "  ", color: C.op },
                { text: "// ✓ Ko'rsat", color: C.cmt },
              ],
              [
                { text: "    : ", color: C.op },
                { text: "<Navigate ", color: C.str },
                { text: 'to="', color: C.str },
                { text: "/login", color: C.fn },
                { text: '" replace />', color: C.str },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />
          <div className="text-[10px] font-mono text-[#7a7468] mb-1">
            Router tuzilmasi:
          </div>
          <CodeSnippet
            lines={[
              [
                { text: "createBrowserRouter", color: C.fn },
                { text: "([", color: C.op },
              ],
              [
                {
                  text: "  { path: '/', element: <Layout />, children: [",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [
                {
                  text: "    { path: 'login', element: <Login /> },",
                  color: "rgba(255,255,255,0.5)",
                },
              ],
              [{ text: "    {", color: "rgba(255,255,255,0.7)" }],
              [
                { text: "      element: ", color: "rgba(255,255,255,0.7)" },
                { text: "<ProtectedRoute />", color: C.fn },
                { text: ",  // Guard", color: C.cmt },
              ],
              [{ text: "      children: [", color: "rgba(255,255,255,0.7)" }],
              [
                {
                  text: "        { path: 'dashboard', element: <Dashboard /> },",
                  color: "rgba(255,255,255,0.5)",
                },
              ],
              [
                {
                  text: "        { path: 'posts/:id', element: <Post /> },  ",
                  color: "rgba(255,255,255,0.5)",
                },
                { text: "// Dynamic", color: C.cmt },
              ],
              [{ text: "      ]", color: "rgba(255,255,255,0.7)" }],
              [{ text: "    }", color: "rgba(255,255,255,0.7)" }],
              [{ text: "  ]}", color: "rgba(255,255,255,0.7)" }],
              [{ text: "]);", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "demo" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Login/logout bosing va protected route'lar qanday ishlashini
            ko'ring:
          </p>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: isAuth ? "#4a9e60" : "#e06c75" }}
                />
                <span
                  className="font-mono text-xs"
                  style={{ color: isAuth ? "#4a9e60" : "#e06c75" }}
                >
                  {isAuth ? "Autentifikatsiya bo'lgan" : "Mehmon (token yo'q)"}
                </span>
              </div>
              <button
                onClick={isAuth ? logout : login}
                className="px-3 py-1.5 rounded font-mono text-[10px] font-bold border-none cursor-pointer"
                style={{
                  background: isAuth ? "#e06c7520" : "#4a9e6020",
                  color: isAuth ? "#e06c75" : "#4a9e60",
                }}
              >
                {isAuth ? "Logout" : "Login"}
              </button>
            </div>
            <div className="flex flex-col gap-1.5">
              {["/", "/login", "/dashboard", "/profile"].map((path) => {
                const isProtected = ["/dashboard", "/profile"].includes(path);
                const canAccess = !isProtected || isAuth;
                return (
                  <button
                    key={path}
                    onClick={() => navigate(path)}
                    className="flex items-center gap-2 px-3 py-2 text-left transition-all border rounded-lg cursor-pointer"
                    style={{
                      background: currentPath === path ? "#185FA515" : "white",
                      borderColor:
                        currentPath === path
                          ? "#185FA5"
                          : "rgba(26,24,20,0.10)",
                    }}
                  >
                    <span
                      className="flex-1 font-mono text-xs"
                      style={{ color: canAccess ? "#1a1814" : "#7a7468" }}
                    >
                      {path}
                    </span>
                    {isProtected && (
                      <span
                        className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                        style={{
                          background: isAuth ? "#4a9e6015" : "#e06c7515",
                          color: isAuth ? "#4a9e60" : "#e06c75",
                        }}
                      >
                        {isAuth ? "🔓 Ochiq" : "🔒 Himoyalangan"}
                      </span>
                    )}
                    {currentPath === path && (
                      <span className="text-[#185FA5] text-xs">◉</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
