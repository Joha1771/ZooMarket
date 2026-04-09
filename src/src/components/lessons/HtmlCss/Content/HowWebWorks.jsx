// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 1.1 — HOW WEB WORKS
// ═══════════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import { Tag } from "../../../../Shared/Ui";

export function HowWebWorksExplain() {
  const [step, setStep] = useState(null);
  const steps = [
    {
      id: "browser",
      icon: "🌐",
      label: "Brauzer",
      color: "#4a9e60",
      desc: "Siz yozgan URL ni tushunib, server bilan gaplashadi. Chrome, Firefox, Safari — barchasi brauzer.",
    },
    {
      id: "dns",
      icon: "📖",
      label: "DNS",
      color: "#185FA5",
      desc: "Domain nomini IP-manzilga aylantiradi. google.com → 142.250.190.78. Interneting telefon kitobi.",
    },
    {
      id: "server",
      icon: "🖥️",
      label: "Server",
      color: "#993556",
      desc: "Fayl va ma'lumotlarni saqlaydi. Brauzer so'rasa — yuboradi. 24/7 ishlab turadi.",
    },
    {
      id: "html",
      icon: "📄",
      label: "HTML",
      color: "#c85c1a",
      desc: "Server yuborgan asosiy fayl. Brauzer uni o'qib sahifani qurishni boshlaydi.",
    },
  ];
  const flow = ["Brauzer", "DNS", "Server", "HTML", "Brauzer"];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[#7a7468] leading-relaxed">
        Siz brauzerga <Tag>google.com</Tag> yozasiz. 0.1 soniyada nima bo'ladi?
        Bosqichlarni bosib ko'ring:
      </p>

      <div className="flex flex-wrap items-center justify-center gap-1">
        {flow.map((label, i) => (
          <div key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-[#7a7468] text-xs">→</span>}
            <span
              className="px-2 py-1 font-mono text-xs rounded"
              style={{
                background:
                  i === 0 || i === 4
                    ? "#4a9e6015"
                    : i === 1
                      ? "#185FA515"
                      : i === 2
                        ? "#99355615"
                        : "#c85c1a15",
                color:
                  i === 0 || i === 4
                    ? "#2a6040"
                    : i === 1
                      ? "#185FA5"
                      : i === 2
                        ? "#993556"
                        : "#c85c1a",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => setStep(step === s.id ? null : s.id)}
            className="p-3 text-left transition-all duration-200 border-2 cursor-pointer rounded-xl"
            style={{
              background: step === s.id ? s.color + "20" : s.color + "0a",
              borderColor: step === s.id ? s.color : s.color + "40",
            }}
          >
            <div className="mb-1 text-xl">{s.icon}</div>
            <div
              className="font-mono text-xs font-bold"
              style={{ color: s.color }}
            >
              {s.label}
            </div>
            {step === s.id && (
              <div className="text-xs text-[#1a1814] mt-1.5 leading-relaxed">
                {s.desc}
              </div>
            )}
          </button>
        ))}
      </div>
      {!step && (
        <p className="text-center text-xs text-[#7a7468] font-mono">
          👆 Bosqichni bosib tushuntirishni ko'ring
        </p>
      )}
    </div>
  );
}

export function HowWebWorksLearn() {
  const [url, setUrl] = useState("https://vizocode.uz/about");
  const parts = (() => {
    try {
      const u = new URL(url);
      return [
        {
          label: "protokol",
          value: u.protocol.replace(":", ""),
          color: "#4a9e60",
          desc: "Xavfsiz ulanish",
        },
        {
          label: "domen",
          value: u.hostname,
          color: "#c85c1a",
          desc: "Veb-sayt manzili",
        },
        {
          label: "yo'l",
          value: u.pathname || "/",
          color: "#185FA5",
          desc: "Sahifa/resurs yo'li",
        },
      ];
    } catch {
      return [];
    }
  })();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs text-[#7a7468] leading-relaxed">
        URL — bu veb-manzil. Har bir qismi ma'no kasb etadi. Manzilni
        o'zgartirib ko'ring:
      </p>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full px-3 py-2 bg-[#2c2820] text-[#c3e88d] font-mono text-sm rounded-lg border border-[rgba(255,255,255,0.1)] outline-none"
      />
      {parts.length > 0 ? (
        <div className="grid grid-cols-3 gap-2">
          {parts.map((p) => (
            <div
              key={p.label}
              className="p-2.5 rounded-lg text-center border"
              style={{
                background: p.color + "12",
                borderColor: p.color + "35",
              }}
            >
              <div
                className="text-[10px] font-mono uppercase tracking-wider mb-1"
                style={{ color: p.color }}
              >
                {p.label}
              </div>
              <div className="font-mono text-xs font-bold text-[#1a1814] break-all">
                {p.value}
              </div>
              <div className="text-[10px] text-[#7a7468] mt-1">{p.desc}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-3 rounded-lg bg-[#c85c1a12] border border-[#c85c1a35] text-sm text-[#c85c1a]">
          ⚠️ To'liq URL kiriting (https:// bilan)
        </div>
      )}
      <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs leading-loose">
        <div className="text-[rgba(255,255,255,0.3)] text-[10px] mb-2 uppercase tracking-wider">
          DevTools — Ctrl+Shift+I → Network
        </div>
        <div className="text-[#4a9e60]">
          # Brauzer → DNS so'rovi → IP manzil
        </div>
        <div className="text-[#82aaff]">GET /about HTTP/1.1</div>
        <div className="text-[#c3e88d]">Host: vizocode.uz</div>
        <div className="text-[rgba(255,255,255,0.3)]">{"←"} 200 OK + HTML</div>
      </div>
    </div>
  );
}
