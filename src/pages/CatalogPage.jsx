import { useState, useEffect, useCallback } from "react";
import {
  useParams,
  useSearchParams,
  Link,
  useNavigate,
} from "react-router-dom";
import { ChevronUp, ChevronDown, X } from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { getFilteredProducts } from "../api/api";

const ITEMS_PER_PAGE = 12;

const filterGroups = [
  {
    id: "subcategory",
    label: "Тип",
    options: [
      "Породные корма",
      "Сухой корм",
      "Премиум",
      "Холистик",
      "Консервы",
      "Влажный корм",
      "Лечебный корм",
      "Заменители молока",
    ],
  },
  {
    id: "age",
    label: "Возраст",
    options: ["Взрослые", "Котята", "Пожилые"],
  },
  {
    id: "purpose",
    label: "Назначение",
    options: [
      "Беременные и кормящие",
      "Гипоаллергенный",
      "Для шерсти и кожи",
      "Крупные породы",
      "Ожирение",
      "Стерилизованные",
      "Для суставов",
      "Для чистых зубов",
      "Против комков шерсти",
      "С чувствительным пищеварением",
    ],
  },
  {
    id: "brand",
    label: "Производитель",
    options: [
      "Royal Canin",
      "Brit",
      "Brit Care",
      "Brit Veterinary Diet",
      "Eukanuba",
      "Farmina Matisse",
      "Farmina Vet Life",
      "Farmina ND",
      "Gemon",
    ],
  },
];

const sortOptions = [
  { value: "popular", label: "По популярности" },
  { value: "price_asc", label: "Сначала дешевле" },
  { value: "price_desc", label: "Сначала дороже" },
  { value: "new", label: "Новинки" },
];

// Quick-фильтры по категориям navbar
const QUICK_FILTERS_BY_CATEGORY = {
  cats: ["Влажный", "Сухой", "Холистик", "При аллергии", "Котятам"],
  dogs: ["Влажный", "Сухой", "Холистик", "При аллергии", "Щенкам"],
  rodents: ["Хомяки", "Кролики", "Морские свинки", "Шиншиллы"],
  birds: ["Попугаи", "Канарейки", "Корм", "Клетки"],
  aquarium: ["Корм", "Оборудование", "Декор", "Химия"],
  all: ["Влажный", "Сухой", "Холистик", "При аллергии", "Котятам"],
};

// Маппинг категорий slug → русское название для Supabase
const CATEGORY_MAP = {
  cats: "Кошки",
  dogs: "Собаки",
  rodents: "Грызуны",
  birds: "Птицы",
  aquarium: "Аквариумистика",
};

