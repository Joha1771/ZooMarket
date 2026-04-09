// ═══════════════════════════════════════════════════════════════════════════════
// DATA — Advanced JavaScript STARTERS & QUIZZES (Module 04)
// ═══════════════════════════════════════════════════════════════════════════════

export const STARTERS = {
  hoisting: {
    code: `// Hoisting tekshiruvi\n\n// 1. var hoisting — undefined qaytaradi\nconsole.log("a:", a);  // undefined (xato emas!)\nvar a = 5;\nconsole.log("a:", a);  // 5\n\n// 2. function declaration — to'liq hoisted\nconsole.log(greet("Ali")); // "Salom, Ali!" — ishlaydi!\nfunction greet(name) {\n  return \`Salom, \${name}!\`;\n}\n\n// 3. let — TDZ (Temporal Dead Zone)\ntry {\n  console.log(b); // ReferenceError!\n  let b = 10;\n} catch(e) {\n  console.log("Xato:", e.message);\n}\n\n// 4. Execution context simulatsiyasi\nvar x = 1;\nfunction outer() {\n  var x = 2;\n  function inner() {\n    var x = 3;\n    console.log("inner x:", x);\n  }\n  inner();\n  console.log("outer x:", x);\n}\nouter();\nconsole.log("global x:", x);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  closure: {
    code: `// Closure (Yopilish) amalda\n\n// 1. Klassik closure — counter\nfunction makeCounter(start = 0) {\n  let count = start;\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    value:     () => count,\n    reset:     () => { count = start; return count; }\n  };\n}\n\nconst counter = makeCounter(10);\nconsole.log(counter.increment()); // 11\nconsole.log(counter.increment()); // 12\nconsole.log(counter.decrement()); // 11\nconsole.log(counter.value());     // 11\nconsole.log(counter.reset());     // 10\n\n// 2. Private o'zgaruvchi\nfunction createBank(initialBalance) {\n  let balance = initialBalance; // tashqaridan ko'rinmaydi\n  return {\n    deposit(amount) { balance += amount; return balance; },\n    withdraw(amount) {\n      if (amount > balance) return "Yetarli mablag' yo'q!";\n      balance -= amount;\n      return balance;\n    },\n    getBalance() { return balance; }\n  };\n}\n\nconst bank = createBank(1000);\nconsole.log(bank.deposit(500));   // 1500\nconsole.log(bank.withdraw(200));  // 1300\nconsole.log(bank.withdraw(9999)); // Yetarli mablag' yo'q!\nconsole.log(bank.getBalance());   // 1300`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  "fn-types": {
    code: `// Funksiya turlari va IIFE\n\n// 1. Function Declaration — hoisted\nconsole.log(square(4)); // 16 — deklaratsiyadan oldin chaqirish mumkin\nfunction square(x) {\n  return x * x;\n}\n\n// 2. Function Expression — hoisted emas\nconst cube = function(x) {\n  return x ** 3;\n};\nconsole.log(cube(3)); // 27\n\n// 3. Arrow Function — qisqa, this yo'q\nconst power = (base, exp) => base ** exp;\nconsole.log(power(2, 8)); // 256\n\n// 4. IIFE — darhol chaqiriladi\nconst result = (function() {\n  const secret = 42;\n  return secret * 2;\n})();\nconsole.log("IIFE natija:", result); // 84\n\n// 5. Arrow IIFE\n((name) => {\n  console.log(\`Salom, \${name}! IIFE bilan.\`);\n})("Vizo");\n\n// 6. this farqi\nconst obj = {\n  value: 10,\n  regular: function() { return this.value; },\n  arrow:   () => "arrow: this.value yo'q!"\n};\nconsole.log(obj.regular()); // 10\nconsole.log(obj.arrow());   // arrow: this.value yo'q!`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  hof: {
    code: `// Higher-Order Functions va Currying\n\n// 1. HOF — funksiya argument sifatida\nfunction applyTwice(fn, value) {\n  return fn(fn(value));\n}\nconst double = x => x * 2;\nconsole.log(applyTwice(double, 3)); // 12\n\n// 2. Funksiya qaytaradigan funksiya\nfunction multiplier(factor) {\n  return (number) => number * factor;\n}\nconst triple = multiplier(3);\nconst times10 = multiplier(10);\nconsole.log(triple(5));  // 15\nconsole.log(times10(7)); // 70\n\n// 3. Currying\nconst add = a => b => c => a + b + c;\nconsole.log(add(1)(2)(3)); // 6\n\nconst add5 = add(5);\nconst add5and3 = add5(3);\nconsole.log(add5and3(2)); // 10\n\n// 4. Compose va Pipe\nconst compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);\nconst pipe    = (...fns) => x => fns.reduce((v, f) => f(v), x);\n\nconst addOne  = x => x + 1;\nconst square  = x => x * x;\nconst negate  = x => -x;\n\nconsole.log(compose(negate, square, addOne)(3)); // -(4²) = -16\nconsole.log(pipe(addOne, square, negate)(3));    // -(4²) = -16`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  prototypes: {
    code: `// Prototipler va OOP\n\n// 1. Konstruktor funksiya\nfunction Animal(name, sound) {\n  this.name  = name;\n  this.sound = sound;\n}\nAnimal.prototype.speak = function() {\n  return \`\${this.name}: \${this.sound}!\`;\n};\nAnimal.prototype.toString = function() {\n  return \`Animal(\${this.name})\`;\n};\n\nconst dog = new Animal("Rex", "Vov");\nconst cat = new Animal("Mur", "Myav");\nconsole.log(dog.speak()); // Rex: Vov!\nconsole.log(cat.speak()); // Mur: Myav!\n\n// 2. Prototip zanjiri\nconsole.log(dog.__proto__ === Animal.prototype); // true\nconsole.log(dog instanceof Animal);              // true\n\n// 3. Prototip orqali meros\nfunction Dog(name) {\n  Animal.call(this, name, "Vov");\n  this.tricks = [];\n}\nDog.prototype = Object.create(Animal.prototype);\nDog.prototype.constructor = Dog;\nDog.prototype.learn = function(trick) {\n  this.tricks.push(trick);\n  return \`\${this.name} "\${trick}" ni o'rgandi!\`;\n};\n\nconst buddy = new Dog("Buddy");\nconsole.log(buddy.speak());         // Buddy: Vov!\nconsole.log(buddy.learn("o'tir"));  // Buddy "o'tir" ni o'rgandi!\nconsole.log(buddy.learn("yot"));    // Buddy "yot" ni o'rgandi!\nconsole.log("Tricks:", buddy.tricks);`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  classes: {
    code: `// ES6 Classes\n\nclass Shape {\n  constructor(color = "black") {\n    this.color = color;\n  }\n  describe() {\n    return \`\${this.color} rangli \${this.constructor.name}\`;\n  }\n  static create(type, ...args) {\n    const map = { circle: Circle, rect: Rectangle };\n    return new (map[type])(...args);\n  }\n}\n\nclass Circle extends Shape {\n  #radius; // private field\n  constructor(radius, color) {\n    super(color);\n    this.#radius = radius;\n  }\n  get area()        { return +(Math.PI * this.#radius ** 2).toFixed(2); }\n  get circumference(){ return +(2 * Math.PI * this.#radius).toFixed(2); }\n  toString()        { return \`Circle(r=\${this.#radius})\`; }\n}\n\nclass Rectangle extends Shape {\n  constructor(w, h, color) {\n    super(color);\n    this.w = w;\n    this.h = h;\n  }\n  get area()      { return this.w * this.h; }\n  get perimeter() { return 2 * (this.w + this.h); }\n  toString()      { return \`Rectangle(\${this.w}x\${this.h})\`; }\n}\n\nconst c = new Circle(5, "qizil");\nconsole.log(c.describe());          // qizil rangli Circle\nconsole.log("Yuza:", c.area);        // 78.54\nconsole.log("Aylana:", c.circumference); // 31.42\n\nconst r = Shape.create("rect", 4, 6, "ko'k");\nconsole.log(r.describe());          // ko'k rangli Rectangle\nconsole.log("Yuza:", r.area);        // 24\nconsole.log("Perimetr:", r.perimeter); // 20`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  "map-set": {
    code: `// Map va Set\n\n// === SET ===\nconst unique = new Set([1, 2, 3, 2, 1, 4, 3]);\nconsole.log("Set:", [...unique]); // [1,2,3,4] — takrorlanmaydi\n\n// Massivdan dublikatlarni o'chirish\nconst arr = [5, 3, 5, 1, 3, 2, 1];\nconst noDups = [...new Set(arr)];\nconsole.log("Unikal:", noDups); // [5,3,1,2]\n\n// Set metodlari\nconst tags = new Set(["js", "css", "html"]);\ntags.add("react");\ntags.delete("css");\nconsole.log("has 'js':", tags.has("js"));   // true\nconsole.log("size:", tags.size);              // 3\nconsole.log("tags:", [...tags]);\n\n// === MAP ===\nconst userMap = new Map();\nuserMap.set("ali",    { age: 25, role: "admin" });\nuserMap.set("zulfiya",{ age: 22, role: "user" });\nuserMap.set("bobur",  { age: 28, role: "mod" });\n\nconsole.log(userMap.get("ali"));     // {age:25, role:'admin'}\nconsole.log("size:", userMap.size);  // 3\n\n// Iteratsiya\nfor (const [name, data] of userMap) {\n  console.log(\`\${name}: \${data.role}\`);\n}\n\n// Object kalitida ob'yekt ishlatish — faqat Map bilan!\nconst keyObj = { id: 1 };\nconst cache = new Map();\ncache.set(keyObj, "cached data");\nconsole.log(cache.get(keyObj)); // "cached data"`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  errors: {
    code: `// Error Handling\n\n// 1. try/catch/finally\nfunction divide(a, b) {\n  if (b === 0) throw new Error("Nolga bo'lish mumkin emas!");\n  if (typeof a !== "number") throw new TypeError("Raqam kiriting!");\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 2));  // 5\n  console.log(divide(10, 0));  // Error!\n} catch (err) {\n  console.log("Xato:", err.message);\n} finally {\n  console.log("finally — har doim ishlaydi");\n}\n\n// 2. Custom Error\nclass ValidationError extends Error {\n  constructor(field, message) {\n    super(message);\n    this.name = "ValidationError";\n    this.field = field;\n  }\n}\n\nfunction validateAge(age) {\n  if (typeof age !== "number") throw new ValidationError("age", "Raqam bo'lishi kerak");\n  if (age < 0 || age > 150)    throw new ValidationError("age", "0-150 oralig'ida bo'lsin");\n  return true;\n}\n\ntry {\n  validateAge(200);\n} catch (err) {\n  if (err instanceof ValidationError) {\n    console.log(\`[VALIDATION] \${err.field}: \${err.message}\`);\n  } else {\n    throw err; // qayta tashlash\n  }\n}\n\n// 3. Error turlari\nconst errors = [\n  () => null.property,\n  () => undefinedVar,\n  () => JSON.parse("{invalid}"),\n];\nerrors.forEach(fn => {\n  try { fn(); } catch(e) { console.log(e.constructor.name + ":", e.message); }\n});`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  "event-loop": {
    code: `// Event Loop va Asinxron JS\n\n// 1. Call Stack + Task Queue\nconsole.log("1: Start");\n\nsetTimeout(() => console.log("4: setTimeout 0ms"), 0);\nsetTimeout(() => console.log("5: setTimeout 100ms"), 100);\n\nPromise.resolve("3: Microtask").then(v => console.log(v));\n\nconsole.log("2: End");\n\n// Chiqish tartibi: 1, 2, 3, 4, 5\n// Microtask (Promise) har doim MacroTask (setTimeout) dan oldin!\n\n// 2. setTimeout simulatsiyasi\nfunction delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function demo() {\n  console.log("--- Event Loop Demo ---");\n  console.log("Boshlanmoqda...");\n  await delay(0); // Navbatdan o'tkazadi\n  console.log("1-chi async qadam");\n  await delay(0);\n  console.log("2-chi async qadam");\n}\n\ndemo();\nconsole.log("(bu async bloklardan oldin chiqadi)");\n\n// 3. Throttle — Event Loop bilan\nfunction throttle(fn, limit) {\n  let waiting = false;\n  return function(...args) {\n    if (!waiting) {\n      fn.apply(this, args);\n      waiting = true;\n      setTimeout(() => { waiting = false; }, limit);\n    }\n  };\n}\n\nconst throttled = throttle((n) => console.log("Throttle:", n), 100);\nthrottled(1); throttled(2); throttled(3); // faqat 1 chiqadi`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  promise: {
    code: `// Promise amalda\n\n// 1. Oddiy Promise\nconst fetchUser = (id) => new Promise((resolve, reject) => {\n  setTimeout(() => {\n    if (id > 0) resolve({ id, name: "Ali", role: "user" });\n    else reject(new Error("Noto'g'ri ID!"));\n  }, 300);\n});\n\nfetchUser(1)\n  .then(user => { console.log("Foydalanuvchi:", user); return user.id; })\n  .then(id   => console.log("ID:", id))\n  .catch(err => console.log("Xato:", err.message))\n  .finally(  () => console.log("So'rov tugadi"));\n\nfetchUser(-1)\n  .then(user => console.log(user))\n  .catch(err => console.log("Xato:", err.message));\n\n// 2. Promise.all — parallel\nconst p1 = Promise.resolve(1);\nconst p2 = new Promise(res => setTimeout(() => res(2), 100));\nconst p3 = Promise.resolve(3);\n\nPromise.all([p1, p2, p3])\n  .then(results => console.log("all:", results)); // [1,2,3]\n\n// 3. Promise.race — birinchi tugagani\nconst fast = new Promise(res => setTimeout(() => res("tez!"), 50));\nconst slow = new Promise(res => setTimeout(() => res("sekin"), 200));\n\nPromise.race([slow, fast])\n  .then(winner => console.log("race g'olibi:", winner)); // "tez!"`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  "async-await": {
    code: `// Async/Await amalda\n\n// 1. Asosiy sintaksis\nasync function fetchData(url) {\n  // Haqiqiy fetch simulatsiyasi\n  return new Promise(resolve => setTimeout(() => resolve({\n    url,\n    data: { users: ["Ali", "Zulfiya", "Bobur"], count: 3 }\n  }), 200));\n}\n\nasync function main() {\n  try {\n    console.log("So'rov yuborilmoqda...");\n    const res = await fetchData("https://api.example.com/users");\n    console.log("Javob keldi:", res.data);\n    console.log("Foydalanuvchilar:", res.data.users.join(", "));\n  } catch (err) {\n    console.log("Xato:", err.message);\n  }\n}\n\nmain();\n\n// 2. Parallel so'rovlar\nasync function parallel() {\n  const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));\n  console.log("Parallel boshlanmoqda...");\n  const [a, b, c] = await Promise.all([\n    delay(100, "Birinchi"),\n    delay(150, "Ikkinchi"),\n    delay(80,  "Uchinchi"),\n  ]);\n  console.log("Natijalar:", a, b, c);\n}\nparallel();\n\n// 3. Retry pattern\nasync function fetchWithRetry(fn, retries = 3) {\n  for (let i = 0; i < retries; i++) {\n    try { return await fn(); }\n    catch(e) {\n      if (i === retries - 1) throw e;\n      console.log(\`Qayta urinish \${i + 1}/\${retries}...\`);\n    }\n  }\n}\nconsole.log("retry:", await fetchWithRetry(() => Promise.resolve("Ok!")));`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
  codewars: {
    code: `// Codewars — Mashqlar\n\n// 1. Palindrom tekshiruvi\nfunction isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");\n  return clean === clean.split("").reverse().join("");\n}\nconsole.log(isPalindrome("racecar")); // true\nconsole.log(isPalindrome("hello"));   // false\nconsole.log(isPalindrome("A man a plan a canal Panama")); // true\n\n// 2. FizzBuzz\nconst fizzBuzz = n => Array.from({ length: n }, (_, i) => {\n  const x = i + 1;\n  if (x % 15 === 0) return "FizzBuzz";\n  if (x % 3  === 0) return "Fizz";\n  if (x % 5  === 0) return "Buzz";\n  return x;\n});\nconsole.log(fizzBuzz(20));\n\n// 3. Anagram\nconst isAnagram = (a, b) =>\n  a.toLowerCase().split("").sort().join("") ===\n  b.toLowerCase().split("").sort().join("");\nconsole.log(isAnagram("listen", "silent")); // true\nconsole.log(isAnagram("hello",  "world"));  // false\n\n// 4. Tez darajaga ko'tarish (O(log n))\nfunction fastPow(base, exp) {\n  if (exp === 0) return 1;\n  if (exp % 2 === 0) return fastPow(base * base, exp / 2);\n  return base * fastPow(base, exp - 1);\n}\nconsole.log(fastPow(2, 10)); // 1024\nconsole.log(fastPow(3, 5));  // 243`,
    html: `<!DOCTYPE html>\n<html><body>\n<script>\n// Kod shu yerda\n</script>\n</body></html>`,
    lang: "js",
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// QUIZZES
// ═══════════════════════════════════════════════════════════════════════════════

export const QUIZZES = {
  hoisting: {
    q: "console.log(x) dan keyin var x = 5 yozilsa nima chiqadi?",
    options: ["ReferenceError", "undefined", "5", "null"],
    correct: 1,
    explain:
      "var e'lonlari hoisting bilan yuqoriga ko'tariladi, lekin faqat e'lon — qiymat emas. Shuning uchun undefined chiqadi, ReferenceError emas.",
  },
  closure: {
    q: "Closure nima?",
    options: [
      "Funksiya tugatilganda xotira tozalanadi",
      "Ichki funksiya tashqi funksiya o'zgaruvchilarini 'eslab qolishi'",
      "Funksiyani boshqa funksiyaga argument sifatida berish",
      "IIFE ning boshqa nomi",
    ],
    correct: 1,
    explain:
      "Closure — ichki funksiya tashqi funksiya scope'idagi o'zgaruvchilarga tashqi funksiya bajarilgandan keyin ham murojaat qila olishi. Counter, private state uchun ishlatiladi.",
  },
  "fn-types": {
    q: "IIFE nima uchun ishlatiladi?",
    options: [
      "Funksiyani hoisting qilish uchun",
      "Global scope'ni ifloslantirmaslik va darhol kodni bajarish uchun",
      "Arrow funksiyani e'lon qilish uchun",
      "Rekursiv funksiya yaratish uchun",
    ],
    correct: 1,
    explain:
      "IIFE (Immediately Invoked Function Expression) — e'lon qilinishi bilanoq bajariluvchi funksiya. Uning asosiy maqsadi o'zgaruvchilarni global scope'ga chiqarmaslik (encapsulation).",
  },
  hof: {
    q: "const add = a => b => a + b; add(3)(4) nima qaytaradi?",
    options: ["undefined", "7", "34", "TypeError"],
    correct: 1,
    explain:
      "Bu currying — ko'p argumentli funksiyani zanjirga aylantirish. add(3) → b => 3 + b funksiyasini qaytaradi. add(3)(4) → 3 + 4 = 7.",
  },
  prototypes: {
    q: "JavaScript'da meros qanday ishlaydi?",
    options: [
      "Klassik meros — xususiyatlar to'liq ko'chiriladi",
      "Prototip zanjiri — ob'yekt xususiyatni o'zida topmasа prototipidan qidiradi",
      "Faqat ES6 class orqali meros bo'ladi",
      "Meros JavaScript'da mavjud emas",
    ],
    correct: 1,
    explain:
      "JavaScript prototip-asosli tildir. Har bir ob'yektning __proto__ xususiyati bor. Xususiyat topilmasa, prototip zanjiri bo'ylab qidirish davom etadi — Object.prototype gacha.",
  },
  classes: {
    q: "super() qayerda va nima uchun chaqiriladi?",
    options: [
      "Istalgan metodda, ota klassni chaqirish uchun",
      "Extends ishlatilganda constructor ichida, ota konstruktorni chaqirish uchun",
      "Faqat static metodlarda",
      "Class tashqarisida, instans yaratish uchun",
    ],
    correct: 1,
    explain:
      "extends ishlatilganda child class constructor'i super() ni this ga murojaat qilishdan OLDIN chaqirishi shart. super() ota klassning constructor'ini bajaradi.",
  },
  "map-set": {
    q: "Set va Array ning asosiy farqi nima?",
    options: [
      "Set faqat raqamlar saqlaydi",
      "Set takrorlanuvchi qiymatlarni saqlamaydi va has() O(1) ishlaydi",
      "Set indeks orqali murojaat qilishga ruxsat beradi",
      "Set faqat ob'yektlar saqlaydi",
    ],
    correct: 1,
    explain:
      "Set — unikal qiymatlar to'plami. Takror qo'shilganda ikkinchisi e'tiborga olinmaydi. has() metodi O(1) — Array'ning includes() dan tezroq katta ma'lumotlarda.",
  },
  errors: {
    q: "finally bloki qachon ishlaydi?",
    options: [
      "Faqat xato yuz berganda",
      "Faqat xato yuz bermasa",
      "Har doim — xato bo'lsa ham, bo'lmasa ham",
      "Faqat catch bloki bo'lmasa",
    ],
    correct: 2,
    explain:
      "finally — try/catch natijasidan qat'i nazar har doim bajariladi. Resurslarni yopish (fayllar, ulanishlar) uchun ishlatiladi.",
  },
  "event-loop": {
    q: "Microtask (Promise) va MacroTask (setTimeout) tartibi qanday?",
    options: [
      "setTimeout har doim Promise dan oldin ishlaydi",
      "Microtask (Promise) har doim MacroTask (setTimeout) dan oldin ishlaydi",
      "Ikkalasi bir xil navbatda ishlaydi",
      "Bu brauzerga bog'liq",
    ],
    correct: 1,
    explain:
      "Event Loop'da Microtask queue (Promise, queueMicrotask) har bir MacroTask'dan keyin to'liq bo'shatiladi. Shuning uchun Promise.then() har doim setTimeout'dan oldin ishlaydi.",
  },
  promise: {
    q: "Promise.all() qachon reject qiladi?",
    options: [
      "Barcha promiselar tugaganda",
      "Bitta promise ham reject bo'lsa",
      "Faqat barcha promiselar reject bo'lsa",
      "Hech qachon reject qilmaydi",
    ],
    correct: 1,
    explain:
      "Promise.all() — bitta promise ham reject bo'lsa, darhol reject qiladi ('fail-fast'). Barcha promise'lar natijasi kerak bo'lganda, lekin xatolik bo'lsa to'xtatish zarur bo'lganda ishlatiladi.",
  },
  "async-await": {
    q: "async funksiya har doim nima qaytaradi?",
    options: [
      "undefined",
      "Promise — qiymat bo'lsa ham, bo'lmasa ham",
      "return qilingan qiymatni to'g'ridan-to'g'ri",
      "Faqat await ishlatilganda Promise",
    ],
    correct: 1,
    explain:
      "async funksiya har doim Promise qaytaradi. return 42 yozilsa — Promise.resolve(42) qaytariladi. Bu async/await zanjirlarni to'g'ri ishlashini ta'minlaydi.",
  },
  codewars: {
    q: "[1,2,3,4,5].reduce((acc, x) => acc + x, 0) nima qaytaradi?",
    options: ["[1,2,3,4,5]", "15", "0", "undefined"],
    correct: 1,
    explain:
      "reduce() akkumulyator bilan ishlaydi: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15. Natija 15. Bu massiv elementlarini yig'ishning eng funktsional usuli.",
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// ADVANCED_JS_CONTENT_KEYS — Curriculum ga qo'shish uchun
// ═══════════════════════════════════════════════════════════════════════════════

// XP qiymatlari darsning murakkabligiga qarab
const XP_MAP = {
  "execution-context": 80,
  closure: 100,
  "fn-types": 80,
  hof: 100,
  prototypes: 110,
  classes: 110,
  "map-set": 90,
  errors: 90,
  "event-loop": 120,
  promise: 120,
  "async-await": 130,
  codewars: 100,
};

export const ADVANCED_JS_CONTENT_KEYS = Object.fromEntries(
  Object.keys(QUIZZES).map((id) => [
    id,
    {
      xp: XP_MAP[id] || 100,
      type: "visual",
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
      quizKey: `lessons.${id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}.quiz`,
    },
  ]),
);
