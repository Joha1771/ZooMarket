import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_Closure() {
  return (
    <div className="flex flex-col gap-0">
      <H>Scope nima?</H>
      <P>
        <strong>Scope</strong> — o'zgaruvchiga qaysi joydan murojaat qilish
        mumkinligini belgilovchi "ko'rinish doirasi". JavaScript da 3 xil scope
        bor.
      </P>
      <Table
        headers={["Scope turi", "Qayerda e'lon", "Qayerdan ko'rinadi"]}
        rows={[
          ["Global", "Funksiya tashqarisida", "Hamma joydan"],
          ["Function (Local)", "Funksiya ichida", "Faqat shu funksiyadan"],
          ["Block", "{ } ichida (let/const)", "Faqat shu blokdan"],
        ]}
      />

      <H>Scope zanjiri (Scope Chain)</H>
      <Pre>{`const global = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(innerVar);  // "inner"   — o'z scopedan
    console.log(outerVar);  // "outer"   — tashqi scopedan
    console.log(global);    // "global"  — global scopedan
  }

  inner();
  // console.log(innerVar); // ReferenceError — ko'rinmaydi
}`}</Pre>
      <Note type="info">
        Ichki funksiya tashqi funksiyaning o'zgaruvchilarini ko'radi, lekin aksi
        to'g'ri emas.
      </Note>

      <H>Closure nima?</H>
      <P>
        <strong>Closure</strong> — funksiya o'zi yaratilgan scope dagi
        o'zgaruvchilarni "eslab qolishi". Tashqi funksiya tugagandan keyin ham
        ichki funksiya tashqi o'zgaruvchilarga murojaat qila oladi.
      </P>
      <Pre>{`function makeCounter() {
  let count = 0;           // tashqi o'zgaruvchi

  return function() {      // closure — count ni eslab qoladi
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count o'zgaruvchisi tashqaridan ko'rinmaydi, lekin saqlanib turibdi`}</Pre>

      <H>Closure — amaliy misollar</H>
      <Pre>{`// 1. Ma'lumotni yashirish (encapsulation)
function createWallet(initialBalance) {
  let balance = initialBalance; // private

  return {
    deposit: (sum) => { balance += sum; },
    withdraw: (sum) => { balance -= sum; },
    getBalance: () => balance,
  };
}
const wallet = createWallet(1000);
wallet.deposit(500);
console.log(wallet.getBalance()); // 1500

// 2. Funksiya fabrikasi
function multiplier(factor) {
  return (number) => number * factor;
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15`}</Pre>

      <H>Klassik loop muammosi</H>
      <Pre>{`// ✗ Noto'g'ri — var hoisting tufayli
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// ✓ To'g'ri — let block scope
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}`}</Pre>
      <Note type="tip">
        Loop da <Code>let</Code> ishlatilsa, har iteratsiyada yangi scope
        yaratiladi — closure muammosi yo'qoladi.
      </Note>
    </div>
  );
}
