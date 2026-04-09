import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Destructuring() {
  return (
    <TheoryWrap>
      <H>Destrukturizatsiya nima?</H>
      <P>
        Destrukturizatsiya — massiv yoki ob'yektdan qiymatlarni chiqarib,
        alohida o'zgaruvchilarga berish. Kod qisqaroq va o'qilishi oson bo'ladi.
      </P>

      <H>Array destrukturizatsiyasi</H>
      <Pre>{`const arr = [1, 2, 3, 4, 5];

// Eski usul
const a = arr[0]; // 1
const b = arr[1]; // 2

// Destrukturizatsiya
const [first, second, third] = arr;
console.log(first, second, third); // 1, 2, 3

// Elementlarni o'tkazib yuborish (vergul bilan)
const [x, , z] = arr; // x=1, z=3

// Default qiymat
const [p, q, r = 10] = [1, 2];
console.log(r); // 10 (massivda yo'q, default ishlatildi)

// Rest — qolganlarini yig'ish
const [head, ...tail] = [1, 2, 3, 4, 5];
// head=1, tail=[2,3,4,5]`}</Pre>

      <H>Swap — qiymatlarni almashtirish</H>
      <Pre>{`let a = 1, b = 2;

// Eski usul — temp o'zgaruvchi kerak
let temp = a;
a = b;
b = temp;

// Destrukturizatsiya bilan — bir satrda!
[a, b] = [b, a];
console.log(a, b); // 2, 1`}</Pre>

      <H>Object destrukturizatsiyasi</H>
      <Pre>{`const user = { name: "Ali", age: 25, city: "Toshkent" };

// Oddiy destrukturizatsiya
const { name, age } = user;
console.log(name, age); // "Ali", 25

// Nom o'zgartirish (rename)
const { name: userName, age: userAge } = user;
console.log(userName); // "Ali"

// Default qiymat
const { city, country = "O'zbekiston" } = user;
console.log(country); // "O'zbekiston" (user da yo'q)

// Nested (ichki) ob'yekt
const { address: { street, city: userCity } } = {
  name: "Ali",
  address: { street: "Navoiy", city: "Samarqand" }
};
console.log(street, userCity); // "Navoiy", "Samarqand"`}</Pre>

      <H>Funksiya parametrlarida destrukturizatsiya</H>
      <Pre>{`// Ob'yektni to'g'ridan-to'g'ri destrukturizatsiya
function displayUser({ name, age, city = "Toshkent" }) {
  console.log(\`\${name}, \${age} yosh, \${city}\`);
}
displayUser({ name: "Ali", age: 25 });
// "Ali, 25 yosh, Toshkent"

// Array parametr
function sum([a, b, c = 0]) {
  return a + b + c;
}
sum([1, 2]);    // 3
sum([1, 2, 3]); // 6`}</Pre>

      <H>Spread operatori (...)</H>
      <Pre>{`// Massivlarni yoyish (spread)
const a = [1, 2, 3];
const b = [4, 5, 6];
const combined = [...a, ...b]; // [1, 2, 3, 4, 5, 6]

// Massiv nusxasi
const copy = [...a]; // [1, 2, 3]

// Ob'yektlarni yoyish
const defaults = { color: "blue", size: 10 };
const custom = { ...defaults, color: "red" };
// { color: "red", size: 10 }

// Funksiya argumenti sifatida
const nums = [3, 1, 4, 1, 5, 9];
Math.max(...nums); // 9`}</Pre>

      <H>Rest operatori (...)</H>
      <Pre>{`// Funksiya parametrida — qolganlarini yig'adi
function sum(first, ...rest) {
  return first + rest.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5); // 15

// Object rest
const { name, age, ...others } = {
  name: "Ali", age: 25, city: "Toshkent", job: "Dev"
};
console.log(others); // { city: "Toshkent", job: "Dev" }

// Array rest
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(remaining); // [3, 4, 5]`}</Pre>
      <Note type="tip">
        Spread (<code>...</code>) va Rest (<code>...</code>) bir xil sintaksis,
        lekin farqli vazifa: spread yoyadi, rest yig'adi. Qaysi biri ekanligini
        kontekstdan bilish mumkin.
      </Note>
    </TheoryWrap>
  );
}
