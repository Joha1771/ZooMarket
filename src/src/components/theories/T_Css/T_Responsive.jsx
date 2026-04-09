import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Responsive() {
  return (
    <TheoryWrap>
      <H>Responsive dizayn nima?</H>
      <P>
        Responsive — sayt barcha qurilmalarda (mobil, planşet, desktop) to'g'ri
        ko'rinishi. Asosiy 2 qoida: <strong>1) viewport meta teg</strong>,{" "}
        <strong>2) media queries</strong>.
      </P>

      <H>Viewport meta teg (MAJBURIY!)</H>
      <Pre>{`<!-- HTML <head> ichida bo'lishi shart -->
<meta name="viewport" content="width=device-width, initial-scale=1">`}</Pre>

      <H>Media Queries</H>
      <Pre>{`/* Mobile-first (min-width) — tavsiya etiladi */
/* Mobil: default stil */
.grid { grid-template-columns: 1fr; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Desktop-first (max-width) */
.grid { grid-template-columns: repeat(3, 1fr); }

@media (max-width: 1023px) {
  .grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 767px) {
  .grid { grid-template-columns: 1fr; }
}`}</Pre>

      <H>Keng tarqalgan breakpointlar</H>
      <Table
        headers={["Nom", "min-width", "Qurilma"]}
        rows={[
          ["sm", "640px", "Kichik telefon (landscape)"],
          ["md", "768px", "Planshet"],
          ["lg", "1024px", "Kichik laptop"],
          ["xl", "1280px", "Desktop"],
          ["2xl", "1536px", "Katta ekran"],
        ]}
      />

      <H>CSS o'lchov birliklari</H>
      <Table
        headers={["Birlik", "Ma'nosi", "Misol"]}
        rows={[
          ["px", "Piksel (mutlaq)", "font-size: 16px"],
          ["rem", "Root font-size × n (16px × 1.5 = 24px)", "padding: 1.5rem"],
          ["em", "Ota elementning font-size'i × n", "margin: 1.5em"],
          ["vh", "Viewport balandligining %i", "height: 100vh"],
          ["vw", "Viewport kengligining %i", "width: 50vw"],
          ["%", "Ota elementga nisbatan %", "width: 100%"],
          [
            "clamp()",
            "min, ideal, max — responsive o'lcham",
            "font-size: clamp(16px, 4vw, 24px)",
          ],
        ]}
      />

      <Pre>{`/* clamp() — media query siz responsive */
h1 {
  font-size: clamp(28px, 5vw, 64px);
  /* Minimal: 28px, ideal: 5vw, maksimal: 64px */
}

/* fluid gap */
.section {
  padding: clamp(40px, 8vw, 120px) 0;
}`}</Pre>

      <Note type="tip">
        Mobile-first ishlash afzal: avval mobil uchun yozing, keyin katta
        ekranlar uchun. Bu performance uchun ham yaxshi.
      </Note>
    </TheoryWrap>
  );
}
