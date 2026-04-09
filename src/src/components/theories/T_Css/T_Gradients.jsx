import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_Gradients() {
  return (
    <TheoryWrap>
      <H>CSS Gradientlar</H>
      <P>
        Gradient — ikki yoki undan ko'p ranglar orasidagi silliq o'tish. CSS da
        gradient <strong>rasm sifatida</strong> ishlaydi va{" "}
        <code>background-image</code> xususiyatida ishlatiladi.
      </P>

      <H>linear-gradient — chiziqli gradient</H>
      <Pre>{`/* Pastdan yuqoriga (standart yo'nalish) */
background: linear-gradient(red, blue);

/* Yo'nalish bilan */
background: linear-gradient(to right, red, blue);
background: linear-gradient(to bottom right, red, blue);
background: linear-gradient(45deg, red, blue);

/* Ko'p ranglar */
background: linear-gradient(to right, #ff6b6b, #ffd93d, #6bcb77);

/* Rang to'xtash nuqtalari (color stops) */
background: linear-gradient(to right,
  red 0%,
  red 30%,
  blue 30%,
  blue 100%
);`}</Pre>

      <H>radial-gradient — radial gradient</H>
      <Pre>{`/* Markazdan tashqariga */
background: radial-gradient(circle, #ff6b6b, #4d96ff);

/* Ellips (standart) */
background: radial-gradient(ellipse, yellow, orange, red);

/* Pozitsiya bilan */
background: radial-gradient(circle at top left, white, black);
background: radial-gradient(circle at 30% 70%, cyan, purple);`}</Pre>

      <H>conic-gradient — konus gradient</H>
      <Pre>{`/* Aylana bo'ylab */
background: conic-gradient(red, yellow, green, blue, red);

/* Pie chart */
background: conic-gradient(
  #ff6b6b 0deg 120deg,
  #ffd93d 120deg 240deg,
  #6bcb77 240deg 360deg
);`}</Pre>

      <H>Fon xususiyatlari (Background properties)</H>
      <Table
        headers={["Xususiyat", "Qiymatlari", "Vazifasi"]}
        rows={[
          ["background-color", "#hex, rgb(), hsl()", "Fon rangi"],
          ["background-image", "url(), gradient", "Fon rasmi yoki gradient"],
          ["background-size", "cover, contain, %px", "Rasm o'lchami"],
          ["background-position", "center, top left, % px", "Rasm joylashuvi"],
          [
            "background-repeat",
            "no-repeat, repeat-x, repeat-y",
            "Takrorlanish",
          ],
          ["background-attachment", "fixed, scroll, local", "Scroll xulqi"],
        ]}
      />
      <Pre>{`/* Ko'p foydali fon kombinatsiyasi */
.hero {
  background-image: url("hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Gradient + rasm qatlami */
.overlay {
  background-image:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url("photo.jpg");
  background-size: cover;
}

/* Qisqacha yozish (shorthand) */
.box {
  background: #f0f0f0 url("pattern.png") center/cover no-repeat;
}`}</Pre>

      <H>CSS o'zgaruvchilar (Custom Properties)</H>
      <P>
        CSS o'zgaruvchilar ranglar, o'lchamlar va boshqa qiymatlarni bir joyda
        saqlash imkonini beradi. <code>--</code> prefiksi bilan e'lon qilinadi.
      </P>
      <Pre>{`:root {
  --primary: #c85c1a;
  --secondary: #185fa5;
  --bg: #f2efe8;
  --text: #1a1814;
  --radius: 8px;
  --shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.button {
  background: var(--primary);
  color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1814;
    --text: #f2efe8;
  }
}`}</Pre>
      <Note type="tip">
        Gradientni CSS da background shorthand orqali yozganda{" "}
        <code>background-color</code> bilan birgalikda ishlaydi. Agar gradient
        yuklanmasa, rang fallback sifatida ko'rinadi.
      </Note>
      <Note type="info">
        <strong>HSL ranglar</strong> gradient uchun qulay:{" "}
        <code>hsl(200, 80%, 50%)</code> — Hue (rang), Saturation (to'yinganlik),
        Lightness (yorqinlik). Gradientnng o'rtasidagi rangni hisoblash osonroq.
      </Note>
    </TheoryWrap>
  );
}
