// ═══════════════════════════════════════════════════════════════════════════════
// MAIN EXPORT — PhaseContent map for JS DOM module
// ═══════════════════════════════════════════════════════════════════════════════

import { DomIntroExplain, DomIntroLearn } from "./Content/DomIntro";
import { DomSelectingExplain, DomSelectingLearn } from "./Content/DomSelecting";
import { DomStylingExplain, DomStylingLearn } from "./Content/DomStyling";
import { DomManipulatingExplain, DomManipulatingLearn } from "./Content/DomManipulating";
import { DomAttributesExplain, DomAttributesLearn } from "./Content/DomAttributes";
import { DomEventsExplain, DomEventsLearn } from "./Content/DomEvents";
import { DomDelegationExplain, DomDelegationLearn } from "./Content/DomDelegation";
import { JsModulesExplain, JsModulesLearn } from "./Content/JsModules";
import { LocalStorageExplain, LocalStorageLearn } from "./Content/LocalStorage";
import { FetchDomExplain, FetchDomLearn } from "./Content/FetchDom";
import { CrudLocalStorageExplain, CrudLocalStorageLearn } from "./Content/CrudLocalStorage";
import { SpaExamExplain, SpaExamLearn } from "./Content/SpaExam";
import { DOM_CONTENT_KEYS } from "./Data/DomData";

export function JsDomPhaseContent({ lessonId, phaseId, t }) {
  const map = {
    "dom-intro": {
      explain: <DomIntroExplain t={t} />,
      learn: <DomIntroLearn t={t} />,
    },
    "dom-selecting": {
      explain: <DomSelectingExplain t={t} />,
      learn: <DomSelectingLearn t={t} />,
    },
    "dom-styling": {
      explain: <DomStylingExplain t={t} />,
      learn: <DomStylingLearn t={t} />,
    },
    "dom-manipulating": {
      explain: <DomManipulatingExplain t={t} />,
      learn: <DomManipulatingLearn t={t} />,
    },
    "dom-attributes": {
      explain: <DomAttributesExplain t={t} />,
      learn: <DomAttributesLearn t={t} />,
    },
    "dom-events": {
      explain: <DomEventsExplain t={t} />,
      learn: <DomEventsLearn t={t} />,
    },
    "dom-delegation": {
      explain: <DomDelegationExplain t={t} />,
      learn: <DomDelegationLearn t={t} />,
    },
    "js-modules": {
      explain: <JsModulesExplain t={t} />,
      learn: <JsModulesLearn t={t} />,
    },
    localstorage: {
      explain: <LocalStorageExplain t={t} />,
      learn: <LocalStorageLearn t={t} />,
    },
    "fetch-dom": {
      explain: <FetchDomExplain t={t} />,
      learn: <FetchDomLearn t={t} />,
    },
    "crud-localstorage": {
      explain: <CrudLocalStorageExplain t={t} />,
      learn: <CrudLocalStorageLearn t={t} />,
    },
    "spa-exam": {
      explain: <SpaExamExplain t={t} />,
      learn: <SpaExamLearn t={t} />,
    },
  };

  return map[lessonId]?.[phaseId] ?? null;
}

export { DOM_CONTENT_KEYS };
