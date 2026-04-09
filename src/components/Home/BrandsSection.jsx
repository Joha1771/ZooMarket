import SectionHeader from "../ui/SectionHeader";
import brands1 from "../../assets/icons/brands1.svg";
import brands2 from "../../assets/icons/brands2.svg";
import brands3 from "../../assets/icons/brands3.svg";
import brands4 from "../../assets/icons/brands4.svg";
import brands5 from "../../assets/icons/brands5.svg";
import brands6 from "../../assets/icons/brands6.svg";
import cardsRightArrow from "../../assets/icons/cards-right arrow.svg";

const brands = [
  { id: 1, icon: brands1, name: "Fresh Step" },
  { id: 2, icon: brands2, name: "Acana" },
  { id: 3, icon: brands3, name: "Деревенские лакомства" },
  { id: 4, icon: brands4, name: "Beaphar" },
  { id: 5, icon: brands5, name: "Zodiac" },
  { id: 6, icon: brands6, name: "НМ" },
];

export default function BrandsSection() {
  return (
    <section className="py-8">
      <div className="max-w-[1170px] mx-auto px-5">
        <SectionHeader title="Популярные бренды" />
        <div className="flex items-stretch">
          {brands.map((b) => (
            <div
              key={b.id}
              className="flex items-center justify-center cursor-pointer hover:border-orange-400"
            >
              <img src={b.icon} alt={b.name} className="" />
            </div>
          ))}
          {/* Стрелка — такая же как в карточках */}
          <div className="flex items-center justify-center flex-shrink-0 ml-3">
            <button className="p-0 bg-transparent border-none cursor-pointer">
              <img src={cardsRightArrow} alt="Ещё" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
