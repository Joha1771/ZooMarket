import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";

export function T_BoxModel() {
  return (
    <TheoryWrap>
      <H>Box Model nima?</H>
      <P>
        CSS'da har bir element to'rtburchak "quti" (box). Bu qutilar 4 qatlamdan
        iborat:
        <strong> content → padding → border → margin</strong>. Tashqi qatlam
        kattaroq.
      </P>
      <Pre>{`┌─────────────── MARGIN ───────────────┐
│  ┌──────────── BORDER ─────────────┐  │
│  │  ┌─────── PADDING ───────────┐  │  │
│  │  │  ┌──── CONTENT ─────────┐ │  │  │
│  │  │  │   Matn/Rasm/Bola     │ │  │  │
│  │  │  └──────────────────────┘ │  │  │
│  │  └───────────────────────────┘  │  │
│  └─────────────────────────────────┘  │
└────────────────────────────────────────┘`}</Pre>

      <H>Har bir qatlam</H>
      <Table
        headers={["Qatlam", "CSS xususiyat", "Ma'nosi"]}
        rows={[
          ["Content", "width, height", "Asosiy kontent maydoni"],
          [
            "Padding",
            "padding: 10px 20px",
            "Kontent bilan border orasidagi ichki bo'shliq",
          ],
          ["Border", "border: 2px solid red", "Chegara chizig'i"],
          [
            "Margin",
            "margin: 20px auto",
            "Tashqi bo'shliq — boshqa elementlardan uzoqlik",
          ],
        ]}
      />

      <H>box-sizing — muhim farq!</H>
      <Pre>{`/* Default (content-box): */
/* width = faqat content kengligi */
/* Haqiqiy kenglik = width + padding + border */
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Haqiqiy kenglik: 200 + 40 + 4 = 244px! */
}

/* Yaxshi yozish (border-box): */
/* width = content + padding + border */
* {
  box-sizing: border-box;
}
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Haqiqiy kenglik: 200px (o'zgarmaydi!) */
}`}</Pre>

      <H>Padding va Margin qisqacha yozish</H>
      <Pre>{`/* 1 qiymat — to'rt tomon */
padding: 20px;                /* ↑→↓← = 20px */

/* 2 qiymat — vertikal | gorizontal */
padding: 10px 20px;           /* ↑↓=10px, →←=20px */

/* 3 qiymat — yuqori | gorizontal | past */
padding: 10px 20px 30px;      /* ↑=10, →←=20, ↓=30 */

/* 4 qiymat — soat yo'nalishida */
padding: 10px 20px 30px 40px; /* ↑ → ↓ ← */

/* Markazlash */
margin: 0 auto;               /* Gorizontal markazlash */`}</Pre>

      <Note type="tip">
        Proyekt boshida doim{" "}
        <Code>
          * {"{"} box-sizing: border-box; {"}"}
        </Code>{" "}
        qo'shing. Bu eng keng tarqalgan CSS "reset".
      </Note>
      <Note type="info">
        Margin collapse: ikkita elementning vertikal marginlari qo'shilmaydi,
        eng katta biri qoladi. Gorizontal marginda bu bo'lmaydi.
      </Note>
    </TheoryWrap>
  );
}
