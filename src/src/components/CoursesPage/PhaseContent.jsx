import { Theories } from "../lessons/Theories";
import {
  JsPhaseContent,
  JS_CONTENT_KEYS,
} from "../lessons/Javascript/javascript";
import {
  HtmlCssPhaseContent,
  HTML_CSS_CONTENT_KEYS,
} from "../lessons/HtmlCss/index";
import {
  CssAdvancedPhaseContent,
  CSS_ADVANCED_CONTENT_KEYS,
} from "../lessons/CssAdvanced/css-advanced";
import {
  ADVANCED_JS_CONTENT_KEYS,
  AdvancedJsPhaseContent,
} from "../lessons/AdvancedJavascript/AdvancedJavascript";
import {
  DOM_CONTENT_KEYS,
  JsDomPhaseContent,
} from "../lessons/Dom/DomIndex";

function ExplainContent({ lessonId, phaseId, t }) {
  if (HTML_CSS_CONTENT_KEYS[lessonId])
    return <HtmlCssPhaseContent lessonId={lessonId} phaseId={phaseId} t={t} />;
  if (CSS_ADVANCED_CONTENT_KEYS[lessonId])
    return <CssAdvancedPhaseContent lessonId={lessonId} phaseId={phaseId} />;
  if (JS_CONTENT_KEYS[lessonId])
    return <JsPhaseContent lessonId={lessonId} phaseId={phaseId} />;
  if (ADVANCED_JS_CONTENT_KEYS[lessonId])
    return (
      <AdvancedJsPhaseContent lessonId={lessonId} phaseId={phaseId} t={t} />
    );
  if (DOM_CONTENT_KEYS[lessonId])
    return <JsDomPhaseContent lessonId={lessonId} phaseId={phaseId} t={t} />;
  return null;
}

export function PhaseContent({ lessonId, phaseId, t }) {
  if (phaseId === "theory") {
    return <Theories lessonId={lessonId} t={t} />;
  }

  return <ExplainContent lessonId={lessonId} phaseId={phaseId} t={t} />;
}
