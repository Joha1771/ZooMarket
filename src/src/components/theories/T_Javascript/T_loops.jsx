import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Loops() {
  return (
    <TheoryWrap>
      <H>Sikl (Loop) nima?</H>
      <P>
        Sikl — bir kod blokini bir necha marta takrorlash uchun ishlatiladi.
        Takrorlanish soni ma'lum bo'lsa <code>for</code>, ma'lum bo'lmasa{" "}
        <code>while</code> ishlatiladi.
      </P>

      <H>for sikli</H>
      <Pre>{`// Sintaksis: for (boshlang'ich; shart; qadam)
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// → 0, 1, 2, 3, 4

// Orqaga sanash
for (let i = 10; i > 0; i--) {
  console.log(i);
}
// → 10, 9, 8, ... 1

// Ikkitadan oshirish
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// → 0, 2, 4, 6, ... 20`}</Pre>

      <H>for...of — massiv va satr uchun</H>
      <Pre>{`const fruits = ["olma", "banan", "nok"];

for (const fruit of fruits) {
  console.log(fruit);
}
// → olma, banan, nok

// Satr (string) ustida
for (const char of "salom") {
  console.log(char);
}
// → s, a, l, o, m

// Indeks kerak bo'lsa — entries()
for (const [index, fruit] of fruits.entries()) {
  console.log(index, fruit);
}
// → 0 "olma", 1 "banan", 2 "nok"`}</Pre>

      <H>for...in — ob'yekt kalitlari uchun</H>
      <Pre>{`const person = { name: "Ali", age: 25, city: "Toshkent" };

for (const key in person) {
  console.log(key, ":", person[key]);
}
// → name : Ali
// → age : 25
// → city : Toshkent`}</Pre>

      <H>while va do...while</H>
      <Pre>{`// while — shart oldin tekshiriladi
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Agar i = 10 bo'lsa — hech qachon ishlamaydi

// do...while — kamida bir marta ishlaydi
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// Amaliy misol: foydalanuvchi to'g'ri javob kiritguncha
let answer;
do {
  answer = prompt("2 + 2 = ?");
} while (answer !== "4");`}</Pre>

      <H>break va continue</H>
      <Pre>{`// break — siklni to'xtatish
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// → 0, 1, 2, 3, 4

// continue — joriy iteratsiyani o'tkazib yuborish
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // juftlarni o'tkazib yubor
  console.log(i);
}
// → 1, 3, 5, 7, 9`}</Pre>

      <H>Qaysi sikl qachon?</H>
      <Table
        headers={["Holat", "Eng mos sikl"]}
        rows={[
          ["Takrorlanish soni ma'lum", "for (let i = 0; ...)"],
          ["Massiv elementlari ustida", "for...of yoki .forEach()"],
          ["Ob'yekt kalitlari ustida", "for...in yoki Object.keys()"],
          ["Shart bajarilguncha", "while"],
          ["Kamida bir marta, keyin shart", "do...while"],
          ["Funksional (map/filter)", ".map(), .filter(), .reduce()"],
        ]}
      />
      <Note type="warning">
        <strong>Cheksiz sikl</strong> — dasturni muzlatadi! <code>while</code>{" "}
        da shart hech qachon false bo'lmasa, brauzer tabs ni yopishga to'g'ri
        keladi. Shart to'g'ri o'zgarayotganiga ishonch hosil qiling.
      </Note>
    </TheoryWrap>
  );
}
