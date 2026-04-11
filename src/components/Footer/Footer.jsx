import { Link } from "react-router-dom";
import vkSvg from "../../assets/icons/vk.svg";
import fbSvg from "../../assets/icons/fb.svg";
import instagramSvg from "../../assets/icons/instagram.svg";
import phoneSvg from "../../assets/icons/phone.svg";
import footerBlueSvg from "../../assets/icons/footer-blue.svg";

const footerLinks = [
  { label: "О нас", to: "/about" },
  { label: "Доставка и оплата", to: "/delivery" },
  { label: "Вопросы и ответы", to: "/faq" },
  { label: "Отзывы", to: "/reviews" },
  { label: "Франчайзинг", to: "/franchise" },
  { label: "Для юрлиц", to: "/business" },
  { label: "Бонусная программа", to: "/bonus" },
  { label: "Контакты", to: "/contacts" },
  { label: "Акции", to: "/promo" },
  { label: "Статьи", to: "/articles" },
  { label: "Ветклиника", to: "/vetclinic" },
];

export default function Footer() {
  return (
    <footer className="mt-12 bg-white border-t border-gray-100">
      {/* Email subscription + socials */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1170px] mx-auto px-5 py-6 flex items-center gap-6">
          <p className="text-sm text-gray-600 whitespace-nowrap">
            Узнавайте о новых скидках
            <br />и спецпредложениях:
          </p>
          <div className="flex flex-1 max-w-sm gap-0">
            <input
              type="email"
              placeholder="Ваш E-mail"
              className="flex-1 h-10 px-4 text-sm transition-colors border border-gray-200 rounded-l-lg outline-none focus:border-orange-400"
            />
            <button className="h-10 px-5 text-sm text-white transition-colors bg-gray-400 border-none rounded-r-lg cursor-pointer hover:bg-orange-500 whitespace-nowrap">
              Подписаться
            </button>
          </div>
          <div className="flex gap-3 ml-auto">
            <a
              href="#"
              className="flex items-center justify-center transition-colors border border-gray-200 rounded-full cursor-pointer w-9 h-9 hover:border-orange-400"
            >
              <img src={vkSvg} alt="ВКонтакте" className="w-full h-full" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center transition-colors border border-gray-200 rounded-full cursor-pointer w-9 h-9 hover:border-orange-400"
            >
              <img src={fbSvg} alt="Facebook" className="w-full h-full" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center transition-colors bg-orange-500 rounded-full cursor-pointer w-9 h-9 hover:bg-orange-600"
            >
              <img
                src={instagramSvg}
                alt="Instagram"
                className="w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1170px] mx-auto px-5 py-4 flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs text-gray-500 no-underline transition-colors hover:text-orange-500"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-[1170px] mx-auto px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">
            © 2015–2019 Интернет-магазин зоотоваров «Сытая Морда»
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            Стоимость товаров на сайте не является публичной офертой
          </p>
        </div>
        <p className="text-xs text-gray-400">Условия соглашения</p>
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
        <a
          href="#"
          className="text-xs font-medium text-orange-500 no-underline hover:underline"
        >
          Заказать звонок
        </a>
      </div>

      {/* Blue chat button */}
      <div className="fixed z-50 bottom-6 right-6">
        <button className="flex items-center justify-center w-12 h-12 transition-colors bg-blue-500 border-none rounded-full shadow-lg cursor-pointer hover:bg-blue-600">
          <img
            src={footerBlueSvg}
            alt="Чат"
            className="w-6 h-6 brightness-0 invert"
          />
        </button>
      </div>
    </footer>
  );
}
