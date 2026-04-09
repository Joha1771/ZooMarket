import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { useProducts } from "../hooks/useProducts";

const filterGroups = [
  {
    id: "type",
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
      "Против ожирения шерсти",
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
      "Farmina N&D3",
      "Gemon",
    ],
  },
];

function FilterGroup({ group }) {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState({});
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? group.options : group.options.slice(0, 6);

  const toggle = (opt) =>
    setChecked((prev) => ({ ...prev, [opt]: !prev[opt] }));

  return (
    <div className="mb-4">
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
                checked={!!checked[opt]}
                onChange={() => toggle(opt)}
                className="w-4 h-4 rounded cursor-pointer accent-orange-500"
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

const quickFilters = ["Породные корма ×", "Консервы ×", "Взрослые ×"];

export default function CatalogPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const [priceFrom, setPriceFrom] = useState("56");
  const [priceTo, setPriceTo] = useState("2300");
  const [activeQuick, setActiveQuick] = useState([]);

  const { products, loading } = useProducts(
    category === "all" ? null : category,
  );

  const filtered = products.filter((p) => {
    if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  const title =
    category === "all"
      ? "Все товары"
      : `Корм для ${category === "cats" ? "кошек" : category}`;

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
        <span className="text-gray-600">{title}</span>
      </div>

      <h1 className="mb-5 text-2xl font-bold text-gray-900">{title}</h1>

      {/* Top filters bar */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="flex items-center gap-2 px-3 text-sm text-gray-600 border border-gray-200 rounded h-9">
          Цена
        </div>
        <span className="text-xs text-gray-400">от</span>
        <input
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          className="w-16 px-2 text-sm border border-gray-200 rounded outline-none h-9 focus:border-orange-400"
        />
        <span className="text-xs text-gray-400">до</span>
        <input
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          className="w-20 px-2 text-sm border border-gray-200 rounded outline-none h-9 focus:border-orange-400"
        />

        {/* Quick filters */}
        <div className="flex flex-wrap gap-2 ml-2">
          {quickFilters.map((f) => (
            <button
              key={f}
              className="h-8 px-3 text-xs text-orange-500 transition-colors border border-orange-300 rounded cursor-pointer bg-orange-50 hover:bg-orange-100"
            >
              {f}
            </button>
          ))}
          <button className="h-8 px-3 ml-1 text-xs text-orange-500 bg-transparent border border-gray-200 rounded cursor-pointer hover:border-orange-300">
            Сбросить фильтры ×
          </button>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 px-3 ml-auto text-sm text-gray-600 border border-gray-200 rounded cursor-pointer h-9">
          По популярности
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar filters */}
        <aside className="flex-shrink-0 hidden w-52 lg:block">
          {filterGroups.map((g) => (
            <FilterGroup key={g.id} group={g} />
          ))}
        </aside>

        {/* Products grid */}
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg h-72 animate-pulse"
                />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-gray-400">
              Товары не найдены
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
              {/* Pagination */}
              <div className="flex items-center justify-center gap-1 mt-8">
                <button className="flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-white border border-gray-200 rounded cursor-pointer hover:border-orange-400">
                  ‹
                </button>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className={`w-8 h-8 flex items-center justify-center text-sm rounded cursor-pointer border transition-colors ${
                      n === 1
                        ? "bg-orange-500 text-white border-orange-500"
                        : "text-gray-600 border-gray-200 bg-white hover:border-orange-400"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <span className="flex items-center justify-center w-8 h-8 text-sm text-gray-400">
                  ...
                </span>
                <button className="flex items-center justify-center w-8 h-8 text-sm text-gray-600 bg-white border border-gray-200 rounded cursor-pointer hover:border-orange-400">
                  45
                </button>
                <button className="flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-white border border-gray-200 rounded cursor-pointer hover:border-orange-400">
                  ›
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* SEO text block */}
      <div className="max-w-4xl mt-12">
        <h2 className="mb-3 text-base font-bold text-gray-800">
          О кормлении кошек
        </h2>
        <p className="text-sm leading-relaxed text-gray-500">
          Выбор корма — важный вопрос для здоровья вашего питомца. В нашем
          интернет-магазине «Сытая Морда» вы найдёте широкий ассортимент кормов
          для кошек от ведущих производителей.
        </p>
      </div>
    </div>
  );
}
