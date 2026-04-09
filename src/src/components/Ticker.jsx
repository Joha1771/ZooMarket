import { TICKER_ITEMS } from "../data";

export default function Ticker() {
  // Дублируем элементы для бесшовной анимации
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="border-y border-black/10 bg-[#ddd9d0] py-3.5 overflow-hidden group">
      <div
        className="flex gap-14 group-hover:[animation-play-state:paused]"
        style={{
          animation: "ticker 32s linear infinite",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 font-mono text-[11px] text-[#7a7468] whitespace-nowrap hover:text-[#1a1814] transition-colors duration-200 cursor-default"
          >
            <span className="w-1.5 h-1.5 bg-[#c85c1a] rounded-sm flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
