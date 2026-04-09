// ─── SHARED UTILS ─────────────────────────────────────────────────────────────

/**
 * Получить значение из объекта по dot-path строке
 * Заменяет: getByPath (Curriculum.jsx) и get (HtmlCss/Ui/Ui.jsx)
 *
 * @example getByPath(t, "lesson.phases.explain") → "Tushuntirish"
 */
export function getByPath(obj, path) {
  if (!path) return undefined;
  return path.split(".").reduce((acc, k) => acc?.[k], obj);
}
