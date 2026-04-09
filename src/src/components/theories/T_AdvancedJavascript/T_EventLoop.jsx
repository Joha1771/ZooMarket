import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_EventLoop() {
  return (
    <div className="flex flex-col gap-0">
      <H>JavaScript — single-threaded</H>
      <P>
        JavaScript bir vaqtda faqat bitta ishni bajaradi (single-threaded).
        Lekin setTimeout, fetch kabi async operatsiyalar bloklamaydi — buning
        sababi <strong>Event Loop</strong>.
      </P>

      <H>Asosiy tushunchalar</H>
      <Table
        headers={["Tushuncha", "Nima qiladi"]}
        rows={[
          [
            "Call Stack",
            "Hozir bajarilayotgan funksiyalar ketma-ketligi (LIFO)",
          ],
          [
            "Web APIs",
            "Browser tomonidan boshqariladi: setTimeout, fetch, DOM events",
          ],
          [
            "Callback Queue (Task Queue)",
            "Makrotasklar navbati: setTimeout, setInterval",
          ],
          [
            "Microtask Queue",
            "Mikrotasklar navbati: Promise.then, queueMicrotask",
          ],
          ["Event Loop", "Call Stack bo'shasa, navbatdan keyingi taskni oladi"],
        ]}
      />

      <H>Event Loop tartibi</H>
      <Pre>{`console.log("1 — sinxron");

setTimeout(() => {
  console.log("4 — macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 — microtask (Promise)");
});

console.log("2 — sinxron");

// Natija:
// 1 — sinxron
// 2 — sinxron
// 3 — microtask (Promise)   ← microtask birinchi!
// 4 — macrotask (setTimeout)`}</Pre>

      <H>Microtask vs Macrotask</H>
      <Table
        headers={["Tur", "Misollar", "Prioritet"]}
        rows={[
          [
            "Microtask",
            "Promise.then/catch/finally, queueMicrotask, MutationObserver",
            "Yuqori — stack bo'shaganda darhol",
          ],
          [
            "Macrotask",
            "setTimeout, setInterval, setImmediate, I/O, UI events",
            "Past — microtasklar tugagandan keyin",
          ],
        ]}
      />
      <Note type="info">
        Har bir macrotask dan keyin <strong>barcha</strong> microtasklar
        bajariladi, keyin yangi macrotask olinadi.
      </Note>

      <H>Murakkab misol</H>
      <Pre>{`console.log("start");

setTimeout(() => console.log("timeout 1"), 0);
setTimeout(() => console.log("timeout 2"), 0);

Promise.resolve()
  .then(() => {
    console.log("promise 1");
    return Promise.resolve();
  })
  .then(() => console.log("promise 2"));

console.log("end");

// Natija:
// start
// end
// promise 1
// promise 2
// timeout 1
// timeout 2`}</Pre>

      <H>Call Stack qanday ishlaydi</H>
      <Pre>{`function third() {
  console.log("third");
}

function second() {
  third();
  console.log("second");
}

function first() {
  second();
  console.log("first");
}

first();

// Call Stack ketma-ketligi:
// [first]
// [first, second]
// [first, second, third]
// [first, second]  ← third tugadi
// [first]          ← second tugadi
// []               ← first tugadi

// Natija: third → second → first`}</Pre>

      <H>Stack Overflow</H>
      <Pre>{`// Cheksiz rekursiya — stack overflow
function infinite() {
  return infinite(); // har safar stack ga qo'shiladi
}

try {
  infinite();
} catch (e) {
  console.log(e.message); // "Maximum call stack size exceeded"
}`}</Pre>

      <Note type="tip">
        Event Loop tushunish uchun asosiy qoida: <strong>sinxron kod</strong> →{" "}
        <strong>microtasklar</strong> (Promise) → <strong>macrotasklar</strong>{" "}
        (setTimeout) tartibida bajariladi.
      </Note>
    </div>
  );
}
