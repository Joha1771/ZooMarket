import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_ExamFigma() {
  return (
    <TheoryWrap>
      <H>Imtihon: Figma dizaynni kodga aylantirish</H>
      <P>
        Bu dars — HTML/CSS bo'limi yakuniy imtihoni. Sizga Figma da tayyorlangan
        UI beriladi va uni to'liq HTML + CSS da yozasiz. Bu real ishda har kuni
        bajaradigan vazifangiz.
      </P>

      <H>Imtihon strukturasi</H>
      <Table
        headers={["Bosqich", "Vazifa", "Vaqt"]}
        rows={[
          [
            "1. Tahlil",
            "Figma dizaynni o'rganing, bo'laklarga bo'ling",
            "5 daqiqa",
          ],
          ["2. HTML", "Semantik tuzilmani yozing", "10 daqiqa"],
          [
            "3. CSS — Layout",
            "Flexbox/Grid bilan joylashtirishni qiling",
            "15 daqiqa",
          ],
          ["4. CSS — Styling", "Ranglar, tipografiya, effektlar", "15 daqiqa"],
          ["5. Responsive", "Mobile ko'rinishini moslang", "10 daqiqa"],
          ["6. Tekshirish", "Piksel aniqligini solishtiring", "5 daqiqa"],
        ]}
      />

      <H>Dizaynni tahlil qilish yondashuvi</H>
      <Pre>{`/* 1-qadam: Katta bloklar */
header → nav
main → section (hero, features, cta)
footer

/* 2-qadam: Har blok ichida */
Qaysi flex direction?
Gap qancha?
Padding qancha?

/* 3-qadam: Komponentlar */
Button → reusable class
Card → reusable component
Input → form element`}</Pre>

      <H>Baholash mezonlari</H>
      <Table
        headers={["Mezon", "Ball", "Nima tekshiriladi"]}
        rows={[
          ["Semantik HTML", "20%", "To'g'ri teglar, tuzilma mantiqiy"],
          ["Layout aniqligi", "30%", "Flexbox/Grid, joylashuv to'g'ri"],
          ["Vizual aniqligi", "25%", "Ranglar, o'lchamlar, tipografiya"],
          ["Responsive", "15%", "Mobile va desktop ko'rinishi"],
          ["Kod sifati", "10%", "BEM, o'zgaruvchilar, tartiblilik"],
        ]}
      />

      <H>Umumiy xatolar va yechimlar</H>
      <Pre>{`/* ✗ Xato: Barcha narsani div bilan */
<div class="header">
  <div class="nav-wrapper">
    <div class="nav-item">...</div>

/* ✓ To'g'ri: Semantik teglar */
<header>
  <nav>
    <a href="/">Home</a>

/* ✗ Xato: Magic numbers */
margin-top: 37px;
left: 142px;

/* ✓ To'g'ri: Flexbox / Grid bilan */
.parent { display: flex; align-items: center; }

/* ✗ Xato: Inline styles */
<div style="color:red; font-size:16px">

/* ✓ To'g'ri: CSS class */
.error-text { color: #e06c75; font-size: 1rem; }`}</Pre>

      <H>CSS Checklist (imtihon oldidan)</H>
      <Pre>{`/* Reset / Normalize */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: 'Inter', sans-serif; }

/* CSS o'zgaruvchilar */
:root {
  --primary: ...;
  --bg: ...;
  --text: ...;
  --radius: ...;
  --shadow: ...;
}

/* Responsive breakpoints */
/* Mobile first yondashuv */
.container { width: 100%; padding: 0 16px; }

@media (min-width: 768px) {
  .container { max-width: 768px; margin: 0 auto; }
}

@media (min-width: 1200px) {
  .container { max-width: 1200px; }
}`}</Pre>
      <Note type="tip">
        Imtihonda vaqtni tejash uchun avval{" "}
        <strong>HTML tuzilmasini to'liq tugatib</strong>, keyin CSS yozing.
        Aksincha qilsangiz — CSS ni qayta-qayta o'zgartirishga to'g'ri keladi.
      </Note>
      <Note type="warning">
        Figma o'lchamlarini <strong>aynan px da</strong> ko'chirmayman, deb
        o'ylang. <code>border-radius: 12.34px</code> emas, <code>12px</code>{" "}
        yoki <code>0.75rem</code> yozing. Dizayn sistemasi muhimroq.
      </Note>
    </TheoryWrap>
  );
}
