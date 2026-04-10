import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) navigate(`/catalog/all?q=${search}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="border-b border-gray-100">
        <div className="flex items-center max-w-[1170px] gap-4 px-5 mx-auto h-9">
          {/* Location */}
          <div className="flex items-center gap-1 mr-1 text-xs text-gray-500 transition-colors cursor-pointer hover:text-orange-500">
            <img src={locationSvg} alt="" className="w-3 h-3" />
            <span>Новый Уренгой</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 3.5L5 6.5L8 3.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* Nav links */}
          <Link
            to="/"
            className="text-xs text-orange-500 no-underline border-b border-orange-500"
          >
            О нас
          </Link>
          {[
            "Доставка и оплата",
            "Вопросы и ответы",
            "Отзывы",
            "Статьи",
            "Контакты",
          ].map((l) => (
            <Link
              key={l}
              to="/"
              className="text-xs text-gray-500 no-underline transition-colors hover:text-orange-500"
            >
              {l}
            </Link>
          ))}
          <div className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-orange-500">
            <span>Ещё</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 3.5L5 6.5L8 3.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
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
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 no-underline">
          <img src={logoSvg} alt="Сытая Морда" className="h-12" />
        </Link>

        {/* Search — без оранжевого фона на кнопке */}
        <form onSubmit={handleSearch} className="relative flex-1">
          <input
            type="text"
            placeholder="Поиск товаров"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-4 pr-12 text-sm text-gray-700 placeholder-gray-400 transition-colors bg-white border border-gray-200 rounded-lg outline-none h-11 focus:border-orange-400"
          />
          {/* Иконка поиска уже оранжевая сама по себе — просто кнопка без фона */}
          <button
            type="submit"
            className="absolute flex items-center justify-center p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer right-3 top-1/2"
          >
            <img src={searchSvg} alt="Поиск" className="w-5 h-5" />
          </button>
        </form>

        {/* User — иконка уже оранжевая */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0 gap-2 px-4 text-gray-600 no-underline transition-colors border border-gray-200 rounded-lg hover:text-orange-500 h-11"
        >
          <img src={userSvg} alt="" className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Николай</span>
        </Link>

        {/* Cart — иконка уже оранжевая */}
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
            {totalPrice > 0 ? `${totalPrice.toLocaleString()} Р` : "6 890 Р"}
          </span>
        </Link>
      </div>

      {/* Categories nav */}
      <div className="border-t border-gray-100">
        <div className="flex items-center max-w-[1170px] px-5 mx-auto h-11 gap-6">
          {mainCategories.map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="text-sm text-gray-700 no-underline transition-colors hover:text-orange-500 whitespace-nowrap"
            >
              {c.label}
            </Link>
          ))}
          <Link
            to="/promo"
            className="flex items-center gap-1 ml-auto text-sm text-gray-700 no-underline transition-colors hover:text-orange-500 whitespace-nowrap"
          >
            Акции
            <img src={percentageSvg} alt="" className="w-4 h-4" />
          </Link>
          <Link
            to="/franchise"
            className="text-sm text-gray-700 no-underline transition-colors hover:text-orange-500 whitespace-nowrap"
          >
            Франчайзинг
          </Link>
          <Link
            to="/vetclinic"
            className="flex items-center gap-1 text-sm text-gray-700 no-underline transition-colors hover:text-orange-500 whitespace-nowrap"
          >
            Ветклиника
            <img src={openInNewSvg} alt="" className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
