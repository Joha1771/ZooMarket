import catImage from "../../assets/cat.png";

function HeroText() {
  return (
    <div className="flex flex-col items-start gap-4 max-w-sm z-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
        Лохматость сильно повысится!
      </h1>
      <p className="text-white/90 text-base leading-relaxed">
        Скидка 20% на все шампуни для котеек.
      </p>
      <button className="mt-2 px-6 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer border-none text-sm flex items-center gap-2">
        Смотреть шампуни →
      </button>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute right-8 bottom-0 h-[110%] flex items-end">
      <img src={catImage} alt="Кот" className="h-full w-auto object-contain" />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-orange-400 rounded-2xl overflow-hidden px-12 py-14 flex items-center min-h-[280px]">
          <HeroText />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
