import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";

export function T_ColorsFonts() {
  return (
    <TheoryWrap>
      <H>CSS Rang formatlari</H>
      <Table
        headers={["Format", "Misol", "Qachon"]}
        rows={[
          ["Named", "color: red", "Tez prototiplash"],
          ["HEX", "color: #c85c1a", "Eng ko'p ishlatiladi"],
          ["HEX 8", "color: #c85c1a80", "50% shaffoflik bilan"],
          ["RGB", "color: rgb(200, 92, 26)", "Hisoblash kerak bo'lganda"],
          ["RGBA", "color: rgba(200,92,26,0.5)", "Shaffoflik bilan"],
          ["HSL", "color: hsl(24, 77%, 44%)", "Hue-Saturation-Lightness"],
          ["HSLA", "color: hsla(24,77%,44%,0.8)", "HSL + shaffoflik"],
          ["currentColor", "border-color: currentColor", "Joriy matn rangidan"],
        ]}
      />

      <H>CSS o'zgaruvchilari (Custom Properties)</H>
      <Pre>{`:root {
  --primary: #c85c1a;
  --text: #1a1814;
  --bg: #f2efe8;
  --radius: 8px;
}

.button {
  background: var(--primary);
  color: white;
  border-radius: var(--radius);
}`}</Pre>

      <H>Font xususiyatlari</H>
      <Table
        headers={["Xususiyat", "Qiymatlar", "Ma'nosi"]}
        rows={[
          ["font-family", "Georgia, serif", "Shrift. Zaxira ko'rsating!"],
          ["font-size", "16px / 1rem / 1.2em", "Shrift o'lchami"],
          [
            "font-weight",
            "100–900, bold, normal",
            "Qalinlik. 400=normal, 700=bold",
          ],
          ["font-style", "normal / italic / oblique", "Qiyalik"],
          ["font-variant", "normal / small-caps", "Kichik katta harflar"],
          [
            "line-height",
            "1.5 / 24px / 150%",
            "Qator balandligi. 1.5–1.8 ideal",
          ],
          ["letter-spacing", "0.05em / 2px", "Harflar oralig'i"],
          ["word-spacing", "0.2em / 4px", "So'zlar oralig'i"],
          ["text-align", "left/center/right/justify", "Hizalash"],
          ["text-transform", "uppercase/lowercase/capitalize", "Harf registri"],
          ["text-decoration", "none/underline/line-through", "Bezak"],
          ["text-shadow", "2px 2px 4px rgba(0,0,0,0.3)", "Soya"],
        ]}
      />

      <H>Google Fonts ulash</H>
      <Pre>{`<!-- HTML <head> ichiga -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">

/* CSS'da ishlatish */
body {
  font-family: 'Inter', sans-serif;
}`}</Pre>

      <Note type="tip">
        Shrift satnasiz qolmasin deb har doim zaxira ko'rsating:{" "}
        <Code>font-family: 'MyFont', Arial, sans-serif</Code>
      </Note>
      <Note type="info">
        1rem = root elementning font-size'i (odatda 16px). em = ota elementning
        font-size'i. Responsive dizayn uchun rem afzal.
      </Note>
    </TheoryWrap>
  );
}
