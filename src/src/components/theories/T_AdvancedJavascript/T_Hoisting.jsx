import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_Hoisting() {
  return (
    <div className="flex flex-col gap-0">
      <H>Hoisting nima?</H>
      <P>
        <strong>Hoisting</strong> — JavaScript interpretatori koddan oldin
        o'zgaruvchi va funksiyalarni xotirada joy ajratib, ularni "yuqoriga
        ko'taradi". Siz aslida e'lon qilishdan <em>oldin</em> ishlatishingiz
        mumkin bo'lgan ko'rinadi.
      </P>

      <H>Execution Context: 2 bosqich</H>
      <P>Har bir kod ishlaganda JavaScript 2 bosqichdan o'tadi:</P>
      <Table
        headers={["Bosqich", "Nima bo'ladi"]}
        rows={[
          [
            "1. Creation Phase",
            "var → undefined, function → to'liq saqlandi, let/const → TDZ (bo'sh)",
          ],
          [
            "2. Execution Phase",
            "Kod qatorma-qator bajariladi, qiymatlar o'rnatiladi",
          ],
        ]}
      />

      <H>var — hoisting bilan</H>
      <Pre>{`console.log(a); // undefined (xato emas!)
var a = 5;
console.log(a); // 5

// JS aslida shunday o'qiydi:
var a;           // creation phase — yuqoriga ko'tarildi
console.log(a);  // undefined
a = 5;           // execution phase
console.log(a);  // 5`}</Pre>

      <H>let / const — TDZ (Temporal Dead Zone)</H>
      <Pre>{`console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// let va const ham hoisted bo'ladi, LEKIN TDZ tufayli
// e'lon qatoriga yetmaguningizcha ishlatib bo'lmaydi`}</Pre>
      <Note type="danger">
        <Code>let</Code> va <Code>const</Code> bilan e'lon qilishdan oldin
        ishlatish har doim <Code>ReferenceError</Code> beradi.
      </Note>

      <H>Function hoisting</H>
      <Pre>{`// Function Declaration — to'liq hoisted
sayHi(); // "Salom!" — ishlaydi!
function sayHi() {
  console.log("Salom!");
}

// Function Expression — hoisted EMAS
greet(); // TypeError: greet is not a function
var greet = function() {
  console.log("Hi!");
};`}</Pre>

      <H>Qiyosiy jadval</H>
      <Table
        headers={["Tur", "Hoisted?", "E'londan oldin ishlatish"]}
        rows={[
          ["var", "✓ Ha", "undefined qaytaradi"],
          ["let", "✓ Ha (TDZ)", "ReferenceError"],
          ["const", "✓ Ha (TDZ)", "ReferenceError"],
          ["function declaration", "✓ To'liq", "Ishlaydi ✓"],
          ["function expression (var)", "✓ var sifatida", "TypeError"],
          ["arrow function (const)", "✓ Ha (TDZ)", "ReferenceError"],
        ]}
      />

      <Note type="tip">
        Zamonaviy kodda <Code>var</Code> o'rniga <Code>let</Code> va{" "}
        <Code>const</Code> ishlating — hoisting muammolaridan qochish uchun eng
        yaxshi yondashuv.
      </Note>
    </div>
  );
}
