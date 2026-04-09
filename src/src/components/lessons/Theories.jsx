// ─── THEORIES.JSX ─────────────────────────────────────────────────────────────
// Barcha darslar uchun to'liq nazariya (matn + kod + jadval)
// CoursesPage'da PhaseContent ichida 'theory' fazasi uchun ishlatiladi
// ──────────────────────────────────────────────────────────────────────────────

import { T_HowWebWorks } from "../theories/T_Html/T_HowWebWorks.jsx";
import { T_HtmlBasics } from "../theories/T_Html/T_HtmlBasics.jsx";
import { T_TextLinksImages } from "../theories/T_Html/T_TextLinksImg.jsx";
import { T_FormsTables } from "../theories/T_Html/T_FormsTables.jsx";
import { T_SemanticHtml } from "../theories/T_Html/T_SemanticHtml.jsx";
import { T_CssIntro } from "../theories/T_Html/T_CssIntro.jsx";
import { T_ColorsFonts } from "../theories/T_Html/T_ColorsFonts.jsx";
import { T_BoxModel } from "../theories/T_Html/T_BoxModel.jsx";
import { T_Flexbox } from "../theories/T_Html/T_Flexbox.jsx";
import { T_Grid } from "../theories/T_Html/T_Grid.jsx";
import { T_Github } from "../theories/T_Html/T_Github.jsx";
import { T_ProjectLanding } from "../theories/T_Html/T_ProjectLanding.jsx";
import { T_Position } from "../theories/T_Css/T_Position.jsx";
import { T_Pseudo } from "../theories/T_Css/T_Pseudo.jsx";
import { T_Transforms } from "../theories/T_Css/T_Transforms.jsx";
import { T_Animations } from "../theories/T_Css/T_Animations.jsx";
import { T_Responsive } from "../theories/T_Css/T_Responsive.jsx";
import { T_Transition } from "../theories/T_Css/T_Transition.jsx";
import { T_SassBasics } from "../theories/T_Css/T_SassBasics.jsx";
import { T_SassAdvanced } from "../theories/T_Css/T_SassAdvanced.jsx";
import { T_Tailwind } from "../theories/T_Css/T_Tailwind.jsx";
import { T_Gradients } from "../theories/T_Css/T_Gradients.jsx";
import { T_FigmaCSS } from "../theories/T_Css/T_FigmaCss.jsx";
import { T_ExamFigma } from "../theories/T_Css/T_ExamFigma.jsx";

// JavaScript (Basics) theories
import { T_JsIntro } from "../theories/T_Javascript/T_JsIntro.jsx";
import { T_Variables } from "../theories/T_Javascript/T_Variables.jsx";
import { T_Operators } from "../theories/T_Javascript/T_Operators.jsx";
import { T_Conditions } from "../theories/T_Javascript/T_Conditions.jsx";
import { T_Loops } from "../theories/T_Javascript/T_loops.jsx";
import { T_Functions } from "../theories/T_Javascript/T_Functions.jsx";
import { T_Strings } from "../theories/T_Javascript/T_Strings.jsx";
import { T_Arrays } from "../theories/T_Javascript/T_Arrays.jsx";
import { T_ArrayMethods } from "../theories/T_Javascript/T_ArrayMethods.jsx";
import { T_Objects } from "../theories/T_Javascript/T_Objects.jsx";
import { T_Destructuring } from "../theories/T_Javascript/T_Desctructuring.jsx";
import { T_MathDate } from "../theories/T_Javascript/T_MathDate.jsx";

// Advanced JavaScript theories
import { T_Hoisting } from "../theories/T_AdvancedJavascript/T_Hoisting.jsx";
import { T_Closure } from "../theories/T_AdvancedJavascript/T_Closure.jsx";
import { T_FnTypes } from "../theories/T_AdvancedJavascript/T_FnTypes.jsx";
import { T_Hof } from "../theories/T_AdvancedJavascript/T_Hof.jsx";
import { T_Prototypes } from "../theories/T_AdvancedJavascript/T_Prototypes.jsx";
import { T_Classes } from "../theories/T_AdvancedJavascript/T_Classes.jsx";
import { T_MapSet } from "../theories/T_AdvancedJavascript/T_MapSet.jsx";
import { T_ErrorHandling } from "../theories/T_AdvancedJavascript/T_ErrorHandling.jsx";
import { T_EventLoop } from "../theories/T_AdvancedJavascript/T_EventLoop.jsx";
import { T_Promise } from "../theories/T_AdvancedJavascript/T_Promise.jsx";
import { T_AsyncAwait } from "../theories/T_AdvancedJavascript/T_AsyncAwait.jsx";
import { T_CodeWars } from "../theories/T_AdvancedJavascript/T_CodeWars.jsx";

// ─── THEORIES OBJECT ──────────────────────────────────────────────────────────

export const THEORIES = {
  // HTML & CSS Basics
  "how-web-works": T_HowWebWorks,
  "html-basics": T_HtmlBasics,
  "text-links-images": T_TextLinksImages,
  "forms-tables": T_FormsTables,
  "semantic-html": T_SemanticHtml,
  "css-intro": T_CssIntro,
  "colors-fonts": T_ColorsFonts,
  "box-model": T_BoxModel,
  flexbox: T_Flexbox,
  grid: T_Grid,
  github: T_Github,
  "project-landing": T_ProjectLanding,

  // CSS Advanced
  position: T_Position,
  pseudo: T_Pseudo,
  transforms: T_Transforms,
  animations: T_Animations,
  responsive: T_Responsive,
  transition: T_Transition,
  "sass-basics": T_SassBasics,
  "sass-advanced": T_SassAdvanced,
  tailwind: T_Tailwind,
  gradients: T_Gradients,
  "figma-css": T_FigmaCSS,
  "exam-figma": T_ExamFigma,

  // JavaScript Basics
  "js-intro": T_JsIntro,
  variables: T_Variables,
  operators: T_Operators,
  conditions: T_Conditions,
  loops: T_Loops,
  functions: T_Functions,
  strings: T_Strings,
  arrays: T_Arrays,
  "array-methods": T_ArrayMethods,
  objects: T_Objects,
  destructuring: T_Destructuring,
  "math-date": T_MathDate,

  // Advanced JavaScript
  hoisting: T_Hoisting,
  closure: T_Closure,
  "fn-types": T_FnTypes,
  hof: T_Hof,
  prototypes: T_Prototypes,
  classes: T_Classes,
  "map-set": T_MapSet,
  errors: T_ErrorHandling,
  "event-loop": T_EventLoop,
  promise: T_Promise,
  "async-await": T_AsyncAwait,
  codewars: T_CodeWars,
};

// ─── THEORIES COMPONENT ──────────────────────────────────────────────────────

export function Theories({ lessonId, t }) {
  const Component = THEORIES[lessonId];
  if (!Component)
    return (
      <div className="text-sm text-[#7a7468] leading-relaxed p-4 bg-[#f2efe8] rounded-xl border border-[rgba(26,24,20,0.10)]">
        Bu dars uchun nazariya tayyorlanmoqda...
      </div>
    );
  return (
    <div className="bg-[#f2efe8] rounded-xl border border-[rgba(26,24,20,0.10)] p-5 overflow-y-auto max-h-[600px]">
      <Component t={t} />
    </div>
  );
}
