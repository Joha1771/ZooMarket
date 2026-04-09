import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.6 — USEEFFECT: LIFECYCLE
// ═══════════════════════════════════════════════════════════════════════════════

export function UseEffectExplain() {
  const [tab, setTab] = useState("syntax");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["syntax", "lifecycle", "cleanup"].map((id) => (
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
            {id === "syntax"
              ? "Sintaksis"
              : id === "lifecycle"
                ? "Lifecycle"
                : "Cleanup"}
          </button>
        ))}
      </div>

      {tab === "syntax" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useEffect — side-effect (tashqi ta'sir) uchun: fetch, setInterval,
            DOM event:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "useEffect", color: C.fn },
                { text: "(() => {", color: C.op },
              ],
              [{ text: "  // Side effect kod", color: C.cmt }],
              [
                { text: "  return ", color: C.kw },
                { text: "() => {", color: C.op },
              ],
              [{ text: "    // Cleanup (komponent o'chganda)", color: C.cmt }],
              [{ text: "  };", color: C.op }],
              [
                { text: "}, [", color: C.op },
                { text: "/* dependency array */", color: C.cmt },
                { text: "]);", color: C.op },
              ],
            ]}
          />
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                dep: "[]",
                label: "Faqat bir marta",
                desc: "Mount bo'lganda",
                color: "#4a9e60",
              },
              {
                dep: "[state]",
                label: "State o'zganda",
                desc: "Har yangilanishda",
                color: "#61DAFB",
              },
              {
                dep: "yo'q",
                label: "Har renderda",
                desc: "Xavfli — ehtiyot bo'l",
                color: "#e06c75",
              },
            ].map(({ dep, label, desc, color }) => (
              <div
                key={dep}
                className="p-2.5 rounded-lg text-center"
                style={{
                  background: color + "10",
                  border: `1px solid ${color}25`,
                }}
              >
                <div
                  className="font-mono text-[10px] font-black mb-1"
                  style={{ color }}
                >
                  {dep}
                </div>
                <div className="font-mono text-[10px] font-bold text-[#1a1814] mb-0.5">
                  {label}
                </div>
                <div className="text-[9px] text-[#7a7468]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "lifecycle" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useEffect 3 ta lifecycle bosqichini birlashtiradi:
          </p>
          {[
            {
              title: "1. Mounting — componentDidMount",
              code: `useEffect(() => {\n  // Komponent yuklanganda bir marta\n  fetchData();\n}, []);`,
              color: "#4a9e60",
              desc: "API call, subscription — eng ko'p ishlatiladigan",
            },
            {
              title: "2. Updating — componentDidUpdate",
              code: `useEffect(() => {\n  // userId o'zgarganda qayta fetch\n  fetchUser(userId);\n}, [userId]);`,
              color: "#61DAFB",
              desc: "Dependency o'zgarganda qayta ishlaydi",
            },
            {
              title: "3. Unmounting — componentWillUnmount",
              code: `useEffect(() => {\n  const timer = setInterval(tick, 1000);\n  return () => clearInterval(timer);\n}, []);`,
              color: "#c85c1a",
              desc: "Return funksiya — komponent o'chganda tozalash",
            },
          ].map(({ title, code, color, desc }) => (
            <div
              key={title}
              className="overflow-hidden border rounded-xl"
              style={{ borderColor: color + "30" }}
            >
              <div
                className="px-3 py-2 font-mono text-[10px] font-bold"
                style={{ background: color + "15", color }}
              >
                {title}
              </div>
              <div className="bg-[#2c2820] p-3 font-mono text-[11px] text-[#c3e88d] leading-loose whitespace-pre">
                {code}
              </div>
              <div
                className="px-3 py-2 text-[10px] text-[#7a7468]"
                style={{ background: color + "06" }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "cleanup" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Cleanup — memory leak va xatolarni oldini oladi:
          </p>
          {[
            {
              title: "setInterval → clearInterval",
              code: `useEffect(() => {\n  const id = setInterval(() => {\n    setCount(c => c + 1);\n  }, 1000);\n  return () => clearInterval(id);\n}, []);`,
              color: "#4a9e60",
            },
            {
              title: "Axios abort",
              code: `useEffect(() => {\n  const controller = new AbortController();\n  axios.get(url, { signal: controller.signal })\n    .then(res => setData(res.data));\n  return () => controller.abort();\n}, []);`,
              color: "#61DAFB",
            },
          ].map(({ title, code, color }) => (
            <div key={title}>
              <div className="font-mono text-[10px] mb-1.5" style={{ color }}>
                {title}:
              </div>
              <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-[11px] text-[#c3e88d] leading-loose whitespace-pre">
                {code}
              </div>
            </div>
          ))}
          <InfoBox color="#c85c1a" icon="⚠️">
            Cleanup bo'lmasa — komponent o'chgandan keyin ham setInterval
            ishlashda davom etadi → <strong>memory leak!</strong>
          </InfoBox>
        </div>
      )}
    </div>
  );
}
