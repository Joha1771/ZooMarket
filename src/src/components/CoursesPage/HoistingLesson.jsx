// ─── HOISTING LESSON ──────────────────────────────────────────────────────────
import { useState } from "react";
import { getByPath } from "../../Shared/utils";

const HOISTING_STEPS_DATA = [
  {
    titleKey: "lessons.hoisting.explain.step0.title",
    descKey: "lessons.hoisting.explain.step0.desc",
    phase1Key: "lessons.hoisting.explain.step0.phase1",
    phase2Key: "lessons.hoisting.explain.step0.phase2",
  },
  {
    titleKey: "lessons.hoisting.explain.step1.title",
    descKey: "lessons.hoisting.explain.step1.desc",
    yourCodeKey: "lessons.hoisting.explain.step1.yourCode",
    jsCodeKey: "lessons.hoisting.explain.step1.jsCode",
  },
  {
    titleKey: "lessons.hoisting.explain.step2.title",
    descKey: "lessons.hoisting.explain.step2.desc",
    withVarKey: "lessons.hoisting.explain.step2.withVar",
    withLetKey: "lessons.hoisting.explain.step2.withLet",
  },
];

function HoistingStepVisual({ stepIndex, t }) {
  if (stepIndex === 0) {
    const data = HOISTING_STEPS_DATA[0];
    return (
      <div className="flex justify-center gap-3">
        {[getByPath(t, data.phase1Key), getByPath(t, data.phase2Key)].map(
          (s, i) => (
            <div
              key={s}
              className="px-4 py-2.5 rounded-lg text-center font-mono text-xs"
              style={{
                background: i === 0 ? "#c85c1a20" : "#f2efe8",
                border: `1.5px solid ${i === 0 ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
                color: i === 0 ? "#c85c1a" : "#1a1814",
              }}
            >
              {s}
            </div>
          ),
        )}
      </div>
    );
  }

  if (stepIndex === 1) {
    const data = HOISTING_STEPS_DATA[1];
    return (
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            label: getByPath(t, data.yourCodeKey),
            code: ["console.log(a);", "var a = 5;"],
          },
          {
            label: getByPath(t, data.jsCodeKey),
            code: [
              "var a; // undefined",
              "console.log(a); // undefined",
              "a = 5;",
            ],
          },
        ].map(({ label, code }) => (
          <div key={label}>
            <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
              {label}
            </div>
            <div className="bg-[#2c2820] p-3 rounded-lg font-mono text-xs text-[#c3e88d] leading-relaxed">
              {code.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (stepIndex === 2) {
    const data = HOISTING_STEPS_DATA[2];
    return (
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
            {getByPath(t, data.withVarKey)}
          </div>
          <div className="bg-[#2c2820] p-3 rounded-lg font-mono text-xs leading-relaxed">
            <div className="text-[#c3e88d]">console.log(a);</div>
            <div className="text-[#4a9e60]">// ✓ undefined</div>
            <div>
              <span className="text-[#c792ea]">var</span>{" "}
              <span className="text-[#82aaff]">a</span> = 5;
            </div>
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
            {getByPath(t, data.withLetKey)}
          </div>
          <div className="bg-[#2c2820] p-3 rounded-lg font-mono text-xs leading-relaxed">
            <div className="text-[#c3e88d]">console.log(b);</div>
            <div className="text-[#e06c75]">// ✗ ReferenceError!</div>
            <div>
              <span className="text-[#c792ea]">let</span>{" "}
              <span className="text-[#82aaff]">b</span> = 10;
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export function HoistingExplain({ t }) {
  const [step, setStep] = useState(0);
  const total = HOISTING_STEPS_DATA.length;

  return (
    <div>
      <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)] mb-3.5">
        <div className="text-sm font-bold text-[#1a1814] mb-1.5">
          {getByPath(t, HOISTING_STEPS_DATA[step].titleKey)}
        </div>
        <p className="text-xs text-[#7a7468] mb-3.5 leading-relaxed">
          {getByPath(t, HOISTING_STEPS_DATA[step].descKey)}
        </p>
        <HoistingStepVisual stepIndex={step} t={t} />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="px-4 py-2 rounded-lg border border-[rgba(26,24,20,0.10)] bg-[#f2efe8] font-mono text-xs cursor-pointer"
          style={{ color: step === 0 ? "#7a7468" : "#1a1814" }}
        >
          ← {getByPath(t, "lesson.prev")}
        </button>
        <div className="flex gap-1.5">
          {HOISTING_STEPS_DATA.map((_, i) => (
            <div
              key={i}
              onClick={() => setStep(i)}
              className="h-2 transition-all duration-200 rounded-full cursor-pointer"
              style={{
                width: i === step ? 20 : 8,
                background: i === step ? "#c85c1a" : "rgba(26,24,20,0.10)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
          disabled={step === total - 1}
          className="px-4 py-2 font-mono text-xs font-bold border-none rounded-lg cursor-pointer"
          style={{
            background: step === total - 1 ? "#f2efe8" : "#c85c1a",
            color: step === total - 1 ? "#7a7468" : "#fff",
            boxShadow: step === total - 1 ? "none" : "0 3px 0 0 #8a3a0a",
          }}
        >
          {getByPath(t, "lesson.next")} →
        </button>
      </div>
    </div>
  );
}

// ─── HOISTING LEARN ───────────────────────────────────────────────────────────
const HOISTING_CODE = `var x = 10;\n\nfunction timesTen(a) {\n  return a * 10;\n}\n\nvar y = timesTen(x);\nconsole.log(y); // 100`;

const HOISTING_MEMORY = {
  creation: { x: "undefined", y: "undefined", timesTen: "function() {...}" },
  execution: { x: "10", y: "100", timesTen: "function() {...}" },
};

export function HoistingLearn({ t }) {
  const [phase, setPhase] = useState("creation");
  const state = HOISTING_MEMORY[phase];

  return (
    <div>
      <p className="text-xs text-[#7a7468] mb-3.5 leading-relaxed">
        {getByPath(t, "lessons.hoisting.learn.intro")}
      </p>
      <div className="flex gap-2 mb-3.5">
        {["creation", "execution"].map((p) => (
          <button
            key={p}
            onClick={() => setPhase(p)}
            className="flex-1 px-3 py-2 font-mono text-xs font-bold transition-all duration-150 rounded-lg cursor-pointer"
            style={{
              border: `1.5px solid ${phase === p ? "#c85c1a" : "rgba(26,24,20,0.10)"}`,
              background: phase === p ? "#c85c1a" : "#f2efe8",
              color: phase === p ? "#fff" : "#1a1814",
            }}
          >
            {p === "creation"
              ? getByPath(t, "lessons.hoisting.learn.creation")
              : getByPath(t, "lessons.hoisting.learn.execution")}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
            {getByPath(t, "lessons.hoisting.learn.codeLabel")}
          </div>
          <div className="bg-[#2c2820] p-3 rounded-lg font-mono text-xs text-[#c3e88d] leading-loose h-[140px] overflow-hidden">
            {HOISTING_CODE.split("\n").map((line, i) => (
              <div key={i}>{line || " "}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] font-mono text-[#7a7468] mb-1.5">
            {getByPath(t, "lessons.hoisting.learn.memoryLabel")}
          </div>
          <div className="bg-[#2c2820] p-3 rounded-lg h-[140px]">
            {Object.entries(state).map(([key, val]) => (
              <div
                key={key}
                className="flex justify-between items-center py-1.5 border-b border-[rgba(26,24,20,0.10)] font-mono text-[11px]"
              >
                <span className="text-[#82aaff]">{key}</span>
                <span
                  className="transition-colors duration-300"
                  style={{
                    color:
                      val === "undefined"
                        ? "#e06c75"
                        : val.startsWith("function")
                          ? "#c792ea"
                          : "#f78c6c",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
