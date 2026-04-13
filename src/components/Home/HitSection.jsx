import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import ProductCard from "../ui/ProductCard";
import { useHitProducts } from "../../hooks/useProducts";
import cardsRightArrow from "../../assets/icons/cards-right arrow.svg";

export default function HitsSection() {
  const { products, loading } = useHitProducts();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (loading) {
    return (
      <section className="py-8 dark:bg-gray-900">
        <div className="max-w-[1170px] mx-auto px-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Хиты продаж
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

  return (
    <section className="py-8 dark:bg-gray-900">
      <div className="max-w-[1170px] mx-auto px-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Хиты продаж
          </h2>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
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
          <button
            ref={prevRef}
            className="absolute left-0 z-10 p-0 -translate-x-full -translate-y-1/2 bg-transparent border-none cursor-pointer top-1/2"
          >
            <img
              src={cardsRightArrow}
              alt="Назад"
              className="w-10 h-10"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 z-10 p-0 translate-x-full -translate-y-1/2 bg-transparent border-none cursor-pointer top-1/2"
          >
            <img src={cardsRightArrow} alt="Вперёд" className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
