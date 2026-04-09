import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_FnTypes() {
  return (
    <div className="flex flex-col gap-0">
      <H>Funksiya turlari</H>
      <P>
        JavaScriptda funksiyani yozishning bir necha usuli mavjud. Har birining
        o'z xususiyatlari va qo'llanish joylari bor.
      </P>

      <H>1. Function Declaration</H>
      <Pre>{`function add(a, b) {
  return a + b;
}

add(2, 3); // 5

// Hoisted — e'londan OLDIN ham chaqirish mumkin
result = add(10, 5); // 15 — ishlaydi!
function add(a, b) { return a + b; }`}</Pre>
      <Note type="tip">
        <Code>function</Code> kalit so'zi bilan yozilgan funksiyalar to'liq
        hoisted bo'ladi — faylning istalgan joyidan chaqirish mumkin.
      </Note>

      <H>2. Function Expression</H>
      <Pre>{`const add = function(a, b) {
  return a + b;
};

// Named function expression
const multiply = function mul(a, b) {
  return a * b;
};

// Hoisted EMAS — e'londan oldin chaqirib bo'lmaydi
console.log(add); // undefined (var bilan) yoki ReferenceError (const bilan)`}</Pre>

      <H>3. Arrow Function (ES6+)</H>
      <Pre>{`// To'liq shakl
const add = (a, b) => {
  return a + b;
};

// Qisqa shakl — bitta ifoda uchun (return avtomatik)
const add = (a, b) => a + b;

// Bitta parametr — qavslar shart emas
const square = x => x * x;

// Parametrsiz — bo'sh qavslar shart
const greet = () => "Salom!";

// Ob'yekt qaytarish — qavs kerak
const getUser = (name) => ({ name, age: 25 });`}</Pre>

      <H>Arrow vs Function — asosiy farqlar</H>
      <Table
        headers={["Xususiyat", "function", "arrow =>"]}
        rows={[
          [
            "this",
            "O'z this i bor (chaqirilgan joyga bog'liq)",
            "Tashqi this ni oladi (lexical)",
          ],
          [
            "arguments",
            "arguments object bor",
            "Yo'q — rest (...args) ishlating",
          ],
          ["Hoisting", "✓ Ko'tariladi", "✗ Ko'tarilmaydi"],
          ["Constructor (new)", "✓ Ishlatsa bo'ladi", "✗ Ishlatib bo'lmaydi"],
          ["Qisqa yozish", "Uzunroq", "Qisqa va aniq"],
        ]}
      />

      <H>this — qayerda qaysi funksiya</H>
      <Pre>{`const obj = {
  name: "Ali",

  // ✓ Metod uchun — function (o'z this i bor)
  greet: function() {
    return this.name; // "Ali"
  },

  // ✗ Metod uchun arrow yaxshi emas
  greetArrow: () => {
    return this.name; // undefined — this = global/window
  },

  // ✓ Callback ichida arrow yaxshi
  greetLater: function() {
    setTimeout(() => {
      console.log(this.name); // "Ali" — tashqi this ni oldi
    }, 100);
  },
};`}</Pre>

      <H>4. IIFE (Immediately Invoked Function Expression)</H>
      <P>
        E'lon qilinishi bilanoq chaqiriladigan funksiya. Global scope ni
        "ifloslantirmaslik" uchun ishlatiladi.
      </P>
      <Pre>{`// Klassik IIFE
(function() {
  let secret = "tashqaridan ko'rinmaydi";
  console.log(secret);
})();

// Arrow IIFE
(() => {
  console.log("Arrow IIFE");
})();

// Qiymat qaytaruvchi IIFE
const result = (function(a, b) {
  return a + b;
})(10, 5);
console.log(result); // 15`}</Pre>
      <Note type="info">
        IIFE bugungi kunda ES modules (import/export) bilan almashtirilgan,
        lekin legacy kod va ba'zi pattern larda hali ham uchraydi.
      </Note>
    </div>
  );
}
