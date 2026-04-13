import { useParams, Link } from "react-router-dom";
import catalog1 from "../assets/icons/catalog1.svg";
import catalog2 from "../assets/icons/catalog2.svg";
import catalog3 from "../assets/icons/catalog3.svg";
import catalog4 from "../assets/icons/catalog4.svg";
import catalog5 from "../assets/icons/catalog5.svg";
import catalog6 from "../assets/icons/catalog6.svg";
import catalog7 from "../assets/icons/catalog7.svg";
import catalog8 from "../assets/icons/catalog8.svg";
import catalog9 from "../assets/icons/catalog9.svg";
import catalog10 from "../assets/icons/catalog10.svg";
import catalog11 from "../assets/icons/catalog11.svg";
import catalog12 from "../assets/icons/catalog12.svg";

const catsSubs = [
  { id: "food", label: "Корм для кошек", icon: catalog1 },
  { id: "treats", label: "Лакомства и витамины", icon: catalog2 },
  { id: "litter", label: "Наполнители для туалета", icon: catalog3 },
  { id: "hygiene", label: "Средства гигиены", icon: catalog4 },
  { id: "clothes", label: "Одежда для кошек", icon: catalog5 },
  { id: "ammo", label: "Амуниция", icon: catalog6 },
  { id: "toys", label: "Игрушки", icon: catalog7 },
  { id: "house", label: "Когтеточки, домики", icon: catalog8 },
  { id: "grooming", label: "Груминг и косметика", icon: catalog9 },
  { id: "bowls", label: "Миски", icon: catalog10 },
  { id: "carriers", label: "Клетки и переноски", icon: catalog11 },
  { id: "toilet", label: "Туалеты", icon: catalog12 },
];

const sidebarCategories = [
  { label: "Кошки", slug: "cats" },
  { label: "Собаки", slug: "dogs" },
  { label: "Грызуны", slug: "rodents" },
  { label: "Птицы", slug: "birds" },
  { label: "Аквариумистика", slug: "aquarium" },
];

function SubCategoryCard({ item, categorySlug }) {
  return (
    <Link
      to={`/catalog/${categorySlug}?sub=${item.id}`}
      className="flex flex-col items-center justify-center gap-3 p-6 no-underline transition-all border-b border-r border-gray-200 dark:border-gray-700 hover:shadow-sm group dark:bg-gray-900"
    >
      <div className="flex items-center justify-center w-16 h-16 transition-transform group-hover:scale-110">
        <img
          src={item.icon}
          alt={item.label}
          className="object-contain w-12 h-12"
        />
      </div>
      <span className="text-sm leading-snug text-center text-gray-700 dark:text-gray-300 transition-colors group-hover:text-orange-500">
        {item.label}
      </span>
    </Link>
  );
}

export default function CategoryPage() {
  const { slug } = useParams();
  const subs = catsSubs;

  const currentCategory = sidebarCategories.find((c) => c.slug === slug);

  return (
    <div className="max-w-[1170px] px-5 py-6 mx-auto dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-gray-400 dark:text-gray-500">
        <Link to="/" className="no-underline hover:text-orange-500">
          Главная
        </Link>
        <span>›</span>
        <span className="text-gray-600">
          Товары для {currentCategory?.label?.toLowerCase() ?? slug}
        </span>
      </div>

      {/* Title */}
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Товары для {currentCategory?.label?.toLowerCase() ?? slug}
      </h1>

      {/* Sidebar + grid */}
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="flex-shrink-0 hidden w-36 md:block">
          <nav className="flex flex-col gap-1">
            {sidebarCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className={`text-sm py-0.5 no-underline transition-colors ${
                  c.slug === slug
                    ? "text-orange-500 font-medium"
                    : "text-gray-500 hover:text-orange-500"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 border-t border-l border-gray-200 sm:grid-cols-3 md:grid-cols-4">
            {subs.map((item) => (
              <SubCategoryCard key={item.id} item={item} categorySlug={slug} />
            ))}
          </div>
        </div>
      </div>

      {/* SEO text */}
      <div className="max-w-3xl mt-12">
        <h2 className="mb-3 text-base font-bold text-gray-800">
          Товары для {currentCategory?.label?.toLowerCase() ?? slug}
        </h2>
        <p className="text-sm leading-relaxed text-gray-500">
          Появление ласкового пушистого котёнка приносит в дом уютную и добрую
          атмосферу. Мы предлагаем всё необходимое для здоровья и комфорта ваших
          любимых животных, а также для удобства хозяев.
        </p>
      </div>
    </div>
  );
}
