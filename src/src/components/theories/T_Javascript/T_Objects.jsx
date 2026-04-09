import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Objects() {
  return (
    <TheoryWrap>
      <H>Ob'yekt nima?</H>
      <P>
        Ob'yekt — kalit:qiymat juftlari to'plami. Haqiqiy dunyodagi narsalarni
        modellashtiradi: foydalanuvchi, mahsulot, avtomobil va h.k.
      </P>
      <Pre>{`// Ob'yekt yaratish (Object Literal)
const person = {
  name: "Ali",
  age: 25,
  city: "Toshkent",
  isStudent: false,
};

// Nested (ichma-ich) ob'yekt
const user = {
  name: "Malika",
  address: {
    street: "Navoiy ko'chasi",
    city: "Samarqand",
  },
  hobbies: ["kitob o'qish", "dasturlash"],
};`}</Pre>

      <H>Xususiyatlarga murojaat</H>
      <Pre>{`const car = { brand: "Tesla", model: "Model 3", year: 2023 };

// Nuqta (dot) notation — eng ko'p ishlatiladi
car.brand;  // "Tesla"
car.year;   // 2023

// Kvadrat qavs notation — dinamik kalit uchun
car["model"];    // "Model 3"

const key = "brand";
car[key];        // "Tesla" ← o'zgaruvchi kalit

// Mavjud bo'lmagan xususiyat
car.color;       // undefined (xato bermaydi)
car.engine?.type; // undefined (optional chaining)`}</Pre>

      <H>Ob'yektni o'zgartirish</H>
      <Pre>{`const obj = { name: "Ali", age: 25 };

// Qo'shish
obj.city = "Toshkent";
obj["job"] = "Dasturchi";

// O'zgartirish
obj.age = 26;

// O'chirish
delete obj.city;
console.log(obj); // { name: "Ali", age: 26, job: "Dasturchi" }`}</Pre>

      <H>Object metodlari</H>
      <Table
        headers={["Metod", "Vazifasi", "Natija misoli"]}
        rows={[
          ["Object.keys(obj)", "Kalitlar massivi", '["name", "age", "city"]'],
          [
            "Object.values(obj)",
            "Qiymatlar massivi",
            '["Ali", 25, "Toshkent"]',
          ],
          [
            "Object.entries(obj)",
            "Kalit-qiymat juftlari",
            '[["name","Ali"], ...]',
          ],
          [
            "Object.assign(target, src)",
            "Ob'yektlarni birlashtirish",
            "{ ...all props }",
          ],
          [
            "Object.freeze(obj)",
            "O'zgartirishni taqiqlash",
            "Immutable ob'yekt",
          ],
          [
            "Object.hasOwn(obj, key)",
            "Xususiyat borligini tekshirish",
            "true / false",
          ],
        ]}
      />
      <Pre>{`const person = { name: "Ali", age: 25, city: "Toshkent" };

Object.keys(person);    // ["name", "age", "city"]
Object.values(person);  // ["Ali", 25, "Toshkent"]

// entries bilan aylanish
for (const [key, value] of Object.entries(person)) {
  console.log(\`\${key}: \${value}\`);
}`}</Pre>

      <H>Metodlar (Ob'yekt ichidagi funksiyalar)</H>
      <Pre>{`const calculator = {
  value: 0,

  add(n) {
    this.value += n;
    return this; // zanjir uchun
  },

  subtract(n) {
    this.value -= n;
    return this;
  },

  result() {
    return this.value;
  },
};

calculator.add(10).add(5).subtract(3).result(); // 12`}</Pre>

      <H>Spread va Rest ob'yektda</H>
      <Pre>{`// Spread — nusxa va birlashtirish
const defaults = { color: "blue", size: 10, opacity: 1 };
const custom = { ...defaults, color: "red", size: 20 };
// { color: "red", size: 20, opacity: 1 }

// Shallow copy (sirtqi nusxa)
const original = { name: "Ali", address: { city: "Toshkent" } };
const copy = { ...original };
copy.name = "Vali";           // original o'zgarmaydi
copy.address.city = "Buxoro"; // original O'ZGARADI! (nested ref)`}</Pre>
      <Note type="tip">
        <code>this</code> ob'yekt metodlarida ob'yektning o'zini bildiradi.
        Arrow funksiyalarda <code>this</code> ishlaMaydi — metod uchun oddiy
        funksiya yozish kerak.
      </Note>
    </TheoryWrap>
  );
}
