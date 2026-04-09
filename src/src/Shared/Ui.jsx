// ─── SHARED UI COMPONENTS ─────────────────────────────────────────────────────
// Заменяет три одинаковых файла:
//   src/lessons/HtmlCss/Ui/Ui.jsx
//   src/lessons/CssAdvanced/Ui/Ui.jsx
//   src/lessons/Javascript/Ui/Ui.jsx

// ─── INFO BOX ─────────────────────────────────────────────────────────────────
export function InfoBox({ color = "#c85c1a", icon, children }) {
  return (
    <div
      className="p-3.5 rounded-lg text-sm leading-relaxed border"
      style={{ background: color + "12", borderColor: color + "35" }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span className="text-[#1a1814]">{children}</span>
    </div>
  );
}

// ─── TAG ──────────────────────────────────────────────────────────────────────
export function Tag({ children, color = "#c85c1a" }) {
  return (
    <span
      className="font-mono text-xs px-1.5 py-0.5 rounded"
      style={{ background: color + "15", color }}
    >
      {children}
    </span>
  );
}

// ─── CODE SNIPPET ─────────────────────────────────────────────────────────────
// Принимает массив строк, каждая строка — массив { text, color }
export function CodeSnippet({ lines }) {
  return (
    <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs leading-loose overflow-x-auto">
      {lines.map((line, i) => (
        <div key={i}>
          {line.map((part, j) => (
            <span key={j} style={{ color: part.color || "#c3e88d" }}>
              {part.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── SYNTAX COLORS ────────────────────────────────────────────────────────────
export const C = {
  kw:  "#c792ea", // keyword: const, let, function, if...
  fn:  "#82aaff", // function / variable name
  str: "#c3e88d", // string
  num: "#f78c6c", // number
  cmt: "#4a5568", // comment
  op:  "rgba(255,255,255,0.5)", // operator / punctuation
  tag: "#f07178", // html tag
};
