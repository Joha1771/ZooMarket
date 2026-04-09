import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.11 — ASYNC/AWAIT AND FETCH API
// ═══════════════════════════════════════════════════════════════════════════════

export function AsyncAwaitExplain() {
  const [tab, setTab] = useState("asyncawait");
  const [fetchStatus, setFetchStatus] = useState("idle");
  const [fetchData, setFetchData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [userId, setUserId] = useState("1");

  const runFetch = async () => {
    setFetchStatus("loading");
    setFetchData(null);
    setFetchError(null);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setFetchData({
        name: data.name,
        email: data.email,
        city: data.address?.city,
      });
      setFetchStatus("success");
    } catch (err) {
      setFetchError(err.message);
      setFetchStatus("error");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "asyncawait", label: "async/await" },
          { id: "fetch", label: "Fetch API" },
          { id: "crud", label: "CRUD" },
          { id: "compare", label: "Promise vs await" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "asyncawait" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <Tag color="#c85c1a">async/await</Tag> — Promise bilan ishlashning
            yangi, o'qilishi oson usuli. Kod sinxron ko'rinishda yoziladi.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] font-mono text-[#e06c75] mb-1.5">
                Promise chaining:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "function ", color: C.kw },
                    { text: "getUser", color: C.fn },
                    { text: "() {", color: C.op },
                  ],
                  [
                    { text: "  return ", color: C.kw },
                    { text: "fetch(", color: C.fn },
                    { text: "url", color: C.fn },
                    { text: ")", color: C.op },
                  ],
                  [
                    { text: "    .then(", color: C.op },
                    { text: "res => res.", color: C.fn },
                    { text: "json", color: C.fn },
                    { text: "())", color: C.op },
                  ],
                  [
                    { text: "    .then(", color: C.op },
                    { text: "data => {", color: C.op },
                  ],
                  [
                    { text: "      console.log(", color: C.fn },
                    { text: "data", color: C.fn },
                    { text: ");", color: C.op },
                  ],
                  [{ text: "    })", color: C.op }],
                  [
                    { text: "    .catch(", color: C.op },
                    { text: "err => ...", color: C.fn },
                    { text: ");", color: C.op },
                  ],
                  [{ text: "}", color: C.op }],
                ]}
              />
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#4a9e60] mb-1.5">
                ✓ async/await:
              </div>
              <CodeSnippet
                lines={[
                  [
                    { text: "async function ", color: C.kw },
                    { text: "getUser", color: C.fn },
                    { text: "() {", color: C.op },
                  ],
                  [{ text: "  try {", color: C.kw }],
                  [
                    { text: "    const ", color: C.kw },
                    { text: "res", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: "await ", color: C.kw },
                    { text: "fetch(", color: C.fn },
                    { text: "url", color: C.fn },
                    { text: ");", color: C.op },
                  ],
                  [
                    { text: "    const ", color: C.kw },
                    { text: "data", color: C.fn },
                    { text: " = ", color: C.op },
                    { text: "await ", color: C.kw },
                    { text: "res.", color: C.fn },
                    { text: "json", color: C.fn },
                    { text: "();", color: C.op },
                  ],
                  [
                    { text: "    console.log(", color: C.fn },
                    { text: "data", color: C.fn },
                    { text: ");", color: C.op },
                  ],
                  [
                    { text: "  } ", color: C.kw },
                    { text: "catch ", color: C.kw },
                    { text: "(err) {", color: C.op },
                  ],
                  [
                    { text: "    console.error(", color: C.fn },
                    { text: "err", color: C.fn },
                    { text: ");", color: C.op },
                  ],
                  [{ text: "  }", color: C.op }],
                  [{ text: "}", color: C.op }],
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <InfoBox color="#4a9e60" icon="✓">
              <strong>async</strong> funksiya har doim Promise qaytaradi.{" "}
              <code>return 5</code> → <code>Promise.resolve(5)</code>
            </InfoBox>
            <InfoBox color="#185FA5" icon="💡">
              <strong>await</strong> faqat async funksiya ichida ishlaydi.
              Promise fulfil bo'lguncha kutadi.
            </InfoBox>
          </div>
        </div>
      )}

      {tab === "fetch" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Fetch API</strong> — HTTP
            so'rovlar uchun zamonaviy brauzer API si.
          </p>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              JSONPlaceholder API dan foydalanuvchi olish:
            </div>
            <div className="flex gap-2 mb-2">
              <select
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="flex-1 px-3 py-2 bg-white border border-[rgba(26,24,20,0.10)] rounded-lg text-sm outline-none"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    User #{n}
                  </option>
                ))}
              </select>
              <button
                onClick={runFetch}
                className="px-4 py-2 font-mono text-xs font-bold text-white border-none rounded-lg cursor-pointer"
                style={{
                  background: "#c85c1a",
                  boxShadow: "0 2px 0 0 #8a3a0a",
                }}
              >
                {fetchStatus === "loading" ? "⏳" : "GET →"}
              </button>
            </div>

            {fetchStatus === "loading" && (
              <div
                className="p-2.5 rounded-lg text-center font-mono text-xs text-[#b07820]"
                style={{ background: "#b0782015" }}
              >
                ⏳ So'rov yuborilmoqda...
              </div>
            )}
            {fetchStatus === "success" && fetchData && (
              <div
                className="p-2.5 rounded-lg"
                style={{
                  background: "#4a9e6015",
                  border: "1px solid #4a9e6040",
                }}
              >
                {Object.entries(fetchData).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex gap-2 font-mono text-[10px] mb-0.5"
                  >
                    <span className="text-[#4a9e60] w-10">{k}:</span>
                    <span className="text-[#1a1814]">{v}</span>
                  </div>
                ))}
              </div>
            )}
            {fetchStatus === "error" && (
              <div
                className="p-2.5 rounded-lg font-mono text-xs text-[#e06c75]"
                style={{ background: "#e06c7515" }}
              >
                ✗ {fetchError}
              </div>
            )}
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "async function ", color: C.kw },
                { text: "getUser", color: C.fn },
                { text: "(id) {", color: C.op },
              ],
              [{ text: "  try {", color: C.kw }],
              [
                { text: "    const ", color: C.kw },
                { text: "res", color: C.fn },
                { text: " = ", color: C.op },
                { text: "await ", color: C.kw },
                { text: "fetch(", color: C.fn },
                { text: "`/users/${id}`", color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "    if (!", color: C.op },
                { text: "res.", color: C.fn },
                { text: "ok", color: C.fn },
                { text: ") throw new ", color: C.kw },
                { text: "Error(", color: C.fn },
                { text: "`HTTP ${res.status}`", color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "    const ", color: C.kw },
                { text: "data", color: C.fn },
                { text: " = ", color: C.op },
                { text: "await ", color: C.kw },
                { text: "res.", color: C.fn },
                { text: "json()", color: C.fn },
                { text: ";", color: C.op },
              ],
              [
                { text: "    return ", color: C.kw },
                { text: "data", color: C.fn },
                { text: ";", color: C.op },
              ],
              [
                { text: "  } ", color: C.kw },
                { text: "catch ", color: C.kw },
                { text: "(err) {", color: C.op },
              ],
              [
                { text: "    console.error(", color: C.fn },
                { text: '"Xato:"', color: C.str },
                { text: ", ", color: C.op },
                { text: "err", color: C.fn },
                { text: ");", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "}", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "crud" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">CRUD</strong> — Create, Read,
            Update, Delete. HTTP metodlari bilan mos keladi.
          </p>

          <div className="grid grid-cols-2 gap-2 mb-1">
            {[
              { crud: "Create", http: "POST", color: "#4a9e60" },
              { crud: "Read", http: "GET", color: "#185FA5" },
              { crud: "Update", http: "PUT / PATCH", color: "#c85c1a" },
              { crud: "Delete", http: "DELETE", color: "#e06c75" },
            ].map(({ crud, http, color }) => (
              <div
                key={crud}
                className="flex items-center gap-2 p-2.5 rounded-lg border"
                style={{ background: color + "10", borderColor: color + "30" }}
              >
                <span
                  className="font-mono text-xs font-bold w-14"
                  style={{ color }}
                >
                  {crud}
                </span>
                <span className="font-mono text-[10px] text-[#1a1814]">
                  {http}
                </span>
              </div>
            ))}
          </div>

          {[
            {
              title: "GET — o'qish:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "res", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "await ", color: C.kw },
                  { text: "fetch(", color: C.fn },
                  { text: '"/api/posts"', color: C.str },
                  { text: ");", color: C.op },
                ],
                [
                  { text: "const ", color: C.kw },
                  { text: "posts", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "await ", color: C.kw },
                  { text: "res.", color: C.fn },
                  { text: "json()", color: C.fn },
                  { text: ";", color: C.op },
                ],
              ],
            },
            {
              title: "POST — yaratish:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "res", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "await ", color: C.kw },
                  { text: "fetch(", color: C.fn },
                  { text: '"/api/posts"', color: C.str },
                  { text: ", {", color: C.op },
                ],
                [
                  { text: "  method: ", color: "rgba(255,255,255,0.7)" },
                  { text: '"POST"', color: C.str },
                  { text: ",", color: C.op },
                ],
                [
                  { text: "  headers: { ", color: "rgba(255,255,255,0.7)" },
                  { text: '"Content-Type"', color: C.str },
                  { text: ": ", color: C.op },
                  { text: '"application/json"', color: C.str },
                  { text: " },", color: C.op },
                ],
                [
                  { text: "  body: ", color: "rgba(255,255,255,0.7)" },
                  { text: "JSON.", color: C.fn },
                  { text: "stringify(", color: C.fn },
                  { text: "{ title, body }", color: C.fn },
                  { text: "),", color: C.op },
                ],
                [{ text: "});", color: C.op }],
              ],
            },
            {
              title: "DELETE — o'chirish:",
              code: [
                [
                  { text: "await ", color: C.kw },
                  { text: "fetch(", color: C.fn },
                  { text: "`/api/posts/${id}`", color: C.str },
                  { text: ", {", color: C.op },
                ],
                [
                  { text: "  method: ", color: "rgba(255,255,255,0.7)" },
                  { text: '"DELETE"', color: C.str },
                ],
                [{ text: "});", color: C.op }],
              ],
            },
          ].map(({ title, code }) => (
            <div key={title}>
              <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
                {title}
              </div>
              <CodeSnippet lines={code} />
            </div>
          ))}
        </div>
      )}

      {tab === "compare" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Promise va async/await ikkalasi ham bir xil ishlaydi — faqat yozish
            uslubi farq qiladi.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[rgba(26,24,20,0.10)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#c85c1a10]">
                  {["Xususiyat", "Promise .then()", "async/await"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-2 font-mono font-bold text-[#c85c1a] border border-[rgba(26,24,20,0.10)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["O'qilishi", "Zanjir — o'rtacha", "Sync ko'rinish — oson"],
                  ["Error handling", ".catch()", "try/catch"],
                  ["Debug", "Qiyinroq", "Osonroq (breakpoint)"],
                  ["Parallel", "Promise.all()", "Promise.all() + await"],
                  ["Return", "Promise qaytaradi", "Promise qaytaradi"],
                ].map(([xususiyat, promise, async_], i) => (
                  <tr key={i}>
                    <td className="px-3 py-2 font-mono font-bold text-[#1a1814] border border-[rgba(26,24,20,0.10)]">
                      {xususiyat}
                    </td>
                    <td className="px-3 py-2 text-[#7a7468] border border-[rgba(26,24,20,0.10)]">
                      {promise}
                    </td>
                    <td className="px-3 py-2 text-[#4a9e60] border border-[rgba(26,24,20,0.10)]">
                      {async_}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeSnippet
            lines={[
              [{ text: "// Parallel requestlar:", color: C.cmt }],
              [
                { text: "async function ", color: C.kw },
                { text: "loadAll", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [
                { text: "  const [", color: C.op },
                { text: "users", color: C.fn },
                { text: ", ", color: C.op },
                { text: "posts", color: C.fn },
                { text: "] = ", color: C.op },
                { text: "await ", color: C.kw },
                { text: "Promise.all([", color: C.fn },
              ],
              [
                { text: "    fetch(", color: C.fn },
                { text: '"/users"', color: C.str },
                { text: ").then(r => r.json()),", color: C.op },
              ],
              [
                { text: "    fetch(", color: C.fn },
                { text: '"/posts"', color: C.str },
                { text: ").then(r => r.json()),", color: C.op },
              ],
              [{ text: "  ]);", color: C.op }],
              [
                { text: "  return ", color: C.kw },
                { text: "{ users, posts }", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />

          <InfoBox color="#4a9e60" icon="✓">
            Zamonaviy loyihalarda <Tag color="#4a9e60">async/await</Tag>{" "}
            ustunlik qiladi. Lekin <Tag>.then()</Tag> ni ham bilish kerak —
            kutubxonalar shu uslubda yozilgan.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
