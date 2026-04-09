// ═══════════════════════════════════════════════════════════════════════════════
// ADVANCED JAVASCRIPT — MAIN INDEX
// ═══════════════════════════════════════════════════════════════════════════════

import { ExecutionContextExplain } from "./Content/ExecutionContext";
import { ScopeClosureExplain } from "./Content/ScopeClosure";
import { FunctionTypesExplain } from "./Content/FunctionTypes";
import { HofCurryingExplain } from "./Content/HofCurrying";
import { PrototypesOopExplain } from "./Content/PrototypesOop";
import { ClassesExplain } from "./Content/Classes";
import { MapSetExplain } from "./Content/MapSet";
import { ErrorHandlingExplain } from "./Content/ErrorHandling";
import { EventLoopExplain } from "./Content/EventLoop";
import { PromiseExplain } from "./Content/Promise";
import { AsyncAwaitExplain } from "./Content/AsyncAwait";
import { CodeWarsExplain } from "./Content/CodeWars";
import {
  STARTERS,
  QUIZZES,
  ADVANCED_JS_CONTENT_KEYS,
} from "./Data/AdvancedJsData";

export { ADVANCED_JS_CONTENT_KEYS };

// ─── PHASE CONTENT MAP ────────────────────────────────────────────────────────
export function AdvancedJsPhaseContent({ lessonId, phaseId, t }) {
  const map = {
    hoisting: {
      explain: <ExecutionContextExplain t={t} />,
      learn: <ExecutionContextExplain t={t} />,
    },
    closure: {
      explain: <ScopeClosureExplain />,
      learn: <ScopeClosureExplain />,
    },
    "fn-types": {
      explain: <FunctionTypesExplain />,
      learn: <FunctionTypesExplain />,
    },
    hof: {
      explain: <HofCurryingExplain />,
      learn: <HofCurryingExplain />,
    },
    prototypes: {
      explain: <PrototypesOopExplain />,
      learn: <PrototypesOopExplain />,
    },
    classes: {
      explain: <ClassesExplain />,
      learn: <ClassesExplain />,
    },
    "map-set": {
      explain: <MapSetExplain />,
      learn: <MapSetExplain />,
    },
    errors: {
      explain: <ErrorHandlingExplain />,
      learn: <ErrorHandlingExplain />,
    },
    "event-loop": {
      explain: <EventLoopExplain />,
      learn: <EventLoopExplain />,
    },
    promise: {
      explain: <PromiseExplain />,
      learn: <PromiseExplain />,
    },
    "async-await": {
      explain: <AsyncAwaitExplain />,
      learn: <AsyncAwaitExplain />,
    },
    codeWars: {
      explain: <CodeWarsExplain />,
      learn: <CodeWarsExplain />,
    },
  };

  return map[lessonId]?.[phaseId] ?? null;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
export function getAdvancedJsStarter(lessonId) {
  return STARTERS[lessonId] || null;
}

export function getAdvancedJsQuiz(lessonId) {
  return QUIZZES[lessonId] || null;
}