function FilterGroup({ group, selected, onChange }) {
  const [open, setOpen] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? group.options : group.options.slice(0, 6);

  return (
    <div className="mb-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full p-0 mb-2 text-sm font-semibold text-gray-800 bg-transparent border-none cursor-pointer"
      >
        {group.label}
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {open && (
        <div className="flex flex-col gap-1.5">
          {visible.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selected === opt}
                onChange={() => onChange(selected === opt ? null : opt)}
                className="w-4 h-4 cursor-pointer accent-orange-500"
              />
              <span className="text-xs text-gray-600">{opt}</span>
            </label>
          ))}
          {group.options.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="p-0 mt-1 text-xs text-left text-orange-500 bg-transparent border-none cursor-pointer hover:underline"
            >
              {showAll
                ? "Скрыть"
                : `Показать ещё (${group.options.length - 6})`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function CatalogPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [priceFrom, setPriceFrom] = useState("0");
  const [priceTo, setPriceTo] = useState("99999");
  const [priceFromInput, setPriceFromInput] = useState("");
  const [priceToInput, setPriceToInput] = useState("");
  const [filters, setFilters] = useState({
    subcategory: null,
    age: null,
    purpose: null,
    brand: null,
  });
  const [sort, setSort] = useState("popular");
  const [sortOpen, setSortOpen] = useState(false);

  // ── quickActive теперь хранит одно значение (toggle), не массив
  const [quickActive, setQuickActive] = useState(null);

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const q = searchParams.get("q") || "";

  // Quick-фильтры для текущей категории
  const quickFiltersList =
    QUICK_FILTERS_BY_CATEGORY[category] || QUICK_FILTERS_BY_CATEGORY["all"];

  const fetchProducts = useCallback(() => {
    setLoading(true);

    // Переводим slug → русское название для Supabase
    const categoryRu = CATEGORY_MAP[category] || null;

    getFilteredProducts({
      category: categoryRu,
      quickFilter: quickActive || undefined, // ← передаём активный quick-фильтр
      priceFrom: priceFrom || undefined,
      priceTo: priceTo || undefined,
      subcategory: filters.subcategory || undefined,
      age: filters.age || undefined,
      purpose: filters.purpose || undefined,
      brand: filters.brand || undefined,
      sort,
      q: q || undefined,
    })
      .then((res) => {
        setProducts(Array.isArray(res.data) ? res.data : []);
        setPage(1);
      })
      .catch((err) => console.error("CatalogPage fetch error:", err))
      .finally(() => setLoading(false));
  }, [category, priceFrom, priceTo, filters, sort, q, quickActive]); // ← добавили quickActive

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Сбрасываем quick-фильтр при смене категории
  useEffect(() => {
    setQuickActive(null);
  }, [category]);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginated = products.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const activeTags = Object.entries(filters)
    .filter(([, v]) => v)
    .map(([k, v]) => ({ key: k, label: v }));

  const resetFilters = () => {
    setFilters({ subcategory: null, age: null, purpose: null, brand: null });
    setPriceFrom("0");
    setPriceTo("99999");
    setPriceFromInput("");
    setPriceToInput("");
    setQuickActive(null); // ← сбрасываем и quick-фильтр
  };

  const categoryTitle =
    category === "all"
      ? "Все товары"
      : category === "cats"
        ? "Корм для кошек"
        : category === "dogs"
          ? "Корм для собак"
          : CATEGORY_MAP[category] || category;

  const currentSortLabel = sortOptions.find((s) => s.value === sort)?.label;

  return (
    <div className="max-w-[1170px] px-5 py-6 mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
        <Link to="/" className="no-underline hover:text-orange-500">
          Главная
        </Link>
        <span>›</span>
        <Link
          to={`/category/${category}`}
          className="no-underline hover:text-orange-500"
        >
          Товары для {category === "cats" ? "кошек" : "животных"}
        </Link>
        <span>›</span>
        <span className="text-gray-600">{categoryTitle}</span>
      </div>

      <h1 className="mb-5 text-2xl font-bold text-gray-900">{categoryTitle}</h1>

      {/* Top filters bar */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs text-gray-400">Часто ищут:</span>

        {quickFiltersList.map((f) => (
          <button
            key={f}
            onClick={() =>
              // toggle: повторный клик снимает фильтр
              setQuickActive((prev) => (prev === f ? null : f))
            }
            className={`h-7 px-3 text-xs rounded border cursor-pointer transition-colors ${
              quickActive === f
                ? "border-orange-400 bg-orange-50 text-orange-500"
                : "border-gray-200 text-gray-600 hover:border-orange-300 bg-white"
            }`}
          >
            {f}
          </button>
        ))}

        {/* Сортировка */}
        <div className="relative ml-auto">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-2 px-3 text-sm text-gray-600 transition-colors bg-white border border-gray-200 rounded cursor-pointer h-9 hover:border-orange-400"
          >
            {currentSortLabel}
            <ChevronDown size={14} />
          </button>
          {sortOpen && (
            <div className="absolute right-0 top-10 z-30 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[180px]">
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setSort(opt.value);
                    setSortOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm cursor-pointer border-none bg-transparent hover:text-orange-500 transition-colors ${
                    sort === opt.value
                      ? "text-orange-500 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Активные теги */}
      {(activeTags.length > 0 || quickActive) && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {/* Тег активного quick-фильтра */}
          {quickActive && (
            <button
              onClick={() => setQuickActive(null)}
              className="flex items-center gap-1 px-3 text-xs text-orange-500 transition-colors border border-orange-300 rounded cursor-pointer h-7 bg-orange-50 hover:bg-orange-100"
            >
              {quickActive}
              <X size={11} />
            </button>
          )}
          {activeTags.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilters((prev) => ({ ...prev, [t.key]: null }))}
              className="flex items-center gap-1 px-3 text-xs text-orange-500 transition-colors border border-orange-300 rounded cursor-pointer h-7 bg-orange-50 hover:bg-orange-100"
            >
              {t.label}
              <X size={11} />
            </button>
          ))}
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 px-3 text-xs text-gray-500 transition-colors bg-white border border-gray-200 rounded cursor-pointer h-7 hover:border-orange-300"
          >
            Сбросить фильтры <X size={11} />
          </button>
        </div>
      )}

      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="flex-shrink-0 hidden w-52 lg:block">
          <div className="mb-5">
            <p className="mb-2 text-sm font-semibold text-gray-800">Цена</p>
            <div className="flex items-center gap-2">
              <input
                value={priceFromInput}
                onChange={(e) => setPriceFromInput(e.target.value)}
                onBlur={() => {
                  if (priceFromInput) setPriceFrom(priceFromInput);
                }}
                placeholder="От"
                className="w-20 px-2 text-sm transition-colors border border-gray-200 rounded outline-none h-9 focus:border-orange-400"
              />
              <input
                value={priceToInput}
                onChange={(e) => setPriceToInput(e.target.value)}
                onBlur={() => {
                  if (priceToInput) setPriceTo(priceToInput);
                }}
                placeholder="До"
                className="w-20 px-2 text-sm transition-colors border border-gray-200 rounded outline-none h-9 focus:border-orange-400"
              />
            </div>
          </div>

          {filterGroups.map((g) => (
            <FilterGroup
              key={g.id}
              group={g}
              selected={filters[g.id]}
              onChange={(val) =>
                setFilters((prev) => ({ ...prev, [g.id]: val }))
              }
            />
          ))}
        </aside>

        {/* Products grid */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-4 gap-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 border border-white h-72 animate-pulse"
                />
              ))}
            </div>
          ) : paginated.length === 0 ? (
            <div className="py-20 text-center text-gray-400">
              <p className="mb-3 text-base">Товары не найдены</p>
              <button
                onClick={resetFilters}
                className="text-sm text-orange-500 bg-transparent border-none cursor-pointer hover:underline"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {paginated.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1 mt-8">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center justify-center w-8 h-8 text-sm text-gray-400 transition-colors bg-white border border-gray-200 rounded cursor-pointer hover:border-orange-400 disabled:opacity-40"
                  >
                    ‹
                  </button>
                  {Array.from(
                    { length: Math.min(totalPages, 7) },
                    (_, i) => i + 1,
                  ).map((n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-8 h-8 flex items-center justify-center text-sm rounded cursor-pointer border transition-colors ${
                        n === page
                          ? "bg-orange-500 text-white border-orange-500"
                          : "text-gray-600 border-gray-200 bg-white hover:border-orange-400"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  {totalPages > 7 && (
                    <span className="px-1 text-sm text-gray-400">...</span>
                  )}
                  {totalPages > 7 && (
                    <button
                      onClick={() => setPage(totalPages)}
                      className="flex items-center justify-center w-8 h-8 text-sm text-gray-600 transition-colors bg-white border border-gray-200 rounded cursor-pointer hover:border-orange-400"
                    >
                      {totalPages}
                    </button>
                  )}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex items-center justify-center w-8 h-8 text-sm text-gray-400 transition-colors bg-white border border-gray-200 rounded cursor-pointer hover:border-orange-400 disabled:opacity-40"
                  >
                    ›
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
