import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Conditions() {
  return (
    <TheoryWrap>
      <H>if / else if / else</H>
      <P>
        Shartli ifodalar — ma'lum bir shart bajarilganda yoki bajarilmaganda
        turli kod bloklarini ishga tushiradi.
      </P>
      <Pre>{`const score = 75;

if (score >= 90) {
  console.log("A — Mukammal!");
} else if (score >= 80) {
  console.log("B — Yaxshi");
} else if (score >= 70) {
  console.log("C — Qoniqarli");
} else if (score >= 60) {
  console.log("D — Zaif");
} else {
  console.log("F — O'tmadi");
}
// → "C — Qoniqarli"`}</Pre>

      <H>Truthy va Falsy qiymatlar</H>
      <Table
        headers={["Falsy (false sifatida)", "Truthy (true sifatida)"]}
        rows={[
          ["false", "true"],
          ["0, -0, 0n", "Har qanday boshqa raqam"],
          ['"" (bo\'sh satr)', '"salom", " " (bo\'sh joy bor)'],
          ["null", "[] (bo'sh massiv)"],
          ["undefined", "{} (bo'sh ob'yekt)"],
          ["NaN", "Funksiyalar"],
        ]}
      />
      <Pre>{`// Truthy/falsy tekshirish
if (0) { }         // Ishlamaydi — 0 falsy
if ("") { }        // Ishlamaydi — bo'sh satr falsy
if (null) { }      // Ishlamaydi — null falsy

if (1) { }         // Ishlaydi — 1 truthy
if ("x") { }       // Ishlaydi — bo'sh emas
if ([]) { }        // Ishlaydi — bo'sh massiv ham truthy!`}</Pre>

      <H>switch</H>
      <Pre>{`const day = "dushanba";

switch (day) {
  case "dushanba":
  case "seshanba":
  case "chorshanba":
  case "payshanba":
  case "juma":
    console.log("Ish kuni");
    break;
  case "shanba":
  case "yakshanba":
    console.log("Dam olish");
    break;
  default:
    console.log("Noma'lum kun");
}`}</Pre>
      <Note type="warning">
        <code>break</code> ni unutmang! U yo'q bo'lsa — keyingi{" "}
        <code>case</code> ham ishlaydi ("fall-through"). Bu ba'zida ataylab
        ishlatiladi (yuqoridagi "ish kuni" misoli), lekin ko'pincha xato.
      </Note>

      <H>Ternary operator (?:)</H>
      <Pre>{`// Sintaksis: shart ? true_natija : false_natija

// if/else o'rniga:
const age = 20;
const status = age >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan";
console.log(status); // "Voyaga yetgan"

// Template literal ichida:
const n = 7;
console.log(\`\${n} — \${n % 2 === 0 ? "juft" : "toq"}\`);
// → "7 — toq"

// Zanjirli ternary (ko'p shartlar uchun):
const grade = score >= 90 ? "A"
  : score >= 80 ? "B"
  : score >= 70 ? "C"
  : "F";`}</Pre>

      <H>Mantiqiy operatorlar shart sifatida</H>
      <Pre>{`// || — fallback (standart qiymat)
const name = userInput || "Mehmon";
// userInput bo'sh yoki falsy bo'lsa "Mehmon"

// && — qisqa shart
const user = { isLoggedIn: true };
user.isLoggedIn && console.log("Xush kelibsiz!"); // Ishlaydi

// ?? — null/undefined uchun (nullish coalescing)
const val = null ?? "Default";   // "Default"
const val2 = 0 ?? "Default";     // 0 (0 falsy lekin null emas!)`}</Pre>

      <H>Qaysi biri qachon?</H>
      <Table
        headers={["Holat", "Tavsiya"]}
        rows={[
          ["2 ta natija, bir satr", "Ternary: x > 0 ? 'musbat' : 'manfiy'"],
          ["2-3 ta shart bloki", "if / else if / else"],
          ["Bir o'zgaruvchini ko'p qiymat", "switch"],
          ["Standart qiymat kerak", "|| yoki ??"],
          ["Shart + amal (hech narsa qaytarmasdan)", "if yoki &&"],
        ]}
      />
    </TheoryWrap>
  );
}
