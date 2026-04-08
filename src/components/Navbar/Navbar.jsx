import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const cartCount = 6;
  const cartTotal = "12 890 Р";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center gap-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0 no-underline"
        >
          <span className="text-3xl">🐾</span>
          <div className="leading-tight">
            <div className="text-orange-500 font-extrabold text-sm uppercase tracking-tight">
              Сытая
            </div>
            <div className="text-orange-500 font-extrabold text-sm uppercase tracking-tight">
              Морда
            </div>
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Поиск товаров"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-[44px] pl-4 pr-12 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-orange-400 transition-colors duration-200 bg-white"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer">
            <SearchIcon />
          </button>
        </div>

        {/* User */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-200 bg-transparent border-none cursor-pointer flex-shrink-0">
          <UserIcon />
          <span className="text-sm font-medium">Александр</span>
        </button>

        {/* Cart */}
        <button className="flex items-center gap-2 bg-transparent border border-gray-200 rounded-lg px-4 h-[44px] hover:border-orange-400 transition-colors duration-200 cursor-pointer flex-shrink-0">
          <div className="relative">
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">{cartTotal}</span>
        </button>
      </div>
    </nav>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#f97316"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

export default Navbar;
