import { Link, useNavigate } from "react-router-dom";
import { Trash2, RefreshCw, AlertCircle } from "lucide-react";
import useCartStore from "../store/cartStore";

function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCartStore();

  return (
    <div className="flex items-start gap-4 py-5 border-b border-gray-100 last:border-b-0">
      {/* Image */}
      <div className="relative flex-shrink-0">
        {item.discount > 0 && (
          <span className="absolute -top-1 -left-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded z-10">
            -{item.discount}%
          </span>
        )}
        <img
          src={item.image_url || item.image}
          alt={item.name}
          className="object-contain w-16 h-16 rounded bg-gray-50"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/product/${item.id}`}
          className="text-sm leading-snug text-gray-800 no-underline transition-colors hover:text-orange-500 line-clamp-2"
        >
          {item.name}
        </Link>
        {item.selectedWeight && (
          <p className="mt-1 text-xs text-gray-400">{item.selectedWeight}</p>
        )}
        {!item.inStock && (
          <div className="flex items-center gap-1 mt-1 text-xs text-amber-600">
            <AlertCircle size={12} />
            Нет в наличии. Под заказ от 2 до 7 дней
          </div>
        )}
        <div className="flex items-center gap-5 mt-2">
          <button
            onClick={() => removeItem(item.key)}
            className="flex items-center gap-1 p-0 text-xs text-gray-400 transition-colors bg-transparent border-none cursor-pointer hover:text-red-500"
          >
            <Trash2 size={13} />
            Удалить
          </button>
          <button className="flex items-center gap-1 p-0 text-xs text-orange-500 transition-colors bg-transparent border-none cursor-pointer hover:text-orange-600">
            <RefreshCw size={13} />
            Заказывать повторно
          </button>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center flex-shrink-0 gap-1">
        <button
          onClick={() => updateQuantity(item.key, item.quantity - 1)}
          className="flex items-center justify-center w-8 h-8 text-lg font-medium text-white transition-colors bg-orange-500 border-none rounded cursor-pointer hover:bg-orange-600"
        >
          −
        </button>
        <span className="text-sm font-medium text-center text-gray-800 w-14">
          {item.quantity} шт
        </span>
        <button
          onClick={() => updateQuantity(item.key, item.quantity + 1)}
          className="flex items-center justify-center w-8 h-8 text-lg font-medium text-white transition-colors bg-orange-500 border-none rounded cursor-pointer hover:bg-orange-600"
        >
          +
        </button>
      </div>

      {/* Price */}
      <div className="flex-shrink-0 w-24 text-right">
        <p
          className={`text-base font-bold ${item.discount > 0 ? "text-red-500" : "text-gray-900"}`}
        >
          {(item.price * item.quantity).toLocaleString()} Р
        </p>
        {item.discount > 0 && item.oldPrice && (
          <p className="text-xs text-gray-400 line-through">
            {(item.oldPrice * item.quantity).toLocaleString()} Р
          </p>
        )}
      </div>
    </div>
  );
}

export default function CartPage() {
  const { items } = useCartStore();
  const navigate = useNavigate();

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center max-w-[1170px] gap-5 px-5 py-20 mx-auto">
        <p className="text-5xl">🛒</p>
        <h2 className="text-xl font-bold text-gray-800">Корзина пуста</h2>
        <p className="text-sm text-gray-500">
          Добавьте товары, чтобы оформить заказ
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-medium text-white no-underline transition-colors bg-orange-500 hover:bg-orange-600 rounded-xl"
        >
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1170px] px-5 py-6 mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
        <Link to="/" className="no-underline hover:text-orange-500">
          Главная
        </Link>
        <span>›</span>
        <span className="text-gray-600">Корзина</span>
      </div>

      <h1 className="mb-6 text-2xl font-bold text-gray-900">Корзина</h1>

      <div className="flex flex-col items-start gap-6 lg:flex-row">
        {/* Items list */}
        <div className="flex-1 px-6 bg-white rounded-lg">
          {items.map((item) => (
            <CartItem key={item.key} item={item} />
          ))}
        </div>

        {/* Summary sidebar */}
        <div className="sticky flex flex-col flex-shrink-0 w-full gap-4 p-6 bg-white rounded-lg lg:w-[280px] top-24">
          <button
            onClick={() => navigate("/checkout")}
            className="w-full h-12 text-base font-medium text-white transition-all bg-orange-500 border-none rounded-lg cursor-pointer hover:bg-orange-600 active:scale-95"
          >
            Оформить заказ
          </button>

          <div className="flex flex-col gap-2 pt-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>
                {totalItems}{" "}
                {totalItems === 1
                  ? "товар"
                  : totalItems < 5
                    ? "товара"
                    : "товаров"}
              </span>
              <span className="font-medium text-gray-900">
                {totalPrice.toLocaleString()} Р
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Доставка курьером по Тюмени</span>
              <span className="font-medium text-gray-900">0 Р</span>
            </div>
            <p className="text-xs text-gray-400">(бесплатно от 1500 рублей)</p>
          </div>

          <div className="flex justify-between pt-3 border-t border-gray-100">
            <span className="font-bold text-gray-900">Итого</span>
            <span className="text-lg font-bold text-gray-900">
              {totalPrice.toLocaleString()} Р
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
