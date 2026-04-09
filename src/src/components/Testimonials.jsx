import { TESTIMONIALS } from "../data";
import { useTranslation } from "../i18n";
import Container from "./Container";

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-[#e8e4dc]">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#c85c1a] mb-3">
          {t.testimonials.label}
        </p>
        <h2 className="font-display text-[clamp(34px,5vw,56px)] font-black uppercase tracking-tight leading-none text-[#1a1814] mb-14">
          {t.testimonials.title1}
          <br />
          {t.testimonials.title2}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.name}
              className="bg-[#f2efe8] border border-black/10 rounded-xl p-6 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,24,20,.1)] transition-all duration-200"
            >
              <div className="flex gap-1">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i} className="text-[#c85c1a] text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#7a7468] leading-relaxed font-light flex-1">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${item.color}`}
                >
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1a1814]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#7a7468] font-light">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
