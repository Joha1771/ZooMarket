import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.10 — USEREDUCER AND USECONTEXT
// ═══════════════════════════════════════════════════════════════════════════════

export function ContextExplain() {
  const [tab, setTab] = useState("reducer");
  const [state, dispatch] = useState({ count: 0, step: 1 });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["reducer", "context", "combined"].map((id) => (
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
            {id === "reducer"
              ? "useReducer"
              : id === "context"
                ? "useContext"
                : "Birgalikda"}
          </button>
        ))}
      </div>

      {tab === "reducer" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useReducer — murakkab state uchun. Redux'ga o'xshash tushuncha:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// 1. Reducer funksiya\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { ...state, count: state.count + 1 };\n    case 'decrement':\n      return { ...state, count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    default:\n      return state;\n  }\n}\n\n// 2. Komponentda ishlatish\nconst [state, dispatch] = useReducer(reducer, { count: 0 });\n\n// 3. Action yuborish\ndispatch({ type: 'increment' });\ndispatch({ type: 'reset' });`}
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-center">
            {[
              {
                label: "useState",
                desc: "Oddiy, 1-2 qiymat",
                color: "#4a9e60",
              },
              {
                label: "useReducer",
                desc: "Murakkab, ko'p action",
                color: "#61DAFB",
              },
            ].map(({ label, desc, color }) => (
              <div
                key={label}
                className="p-2.5 rounded-lg"
                style={{
                  background: color + "10",
                  border: `1px solid ${color}25`,
                }}
              >
                <div
                  className="font-mono font-bold text-[11px] mb-0.5"
                  style={{ color }}
                >
                  {label}
                </div>
                <div className="text-[10px] text-[#7a7468]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "context" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useContext — props drilling muammosini hal qiladi. Global state:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// 1. Context yaratish\nconst ThemeContext = createContext(null);\n\n// 2. Provider — qiymat berish\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}\n\n// 3. Istalgan joyda ishlatish\nfunction Button() {\n  const { theme, setTheme } = useContext(ThemeContext);\n  return <button onClick={() => setTheme('dark')}>{theme}</button>;\n}`}
          </div>
          <InfoBox color="#61DAFB" icon="💡">
            Context — har renderda qayta yaratiladi. Katta ilovalar uchun Redux
            yoki Zustand tavsiya etiladi.
          </InfoBox>
        </div>
      )}

      {tab === "combined" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useReducer + useContext — kuchli global state pattern:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`const StoreContext = createContext(null);\n\nfunction StoreProvider({ children }) {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <StoreContext.Provider value={{ state, dispatch }}>\n      {children}\n    </StoreContext.Provider>\n  );\n}\n\n// Custom hook qilib chiqarish\nexport function useStore() {\n  return useContext(StoreContext);\n}\n\n// Ishlating:\nconst { state, dispatch } = useStore();\ndispatch({ type: 'ADD_ITEM', payload: item });`}
          </div>
        </div>
      )}
    </div>
  );
}
