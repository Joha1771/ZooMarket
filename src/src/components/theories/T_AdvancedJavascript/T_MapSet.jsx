import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_MapSet() {
  return (
    <div className="flex flex-col gap-0">
      <H>Map nima?</H>
      <P>
        <strong>Map</strong> — kalit-qiymat juftliklarini saqlovchi kolleksiya.
        Oddiy ob'yektdan farqi: kalit <em>istalgan tur</em> bo'lishi mumkin
        (string, number, ob'yekt, funksiya).
      </P>

      <Pre>{`const map = new Map();

// set — qo'shish
map.set("name", "Ali");
map.set(42, "son kalit");
map.set(true, "boolean kalit");

const objKey = { id: 1 };
map.set(objKey, "ob'yekt kalit"); // ob'yekt ham kalit bo'ladi!

// get — olish
map.get("name");  // "Ali"
map.get(42);      // "son kalit"
map.get(objKey);  // "ob'yekt kalit"

// has — bormi?
map.has("name");  // true
map.has("age");   // false

// delete — o'chirish
map.delete(42);

// size — o'lcham
map.size; // 3

// Iteratsiya
map.forEach((value, key) => console.log(key, "→", value));

for (const [key, value] of map) {
  console.log(key, value);
}`}</Pre>

      <H>Map vs Ob'yekt</H>
      <Table
        headers={["Xususiyat", "Object {}", "Map"]}
        rows={[
          ["Kalit turi", "Faqat string/Symbol", "Istalgan tur"],
          ["Tartib", "Kafolatlanmagan", "Kiritilgan tartibda"],
          ["O'lcham", "Object.keys().length", ".size"],
          ["Iteratsiya", "for...in, Object.keys()", "for...of, .forEach()"],
          ["Default kalitlar", "Prototipdan keladi", "Yo'q"],
          ["Tezlik", "Oddiy holda yaxshi", "Ko'p o'zgarishda yaxshi"],
        ]}
      />

      <H>Set nima?</H>
      <P>
        <strong>Set</strong> — <em>takrorlanmas</em> qiymatlar to'plami.
        Massivga o'xshaydi, lekin dublikatlarni avtomatik o'chiradi.
      </P>

      <Pre>{`const set = new Set();

set.add(1);
set.add(2);
set.add(2); // dublikat — qo'shilmaydi
set.add(3);

set.size;        // 3 (4 emas)
set.has(2);      // true
set.has(5);      // false
set.delete(1);

// Massivdan Set yaratish — dublikatlarni tozalash
const arr = [1, 2, 2, 3, 3, 4];
const unique = new Set(arr);
// Set {1, 2, 3, 4}

// Set → Massivga
const uniqueArr = [...unique]; // [1, 2, 3, 4]
// yoki
const uniqueArr2 = Array.from(unique);

// Iteratsiya
for (const value of set) {
  console.log(value);
}

// Amaliy — massivdan dublikat tozalash (1 qator)
const clean = [...new Set([1, 2, 2, 3, 3])]; // [1, 2, 3]`}</Pre>

      <H>WeakMap va WeakSet</H>
      <Pre>{`// WeakMap — faqat ob'yekt kalitlar, garbage collected
const weakMap = new WeakMap();
let user = { name: "Ali" };
weakMap.set(user, { visits: 10 });

user = null; // ob'yekt o'chirilganda WeakMap dan ham o'chadi

// WeakSet — faqat ob'yektlar, garbage collected
const weakSet = new WeakSet();
let obj = { id: 1 };
weakSet.add(obj);
weakSet.has(obj); // true

obj = null; // xotiradan tozalanadi`}</Pre>

      <Table
        headers={["", "Map", "WeakMap", "Set", "WeakSet"]}
        rows={[
          [
            "Kalit/Qiymat",
            "Har qanday",
            "Faqat ob'yekt kalit",
            "Har qanday",
            "Faqat ob'yekt",
          ],
          ["Iteratsiya", "✓", "✗", "✓", "✗"],
          ["size", "✓", "✗", "✓", "✗"],
          ["GC friendly", "✗", "✓", "✗", "✓"],
        ]}
      />
      <Note type="tip">
        Massivdan dublikatlarni tozalash uchun <Code>[...new Set(arr)]</Code>{" "}
        eng qisqa va tez usul.
      </Note>
    </div>
  );
}
