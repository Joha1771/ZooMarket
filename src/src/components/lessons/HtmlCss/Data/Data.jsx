// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT MAP — export qilinadi CoursesPage'ga
// ═══════════════════════════════════════════════════════════════════════════════

// Starter kods
export const STARTERS = {
  "how-web-works": {
    code: `/* Brauzer qanday ishlashini sinab ko'ring */\nbody {\n  font-family: sans-serif;\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 20px;\n  background: #f2efe8;\n}\n\n.url-bar {\n  background: white;\n  border: 2px solid #c85c1a;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 14px;\n  color: #1a1814;\n  margin-bottom: 16px;\n}\n\n.page-content {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.08);\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="url-bar">🌐 https://vizocode.uz</div>\n  <div class="page-content">\n    <h1>Salom, Dunyo!</h1>\n    <p>Bu brauzer render qilgan sahifa.</p>\n  </div>\n</body>\n</html>`,
  },
  "html-basics": {
    code: `body {\n  font-family: sans-serif;\n  max-width: 500px;\n  margin: 30px auto;\n  padding: 20px;\n  background: #f2efe8;\n  color: #1a1814;\n}\na { color: #c85c1a; }\nimg { width: 100%; border-radius: 8px; }`,
    html: `<!DOCTYPE html>\n<html lang="uz">\n<head>\n  <meta charset="UTF-8">\n  <title>HTML Asoslar</title>\n  <style></style>\n</head>\n<body>\n  <h1>Birinchi sahifam</h1>\n  <p>Bu <strong>paragraf</strong>. HTML elementlar <em>teglardan</em> iborat.</p>\n  <a href="#">Havola</a>\n  <br>\n  <img src="https://picsum.photos/400/200" alt="Rasm">\n</body>\n</html>`,
  },
  "forms-tables": {
    code: `body { font-family: sans-serif; max-width: 500px; margin: 30px auto; padding: 20px; background: #f2efe8; }\nform { background: white; padding: 24px; border-radius: 12px; }\nlabel { display: block; font-size: 13px; margin-bottom: 4px; color: #7a7468; }\ninput, select, textarea { width: 100%; padding: 8px 12px; border: 1.5px solid rgba(26,24,20,0.15); border-radius: 6px; font-size: 14px; box-sizing: border-box; margin-bottom: 12px; }\ninput:focus, select:focus, textarea:focus { outline: none; border-color: #c85c1a; }\nbutton { background: #c85c1a; color: white; border: none; padding: 10px 24px; border-radius: 8px; cursor: pointer; font-size: 14px; }`,
    html: `<!DOCTYPE html>\n<html><head><style></style></head>\n<body>\n<form>\n  <label>Ism</label>\n  <input type="text" placeholder="Ismingiz...">\n  \n  <label>Email</label>\n  <input type="email" placeholder="email@example.com">\n  \n  <label>Yosh</label>\n  <input type="number" min="5" max="100">\n  \n  <label>Daraja</label>\n  <select>\n    <option>Boshlang'ich</option>\n    <option>O'rta</option>\n    <option>Yuqori</option>\n  </select>\n  \n  <label>Izoh</label>\n  <textarea rows="3" placeholder="Izoh..."></textarea>\n  \n  <button type="submit">Yuborish</button>\n</form>\n</body></html>`,
  },
  "semantic-html": {
    code: `* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; background: #f2efe8; }\nheader { background: #1a1814; color: white; padding: 16px 24px; }\nnav { background: #2c2820; padding: 10px 24px; display: flex; gap: 16px; }\nnav a { color: #c85c1a; text-decoration: none; font-size: 14px; }\nmain { max-width: 900px; margin: 24px auto; padding: 0 24px; display: grid; grid-template-columns: 2fr 1fr; gap: 24px; }\narticle { background: white; padding: 20px; border-radius: 12px; }\naside { background: white; padding: 16px; border-radius: 12px; }\nfooter { background: #1a1814; color: rgba(255,255,255,0.5); text-align: center; padding: 16px; font-size: 13px; margin-top: 24px; }`,
    html: `<!DOCTYPE html>\n<html lang="uz">\n<head><meta charset="UTF-8"><style></style></head>\n<body>\n  <header>\n    <h1>VizoCode</h1>\n  </header>\n  <nav>\n    <a href="#">Bosh sahifa</a>\n    <a href="#">Kurslar</a>\n    <a href="#">Blog</a>\n  </nav>\n  <main>\n    <article>\n      <h2>HTML Semantika</h2>\n      <p>Semantik teglar sahifaga ma'no beradi. Brauzer va SEO uchun muhim.</p>\n    </article>\n    <aside>\n      <h3>Tegishli maqolalar</h3>\n      <p>CSS Grid, Flexbox, Box Model</p>\n    </aside>\n  </main>\n  <footer>\n    <p>© 2024 VizoCode. Barcha huquqlar himoyalangan.</p>\n  </footer>\n</body>\n</html>`,
  },
  "css-intro": {
    code: `/* Selectorlar va stillar */\n\n/* Tag selector */\nbody {\n  font-family: sans-serif;\n  background: #f2efe8;\n  padding: 24px;\n}\n\n/* Class selector */\n.card {\n  background: white;\n  padding: 20px;\n  border-radius: 12px;\n  margin-bottom: 12px;\n  border-left: 4px solid #c85c1a;\n}\n\n/* ID selector */\n#special {\n  background: #c85c1a;\n  color: white;\n}\n\n/* Hover pseudoclass */\n.card:hover {\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  transform: translateY(-2px);\n  transition: all 0.2s;\n}`,
    html: `<!DOCTYPE html>\n<html><head><style></style></head>\n<body>\n  <div class="card">Oddiy karta</div>\n  <div class="card" id="special">Maxsus karta (ID)</div>\n  <div class="card">Yana bir karta</div>\n</body></html>`,
  },
  "colors-fonts": {
    code: `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');\n\nbody {\n  font-family: 'Space Grotesk', sans-serif;\n  background: #1a1814;\n  color: white;\n  padding: 32px;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 48px;\n  font-weight: 700;\n  color: #c85c1a;\n  letter-spacing: -0.02em;\n  margin-bottom: 8px;\n}\n\n.sub {\n  font-size: 18px;\n  color: rgba(255,255,255,0.5);\n  font-weight: 400;\n}\n\n.colors {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n\n.swatch {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-family: monospace;\n}`,
    html: `<!DOCTYPE html>\n<html><head><style></style></head>\n<body>\n  <h1>Rang va Shrift</h1>\n  <p class="sub">Typography & Color Demo</p>\n  <div class="colors">\n    <div class="swatch" style="background:#c85c1a;color:white">#c85c1a</div>\n    <div class="swatch" style="background:rgb(74,158,96);color:white">rgb</div>\n    <div class="swatch" style="background:rgba(24,95,165,0.8);color:white">rgba</div>\n    <div class="swatch" style="background:hsl(30,70%,50%);color:white">hsl</div>\n  </div>\n</body></html>`,
  },
  "box-model": {
    code: `/* Box Model amalda! */\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: monospace;\n  background: #f2efe8;\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n}\n\n.card {\n  width: 220px;\n  padding: 24px;\n  border: 4px solid #c85c1a;\n  margin: 20px;\n  background: white;\n  border-radius: 12px;\n  text-align: center;\n  font-size: 15px;\n  color: #1a1814;\n  box-shadow: 0 8px 24px rgba(200,92,26,0.2);\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n<div class="card">Box Model!</div>\n</body>\n</html>`,
  },
  flexbox: {
    code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  padding: 24px;\n  background: #2c2820;\n  border-radius: 12px;\n  min-height: 120px;\n  flex-wrap: wrap;\n}\n\n.box {\n  width: 56px;\n  height: 56px;\n  background: #c85c1a;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  font-family: monospace;\n  font-size: 18px;\n}\n\n.box:nth-child(even) {\n  background: #4a3828;\n  height: 72px;\n}`,
    html: `<!DOCTYPE html>\n<html><head><style></style></head>\n<body style="background:#f2efe8;padding:24px">\n<div class="container">\n  <div class="box">A</div>\n  <div class="box">B</div>\n  <div class="box">C</div>\n  <div class="box">D</div>\n  <div class="box">E</div>\n</div>\n</body></html>`,
  },
  grid: {
    code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  padding: 24px;\n}\n\n.item {\n  background: #f2efe8;\n  border: 1.5px solid rgba(26,24,20,0.1);\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  font-family: monospace;\n  font-size: 14px;\n}\n\n.item:nth-child(1) {\n  grid-column: span 2;\n  background: #c85c1a;\n  color: white;\n}\n\n.item:nth-child(4) {\n  grid-row: span 2;\n  background: #1a1814;\n  color: white;\n}`,
    html: `<!DOCTYPE html>\n<html><head><style></style></head>\n<body style="background:#e8e4dc;margin:0">\n<div class="grid">\n  <div class="item">1 (col span 2)</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4 (row span 2)</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>\n</body></html>`,
  },
  "project-landing": {
    code: `* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; background: #e8e4dc; color: #1a1814; }\n\n.navbar {\n  background: #1a1814;\n  padding: 16px 0;\n  position: sticky;\n  top: 0;\n}\n.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }\n.nav-inner { display: flex; justify-content: space-between; align-items: center; }\n.logo { color: white; font-weight: 900; font-size: 20px; letter-spacing: 0.05em; }\n.nav-links { display: flex; gap: 24px; list-style: none; }\n.nav-links a { color: rgba(255,255,255,0.6); text-decoration: none; font-size: 14px; }\n.nav-links a:hover { color: white; }\n\n.hero { padding: 80px 0; text-align: center; }\n.hero h1 { font-size: 56px; font-weight: 900; line-height: 1; margin-bottom: 16px; }\n.hero h1 span { color: #c85c1a; }\n.hero p { font-size: 18px; color: #7a7468; max-width: 500px; margin: 0 auto 32px; }\n.btn { background: #c85c1a; color: white; padding: 14px 32px; border-radius: 8px; border: none; font-size: 16px; font-weight: 700; cursor: pointer; box-shadow: 0 5px 0 #8a3a0a; }\n\n.cards { padding: 60px 0; }\n.cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }\n.card { background: #f2efe8; padding: 24px; border-radius: 16px; border: 1.5px solid rgba(26,24,20,0.1); }\n.card h3 { margin-bottom: 8px; font-size: 18px; }\n.card p { color: #7a7468; font-size: 14px; line-height: 1.6; }`,
    html: `<!DOCTYPE html>\n<html lang="uz">\n<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style></style></head>\n<body>\n  <nav class="navbar">\n    <div class="container">\n      <div class="nav-inner">\n        <div class="logo">VizoCode</div>\n        <ul class="nav-links">\n          <li><a href="#">Kurslar</a></li>\n          <li><a href="#">Narxlar</a></li>\n          <li><a href="#">Blog</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <section class="hero">\n    <div class="container">\n      <h1>Kod yozing.<br><span>Kelajak</span> yasang.</h1>\n      <p>Zamonaviy web dasturlashni o'rganish platformasi. HTML dan Next.js gacha.</p>\n      <button class="btn">Boshlash →</button>\n    </div>\n  </section>\n  <section class="cards">\n    <div class="container">\n      <h2>Nimani o'rganasiz?</h2>\n      <div class="cards-grid">\n        <div class="card"><h3>◧ HTML & CSS</h3><p>Veb sahifalar qurish asoslari. Semantic, adaptiv dizayn.</p></div>\n        <div class="card"><h3>⚡ JavaScript</h3><p>Interaktivlik, logika, API bilan ishlash.</p></div>\n        <div class="card"><h3>⚛ React</h3><p>Zamonaviy frontend framework. Hooks, State.</p></div>\n      </div>\n    </div>\n  </section>\n</body></html>`,
  },
};

