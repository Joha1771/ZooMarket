import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_SassAdvanced() {
  return (
    <TheoryWrap>
      <H>Mixins</H>
      <P>Mixin — qayta ishlatiladigan CSS bloklari. Funksiyaga o'xshaydi.</P>
      <Pre>{`/* Mixin aniqlash */
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Parametrli mixin */
@mixin button($bg, $color: white, $radius: 8px) {
  background: $bg;
  color: $color;
  border-radius: $radius;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

/* Ishlatish */
.hero {
  @include flex-center;
  min-height: 100vh;
}

.btn-primary {
  @include button(#c85c1a);
}

.btn-dark {
  @include button(#1a1814, white, 4px);
}`}</Pre>

      <H>@extend — kengaytirish</H>
      <Pre>{`/* Base klass */
%card-base {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Kengaytirish */
.product-card {
  @extend %card-base;
  border: 1px solid #eee;
}

.blog-card {
  @extend %card-base;
  display: flex;
  gap: 16px;
}`}</Pre>

      <H>7-1 Fayl strukturasi</H>
      <Pre>{`sass/
├── abstracts/
│   ├── _variables.scss   /* Barcha o'zgaruvchilar */
│   ├── _mixins.scss      /* Barcha mixinlar */
│   └── _functions.scss
├── base/
│   ├── _reset.scss       /* CSS reset */
│   └── _typography.scss  /* Shrift stillari */
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   └── _navbar.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
├── pages/
│   ├── _home.scss
│   └── _about.scss
├── themes/
│   └── _dark.scss
├── vendors/              /* Tashqi kutubxonalar */
└── main.scss             /* Hamma narsani import qiladi */`}</Pre>

      <Pre>{`/* main.scss */
@use 'abstracts/variables';
@use 'abstracts/mixins';
@use 'base/reset';
@use 'components/button';
@use 'layout/header';`}</Pre>

      <Note type="info">
        @use (yangi) vs @import (eski). @use namespace bilan import qiladi,
        namespace collision'ni oldini oladi. Yangi loyihalarda @use ishlating.
      </Note>
    </TheoryWrap>
  );
}
