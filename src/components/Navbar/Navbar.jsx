import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import { useTheme } from "../../hooks/useTheme";
import logoSvg from "../../assets/icons/logo.svg";
import searchSvg from "../../assets/icons/search.svg";
import userSvg from "../../assets/icons/user.svg";
import cartSvg from "../../assets/icons/cart.svg";
import locationSvg from "../../assets/icons/location.svg";
import phoneSvg from "../../assets/icons/phone.svg";
import percentageSvg from "../../assets/icons/percentage.svg";
import openInNewSvg from "../../assets/icons/open-in-new.svg";

const mainCategories = [
  { label: "Кошки", slug: "cats" },
  { label: "Собаки", slug: "dogs" },
  { label: "Грызуны", slug: "rodents" },
  { label: "Птицы", slug: "birds" },
  { label: "Аквариумистика", slug: "aquarium" },
  { label: "Ветаптека", slug: "vetapteka" },
];

const topLinks = [
  { label: "О нас", section: "seo" },
  { label: "Компании", section: "brands" },
  { label: "Статьи", section: "article" },
  { label: "Контакты", section: "footer" },
];

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/catalog/all?q=${search}`);
      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  const scrollToSection = (section) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/?section=${section}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-200">
        {/* TOP BAR — скрыт на мобилке */}
        <div className="border-b border-gray-100 dark:border-gray-800 hidden md:block">
          <div className="flex items-center max-w-[1170px] gap-4 px-5 mx-auto h-9">
            <div className="flex items-center gap-1 mr-1 text-xs text-gray-500 dark:text-gray-400 cursor-pointer hover:text-orange-500">
              <img src={locationSvg} alt="" className="w-3 h-3 dark:invert" />
              <select className="cursor-pointer bg-transparent dark:text-gray-400 dark:bg-gray-900">
                <option>Tashkent Uzbekistan</option>
                <option>Xorezm Uzbekistan</option>
                <option>Bukhara Uzbekistan</option>
                <option>Samarkand Uzbekistan</option>
              </select>
            </div>
            {topLinks.map((l) => (
              <button
                key={l.section}
                onClick={() => scrollToSection(l.section)}
                className="text-xs text-gray-500 dark:text-gray-400 transition-colors hover:text-orange-500 bg-transparent border-none cursor-pointer p-0"
              >
                {l.label}
              </button>
            ))}
            <div className="flex items-center gap-1.5 ml-auto">
              <img src={phoneSvg} alt="" className="w-3.5 h-3.5 dark:invert" />
              <a
                href="tel:+73452594945"
                className="text-xs font-medium text-gray-700 dark:text-gray-300 no-underline hover:text-orange-500"
              >
                +7 (3452) 59-49-45
              </a>
            </div>
            <a
              href="tel:+73452594945"
              className="text-xs font-medium text-orange-500 no-underline hover:underline"
            >
              Заказать звонок
            </a>
          </div>
        </div>

        {/* MAIN ROW */}
        <div className="max-w-[1170px] mx-auto px-4 md:px-5 h-16 md:h-[72px] flex items-center gap-3 md:gap-4">
          {/* Бургер — только мобилка */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer flex-shrink-0 p-0"
            aria-label="Открыть меню"
          >
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded" />
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded" />
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded" />
          </button>

          {/* Лого */}
          <Link to="/" className="flex-shrink-0 no-underline">
            <img src={logoSvg} alt="Сытая Морда" className="h-10 md:h-12" />
          </Link>

          {/* Поиск — десктоп */}
          <form
            onSubmit={handleSearch}
            className="relative flex-1 hidden md:block"
          >
            <input
              type="text"
              placeholder="Поиск товаров"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-12 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none h-11 focus:border-orange-400 transition-colors"
            />
            <button
              type="submit"
              className="absolute flex items-center justify-center p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer right-3 top-1/2"
            >
              <img
                src={searchSvg}
                alt="Поиск"
                className="w-5 h-5 dark:invert"
              />
            </button>
          </form>

          {/* Иконка поиска — мобилка */}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="md:hidden ml-auto flex-shrink-0 w-9 h-9 flex items-center justify-center bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"
            aria-label="Поиск"
          >
            <img src={searchSvg} alt="Поиск" className="w-5 h-5 dark:invert" />
          </button>

          {/* Профиль — только десктоп */}
          <a
            href="https://t.me/Salimov_joha"
            className="hidden md:flex items-center flex-shrink-0 gap-2 px-4 no-underline border border-gray-200 dark:border-gray-700 rounded-lg hover:text-orange-500 h-11 transition-colors"
          >
            <img src={userSvg} alt="" className="w-5 h-5 dark:invert" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Joha
            </span>
          </a>

          {/* Кнопка темы */}
          <button
            onClick={toggle}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent cursor-pointer hover:border-orange-400 transition-colors"
            aria-label="Переключить тему"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.354a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-1.5 0v-.896a.75.75 0 0 1 .75-.75ZM12 17.25a.75.75 0 0 1 .75.75v.896a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75ZM19.07 6.343a.75.75 0 0 1 0 1.06l-.634.634a.75.75 0 1 1-1.06-1.06l.634-.634a.75.75 0 0 1 1.06 0ZM6.624 17.03a.75.75 0 0 1 0 1.06l-.634.634a.75.75 0 1 1-1.06-1.06l.634-.634a.75.75 0 0 1 1.06 0ZM20.646 12a.75.75 0 0 1-.75.75H19a.75.75 0 0 1 0-1.5h.896a.75.75 0 0 1 .75.75ZM5 12a.75.75 0 0 1-.75.75H3.354a.75.75 0 0 1 0-1.5H4.25A.75.75 0 0 1 5 12ZM18.435 17.03a.75.75 0 0 1-1.06 0l-.634-.634a.75.75 0 1 1 1.06-1.06l.634.634a.75.75 0 0 1 0 1.06ZM7.07 6.343a.75.75 0 0 1-1.06 0l-.634-.634A.75.75 0 0 1 6.436 4.65l.634.634a.75.75 0 0 1 0 1.059ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Корзина */}
          <Link
            to="/cart"
            className="relative flex items-center flex-shrink-0 gap-2 px-3 md:px-4 no-underline border border-gray-200 dark:border-gray-700 rounded-lg h-9 md:h-11 hover:border-orange-400 transition-colors"
          >
            <div className="relative">
              <img src={cartSvg} alt="" className="w-5 h-5 dark:invert" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
              {totalPrice > 0 ? `${totalPrice.toLocaleString()} Р` : "0 Р"}
            </span>
          </Link>
        </div>

        {/* Мобильная строка поиска */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                autoFocus
                type="text"
                placeholder="Поиск товаров"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-4 pr-12 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none h-11 focus:border-orange-400"
              />
              <button
                type="submit"
                className="absolute flex items-center justify-center p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer right-3 top-1/2"
              >
                <img
                  src={searchSvg}
                  alt="Поиск"
                  className="w-5 h-5 dark:invert"
                />
              </button>
            </form>
          </div>
        )}

        {/* CATEGORIES NAV — только десктоп */}
        <div className="border-t border-gray-100 dark:border-gray-800 hidden md:block">
          <div className="flex items-center max-w-[1170px] px-5 mx-auto h-11 gap-6">
            {mainCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/catalog/${c.slug}`}
                className="text-sm text-gray-700 dark:text-gray-300 no-underline hover:text-orange-500 whitespace-nowrap transition-colors"
              >
                {c.label}
              </Link>
            ))}
            <Link
              to="/catalog/all"
              className="flex items-center gap-1 ml-auto text-sm text-gray-700 dark:text-gray-300 no-underline hover:text-orange-500 whitespace-nowrap transition-colors"
            >
              Акции{" "}
              <img src={percentageSvg} alt="" className="w-4 h-4 dark:invert" />
            </Link>
            <button
              onClick={() => scrollToSection("promo")}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-orange-500 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 transition-colors"
            >
              Франчайзинг
            </button>
            <button
              onClick={() => scrollToSection("vetClinic")}
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-orange-500 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 flex items-center gap-2 transition-colors"
            >
              Ветклиника{" "}
              <img
                src={openInNewSvg}
                alt=""
                className="w-3.5 h-3.5 dark:invert"
              />
            </button>
          </div>
        </div>
      </header>

      {/* БУРГЕР МЕНЮ */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 z-[70] h-full w-72 bg-white dark:bg-gray-900 shadow-2xl flex flex-col transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 dark:border-gray-800 flex-shrink-0">
          <img src={logoSvg} alt="Сытая Морда" className="h-9" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer text-gray-500 dark:text-gray-400 hover:text-orange-500 text-2xl leading-none p-0"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Категории
          </p>
          <nav className="flex flex-col gap-0.5 mb-5">
            {mainCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/catalog/${c.slug}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 no-underline py-2.5 px-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500 transition-colors"
              >
                {c.label}
              </Link>
            ))}
            <Link
              to="/catalog/all"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 no-underline py-2.5 px-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500 transition-colors"
            >
              Акции{" "}
              <img src={percentageSvg} alt="" className="w-4 h-4 dark:invert" />
            </Link>
          </nav>

          <div className="border-t border-gray-100 dark:border-gray-800 mb-4" />

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Навигация
          </p>
          <nav className="flex flex-col gap-0.5">
            {topLinks.map((l) => (
              <button
                key={l.section}
                onClick={() => scrollToSection(l.section)}
                className="text-left text-sm text-gray-700 dark:text-gray-300 py-2.5 px-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("promo")}
              className="text-left text-sm text-gray-700 dark:text-gray-300 py-2.5 px-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer"
            >
              Франчайзинг
            </button>
            <button
              onClick={() => scrollToSection("vetClinic")}
              className="text-left text-sm text-gray-700 dark:text-gray-300 py-2.5 px-3 rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer flex items-center gap-2"
            >
              Ветклиника{" "}
              <img
                src={openInNewSvg}
                alt=""
                className="w-3.5 h-3.5 dark:invert"
              />
            </button>
          </nav>
        </div>

        <div className="px-5 py-4 border-t border-gray-100 dark:border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <img src={phoneSvg} alt="" className="w-4 h-4 dark:invert" />
            <a
              href="tel:+73452594945"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 no-underline hover:text-orange-500"
            >
              +7 (3452) 59-49-45
            </a>
          </div>
          <a
            href="tel:+73452594945"
            className="text-sm text-orange-500 no-underline hover:underline"
          >
            Заказать звонок
          </a>
        </div>
      </div>
    </>
  );
}
