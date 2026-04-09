import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_ProjectLanding() {
  return (
    <TheoryWrap>
      <H>Landing page nima?</H>
      <P>
        Landing page — bitta maqsadga yo'naltirilgan sahifa. Oddatda: mahsulot
        taqdimoti, ro'yxatdan o'tish, kampaniya. Ko'p sahifali saytdan farq
        qiladi — faqat bitta sahifa.
      </P>

      <H>Standart landing page tuzilmasi</H>
      <Pre>{`<body>
  <header>          <!-- Logo, navigatsiya -->
    <nav>...</nav>
  </header>

  <main>
    <section class="hero">     <!-- Asosiy taklif -->
    <section class="features"> <!-- Afzalliklar -->
    <section class="pricing">  <!-- Narxlar -->
    <section class="cta">      <!-- Chaqiruv (Call to Action) -->
  </main>

  <footer>          <!-- Havolalar, copyright -->
  </footer>
</body>`}</Pre>

      <H>Container — asosiy tuzilma elementi</H>
      <Pre>{`/* Figma: kenglik 1440px, padding 120px */
/* Container: 1440 - 2×120 = 1200px */

.container {
  max-width: 1200px;
  margin: 0 auto;     /* Gorizontal markazlash */
  padding: 0 20px;    /* Mobil uchun ichki padding */
}

/* Ishlatish */
<section class="hero">
  <div class="container">
    <!-- Kontent bu yerda -->
  </div>
</section>`}</Pre>

      <H>CSS Reset / Normalize</H>
      <Pre>{`/* Loyiha boshida doim qo'shing */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  line-height: 1.6;
  color: #1a1814;
}`}</Pre>

      <H>Figma'dan CSS ga o'tish</H>
      <Table
        headers={["Figma elementi", "CSS'da qanday?", "Misol"]}
        rows={[
          ["Fill (rang)", "background / color", "#c85c1a"],
          ["Stroke", "border", "2px solid #c85c1a"],
          ["Corner radius", "border-radius", "8px"],
          ["Shadow", "box-shadow", "0 4px 12px rgba(0,0,0,0.1)"],
          ["Opacity", "opacity", "0.8"],
          ["Letter spacing", "letter-spacing", "0.05em"],
          ["Line height", "line-height", "1.5"],
          ["Auto layout", "display: flex", "gap, padding"],
          ["Grid", "display: grid", "grid-template-columns"],
        ]}
      />

      <H>Deploy — saytni internetga chiqarish</H>
      <Pre>{`# Netlify orqali (drag-and-drop yoki GitHub)
1. netlify.com → Login
2. "Add new site" → "Deploy manually"
3. Build papkasini sürükleb tushirish
   YOKI
3. GitHub'ni ulash → branch tanlash → Deploy

# Vercel orqali
1. vercel.com → GitHub bilan kirish
2. "New Project" → Repo tanlash
3. Deploy (avtomatik)`}</Pre>

      <Note type="tip">
        Professional ko'rinish uchun: favicon qo'shing, meta description yozing,
        og:image qo'shing (social sharing uchun).
      </Note>
    </TheoryWrap>
  );
}