// Quizlar
export const QUIZZES = {
  "how-web-works": {
    q: "Brauzer URL kiritilganda birinchi nima qiladi?",
    options: [
      "HTML yuklaydi",
      "DNS orqali IP manzilni topadi",
      "Server bilan to'g'ridan-to'g'ri gaplashadi",
      "CSS yuklab oladi",
    ],
    correct: 1,
    explain:
      "Birinchi DNS so'rovi — domen nom IP manzilga aylantiriladi. Keyin o'sha IP serverga ulaniladi.",
  },
  "html-basics": {
    q: "Juft bo'lmagan (self-closing) teg qaysi?",
    options: ["<p>", "<div>", "<img />", "<span>"],
    correct: 2,
    explain:
      "<img> yopiluvchi tegga ega emas — o'z-o'zini yopadi. Shuningdek <br>, <hr>, <input> ham shunday.",
  },
  "text-links-img": {
    q: "Havola yangi tabda ochilishi uchun qaysi atribut ishlatiladi?",
    options: ['href="new"', 'target="_blank"', 'rel="noopener"', 'open="tab"'],
    correct: 1,
    explain:
      'target="_blank" havolani yangi oynada/tabda ochadi. Xavfsizlik uchun rel="noopener" ham qo\'shish tavsiya etiladi.',
  },
  "forms-tables": {
    q: "Email manzil kiritish uchun qaysi input type ishlatiladi?",
    options: ['type="text"', 'type="mail"', 'type="email"', 'type="url"'],
    correct: 2,
    explain:
      'type="email" — brauzer avtomatik validatsiya qiladi. @ belgisi va domen bo\'lishi kerakligini tekshiradi.',
  },
  "semantic-html": {
    q: "Sahifaning asosiy yagona kontenti uchun qaysi teg ishlatiladi?",
    options: ["<section>", "<div class='main'>", "<main>", "<content>"],
    correct: 2,
    explain:
      "<main> sahifaning asosiy, yagona kontentini belgilaydi. Bir sahifada faqat bitta <main> bo'lishi kerak.",
  },
  "css-intro": {
    q: "Qaysi selector kuchliroq? (yuqori specificity)",
    options: [
      "p { color: red }",
      ".text { color: blue }",
      "#title { color: green }",
      "* { color: black }",
    ],
    correct: 2,
    explain:
      "ID selector (#) specificity: 1,0,0 — eng kuchli. Class: 0,1,0. Tag: 0,0,1. Universal (*): 0,0,0.",
  },
  "colors-fonts": {
    q: "rgba(200, 92, 26, 0.5) — oxirgi qiymat nima ma'noni anglatadi?",
    options: [
      "Ko'k rang qiymati",
      "Kontrast",
      "Shaffoflik (50%)",
      "Shrift o'lchami",
    ],
    correct: 2,
    explain:
      "RGBA'dagi to'rtinchi qiymat (alpha) — shaffoflik. 0 = to'liq shaffof, 1 = to'liq opaque. 0.5 = 50% shaffof.",
  },
  "box-model": {
    q: "CSS box model tartibini tanlang (ichdan tashqariga):",
    options: [
      "margin → border → padding → content",
      "content → padding → border → margin",
      "padding → content → margin → border",
      "border → padding → margin → content",
    ],
    correct: 1,
    explain:
      "To'g'ri tartib: content → padding → border → margin. Har bir qatlam oldingi qatlamni o'rab turadi.",
  },
  flexbox: {
    q: "`justify-content: space-between` nima qiladi?",
    options: [
      "Elementlarni o'rtaga joylashtiradi",
      "Elementlar orasida teng bo'sh joy, chekkaga yopishadi",
      "Elementlarni bir-biriga yaqin qiladi",
      "Elementlarni vertikal joylashtiradi",
    ],
    correct: 1,
    explain:
      "space-between: birinchi va oxirgi element chekkaga yopishadi, ular orasidagi joy teng bo'linadi.",
  },
  grid: {
    q: "grid-template-columns: repeat(3, 1fr) nima qiladi?",
    options: [
      "3 ta teng kenglikdagi ustun yaratadi",
      "3 ta qator yaratadi",
      "Har bir ustunni 3fr kenglikka o'rnatadi",
      "1 ta ustun va 3 ta qator yaratadi",
    ],
    correct: 0,
    explain:
      "repeat(3, 1fr) — 3 ta ustun, har biri 1 fraction (mavjud joyni teng bo'lib) kenglikda. fr = bo'sh joyning ulushi.",
  },
  github: {
    q: "git add . dan so'ng qaysi buyruq ishlatiladi?",
    options: ["git push", "git init", "git commit -m 'izoh'", "git pull"],
    correct: 2,
    explain:
      "Tartib: git add . → git commit -m 'izoh' → git push. Commit o'zgarishlarni izoh bilan saqlaydi.",
  },
  "project-landing": {
    q: "Responsive sayt uchun asosiy 2 ta qoida qaysi?",
    options: [
      "Font va rang",
      "Viewport meta va max-width",
      "Grid va flexbox",
      "JavaScript va CSS",
    ],
    correct: 1,
    explain:
      "1) <meta name='viewport'> — mobil qurilmalar uchun. 2) max-width + margin: 0 auto — kontent chegarasi.",
  },
};

export const HTML_CSS_CONTENT_KEYS = Object.fromEntries(
  Object.keys(QUIZZES).map((id) => [
    id,
    {
      xp:
        id === "project-landing"
          ? 120
          : id === "github"
            ? 90
            : id === "grid" || id === "flexbox" || id === "box-model"
              ? 80
              : 60,
      type: [
        "box-model",
        "flexbox",
        "grid",
        "colors-fonts",
        "how-web-works",
      ].includes(id)
        ? "interactive"
        : "visual",
      phases: [
        { id: "theory", labelKey: "lesson.phases.theory", icon: "📖" },
        { id: "explain", labelKey: "lesson.phases.explain", icon: "💡" },
        { id: "learn", labelKey: "lesson.phases.learn", icon: "🔍" },
        {
          id: "code",
          labelKey: "lesson.phases.code",
          icon: "✏️",
          starterCode: STARTERS[id]?.code || "",
          starterHTML: STARTERS[id]?.html || "",
        },
      ],
      quizKey: `lessons.${id}.quiz`,
    },
  ]),
);
