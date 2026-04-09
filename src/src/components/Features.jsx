import { useEffect, useRef } from "react";
import { useTranslation } from "../i18n";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx;

    const init = () => {
      ctx = gsap.context(() => {
        const totalWidth = track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -totalWidth,
          ease: "none",
          scrollTrigger: {
            id: "hscroll",
            trigger: section,
            start: "top top",
            end: () => `+=${totalWidth * 0.5}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });
      }, section);
    };

    const timer = setTimeout(init, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  const slides = [
    {
      num: "01",
      heading: t.features_data?.[0]?.title ?? "VIZUAL DARSLAR",
      sub:
        t.features_data?.[0]?.desc ??
        "Animatsiyalar va interaktiv sxemalar orqali har bir mavzuni ko'rib, his qilib tushuning.",
      accent: false,
    },
    {
      num: "02",
      heading: t.features_data?.[1]?.title ?? "BRAUZERDA KOD",
      sub:
        t.features_data?.[1]?.desc ??
        "VS Code o'rnatmasdan, brauzerda kod yozing va natijani real vaqtda ko'ring.",
      accent: true,
    },

    {
      num: "03",
      heading: t.features_data?.[2]?.title ?? "REAL LOYIHALAR",
      sub: t.features_data?.[2]?.desc ?? "Har oy haqiqiy loyiha yasaysiz",
      accent: true,
    },
    {
      num: "04",
      heading: t.features_data?.[3]?.title ?? "TEZ O‘RGANISH",
      sub:
        t.features_data?.[3]?.desc ??
        "Keraksiz narsalarsiz — faqat muhim bilimlar va tez rivojlanish.",
      accent: false,
    },
  ];

  return (
    <section
      id="courses"
      ref={sectionRef}
      style={{
        background: "#1e1b16",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "rgba(255,255,255,0.08)",
          zIndex: 30,
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            background: "#c85c1a",
            width: "0%",
            transition: "none",
          }}
        />
      </div>

      {/* Label */}
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 32,
          zIndex: 20,
          fontFamily: "monospace",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#c85c1a",
        }}
      >
        {t.features?.label ?? "// NIMA BOR?"}
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          top: 32,
          right: 32,
          zIndex: 20,
          fontFamily: "monospace",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        scroll ↓
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          height: "100%",
          width: `${slides.length * 100}vw`,
          willChange: "transform",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "100vw",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 clamp(32px, 8vw, 120px)",
              borderRight:
                i < slides.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ghost number */}
            <span
              style={{
                position: "absolute",
                right: "8vw",
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "monospace",
                fontWeight: 900,
                fontSize: "clamp(140px, 22vw, 280px)",
                color: "rgba(255,255,255,0.025)",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              {slide.num}
            </span>

            {/* Num + divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#c85c1a",
                }}
              >
                {slide.num}
              </span>
              <span
                style={{
                  width: 40,
                  height: 1,
                  background: "rgba(255,255,255,0.15)",
                }}
              />
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                {t.features?.label ?? "feature"}
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "inherit",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.9,
                fontSize: "clamp(58px, 9vw, 128px)",
                color: slide.accent ? "#c85c1a" : "#f2efe8",
                maxWidth: "75vw",
                marginBottom: 40,
              }}
            >
              {slide.heading}
            </h2>

            {/* Sub */}
            <p
              style={{
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 440,
                fontSize: "clamp(14px, 1.1vw, 16px)",
                color: "rgba(242,239,232,0.4)",
              }}
            >
              {slide.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
