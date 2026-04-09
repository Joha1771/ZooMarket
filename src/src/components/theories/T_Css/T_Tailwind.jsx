import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
  Code,
} from "../../../Shared/TheoryUi.jsx";
export function T_Tailwind() {
  return (
    <TheoryWrap>
      <H>Tailwind CSS nima?</H>
      <P>
        Tailwind — utility-first CSS framework. Siz CSS klasser yozmaysiz —
        tayyor utility klasslari ishlatiladi. Har bir klass — bitta CSS
        xususiyat.
      </P>
      <Pre>{`<!-- Oddiy CSS -->
<div class="card">...</div>
<style>
.card { background: white; padding: 24px; border-radius: 12px; }
</style>

<!-- Tailwind -->
<div class="bg-white p-6 rounded-xl">...</div>`}</Pre>

      <H>Asosiy klass guruhlari</H>
      <Table
        headers={["Guruh", "Misol", "CSS ekvivalenti"]}
        rows={[
          ["Spacing", "p-4, m-2, px-6, py-3", "padding: 1rem, margin: 0.5rem"],
          ["Colors", "bg-blue-500, text-red-600", "background-color, color"],
          [
            "Typography",
            "text-xl, font-bold, leading-relaxed",
            "font-size, font-weight, line-height",
          ],
          [
            "Flexbox",
            "flex, justify-center, items-center, gap-4",
            "display: flex, ...",
          ],
          ["Grid", "grid, grid-cols-3, col-span-2", "display: grid, ..."],
          ["Sizing", "w-full, h-screen, max-w-lg", "width, height, max-width"],
          [
            "Borders",
            "border, rounded-lg, border-red-500",
            "border, border-radius, ...",
          ],
          ["Shadow", "shadow-md, shadow-xl", "box-shadow"],
          [
            "Position",
            "relative, absolute, top-0, z-10",
            "position, top, z-index",
          ],
          ["Responsive", "md:flex, lg:grid-cols-3", "media queries"],
          [
            "Hover",
            "hover:bg-blue-600, hover:scale-105",
            ":hover pseudo-class",
          ],
        ]}
      />

      <H>Responsive prefikslar</H>
      <Pre>{`<!-- Mobile-first: sm: md: lg: xl: 2xl: -->
<div class="
  grid-cols-1      /* Mobil: 1 ustun */
  sm:grid-cols-2   /* 640px+: 2 ustun */
  lg:grid-cols-3   /* 1024px+: 3 ustun */
">
`}</Pre>

      <H>Arbitrary values (istalgan qiymat)</H>
      <Pre>{`<!-- [] ichida istalgan qiymat -->
<div class="bg-[#c85c1a] text-[14px] w-[340px]">
<div class="mt-[37px] grid-cols-[1fr_2fr_1fr]">`}</Pre>

      <H>tailwind.config.js — sozlash</H>
      <Pre>{`module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c85c1a',
        dark: '#1a1814',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        xl: '16px',
      }
    }
  }
}`}</Pre>

      <Note type="tip">
        Tailwind CSS IntelliSense (VS Code extension) — avtoto'ldirish va
        hujjat. Tailwind bilan ishlashda majburiy.
      </Note>
      <Note type="info">
        Tailwind o'zini "purge" qiladi — ishlatilmagan klasslari final build'dan
        chiqarib tashlaydi. Build hajmi kichik bo'ladi.
      </Note>
    </TheoryWrap>
  );
}
