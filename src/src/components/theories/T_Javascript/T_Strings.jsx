import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Strings() {
  return (
    <TheoryWrap>
      <H>String (Matn) yaratish</H>
      <Pre>{`// Uch xil tirnoq
const s1 = 'Oddiy tirnoq';
const s2 = "Qo'sh tirnoq";
const s3 = \`Template literal\`; // Backtick

// Template literal — interpolatsiya
const name = "Ali";
const age = 25;
const msg = \`Salom, \${name}! Siz \${age} yoshdasiz.\`;
// "Salom, Ali! Siz 25 yoshdasiz."

// Ko'p qatorli satr
const poem = \`
  Birinchi qator
  Ikkinchi qator
  Uchinchi qator
\`;`}</Pre>

      <H>Asosiy string xususiyatlari va metodlari</H>
      <Table
        headers={["Metod/Xususiyat", "Vazifasi", "Misol → Natija"]}
        rows={[
          [".length", "Belgilar soni", '"salom".length → 5'],
          [
            ".toUpperCase()",
            "Katta harflarga",
            '"salom".toUpperCase() → "SALOM"',
          ],
          [
            ".toLowerCase()",
            "Kichik harflarga",
            '"SALOM".toLowerCase() → "salom"',
          ],
          [".trim()", "Bo'shliq olib tashlash", '"  hi  ".trim() → "hi"'],
          [
            ".includes(sub)",
            "Bor/yo'q (boolean)",
            '"salom".includes("alo") → true',
          ],
          [
            ".startsWith(s)",
            "Boshlashini tekshirish",
            '"salom".startsWith("sal") → true',
          ],
          [
            ".endsWith(s)",
            "Tugashini tekshirish",
            '"salom".endsWith("lom") → true',
          ],
          [".indexOf(sub)", "Indeksini topish", '"salom".indexOf("lo") → 2'],
          [".slice(s, e)", "Qism olish", '"salom".slice(1, 4) → "alo"'],
          [
            ".replace(s, r)",
            "Almashtirish",
            '"salom".replace("lo", "LO") → "saLOm"',
          ],
          [
            ".split(sep)",
            "Massivga bo'lish",
            '"a,b,c".split(",") → ["a","b","c"]',
          ],
          [".repeat(n)", "Takrorlash", '"ab".repeat(3) → "ababab"'],
          [
            ".padStart(n, c)",
            "Oldiga to'ldirish",
            '"5".padStart(3, "0") → "005"',
          ],
        ]}
      />
      <Pre>{`const str = "JavaScript juda zo'r!";

// slice — indeksdan indeksgacha
str.slice(0, 10);   // "JavaScript"
str.slice(-4);      // "zo'r!" ← oxiridan

// replaceAll — barcha mosliklarni almashtirish
"ha ha ha".replaceAll("ha", "yo"); // "yo yo yo"

// Metodlarni zanjirlab ishlatish
"  Salom Dunyo  "
  .trim()
  .toLowerCase()
  .replace("dunyo", "JS");
// → "salom js"`}</Pre>

      <H>Satr — Massivga o'xshash</H>
      <Pre>{`const word = "salom";

// Indeks orqali belgi olish
word[0];     // "s"
word[4];     // "m"
word.at(-1); // "m" ← oxirgisi

// for...of bilan aylanish
for (const char of word) {
  console.log(char);
}
// s, a, l, o, m

// Massivga aylantirish
const chars = [...word];       // ["s","a","l","o","m"]
const chars2 = word.split(""); // xuddi shunday`}</Pre>

      <H>Escape belgilar</H>
      <Table
        headers={["Belgi", "Ma'nosi"]}
        rows={[
          ["\\n", "Yangi qator (newline)"],
          ["\\t", "Tab bo'shliq"],
          ['\\"', "Qo'sh tirnoq ichida tirnoq"],
          ["\\'", "Oddiy tirnoq ichida tirnoq"],
          ["\\\\", "Teskari slash"],
          ["\\u0041", "Unicode belgi (A)"],
        ]}
      />
      <Note type="tip">
        Template literal (<code>`backtick`</code>) — zamonaviy va qulay. Ko'p
        qatorli satr va interpolatsiya (<code>${`{}`}</code>) uchun ishlating.
        Eski <code>+</code> bilan satr qo'shish o'rniga.
      </Note>
    </TheoryWrap>
  );
}
