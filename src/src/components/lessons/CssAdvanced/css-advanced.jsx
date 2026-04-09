// ═══════════════════════════════════════════════════════════════════════════════
// CSS ADVANCED — MAIN INDEX
// ═══════════════════════════════════════════════════════════════════════════════

import { PositionExplain, PositionLearn } from "./Content/Position";
import { PseudoExplain, PseudoLearn } from "./Content/Pseudo";
import { TransformsExplain } from "./Content/Transforms";
import { AnimationsExplain } from "./Content/Animations";
import { GradientsExplain } from "./Content/Gradients";
import { ResponsiveExplain } from "./Content/Responsive";
import { FigmaCssExplain } from "./Content/FigmaCss";
import { TransitionExplain } from "./Content/Transition";
import { SassBasicsExplain } from "./Content/SassBasics";
import { SassAdvancedExplain } from "./Content/SassAdvanced";
import { TailwindExplain } from "./Content/Tailwind";
import { ExamFigmaExplain } from "./Content/ExamFigma";
import { STARTERS, QUIZZES, CSS_ADVANCED_CONTENT_KEYS } from "./Data/Data";

export { CSS_ADVANCED_CONTENT_KEYS };

export function CssAdvancedPhaseContent({ lessonId, phaseId }) {
  const map = {
    position: { explain: <PositionExplain />, learn: <PositionLearn /> },
    pseudo: { explain: <PseudoExplain />, learn: <PseudoLearn /> },
    transforms: {
      explain: <TransformsExplain />,
      learn: <TransformsExplain />,
    },
    animations: {
      explain: <AnimationsExplain />,
      learn: <AnimationsExplain />,
    },
    gradients: { explain: <GradientsExplain />, learn: <GradientsExplain /> },
    responsive: {
      explain: <ResponsiveExplain />,
      learn: <ResponsiveExplain />,
    },
    "figma-css": { explain: <FigmaCssExplain />, learn: <FigmaCssExplain /> },
    transition: {
      explain: <TransitionExplain />,
      learn: <TransitionExplain />,
    },
    "sass-basics": {
      explain: <SassBasicsExplain />,
      learn: <SassBasicsExplain />,
    },
    "sass-advanced": {
      explain: <SassAdvancedExplain />,
      learn: <SassAdvancedExplain />,
    },
    tailwind: { explain: <TailwindExplain />, learn: <TailwindExplain /> },
    "exam-figma": {
      explain: <ExamFigmaExplain />,
      learn: <ExamFigmaExplain />,
    },
  };
  return map[lessonId]?.[phaseId] ?? null;
}

export function getCssAdvancedStarter(lessonId) {
  return STARTERS[lessonId] || null;
}

export function getCssAdvancedQuiz(lessonId) {
  return QUIZZES[lessonId] || null;
}
