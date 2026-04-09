export const NAV_LINKS = ["Kurslar", "Yo'l xaritasi", "Narxlar", "Hamjamiyat"];

export const TICKER_ITEMS = [
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Git & GitHub",
  "REST API",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "Figma to Code",
  "LinkedIn Portfolio",
  "AI Tools",
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Git & GitHub",
  "REST API",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "Figma to Code",
  "LinkedIn Portfolio",
  "AI Tools",
];

export const FEATURES = [
  {
    icon: "⚡",
    title: "Vizual darslar",
    desc: "Animatsiyalar va interaktiv sxemalar orqali har bir mavzuni ko'rib, his qilib tushuning.",
  },
  {
    icon: "⌨️",
    title: "Brauzerda kod",
    desc: "VS Code o'rnatmasdan, brauzerda kod yozing va natijani real vaqtda ko'ring.",
  },
  {
    icon: "🤖",
    title: "AI yordamchi",
    desc: "Uyatmasdan savol bering. AI har qanday savolingizni o'zbek tilida tushuntiradi.",
  },
  {
    icon: "🏆",
    title: "Sertifikat",
    desc: "Kursni tugatgach, LinkedIn'ga qo'yish mumkin bo'lgan rasmiy sertifikat olasiz.",
  },
];

export const CURRICULUM = [
  {
    month: "01",
    title: "HTML & CSS Asoslari",
    topics: [
      "Semantic HTML",
      "Flexbox & Grid",
      "Responsive dizayn",
      "CSS animatsiyalar",
    ],
  },
  {
    month: "02",
    title: "JavaScript Chuqur",
    topics: [
      "ES6+ sintaksis",
      "DOM manipulyatsiya",
      "Async/Await",
      "API bilan ishlash",
    ],
  },
  {
    month: "03",
    title: "React.js",
    topics: [
      "Component tuzilishi",
      "useState & useEffect",
      "React Router",
      "Context API",
    ],
  },
  {
    month: "04",
    title: "TypeScript",
    topics: [
      "Tiplar va interfeyslar",
      "Generic tiplar",
      "React + TS",
      "Xatolarni oldini olish",
    ],
  },
  {
    month: "05",
    title: "Tailwind & UI",
    topics: [
      "Utility-first CSS",
      "Komponent kutubxonalar",
      "Dark mode",
      "Accessibility",
    ],
  },
  {
    month: "06",
    title: "Backend Asoslari",
    topics: ["Node.js", "REST API", "MongoDB", "Authentication"],
  },
  {
    month: "07",
    title: "Next.js",
    topics: ["SSR & SSG", "App Router", "Deployment", "SEO optimizatsiya"],
  },
  {
    month: "08",
    title: "Portfolio & Ish",
    topics: [
      "3 ta loyiha",
      "GitHub profil",
      "LinkedIn optimallashtirish",
      "CV & Intervyu",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Dilnoza Yusupova",
    role: "Frontend Developer @ Uzum",
    initials: "DY",
    color: "bg-orange-500",
    text: "VizoCode'siz bu qadar tez o'rganolmasdim. Vizual darslar haqiqatan ham farq qiladi — ko'rib tushunasan, o'qib emas.",
    stars: 5,
  },
  {
    name: "Jasur Toshmatov",
    role: "React Developer @ Click",
    initials: "JT",
    color: "bg-blue-500",
    text: "8 oy ichida noldan ishga qabul qilindim. AI yordamchi har kuni menga yordam berdi. Pul sarflashga arzidi.",
    stars: 5,
  },
  {
    name: "Sarvinoz Mirzayeva",
    role: "Junior Dev @ Payme",
    initials: "SM",
    color: "bg-emerald-500",
    text: "Brauzerda kod yozish funksiyasi zo'r — kompyuterimga hech narsa o'rnatmasdan to'liq kurs o'tdim.",
    stars: 5,
  },
  {
    name: "Bobur Rahimov",
    role: "Freelance Developer",
    initials: "BR",
    color: "bg-yellow-500",
    text: "Hamjamiyat eng yaxshi qismi. Har doim kimdir yordam beradi, hech qachon yolg'iz his etmaysan.",
    stars: 5,
  },
];

export const FAQS = [
  {
    q: "Dasturlash tajribasiz boshlash mumkinmi?",
    a: "Ha, albatta! Kurs noldan boshlanadi. Kompyuter ishlatishni bilsangiz, kifoya.",
  },
  {
    q: "Oylik yoki yillik to'lov qaysi biri foydali?",
    a: "Yillik obuna 20% tejaydi — ya'ni 2 oy bepul. Uzoq muddatli o'qish rejalasangiz, yillik afzal.",
  },
  {
    q: "Kurs sertifikati ish topishga yordamadimi?",
    a: "Ko'pgina o'quvchilarimiz kurs tugagandan 1-3 oy ichida ish topishgan. Sertifikat LinkedIn'da ko'rinadi.",
  },
  {
    q: "Darslar qancha vaqt davom etadi?",
    a: "Kuniga 1-2 soat sarflasangiz, 8 oyda to'liq dasturchi bo'lasiz. O'zingiz sur'atda o'qiysiz.",
  },
];

export const PRICING = [
  {
    name: "Bepul",
    monthlyPrice: 0,
    yearlyPrice: 0,
    period: "Doimo bepul",
    features: [
      { text: "Vizual darslar (cheklangan)", on: true },
      { text: "Code editor", on: false },
      { text: "AI yordamchi", on: false },
      { text: "Hamjamiyat", on: false },
    ],
    cta: "Boshlash",
    featured: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 23,
    badge: "ENG MASHHUR",
    features: [
      { text: "Barcha vizual darslar", on: true },
      { text: "Code editor + AI chat", on: true },
      { text: "XP va darajalar", on: true },
      { text: "Hamjamiyat kirish", on: true },
    ],
    cta: "Boshlash →",
    featured: true,
  },
  {
    name: "Kurs",
    monthlyPrice: 199,
    yearlyPrice: 159,
    period: "8 oy, bir marta",
    features: [
      { text: "Hammasi Pro +", on: true },
      { text: "Mentor tekshiruvi", on: true },
      { text: "Sertifikat", on: true },
      { text: "Portfolio yordam", on: true },
    ],
    cta: "Kursga yozilish",
    featured: false,
  },
];

export const FOOTER_LINKS = {
  Platform: ["Kurslar", "Yo'l xaritasi", "Code Editor", "AI Yordamchi"],
  Kompaniya: ["Biz haqimizda", "Blog", "Karyera", "Matbuot"],
  Yordam: ["FAQ", "Dokumentatsiya", "Hamjamiyat", "Aloqa"],
};
