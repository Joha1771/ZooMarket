// ═══════════════════════════════════════════════════════════════════════════════
// JAVASCRIPT — MAIN INDEX
// ═══════════════════════════════════════════════════════════════════════════════

import { JsIntroExplain, JsIntroLearn } from "./Content/JsIntro";
import { VariablesExplain, VariablesLearn } from "./Content/Variables";
import { OperatorsExplain } from "./Content/Operators";
import { ConditionsExplain } from "./Content/Conditions";
import { LoopsExplain } from "./Content/Loops";
import { FunctionsExplain } from "./Content/Functions";
import { StringsExplain } from "./Content/Strings";
import { ArraysExplain } from "./Content/Arrays";
import { ObjectsExplain } from "./Content/Objects";
import { MathDateExplain } from "./Content/MathDate";
import { DestructuringExplain } from "./Content/Destructuring";
import { ArrayMethodsExplain } from "./Content/ArrayMethods.jsx";
import { STARTERS, QUIZZES, JS_CONTENT_KEYS } from "./Data/Data";

export { JS_CONTENT_KEYS };

export function JsPhaseContent({ lessonId, phaseId }) {
  const map = {
    "js-intro": { explain: <JsIntroExplain />, learn: <JsIntroLearn /> },
    variables: { explain: <VariablesExplain />, learn: <VariablesLearn /> },
    operators: { explain: <OperatorsExplain />, learn: <OperatorsExplain /> },
    conditions: {
      explain: <ConditionsExplain />,
      learn: <ConditionsExplain />,
    },
    loops: { explain: <LoopsExplain />, learn: <LoopsExplain /> },
    functions: { explain: <FunctionsExplain />, learn: <FunctionsExplain /> },
    strings: { explain: <StringsExplain />, learn: <StringsExplain /> },
    arrays: { explain: <ArraysExplain />, learn: <ArraysExplain /> },
    objects: { explain: <ObjectsExplain />, learn: <ObjectsExplain /> },
    "math-date": { explain: <MathDateExplain />, learn: <MathDateExplain /> },
    destructuring: {
      explain: <DestructuringExplain />,
      learn: <DestructuringExplain />,
    },
    "array-methods": {
      explain: <ArrayMethodsExplain />,
      learn: <ArrayMethodsExplain />,
    },
  };
  return map[lessonId]?.[phaseId] ?? null;
}

export function getJsStarter(lessonId) {
  return STARTERS[lessonId] || null;
}

export function getJsQuiz(lessonId) {
  return QUIZZES[lessonId] || null;
}
