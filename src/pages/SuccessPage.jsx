export default function SuccessPage() {
  return (
    <div className="max-w-[1170px] px-5 py-10 mx-auto dark:bg-gray-900">
      <div
        className="relative flex items-center justify-between py-16 overflow-hidden px-14 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #F5A623 0%, #F0891A 100%)",
        }}
      >
        {/* Text */}
        <div className="z-10">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white">
            Спасибо за заказ!
            <br />
            Вы восхитительны!
          </h1>
          <p className="mb-8 text-base text-white/90">
            В ближайшее время мы свяжемся с вами.
            <br />
            Кстати, у нас тут акции:
          </p>
          <button className="inline-flex items-center gap-2 py-3 text-sm font-medium text-white transition-colors border-2 border-white px-7 rounded-xl hover:bg-white hover:text-orange-500 bg-transparent cursor-pointer">
            Смотреть акции →
          </button>
        </div>

        {/* Cat emoji */}
        <div className="z-10 flex-shrink-0">
          <span style={{ fontSize: 140, lineHeight: 1 }}>😻</span>
        </div>
      </div>
    </div>
  );
}
