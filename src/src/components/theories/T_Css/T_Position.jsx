import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Position() {
  return (
    <TheoryWrap>
      <H>CSS Position nima?</H>
      <P>
        Position — elementni sahifada qayerga qo'yilishini belgilaydi. 5 qiymati
        bor.
        <Code>top</Code>, <Code>right</Code>, <Code>bottom</Code>,{" "}
        <Code>left</Code> — aniq koordinata.
      </P>
      <Table
        headers={["Qiymat", "Referens", "Oqimdan chiqadimi?"]}
        rows={[
          ["static (default)", "Normal oqim", "Yo'q"],
          ["relative", "O'zining normal pozitsiyasi", "Yo'q (joy saqlanadi)"],
          ["absolute", "Eng yaqin positioned ota", "Ha"],
          ["fixed", "Viewport (brauzer oynasi)", "Ha"],
          ["sticky", "Scroll bilan + viewport", "Yo'q (hybrid)"],
        ]}
      />

      <Pre>{`/* relative — o'ziga nisbatan siljish */
.box {
  position: relative;
  top: 10px;     /* 10px pastga */
  left: 20px;    /* 20px o'ngga */
}

/* absolute — positioned ota ga nisbatan */
.parent { position: relative; }  /* ← bu muhim! */
.child {
  position: absolute;
  top: 0;
  right: 0;   /* Ota elementning yuqori o'ng burchagi */
}

/* fixed — scroll bilan harakatlanmaydi */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* sticky — scroll qilganda "yopishib qoladi" */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
}`}</Pre>

      <H>z-index — qatlam tartibi</H>
      <Pre>{`/* Yuqori z-index = ustda */
.modal    { z-index: 1000; }
.overlay  { z-index: 999; }
.navbar   { z-index: 100; }
.dropdown { z-index: 50; }
.content  { z-index: 1; }

/* z-index faqat position: non-static elementlarda ishlaydi! */`}</Pre>

      <Note type="warn">
        absolute elementning ota elementi <Code>position: relative</Code>{" "}
        bo'lmaса, u butun sahifaga nisbatan joylashadi. Bu eng ko'p uchraydigan
        xato.
      </Note>
      <Note type="tip">
        sticky uchun ota element overflow: hidden bo'lmasligi kerak — aks holda
        ishlamaydi.
      </Note>
    </TheoryWrap>
  );
}
