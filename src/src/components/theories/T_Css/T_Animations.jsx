import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Animations() {
  return (
    <TheoryWrap>
      <H>CSS Animatsiyalar</H>
      <P>
        CSS animatsiyalar 2 qismdan iborat: <Code>@keyframes</Code> (qanday
        animatsiya?) va <Code>animation</Code> (qachon, qancha?)
      </P>
      <Pre>{`/* 1. Keyframes yaratish */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  0%   { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0);    opacity: 1; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-20px); }
}

/* 2. Elementga qo'llash */
.card {
  animation: fadeIn 0.5s ease forwards;
}`}</Pre>

      <H>Animation xususiyatlari</H>
      <Table
        headers={["Xususiyat", "Misol", "Ma'nosi"]}
        rows={[
          ["animation-name", "fadeIn", "Keyframes nomi"],
          ["animation-duration", "0.5s / 500ms", "Davomiyligi"],
          ["animation-delay", "0.2s", "Boshlanishdan oldin kutish"],
          ["animation-iteration-count", "1 / infinite / 3", "Takroriyat soni"],
          ["animation-direction", "normal / reverse / alternate", "Yo'nalish"],
          [
            "animation-timing-function",
            "ease / linear / ease-in-out",
            "Tezlik egri chizig'i",
          ],
          [
            "animation-fill-mode",
            "forwards / backwards / both",
            "Animatsiyadan oldin/keyin holat",
          ],
          ["animation-play-state", "running / paused", "Pauza qilish"],
        ]}
      />

      <Pre>{`/* Qisqacha yozish */
animation: name duration timing delay count direction fill-mode;

.element {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

/* Bir nechta animatsiya */
.element {
  animation:
    fadeIn 0.5s ease forwards,
    pulse 2s ease-in-out 0.5s infinite;
}

/* Hover da animatsiya */
.card:hover {
  animation: shake 0.3s ease;
}

/* Pauzalash */
.carousel:hover .track {
  animation-play-state: paused;
}`}</Pre>

      <H>Transition vs Animation</H>
      <Table
        headers={["Transition", "Animation"]}
        rows={[
          [
            "Holat o'zgarishida (hover, focus)",
            "Mustaqil, avtomatik boshlanishi mumkin",
          ],
          ["A dan B ga, faqat 2 holat", "Ko'p keyframe (0%, 50%, 100%)"],
          ["Oddiyroq, qisqa", "Murakkabroq, ko'p nazorat"],
          [
            ".card:hover { transform: scale(1.05); transition: 0.2s; }",
            "@keyframes bounce { ... }",
          ],
        ]}
      />

      <Note type="tip">
        Performance uchun faqat <Code>transform</Code> va <Code>opacity</Code>{" "}
        ni animatsiya qiling. width, height, top, left — sekin ("layout
        thrashing").
      </Note>
      <Note type="info">
        <Code>will-change: transform</Code> — brauzerga oldindan aytish, GPU ga
        o'tkazish. Faqat kerakli elementlarda ishlating.
      </Note>
    </TheoryWrap>
  );
}
