import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_AsyncAwait() {
  return (
    <div className="flex flex-col gap-0">
      <H>async / await nima?</H>
      <P>
        <Code>async/await</Code> — Promise ni sinxron kod kabi yozish imkonini
        beruvchi ES2017 sintaksisi. Kod o'qilishi va debug qilish ancha
        osonlashadi.
      </P>

      <H>Promise vs async/await</H>
      <Pre>{`// Promise bilan
function getUser(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(res => res.json())
    .then(user => {
      return fetch(\`/api/posts/\${user.id}\`);
    })
    .then(res => res.json())
    .catch(err => console.error(err));
}

// async/await bilan — xuddi sinxron kabi o'qiladi
async function getUser(id) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);
    const user = await res.json();
    const postsRes = await fetch(\`/api/posts/\${user.id}\`);
    const posts = await postsRes.json();
    return posts;
  } catch (err) {
    console.error(err);
  }
}`}</Pre>

      <H>async funksiya xususiyatlari</H>
      <Table
        headers={["Xususiyat", "Izoh"]}
        rows={[
          ["Har doim Promise qaytaradi", "return 5 → Promise.resolve(5)"],
          ["await faqat async ichida", "Top-level await faqat ES modules da"],
          ["await Promise ni kutadi", "Non-Promise qiymatni ham qabul qiladi"],
          ["try/catch bilan xato ushlash", ".catch() o'rniga ishlaydi"],
        ]}
      />

      <Pre>{`async function example() {
  return 42; // aslida Promise.resolve(42) qaytaradi
}

example().then(val => console.log(val)); // 42

// await non-Promise ni ham qabul qiladi
async function demo() {
  const x = await 10; // await Promise.resolve(10) kabi
  console.log(x);     // 10
}`}</Pre>

      <H>Parallel vs Ketma-ket</H>
      <Pre>{`// ✗ Ketma-ket — sekin (3 soniya)
async function sequential() {
  const user = await fetchUser();     // 1 son kutadi
  const posts = await fetchPosts();   // 1 son kutadi
  const comments = await fetchComments(); // 1 son kutadi
  return { user, posts, comments };
}

// ✓ Parallel — tez (1 soniya)
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
  ]);
  return { user, posts, comments };
}`}</Pre>
      <Note type="warn">
        Bir-biriga bog'liq bo'lmagan so'rovlarni <strong>ketma-ket</strong>{" "}
        await qilmang — <Code>Promise.all()</Code> bilan parallel yuboring.
      </Note>

      <H>Xato ushlash strategiyalari</H>
      <Pre>{`// 1. try/catch — klassik usul
async function fetchData() {
  try {
    const res = await fetch("/api/data");
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    console.error("Xato:", err.message);
    return null; // fallback
  }
}

// 2. Helper funksiya — Go uslubida
async function safe(promise) {
  try {
    const data = await promise;
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

// Ishlatish
const [err, data] = await safe(fetchUser(1));
if (err) console.error(err);
else console.log(data);`}</Pre>

      <H>async for...of (asinxron iteratsiya)</H>
      <Pre>{`const ids = [1, 2, 3, 4, 5];

// Ketma-ket — har biri oldingi tugagach
for (const id of ids) {
  const user = await fetchUser(id);
  console.log(user.name);
}

// Parallel — hammasi bir vaqtda
const users = await Promise.all(ids.map(id => fetchUser(id)));`}</Pre>
      <Note type="tip">
        <Code>async/await</Code> ichida <Code>forEach</Code> ishlamaydi — u
        async callback ni kutmaydi. <Code>for...of</Code> yoki{" "}
        <Code>Promise.all(arr.map(...))</Code> ishlating.
      </Note>
    </div>
  );
}
