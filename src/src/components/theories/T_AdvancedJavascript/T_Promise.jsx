import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_Promise() {
  return (
    <div className="flex flex-col gap-0">
      <H>Promise nima?</H>
      <P>
        <strong>Promise</strong> — kelajakda tugaydigan asinxron operatsiyani
        ifodalovchi ob'yekt. Callback "do'zaxidan" (callback hell) chiqish uchun
        ES6 da kiritilgan.
      </P>
      <Table
        headers={["Holat", "Ma'no", "O'zgartirish mumkinmi?"]}
        rows={[
          ["pending", "Hali tugamagan (boshlang'ich holat)", "Ha"],
          ["fulfilled", "Muvaffaqiyatli tugadi, qiymat bor", "Yo'q (final)"],
          ["rejected", "Xato bilan tugadi, sabab bor", "Yo'q (final)"],
        ]}
      />

      <H>Promise yaratish</H>
      <Pre>{`const promise = new Promise((resolve, reject) => {
  // Asinxron operatsiya
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Ma'lumot keldi!"); // fulfilled
    } else {
      reject(new Error("Xato yuz berdi!")); // rejected
    }
  }, 1000);
});`}</Pre>

      <H>.then() / .catch() / .finally()</H>
      <Pre>{`promise
  .then(data => {
    console.log(data); // "Ma'lumot keldi!"
    return data.toUpperCase(); // keyingi .then ga uzatiladi
  })
  .then(upperData => {
    console.log(upperData); // "MA'LUMOT KELDI!"
  })
  .catch(err => {
    console.error(err.message); // xato bo'lsa
  })
  .finally(() => {
    console.log("Har doim ishlaydi"); // loading ni o'chirish uchun
  });`}</Pre>
      <Note type="info">
        <Code>.then()</Code> yangi Promise qaytaradi — shuning uchun zanjirlab
        ketish mumkin. <Code>.catch()</Code> ={" "}
        <Code>.then(null, onRejected)</Code>.
      </Note>

      <H>Promise.all() — parallel so'rovlar</H>
      <Pre>{`const p1 = fetch("/api/users").then(r => r.json());
const p2 = fetch("/api/posts").then(r => r.json());
const p3 = fetch("/api/comments").then(r => r.json());

// Barchasi bir vaqtda ketadi — eng tezkor usul
Promise.all([p1, p2, p3])
  .then(([users, posts, comments]) => {
    console.log(users, posts, comments);
  })
  .catch(err => {
    // Bittasi reject bo'lsa — hammasi reject
    console.error(err);
  });`}</Pre>

      <H>Static metodlar qiyoslash</H>
      <Table
        headers={["Metod", "Qachon resolve", "Qachon reject", "Qaytaradi"]}
        rows={[
          [
            "Promise.all()",
            "Barchasi fulfilled",
            "Bittasi rejected",
            "Barcha qiymatlar massivi",
          ],
          [
            "Promise.allSettled()",
            "Barchasi tugaganda",
            "Hech qachon",
            "{status, value/reason}[]",
          ],
          [
            "Promise.race()",
            "Birinchisi tugaganda",
            "Birinchisi rejected bo'lsa",
            "Birinchi qiymat",
          ],
          [
            "Promise.any()",
            "Birinchisi fulfilled",
            "Barchasi rejected",
            "Birinchi qiymat",
          ],
        ]}
      />

      <H>Promise.allSettled() — xatoga chidamli</H>
      <Pre>{`Promise.allSettled([
  Promise.resolve("muvaffaqiyat"),
  Promise.reject("xato"),
  Promise.resolve("yana muvaffaqiyat"),
]).then(results => {
  results.forEach(result => {
    if (result.status === "fulfilled") {
      console.log("✓", result.value);
    } else {
      console.log("✗", result.reason);
    }
  });
});
// ✓ muvaffaqiyat
// ✗ xato
// ✓ yana muvaffaqiyat`}</Pre>

      <Note type="tip">
        Bir necha mustaqil so'rov yuborishda — <Code>Promise.all()</Code>. Biri
        xato bo'lsa ham davom etish kerak bo'lsa —{" "}
        <Code>Promise.allSettled()</Code>.
      </Note>
    </div>
  );
}
