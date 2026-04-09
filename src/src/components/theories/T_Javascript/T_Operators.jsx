import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Operators() {
  return (
    <TheoryWrap>
      <H>Arifmetik operatorlar</H>
      <Table
        headers={["Operator", "Nomi", "Misol", "Natija"]}
        rows={[
          ["+", "Qo'shish", "5 + 3", "8"],
          ["-", "Ayirish", "10 - 4", "6"],
          ["*", "Ko'paytirish", "6 * 7", "42"],
          ["/", "Bo'lish", "15 / 4", "3.75"],
          ["%", "Qoldiq (modulo)", "17 % 5", "2"],
          ["**", "Daraja", "2 ** 10", "1024"],
          ["++", "Bittaga oshirish", "i++", "i = i + 1"],
          ["--", "Bittaga kamaytirish", "i--", "i = i - 1"],
        ]}
      />
      <Pre>{`const a = 17, b = 5;

console.log(a + b);   // 22
console.log(a - b);   // 12
console.log(a * b);   // 85
console.log(a / b);   // 3.4
console.log(a % b);   // 2  ← qoldiq
console.log(a ** b);  // 1419857  ← 17^5

// % (modulo) — juft/toq tekshirish
const isEven = n => n % 2 === 0;
console.log(isEven(8));  // true
console.log(isEven(7));  // false`}</Pre>

      <H>Taqqoslash operatorlari</H>
      <Table
        headers={["Operator", "Nomi", "Misol", "Natija"]}
        rows={[
          ["==", "Teng (loose)", '5 == "5"', "true ⚠️"],
          ["===", "Qat'iy teng (strict)", '5 === "5"', "false ✓"],
          ["!=", "Teng emas (loose)", '5 != "5"', "false ⚠️"],
          ["!==", "Qat'iy teng emas", '5 !== "5"', "true ✓"],
          [">", "Katta", "10 > 3", "true"],
          ["<", "Kichik", "3 < 10", "true"],
          [">=", "Katta yoki teng", "5 >= 5", "true"],
          ["<=", "Kichik yoki teng", "4 <= 5", "true"],
        ]}
      />
      <Note type="warning">
        Har doim <code>===</code> (strict equality) ishlating! <code>==</code>{" "}
        tip konversiyasi qiladi va kutilmagan natijalar beradi:{" "}
        <code>0 == false → true</code>, <code>"" == false → true</code>.
      </Note>

      <H>Mantiqiy operatorlar</H>
      <Pre>{`// && (AND) — ikkalasi ham true bo'lsa true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(5 > 3 && 2 < 4); // true

// || (OR) — bittasi true bo'lsa true
console.log(true || false);   // true
console.log(false || false);  // false
console.log(5 > 10 || 2 < 4); // true

// ! (NOT) — teskarisi
console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true (0 → falsy)

// Short-circuit evaluation
const name = "" || "Mehmon";   // "Mehmon" — bo'sh satr falsy
const user = null ?? "Default"; // "Default" — ?? faqat null/undefined tekshiradi`}</Pre>

      <H>O'zlashtirish operatorlari</H>
      <Table
        headers={["Operator", "Misol", "Teng holat"]}
        rows={[
          ["=", "x = 5", "x = 5"],
          ["+=", "x += 3", "x = x + 3"],
          ["-=", "x -= 2", "x = x - 2"],
          ["*=", "x *= 4", "x = x * 4"],
          ["/=", "x /= 2", "x = x / 2"],
          ["%=", "x %= 3", "x = x % 3"],
          ["**=", "x **= 2", "x = x ** 2"],
          ["??=", "x ??= 5", "x = x ?? 5"],
        ]}
      />
      <Pre>{`let score = 0;
score += 10;  // 10
score += 5;   // 15
score *= 2;   // 30
score -= 1;   // 29
console.log(score); // 29`}</Pre>

      <H>typeof va instanceof</H>
      <Pre>{`typeof "salom"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" ← tarixiy xato
typeof []         // "object"
typeof {}         // "object"

// instanceof — ob'yekt turini tekshirish
[] instanceof Array   // true
{} instanceof Object  // true
"x" instanceof String // false (primitiv)`}</Pre>
    </TheoryWrap>
  );
}
