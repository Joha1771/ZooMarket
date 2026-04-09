import { useState, useEffect, useRef } from "react";
import { useTranslation } from "../i18n";
import Container from "./Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const { t } = useTranslation();
  const [yearly, setYearly] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;

    const init = () => {
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".flip-card-inner");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { rotateY: -180, opacity: 0 },
            {
              rotateY: 0,
              opacity: 1,
              duration: 0.9,
              ease: "back.out(1.4)",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
        ScrollTrigger.refresh();
      }, sectionRef);
    };

    const timer = setTimeout(init, 200);
    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  const marqueeItems = [
    "FREE",
    "PRO",
    "PREMIUM",
    "BOSHLASH →",
    "NARXLAR",
    "OYLIK",
    "YILLIK",
    "CHEGIRMA",
    "FREE",
    "PRO",
    "PREMIUM",
    "BOSHLASH →",
    "NARXLAR",
    "OYLIK",
    "YILLIK",
    "CHEGIRMA",
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        background: "#ddd9d0",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Marquee background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 48,
            width: "max-content",
            animation: "pricingMarquee 28s linear infinite",
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "inherit",
                fontWeight: 900,
                fontSize: "clamp(60px, 10vw, 120px)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color:
                  i % 8 === 3 ? "rgba(200,92,26,0.07)" : "rgba(26,24,20,0.05)",
                whiteSpace: "nowrap",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pricingMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#c85c1a",
              marginBottom: 12,
            }}
          >
            {t.pricing.label}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h2
              style={{
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.95,
                fontSize: "clamp(34px, 5vw, 56px)",
                color: "#1a1814",
                margin: 0,
              }}
            >
              {t.pricing.title1}
              <br />
              <span style={{ color: "#c85c1a" }}>{t.pricing.title2}</span>
            </h2>

            {/* Toggle */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingBottom: 8,
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: !yearly ? "#1a1814" : "#7a7468",
                }}
              >
                {t.pricing.monthly}
              </span>
              <button
                onClick={() => setYearly((v) => !v)}
                style={{
                  position: "relative",
                  width: 48,
                  height: 26,
                  borderRadius: 999,
                  border: yearly ? "none" : "1px solid rgba(26,24,20,0.2)",
                  background: yearly ? "#c85c1a" : "white",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 3,
                    left: yearly ? 24 : 3,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "white",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    transition: "left 0.3s",
                  }}
                />
              </button>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: yearly ? "#1a1814" : "#7a7468",
                }}
              >
                {t.pricing.yearly}
              </span>
              {yearly && (
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#c85c1a",
                    background: "rgba(200,92,26,0.1)",
                    border: "1px solid rgba(200,92,26,0.2)",
                    borderRadius: 4,
                    padding: "2px 8px",
                  }}
                >
                  {t.pricing.yearlySave}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Cards — centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          {t.pricing_data.map((plan) => (
            <div key={plan.name} style={{ perspective: 1000 }}>
              <div
                className="flip-card-inner"
                style={{
                  background: plan.featured ? "#1a1814" : "#f2efe8",
                  border: plan.featured
                    ? "1px solid rgba(200,92,26,0.3)"
                    : "1px solid rgba(26,24,20,0.1)",
                  borderRadius: 16,
                  padding: "36px 32px",
                  position: "relative",
                  opacity: 0,
                }}
              >
                {plan.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "#c85c1a",
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                )}

                {plan.badge && (
                  <span
                    style={{
                      display: "inline-block",
                      marginBottom: 16,
                      fontFamily: "monospace",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#c85c1a",
                      background: "rgba(200,92,26,0.1)",
                      border: "1px solid rgba(200,92,26,0.2)",
                      borderRadius: 4,
                      padding: "3px 10px",
                    }}
                  >
                    {plan.badge}
                  </span>
                )}

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: plan.featured ? "rgba(242,239,232,0.5)" : "#7a7468",
                    marginBottom: 8,
                  }}
                >
                  {plan.name}
                </div>

                <div
                  style={{
                    fontWeight: 900,
                    fontSize: 52,
                    letterSpacing: "-0.03em",
                    color: plan.featured ? "#f2efe8" : "#1a1814",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  $
                  {yearly && plan.yearlyPrice !== undefined
                    ? plan.yearlyPrice
                    : plan.monthlyPrice}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    marginBottom: 28,
                    color: plan.featured ? "rgba(242,239,232,0.35)" : "#7a7468",
                  }}
                >
                  {plan.period ??
                    (yearly ? t.pricing.perMonthYearly : t.pricing.perMonth)}
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 28px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 13,
                        padding: "9px 0",
                        borderBottom: `1px solid ${plan.featured ? "rgba(255,255,255,0.07)" : "rgba(26,24,20,0.07)"}`,
                        color: f.on
                          ? plan.featured
                            ? "#f2efe8"
                            : "#1a1814"
                          : plan.featured
                            ? "rgba(242,239,232,0.25)"
                            : "rgba(26,24,20,0.3)",
                        fontWeight: 300,
                      }}
                    >
                      <span
                        style={{
                          color: f.on ? "#c85c1a" : "transparent",
                          fontWeight: 700,
                          fontSize: 16,
                          lineHeight: 1,
                        }}
                      >
                        —
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                {plan.featured ? (
                  <button
                    style={{
                      width: "100%",
                      padding: "14px 0",
                      fontWeight: 900,
                      fontSize: 14,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#f2efe8",
                      background: "#c85c1a",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      boxShadow: "0 4px 0 0 #8a3a0a",
                      transition: "all 0.1s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 6px 0 0 #8a3a0a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = "0 4px 0 0 #8a3a0a";
                    }}
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <button
                    style={{
                      width: "100%",
                      padding: "14px 0",
                      fontSize: 13,
                      color: "#7a7468",
                      background: "transparent",
                      border: "1px solid rgba(26,24,20,0.18)",
                      borderRadius: 8,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#1a1814";
                      e.currentTarget.style.color = "#1a1814";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(26,24,20,0.18)";
                      e.currentTarget.style.color = "#7a7468";
                    }}
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
