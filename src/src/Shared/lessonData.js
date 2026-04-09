// ─── SHARED LESSON DATA ───────────────────────────────────────────────────────
// Заменяет 3 пары одинаковых функций:
//   getHtmlCssStarter  / getHtmlCssQuiz   (HtmlCss/index.jsx)
//   getCssAdvancedStarter / getCssAdvancedQuiz (CssAdvanced/css-advanced.jsx)
//   getJsStarter       / getJsQuiz        (Javascript/javascript.jsx)
//
// И упрощает LessonView.jsx — больше не нужно вызывать три функции подряд

// ─── ИМПОРТЫ ВСЕХ DATA ФАЙЛОВ ─────────────────────────────────────────────────
import {
  STARTERS as HTML_STARTERS,
  QUIZZES as HTML_QUIZZES,
} from "../components/lessons/HtmlCss/Data/Data";
import {
  STARTERS as CSS_STARTERS,
  QUIZZES as CSS_QUIZZES,
} from "../components/lessons/CssAdvanced/Data/Data";
import {
  STARTERS as JS_STARTERS,
  QUIZZES as JS_QUIZZES,
} from "../components/lessons/Javascript/Data/Data";

// ─── ОБЪЕДИНЁННЫЕ СЛОВАРИ ─────────────────────────────────────────────────────
const ALL_STARTERS = {
  ...HTML_STARTERS,
  ...CSS_STARTERS,
  ...JS_STARTERS,
};

const ALL_QUIZZES = {
  ...HTML_QUIZZES,
  ...CSS_QUIZZES,
  ...JS_QUIZZES,
};

// ─── ЕДИНЫЕ ФУНКЦИИ ───────────────────────────────────────────────────────────

/** Возвращает { code, html, lang } для стартового кода урока */
export function getStarter(lessonId) {
  return ALL_STARTERS[lessonId] || null;
}

/** Возвращает { q, options, correct, explain } для квиза урока */
export function getQuiz(lessonId) {
  return ALL_QUIZZES[lessonId] || null;
}

// ─── КАК ИСПОЛЬЗОВАТЬ В LessonView.jsx ───────────────────────────────────────
//
// БЫЛО:
//   import { getHtmlCssStarter, getHtmlCssQuiz } from "../lessons/HtmlCss/index";
//   import { getCssAdvancedStarter, getCssAdvancedQuiz } from "../lessons/CssAdvanced/css-advanced";
//   import { getJsStarter, getJsQuiz } from "../lessons/Javascript/javascript";
//   ...
//   const htmlCssStarter = getHtmlCssStarter(lessonId);
//   const cssAdvStarter  = getCssAdvancedStarter(lessonId);
//   const jsStarter      = getJsStarter(lessonId);
//   const starterCode = currentPhase.starterCode || htmlCssStarter?.code || cssAdvStarter?.code || jsStarter?.code || "";
//   const resolvedQuiz = getHtmlCssQuiz(lessonId) || getCssAdvancedQuiz(lessonId) || getJsQuiz(lessonId) || ...
//
// СТАЛО:
//   import { getStarter, getQuiz } from "@/shared/lessonData";
//   ...
//   const starter = getStarter(lessonId);
//   const starterCode = currentPhase.starterCode || starter?.code || "";
//   const starterHTML = currentPhase.starterHTML || starter?.html || "";
//   const lang        = currentPhase.lang        || starter?.lang || "html";
//   const resolvedQuiz = getQuiz(lessonId) || getByPath(t, content?.quizKey) || null;
