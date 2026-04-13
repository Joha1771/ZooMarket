import clinicImage from "../../assets/clinic.png";
import heroBtnArrow from "../../assets/icons/hero-btn-arrow.svg";

export default function VetClinicBanner() {
  return (
    <section className="py-4 pt-20" id="vetClinic">
      <div className="max-w-[1050px] mx-auto px-5">
        <div
          className="relative rounded-2xl px-14 py-10 flex items-center min-h-[360px] transition-shadow duration-300 hover:shadow-xl"
          style={{ backgroundColor: "#F5A623", overflow: "visible" }}
        >
          <div className="z-10 max-w-sm">
            <h2 className="mb-2 text-[28px] font-extrabold text-white leading-tight">
              Мы открыли собственную ветклинику
            </h2>
            <p className="mb-6 text-sm text-white/90">
              Скидка 50% на первый приём.
            </p>
            <button
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-white rounded-lg hover:bg-orange-50 hover:shadow-md active:scale-95 transition-all duration-150 border-none cursor-pointer"
              style={{ color: "#FE9015" }}
            >
              На сайт ветклиники
              <img src={heroBtnArrow} alt="" className="w-4 h-3" />
            </button>
          </div>

          <img
            src={clinicImage}
            alt="Ветклиника"
            className="transition-transform duration-300 hover:scale-105"
            style={{
              position: "absolute",
              right: "1px",
              top: "-50px",
              bottom: "0",
              height: "130%",
              width: "400px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}
