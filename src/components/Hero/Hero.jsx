import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> a64bc9dcffdaa3c66c8d697446bd2361a97b3dca
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
<<<<<<< HEAD
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-4 bg-white ">
      <div className="max-w-[1170px] mx-auto px-5">
        {/* Внешний контейнер: pt-14 даёт место коту сверху */}
        <div className="relative pt-14">
          {/* Swiper — скруглён, обрезает содержимое */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            loop
            className="rounded-2xl overflow-hidden h-[340px]"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex items-center h-full bg-[#F5A623]">
                  <div className="relative z-10 flex flex-col gap-3 pl-14 max-w-[420px]">
                    <h1 className="text-[36px] font-extrabold leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="text-[15px] text-white/90 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <button className="mt-2 w-fit flex items-center gap-2 px-5 py-3 bg-white text-[#FE9015] text-sm font-medium rounded-lg border-none cursor-pointer hover:bg-gray-50 transition-colors">
                      {slide.btnText}
                      <img src={heroBtnArrow} alt="" className="w-4 h-3" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кот — absolute внутри внешнего контейнера, не внутри Swiper */}
          <img
            src={slides[activeIndex]?.image || slides[0].image}
            alt="Питомец"
            className="absolute bottom-0 z-10 object-contain object-bottom pointer-events-none top-5 w-120 right-6"
          />

          {/* Стрелки — по центру слайдера (не всего контейнера) */}
          <button className="hero-prev absolute left-6 top-[calc(50%+28px)] -translate-y-1/2 z-20 border-none bg-transparent cursor-pointer p-0">
            <img src={leftArrow} alt="Назад" className="w-6 h-9" />
          </button>
          <button className="hero-next absolute right-6 top-[calc(50%+28px)] -translate-y-1/2 z-20 border-none bg-transparent cursor-pointer p-0">
            <img src={rightArrow} alt="Вперёд" className="w-6 h-9" />
          </button>
        </div>
=======
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
                  {/* Кнопка — белый фон, оранжевый текст и стрелка */}
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
                  className="absolute bottom-0 right-12 "
                  style={{ height: "115%", top: "-15%" }}
                >
                  <img
                    src={slide.image}
                    alt="Питомец"
                    className="w-full h-full "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Стрелки — прямо поверх краёв слайдера, без фона */}
        <button className="absolute z-10 p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer hero-prev left-6 top-1/2">
          <img src={leftArrow} alt="Назад" className="w-6 h-9" />
        </button>
        <button className="absolute z-10 p-0 -translate-y-1/2 bg-transparent border-none cursor-pointer hero-next right-6 top-1/2">
          <img src={rightArrow} alt="Вперёд" className="w-6 h-9" />
        </button>
>>>>>>> a64bc9dcffdaa3c66c8d697446bd2361a97b3dca
      </div>

      <style>{`
        .swiper-pagination-bullet {
<<<<<<< HEAD
          background: rgba(255,255,255,0.5) !important;
=======
          background: #ccc !important;
>>>>>>> a64bc9dcffdaa3c66c8d697446bd2361a97b3dca
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
        }
        .swiper-pagination-bullet-active {
          background: #fff !important;
        }
        .swiper-pagination {
<<<<<<< HEAD
          bottom: 14px !important;
=======
          bottom: 12px !important;
>>>>>>> a64bc9dcffdaa3c66c8d697446bd2361a97b3dca
        }
      `}</style>
    </section>
  );
}
