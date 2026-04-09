import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_ArrayMethods() {
  return (
    <TheoryWrap>
      <H>Funksional array metodlari</H>
      <P>
        ES6 da kiritilgan funksional metodlar massivlar bilan ishlashni yanada
        qulay qiladi. Ular asl massivni <strong>o'zgartirmaydi</strong> — yangi
        massiv qaytaradi.
      </P>

      <H>map — o'zgartirish</H>
      <Pre>{`// Har elementni o'zgartirib yangi massiv qaytaradi
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(x => x * 2);
// [2, 4, 6, 8, 10]

const squared = nums.map(x => x ** 2);
// [1, 4, 9, 16, 25]

// Ob'yektlar ustida
const users = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
];
const names = users.map(user => user.name);
// ["Ali", "Vali"]

const older = users.map(user => ({ ...user, age: user.age + 1 }));
// [{ name: "Ali", age: 26 }, { name: "Vali", age: 31 }]`}</Pre>

      <H>filter — saralash</H>
      <Pre>{`const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const evens = nums.filter(x => x % 2 === 0);
// [2, 4, 6, 8]

const bigNums = nums.filter(x => x > 5);
// [6, 7, 8]

// Ob'yektlar ustida
const products = [
  { name: "Noutbuk", price: 1200, inStock: true },
  { name: "Telefon", price: 800, inStock: false },
  { name: "Kamera", price: 600, inStock: true },
];
const available = products.filter(p => p.inStock);
const affordable = products.filter(p => p.price < 1000);`}</Pre>

      <H>reduce — qisqartirish</H>
      <Pre>{`// Barcha elementlarni bitta qiymatga qisqartiradi
const nums = [1, 2, 3, 4, 5];

// Yig'indi
const sum = nums.reduce((acc, cur) => acc + cur, 0);
// 15

// Ko'paytma
const product = nums.reduce((acc, cur) => acc * cur, 1);
// 120

// Ob'yektga aylantirish
const fruits = ["olma", "banan", "olma", "nok", "banan", "olma"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { olma: 3, banan: 2, nok: 1 }`}</Pre>

      <H>find va findIndex</H>
      <Pre>{`const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Malika" },
];

// find — birinchi mosni qaytaradi
const user = users.find(u => u.id === 2);
// { id: 2, name: "Vali" }

// findIndex — birinchi mosning indeksini qaytaradi
const idx = users.findIndex(u => u.name === "Malika");
// 2

// Topilmasa
users.find(u => u.id === 99);      // undefined
users.findIndex(u => u.id === 99); // -1`}</Pre>

      <H>some va every</H>
      <Pre>{`const nums = [1, 2, 3, 4, 5];

// some — birorta mos bo'lsa true
nums.some(x => x > 4);  // true (5 > 4)
nums.some(x => x > 10); // false

// every — barchasi mos bo'lsa true
nums.every(x => x > 0);  // true
nums.every(x => x > 3);  // false (1,2,3 > 3 emas)`}</Pre>

      <H>forEach</H>
      <Pre>{`// Har element uchun funksiya chaqiradi, qaytarmaydi (undefined)
["olma", "banan", "nok"].forEach((fruit, index) => {
  console.log(\`\${index + 1}. \${fruit}\`);
});
// 1. olma
// 2. banan
// 3. nok`}</Pre>

      <H>Metodlarni zanjirlab ishlatish</H>
      <Pre>{`const products = [
  { name: "Noutbuk", price: 1200, category: "tech" },
  { name: "Kitob", price: 15, category: "edu" },
  { name: "Telefon", price: 800, category: "tech" },
  { name: "Kurs", price: 50, category: "edu" },
];

// Zanjir: filter → map → sort
const result = products
  .filter(p => p.category === "tech")  // Tech mahsulotlar
  .map(p => p.price)                    // Faqat narxlar
  .sort((a, b) => a - b);               // O'sish tartibida
// [800, 1200]

// Murakkab zanjir
const totalEduPrice = products
  .filter(p => p.category === "edu")
  .reduce((sum, p) => sum + p.price, 0);
// 65`}</Pre>

      <H>Tezkor taqqoslash</H>
      <Table
        headers={["Metod", "Qaytaradi", "Mutate?"]}
        rows={[
          [".map(fn)", "Yangi massiv (bir xil uzunlik)", "✗ Yo'q"],
          [".filter(fn)", "Yangi massiv (qisqaroq)", "✗ Yo'q"],
          [".reduce(fn, init)", "Bitta qiymat", "✗ Yo'q"],
          [".find(fn)", "Element yoki undefined", "✗ Yo'q"],
          [".findIndex(fn)", "Indeks yoki -1", "✗ Yo'q"],
          [".some(fn)", "true / false", "✗ Yo'q"],
          [".every(fn)", "true / false", "✗ Yo'q"],
          [".forEach(fn)", "undefined", "✗ Yo'q"],
        ]}
      />
      <Note type="tip">
        <code>map</code> vs <code>forEach</code>: agar natija kerak bo'lsa —{" "}
        <code>map</code>. Faqat nojo'ya ta'sir (side effect) kerak bo'lsa —{" "}
        <code>forEach</code>. Ko'pincha <code>map</code> yaxshiroq.
      </Note>
    </TheoryWrap>
  );
}
