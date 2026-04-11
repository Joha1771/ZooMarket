import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import catImage from "../../assets/cat.png";
import leftArrow from "../../assets/icons/left-hero-arrow.svg";
import rightArrow from "../../assets/icons/right-hero-arrow.svg";
import heroBtnArrow from "../../assets/icons/hero-btn-arrow.svg";

const slides = [
  {
    id: 1,
    title: "Лохматость сильно повысится!",
    subtitle: "Скидка 20% на все шампуни для котеек.",
    btnText: "Смотреть шампуни",
    image: catImage,
  },
  {
    id: 2,
    title: "Всё для вашего питомца",
    subtitle: "Корма, игрушки, аксессуары с доставкой по городу.",
    btnText: "Перейти в каталог",
    image: catImage,
  },
];

export default function Hero() {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-[1170px] mx-auto px-5 relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next",
          }}
          loop
          className="overflow-visible rounded-2xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative flex items-center min-h-[340px] overflow-visible"
                style={{ backgroundColor: "#F5A623" }}
              >
                {/* Текст слева */}
                <div className="z-10 flex flex-col items-start pl-14 py-12 max-w-[440px] gap-3">
                  <h1 className="text-[36px] font-extrabold leading-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="text-[15px] leading-relaxed text-white/90">
                    {slide.subtitle}
                  </p>
                  <button
                    className="flex items-center gap-2 px-5 py-3 mt-3 text-sm font-medium transition-colors bg-white border-none rounded-lg cursor-pointer hover:bg-gray-50"
                    style={{ color: "#FE9015" }}
                  >
                    {slide.btnText}
                    <img src={heroBtnArrow} alt="" className="w-4 h-3" />
                  </button>
                </div>

                {/* Кот — выпирает сверху */}
                <div
                  className="absolute bottom-0 right-12"
                  style={{ height: "115%", top: "-15%" }}
                >
                  <img
                    src={slide.image}
                    alt="Питомец"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Стрелки */}
        <button className="absolute z-10 p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer hero-prev left-6 top-1/2">
          <img src={leftArrow} alt="Назад" className="w-6 h-9" />
        </button>
        <button className="absolute z-10 p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer hero-next right-6 top-1/2">
          <img src={rightArrow} alt="Вперёд" className="w-6 h-9" />
        </button>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background: #ccc !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
        }
        .swiper-pagination-bullet-active {
          background: #fff !important;
        }
        .swiper-pagination {
          bottom: 12px !important;
        }
      `}</style>
    </section>
  );
}
