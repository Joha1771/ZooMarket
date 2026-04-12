import { useState } from "react";
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
  const navigate = useNavigate();
  const location = useLocation();
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/catalog/all?q=${search}`);
  };

  const scrollToSection = (section) => {
    if (location.pathname === "/") {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/?section=${section}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="border-b border-gray-100">
        <div className="flex items-center max-w-[1170px] gap-4 px-5 mx-auto h-9">
          {/* Location */}
          <div className="flex items-center gap-1 mr-1 text-xs text-gray-500 transition-colors cursor-pointer hover:text-orange-500">
            <img src={locationSvg} alt="" className="w-3 h-3" />
            <select name="Location" id="" className="cursor-pointer">
              <option value="Location">Tashkent Uzbekistan</option>
              <option value="Location">Xorezm Uzbekistan</option>
              <option value="Location">Bukhara Uzbekistan</option>
              <option value="Location">Samarkand Uzbekistan</option>
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

          {/* Phone */}
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

      {/* Main row */}
      <div className="max-w-[1170px] mx-auto px-5 h-[72px] flex items-center gap-4">
        <Link to="/" className="flex-shrink-0 no-underline">
          <button
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer"
          >
            <img src={logoSvg} alt="Сытая Морда" className="h-12" />
          </button>
        </Link>

        <form onSubmit={handleSearch} className="relative flex-1">
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

        <a
          href="https://t.me/Salimov_joha"
          className="flex items-center flex-shrink-0 gap-2 px-4 text-gray-600 no-underline transition-colors border border-gray-200 rounded-lg hover:text-orange-500 h-11"
        >
          <img src={userSvg} alt="" className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Joha</span>
        </a>

        <Link
          to="/cart"
          className="relative flex items-center flex-shrink-0 gap-2 px-4 no-underline transition-colors border border-gray-200 rounded-lg h-11 hover:border-orange-400"
        >
          <div className="relative">
            <img src={cartSvg} alt="" className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {totalPrice > 0 ? `${totalPrice.toLocaleString()} Р` : "0 Р"}
          </span>
        </Link>
      </div>

      {/* Categories nav */}
      <div className="border-t border-gray-100">
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

          {/* Акции → /catalog/all */}
          <Link
            to="/catalog/all"
            className="flex items-center gap-1 ml-auto text-sm text-gray-700 no-underline transition-colors hover:text-orange-500 whitespace-nowrap"
          >
            Акции
            <img src={percentageSvg} alt="" className="w-4 h-4" />
          </Link>

          {/* Франчайзинг → скролл к PromoSection */}
          <button
            onClick={() => scrollToSection("promo")}
            className="text-sm text-gray-700 transition-colors hover:text-orange-500 whitespace-nowrap bg-transparent border-none cursor-pointer p-0"
          >
            Франчайзинг
          </button>

          <button
            onClick={() => scrollToSection("vetClinic")}
            className="text-sm text-gray-700 transition-colors hover:text-orange-500 whitespace-nowrap bg-transparent border-none cursor-pointer p-0 flex items-center gap-2 justify-center"
          >
            Ветклиника
            <img src={openInNewSvg} alt="" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
