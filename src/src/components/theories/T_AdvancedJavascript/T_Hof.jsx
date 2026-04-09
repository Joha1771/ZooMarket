import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_Hof() {
  return (
    <div className="flex flex-col gap-0">
      <H>Higher-Order Functions (HOF) nima?</H>
      <P>
        <strong>Higher-Order Function</strong> — boshqa funksiyani{" "}
        <em>argument sifatida qabul qiluvchi</em> yoki{" "}
        <em>funksiya qaytaruvchi</em> funksiya. JavaScript da funksiyalar
        "first-class citizen" — o'zgaruvchi kabi uzatiladi.
      </P>

      <H>Funksiyani argument sifatida berish</H>
      <Pre>{`// HOF — funksiyani argument qabul qiladi
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

applyOperation(5, 3, add);      // 8
applyOperation(5, 3, multiply); // 15
applyOperation(10, 2, (a, b) => a - b); // 8`}</Pre>

      <H>Massiv metodlari — eng keng tarqalgan HOF lar</H>
      <Pre>{`const numbers = [1, 2, 3, 4, 5, 6];

// map — har elementni o'zgartiradi, yangi massiv qaytaradi
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10, 12]

// filter — shartga mos elementlarni qoldiradi
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]

// reduce — massivni bitta qiymatga keltiradi
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 21

// Zanjir (chaining)
const result = numbers
  .filter(n => n > 2)      // [3, 4, 5, 6]
  .map(n => n * 10)         // [30, 40, 50, 60]
  .reduce((a, b) => a + b); // 180`}</Pre>

      <H>Funksiya qaytaruvchi HOF</H>
      <Pre>{`// Funksiya fabrikasi
function createMultiplier(factor) {
  return (number) => number * factor; // closure
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15

// Amaliy misol — logger fabrikasi
function createLogger(prefix) {
  return (message) => console.log(\`[\${prefix}] \${message}\`);
}

const infoLog = createLogger("INFO");
const errorLog = createLogger("ERROR");
infoLog("Server started");   // [INFO] Server started
errorLog("DB connection failed"); // [ERROR] DB connection failed`}</Pre>

      <H>Currying nima?</H>
      <P>
        <strong>Currying</strong> — ko'p argumentli funksiyani bir argumentli
        funksiyalar zanjiriga aylantirish. <Code>f(a, b, c)</Code> →{" "}
        <Code>f(a)(b)(c)</Code>
      </P>
      <Pre>{`// Oddiy funksiya
const add = (a, b) => a + b;
add(3, 5); // 8

// Curried funksiya
const curriedAdd = (a) => (b) => a + b;
curriedAdd(3)(5); // 8

// Amaliy foyda — qayta ishlatish
const add10 = curriedAdd(10);
add10(5);  // 15
add10(20); // 30

// Ko'p argument — currying
const url = (base) => (endpoint) => (id) =>
  \`\${base}/\${endpoint}/\${id}\`;

const api = url("https://api.example.com");
const usersApi = api("users");
usersApi(1);  // https://api.example.com/users/1
usersApi(42); // https://api.example.com/users/42`}</Pre>

      <H>HOF vs oddiy funksiya</H>
      <Table
        headers={["Xususiyat", "Oddiy funksiya", "Higher-Order Function"]}
        rows={[
          [
            "Argument",
            "Ma'lumot (string, number...)",
            "Funksiya ham bo'lishi mumkin",
          ],
          ["Qaytaradi", "Qiymat", "Funksiya ham qaytarishi mumkin"],
          ["Qayta ishlatish", "Cheklangan", "Yuqori — behaviour abstrakti"],
          ["Misol", "Math.max()", "Array.map(), filter(), reduce()"],
        ]}
      />
      <Note type="tip">
        HOF va currying — funksional dasturlashning asosi. React da{" "}
        <Code>useState</Code>, <Code>useEffect</Code> ham HOF printsipiga
        asoslangan.
      </Note>
    </div>
  );
}
