import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import { cn } from "../../utils/cn";

export default function ProductCard({ product, className }) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.weights?.[0] ?? null);
  };

  const imageUrl = product.image_url || product.image || null;

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col p-3 no-underline hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-200",
        className,
      )}
    >
      {/* Image */}
      <div className="relative bg-white dark:bg-gray-800 flex items-center justify-center min-h-[140px] overflow-hidden">
        {product.discount > 0 && (
          <span className="absolute top-0 left-0 bg-red-500 text-white text-[11px] font-bold px-1.5 py-0.5 z-10">
            –{product.discount}%
          </span>
        )}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={product.name}
            className="object-contain w-full transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-[140px] gap-2 text-gray-300">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs text-gray-400">Нет фото</span>
          </div>
        )}
      </div>

      {/* Name */}
      <p className="flex-1 text-[12px] leading-snug text-gray-700 dark:text-gray-300 line-clamp-3 min-h-[48px] mt-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
        {product.name}
      </p>

      {/* Weight selector */}
      {product.weights?.length > 0 && (
        <select
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="px-2 py-1 mt-2 text-xs text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded outline-none cursor-pointer hover:border-orange-400 focus:border-orange-400 transition-colors duration-150"
        >
          {product.weights.map((w) => (
            <option key={w}>{w}</option>
          ))}
        </select>
      )}

      {/* Price */}
      <div className="flex items-baseline gap-2 mt-2">
        <span
          className={`text-[16px] font-bold transition-colors duration-150 ${product.old_price && product.old_price > product.price ? "text-[#FE9015]" : "text-gray-900"}`}
        >
          {Number(product.price).toLocaleString()} Р
        </span>
        {product.old_price && product.old_price > product.price && (
          <span className="text-xs text-gray-400 line-through">
            {Number(product.old_price).toLocaleString()} Р
          </span>
        )}
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAdd}
        className="w-full mt-2 text-sm font-medium text-white bg-orange-500 border-none cursor-pointer h-9 hover:bg-orange-600 active:scale-95 transition-all duration-150"
      >
        В корзину
      </button>

      {/* One click */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="mt-1 text-xs text-center text-orange-500 bg-transparent border-none cursor-pointer hover:text-orange-700 transition-colors duration-150"
      >
        Купить в 1 клик
      </button>
    </Link>
  );
}
