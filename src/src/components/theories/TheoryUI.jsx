// ─── THEORY UI COMPONENTS ──────────────────────────────────────────────────────

export function H({ children }) {
  return (
    <h3 className="font-mono text-sm font-bold text-[#1a1814] uppercase tracking-wide mt-5 mb-2 first:mt-0">
      {children}
    </h3>
  );
}

export function P({ children }) {
  return (
    <p className="text-sm text-[#1a1814] leading-[1.75] mb-3">{children}</p>
  );
}

export function Code({ children }) {
  return (
    <code className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#c85c1a15] text-[#c85c1a]">
      {children}
    </code>
  );
}

export function Pre({ children }) {
  return (
    <pre className="bg-[#2c2820] text-[#c3e88d] font-mono text-xs leading-loose rounded-xl p-4 overflow-x-auto mb-3 whitespace-pre">
      {children}
    </pre>
  );
}

export function Table({ headers, rows }) {
  return (
    <div className="mb-3 overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-[#c85c1a10]">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-3 py-2 font-mono font-bold text-[#c85c1a] border border-[rgba(26,24,20,0.10)] whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[rgba(26,24,20,0.06)]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2 border border-[rgba(26,24,20,0.10)] text-[#1a1814] leading-relaxed"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Note({ type = "info", children }) {
  const styles = {
    info: {
      bg: "#185FA512",
      border: "#185FA535",
      icon: "💡",
      label: "Eslatma",
    },
    warn: { bg: "#c85c1a12", border: "#c85c1a35", icon: "⚠️", label: "Diqqat" },
    tip: { bg: "#4a9e6012", border: "#4a9e6035", icon: "✓", label: "Maslahat" },
    danger: {
      bg: "#e06c7512",
      border: "#e06c7535",
      icon: "✗",
      label: "Noto'g'ri",
    },
  };
  const s = styles[type];
  return (
    <div
      className="px-4 py-3 mb-3 text-sm leading-relaxed border rounded-lg"
      style={{ background: s.bg, borderColor: s.border }}
    >
      <span className="mr-1.5">{s.icon}</span>
      <strong className="text-[#1a1814]">{s.label}: </strong>
      <span className="text-[#1a1814]">{children}</span>
    </div>
  );
}

export function TheoryWrap({ children }) {
  return (
    <div className="mt-6 pt-5 border-t border-[rgba(26,24,20,0.10)] flex flex-col gap-0">
      {children}
    </div>
  );
}
