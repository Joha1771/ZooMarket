// ─── LESSON VIEW ──────────────────────────────────────────────────────────────
import { useState, useRef, useMemo } from "react";
import { getHtmlCssStarter, getHtmlCssQuiz } from "../lessons/HtmlCss/index";
import { Quiz } from "../../Shared/Quiz";
import {
  getCssAdvancedStarter,
  getCssAdvancedQuiz,
} from "../lessons/CssAdvanced/css-advanced";
import { getJsStarter, getJsQuiz } from "../lessons/Javascript/javascript";
import { MODULES, LESSON_CONTENT_KEYS, getByPath } from "./Curriculum";
import { PhaseContent } from "./PhaseContent";
import { CodeEditor } from "../../Shared/CodeEditor";
import { getStarter, getQuiz } from "../../Shared/lessonData";

export function LessonView({ lessonId, xp, onComplete, onBack, t }) {
  const content = LESSON_CONTENT_KEYS[lessonId];
  const [phase, setPhase] = useState(0);
  const xpEarned = useRef(false);

  const lessonTitle = useMemo(() => {
    for (const m of MODULES) {
      const l = m.lessons.find((l) => l.id === lessonId);
      if (l) return getByPath(t, l.titleKey);
    }
    return lessonId;
  }, [lessonId, t]);

  if (!content) {
    return (
      <div className="bg-[#f2efe8] rounded-2xl border border-[rgba(26,24,20,0.10)] p-12 text-center">
        <div className="text-4xl mb-3.5">🚧</div>
        <div className="font-mono font-bold text-lg text-[#1a1814] mb-1.5">
          {getByPath(t, "lesson.comingSoon")}
        </div>
        <div className="text-xs text-[#7a7468] mb-5">
          {getByPath(t, "lesson.comingSoonSub")}
        </div>
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] text-[#1a1814] cursor-pointer font-mono text-xs"
        >
          ← {getByPath(t, "lesson.back")}
        </button>
      </div>
    );
  }

  const phases = content.phases;
  const currentPhase = phases[phase] ?? phases[0];
  const isCodePhase = currentPhase.id === "code";

  const htmlCssStarter = getHtmlCssStarter(lessonId);
  const cssAdvStarter = getCssAdvancedStarter(lessonId);
  const jsStarter = getJsStarter(lessonId);

  const starterCode =
    currentPhase.starterCode ||
    htmlCssStarter?.code ||
    cssAdvStarter?.code ||
    jsStarter?.code ||
    "";
  const starterHTML =
    currentPhase.starterHTML ||
    htmlCssStarter?.html ||
    cssAdvStarter?.html ||
    jsStarter?.html ||
    "";
  const lang = currentPhase.lang || "html";

  const resolvedQuiz = useMemo(
    () =>
      getHtmlCssQuiz(lessonId) ||
      getCssAdvancedQuiz(lessonId) ||
      getJsQuiz(lessonId) ||
      getByPath(t, content?.quizKey) ||
      null,
    [lessonId, t, content?.quizKey],
  );

  const handleComplete = () => {
    if (!xpEarned.current) {
      xpEarned.current = true;
      onComplete?.();
    }
  };

  return (
    <div className="bg-[#f2efe8] rounded-2xl border border-[rgba(26,24,20,0.10)] overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[rgba(26,24,20,0.10)] flex items-center gap-3">
        <button
          onClick={onBack}
          className="px-2.5 py-1 rounded-md bg-transparent border border-[rgba(26,24,20,0.10)] text-[#7a7468] cursor-pointer text-xs font-mono"
        >
          ← {getByPath(t, "lesson.back")}
        </button>
        <div className="font-mono font-black text-sm text-[#1a1814] uppercase tracking-wide">
          {lessonTitle}
        </div>
        <div className="ml-auto font-mono text-[11px] text-[#7a7468]">
          +{xp} XP
        </div>
      </div>

      {/* Phase tabs */}
      <div className="flex border-b border-[rgba(26,24,20,0.10)] bg-[#f2efe8]">
        {phases.map((p, i) => (
          <button
            key={`${p.id}-${i}`}
            onClick={() => setPhase(i)}
            className="flex-1 py-3 px-2 border-none cursor-pointer font-mono text-xs flex flex-col items-center gap-0.5 transition-all duration-150 bg-transparent"
            style={{
              borderBottom:
                phase === i ? "2px solid #c85c1a" : "2px solid transparent",
              color: phase === i ? "#c85c1a" : "#7a7468",
              fontWeight: phase === i ? 700 : 400,
            }}
          >
            <span className="text-base">{p.icon}</span>
            <span>{getByPath(t, p.labelKey)}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        {isCodePhase ? (
          <CodeEditor
            starterCode={starterCode}
            starterHTML={starterHTML}
            lang={lang}
            quiz={resolvedQuiz}
            lessonId={lessonId}
            xp={xp}
            t={t}
            onComplete={handleComplete}
          />
        ) : (
          <PhaseContent lessonId={lessonId} phaseId={currentPhase.id} t={t} />
        )}
      </div>

      {/* Footer nav */}
      <div className="px-5 py-3.5 border-t border-[rgba(26,24,20,0.10)] flex justify-between items-center">
        <button
          onClick={() => setPhase((p) => Math.max(0, p - 1))}
          disabled={phase === 0}
          className="px-4 py-2 rounded-lg border border-[rgba(26,24,20,0.10)] bg-[#f2efe8] font-mono text-xs cursor-pointer"
          style={{ color: phase === 0 ? "#7a7468" : "#1a1814" }}
        >
          ← {getByPath(t, "lesson.prevPhase")}
        </button>
        <div className="flex gap-1.5">
          {phases.map((_, i) => (
            <div
              key={i}
              onClick={() => setPhase(i)}
              className="h-1.5 rounded-full cursor-pointer transition-all duration-200"
              style={{
                width: i === phase ? 20 : 7,
                background: i === phase ? "#c85c1a" : "rgba(26,24,20,0.10)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => setPhase((p) => Math.min(phases.length - 1, p + 1))}
          disabled={phase === phases.length - 1}
          className="px-4 py-2 font-mono text-xs font-bold border-none rounded-lg cursor-pointer"
          style={{
            background: phase === phases.length - 1 ? "#f2efe8" : "#c85c1a",
            color: phase === phases.length - 1 ? "#7a7468" : "#fff",
            boxShadow:
              phase === phases.length - 1 ? "none" : "0 3px 0 0 #8a3a0a",
          }}
        >
          {getByPath(t, "lesson.nextPhase")} →
        </button>
      </div>
    </div>
  );
}
