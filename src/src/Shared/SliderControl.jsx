// ─── SHARED SLIDER CONTROL ────────────────────────────────────────────────────
// Заменяет повторяющийся паттерн слайдера в:
//   BoxModel.jsx     (padding, border, margin)
//   ColorsFonts.jsx  (R, G, B, Alpha)
//   Transforms.jsx   (rotate, scale, translateX, skewX)
//   Operators.jsx    (a, b)
//   Functions.jsx    (a, b)
//   CssGrid.jsx      (cols, rows, gap)
//   Animations.jsx   (duration)
//   Transition.jsx   (duration)

/**
 * @param {string}   label    — подпись над слайдером
 * @param {number}   value    — текущее значение
 * @param {string}   [unit]   — единица измерения (px, deg, %, ...)
 * @param {number}   min
 * @param {number}   max
 * @param {number}   [step]
 * @param {string}   [color]  — акцентный цвет
 * @param {function} onChange — (number) => void
 */
export function SliderControl({
  label,
  value,
  unit = "",
  min = 0,
  max = 100,
  step = 1,
  color = "#c85c1a",
  onChange,
}) {
  return (
    <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
      <div className="font-mono text-[10px] mb-1" style={{ color }}>
        {label}
      </div>
      <div className="font-mono text-xl font-black mb-1" style={{ color }}>
        {value}{unit}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
        style={{ accentColor: color }}
      />
    </div>
  );
}

// ─── ИСПОЛЬЗОВАНИЕ ────────────────────────────────────────────────────────────
// БЫЛО (в каждом компоненте ~10 строк):
//
//   <div className="p-2.5 rounded-lg bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
//     <div className="font-mono text-[10px] mb-1" style={{ color: "#4a9e60" }}>padding</div>
//     <div className="mb-1 font-mono text-xl font-black" style={{ color: "#4a9e60" }}>{padding}px</div>
//     <input type="range" min={4} max={40} value={padding}
//       onChange={(e) => setPadding(Number(e.target.value))}
//       style={{ accentColor: "#4a9e60" }} />
//   </div>
//
// СТАЛО (1 строка):
//
//   import { SliderControl } from "@/shared/SliderControl";
//   <SliderControl label="padding" value={padding} unit="px"
//     min={4} max={40} color="#4a9e60" onChange={setPadding} />
