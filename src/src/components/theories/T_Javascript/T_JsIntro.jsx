import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_JsIntro() {
  return (
    <TheoryWrap>
      <H>JavaScript nima?</H>
      <P>
        JavaScript — brauzerda ishlaydigan yagona dasturlash tili. HTML sahifaga{" "}
        <strong>interaktivlik</strong> qo'shadi: tugma bosilganda nima bo'lishi,
        forma yuborilishi, animatsiya va ko'p narsalar — hammasi JavaScript.
      </P>
      <Table
        headers={["Texnologiya", "Vazifasi", "Misol"]}
        rows={[
          ["HTML", "Tuzilma (skeleton)", "Sarlavha, paragraf, tugma"],
          ["CSS", "Ko'rinish (dizayn)", "Ranglar, o'lchamlar, animatsiya"],
          ["JavaScript", "Xulq (interaktivlik)", "Klik, scroll, ajax, mantiq"],
        ]}
      />

      <H>JS tarixi</H>
      <Table
        headers={["Yil", "Voqea"]}
        rows={[
          ["1995", "Brendan Eich tomonidan 10 kunda yaratildi (Netscape)"],
          ["1997", "ECMAScript standarti (ES1) — barcha brauzerlar uchun"],
          ["2009", "ES5 — JSON, strict mode, Array metodlari"],
          ["2015", "ES6 (ES2015) — let/const, arrow functions, class, Promise"],
          ["2016+", "Har yil yangi versiya: ES2016, ES2017, ... ES2024"],
        ]}
      />

      <H>JS ni HTML ga qo'shish</H>
      <Pre>{`<!-- 1. Inline — to'g'ridan-to'g'ri tegda (yomon amaliyot) -->
<button onclick="alert('Bosildi!')">Bosing</button>

<!-- 2. Internal — script tegi ichida -->
<script>
  console.log('Salom dunyo!');
</script>

<!-- 3. External — alohida fayl (ENG YAXSHI) -->
<script src="main.js" defer></script>
<!-- defer — HTML yuklangandan keyin ishlaydi -->`}</Pre>
      <Note type="tip">
        <code>script</code> tegini <code>&lt;/body&gt;</code> dan oldin yoki{" "}
        <code>defer</code> atributi bilan <code>&lt;head&gt;</code> da qo'ying.
        Bu sahifaning tezroq yuklanishini ta'minlaydi.
      </Note>

      <H>console.log — asosiy vosita</H>
      <Pre>{`// Brauzer console ni ochish: F12 → Console tab

console.log("Salom!");           // Matn
console.log(42);                  // Raqam
console.log(true);                // Boolean
console.log([1, 2, 3]);          // Massiv
console.log({ name: "Ali" });    // Ob'yekt

console.warn("Ogohlantirish!"); // Sariq
console.error("Xato!");          // Qizil
console.table([{a:1}, {a:2}]);  // Jadval`}</Pre>

      <H>JavaScript qayerda ishlaydi?</H>
      <Table
        headers={["Muhit", "Engine", "Ishlatiladi"]}
        rows={[
          ["Chrome", "V8", "Web, Node.js ham V8 ishlatadi"],
          ["Firefox", "SpiderMonkey", "Web"],
          ["Safari", "JavaScriptCore", "Web, iOS"],
          ["Node.js", "V8", "Backend, server, CLI"],
          ["Deno", "V8", "Backend (TypeScript bilan)"],
        ]}
      />
      <Note type="info">
        JavaScript — dunyodagi <strong>eng ko'p ishlatiladigan</strong>{" "}
        dasturlash tili (GitHub statistikasi bo'yicha). Uni o'rganish frontend,
        backend (Node.js), mobile (React Native) va desktop (Electron) uchun
        foydali.
      </Note>
    </TheoryWrap>
  );
}
