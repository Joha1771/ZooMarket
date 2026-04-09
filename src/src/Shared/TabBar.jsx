// ─── SHARED TAB BAR ───────────────────────────────────────────────────────────
// Заменяет повторяющийся паттерн таб-переключателя в 14+ компонентах:
// ColorsFonts, FormsTable, TextLinksImages, Pseudo, Conditions, Functions,
// Variables, SassBasics, SassAdvanced, Operators, Loops, Objects,
// Destructuring, MathDate и др.

/**
 * @param {Array<{ id: string, label: string }>} tabs
 * @param {string} active  — id активного таба
 * @param {function} onChange — (id) => void
 * @param {string} [color] — активный цвет (по умолчанию #c85c1a)
 */
export function TabBar({ tabs, active, onChange, color = "#c85c1a" }) {
  return (
    <div className="flex gap-2">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
          style={{
            background:   active === id ? color : "#f2efe8",
            borderColor:  active === id ? color : "rgba(26,24,20,0.10)",
            color:        active === id ? "#fff" : "#1a1814",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

// ─── ИСПОЛЬЗОВАНИЕ ────────────────────────────────────────────────────────────
// БЫЛО (в каждом компоненте):
//
//   const [tab, setTab] = useState("color");
//   <div className="flex gap-2">
//     {["color", "font"].map(id => (
//       <button key={id} onClick={() => setTab(id)} style={{ background: tab === id ? "#c85c1a" : ... }}>
//         {id === "color" ? "Ranglar" : "Shriftlar"}
//       </button>
//     ))}
//   </div>
//
// СТАЛО:
//
//   import { TabBar } from "@/shared/TabBar";
//   const [tab, setTab] = useState("color");
//   <TabBar
//     tabs={[{ id: "color", label: "Ranglar" }, { id: "font", label: "Shriftlar" }]}
//     active={tab}
//     onChange={setTab}
//   />
