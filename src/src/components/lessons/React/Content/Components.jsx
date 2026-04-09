import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.2 — COMPONENTS, JSX, PROJECT STRUCTURE
// ═══════════════════════════════════════════════════════════════════════════════

export function ComponentsExplain() {
  const [tab, setTab] = useState("jsx");
  const [activeSnippet, setActiveSnippet] = useState("rafce");

  const snippets = {
    rfc: {
      label: "rfc",
      code: `import React from 'react'\n\nexport default function FileName() {\n  return <div>FileName</div>\n}`,
    },
    rfce: {
      label: "rfce ✓",
      code: `import React from 'react'\n\nfunction FileName() {\n  return <div>FileName</div>\n}\n\nexport default FileName`,
    },
    rafce: {
      label: "rafce ✓",
      code: `import React from 'react'\n\nconst FileName = () => {\n  return <div>FileName</div>\n}\n\nexport default FileName`,
    },
    rcc: {
      label: "rcc",
      code: `import React, { Component } from 'react'\n\nexport default class FileName extends Component {\n  render() {\n    return <div>FileName</div>\n  }\n}`,
    },
  };

  const structure = [
    { name: "src/", type: "folder", color: "#61DAFB", depth: 0 },
    { name: "components/", type: "folder", color: "#61DAFB", depth: 1 },
    { name: "Header/", type: "folder", color: "#4a9e60", depth: 2 },
    { name: "Header.jsx", type: "file", color: "#c3e88d", depth: 3 },
    { name: "Header.module.css", type: "file", color: "#264de4", depth: 3 },
    { name: "pages/", type: "folder", color: "#c85c1a", depth: 1 },
    { name: "HomePage.jsx", type: "file", color: "#c3e88d", depth: 2 },
    { name: "CartPage.jsx", type: "file", color: "#c3e88d", depth: 2 },
    { name: "assets/", type: "folder", color: "#b07820", depth: 1 },
    { name: "images/", type: "folder", color: "#b07820", depth: 2 },
    { name: "utils/", type: "folder", color: "#993556", depth: 1 },
    { name: "index.js", type: "file", color: "#f7df1e", depth: 2 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["jsx", "components", "structure"].map((id) => (
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
            {id === "jsx"
              ? "JSX"
              : id === "components"
                ? "Komponentlar"
                : "Tuzilma"}
          </button>
        ))}
      </div>

      {tab === "jsx" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            JSX — JavaScript ichida HTML yozish imkoni. Babel uni oddiy JS ga
            aylantiradi:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="font-mono text-[10px] text-[#4a9e60] mb-1.5">
                ✓ To'g'ri JSX:
              </div>
              <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs text-[#c3e88d] leading-loose">
                <div>
                  <span style={{ color: "#e34c26" }}>{"<div>"}</span>
                </div>
                <div>
                  {"  "}
                  <span style={{ color: "#e34c26" }}>{"<div>"}</span>
                </div>
                <div>
                  {"    "}
                  <span style={{ color: "#e34c26" }}>{"<h1>"}</span>
                  <span>Salom</span>
                  <span style={{ color: "#e34c26" }}>{"</h1>"}</span>
                </div>
                <div>
                  {"  "}
                  <span style={{ color: "#e34c26" }}>{"</div>"}</span>
                </div>
                <div>
                  <span style={{ color: "#e34c26" }}>{"</div>"}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-[#e06c75] mb-1.5">
                ✗ Noto'g'ri JSX:
              </div>
              <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
                <div>
                  <span style={{ color: "#e06c75" }}>{"<div>"}</span>
                </div>
                <div>
                  {"  "}
                  <span style={{ color: "#e06c75" }}>{"<h1>"}</span>
                  <span className="text-[#c3e88d]">Salom</span>
                  <span style={{ color: "#e06c75" }}>{"</h1>"}</span>
                </div>
                <div>
                  <span style={{ color: "#e06c75" }}>{"</div>"}</span>
                </div>
                <div className="text-[rgba(255,255,255,0.3)]">
                  {"// ikki parallel tag"}
                </div>
                <div>
                  <span style={{ color: "#e06c75" }}>{"<div>"}</span>
                  <span style={{ color: "#e06c75" }}>{"</div>"}</span>
                </div>
              </div>
            </div>
          </div>
          <InfoBox color="#61DAFB" icon="💡">
            Bir sahifada bir nechta element qaytarish uchun{" "}
            <Tag color="#61DAFB">{"<></>"}</Tag> (Fragment) ishlating —
            qo'shimcha <code>div</code> kerak emas.
          </InfoBox>
          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              JSX ichida JavaScript:
            </div>
            <CodeSnippet
              lines={[
                [
                  { text: "const ", color: C.kw },
                  { text: "name", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: '"Ali"', color: C.str },
                  { text: ";", color: C.op },
                ],
                [{ text: "" }],
                [
                  { text: "return ", color: C.kw },
                  { text: "(", color: C.op },
                ],
                [
                  { text: "  <", color: "#e34c26" },
                  { text: "h1", color: "#82aaff" },
                  { text: ">", color: "#e34c26" },
                  { text: "Salom, ", color: C.str },
                  { text: "{", color: C.op },
                  { text: "name", color: C.fn },
                  { text: "}!", color: C.op },
                  { text: "</", color: "#e34c26" },
                  { text: "h1", color: "#82aaff" },
                  { text: ">", color: "#e34c26" },
                ],
                [{ text: ");", color: C.op }],
              ]}
            />
          </div>
        </div>
      )}

      {tab === "components" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Komponent — mustaqil va qayta ishlatiladigan UI qismi. Snippets:
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {Object.entries(snippets).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActiveSnippet(key)}
                className="p-2 text-left transition-all border rounded-lg cursor-pointer"
                style={{
                  background: activeSnippet === key ? "#61DAFB" : "#f2efe8",
                  borderColor:
                    activeSnippet === key ? "#61DAFB" : "rgba(26,24,20,0.10)",
                  color: activeSnippet === key ? "#0a1a20" : "#1a1814",
                }}
              >
                <div className="font-mono text-[10px] font-bold">
                  {val.label}
                </div>
              </button>
            ))}
          </div>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {snippets[activeSnippet].code}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              {
                icon: "🔤",
                rule: "Nomi katta harf bilan",
                ex: "UserCard, NavBar",
              },
              {
                icon: "📦",
                rule: "JSX qaytaradi",
                ex: "return <div>...</div>",
              },
              { icon: "🏷️", rule: "Tag kabi chaqiriladi", ex: "<UserCard />" },
              {
                icon: "✗",
                rule: "var/var hoisting yo'q",
                ex: "const yoki function",
              },
            ].map(({ icon, rule, ex }) => (
              <div
                key={rule}
                className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div className="mb-1 text-base">{icon}</div>
                <div className="font-mono text-[10px] font-bold text-[#1a1814] mb-0.5">
                  {rule}
                </div>
                <div className="font-mono text-[9px] text-[#7a7468]">{ex}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "structure" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            React loyihasi uchun standart fayl tuzilmasi:
          </p>
          <div className="bg-[#1a1814] rounded-xl p-4 border border-[rgba(255,255,255,0.06)]">
            {structure.map((item, i) => (
              <div
                key={i}
                className="flex items-center py-1 font-mono text-xs"
                style={{ paddingLeft: item.depth * 16 }}
              >
                <span className="mr-1.5 text-[rgba(255,255,255,0.2)]">
                  {item.type === "folder" ? "📁" : "📄"}
                </span>
                <span style={{ color: item.color }}>{item.name}</span>
              </div>
            ))}
          </div>
          <InfoBox color="#61DAFB" icon="💡">
            <Tag color="#61DAFB">.jsx</Tag> — faqat komponentlar uchun.{" "}
            <Tag color="#c85c1a">.js</Tag> — utils, constants, hooks uchun. Bu
            konventsiya kodni toza saqlaydi.
          </InfoBox>
        </div>
      )}
    </div>
  );
}
