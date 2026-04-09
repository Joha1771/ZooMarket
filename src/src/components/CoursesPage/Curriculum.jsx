// ─── CURRICULUM DATA ──────────────────────────────────────────────────────────
import { JS_CONTENT_KEYS } from "../lessons/Javascript/javascript";
import { HTML_CSS_CONTENT_KEYS } from "../lessons/HtmlCss/index";
import { CSS_ADVANCED_CONTENT_KEYS } from "../lessons/CssAdvanced/css-advanced";
import { ADVANCED_JS_CONTENT_KEYS } from "../lessons/AdvancedJavascript/AdvancedJavascript";
import { DOM_CONTENT_KEYS } from "../lessons/Dom/DomIndex";

export const MODULES = [
  {
    id: "html-css",
    num: "01",
    titleKey: "modules.htmlCss.title",
    icon: "◧",
    weeksKey: "modules.htmlCss.weeks",
    lessons: [
      {
        id: "how-web-works",
        titleKey: "modules.htmlCss.lessons.howWebWorks",
        free: true,
      },
      {
        id: "html-basics",
        titleKey: "modules.htmlCss.lessons.htmlBasics",
        free: true,
      },
      {
        id: "text-links-img",
        titleKey: "modules.htmlCss.lessons.textLinksImg",
        free: true,
      },
      {
        id: "forms-tables",
        titleKey: "modules.htmlCss.lessons.formsTables",
        free: false,
      },
      {
        id: "semantic-html",
        titleKey: "modules.htmlCss.lessons.semanticHtml",
        free: false,
      },
      {
        id: "css-intro",
        titleKey: "modules.htmlCss.lessons.cssIntro",
        free: false,
      },
      {
        id: "colors-fonts",
        titleKey: "modules.htmlCss.lessons.colorsFonts",
        free: false,
      },
      {
        id: "box-model",
        titleKey: "modules.htmlCss.lessons.boxModel",
        free: false,
      },
      {
        id: "flexbox",
        titleKey: "modules.htmlCss.lessons.flexbox",
        free: false,
      },
      { id: "grid", titleKey: "modules.htmlCss.lessons.grid", free: false },
      { id: "github", titleKey: "modules.htmlCss.lessons.github", free: false },
      {
        id: "project-landing",
        titleKey: "modules.htmlCss.lessons.projectLanding",
        free: false,
      },
    ],
  },
  {
    id: "css-sass",
    num: "02",
    titleKey: "modules.cssSass.title",
    icon: "✦",
    weeksKey: "modules.cssSass.weeks",
    lessons: [
      {
        id: "position",
        titleKey: "modules.cssSass.lessons.position",
        free: true,
      },
      { id: "pseudo", titleKey: "modules.cssSass.lessons.pseudo", free: true },
      {
        id: "transforms",
        titleKey: "modules.cssSass.lessons.transforms",
        free: true,
      },
      {
        id: "animations",
        titleKey: "modules.cssSass.lessons.animations",
        free: false,
      },
      {
        id: "gradients",
        titleKey: "modules.cssSass.lessons.gradients",
        free: false,
      },
      {
        id: "responsive",
        titleKey: "modules.cssSass.lessons.responsive",
        free: false,
      },
      {
        id: "figma-css",
        titleKey: "modules.cssSass.lessons.figmaCss",
        free: false,
      },
      {
        id: "transition",
        titleKey: "modules.cssSass.lessons.transition",
        free: false,
      },
      {
        id: "sass-basics",
        titleKey: "modules.cssSass.lessons.sassBasics",
        free: false,
      },
      {
        id: "sass-advanced",
        titleKey: "modules.cssSass.lessons.sassAdvanced",
        free: false,
      },
      {
        id: "tailwind",
        titleKey: "modules.cssSass.lessons.tailwind",
        free: false,
      },
      {
        id: "exam-figma",
        titleKey: "modules.cssSass.lessons.examFigma",
        free: false,
      },
    ],
  },
  {
    id: "javascript",
    num: "03",
    titleKey: "modules.javascript.title",
    icon: "⚡",
    weeksKey: "modules.javascript.weeks",
    lessons: [
      {
        id: "js-intro",
        titleKey: "modules.javascript.lessons.jsIntro",
        free: true,
      },
      {
        id: "variables",
        titleKey: "modules.javascript.lessons.variables",
        free: true,
      },
      {
        id: "operators",
        titleKey: "modules.javascript.lessons.operators",
        free: true,
      },
      {
        id: "conditions",
        titleKey: "modules.javascript.lessons.conditions",
        free: false,
      },
      {
        id: "loops",
        titleKey: "modules.javascript.lessons.loops",
        free: false,
      },
      {
        id: "functions",
        titleKey: "modules.javascript.lessons.functions",
        free: false,
      },
      {
        id: "strings",
        titleKey: "modules.javascript.lessons.strings",
        free: false,
      },
      {
        id: "arrays",
        titleKey: "modules.javascript.lessons.arrays",
        free: false,
      },
      {
        id: "objects",
        titleKey: "modules.javascript.lessons.objects",
        free: false,
      },
      {
        id: "math-date",
        titleKey: "modules.javascript.lessons.mathDate",
        free: false,
      },
      {
        id: "destructuring",
        titleKey: "modules.javascript.lessons.destructuring",
        free: false,
      },
      {
        id: "array-methods",
        titleKey: "modules.javascript.lessons.arrayMethods",
        free: false,
      },
    ],
  },
  {
    id: "advanced-js",
    num: "04",
    titleKey: "modules.advancedJs.title",
    icon: "∞",
    weeksKey: "modules.advancedJs.weeks",
    lessons: [
      {
        id: "hoisting",
        titleKey: "modules.advancedJs.lessons.hoisting",
        free: true,
      },
      {
        id: "closure",
        titleKey: "modules.advancedJs.lessons.closure",
        free: true,
      },
      {
        id: "fn-types",
        titleKey: "modules.advancedJs.lessons.fnTypes",
        free: true,
      },
      { id: "hof", titleKey: "modules.advancedJs.lessons.hof", free: false },
      {
        id: "prototypes",
        titleKey: "modules.advancedJs.lessons.prototypes",
        free: false,
      },
      {
        id: "classes",
        titleKey: "modules.advancedJs.lessons.classes",
        free: false,
      },
      {
        id: "map-set",
        titleKey: "modules.advancedJs.lessons.mapSet",
        free: false,
      },
      {
        id: "errors",
        titleKey: "modules.advancedJs.lessons.errors",
        free: false,
      },
      {
        id: "event-loop",
        titleKey: "modules.advancedJs.lessons.eventLoop",
        free: false,
      },
      {
        id: "promise",
        titleKey: "modules.advancedJs.lessons.promise",
        free: false,
      },
      {
        id: "async-await",
        titleKey: "modules.advancedJs.lessons.asyncAwait",
        free: false,
      },
      {
        id: "codewars",
        titleKey: "modules.advancedJs.lessons.codewars",
        free: false,
      },
    ],
  },
  {
    id: "js-dom",
    num: "05",
    titleKey: "modules.jsDom.title",
    icon: "⬡",
    weeksKey: "modules.jsDom.weeks",
    lessons: [
      {
        id: "dom-intro",
        titleKey: "modules.jsDom.lessons.domIntro",
        free: true,
      },
      {
        id: "dom-selecting",
        titleKey: "modules.jsDom.lessons.domSelect",
        free: true,
      },
      {
        id: "dom-styling",
        titleKey: "modules.jsDom.lessons.domStyle",
        free: true,
      },
      {
        id: "dom-manipulating",
        titleKey: "modules.jsDom.lessons.domCreate",
        free: false,
      },
      {
        id: "dom-attributes",
        titleKey: "modules.jsDom.lessons.domAttrs",
        free: false,
      },
      { id: "dom-events", titleKey: "modules.jsDom.lessons.events", free: false },
      {
        id: "dom-delegation",
        titleKey: "modules.jsDom.lessons.bubbling",
        free: false,
      },
      { id: "js-modules", titleKey: "modules.jsDom.lessons.modules", free: false },
      { id: "localstorage", titleKey: "modules.jsDom.lessons.storage", free: false },
      {
        id: "fetch-dom",
        titleKey: "modules.jsDom.lessons.fetchDom",
        free: false,
      },
      {
        id: "crud-localstorage",
        titleKey: "modules.jsDom.lessons.crudStorage",
        free: false,
      },
      {
        id: "spa-exam",
        titleKey: "modules.jsDom.lessons.examSpa",
        free: false,
      },
    ],
  },
  {
    id: "react",
    num: "06",
    titleKey: "modules.react.title",
    icon: "⚛",
    weeksKey: "modules.react.weeks",
    lessons: [
      {
        id: "react-intro",
        titleKey: "modules.react.lessons.reactIntro",
        free: true,
      },
      {
        id: "components",
        titleKey: "modules.react.lessons.components",
        free: true,
      },
      {
        id: "props-mapping",
        titleKey: "modules.react.lessons.propsMapping",
        free: true,
      },
      {
        id: "usestate",
        titleKey: "modules.react.lessons.usestate",
        free: false,
      },
      {
        id: "react-events",
        titleKey: "modules.react.lessons.reactEvents",
        free: false,
      },
      {
        id: "useeffect",
        titleKey: "modules.react.lessons.useeffect",
        free: false,
      },
      { id: "axios", titleKey: "modules.react.lessons.axios", free: false },
      { id: "router", titleKey: "modules.react.lessons.router", free: false },
      {
        id: "optimization",
        titleKey: "modules.react.lessons.optimization",
        free: false,
      },
      { id: "context", titleKey: "modules.react.lessons.context", free: false },
      {
        id: "custom-hooks",
        titleKey: "modules.react.lessons.customHooks",
        free: false,
      },
      {
        id: "react-project",
        titleKey: "modules.react.lessons.reactProject",
        free: false,
      },
    ],
  },
  {
    id: "redux",
    num: "07",
    titleKey: "modules.redux.title",
    icon: "◈",
    weeksKey: "modules.redux.weeks",
    lessons: [
      {
        id: "rtk-basics",
        titleKey: "modules.redux.lessons.rtkBasics",
        free: true,
      },
      {
        id: "rtk-thunk",
        titleKey: "modules.redux.lessons.rtkThunk",
        free: true,
      },
      {
        id: "rtk-query",
        titleKey: "modules.redux.lessons.rtkQuery",
        free: true,
      },
      { id: "zustand", titleKey: "modules.redux.lessons.zustand", free: false },
      {
        id: "protected",
        titleKey: "modules.redux.lessons.protected",
        free: false,
      },
      {
        id: "validation",
        titleKey: "modules.redux.lessons.validation",
        free: false,
      },
      { id: "ui-libs", titleKey: "modules.redux.lessons.uiLibs", free: false },
      { id: "swagger", titleKey: "modules.redux.lessons.swagger", free: false },
      { id: "lazy", titleKey: "modules.redux.lessons.lazy", free: false },
      { id: "charts", titleKey: "modules.redux.lessons.charts", free: false },
      {
        id: "pagination",
        titleKey: "modules.redux.lessons.pagination",
        free: false,
      },
      { id: "admin", titleKey: "modules.redux.lessons.admin", free: false },
    ],
  },
  {
    id: "next-ts",
    num: "08",
    titleKey: "modules.nextTs.title",
    icon: "▲",
    weeksKey: "modules.nextTs.weeks",
    lessons: [
      {
        id: "ts-intro",
        titleKey: "modules.nextTs.lessons.tsIntro",
        free: true,
      },
      {
        id: "ts-types",
        titleKey: "modules.nextTs.lessons.tsTypes",
        free: true,
      },
      {
        id: "ts-classes",
        titleKey: "modules.nextTs.lessons.tsClasses",
        free: true,
      },
      {
        id: "react-ts",
        titleKey: "modules.nextTs.lessons.reactTs",
        free: false,
      },
      {
        id: "next-rendering",
        titleKey: "modules.nextTs.lessons.nextRendering",
        free: false,
      },
      {
        id: "app-router",
        titleKey: "modules.nextTs.lessons.appRouter",
        free: false,
      },
      {
        id: "server-client",
        titleKey: "modules.nextTs.lessons.serverClient",
        free: false,
      },
      {
        id: "data-fetching",
        titleKey: "modules.nextTs.lessons.dataFetching",
        free: false,
      },
      {
        id: "optimization",
        titleKey: "modules.nextTs.lessons.optimization",
        free: false,
      },
      {
        id: "middleware",
        titleKey: "modules.nextTs.lessons.middleware",
        free: false,
      },
      {
        id: "final-prep",
        titleKey: "modules.nextTs.lessons.finalPrep",
        free: false,
      },
      {
        id: "final-exam",
        titleKey: "modules.nextTs.lessons.finalExam",
        free: false,
      },
    ],
  },
];

