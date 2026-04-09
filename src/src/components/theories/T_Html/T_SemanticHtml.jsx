import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_SemanticHtml() {
  return (
    <TheoryWrap>
      <H>Semantik HTML nima?</H>
      <P>
        Semantik teglar o'zining <strong>ma'nosini</strong> bildiradi. Brauzer,
        qidiruv tizimlari (SEO) va ekran o'quvchi dasturlar (accessibility)
        uchun muhim. <code>&lt;div&gt;</code> hech narsa bildirmaydi,{" "}
        <code>&lt;header&gt;</code> esa "bu sarlavha qismi" deydi.
      </P>
      <H>Asosiy semantik teglar</H>
      <Table
        headers={["Teg", "Ma'nosi", "Qachon ishlatiladi"]}
        rows={[
          [
            "<header>",
            "Sarlavha qismi",
            "Sahifa yoki bo'lim sarlavhasi, logo, nav",
          ],
          ["<nav>", "Navigatsiya", "Havola ro'yxatlari, menyu"],
          ["<main>", "Asosiy kontent", "Sahifaning asosiy, yagona kontenti"],
          ["<section>", "Tematik bo'lim", "Bir mavzuga oid kontent bloki"],
          ["<article>", "Mustaqil maqola", "Blog post, yangilik, komment"],
          ["<aside>", "Yon panel", "Reklama, teglar, qo'shimcha ma'lumot"],
          [
            "<footer>",
            "Pastki qism",
            "Copyright, kontaktlar, ijtimoiy havolalar",
          ],
          ["<figure>", "Vizual kontent", "Rasm, diagramma, kod bloki"],
          ["<figcaption>", "Izoh", "figure tegi ichidagi tavsif"],
          [
            "<time>",
            "Vaqt/sana",
            '<time datetime="2024-01-15">15 yanvar</time>',
          ],
          ["<address>", "Kontakt ma'lumot", "Manzil, tel, email"],
          ["<mark>", "Belgilangan matn", "Qidiruv natijasidagi so'z"],
        ]}
      />
      <H>Semantik va div-soup taqqosi</H>
      <Pre>{`<!-- ✗ div-soup — ma'no yo'q -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main">
  <div class="article">...</div>
</div>
<div class="footer">...</div>

<!-- ✓ Semantik — to'g'ri yozish -->
<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>`}</Pre>
      <H>Sahifa tuzilmasi</H>
      <Pre>{`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Sahifa sarlavhasi</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Bosh sahifa</a>
      <a href="/about">Haqimizda</a>
    </nav>
  </header>

  <main>
    <section id="hero">
      <h1>Asosiy sarlavha</h1>
      <p>Kirish matni...</p>
    </section>

    <section id="articles">
      <article>
        <h2>Maqola sarlavhasi</h2>
        <time datetime="2024-01-15">15 yanvar 2024</time>
        <p>Maqola matni...</p>
      </article>
    </section>
  </main>

  <aside>
    <h3>Teglar</h3>
    <p>CSS, HTML, JavaScript</p>
  </aside>

  <footer>
    <p>&copy; 2024 VizoCode</p>
    <address>
      <a href="mailto:info@vizocode.uz">info@vizocode.uz</a>
    </address>
  </footer>
</body>
</html>`}</Pre>
      <Note type="tip">
        Semantik teglar SEO ni yaxshilaydi — Google sahifaning qaysi qismi muhim
        ekanligini tushunadi. <code>&lt;main&gt;</code> sahifada faqat{" "}
        <strong>bir marta</strong> ishlatilishi kerak.
      </Note>
      <Note type="info">
        <strong>Accessibility:</strong> Ekran o'quvchi dasturlar (ko'zi ojiz
        foydalanuvchilar uchun) semantik teglar yordamida sahifani to'g'ri
        o'qiydi. <code>&lt;nav&gt;</code> topilganda "Navigatsiya bo'limi" deb
        e'lon qiladi.
      </Note>
    </TheoryWrap>
  );
}
