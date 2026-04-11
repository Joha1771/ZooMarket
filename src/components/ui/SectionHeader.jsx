import { Link } from "react-router-dom";
import cardsRightArrow from "../../assets/icons/cards-right arrow.svg";

export default function SectionHeader({ title, to }) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      {to && (
        <Link
          to={to}
          className="flex items-center gap-1.5 text-sm text-orange-500 no-underline hover:text-orange-600 transition-colors"
        >
          Смотреть все
          <img src={cardsRightArrow} alt="" className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
