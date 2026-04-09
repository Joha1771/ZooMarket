import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Transforms() {
  return (
    <TheoryWrap>
      <H>CSS Transform</H>
      <P>
        Transform — elementni vizual jihatdan o'zgartiradi. Hujjat oqimiga
        ta'sir qilmaydi (joy saqlanadi).
      </P>
      <Pre>{`/* translate — ko'chirish */
transform: translate(50px, 100px);     /* X va Y */
transform: translateX(50px);
transform: translateY(-20px);
transform: translate(-50%, -50%);      /* Markazlash uchun */

/* scale — kattalashtirish/kichraytirish */
transform: scale(1.5);         /* 1.5 marta katta */
transform: scale(0.8);         /* 0.8 marta kichik */
transform: scaleX(2);          /* Faqat kenglik */
transform: scale(1, -1);       /* Teskari (oyna) */

/* rotate — aylantirish */
transform: rotate(45deg);      /* Soat yo'nalishida */
transform: rotate(-90deg);     /* Aksi */
transform: rotateX(180deg);    /* 3D — gorizontal o'q */
transform: rotateY(180deg);    /* 3D — vertikal o'q */

/* skew — qiyalashtirish */
transform: skew(10deg, 5deg);
transform: skewX(20deg);

/* Bir nechta birga */
transform: translate(-50%, -50%) rotate(45deg) scale(1.2);`}</Pre>

      <H>transform-origin — aylantirish markazi</H>
      <Pre>{`/* Default: center center */
transform-origin: top left;    /* Yuqori chap burchakdan */
transform-origin: 50% 50%;     /* Markazdan (default) */
transform-origin: 0 0;         /* Yuqori chap */
transform-origin: right bottom;`}</Pre>

      <H>box-shadow va text-shadow</H>
      <Pre>{`/* box-shadow: offset-x offset-y blur spread color */
box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
box-shadow: 0 4px 12px rgba(0,0,0,0.15);  /* "Floating" effekt */
box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);  /* Ichki soya */
box-shadow:
  0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24);  /* Material Design soya */

/* Rang soyasi */
box-shadow: 0 8px 0 0 #8a3a0a;  /* "3D tugma" effekti */

/* text-shadow: offset-x offset-y blur color */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);`}</Pre>

      <H>Filter</H>
      <Pre>{`/* Rasm filtrlari */
filter: blur(4px);
filter: brightness(1.2);      /* Yorqinlashtirish */
filter: contrast(1.5);        /* Kontrast */
filter: grayscale(100%);      /* Kulrang */
filter: sepia(50%);           /* Sariq ton */
filter: hue-rotate(90deg);    /* Rang o'zgartirish */
filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.3));`}</Pre>

      <Note>
        Transform va filter — zamonaviy CSS xususiyatlari. Barcha zamonaviy
        brauzerlarda ishlaydi. Animatsiyalar uchun juda qulay.
      </Note>
    </TheoryWrap>
  );
}
