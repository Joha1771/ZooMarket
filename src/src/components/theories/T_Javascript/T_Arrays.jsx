import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Arrays() {
  return (
    <TheoryWrap>
      <H>Massiv (Array) nima?</H>
      <P>
        Massiv — tartib bo'yicha saqlangan qiymatlar to'plami. Har bir element
        o'z indeksiga ega (0 dan boshlanadi).
      </P>
      <Pre>{`// Massiv yaratish
const fruits = ["olma", "banan", "nok"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "salom", true, null]; // Aralash turlari

// Indeks orqali murojaat
fruits[0];  // "olma"
fruits[1];  // "banan"
fruits[2];  // "nok"
fruits[3];  // undefined

// .length
fruits.length; // 3

// Oxirgi element
fruits[fruits.length - 1]; // "nok"
fruits.at(-1);              // "nok" (ES2022)`}</Pre>

      <H>Elementlarni qo'shish va olib tashlash</H>
      <Table
        headers={["Metod", "Vazifasi", "Qaytaradi"]}
        rows={[
          ["push(...items)", "Oxiriga qo'shadi", "Yangi length"],
          ["pop()", "Oxirisini olib tashlaydi", "Olingan element"],
          ["unshift(...items)", "Boshiga qo'shadi", "Yangi length"],
          ["shift()", "Birinchisini olib tashlaydi", "Olingan element"],
          [
            "splice(i, n, ...items)",
            "O'zgartirish/olib tashlash",
            "O'chirilgan elementlar",
          ],
        ]}
      />
      <Pre>{`const arr = [1, 2, 3];

arr.push(4, 5);    // [1, 2, 3, 4, 5]
arr.pop();         // [1, 2, 3, 4] → 5 qaytadi
arr.unshift(0);    // [0, 1, 2, 3, 4]
arr.shift();       // [1, 2, 3, 4] → 0 qaytadi

// splice — eng kuchli
const a = ["a", "b", "c", "d"];
a.splice(1, 2);        // ["a", "d"] — indeks 1 dan 2 ta o'chiradi
a.splice(1, 0, "X");   // ["a", "X", "d"] — o'chirilmaydi, qo'shiladi
a.splice(1, 1, "Y", "Z"); // ["a", "Y", "Z", "d"] — 1 ta o'chirib 2 ta qo'shadi`}</Pre>

      <H>Qidirish va tekshirish</H>
      <Pre>{`const nums = [3, 1, 4, 1, 5, 9, 2, 6];

nums.indexOf(4);      // 2 (birinchi topilgan indeks)
nums.indexOf(7);      // -1 (topilmadi)
nums.lastIndexOf(1);  // 3 (oxirgi topilgan)
nums.includes(5);     // true
nums.includes(10);    // false`}</Pre>

      <H>Nusxa olish va birlashtirish</H>
      <Pre>{`const a = [1, 2, 3];
const b = [4, 5, 6];

// concat — birlashtirish
const c = a.concat(b);      // [1, 2, 3, 4, 5, 6]

// spread — zamonaviy usul
const d = [...a, ...b];     // [1, 2, 3, 4, 5, 6]

// slice — qism nusxasi (asl o'zgarmaydi)
a.slice(1, 3);  // [2, 3]
a.slice(-2);    // [2, 3] ← oxirgi 2 ta

// Massivni nusxalash
const copy = [...a];
const copy2 = a.slice();`}</Pre>

      <H>Tartibga solish va aylantirish</H>
      <Pre>{`const arr = [3, 1, 4, 1, 5, 9];

// sort — lexikografik (matn sifatida)!
arr.sort();                    // [1, 1, 3, 4, 5, 9] ← sonlar uchun xato
[10, 9, 2, 1, 100].sort();     // [1, 10, 100, 2, 9] ← XATO!

// sort bilan comparator funksiya — to'g'ri
arr.sort((a, b) => a - b);     // O'sish tartibida
arr.sort((a, b) => b - a);     // Kamayish tartibida

// reverse
[1, 2, 3].reverse();           // [3, 2, 1]

// join — massivni satrga
["a", "b", "c"].join("-");     // "a-b-c"
["a", "b", "c"].join("");      // "abc"

// flat — ichki massivlarni yoyish
[1, [2, 3], [4, [5]]].flat();    // [1, 2, 3, 4, [5]]
[1, [2, 3], [4, [5]]].flat(2);   // [1, 2, 3, 4, 5]`}</Pre>
      <Note type="warning">
        <code>sort()</code>, <code>reverse()</code>, <code>splice()</code> — asl
        massivni <strong>o'zgartiradi</strong> (mutate). Originalini saqlash
        uchun avval nusxa oling: <code>[...arr].sort()</code>.
      </Note>
    </TheoryWrap>
  );
}
