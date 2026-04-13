import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";
import { usePromoProducts } from "../../hooks/useProducts";
import cardsRightArrow from "../../assets/icons/cards-right arrow.svg";

export default function PromoSection() {
  const { products, loading } = usePromoProducts();

  if (loading) {
    return (
      <section className="py-8">
        <div className="max-w-[1170px] mx-auto px-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Акции
            </h2>
          </div>
          <div className="grid grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!products.length) return null;

  return (
    <section className="py-8" id="promo">
      <div className="max-w-[1170px] mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Акции
          </h2>
          <Link
            to="/catalog/all"
            className="flex items-center gap-1.5 text-sm no-underline hover:opacity-80 transition-opacity"
            style={{ color: "#FE9015" }}
          >
            Смотреть все
            <img src={cardsRightArrow} alt="" className="w-4 h-4" />
          </Link>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".promo-prev", nextEl: ".promo-next" }}
            slidesPerView={5}
            spaceBetween={0}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные оранжевые стрелки */}
          <button className="promo-prev absolute left-0 z-10 p-0 -translate-x-full -translate-y-1/2 bg-transparent border-none cursor-pointer top-1/2">
            <img
              src={cardsRightArrow}
              alt="Назад"
              className="w-10 h-10"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button className="promo-next absolute right-0 z-10 p-0 translate-x-full -translate-y-1/2 bg-transparent border-none cursor-pointer top-1/2">
            <img src={cardsRightArrow} alt="Вперёд" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
