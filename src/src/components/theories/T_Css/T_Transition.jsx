import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Transition() {
  return (
    <TheoryWrap>
      <H>CSS Transition</H>
      <P>
        Transition — holat o'zgarishini silliq animatsiya qiladi.{" "}
        <Code>:hover</Code>, <Code>:focus</Code>,<Code>:active</Code>, class
        o'zgarganda ishlaydi.
      </P>
      <Pre>{`/* Sintaksis */
transition: property duration timing-function delay;

/* Misol */
.button {
  background: #c85c1a;
  transition: background 0.3s ease;
}
.button:hover {
  background: #8a3a0a;
}`}</Pre>

      <H>Transition xususiyatlari</H>
      <Table
        headers={["Xususiyat", "Qiymatlari", "Ma'nosi"]}
        rows={[
          [
            "transition-property",
            "all / background / transform",
            "Qaysi xususiyat animatsiya bo'ladi",
          ],
          ["transition-duration", "0.3s / 300ms", "Qancha davom etadi"],
          [
            "transition-timing-function",
            "ease / linear / ease-in / ease-out / ease-in-out",
            "Tezlik egri chizig'i",
          ],
          ["transition-delay", "0s / 0.1s", "Kechikish"],
        ]}
      />

      <Pre>{`/* Bir nechta xususiyat */
.card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.3s ease 0.1s;  /* opacity 0.1s kechikish bilan */
}

/* all — barcha xususiyat */
.card {
  transition: all 0.3s ease;  /* Lekin bu sekinroq */
}

/* Hover effektlar */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

/* Tugma "3D" effekti */
.btn {
  box-shadow: 0 5px 0 0 #8a3a0a;
  transition: all 0.1s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 0 0 #8a3a0a;
}
.btn:active {
  transform: translateY(3px);
  box-shadow: 0 2px 0 0 #8a3a0a;
}`}</Pre>

      <H>Timing Function (easing)</H>
      <Table
        headers={["Qiymat", "Tavsif", "Qachon"]}
        rows={[
          ["linear", "Tezlik o'zgarmaydi", "Spinner, progress bar"],
          [
            "ease (default)",
            "Sekin boshlaydi, tezlashadi, sekinlashadi",
            "Ko'pchilik UI",
          ],
          ["ease-in", "Sekin boshlaydi", "Exit animatsiya"],
          ["ease-out", "Sekin tugaydi", "Enter animatsiya"],
          ["ease-in-out", "Har ikki tomoni silliq", "Dialog, modal"],
          [
            "cubic-bezier(x1,y1,x2,y2)",
            "Maxsus egri chiziq",
            "Bouncy, elastic effektlar",
          ],
        ]}
      />

      <Note type="info">
        <Code>cubic-bezier(0.16, 1, 0.3, 1)</Code> — "spring" effekti.
        easings.net dan turli variantlarni toping.
      </Note>
    </TheoryWrap>
  );
}
