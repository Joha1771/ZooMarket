// ═══════════════════════════════════════════════════════════════════════════════
// REACT — MAIN INDEX
// ═══════════════════════════════════════════════════════════════════════════════

import { ReactIntroExplain } from "./Content/ReactIntro";
import { ComponentsExplain } from "./Content/Components";
import { PropsMappingExplain } from "./Content/PropsMapping";
import { UseStateExplain } from "./Content/UseState";
import {
  REACT_STARTERS,
  REACT_QUIZZES,
  REACT_CONTENT_KEYS,
} from "./Data/ReactData";

export { REACT_CONTENT_KEYS };

export function ReactPhaseContent({ lessonId, phaseId }) {
  const map = {
    "react-intro": {
      explain: <ReactIntroExplain />,
      learn: <ReactIntroExplain />,
    },
    components: {
      explain: <ComponentsExplain />,
      learn: <ComponentsExplain />,
    },
    "props-mapping": {
      explain: <PropsMappingExplain />,
      learn: <PropsMappingExplain />,
    },
    usestate: {
      explain: <UseStateExplain />,
      learn: <UseStateExplain />,
    },
    "react-events": {
      explain: <ReactEventsExplain />,
      learn: <ReactEventsExplain />,
    },
    useeffect: {
      explain: <UseEffectExplain />,
      learn: <UseEffectExplain />,
    },
    axios: {
      explain: <AxiosExplain />,
      learn: <AxiosExplain />,
    },
    router: {
      explain: <RouterDomExplain />,
      learn: <RouterDomExplain />,
    },
    optimization: {
      explain: <OptimizationExplain />,
      learn: <OptimizationExplain />,
    },
    context: {
      explain: <ContextExplain />,
      learn: <ContextExplain />,
    },
    "custom-hooks": {
      explain: <CustomHooksExplain />,
      learn: <CustomHooksExplain />,
    },
    "react-project": {
      explain: <ReactProjectExplain />,
      learn: <ReactProjectExplain />,
    },
  };

  return map[lessonId]?.[phaseId] ?? null;
}

export function getReactStarter(lessonId) {
  return REACT_STARTERS[lessonId] || null;
}

export function getReactQuiz(lessonId) {
  return REACT_QUIZZES[lessonId] || null;
}
