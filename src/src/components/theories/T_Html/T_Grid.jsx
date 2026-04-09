import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Grid() {
  return (
    <TheoryWrap>
      <H>CSS Grid nima?</H>
      <P>
        CSS Grid — ikki o'lchovli (2D) layout tizimi. Satr ham, ustun ham bir
        vaqtda boshqariladi. Flexbox 1D uchun, Grid 2D uchun — ikkalasini birga
        ishlating.
      </P>
      <Pre>{`/* Asosiy tuzilma */
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;  /* 3 ustun */
  grid-template-rows: 100px auto;        /* 2 qator */
  gap: 16px;
}`}</Pre>

      <H>Ustun va qator aniqlash</H>
      <Pre>{`/* Pixel */
grid-template-columns: 200px 300px 200px;

/* fr — fraction (mavjud joyning ulushi) */
grid-template-columns: 1fr 2fr 1fr;  /* 1:2:1 nisbat */

/* repeat() */
grid-template-columns: repeat(3, 1fr);  /* 3 ta teng ustun */
grid-template-columns: repeat(4, 200px);

  /* minmax() — minimum va maksimum */
grid-template-columns: repeat(3, minmax(200px, 1fr));

/* auto-fill va auto-fit (responsive) */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`}</Pre>

      <H>Elementlarni joylashitirish</H>
      <Pre>{`/* grid-column va grid-row */
.item {
  grid-column: 1 / 3;       /* 1-ustundan 3-ustungacha */
  grid-row: 1 / 2;

  grid-column: span 2;      /* 2 ustun egalla */
  grid-row: span 3;         /* 3 qator egalla */

  grid-area: 1 / 1 / 3 / 4; /* row-start / col-start / row-end / col-end */
}

/* Nomlangan maydonlar */
.container {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
header { grid-area: header; }
.sidebar { grid-area: sidebar; }
main { grid-area: main; }`}</Pre>

      <H>Grid vs Flexbox — qachon nima?</H>
      <Table
        headers={["Holat", "Flexbox", "Grid"]}
        rows={[
          ["Navigation linklari", "✓ (satr)", "—"],
          ["Kartalar qatori", "✓ (wrap)", "✓ (aniqroq)"],
          ["Sahifa layouti", "—", "✓ (header/sidebar/main)"],
          ["Forma elementlari", "✓", "✓"],
          ["Rasmlar galereyasi", "✓", "✓ (afzal)"],
          ["Markazlash", "✓ (oson)", "✓"],
        ]}
      />

      <Note type="tip">
        Responsive grid:{" "}
        <Code>grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))</Code>{" "}
        — media query siz ham ishlaydi!
      </Note>
    </TheoryWrap>
  );
}