// ─── LESSON CONTENT KEYS ──────────────────────────────────────────────────────
export const LESSON_CONTENT_KEYS = {
  ...HTML_CSS_CONTENT_KEYS,
  ...CSS_ADVANCED_CONTENT_KEYS,
  ...JS_CONTENT_KEYS,
  ...ADVANCED_JS_CONTENT_KEYS,
  ...DOM_CONTENT_KEYS,
  hoisting: {
    xp: 100,
    type: "visual",
    phases: [
      { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
      { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
      { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
      {
        id: "code",
        labelKey: "lesson.phases.code",
        icon: "✏️",
        starterCode: `// Hoisting tekshiruvi\nconsole.log(a); // ???\nvar a = 5;\nconsole.log(a); // ???`,
        starterHTML: `<!DOCTYPE html>\n<html>\n<body>\n<script>\n// JS kod shu yerda\n</script>\n</body>\n</html>`,
        lang: "js",
      },
    ],
    quizKey: "lessons.hoisting.quiz",
  },
};

// ─── MODULE → INTRO ROUTE MAP ─────────────────────────────────────────────────
export const MODULE_INTRO_ROUTES = {
  javascript: { storageKey: "jsIntroSeen", route: "/js-intro" },
  "html-css": { storageKey: "htmlIntroSeen", route: "/html-intro" },
  "css-sass": { storageKey: "cssIntroSeen", route: "/css-intro" },
};

// ─── HELPER ───────────────────────────────────────────────────────────────────
export { getByPath } from "../../Shared/utils";
