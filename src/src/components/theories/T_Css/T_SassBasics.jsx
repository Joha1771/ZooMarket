import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_SassBasics() {
  return (
    <TheoryWrap>
      <H>SASS nima?</H>
      <P>
        SASS (Syntactically Awesome Style Sheets) — CSS preprocessor. Oddiy
        CSS'ga qo'shimcha imkoniyatlar beradi: o'zgaruvchilar, nesting, mixin,
        funksiyalar. Brauzer faqat CSS tushunadi, shuning uchun SASS → CSS ga
        compile qilinadi.
      </P>
      <Table
        headers={["CSS", "SASS/SCSS"]}
        rows={[
          ["O'zgaruvchi yo'q", "$primary: #c85c1a;"],
          ["Nesting yo'q", "nav { a { color: white; } }"],
          ["Mixin yo'q", "@mixin flex-center { ... }"],
          ["Import zaif", "@use 'variables';"],
        ]}
      />

      <H>.scss vs .sass</H>
      <Pre>{`/* .scss — CSS sintaksisi (tavsiya etiladi) */
.card {
  background: $primary;
  &:hover {
    transform: scale(1.02);
  }
}

/* .sass — indent sintaksisi (eski) */
.card
  background: $primary
  &:hover
    transform: scale(1.02)`}</Pre>

      <H>O'zgaruvchilar</H>
      <Pre>{`/* Aniqlash */
$primary: #c85c1a;
$dark: #1a1814;
$font-mono: 'JetBrains Mono', monospace;
$radius-md: 8px;
$radius-lg: 16px;

/* Ishlatish */
.button {
  background: $primary;
  font-family: $font-mono;
  border-radius: $radius-md;
}

/* CSS custom properties bilan farq */
/* SASS o'zgaruvchilari compile vaqtida, */
/* CSS var() esa runtime'da ishlaydi */`}</Pre>

      <H>Nesting (ichma-ich)</H>
      <Pre>{`/* SCSS */
nav {
  background: $dark;
  padding: 16px;

  a {                      /* nav a */
    color: white;
    text-decoration: none;

    &:hover {              /* nav a:hover */
      color: $primary;
    }
  }

  &.sticky {               /* nav.sticky */
    position: fixed;
    top: 0;
  }
}

/* & — ota selectorni bildiradi */
.card {
  &__title { }         /* .card__title — BEM */
  &__body  { }
  &--featured { }      /* .card--featured */
}`}</Pre>

      <Note type="warn">
        Nesting'ni 3-4 darajadan oshirmaslik. Chuqur nesting — murakkab selector
        va sekin CSS.
      </Note>
      <Note type="tip">
        Live Sass Compiler (VS Code extension) — SCSS ni avtomatik CSS ga
        aylantiradi. Eng oson usul.
      </Note>
    </TheoryWrap>
  );
}
