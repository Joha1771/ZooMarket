import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_TextLinksImages() {
  return (
    <TheoryWrap>
      <H>Matn teglari</H>
      <P>
        HTML matn teglarini ikki guruhga bo'lish mumkin:{" "}
        <strong>blok teglar</strong> (yangi qatordan boshlanadi) va{" "}
        <strong>inline teglar</strong> (matn ichida joylashadi).
      </P>
      <Table
        headers={["Teg", "Turi", "Vazifasi"]}
        rows={[
          ["<h1> — <h6>", "Block", "Sarlavhalar (h1 eng muhim, h6 eng kichik)"],
          ["<p>", "Block", "Paragraf — asosiy matn bloki"],
          ["<strong>", "Inline", "Muhim matn (qalin, semantik)"],
          ["<em>", "Inline", "Ta'kidlangan matn (kursiv, semantik)"],
          ["<b>", "Inline", "Qalin matn (faqat vizual)"],
          ["<i>", "Inline", "Kursiv matn (faqat vizual)"],
          ["<span>", "Inline", "Inline konteyner (styling uchun)"],
          ["<br>", "Inline", "Satr uzish (yopilmaydi)"],
          ["<hr>", "Block", "Gorizontal chiziq"],
          ["<blockquote>", "Block", "Uzoq iqtibos"],
          ["<code>", "Inline", "Kod matni (monospace)"],
          ["<pre>", "Block", "Formatlangan matn (bo'shliqlar saqlanadi)"],
        ]}
      />
      <Pre>{`<h1>Asosiy sarlavha</h1>
<h2>Kichik sarlavha</h2>

<p>Bu oddiy paragraf. <strong>Bu muhim.</strong> <em>Bu ta'kidlangan.</em></p>

<p>
  Kod misoli: <code>console.log("salom")</code>
</p>

<blockquote>
  "Dasturlash — ijodkorlikning yangi tili." — Steve Jobs
</blockquote>`}</Pre>

      <H>Havolalar (Links)</H>
      <P>
        <code>&lt;a&gt;</code> tegi (anchor) sahifalar orasida yoki tashqi
        resurslarga o'tish imkonini beradi.
      </P>
      <Pre>{`<!-- Tashqi havola -->
<a href="https://google.com" target="_blank" rel="noopener">
  Google ga o'tish
</a>

<!-- Ichki sahifaga -->
<a href="/about">Biz haqimizda</a>

<!-- Sahifa ichidagi bo'limga -->
<a href="#contacts">Kontaktlarga o'tish</a>
<section id="contacts">...</section>

<!-- Email -->
<a href="mailto:info@example.com">Xat yozing</a>

<!-- Telefon -->
<a href="tel:+998901234567">+998 90 123 45 67</a>`}</Pre>
      <Table
        headers={["Atribut", "Qiymati", "Vazifasi"]}
        rows={[
          ["href", "URL yoki #id", "Havola manzili (majburiy)"],
          ["target", "_blank", "Yangi oynada ochish"],
          ["target", "_self", "Joriy oynada ochish (standart)"],
          ["rel", "noopener noreferrer", "Xavfsizlik (target=_blank bilan)"],
          ["download", "fayl.pdf", "Faylni yuklab olish"],
          ["title", "Izoh matni", "Hover da ko'rinadigan tooltip"],
        ]}
      />
      <Note type="warning">
        <code>target="_blank"</code> ishlatganda <strong>har doim</strong>{" "}
        <code>rel="noopener noreferrer"</code> qo'shing — xavfsizlik uchun
        muhim.
      </Note>

      <H>Rasmlar (Images)</H>
      <P>
        <code>&lt;img&gt;</code> tegi yopilmaydi (self-closing).{" "}
        <code>alt</code> atributi majburiy — accessibility va SEO uchun.
      </P>
      <Pre>{`<!-- Asosiy rasm -->
<img src="rasm.jpg" alt="Tog' manzarasi" width="800" height="600">

<!-- Relative va absolute yo'l -->
<img src="./images/logo.png" alt="Logo">
<img src="https://example.com/photo.jpg" alt="Foto">

<!-- Figure bilan semantik -->
<figure>
  <img src="chart.png" alt="2024 yil statistikasi">
  <figcaption>2024 yil foydalanuvchilar statistikasi</figcaption>
</figure>

<!-- Loading optimizatsiyasi -->
<img src="big-photo.jpg" alt="Katta rasm" loading="lazy">`}</Pre>
      <Table
        headers={["Atribut", "Vazifasi", "Muhimligi"]}
        rows={[
          ["src", "Rasm manzili", "Majburiy"],
          ["alt", "Alternatif matn", "Majburiy (accessibility)"],
          ["width / height", "O'lcham (px yoki %)", "Tavsiya etiladi"],
          ["loading='lazy'", "Kech yuklash", "Performance uchun"],
          ["title", "Tooltip matni", "Ixtiyoriy"],
        ]}
      />
      <Note type="tip">
        <code>alt</code> ni bo'sh qoldirmang! Ekran o'quvchi dasturlar uchun
        zarur. Dekorativ rasmlarda <code>alt=""</code> qo'ying (bo'sh satr) — u
        holda o'quvchi o'tkazib ketadi.
      </Note>
    </TheoryWrap>
  );
}
