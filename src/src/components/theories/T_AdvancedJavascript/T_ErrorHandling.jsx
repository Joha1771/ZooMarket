import { H, P, Code, Pre, Table, Note } from "../../../Shared/TheoryUi.jsx";

export function T_ErrorHandling() {
  return (
    <div className="flex flex-col gap-0">
      <H>Xato turlari</H>
      <P>
        JavaScript da bir necha o'rnatilgan xato turlari mavjud. Har bir tur
        muayyan holat uchun ishlatiladi.
      </P>
      <Table
        headers={["Xato turi", "Qachon chiqadi", "Misol"]}
        rows={[
          ["SyntaxError", "Kod sintaksis noto'g'ri", "let x = ;"],
          [
            "ReferenceError",
            "E'lon qilinmagan o'zgaruvchi",
            "console.log(x) // x yo'q",
          ],
          ["TypeError", "Noto'g'ri tur bilan operatsiya", "null.name"],
          ["RangeError", "Ruxsat etilgan chegaradan chiqish", "new Array(-1)"],
          ["URIError", "URI funksiyasi noto'g'ri", "decodeURI('%')"],
        ]}
      />

      <H>try / catch / finally</H>
      <Pre>{`try {
  // Xato chiqarishi mumkin bo'lgan kod
  const data = JSON.parse("{ noto'g'ri json }");
  console.log(data);
} catch (error) {
  // Xato ushlandi
  console.error("Xato:", error.message);
  console.log("Tur:", error.name); // SyntaxError
} finally {
  // Har doim — xato bo'lsa ham, bo'lmasa ham
  console.log("Blok tugadi");
}`}</Pre>

      <H>Error ob'yekti xususiyatlari</H>
      <Pre>{`try {
  undeclaredVariable;
} catch (err) {
  err.name;    // "ReferenceError"
  err.message; // "undeclaredVariable is not defined"
  err.stack;   // To'liq stack trace (qaysi qatorda bo'lganini ko'rsatadi)
}`}</Pre>

      <H>throw — o'z xatongizni tashlash</H>
      <Pre>{`function divide(a, b) {
  if (b === 0) {
    throw new Error("Nolga bo'lish mumkin emas!");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (err) {
  console.log(err.message); // "Nolga bo'lish mumkin emas!"
}

// Istalgan narsani throw qilish mumkin
throw "oddiy string xato";
throw 42;
throw { code: 404, message: "Topilmadi" };`}</Pre>

      <H>Custom Error sinflari</H>
      <Pre>{`class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

function validateAge(age) {
  if (typeof age !== "number") {
    throw new ValidationError("Yosh son bo'lishi kerak", "age");
  }
  if (age < 0 || age > 150) {
    throw new ValidationError("Noto'g'ri yosh", "age");
  }
}

try {
  validateAge("o'n besh");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(\`Validatsiya xatosi [\${err.field}]: \${err.message}\`);
  } else {
    throw err; // boshqa xatolarni yuqoriga uzatish
  }
}`}</Pre>

      <H>Async xatolarni ushlash</H>
      <Pre>{`// Promise bilan
fetch("/api/data")
  .then(res => res.json())
  .catch(err => console.error("Tarmoq xatosi:", err));

// async/await bilan
async function loadData() {
  try {
    const res = await fetch("/api/data");
    if (!res.ok) {
      throw new NetworkError("So'rov muvaffaqiyatsiz", res.status);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    if (err instanceof NetworkError) {
      console.log("Status:", err.statusCode);
    }
    throw err;
  }
}`}</Pre>

      <Note type="tip">
        <Code>finally</Code> bloki resurslarni yopish (DB ulanish, file) uchun
        juda qulay — xato bo'lsin yoki bo'lmasin bajariladi.
      </Note>
      <Note type="warn">
        Bo'sh <Code>catch</Code> bloki xatolarni "yutib yuboradi" — debug qilish
        qiyinlashadi. Har doim xatoni log qiling yoki qayta throw qiling.
      </Note>
    </div>
  );
}
