import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Functions() {
  return (
    <TheoryWrap>
      <H>Funksiya nima?</H>
      <P>
        Funksiya — qayta-qayta ishlatiladigan kod bloki. "DRY" (Don't Repeat
        Yourself) prinsipi: bir marta yozing, ko'p marta chaqiring.
      </P>
      <Pre>{`// E'lon (Declaration)
function greet(name) {
  return "Salom, " + name + "!";
}

// Chaqirish (Call)
console.log(greet("Ali"));    // "Salom, Ali!"
console.log(greet("Malika")); // "Salom, Malika!"`}</Pre>

      <H>Funksiya turlari</H>
      <Table
        headers={["Tur", "Sintaksis", "Hoisting"]}
        rows={[
          [
            "Declaration",
            "function add(a, b) { return a + b; }",
            "✓ Ha (yuqoriga ko'tariladi)",
          ],
          [
            "Expression",
            "const add = function(a, b) { return a + b; };",
            "✗ Yo'q",
          ],
          ["Arrow", "const add = (a, b) => a + b;", "✗ Yo'q"],
          ["Anonymous", "arr.map(function(x) { return x * 2; })", "—"],
          ["IIFE", "(function() { ... })()", "✗ (darhol ishlaydi)"],
        ]}
      />
      <Pre>{`// Declaration — hoisted (chaqirishdan oldin yozish mumkin)
console.log(add(2, 3)); // ✓ 5 — ishlar
function add(a, b) { return a + b; }

// Expression — hoisted emas
// console.log(mul(2, 3)); // ✗ Xato!
const mul = function(a, b) { return a * b; };`}</Pre>

      <H>Arrow Functions (ES6)</H>
      <Pre>{`// Oddiy arrow
const square = (x) => x * x;

// Bitta parametr — qavs ixtiyoriy
const double = x => x * 2;

// Ko'p qatorli
const greet = (name, age) => {
  const message = "Salom, " + name;
  return message + "! Siz " + age + " yoshdasiz.";
};

// Ob'yekt qaytarish (qavs kerak)
const getUser = (name, age) => ({ name, age });
console.log(getUser("Ali", 25)); // { name: "Ali", age: 25 }`}</Pre>

      <H>Parametrlar</H>
      <Pre>{`// Default parametr
function power(base, exp = 2) {
  return base ** exp;
}
power(5);    // 25  (exp = 2 standart)
power(2, 10); // 1024

// Rest parametr — qolganlarini massivga yig'adi
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5); // 15

// Ob'yekt destrukturizatsiya parametrda
function displayUser({ name, age, city = "Toshkent" }) {
  console.log(\`\${name}, \${age} yosh, \${city}\`);
}
displayUser({ name: "Ali", age: 25 }); // Ali, 25 yosh, Toshkent`}</Pre>

      <H>return va Scope</H>
      <Pre>{`// return — funksiyani to'xtatadi va qiymat qaytaradi
function divide(a, b) {
  if (b === 0) return "Xato: 0 ga bo'lish";
  return a / b;
}

// Scope — o'zgaruvchi ko'rinish sohasi
const globalVar = "Global";

function example() {
  const localVar = "Local";
  console.log(globalVar); // ✓ Ko'rinadi
  console.log(localVar);  // ✓ Ko'rinadi
}

// console.log(localVar); // ✗ Xato — tashqarida ko'rinmaydi`}</Pre>

      <H>Higher-Order Functions</H>
      <Pre>{`// Funksiyani argument sifatida berish
function applyTwice(fn, x) {
  return fn(fn(x));
}
applyTwice(x => x * 2, 3); // 12 (3→6→12)

// Funksiya qaytaruvchi funksiya (Closure)
function multiplier(factor) {
  return (n) => n * factor;
}
const triple = multiplier(3);
triple(5);  // 15
triple(10); // 30`}</Pre>
      <Note type="tip">
        Arrow funksiyalar <code>this</code> ni o'zida{" "}
        <strong>saqlamaydi</strong> — bu class metodlarida muhim. Oddiy
        funksiyalar esa o'z <code>this</code> kontekstiga ega.
      </Note>
    </TheoryWrap>
  );
}
