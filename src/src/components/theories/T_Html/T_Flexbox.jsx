import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Flexbox() {
  return (
    <TheoryWrap>
      <H>Flexbox nima?</H>
      <P>
        Flexbox (Flexible Box) — elementlarni satr yoki ustun bo'ylab
        joylashtirishning qulay usuli.
        <Code>display: flex</Code> — ota elementga qo'shiladi va bolalar
        avtomatik "flex item" ga aylanadi.
      </P>
      <Pre>{`/* Asosiy tuzilma */
.container {              /* Flex container (ota) */
  display: flex;
}

.item {                   /* Flex item (bolalar) */
  /* avtomatik flex item bo'ladi */
}`}</Pre>

      <H>Container xususiyatlari (ota element)</H>
      <Table
        headers={["Xususiyat", "Qiymatlar", "Ma'nosi"]}
        rows={[
          [
            "flex-direction",
            "row / column / row-reverse / column-reverse",
            "Asosiy o'q yo'nalishi",
          ],
          ["flex-wrap", "nowrap / wrap / wrap-reverse", "Qatorga o'tish"],
          [
            "justify-content",
            "flex-start/end/center/space-between/around/evenly",
            "Asosiy o'qda hizalash",
          ],
          [
            "align-items",
            "stretch/flex-start/flex-end/center/baseline",
            "Ko'ndalang o'qda hizalash (1 qator)",
          ],
          [
            "align-content",
            "flex-start/end/center/space-between/around",
            "Ko'ndalang o'qda hizalash (ko'p qator)",
          ],
          ["gap", "16px / 10px 20px", "Elementlar orasidagi bo'shliq"],
        ]}
      />

      <H>Item xususiyatlari (bola element)</H>
      <Table
        headers={["Xususiyat", "Default", "Ma'nosi"]}
        rows={[
          [
            "flex-grow",
            "0",
            "Bo'sh joyni olish nisbati. 1 = hamma bo'sh joyni ol",
          ],
          ["flex-shrink", "1", "Kichrayish nisbati. 0 = kichraima"],
          ["flex-basis", "auto", "Boshlang'ich o'lcham (width/height o'rniga)"],
          ["flex", "0 1 auto", "flex-grow + shrink + basis qisqasi"],
          ["align-self", "auto", "Faqat shu item uchun align-items override"],
          ["order", "0", "Tartib raqami. Kichigi avval"],
        ]}
      />

      <H>Eng ko'p ishlatiladigan pattern</H>
      <Pre>{`/* Navigation */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Kartalar qatori */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

/* Markazlash (klassik) */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Sidebar layout */
.layout {
  display: flex;
}
.sidebar { width: 280px; flex-shrink: 0; }
.main    { flex: 1; }  /* Qolgan joyni ol */`}</Pre>

      <Note type="tip">
        <Code>flex: 1</Code> ={" "}
        <Code>flex-grow: 1; flex-shrink: 1; flex-basis: 0</Code> — qolgan barcha
        joyni ol.
      </Note>
      <Note type="info">
        Flexbox 1D (bir o'lchovli). Satr YOKI ustun boshqaradi. Ikkalasini birga
        boshqarish uchun CSS Grid ishlatiladi.
      </Note>
    </TheoryWrap>
  );
}
