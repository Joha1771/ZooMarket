// ─── SHARED STEPPER ───────────────────────────────────────────────────────────
// Заменяет повторяющийся паттерн навигации шаг ← точки → шаг в:
//   HoistingLesson.jsx (HoistingExplain)
//   Github.jsx         (GithubExplain)
//   FigmaCss.jsx       (FigmaCssExplain)
//   LessonView.jsx     (footer nav)

/**
 * @param {number}   step      — текущий шаг (0-based)
 * @param {number}   total     — общее число шагов
 * @param {function} onPrev    — () => void
 * @param {function} onNext    — () => void
 * @param {string}   [prevLabel] — текст кнопки назад
 * @param {string}   [nextLabel] — текст кнопки вперёд
 * @param {function} [onDotClick] — (index) => void, клик по точке
 */
export function Stepper({
  step,
  total,
  onPrev,
  onNext,
  prevLabel = "← Oldingi",
  nextLabel = "Keyingi →",
  onDotClick,
}) {
  const isFirst = step === 0;
  const isLast  = step === total - 1;

  return (
    <div className="flex items-center justify-between">
      {/* Кнопка назад */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="px-4 py-2 rounded-lg border border-[rgba(26,24,20,0.10)] bg-[#f2efe8] font-mono text-xs cursor-pointer"
        style={{ color: isFirst ? "#7a7468" : "#1a1814" }}
      >
        {prevLabel}
      </button>

      {/* Точки-индикаторы */}
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            onClick={() => onDotClick?.(i)}
            className="h-2 transition-all duration-200 rounded-full cursor-pointer"
            style={{
              width:      i === step ? 20 : 8,
              background: i === step ? "#c85c1a" : "rgba(26,24,20,0.10)",
            }}
          />
        ))}
      </div>

      {/* Кнопка вперёд */}
      <button
        onClick={onNext}
        disabled={isLast}
        className="px-4 py-2 font-mono text-xs font-bold border-none rounded-lg cursor-pointer"
        style={{
          background: isLast ? "#f2efe8" : "#c85c1a",
          color:      isLast ? "#7a7468" : "#fff",
          boxShadow:  isLast ? "none"    : "0 3px 0 0 #8a3a0a",
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

// ─── ИСПОЛЬЗОВАНИЕ ────────────────────────────────────────────────────────────
// БЫЛО (в каждом компоненте ~15 строк):
//
//   <div className="flex items-center justify-between">
//     <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0} ...>
//       ← Oldingi
//     </button>
//     <div className="flex gap-1.5">
//       {steps.map((_, i) => (
//         <div key={i} onClick={() => setStep(i)} style={{ width: i === step ? 20 : 8, ... }} />
//       ))}
//     </div>
//     <button onClick={() => setStep(s => Math.min(total-1, s+1))} ...>
//       Keyingi →
//     </button>
//   </div>
//
// СТАЛО (3 строки):
//
//   import { Stepper } from "@/shared/Stepper";
//   <Stepper
//     step={step}
//     total={steps.length}
//     onPrev={() => setStep(s => Math.max(0, s - 1))}
//     onNext={() => setStep(s => Math.min(steps.length - 1, s + 1))}
//     onDotClick={setStep}
//   />
