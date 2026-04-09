import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n";
import Container from "./Container";
import gsap from "gsap";

export default function FAQ() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const answerRef = useRef(null);
  const markerRef = useRef(null);
  const itemRefs = useRef([]);
  const prevActive = useRef(0);

  // animate answer panel on change
  useEffect(() => {
    if (!answerRef.current) return;
    gsap.fromTo(
      answerRef.current,
      { clipPath: "inset(0 0 100% 0)", opacity: 0.4 },
      {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 0.55,
        ease: "expo.out",
      },
    );
  }, [active]);

  // slide the orange marker to the active item
  useEffect(() => {
    const el = itemRefs.current[active];
    const marker = markerRef.current;
    if (!el || !marker) return;
    const top = el.offsetTop + el.offsetHeight / 2 - 1;
    gsap.to(marker, {
      y: top,
      duration: 0.45,
      ease: "expo.out",
    });
  }, [active]);

  // stagger items in on mount
  useEffect(() => {
    const els = itemRefs.current.filter(Boolean);
    gsap.fromTo(
      els,
      { x: -24, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "expo.out",
        stagger: 0.07,
        delay: 0.1,
      },
    );
  }, []);

  const faqs = t.faqs_data;

  return (
    <section className="py-24 bg-[#e8e4dc]">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#c85c1a] mb-3">
          {t.faq.label}
        </p>
        <h2 className="font-display text-[clamp(34px,5vw,56px)] font-black uppercase tracking-tight leading-none text-[#1a1814] mb-14">
          {t.faq.title1}
          <br />
          {t.faq.title2}
        </h2>

        <div className="flex flex-col gap-0 lg:flex-row lg:gap-16 xl:gap-24">
          {/* LEFT — question list */}
          <div className="relative flex-shrink-0 lg:w-[380px]">
            {/* sliding orange marker */}
            <div
              ref={markerRef}
              style={{ transform: "translateY(0px)" }}
              className="absolute -left-5 w-1.5 h-1.5 rounded-full bg-[#c85c1a] hidden lg:block"
            />

            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <button
                  key={i}
                  ref={(el) => (itemRefs.current[i] = el)}
                  onClick={() => setActive(i)}
                  className="flex items-start gap-4 py-5 text-left bg-transparent border-t-0 border-b border-l-0 border-r-0 opacity-0 cursor-pointer group border-black/10 last:border-b-0"
                >
                  <span
                    className="font-mono text-[10px] mt-1 flex-shrink-0 transition-colors duration-200"
                    style={{
                      color: active === i ? "#c85c1a" : "rgba(26,24,20,0.3)",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="text-sm leading-snug transition-all duration-200"
                    style={{
                      color: active === i ? "#1a1814" : "#7a7468",
                      fontWeight: active === i ? 600 : 400,
                    }}
                  >
                    {faq.q}
                  </span>
                  {/* mobile: inline chevron */}
                  <span
                    className="ml-auto flex-shrink-0 lg:hidden text-[#c85c1a] transition-transform duration-300"
                    style={{
                      transform:
                        active === i ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — answer panel */}
          <div className="flex-1 lg:pt-5">
            {/* mobile: inline answer below question */}
            <div className="lg:hidden">
              {faqs.map((faq, i) =>
                active === i ? (
                  <div key={i} className="pt-3 pb-6 border-b border-black/10">
                    <p className="text-sm text-[#7a7468] leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                ) : null,
              )}
            </div>

            {/* desktop: sticky big answer */}
            <div className="sticky hidden lg:block top-28">
              {/* question echo */}
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#c85c1a] mb-5">
                0{active + 1} — {t.faq.label}
              </p>

              {/* answer text with clip reveal */}
              <div ref={answerRef} style={{ clipPath: "inset(0 0 0% 0)" }}>
                <p className="text-[clamp(18px,2vw,26px)] text-[#1a1814] leading-relaxed font-light max-w-xl">
                  {faqs[active]?.a}
                </p>
              </div>

              {/* nav dots */}
              <div className="flex gap-2 mt-10">
                {faqs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="p-0 transition-all duration-300 bg-transparent border-none cursor-pointer"
                  >
                    <span
                      className="block transition-all duration-300 rounded-full"
                      style={{
                        width: active === i ? 24 : 6,
                        height: 6,
                        background:
                          active === i ? "#c85c1a" : "rgba(26,24,20,0.2)",
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* prev / next */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="px-4 py-2 font-mono text-[11px] uppercase tracking-wide border border-black/15 rounded cursor-pointer bg-transparent transition-all duration-200 hover:border-black/40 disabled:opacity-25 disabled:cursor-default"
                  style={{ color: "#7a7468" }}
                >
                  ← oldingi
                </button>
                <button
                  onClick={() =>
                    setActive((a) => Math.min(faqs.length - 1, a + 1))
                  }
                  disabled={active === faqs.length - 1}
                  className="px-4 py-2 font-mono text-[11px] uppercase tracking-wide border border-black/15 rounded cursor-pointer bg-transparent transition-all duration-200 hover:border-black/40 disabled:opacity-25 disabled:cursor-default"
                  style={{ color: "#7a7468" }}
                >
                  keyingi →
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
