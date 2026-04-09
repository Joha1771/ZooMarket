import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.8 — SWAGGER, POSTMAN, FORMDATA
// ═══════════════════════════════════════════════════════════════════════════════

export function SwaggerExplain() {
  const [tab, setTab] = useState("auth");
  const [step, setStep] = useState(0);

  const authSteps = [
    {
      icon: "📝",
      title: "Register",
      desc: "POST /auth/register — email + parol yuborish",
      code: 'body: { email: "ali@ex.com", password: "pass123" }',
    },
    {
      icon: "🔑",
      title: "Login",
      desc: "POST /auth/login — token olish",
      code: 'response: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }',
    },
    {
      icon: "💾",
      title: "Token saqlash",
      desc: "localStorage'ga saqlash",
      code: 'localStorage.setItem("token", data.token)',
    },
    {
      icon: "🛡️",
      title: "Authorization header",
      desc: "Har so'rovga token qo'shish",
      code: 'headers: { "Authorization": "Bearer <token>" }',
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["auth", "token", "formdata"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#b07820" : "#f2efe8",
              borderColor: tab === id ? "#b07820" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "auth"
              ? "Auth Flow"
              : id === "token"
                ? "JWT Token"
                : "FormData"}
          </button>
        ))}
      </div>

      {tab === "auth" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Autentifikatsiya — foydalanuvchi kim ekanligini tekshirish. JWT
            token — server tomonidan berilgan "pasport".
          </p>
          <div className="flex flex-col gap-2">
            {authSteps.map((s, i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className="flex items-start gap-3 p-3 text-left transition-all border cursor-pointer rounded-xl"
                style={{
                  background: step === i ? "#b0782010" : "#f2efe8",
                  borderColor: step === i ? "#b07820" : "rgba(26,24,20,0.10)",
                }}
              >
                <span className="text-xl">{s.icon}</span>
                <div className="flex-1">
                  <div className="font-mono text-xs font-bold text-[#1a1814]">
                    {s.title}
                  </div>
                  <div className="text-[10px] text-[#7a7468]">{s.desc}</div>
                  {step === i && (
                    <div className="mt-1.5 bg-[#2c2820] rounded p-1.5 font-mono text-[10px] text-[#c3e88d]">
                      {s.code}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          <CodeSnippet
            lines={[
              [
                {
                  text: "// Axios interceptor — avtomatik token:",
                  color: C.cmt,
                },
              ],
              [
                {
                  text: "api.interceptors.request.use((config) => {",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [
                { text: "  const ", color: C.kw },
                { text: "token", color: C.fn },
                { text: " = localStorage.getItem(", color: C.op },
                { text: "'token'", color: C.str },
                { text: ");", color: C.op },
              ],
              [
                {
                  text: "  if (token) config.headers.Authorization = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "`Bearer ${token}`", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "  return config;", color: "rgba(255,255,255,0.7)" }],
              [{ text: "});", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "token" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            JWT token 3 qismdan iborat (nuqta bilan ajratilgan):
          </p>
          <div className="bg-[#1a1814] rounded-xl p-3 border border-[rgba(255,255,255,0.08)] font-mono text-[10px] leading-relaxed break-all">
            <span style={{ color: "#e06c75" }}>
              eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
            </span>
            <span className="text-[rgba(255,255,255,0.3)]">.</span>
            <span style={{ color: "#c3e88d" }}>
              eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsaSIsImlhdCI6MTUxNjIzOTAyMn0
            </span>
            <span className="text-[rgba(255,255,255,0.3)]">.</span>
            <span style={{ color: "#82aaff" }}>
              SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              {
                label: "Header",
                color: "#e06c75",
                desc: "Algorithm & token type",
              },
              {
                label: "Payload",
                color: "#c3e88d",
                desc: "User data (id, role, exp)",
              },
              {
                label: "Signature",
                color: "#82aaff",
                desc: "Verification hash",
              },
            ].map(({ label, color, desc }) => (
              <div
                key={label}
                className="p-2.5 rounded-xl border"
                style={{ background: `${color}10`, borderColor: `${color}40` }}
              >
                <div
                  className="font-mono text-xs font-bold mb-0.5"
                  style={{ color }}
                >
                  {label}
                </div>
                <div className="text-[9px] text-[#7a7468]">{desc}</div>
              </div>
            ))}
          </div>
          <InfoBox color="#b07820" icon="⚠️">
            Token localStorage'da saqlanadi. XSS hujumidan himoya uchun{" "}
            <Tag color="#b07820">httpOnly cookie</Tag> afzalroq (backend bilan
            kelishilgan holda).
          </InfoBox>
        </div>
      )}

      {tab === "formdata" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            FormData — fayl va oddiy maydonlarni birga jo'natish uchun. JSON
            jo'natib bo'lmaydi:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "async function ", color: C.kw },
                { text: "uploadAvatar", color: C.fn },
                { text: "(file) {", color: C.op },
              ],
              [
                { text: "  const ", color: C.kw },
                { text: "formData", color: C.fn },
                { text: " = new ", color: C.op },
                { text: "FormData", color: C.fn },
                { text: "();", color: C.op },
              ],
              [
                { text: "  formData.append(", color: "rgba(255,255,255,0.7)" },
                { text: "'avatar'", color: C.str },
                { text: ", file);        ", color: C.op },
                { text: "// fayl", color: C.cmt },
              ],
              [
                { text: "  formData.append(", color: "rgba(255,255,255,0.7)" },
                { text: "'userId'", color: C.str },
                { text: ", ", color: C.op },
                { text: "'123'", color: C.str },
                { text: ");  ", color: C.op },
                { text: "// matn", color: C.cmt },
              ],
              [{ text: "" }],
              [
                { text: "  await api.post(", color: "rgba(255,255,255,0.7)" },
                { text: "'/upload'", color: C.str },
                { text: ", formData, {", color: C.op },
              ],
              [
                {
                  text: "    headers: { 'Content-Type': ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'multipart/form-data'", color: C.str },
                { text: " },", color: C.op },
              ],
              [
                {
                  text: "    onUploadProgress: (e) => {",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [
                { text: "      const ", color: C.kw },
                { text: "pct", color: C.fn },
                { text: " = (e.loaded / e.total * ", color: C.op },
                { text: "100", color: C.num },
                { text: ").toFixed(0);", color: C.op },
              ],
              [
                { text: "      console.log(", color: "rgba(255,255,255,0.7)" },
                { text: "`Yuklash: ${pct}%`", color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "    }", color: C.op }],
              [{ text: "  });", color: C.op }],
              [{ text: "}", color: C.op }],
            ]}
          />
        </div>
      )}
    </div>
  );
}
