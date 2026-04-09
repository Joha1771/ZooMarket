import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.9 — USEREF, MEMO, USECALLBACK, USEMEMO
// ═══════════════════════════════════════════════════════════════════════════════

export function OptimizationExplain() {
  const [tab, setTab] = useState("useref");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["useref", "memo", "callbacks"].map((id) => (
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
            {id === "useref"
              ? "useRef"
              : id === "memo"
                ? "memo/useMemo"
                : "useCallback"}
          </button>
        ))}
      </div>

      {tab === "useref" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useRef — 2 ta ishlatilishi bor:
          </p>
          {[
            {
              title: "1. DOM elementiga murojaat",
              color: "#61DAFB",
              code: `const inputRef = useRef(null);\n\nconst focusInput = () => {\n  inputRef.current.focus();\n};\n\n<input ref={inputRef} />\n<button onClick={focusInput}>Focus</button>`,
            },
            {
              title: "2. Render o'zgartirmasdan qiymat saqlash",
              color: "#4a9e60",
              code: `const countRef = useRef(0);\n\n// useState dan farq:\n// ref o'zgarganda qayta render bo'lmaydi\ncountRef.current = countRef.current + 1;`,
            },
          ].map(({ title, color, code }) => (
            <div
              key={title}
              className="overflow-hidden border rounded-xl"
              style={{ borderColor: color + "30" }}
            >
              <div
                className="px-3 py-2 font-mono text-[10px] font-bold"
                style={{ background: color + "12", color }}
              >
                {title}
              </div>
              <div className="bg-[#2c2820] p-3 font-mono text-[11px] text-[#c3e88d] leading-loose whitespace-pre">
                {code}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "memo" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React.memo va useMemo — keraksiz re-render va hisoblarni oldini
            oladi:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// React.memo — props o'zgarmasa re-render bo'lmaydi\nconst UserCard = React.memo(({ name, age }) => {\n  return <div>{name} - {age}</div>;\n});\n\n// useMemo — katta hisoblashni keshlashtirish\nconst total = useMemo(() => {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}, [items]); // faqat items o'zganda qayta hisoblanadi`}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              {
                title: "React.memo",
                desc: "Komponent qayta render bo'lmaslik uchun",
                when: "Ko'p render bo'luvchi komponentlar",
              },
              {
                title: "useMemo",
                desc: "Qimmat hisob natijasini kesh qilish",
                when: "Katta massivlar, murakkab hisob",
              },
            ].map(({ title, desc, when }) => (
              <div
                key={title}
                className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div className="font-mono text-[10px] font-bold text-[#61DAFB] mb-1">
                  {title}
                </div>
                <div className="text-[10px] text-[#7a7468] mb-1">{desc}</div>
                <div className="font-mono text-[9px] text-[#c85c1a]">
                  Qachon: {when}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "callbacks" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useCallback — funksiyani keshlashtirish. memo bilan birgalikda
            ishlaydi:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// Har renderda yangi funksiya yaratiladi\nconst handleClick = () => fetchUser(id); // ✗\n\n// useCallback — faqat id o'zganda yangi funksiya\nconst handleClick = useCallback(() => {\n  fetchUser(id);\n}, [id]); // ✓\n\n// React.memo bilan birgalikda:\nconst Button = React.memo(({ onClick }) => (\n  <button onClick={onClick}>Click</button>\n));\n// Endi onClick o'zgarmasa Button re-render bo'lmaydi`}
          </div>
          <InfoBox color="#c85c1a" icon="⚠️">
            Hamma narsani memo/useCallback qilmang — bu o'zi ham resurs
            sarflaydi. Faqat <strong>haqiqiy sekinlik</strong> bo'lganda
            ishlating.
          </InfoBox>
        </div>
      )}
    </div>
  );
}
