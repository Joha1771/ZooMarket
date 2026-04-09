import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.9 — ASYNC: EVENT LOOP
// ═══════════════════════════════════════════════════════════════════════════════

export function EventLoopExplain() {
  const [tab, setTab] = useState("eventloop");
  const [step, setStep] = useState(0);

  const callStackSteps = [
    {
      label: "Start",
      stack: ["Global EC"],
      queue: [],
      log: [],
      desc: 'console.log("Start") ishga tushdi',
    },
    {
      label: "setTimeout",
      stack: ["Global EC", "setTimeout callback (Web API)"],
      queue: [],
      log: ["Start"],
      desc: "setTimeout() Web API ga yuborildi (2s)",
    },
    {
      label: "End log",
      stack: ["Global EC"],
      queue: [],
      log: ["Start", "End"],
      desc: 'console.log("End") chaqirildi',
    },
    {
      label: "Callback queue",
      stack: ["Global EC"],
      queue: ["setTimeout callback"],
      log: ["Start", "End"],
      desc: "2s o'tdi, callback queue ga qo'shildi",
    },
    {
      label: "Event Loop",
      stack: ["Global EC", "setTimeout callback"],
      queue: [],
      log: ["Start", "End"],
      desc: "Event Loop: stack bo'sh — callback stack ga o'tdi",
    },
    {
      label: "Done",
      stack: ["Global EC"],
      queue: [],
      log: ["Start", "End", "Timeout!"],
      desc: "Hammasi tugadi!",
    },
  ];

  const current = callStackSteps[step];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "eventloop", label: "Event Loop" },
          { id: "async", label: "Sync vs Async" },
          { id: "timers", label: "Timers" },
          { id: "microtask", label: "Microtask" },
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

      {tab === "eventloop" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Event Loop</strong> — JS
            single-threaded, lekin async operatsiyalarni boshqarish uchun Event
            Loop mexanizmi mavjud.
          </p>

          <div className="p-3 bg-[#f2efe8] rounded-xl border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center justify-between mb-2">
              <div className="font-mono text-[10px] text-[#7a7468]">
                Qadam {step + 1}/{callStackSteps.length}: {current.label}
              </div>
              <div className="font-mono text-[10px] text-[#c85c1a]">
                {current.desc}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="p-2 rounded-lg bg-[#1a1814] border border-[rgba(255,255,255,0.08)]">
                <div className="font-mono text-[9px] text-[rgba(255,255,255,0.3)] mb-1.5">
                  Call Stack
                </div>
                {current.stack.map((item) => (
                  <div
                    key={item}
                    className="mb-1 px-2 py-1 rounded font-mono text-[9px] text-[#c3e88d]"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    {item}
                  </div>
                ))}
                {current.stack.length === 0 && (
                  <div className="text-[9px] text-[rgba(255,255,255,0.2)] italic">
                    bo'sh
                  </div>
                )}
              </div>
              <div className="p-2 rounded-lg bg-[#1a1814] border border-[rgba(255,255,255,0.08)]">
                <div className="font-mono text-[9px] text-[rgba(255,255,255,0.3)] mb-1.5">
                  Callback Queue
                </div>
                {current.queue.map((item) => (
                  <div
                    key={item}
                    className="mb-1 px-2 py-1 rounded font-mono text-[9px] text-[#f78c6c]"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    {item}
                  </div>
                ))}
                {current.queue.length === 0 && (
                  <div className="text-[9px] text-[rgba(255,255,255,0.2)] italic">
                    bo'sh
                  </div>
                )}
              </div>
              <div className="p-2 rounded-lg bg-[#1a1814] border border-[rgba(255,255,255,0.08)]">
                <div className="font-mono text-[9px] text-[rgba(255,255,255,0.3)] mb-1.5">
                  Console
                </div>
                {current.log.map((item) => (
                  <div
                    key={item}
                    className="mb-1 font-mono text-[9px] text-[#82aaff]"
                  >
                    &gt; {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex-1 py-1.5 font-mono text-xs rounded-lg border border-[rgba(26,24,20,0.10)] cursor-pointer"
                style={{
                  background: "#f2efe8",
                  color: step === 0 ? "#7a7468" : "#1a1814",
                }}
              >
                ← Oldingi
              </button>
              <button
                onClick={() =>
                  setStep((s) => Math.min(callStackSteps.length - 1, s + 1))
                }
                disabled={step === callStackSteps.length - 1}
                className="flex-1 py-1.5 font-mono text-xs font-bold rounded-lg border-none cursor-pointer"
                style={{
                  background:
                    step === callStackSteps.length - 1 ? "#f2efe8" : "#c85c1a",
                  color:
                    step === callStackSteps.length - 1 ? "#7a7468" : "#fff",
                }}
              >
                Keyingi →
              </button>
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "console.log(", color: C.fn },
                { text: '"Start"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "setTimeout(", color: C.fn },
                { text: "() => {", color: C.op },
              ],
              [
                { text: "  console.log(", color: C.fn },
                { text: '"Timeout!"', color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "}, ", color: C.op },
                { text: "2000", color: C.num },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "console.log(", color: C.fn },
                { text: '"End"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Output:", color: C.cmt }],
              [{ text: "// Start", color: C.cmt }],
              [{ text: "// End", color: C.cmt }],
              [{ text: "// Timeout! (2s keyin)", color: C.cmt }],
            ]}
          />
        </div>
      )}

      {tab === "async" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            JS <strong className="text-[#1a1814]">single-threaded</strong> — bir
            vaqtda faqat bitta operatsiya bajaradi. Async operatsiyalar Web API
            orqali background da ishlaydi.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div
              className="p-3 border rounded-xl"
              style={{ background: "#4a9e6010", borderColor: "#4a9e6040" }}
            >
              <div className="font-mono text-xs font-bold text-[#4a9e60] mb-2">
                Synchronous
              </div>
              <div className="text-[10px] text-[#7a7468] mb-2">
                Navbatma-navbat. Biri tugamay ikkinchisi boshlanmaydi.
              </div>
              <div className="font-mono text-[10px] text-[#1a1814] leading-relaxed">
                console.log("1") → ishlaydi
                <br />
                heavyCalc() → bloklaydi!
                <br />
                console.log("3") → kutib turadi
              </div>
            </div>
            <div
              className="p-3 border rounded-xl"
              style={{ background: "#c85c1a10", borderColor: "#c85c1a40" }}
            >
              <div className="font-mono text-xs font-bold text-[#c85c1a] mb-2">
                Asynchronous
              </div>
              <div className="text-[10px] text-[#7a7468] mb-2">
                Kutish kerak bo'lganda Web API ga yuboriladi.
              </div>
              <div className="font-mono text-[10px] text-[#1a1814] leading-relaxed">
                console.log("1") → ishlaydi
                <br />
                fetch(url) → background (non-blocking)
                <br />
                console.log("3") → darhol ishlaydi
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Web API lari (async):
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                "setTimeout",
                "setInterval",
                "fetch",
                "XMLHttpRequest",
                "DOM events",
                "File I/O",
              ].map((api) => (
                <div
                  key={api}
                  className="py-1.5 px-2 rounded font-mono text-[10px] text-center"
                  style={{ background: "#c85c1a15", color: "#c85c1a" }}
                >
                  {api}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "timers" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <Tag>setTimeout</Tag> va <Tag>setInterval</Tag> — eng ko'p
            ishlatiladigan async funksiyalar.
          </p>

          {[
            {
              title: "setTimeout — bir marta kechiktirib ishlatish:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "id", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "setTimeout(", color: C.fn },
                  { text: "() => {", color: C.op },
                ],
                [
                  { text: "  console.log(", color: C.fn },
                  { text: '"2s keyin!"', color: C.str },
                  { text: ");", color: C.op },
                ],
                [
                  { text: "}, ", color: C.op },
                  { text: "2000", color: C.num },
                  { text: ");", color: C.op },
                ],
                [{ text: "" }],
                [
                  { text: "clearTimeout(", color: C.fn },
                  { text: "id", color: C.fn },
                  { text: ");  ", color: C.op },
                  { text: "// Bekor qilish", color: C.cmt },
                ],
              ],
            },
            {
              title: "setInterval — takroriy ishlatish:",
              code: [
                [
                  { text: "const ", color: C.kw },
                  { text: "id", color: C.fn },
                  { text: " = ", color: C.op },
                  { text: "setInterval(", color: C.fn },
                  { text: "() => {", color: C.op },
                ],
                [
                  { text: "  console.log(", color: C.fn },
                  { text: '"Har 1s!"', color: C.str },
                  { text: ");", color: C.op },
                ],
                [
                  { text: "}, ", color: C.op },
                  { text: "1000", color: C.num },
                  { text: ");", color: C.op },
                ],
                [{ text: "" }],
                [
                  { text: "clearInterval(", color: C.fn },
                  { text: "id", color: C.fn },
                  { text: ");  ", color: C.op },
                  { text: "// To'xtatish", color: C.cmt },
                ],
              ],
            },
            {
              title: "setTimeout(fn, 0) — aslida 0ms emas:",
              code: [
                [
                  { text: "console.log(", color: C.fn },
                  { text: '"1"', color: C.str },
                  { text: ");", color: C.op },
                ],
                [
                  { text: "setTimeout(", color: C.fn },
                  { text: "() => console.log(", color: C.op },
                  { text: '"2"', color: C.str },
                  { text: "), ", color: C.op },
                  { text: "0", color: C.num },
                  { text: ");", color: C.op },
                ],
                [
                  { text: "console.log(", color: C.fn },
                  { text: '"3"', color: C.str },
                  { text: ");", color: C.op },
                ],
                [
                  {
                    text: "// Output: 1, 3, 2  (2 hamma sync koddan keyin)",
                    color: C.cmt,
                  },
                ],
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

      {tab === "microtask" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Microtask Queue</strong> —
            Promise callbacklari bu yerda. Callback Queue dan{" "}
            <strong>oldin</strong> ishlaydi.
          </p>

          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Navbat tartibi (muhim!):
            </div>
            {[
              {
                q: "Call Stack",
                color: "#c85c1a",
                priority: "1",
                desc: "Sync kod — birinchi",
              },
              {
                q: "Microtask Queue",
                color: "#4a9e60",
                priority: "2",
                desc: "Promise .then() — ikkinchi",
              },
              {
                q: "Callback Queue",
                color: "#185FA5",
                priority: "3",
                desc: "setTimeout, setInterval — uchinchi",
              },
            ].map(({ q, color, priority, desc }) => (
              <div
                key={q}
                className="flex items-center gap-3 p-2 mb-2 border rounded-lg"
                style={{ background: color + "10", borderColor: color + "30" }}
              >
                <div
                  className="w-6 font-mono text-sm font-black text-center"
                  style={{ color }}
                >
                  {priority}
                </div>
                <div>
                  <div
                    className="font-mono text-xs font-bold"
                    style={{ color }}
                  >
                    {q}
                  </div>
                  <div className="text-[9px] text-[#7a7468]">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "console.log(", color: C.fn },
                { text: '"1 — sync"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "setTimeout(", color: C.fn },
                { text: "() => console.log(", color: C.op },
                { text: '"4 — macrotask"', color: C.str },
                { text: "), ", color: C.op },
                { text: "0", color: C.num },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "Promise.resolve()", color: C.fn }],
              [
                { text: "  .then(", color: C.op },
                { text: "() => console.log(", color: C.fn },
                { text: '"3 — microtask"', color: C.str },
                { text: "));", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "console.log(", color: C.fn },
                { text: '"2 — sync"', color: C.str },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [{ text: "// Output: 1, 2, 3, 4", color: C.cmt }],
            ]}
          />

          <InfoBox color="#c85c1a" icon="⚠️">
            Promise callbacklari (<Tag color="#c85c1a">.then()</Tag>) setTimeout
            dan oldin ishlaydi — chunki microtask queue priority yuqori.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
