import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_MathDate() {
  return (
    <TheoryWrap>
      <H>Math ob'yekti</H>
      <P>
        <code>Math</code> — matematik funksiyalar va konstantalar to'plami.{" "}
        <code>new</code> bilan yaratilmaydi — to'g'ridan-to'g'ri ishlatiladi.
      </P>
      <Table
        headers={["Ifoda", "Natija", "Tavsif"]}
        rows={[
          ["Math.PI", "3.14159...", "Pi soni"],
          ["Math.E", "2.71828...", "Eyler soni"],
          ["Math.round(4.5)", "5", "Yahlitlash (standart)"],
          ["Math.floor(4.9)", "4", "Pastga yahlitlash"],
          ["Math.ceil(4.1)", "5", "Yuqoriga yahlitlash"],
          ["Math.trunc(4.9)", "4", "Kasr qismini kesish"],
          ["Math.abs(-7)", "7", "Mutlaq qiymat"],
          ["Math.max(3, 9, 1)", "9", "Eng katta"],
          ["Math.min(3, 9, 1)", "1", "Eng kichik"],
          ["Math.pow(2, 10)", "1024", "Daraja (2^10)"],
          ["Math.sqrt(16)", "4", "Kvadrat ildiz"],
          ["Math.cbrt(27)", "3", "Kub ildiz"],
          ["Math.log(Math.E)", "1", "Natural logarifm"],
          ["Math.random()", "[0, 1)", "Tasodifiy son"],
        ]}
      />
      <Pre>{`// Tasodifiy son [min, max] oralig'ida
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
random(1, 6);   // Zar: 1 dan 6 gacha
random(1, 100); // 1 dan 100 gacha

// Massivdan tasodifiy element
const fruits = ["olma", "banan", "nok", "uzum"];
const i = Math.floor(Math.random() * fruits.length);
fruits[i]; // tasodifiy meva

// Raqamni aniq kasr qismiga yaxlitlash
Math.round(3.14159 * 100) / 100; // 3.14
Number(3.14159.toFixed(2));       // 3.14`}</Pre>

      <H>Date ob'yekti</H>
      <Pre>{`// Hozirgi vaqt
const now = new Date();

// Aniq sana
const date1 = new Date("2024-01-15");
const date2 = new Date(2024, 0, 15); // Yil, oy (0=yanvar), kun
const date3 = new Date(1705276800000); // millisekund (timestamp)`}</Pre>

      <H>Date metodlari (get)</H>
      <Table
        headers={["Metod", "Natija", "Izoh"]}
        rows={[
          ["getFullYear()", "2024", "To'liq yil (4 xona)"],
          ["getMonth()", "0–11", "0=yanvar, 11=dekabr!"],
          ["getDate()", "1–31", "Oyning kuni"],
          ["getDay()", "0–6", "0=yakshanba, 6=shanba"],
          ["getHours()", "0–23", "Soat"],
          ["getMinutes()", "0–59", "Daqiqa"],
          ["getSeconds()", "0–59", "Soniya"],
          ["getTime()", "ms", "1970 dan millisekund"],
          ["Date.now()", "ms", "Hozirgi timestamp"],
        ]}
      />
      <Pre>{`const now = new Date();

// Sana formatlash
const year = now.getFullYear();
const month = now.getMonth() + 1; // +1 chunki 0-indexed
const day = now.getDate();
console.log(\`\${day}/\${month}/\${year}\`); // "15/1/2024"

// Yosh hisoblash
function getAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}
getAge(2000); // 24 (2024 yilda)

// Ikki sana orasidagi farq
const start = new Date("2024-01-01");
const end = new Date("2024-12-31");
const diff = end - start; // millisekund
const days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days + " kun"); // 365 kun`}</Pre>

      <H>Lokalizatsiya</H>
      <Pre>{`const now = new Date();

// O'zbek formatida
now.toLocaleDateString("uz-UZ"); // "15.01.2024"
now.toLocaleTimeString("uz-UZ"); // "14:30:00"

// Ingliz formatida
now.toLocaleDateString("en-US"); // "1/15/2024"

// Maxsus format
now.toLocaleDateString("ru-RU", {
  year: "numeric",
  month: "long",
  day: "numeric",
}); // "15 января 2024 г."`}</Pre>
      <Note type="warning">
        <code>getMonth()</code> 0 dan 11 gacha qaytaradi! Yanvar = 0, Dekabr =
        11. Foydalanuvchiga ko'rsatish uchun <code>getMonth() + 1</code> qiling.
      </Note>
    </TheoryWrap>
  );
}
