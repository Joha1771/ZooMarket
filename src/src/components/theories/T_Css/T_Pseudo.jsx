import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Pseudo() {
  return (
    <TheoryWrap>
      <H>Pseudo-class va Pseudo-element farqi</H>
      <Table
        headers={["Tur", "Sintaksis", "Ma'nosi"]}
        rows={[
          ["Pseudo-class", ":hover", "Elementning holati (state)"],
          ["Pseudo-element", "::before", "Elementning qismi"],
        ]}
      />

      <H>Pseudo-classlar (bitta ikki nuqta)</H>
      <Pre>{`/* Hover, focus, active */
a:hover    { color: red; }
a:focus    { outline: 2px solid blue; }
a:active   { opacity: 0.7; }

/* Bola tanlash */
li:first-child   { font-weight: bold; }
li:last-child    { border-bottom: none; }
li:nth-child(2)  { color: red; }
li:nth-child(odd)    { background: #f5f5f5; }
li:nth-child(even)   { background: white; }
li:nth-child(3n+1)   { color: blue; }  /* 1, 4, 7, 10... */
p:not(.special) { color: gray; }   /* .special emas */

/* Form holatlari */
input:disabled   { opacity: 0.5; }
input:checked    { accent-color: green; }
input:required   { border-color: red; }
input:valid      { border-color: green; }
input:invalid    { border-color: red; }
input:placeholder-shown { border-style: dashed; }

/* Havola holatlari */
a:link    { color: blue; }
a:visited { color: purple; }`}</Pre>

      <H>Pseudo-elementlar (ikki ikki nuqta)</H>
      <Pre>{`/* ::before va ::after — kontent qo'shish */
.button::before {
  content: "→ ";   /* content majburiy! */
  color: orange;
}

.required-field::after {
  content: " *";
  color: red;
}

/* ::placeholder — input placeholder */
input::placeholder {
  color: #9ca3af;
  font-style: italic;
}

/* ::selection — tanlangan matn */
::selection {
  background: #c85c1a;
  color: white;
}

/* ::first-line, ::first-letter */
p::first-letter {
  font-size: 3em;
  float: left;
  margin-right: 8px;
}`}</Pre>

      <H>Gradientlar</H>
      <Pre>{`/* linear-gradient */
background: linear-gradient(to right, #c85c1a, #1a1814);
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8));

/* radial-gradient */
background: radial-gradient(circle, #c85c1a, #1a1814);
background: radial-gradient(ellipse at top, #e96c6c, transparent);

/* conic-gradient (doira shaklidagi) */
background: conic-gradient(#c85c1a 90deg, #1a1814 90deg);

/* Bir nechta background */
background:
  linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
  url('image.jpg') center/cover;`}</Pre>

      <Note type="info">
        <Code>content: ""</Code> — ::before/::after uchun majburiy. Bo'sh string
        ham yozish kerak.
      </Note>
    </TheoryWrap>
  );
}
