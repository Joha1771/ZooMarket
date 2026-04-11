import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Check, Truck, Package } from "lucide-react";
import useCartStore from "../store/cartStore";
import ProductCard from "../components/ui/ProductCard";
import SectionHeader from "../components/ui/SectionHeader";
import { useProduct, useProducts } from "../hooks/useProducts";

export default function ProductPage() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const addItem = useCartStore((s) => s.addItem);

  const [selectedWeight, setSelectedWeight] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [added, setAdded] = useState(false);

  const { products: similar } = useProducts(product?.category ?? null);
  const similarFiltered = similar
    .filter((p) => p.id !== product?.id)
    .slice(0, 5);

  if (loading) {
    return (
      <div className="max-w-[1170px] px-5 py-10 mx-auto">
        <div className="bg-gray-100 rounded-lg h-96 animate-pulse" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-[1170px] px-5 py-20 mx-auto text-center">
        <p className="mb-4 text-lg text-gray-500">Товар не найден</p>
        <Link to="/" className="text-orange-500 no-underline hover:underline">
          На главную
        </Link>
      </div>
    );
  }

  const currentWeight = selectedWeight ?? product.weights?.[0] ?? null;

  const handleAdd = () => {
    addItem(product, currentWeight);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="max-w-[1170px] px-5 py-6 mx-auto">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-gray-400">
        <Link to="/" className="no-underline hover:text-orange-500">
          Главная
        </Link>
        <span>›</span>
        <Link
          to={`/catalog/${product.category}`}
          className="no-underline hover:text-orange-500"
        >
          {product.category}
        </Link>
        <span>›</span>
        <span className="text-gray-600 line-clamp-1">{product.name}</span>
      </div>

      {/* Main block */}
      <div className="flex flex-col gap-6 mb-6 md:flex-row">
        {/* Left: Image */}
        <div className="relative flex items-start justify-center flex-shrink-0 w-full md:w-64">
          {product.discount > 0 && (
            <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded z-10">
              -{product.discount}%
            </span>
          )}
          <img
            src={product.image_url}
            alt={product.name}
            className="object-contain w-full h-64"
          />
        </div>

        {/* Middle: Info */}
        <div className="flex-1">
          <p className="mb-1 text-xs text-gray-400">Код товара: {product.id}</p>
          <h1 className="mb-4 text-xl font-bold leading-snug text-gray-900">
            {product.name}
          </h1>

          {/* Weight buttons */}
          {product.weights?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {product.weights.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`px-4 py-1.5 rounded-lg border text-sm font-medium cursor-pointer transition-all ${
                    currentWeight === w
                      ? "border-orange-500 bg-orange-50 text-orange-600"
                      : "border-gray-200 text-gray-600 hover:border-orange-400 bg-transparent"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          )}

          {/* Specs table */}
          <div className="flex flex-col max-w-sm gap-2 text-sm">
            {[
              ["Тип", product.subcategory],
              ["Возраст", product.age],
              ["Производитель", product.brand],
            ]
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div key={k} className="flex gap-4">
                  <span className="flex-shrink-0 w-32 pb-1 text-gray-400 border-b border-gray-200 border-dotted">
                    {k}
                  </span>
                  <span className="pb-1 text-gray-700">{v}</span>
                </div>
              ))}
          </div>
          <Link
            to="#"
            className="inline-block mt-2 text-xs text-orange-500 hover:underline"
          >
            Смотреть все
          </Link>
        </div>

        {/* Right: Buy block */}
        <div className="flex-shrink-0 w-full md:w-52">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-orange-500">
              {product.price?.toLocaleString()} Р
            </span>
            {product.old_price > product.price && (
              <span className="text-sm text-gray-400 line-through">
                {product.old_price?.toLocaleString()} Р
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`w-full h-11 rounded-lg text-white font-medium text-sm border-none cursor-pointer transition-all flex items-center justify-center gap-2 mb-3 ${
              added
                ? "bg-green-500"
                : "bg-orange-500 hover:bg-orange-600 active:scale-95"
            }`}
          >
            {added ? (
              <>
                <Check size={16} /> Добавлено
              </>
            ) : (
              "В корзину"
            )}
          </button>

          <button className="w-full mb-4 text-sm font-medium text-orange-500 transition-colors bg-transparent border border-orange-500 rounded-lg cursor-pointer h-11 hover:bg-orange-50">
            Купить в 1 клик
          </button>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-green-600">
              <Check size={13} />
              {product.in_stock ? "Есть на складе" : "Под заказ 2–7 дней"}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Check size={13} className="text-orange-400" />
              Доставим сегодня
            </div>
            <div className="flex items-center gap-2 text-xs text-orange-500">
              <Truck size={13} />
              Бесплатная доставка по Тюмени при заказе от 1490р.
            </div>
            <Link to="#" className="text-xs text-orange-500 hover:underline">
              Узнать все условия доставки
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="flex gap-8 mb-5 border-b border-gray-200">
          {["description", "specs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium border-none bg-transparent cursor-pointer transition-colors ${
                activeTab === tab
                  ? "text-gray-900 border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab === "description" ? "Описание" : "Характеристики"}
            </button>
          ))}
        </div>
        {activeTab === "description" ? (
          <p className="max-w-2xl text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>
        ) : (
          <div className="grid max-w-lg grid-cols-2 gap-x-12 gap-y-3">
            {[
              ["Бренд", product.brand],
              ["Категория", product.category],
              ["Вес", currentWeight ?? "—"],
            ]
              .filter(([, v]) => v)
              .map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between pb-2 border-b border-gray-100"
                >
                  <span className="text-sm text-gray-400">{k}</span>
                  <span className="text-sm font-medium text-gray-700">{v}</span>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Similar products */}
      {similarFiltered.length > 0 && (
        <div className="mb-8">
          <SectionHeader title="Похожие товары" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {similarFiltered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

      {/* Recommended products */}
      {similarFiltered.length > 0 && (
        <div className="mb-8">
          <SectionHeader title="Рекомендуемые товары" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {similarFiltered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
