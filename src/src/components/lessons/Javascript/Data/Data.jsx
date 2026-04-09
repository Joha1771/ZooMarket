// ═══════════════════════════════════════════════════════════════════════════════
// DATA — JavaScript STARTERS & QUIZZES
// ═══════════════════════════════════════════════════════════════════════════════

export const STARTERS = {
  "js-intro": {
    code: `// JavaScript birinchi qadamlari\n\n// 1. console.log\nconsole.log("Salom, VizoCode!");\n\n// 2. Hisoblash\nconsole.log(2 + 2);\nconsole.log(10 * 5);\n\n// 3. Matn\nconsole.log("JavaScript " + "ajoyib!");\n\n// 4. O'zgaruvchi\nconst name = "Sizning ismingiz";\nconsole.log(\`Salom, \${name}!\`);`,
    html: `<!DOCTYPE html>\n<html><body>\n<div id="out" style="font-family:monospace;font-size:13px;padding:16px;color:#1a1814;background:#f2efe8;min-height:100vh"></div>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  variables: {
    code: `// O'zgaruvchilar amalda\n\nconst firstName = "Ali";\nconst lastName = "Karimov";\nconst age = 22;\nconst isStudent = true;\n\n// Template literal\nconsole.log(\`Ism: \${firstName} \${lastName}\`);\nconsole.log(\`Yosh: \${age}\`);\nconsole.log(\`Talabami: \${isStudent}\`);\n\n// Hisoblash\nconst birthYear = 2024 - age;\nconsole.log(\`Tug'ilgan yil: \${birthYear}\`);\n\n// typeof\nconsole.log(typeof firstName);\nconsole.log(typeof age);\nconsole.log(typeof isStudent);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  operators: {
    code: `// Operatorlar amalda\n\nconst a = 17;\nconst b = 5;\n\n// Arifmetik\nconsole.log("+ :", a + b);\nconsole.log("- :", a - b);\nconsole.log("* :", a * b);\nconsole.log("/ :", a / b);\nconsole.log("% :", a % b);\nconsole.log("**:", a ** b);\n\n// Taqqoslash\nconsole.log("17 == '17' :", 17 == '17');   // true - XAVFLI!\nconsole.log("17 === '17':", 17 === '17');  // false - to'g'ri\n\n// Ternary\nconst isEven = a % 2 === 0 ? "juft" : "toq";\nconsole.log(\`\${a} — \${isEven}\`);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  conditions: {
    code: `// Shartlar amalda\n\nconst score = 75; // 0 dan 100 gacha o'zgartiring\n\n// if/else if/else\nif (score >= 90) {\n  console.log("Baho: A - Mukammal!");\n} else if (score >= 80) {\n  console.log("Baho: B - Yaxshi!");\n} else if (score >= 70) {\n  console.log("Baho: C - Qoniqarli");\n} else if (score >= 60) {\n  console.log("Baho: D - Zaif");\n} else {\n  console.log("Baho: F - O'tmadi");\n}\n\n// Ternary\nconst passed = score >= 60 ? "✓ O'tdi" : "✗ O'tmadi";\nconsole.log(passed);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  loops: {
    code: `// Sikllar amalda\n\n// 1. for sikli — 1 dan 10 gacha\nconsole.log("=== for sikli ===");\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\n// 2. Toq sonlar\nconsole.log("=== Toq sonlar ===");\nfor (let i = 1; i <= 20; i += 2) {\n  console.log(i);\n}\n\n// 3. for...of massiv ustida\nconsole.log("=== Mevalar ===");\nconst fruits = ["olma", "banan", "nok", "uzum"];\nfor (const fruit of fruits) {\n  console.log("🍎", fruit);\n}\n\n// 4. Yig'indi\nlet sum = 0;\nfor (let i = 1; i <= 100; i++) {\n  sum += i;\n}\nconsole.log("1+2+...+100 =", sum);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  functions: {
    code: `// Funksiyalar amalda\n\n// 1. Oddiy funksiya\nfunction greet(name) {\n  return \`Salom, \${name}!\`;\n}\nconsole.log(greet("Ali"));\n\n// 2. Hisoblash funksiyasi\nconst add = (a, b) => a + b;\nconst multiply = (a, b) => a * b;\nconsole.log("5 + 3 =", add(5, 3));\nconsole.log("5 × 3 =", multiply(5, 3));\n\n// 3. Default parametr\nfunction power(base, exp = 2) {\n  return base ** exp;\n}\nconsole.log(power(5));     // 25\nconsole.log(power(2, 10)); // 1024\n\n// 4. Rekursiya (faktorial)\nconst factorial = n => n <= 1 ? 1 : n * factorial(n - 1);\nconsole.log("5! =", factorial(5));\nconsole.log("10! =", factorial(10));`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  strings: {
    code: `// String metodlari amalda\n\nconst sentence = "JavaScript — kelajak tili!";\n\nconsole.log("length:     ", sentence.length);\nconsole.log("toUpper:    ", sentence.toUpperCase());\nconsole.log("slice(0,10):", sentence.slice(0, 10));\nconsole.log("includes:   ", sentence.includes("kelajak"));\nconsole.log("replace:    ", sentence.replace("kelajak", "hozirgi"));\nconsole.log("split(' '): ", sentence.split(" "));\n\n// Template literals\nconst name = "Vizo";\nconst version = 1;\nconsole.log(\`\${name} v\${version} — o'rganish platformasi\`);\n\n// Palindrom tekshiruvi\nfunction isPalindrome(str) {\n  const clean = str.toLowerCase();\n  return clean === clean.split("").reverse().join("");\n}\nconsole.log("'aba' palindrom:", isPalindrome("aba"));\nconsole.log("'hello' palindrom:", isPalindrome("hello"));`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  arrays: {
    code: `// Array metodlari amalda\n\nconst numbers = [5, 3, 8, 1, 9, 2, 7, 4, 6];\n\nconsole.log("Asl:", numbers);\nconsole.log("sort:", [...numbers].sort((a, b) => a - b));\nconsole.log("reverse:", [...numbers].reverse());\n\n// push/pop\nconst stack = [1, 2, 3];\nstack.push(4, 5);\nconsole.log("push dan keyin:", stack);\nstack.pop();\nconsole.log("pop dan keyin:", stack);\n\n// slice vs splice\nconst arr = ["a","b","c","d","e"];\nconsole.log("slice(1,3):", arr.slice(1, 3)); // yangi\narr.splice(1, 2, "X", "Y");                  // o'zini o'zgartiradi\nconsole.log("splice dan keyin:", arr);\n\n// indexOf va includes\nconsole.log("indexOf(8):", numbers.indexOf(8));\nconsole.log("includes(9):", numbers.includes(9));`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  objects: {
    code: `// Ob'yektlar amalda\n\nconst student = {\n  name: "Zulfiya",\n  age: 20,\n  grades: [85, 92, 78, 95],\n  address: {\n    city: "Samarqand",\n    country: "O'zbekiston"\n  },\n  getAverage() {\n    const sum = this.grades.reduce((a, b) => a + b, 0);\n    return (sum / this.grades.length).toFixed(1);\n  }\n};\n\nconsole.log(student.name);\nconsole.log(student.address.city);\nconsole.log("O'rtacha baho:", student.getAverage());\n\n// Object metodlari\nconsole.log("Kalitlar:", Object.keys(student));\n\n// Spread — nusxa\nconst updated = { ...student, age: 21, city: "Toshkent" };\nconsole.log("Yangilangan yosh:", updated.age);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  "math-date": {
    code: `// Math va Date amalda\n\n// Math\nconsole.log("PI:", Math.PI.toFixed(4));\nconsole.log("sqrt(144):", Math.sqrt(144));\nconsole.log("pow(2,8):", Math.pow(2, 8));\nconsole.log("abs(-42):", Math.abs(-42));\n\n// Tasodifiy son [1, 6] — zar tashlash\nconst dice = Math.floor(Math.random() * 6) + 1;\nconsole.log("Zar:", dice, "⚀");\n\n// Date\nconst now = new Date();\nconsole.log("Yil:", now.getFullYear());\nconsole.log("Oy:", now.getMonth() + 1); // 0-indexed!\nconsole.log("Kun:", now.getDate());\nconsole.log("Soat:", now.getHours());\nconsole.log("Daqiqa:", now.getMinutes());\n\n// Yosh hisoblash\nconst birthYear = 2000;\nconst age = now.getFullYear() - birthYear;\nconsole.log(\`Tug'ilgan: \${birthYear}, Yosh: \${age}\`);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  destructuring: {
    code: `// Destrukturizatsiya va Spread\n\n// Array destrukturizatsiya\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\nconsole.log("first:", first);\nconsole.log("second:", second);\nconsole.log("rest:", rest);\n\n// Swap\nlet a = 10, b = 20;\n[a, b] = [b, a];\nconsole.log("Swap — a:", a, "b:", b);\n\n// Object destrukturizatsiya\nconst { name, age, city = "Toshkent" } = { name: "Ali", age: 25 };\nconsole.log(name, age, city);\n\n// Spread — birlashtirish\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst merged = [...arr1, ...arr2];\nconsole.log("Birlashtirilgan:", merged);\n\n// Rest parametr\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\nconsole.log("sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5));`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  "array-methods": {
    code: `// Funksional metodlar amalda\n\nconst products = [\n  { name: "Noutbuk", price: 1200, category: "tech" },\n  { name: "Kitob",   price: 15,   category: "edu" },\n  { name: "Telefon", price: 800,  category: "tech" },\n  { name: "Kurs",    price: 50,   category: "edu" },\n  { name: "Kamera",  price: 600,  category: "tech" },\n];\n\n// filter — tech mahsulotlar\nconst techProducts = products.filter(p => p.category === "tech");\nconsole.log("Tech:", techProducts.map(p => p.name));\n\n// map — nomlarni olish\nconst names = products.map(p => p.name);\nconsole.log("Nomlar:", names);\n\n// reduce — umumiy narx\nconst total = products.reduce((sum, p) => sum + p.price, 0);\nconsole.log("Jami:", total + "$");\n\n// find — birinchi 100$ dan yuqori\nconst expensive = products.find(p => p.price > 100);\nconsole.log("Qimmat:", expensive?.name);\n\n// sort — narx bo'yicha\nconst sorted = [...products].sort((a, b) => a.price - b.price);\nconsole.log("Arzondan qimmatga:", sorted.map(p => \`\${p.name}(\${p.price}$)\`));`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
};

export const QUIZZES = {
  "js-intro": {
    q: "JavaScript brauzerda qaysi 3 ta komponent bilan ishlaydi?",
    options: [
      "HTML, CSS, PHP",
      "ECMAScript, DOM, BOM",
      "V8, SpiderMonkey, Chakra",
      "Node, React, Vue",
    ],
    correct: 1,
    explain:
      "JavaScript brauzerda 3 qismdan iborat: ECMAScript (til asosi), DOM (sahifa tuzilmasi), BOM (brauzer ob'yekti — location, alert va h.k.).",
  },
  variables: {
    q: "Qaysi holda const ishlatish to'g'ri?",
    options: [
      "Qiymat sikl ichida o'zgarsa",
      "Bitta marta belgilanadigan qiymat uchun",
      "Faqat raqamlar uchun",
      "Funksiya ichida e'lon qilinsa",
    ],
    correct: 1,
    explain:
      "const — qiymat o'zgarmaydigan hollarda ishlatiladi. Bu yaxshi amaliyot: default const, kerak bo'lsa let. var dan umuman foydalanmang.",
  },
  operators: {
    q: "5 == '5' va 5 === '5' nima qaytaradi?",
    options: [
      "ikkalasi true",
      "true va false",
      "false va true",
      "ikkalasi false",
    ],
    correct: 1,
    explain:
      "== (loose equality) tip tekshirmaydi: 5 == '5' → true. === (strict equality) tip ham tekshiradi: 5 === '5' → false (number vs string).",
  },
  conditions: {
    q: "Ternary operator sintaksisi qaysi?",
    options: ["if(s) ? a : b", "s ? a : b", "s then a else b", "(s) => a : b"],
    correct: 1,
    explain:
      "Ternary: shart ? true_qiymat : false_qiymat. Masalan: const res = x > 0 ? 'musbat' : 'manfiy';",
  },
  loops: {
    q: "for (let i = 0; i < 5; i++) — necha marta ishlaydi?",
    options: ["4", "5", "6", "0"],
    correct: 1,
    explain:
      "i = 0, 1, 2, 3, 4 — 5 marta ishlaydi. i = 5 bo'lganda shart (i < 5) false bo'lib to'xtaydi.",
  },
  functions: {
    q: "Arrow funksiyaning to'g'ri yozilishi qaysi?",
    options: [
      "function => (a, b) a + b",
      "(a, b) => a + b",
      "(a, b) -> a + b",
      "=> (a, b) { return a + b }",
    ],
    correct: 1,
    explain:
      "Arrow funksiya: (parametrlar) => ifoda. Bitta parametr bo'lsa qavslar ixtiyoriy: x => x * 2. Blok kerak bo'lsa: (a, b) => { return a + b; }",
  },
  strings: {
    q: "'JavaScript'.slice(0, 4) nima qaytaradi?",
    options: ["'Javas'", "'Java'", "'vaScript'", "'avaS'"],
    correct: 1,
    explain:
      "slice(start, end) — start indeksidan end indeksiga (u kirmasdan) qirqadi. 0 dan 4 gacha: J(0), a(1), v(2), a(3) → 'Java'.",
  },
  arrays: {
    q: "push() va pop() metodlari qanday farqlanadi?",
    options: [
      "ikkalasi qo'shadi",
      "push qo'shadi, pop o'chiradi",
      "pop qo'shadi, push o'chiradi",
      "ikkalasi o'chiradi",
    ],
    correct: 1,
    explain:
      "push() — massiv oxiriga element qo'shadi. pop() — massiv oxiridagi elementni olib tashlaydi va qaytaradi. Har ikkalasi ham massivni o'zgartiradi (mutate).",
  },
  objects: {
    q: "const obj = {name: 'Ali'}. obj.age = 25; bu to'g'rimi?",
    options: [
      "Xato — const o'zgartirib bo'lmaydi",
      "To'g'ri — ob'yektga yangi xususiyat qo'shish mumkin",
      "Faqat let bilan ishlaydi",
      "Faqat metodlar qo'shish mumkin",
    ],
    correct: 1,
    explain:
      "const ob'yektning o'zini boshqa ob'yektga o'zgartirishni taqiqlaydi, lekin uning ichini (xususiyat qo'shish/o'zgartirish) ruxsat etadi.",
  },
  "math-date": {
    q: "Math.floor(Math.random() * 10) + 1 qanday son qaytaradi?",
    options: [
      "0 dan 9 gacha",
      "1 dan 10 gacha",
      "0 dan 10 gacha",
      "1 dan 9 gacha",
    ],
    correct: 1,
    explain:
      "Math.random() → [0,1). *10 → [0,10). floor → [0,9]. +1 → [1,10]. Shuning uchun natija 1 dan 10 gacha (1 va 10 ham kiradi).",
  },
  destructuring: {
    q: "const [a, , b] = [1, 2, 3, 4]. b ning qiymati nima?",
    options: ["2", "3", "undefined", "4"],
    correct: 1,
    explain:
      "Array destrukturizatsiyada vergul bilan o'tkazib yuborish mumkin. [a, , b] — a=1, ikkinchi element o'tkazildi, b=3.",
  },
  "array-methods": {
    q: "[1,2,3,4,5].filter(x => x > 2).map(x => x * 2) nima qaytaradi?",
    options: ["[3,4,5]", "[6,8,10]", "[2,4,6,8,10]", "[1,2,3,4,5]"],
    correct: 1,
    explain:
      "Avval filter: [3,4,5] (2 dan katta). Keyin map: har birini *2 → [6,8,10]. Metodlar zanjiri chapdan o'ngga ishlaydi.",
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// PHASE CONTENT MAP + EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════
export function JsPhaseContent({ lessonId, phaseId }) {
  const map = {
    "js-intro": { explain: <JsIntroExplain />, learn: <JsIntroLearn /> },
    variables: { explain: <VariablesExplain />, learn: <VariablesLearn /> },
    operators: { explain: <OperatorsExplain />, learn: <OperatorsExplain /> },
    conditions: {
      explain: <ConditionsExplain />,
      learn: <ConditionsExplain />,
    },
    loops: { explain: <LoopsExplain />, learn: <LoopsExplain /> },
    functions: { explain: <FunctionsExplain />, learn: <FunctionsExplain /> },
    strings: { explain: <StringsExplain />, learn: <StringsExplain /> },
    arrays: { explain: <ArraysExplain />, learn: <ArraysExplain /> },
    objects: { explain: <ObjectsExplain />, learn: <ObjectsExplain /> },
    "math-date": { explain: <MathDateExplain />, learn: <MathDateExplain /> },
    destructuring: {
      explain: <DestructuringExplain />,
      learn: <DestructuringExplain />,
    },
    "array-methods": {
      explain: <ArrayMethodsExplain />,
      learn: <ArrayMethodsExplain />,
    },
  };
  return map[lessonId]?.[phaseId] ?? null;
}

export function getJsStarter(lessonId) {
  return STARTERS[lessonId] || null;
}

export function getJsQuiz(lessonId) {
  return QUIZZES[lessonId] || null;
}

export const JS_CONTENT_KEYS = Object.fromEntries(
  Object.keys(QUIZZES).map((id) => [
    id,
    {
      xp:
        id === "array-methods"
          ? 90
          : id === "destructuring"
            ? 80
            : id === "functions"
              ? 80
              : 60,
      type: [
        "operators",
        "conditions",
        "loops",
        "strings",
        "arrays",
        "math-date",
        "array-methods",
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
          lang: STARTERS[id]?.lang || "js",
        },
      ],
      quizKey: `lessons.${id}.quiz`,
    },
  ]),
);
