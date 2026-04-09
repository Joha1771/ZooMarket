import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_FigmaCSS() {
  return (
    <TheoryWrap>
      <H>Figma → CSS: Dizayndan kodga</H>
      <P>
        Figma — professional UI/UX dizayn vositasi. Dizayner yaratgan layoutni
        CSS kodiga aylantirish — frontend dasturchi uchun asosiy ko'nikma.
      </P>

      <H>Figma panel → CSS xususiyatlari</H>
      <Table
        headers={["Figma paneli", "CSS xususiyati", "Misol"]}
        rows={[
          ["Fill (rang)", "background / color", "background: #c85c1a"],
          ["Stroke", "border", "border: 2px solid #333"],
          ["Corner radius", "border-radius", "border-radius: 8px"],
          ["W × H", "width / height", "width: 320px; height: 48px"],
          ["X, Y (Auto Layout)", "gap, padding, margin", "padding: 12px 24px"],
          ["Opacity", "opacity", "opacity: 0.75"],
          [
            "Drop Shadow",
            "box-shadow",
            "box-shadow: 0 4px 12px rgba(0,0,0,0.15)",
          ],
          ["Blur", "filter: blur()", "filter: blur(4px)"],
          ["Font size", "font-size", "font-size: 16px"],
          ["Font weight", "font-weight", "font-weight: 600"],
          ["Line height", "line-height", "line-height: 1.5"],
          ["Letter spacing", "letter-spacing", "letter-spacing: 0.05em"],
        ]}
      />

      <H>Auto Layout → Flexbox</H>
      <P>Figma ning Auto Layout xususiyati CSS Flexbox ga to'g'ri keladi.</P>
      <Pre>{`/* Figma: Auto Layout → Horizontal */
.container {
  display: flex;
  flex-direction: row;      /* Figma: Direction = Horizontal */
  gap: 16px;                /* Figma: Gap between items */
  padding: 24px;            /* Figma: Padding */
  align-items: center;      /* Figma: Align items = Center */
  justify-content: space-between; /* Figma: Justify = Space between */
}

/* Figma: Auto Layout → Vertical */
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
}`}</Pre>

      <H>Figma Shadow → box-shadow</H>
      <Pre>{`/* Figma: X=0, Y=4, Blur=12, Spread=0, Color=#000 20% */
box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);

/* Ichki soya (Inner Shadow) */
box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);

/* Ko'p qatlamli soya */
box-shadow:
  0 1px 3px rgba(0,0,0,0.12),
  0 4px 12px rgba(0,0,0,0.08);`}</Pre>

      <H>Typography (Tipografiya)</H>
      <Pre>{`/* Figma: SF Pro Display, 32px, Semibold, -1% letter spacing */
h1 {
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

/* Responsive tipografiya */
h1 {
  font-size: clamp(24px, 4vw, 48px); /* min, preferred, max */
}

/* Google Fonts ulanish */
/* HTML head da: */
/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"> */`}</Pre>

      <H>Pixel-perfect vs Responsive</H>
      <Table
        headers={["Yondashuv", "Qachon", "Usul"]}
        rows={[
          ["Pixel-perfect", "Figma o'lchamlariga aniq mos", "px qiymatlar"],
          ["Relative units", "Scalable dizayn", "rem, em, %"],
          [
            "Responsive",
            "Har xil ekran o'lchamlari",
            "clamp(), vw, Media queries",
          ],
        ]}
      />
      <Pre>{`/* px → rem konvertatsiya (1rem = 16px) */
font-size: 16px;  →  font-size: 1rem;
padding: 24px;    →  padding: 1.5rem;
margin: 8px;      →  margin: 0.5rem;

/* clamp() — min, preferred, max */
width: clamp(280px, 50%, 600px);
font-size: clamp(14px, 2vw, 18px);`}</Pre>
      <Note type="tip">
        Figma da elementni tanlang → o'ng panelning pastida{" "}
        <strong>"Dev mode"</strong> (yoki Inspect) tugmasi bor — u yerda tayyor
        CSS kodi ko'rsatiladi. Bu vaqtni tejaydi!
      </Note>
      <Note type="info">
        Ranglarni Figma dan nusxalashda HEX format eng qulay. Lekin{" "}
        <strong>opacity bilan ranglar</strong> uchun <code>rgba()</code> yoki
        CSS o'zgaruvchisi ishlatish yaxshiroq.
      </Note>
    </TheoryWrap>
  );
}
