import { useTranslation } from "../i18n";
import Container from "./Container";

export default function Curriculum() {
  const { t } = useTranslation();
  const curriculum = t.curriculum_data;

  const colors = [
    "#1a2318",
    "#1f2b1d",
    "#243222",
    "#28382a",
    "#2d3f2e",
    "#324632",
  ];

  return (
    <section
      id="roadmap"
      style={{ background: "#1a2318", padding: "80px 0 120px" }}
    >
      <Container>
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
            {t.curriculum.label}
          </p>
          <h2
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              fontSize: "clamp(34px, 5vw, 56px)",
              color: "#f2efe8",
              margin: 0,
            }}
          >
            {t.curriculum.title1}
            <br />
            <span style={{ color: "#c85c1a" }}>{t.curriculum.title2}</span>
          </h2>
        </div>

        {/* Stacking cards via CSS sticky */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {curriculum.map((item, i) => (
            <div
              key={i}
              style={{
                position: "sticky",
                top: `${60 + i * 16}px`,
                zIndex: i + 1,
                background: colors[i % colors.length],
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: "48px 52px",
                marginBottom: 16,
                transformOrigin: "top center",
                overflow: "hidden",
              }}
            >
              {/* Ghost number */}
              <span
                style={{
                  position: "absolute",
                  right: 40,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontFamily: "monospace",
                  fontWeight: 900,
                  fontSize: "clamp(80px, 14vw, 160px)",
                  color: "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {item.month}
              </span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Top row */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#c85c1a",
                      background: "rgba(200,92,26,0.12)",
                      border: "1px solid rgba(200,92,26,0.25)",
                      borderRadius: 6,
                      padding: "4px 12px",
                    }}
                  >
                    {item.month}
                  </span>
                  <span
                    style={{
                      width: 32,
                      height: 1,
                      background: "rgba(255,255,255,0.12)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {t.curriculum.subtitle ?? "modul"}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    fontSize: "clamp(26px, 3.5vw, 48px)",
                    color: "#f2efe8",
                    lineHeight: 0.95,
                    maxWidth: "70%",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>

                {/* Topics */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      style={{
                        fontFamily: "monospace",
                        fontSize: 12,
                        color: "rgba(242,239,232,0.55)",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 6,
                        padding: "6px 14px",
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
