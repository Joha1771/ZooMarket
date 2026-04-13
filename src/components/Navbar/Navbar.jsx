import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useCartStore from "../../store/cartStore";
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
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        {/* TOP BAR — скрыт на мобилке */}
        <div className="border-b border-gray-100 hidden md:block">
          <div className="flex items-center max-w-[1170px] gap-4 px-5 mx-auto h-9">
            <div className="flex items-center gap-1 mr-1 text-xs text-gray-500 transition-colors cursor-pointer hover:text-orange-500">
              <img src={locationSvg} alt="" className="w-3 h-3" />
              <select className="cursor-pointer">
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
                className="text-xs text-gray-500 transition-colors hover:text-orange-500 bg-transparent border-none cursor-pointer p-0"
              >
                {l.label}
              </button>
            ))}
            <div className="flex items-center gap-1.5 ml-auto">
              <img src={phoneSvg} alt="" className="w-3.5 h-3.5" />
              <a
                href="tel:+73452594945"
                className="text-xs font-medium text-gray-700 no-underline transition-colors hover:text-orange-500"
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
            <span className="block w-6 h-0.5 bg-gray-700 rounded" />
            <span className="block w-6 h-0.5 bg-gray-700 rounded" />
            <span className="block w-6 h-0.5 bg-gray-700 rounded" />
          </button>

          {/* Лого */}
          <Link to="/" className="flex-shrink-0 no-underline">
            <img src={logoSvg} alt="Сытая Морда" className="h-10 md:h-12" />
          </Link>

          {/* Поиск — полный на десктопе */}
          <form
            onSubmit={handleSearch}
            className="relative flex-1 hidden md:block"
          >
            <input
              type="text"
              placeholder="Поиск товаров"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-4 pr-12 text-sm text-gray-700 placeholder-gray-400 transition-colors bg-white border border-gray-200 rounded-lg outline-none h-11 focus:border-orange-400"
            />
            <button
              type="submit"
              className="absolute flex items-center justify-center p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer right-3 top-1/2"
            >
              <img src={searchSvg} alt="Поиск" className="w-5 h-5" />
            </button>
          </form>

          {/* Иконка поиска — только мобилка */}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="md:hidden ml-auto flex-shrink-0 w-9 h-9 flex items-center justify-center bg-transparent border border-gray-200 rounded-lg cursor-pointer"
            aria-label="Поиск"
          >
            <img src={searchSvg} alt="Поиск" className="w-5 h-5" />
          </button>

          {/* Профиль — только десктоп */}
          <a
            href="https://t.me/Salimov_joha"
            className="hidden md:flex items-center flex-shrink-0 gap-2 px-4 text-gray-600 no-underline transition-colors border border-gray-200 rounded-lg hover:text-orange-500 h-11"
          >
            <img src={userSvg} alt="" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Joha</span>
          </a>

          {/* Корзина */}
          <Link
            to="/cart"
            className="relative flex items-center flex-shrink-0 gap-2 px-3 md:px-4 no-underline transition-colors border border-gray-200 rounded-lg h-9 md:h-11 hover:border-orange-400"
          >
            <div className="relative">
              <img src={cartSvg} alt="" className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:inline">
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
                className="w-full pl-4 pr-12 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg outline-none h-11 focus:border-orange-400"
              />
              <button
                type="submit"
                className="absolute flex items-center justify-center p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer right-3 top-1/2"
              >
                <img src={searchSvg} alt="Поиск" className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        {/* CATEGORIES NAV — только десктоп */}
        <div className="border-t border-gray-100 hidden md:block">
          <div className="flex items-center max-w-[1170px] px-5 mx-auto h-11 gap-6">
            {mainCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/catalog/${c.slug}`}
                className="text-sm text-gray-700 no-underline transition-colors hover:text-orange-500 whitespace-nowrap"
              >
                {c.label}
              </Link>
            ))}
            <Link
              to="/catalog/all"
              className="flex items-center gap-1 ml-auto text-sm text-gray-700 no-underline transition-colors hover:text-orange-500 whitespace-nowrap"
            >
              Акции <img src={percentageSvg} alt="" className="w-4 h-4" />
            </Link>
            <button
              onClick={() => scrollToSection("promo")}
              className="text-sm text-gray-700 transition-colors hover:text-orange-500 whitespace-nowrap bg-transparent border-none cursor-pointer p-0"
            >
              Франчайзинг
            </button>
            <button
              onClick={() => scrollToSection("vetClinic")}
              className="text-sm text-gray-700 transition-colors hover:text-orange-500 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 flex items-center gap-2"
            >
              Ветклиника{" "}
              <img src={openInNewSvg} alt="" className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* БУРГЕР МЕНЮ */}

      {/* Затемнение фона */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Панель */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Шапка панели */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 flex-shrink-0">
          <img src={logoSvg} alt="Сытая Морда" className="h-9" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer text-gray-500 hover:text-orange-500 text-2xl leading-none p-0"
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>

        {/* Контент */}
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
                className="text-sm font-medium text-gray-700 no-underline py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors"
              >
                {c.label}
              </Link>
            ))}
            <Link
              to="/catalog/all"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 no-underline py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors"
            >
              Акции <img src={percentageSvg} alt="" className="w-4 h-4" />
            </Link>
          </nav>

          <div className="border-t border-gray-100 mb-4" />

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Навигация
          </p>
          <nav className="flex flex-col gap-0.5">
            {topLinks.map((l) => (
              <button
                key={l.section}
                onClick={() => scrollToSection(l.section)}
                className="text-left text-sm text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("promo")}
              className="text-left text-sm text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer"
            >
              Франчайзинг
            </button>
            <button
              onClick={() => scrollToSection("vetClinic")}
              className="text-left text-sm text-gray-700 py-2.5 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer flex items-center gap-2"
            >
              Ветклиника{" "}
              <img src={openInNewSvg} alt="" className="w-3.5 h-3.5" />
            </button>
          </nav>
        </div>

        {/* Телефон внизу */}
        <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <img src={phoneSvg} alt="" className="w-4 h-4" />
            <a
              href="tel:+73452594945"
              className="text-sm font-medium text-gray-700 no-underline hover:text-orange-500"
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
