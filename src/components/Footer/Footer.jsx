import phoneSvg from "../../assets/icons/phone.svg";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-4 md:mt-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200"
    >
      {/* Bottom */}
      {/* Десктоп */}
      <div className="hidden md:flex max-w-292.5 mx-auto px-5 py-4 items-center justify-between dark:border-gray-800">
        <div>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2015–2019 Интернет-магазин зоотоваров «Сытая Морда»
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            Стоимость товаров на сайте не является публичной офертой
          </p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Условия соглашения
        </p>
        <a
          href="tel:+73452594945"
          className="flex items-center gap-2 text-sm font-medium text-orange-500 no-underline hover:text-orange-600"
        >
          <img
            src={phoneSvg}
            alt=""
            className="w-4 h-4"
            style={{
              filter: "invert(55%) sepia(90%) saturate(500%) hue-rotate(0deg)",
            }}
          />
          +7 (3452) 59-49-45
        </a>
      </div>

      {/* Мобилка */}
      <div className="md:hidden px-4 py-5 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <a
            href="tel:+73452594945"
            className="flex items-center gap-2 text-base font-semibold text-orange-500 no-underline"
          >
            <img
              src={phoneSvg}
              alt=""
              className="w-4 h-4"
              style={{
                filter:
                  "invert(55%) sepia(90%) saturate(500%) hue-rotate(0deg)",
              }}
            />
            +7 (3452) 59-49-45
          </a>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Условия соглашения
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          © 2015–2019 Интернет-магазин зоотоваров «Сытая Морда»
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Стоимость товаров на сайте не является публичной офертой
        </p>
      </div>
    </footer>
  );
}
