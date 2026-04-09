// ─── SHARED QUIZ ──────────────────────────────────────────────────────────────
// Единая версия, заменяет 4 одинаковых копии:
//   src/shared/Quiz.jsx                                ← эта
//   src/Quiz.jsx                                       ← УДАЛИТЬ
//   src/lessons/Javascript/Components/CodeEditor.jsx   ← УДАЛИТЬ (Quiz внутри)
//   src/lessons/CssAdvanced/Content/CodeEditor.jsx     ← УДАЛИТЬ (Quiz внутри)
//   src/lessons/HtmlCss/Ui/Ui.jsx                      ← УДАЛИТЬ (Quiz внутри)

import { useState, useMemo } from "react";
import { getByPath } from "./utils";

/**
 * @param {object}   quiz         — объект { q, options, correct, explain }
 * @param {string}   [lessonId]   — если quiz не передан, ищет по t + lessonId
 * @param {number}   xp           — количество XP за правильный ответ
 * @param {function} onComplete   — колбэк при правильном ответе
 * @param {object}   [t]          — объект переводов (для поиска по lessonId)
 */
export function Quiz({ quiz: quizProp, lessonId, xp, onComplete, t }) {
  const quiz = useMemo(() => {
    if (quizProp) return quizProp;
    if (!lessonId || !t) return null;
    const camel = lessonId.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    return getByPath(t, `lessons.${camel}.quiz`) ?? null;
  }, [quizProp, lessonId, t]);

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) return null;

  const isCorrect = selected === quiz.correct;

  // Метка квиза: из переводов или fallback
  const quizLabel = t ? getByPath(t, "lesson.quizLabel") : "Savol";
  const checkLabel = t ? getByPath(t, "lesson.check") : "Tekshirish";
  const correctLabel = t ? getByPath(t, "lesson.correct") : "✓ To'g'ri!";
  const wrongLabel = t ? getByPath(t, "lesson.wrong") : "✗ Noto'g'ri.";

  return (
    <div className="mt-5 p-4 bg-[#f2efe8] rounded-xl border border-[rgba(26,24,20,0.10)]">
      {/* Заголовок */}
      <div className="flex items-center gap-2 mb-3.5">
        <span className="text-base">🎯</span>
        <span className="font-mono text-xs font-bold text-[#1a1814] uppercase tracking-wider">
          {quizLabel}
        </span>
        <span className="ml-auto font-mono text-[11px] text-[#c85c1a] bg-[#c85c1a15] px-2 py-0.5 rounded">
          +{xp} XP
        </span>
      </div>

      {/* Вопрос */}
      <p className="text-sm text-[#1a1814] mb-3.5 leading-relaxed">{quiz.q}</p>

      {/* Варианты */}
      <div className="flex flex-col gap-1.5">
        {quiz.options.map((opt, i) => {
          let bg = "#f2efe8", border = "1.5px solid rgba(26,24,20,0.10)", color = "#1a1814";
          if (submitted) {
            if (i === quiz.correct) {
              bg = "#4a9e6015"; border = "1.5px solid #4a9e60"; color = "#2a6040";
            } else if (i === selected && !isCorrect) {
              bg = "#c85c1a15"; border = "1.5px solid #c85c1a"; color = "#c85c1a";
            }
          } else if (selected === i) {
            bg = "#c85c1a10"; border = "1.5px solid #c85c1a";
          }
          return (
            <button
              key={i}
              onClick={() => !submitted && setSelected(i)}
              className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-[inherit] leading-relaxed transition-all duration-150"
              style={{ background: bg, border, color, cursor: submitted ? "default" : "pointer" }}
            >
              <span className="mr-2 font-mono opacity-50">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Кнопка проверки */}
      {!submitted && selected !== null && (
        <button
          onClick={() => {
            setSubmitted(true);
            if (isCorrect) onComplete?.();
          }}
          className="mt-3 w-full py-2.5 rounded-2xl bg-[#c85c1a] text-white border-none cursor-pointer font-mono text-xs font-bold"
          style={{ boxShadow: "0 4px 0 0 #8a3a0a" }}
        >
          {checkLabel}
        </button>
      )}

      {/* Результат */}
      {submitted && (
        <div
          className="mt-3 px-3.5 py-2.5 rounded-lg text-xs text-[#1a1814] leading-relaxed border"
          style={{
            background:   isCorrect ? "#4a9e6015" : "#c85c1a10",
            borderColor: (isCorrect ? "#4a9e60" : "#c85c1a") + "40",
          }}
        >
          <span className="font-bold" style={{ color: isCorrect ? "#2a6040" : "#c85c1a" }}>
            {isCorrect ? correctLabel : wrongLabel}
          </span>{" "}
          {quiz.explain}
        </div>
      )}
    </div>
  );
}
