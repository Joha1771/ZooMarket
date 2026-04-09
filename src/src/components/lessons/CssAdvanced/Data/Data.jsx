// ═══════════════════════════════════════════════════════════════════════════════
// DATA — CssAdvanced STARTERS & QUIZZES
// ═══════════════════════════════════════════════════════════════════════════════

export const STARTERS = {
  position: {
    code: `/* Position amalda */\n\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\nbody {\n  font-family: monospace;\n  background: #f2efe8;\n  min-height: 100vh;\n  padding: 40px;\n}\n\n.container {\n  position: relative;\n  background: #2c2820;\n  width: 400px;\n  height: 300px;\n  border-radius: 16px;\n  margin: 0 auto;\n}\n\n.box {\n  width: 80px;\n  height: 80px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: white;\n  font-size: 14px;\n}\n\n.box-a {\n  background: #c85c1a;\n  position: relative;\n  top: 20px;\n  left: 20px;\n}\n\n.box-b {\n  background: #185FA5;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.box-c {\n  background: #4a9e60;\n  position: absolute;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="container">\n    <div class="box box-a">A<br>relative</div>\n    <div class="box box-b">B<br>absolute</div>\n    <div class="box box-c">C<br>center</div>\n  </div>\n</body>\n</html>`,
  },
  pseudo: {
    code: `* { box-sizing: border-box; }\n\nbody {\n  font-family: sans-serif;\n  background: #f2efe8;\n  padding: 40px;\n}\n\n.list-item {\n  padding: 12px 16px;\n  background: white;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 1.5px solid rgba(26,24,20,0.1);\n}\n\n.list-item:hover {\n  background: #c85c1a;\n  color: white;\n  transform: translateX(8px);\n}\n\n.list-item:first-child {\n  border-left: 4px solid #c85c1a;\n}\n\n.list-item:nth-child(even) {\n  background: #e8e4dc;\n}\n\n.badge {\n  position: relative;\n  display: inline-block;\n  padding: 8px 16px;\n  background: #1a1814;\n  color: white;\n  border-radius: 8px;\n  margin-top: 16px;\n}\n\n.badge::before {\n  content: '🔥 ';\n}\n\n.badge::after {\n  content: ' ✨';\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="list-item">Birinchi element (first-child)</div>\n  <div class="list-item">Ikkinchi element (even)</div>\n  <div class="list-item">Uchinchi element</div>\n  <div class="list-item">To'rtinchi element (even)</div>\n  <div class="list-item">Beshinchi element</div>\n  <br>\n  <div class="badge">Yangi</div>\n</body>\n</html>`,
  },
  transforms: {
    code: `body {\n  font-family: monospace;\n  background: #1a1814;\n  display: flex;\n  gap: 24px;\n  flex-wrap: wrap;\n  padding: 40px;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.box {\n  width: 80px;\n  height: 80px;\n  background: #c85c1a;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n\n.rotate:hover    { transform: rotate(45deg); }\n.scale:hover     { transform: scale(1.4); }\n.translate:hover { transform: translateY(-20px); }\n.skew:hover      { transform: skewX(20deg); }\n.combine:hover   { transform: rotate(15deg) scale(1.2) translateY(-10px); }\n\n.box:nth-child(2) { background: #185FA5; }\n.box:nth-child(3) { background: #4a9e60; }\n.box:nth-child(4) { background: #993556; }\n.box:nth-child(5) { background: #b07820; }`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="box rotate">rotate</div>\n  <div class="box scale">scale</div>\n  <div class="box translate">translate</div>\n  <div class="box skew">skew</div>\n  <div class="box combine">combine</div>\n</body>\n</html>`,
  },
  animations: {
    code: `body {\n  font-family: monospace;\n  background: #1a1814;\n  display: flex;\n  gap: 32px;\n  flex-wrap: wrap;\n  padding: 60px;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.2); opacity: 0.7; }\n}\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-30px); }\n}\n\n@keyframes fadeSlide {\n  from { opacity: 0; transform: translateX(-40px); }\n  to { opacity: 1; transform: translateX(0); }\n}\n\n.box {\n  width: 70px;\n  height: 70px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 11px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.pulse     { background: #c85c1a; animation: pulse 1.5s ease-in-out infinite; }\n.spin      { background: #185FA5; animation: spin 2s linear infinite; }\n.bounce    { background: #4a9e60; animation: bounce 1s ease-in-out infinite; }\n.fade-slide { background: #993556; animation: fadeSlide 1s ease forwards; }`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="box pulse">pulse</div>\n  <div class="box spin">spin</div>\n  <div class="box bounce">bounce</div>\n  <div class="box fade-slide">fadeSlide</div>\n</body>\n</html>`,
  },
  gradients: {
    code: `body {\n  font-family: sans-serif;\n  background: #1a1814;\n  padding: 32px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n\n.card {\n  height: 120px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 13px;\n  text-shadow: 0 1px 3px rgba(0,0,0,0.4);\n}\n\n.linear    { background: linear-gradient(135deg, #c85c1a, #185FA5); }\n.radial    { background: radial-gradient(circle, #4a9e60, #1a1814); }\n.diagonal  { background: linear-gradient(to bottom right, #993556, #b07820); }\n.conic     { background: conic-gradient(#c85c1a, #185FA5, #4a9e60, #c85c1a); }\n.multi     { background: linear-gradient(to right, #c85c1a, #b07820, #4a9e60); }\n.glassmorphism {\n  background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255,255,255,0.2);\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="card linear">linear-gradient</div>\n  <div class="card radial">radial-gradient</div>\n  <div class="card diagonal">diagonal</div>\n  <div class="card conic">conic-gradient</div>\n  <div class="card multi">multi-stop</div>\n  <div class="card glassmorphism">glassmorphism</div>\n</body>\n</html>`,
  },
  responsive: {
    code: `* { box-sizing: border-box; margin: 0; padding: 0; }\n\nbody {\n  font-family: sans-serif;\n  background: #f2efe8;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.navbar {\n  background: #1a1814;\n  padding: 16px 0;\n}\n\n.nav-inner {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo { color: #c85c1a; font-weight: 900; font-size: 20px; }\n.nav-links { display: flex; gap: 24px; list-style: none; }\n.nav-links a { color: rgba(255,255,255,0.7); text-decoration: none; }\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding: 40px 0;\n}\n\n.card {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid rgba(26,24,20,0.1);\n}\n\n@media (max-width: 1000px) {\n  .grid { grid-template-columns: 1fr 1fr; }\n}\n\n@media (max-width: 600px) {\n  .grid { grid-template-columns: 1fr; }\n  .nav-links { display: none; }\n  .logo { font-size: 16px; }\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <style></style>\n</head>\n<body>\n  <nav class="navbar">\n    <div class="container">\n      <div class="nav-inner">\n        <div class="logo">VizoCode</div>\n        <ul class="nav-links">\n          <li><a href="#">Kurslar</a></li>\n          <li><a href="#">Narxlar</a></li>\n          <li><a href="#">Blog</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class="container">\n    <div class="grid">\n      <div class="card"><h3>Kurs 1</h3><p>HTML & CSS asoslari.</p></div>\n      <div class="card"><h3>Kurs 2</h3><p>JavaScript zamonaviy.</p></div>\n      <div class="card"><h3>Kurs 3</h3><p>React + Next.js.</p></div>\n    </div>\n  </div>\n</body>\n</html>`,
  },
  "figma-css": {
    code: `/* Figma maketdan konvertatsiya */\n\n@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;900&display=swap');\n\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n:root {\n  --primary: #c85c1a;\n  --dark: #1a1814;\n  --surface: #f2efe8;\n  --muted: #7a7468;\n  --radius: 12px;\n}\n\nbody {\n  font-family: 'Space Grotesk', sans-serif;\n  background: var(--surface);\n  color: var(--dark);\n}\n\n.hero {\n  background: var(--dark);\n  padding: 80px 24px;\n  text-align: center;\n}\n\n.hero h1 {\n  font-size: clamp(36px, 5vw, 72px);\n  font-weight: 900;\n  color: white;\n  line-height: 1;\n  margin-bottom: 16px;\n}\n\n.hero h1 span { color: var(--primary); }\n\n.hero p {\n  color: rgba(255,255,255,0.5);\n  font-size: 18px;\n  max-width: 480px;\n  margin: 0 auto 32px;\n}\n\n.btn {\n  background: var(--primary);\n  color: white;\n  padding: 14px 32px;\n  border-radius: var(--radius);\n  border: none;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 5px 0 #8a3a0a;\n  transition: transform 0.1s, box-shadow 0.1s;\n}\n\n.btn:hover { transform: translateY(-2px); box-shadow: 0 7px 0 #8a3a0a; }\n.btn:active { transform: translateY(2px); box-shadow: 0 2px 0 #8a3a0a; }`,
    html: `<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <style></style>\n</head>\n<body>\n  <section class="hero">\n    <h1>Kod yozing.<br><span>Kelajak</span> yasang.</h1>\n    <p>Figma maketdan real CSS ga o'tish shunday ko'rinadi.</p>\n    <button class="btn">Boshlash →</button>\n  </section>\n</body>\n</html>`,
  },
  transition: {
    code: `body {\n  font-family: sans-serif;\n  background: #f2efe8;\n  padding: 40px;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.card {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  width: 160px;\n  text-align: center;\n  cursor: pointer;\n  border: 1.5px solid rgba(26,24,20,0.1);\n}\n\n.card-1 { transition: background 0.3s ease; }\n.card-1:hover { background: #c85c1a; color: white; }\n\n.card-2 { transition: transform 0.3s cubic-bezier(0.68,-0.55,0.27,1.55); }\n.card-2:hover { transform: scale(1.1); }\n\n.card-3 { transition: box-shadow 0.3s ease, transform 0.3s ease; }\n.card-3:hover {\n  box-shadow: 0 20px 40px rgba(200,92,26,0.3);\n  transform: translateY(-8px);\n}\n\n.card-4 {\n  transition: all 0.4s ease;\n  border-radius: 16px;\n}\n.card-4:hover {\n  border-radius: 50%;\n  background: #185FA5;\n  color: white;\n}\n\n.card-5 {\n  position: relative;\n  overflow: hidden;\n  transition: color 0.3s;\n}\n.card-5::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: #4a9e60;\n  transform: translateY(100%);\n  transition: transform 0.3s ease;\n  z-index: 0;\n}\n.card-5:hover { color: white; }\n.card-5:hover::before { transform: translateY(0); }\n.card-5 span { position: relative; z-index: 1; }`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="card card-1">Rang<br>o'zgaradi</div>\n  <div class="card card-2">Elastic<br>scale</div>\n  <div class="card card-3">Float<br>shadow</div>\n  <div class="card card-4">Shape<br>o'zgaradi</div>\n  <div class="card card-5"><span>Slide up<br>fill</span></div>\n</body>\n</html>`,
  },
  "sass-basics": {
    code: `/* SASS ning afzalliklari — bu yerda oddiy CSS bilan ko'rsatamiz */\n\n:root {\n  --primary: #c85c1a;\n  --dark: #1a1814;\n  --surface: #f2efe8;\n  --radius-sm: 8px;\n  --radius-md: 12px;\n  --radius-lg: 20px;\n}\n\nbody {\n  font-family: monospace;\n  background: var(--surface);\n  padding: 32px;\n}\n\n.card {\n  background: white;\n  border-radius: var(--radius-md);\n  padding: 20px;\n  border: 1.5px solid rgba(26,24,20,0.1);\n  transition: all 0.2s;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n\n.card:hover {\n  border-color: var(--primary);\n  box-shadow: 0 4px 16px rgba(200,92,26,0.15);\n}\n\n.card .title {\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--dark);\n  margin-bottom: 8px;\n}\n\n.card .badge {\n  display: inline-block;\n  background: var(--primary);\n  color: white;\n  border-radius: var(--radius-sm);\n  padding: 2px 8px;\n  font-size: 11px;\n  font-weight: 700;\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <div class="card">\n    <div class="title">CSS Variables (SASS kabi)</div>\n    <span class="badge">:root</span>\n  </div>\n  <div class="card">\n    <div class="title">Nested selectors</div>\n    <span class="badge">.parent .child</span>\n  </div>\n  <div class="card">\n    <div class="title">Hover states</div>\n    <span class="badge">:hover</span>\n  </div>\n</body>\n</html>`,
  },
  "sass-advanced": {
    code: `/* Mixin effektlarini CSS'da ko'rsatish */\n\n* { box-sizing: border-box; }\n\nbody {\n  font-family: sans-serif;\n  background: #1a1814;\n  padding: 40px;\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.btn {\n  padding: 12px 24px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 14px;\n  transition: all 0.2s;\n  position: relative;\n  overflow: hidden;\n}\n\n.btn::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: rgba(255,255,255,0.1);\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.btn:hover::after { opacity: 1; }\n.btn:active { transform: scale(0.97); }\n\n.btn-primary { background: #c85c1a; color: white; box-shadow: 0 4px 0 #8a3a0a; }\n.btn-blue    { background: #185FA5; color: white; box-shadow: 0 4px 0 #0a3a6a; }\n.btn-green   { background: #4a9e60; color: white; box-shadow: 0 4px 0 #2a6040; }\n.btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.3); }\n.btn-ghost   { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.7); }`,
    html: `<!DOCTYPE html>\n<html>\n<head><style></style></head>\n<body>\n  <button class="btn btn-primary">Primary</button>\n  <button class="btn btn-blue">Blue</button>\n  <button class="btn btn-green">Green</button>\n  <button class="btn btn-outline">Outline</button>\n  <button class="btn btn-ghost">Ghost</button>\n</body>\n</html>`,
  },
  tailwind: {
    code: `/* Tailwind CDN bilan ishlash */\nbody {\n  font-family: sans-serif;\n  background: #f2efe8;\n  padding: 24px;\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head>\n  <script src="https://cdn.tailwindcss.com"></script>\n</head>\n<body class="bg-[#f2efe8] p-8 font-sans">\n  <div class="max-w-lg mx-auto">\n    <h1 class="text-3xl font-black text-[#1a1814] mb-2 uppercase tracking-tight">\n      Tailwind CSS\n    </h1>\n    <p class="text-[#7a7468] mb-6">Utility-first framework amalda.</p>\n    <div class="grid grid-cols-2 gap-4 mb-6">\n      <div class="bg-white rounded-xl p-4 border border-black/10 hover:border-[#c85c1a] transition-colors cursor-pointer">\n        <div class="text-2xl mb-2">🎨</div>\n        <div class="font-bold text-sm">Tez dizayn</div>\n        <div class="text-xs text-[#7a7468]">CSS yozmaysiz</div>\n      </div>\n      <div class="bg-white rounded-xl p-4 border border-black/10 hover:border-[#c85c1a] transition-colors cursor-pointer">\n        <div class="text-2xl mb-2">⚡</div>\n        <div class="font-bold text-sm">Kichik hajm</div>\n        <div class="text-xs text-[#7a7468]">Faqat ishlatilgan</div>\n      </div>\n    </div>\n    <button class="w-full py-3 bg-[#c85c1a] text-white font-bold rounded-xl hover:bg-[#a84a15] transition-colors">\n      Boshlash →\n    </button>\n  </div>\n</body>\n</html>`,
  },
  "exam-figma": {
    code: `/* Yakuniy loyiha — bu yerga o'z stillaringizni yozing */\n\n* { box-sizing: border-box; margin: 0; padding: 0; }\n\n:root {\n  --primary: #c85c1a;\n  --dark: #1a1814;\n  --surface: #f2efe8;\n  --muted: #7a7468;\n}\n\nbody {\n  font-family: sans-serif;\n  background: var(--surface);\n  color: var(--dark);\n}\n\n.navbar {\n  position: sticky;\n  top: 0;\n  background: var(--dark);\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 100;\n}\n\n.hero {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px 24px;\n  background: linear-gradient(135deg, var(--dark) 0%, #2c2820 100%);\n}`,
    html: `<!DOCTYPE html>\n<html>\n<head>\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <style></style>\n</head>\n<body>\n  <nav class="navbar">\n    <div style="color:#c85c1a;font-weight:900;font-size:20px">VizoCode</div>\n    <div style="display:flex;gap:20px">\n      <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none">Kurslar</a>\n      <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none">Blog</a>\n    </div>\n  </nav>\n  <section class="hero">\n    <div>\n      <h1 style="font-size:clamp(36px,5vw,72px);font-weight:900;color:white;line-height:1;margin-bottom:16px">\n        Sizning <span style="color:#c85c1a">Exam</span><br>Loyihangiz\n      </h1>\n      <p style="color:rgba(255,255,255,0.5);font-size:18px;max-width:400px;margin:0 auto 32px">Bu yerga Figma maketdan ko'chirib yozing.</p>\n      <button style="background:#c85c1a;color:white;padding:14px 32px;border-radius:12px;border:none;font-size:16px;font-weight:700;cursor:pointer">Boshlash →</button>\n    </div>\n  </section>\n</body>\n</html>`,
  },
};

export const QUIZZES = {
  position: {
    q: "Absolute positioned element qaysi elementga nisbatan joylashadi?",
    options: [
      "Har doim sahifa boshiga nisbatan",
      "Eng yaqin 'position: static' bo'lmagan ota elementiga",
      "O'zidan oldingi elementga",
      "Body elementiga",
    ],
    correct: 1,
    explain:
      "Absolute element eng yaqin positioned (static emas) otasiga nisbatan joylashadi. Agar bunday ota yo'q bo'lsa, initial containing block ga nisbatan joylashadi.",
  },
  pseudo: {
    q: "::before va ::after pseudo-elementlar ishlashi uchun qaysi xususiyat majburiy?",
    options: [
      "display: block",
      "position: absolute",
      "content: ''",
      "z-index: 1",
    ],
    correct: 2,
    explain:
      "content xususiyati bo'lmasa ::before va ::after sahifada ko'rinmaydi. Bo'sh qiymat ham yozish kerak: content: ''",
  },
  transforms: {
    q: "transform: translate(50px, 100px) — bu nima qiladi?",
    options: [
      "Elementni 50px chapga, 100px pastga siljitadi",
      "Elementni 50px o'ngga, 100px pastga siljitadi",
      "Elementni 50% kenglashtiradi",
      "Elementni 100 daraja aylantiradi",
    ],
    correct: 1,
    explain:
      "translate(X, Y) — X qiymati gorizontal (o'ng musbat), Y qiymati vertikal (past musbat). translate(50px, 100px) = 50px o'ngga, 100px pastga.",
  },
  animations: {
    q: "@keyframes animation-fill-mode: forwards nima qiladi?",
    options: [
      "Animatsiyani oldinga tezlashtiradi",
      "Animatsiya tugagandan keyin oxirgi kadrda qoladi",
      "Animatsiyani takrorlaydi",
      "Animatsiyani teskari yo'nalishda o'ynaydi",
    ],
    correct: 1,
    explain:
      "fill-mode: forwards — animatsiya tugagach element oxirgi keyframe holatida qoladi. Masalan: kirish animatsiyasi tugagach element ko'rinib qoladi.",
  },
  gradients: {
    q: "linear-gradient(to right, red, blue) — bu qanday gradient?",
    options: [
      "Chapdan o'ngga, qizildan ko'kga",
      "Tepadan pastga, qizildan ko'kga",
      "O'ngdan chapga, qizildan ko'kga",
      "Diagonal, qizildan ko'kga",
    ],
    correct: 0,
    explain:
      "'to right' = chapdan o'ngga yo'nalish. Birinchi rang (red) chapda boshlanadi, ikkinchi rang (blue) o'ngda tugaydi.",
  },
  responsive: {
    q: "Mobile-first yondashuv qaysi media query turini ishlatadi?",
    options: [
      "@media (max-width: ...)",
      "@media (min-width: ...)",
      "@media (width: ...)",
      "@media (screen and ...)",
    ],
    correct: 1,
    explain:
      "Mobile-first: asosiy stillar mobil uchun yoziladi, keyin min-width bilan katta ekranlar uchun qo'shiladi. Desktop-first esa max-width ishlatadi.",
  },
  "figma-css": {
    q: "Figma'da 1440px kenglikdagi maket, 120px padding bilan — container max-width qancha bo'ladi?",
    options: ["1440px", "1200px", "1440px", "1320px"],
    correct: 1,
    explain:
      "1440 - 2 × 120 = 1200px. Container = asosiy frame kengligi minus ikki tomonlama padding.",
  },
  transition: {
    q: "Performance uchun qaysi xususiyatlarga transition berish tavsiya etiladi?",
    options: [
      "width va height",
      "background-color va font-size",
      "transform va opacity",
      "margin va padding",
    ],
    correct: 2,
    explain:
      "transform va opacity GPU (kompozit qatlam) da ishlaydi — reflow/repaint qilmaydi. width, height, margin kabi xususiyatlar CPU da hisoblangani uchun sekin.",
  },
  "sass-basics": {
    q: "SASS'da partial fayl nima va qanday nomlanadi?",
    options: [
      "Asosiy SASS fayli, _main.scss",
      "_ bilan boshlangan, to'g'ridan CSS ga aylanmaydigan fayl",
      "Kompilyatsiya qilingan CSS fayl",
      "Test fayli, .test.scss",
    ],
    correct: 1,
    explain:
      "_variables.scss kabi _ bilan boshlanadigan fayllar partial deyiladi. Ular alohida CSS fayliga aylanmaydi, faqat @import orqali boshqa faylga kiritiladi.",
  },
  "sass-advanced": {
    q: "@mixin va @extend farqi nima?",
    options: [
      "Hech qanday farqi yo'q",
      "@mixin parametr qabul qiladi, @extend qilmaydi",
      "@mixin faqat ranglarda ishlatiladi",
      "@extend tezroq ishlaydi",
    ],
    correct: 1,
    explain:
      "@mixin — parametrli, qayta ishlatiladigan blok (funksiya kabi). @extend — boshqa selectorning stillarini meros oladi, lekin parametr qabul qilmaydi.",
  },
  tailwind: {
    q: "Tailwind'da sm: prefiksi qaysi breakpointni bildiradi?",
    options: [
      "max-width: 640px",
      "min-width: 640px",
      "min-width: 768px",
      "max-width: 768px",
    ],
    correct: 1,
    explain:
      "Tailwind mobile-first. sm: = min-width: 640px ya'ni 640px dan katta ekranlarda qo'llaniladi. md: = 768px+, lg: = 1024px+.",
  },
  "exam-figma": {
    q: "Responsive Figma loyihada .container class uchun to'g'ri CSS qaysi?",
    options: [
      "width: 1200px; margin: 0 auto;",
      "max-width: 1200px; margin: 0 auto; padding: 0 20px;",
      "min-width: 1200px; padding: 0 20px;",
      "width: 100%; max-width: 100%;",
    ],
    correct: 1,
    explain:
      "max-width ishlatiladi (width emas) — kichik ekranlarda 100% bo'lishi uchun. margin: 0 auto markazlash uchun. padding: 0 20px kichik ekranlarda yonboshlar uchun.",
  },
};

export const CSS_ADVANCED_CONTENT_KEYS = Object.fromEntries(
  Object.keys(QUIZZES).map((id) => [
    id,
    {
      xp:
        id === "exam-figma"
          ? 150
          : id === "sass-advanced" || id === "tailwind"
            ? 100
            : id === "responsive" || id === "sass-basics"
              ? 90
              : 70,
      type: [
        "transforms",
        "animations",
        "gradients",
        "transition",
        "responsive",
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
