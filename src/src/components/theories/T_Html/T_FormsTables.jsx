import {
  TheoryWrap,
  H,
  P,
  Pre,
  Table,
  Note,
} from "../../../Shared/TheoryUi.jsx";

export function T_FormsTables() {
  return (
    <TheoryWrap>
      <H>Formalar va Input turlari</H>
      <P>
        HTML formalar foydalanuvchidan ma'lumot olish uchun ishlatiladi.{" "}
        <code>&lt;form&gt;</code> tegi barcha input elementlarini o'z ichiga
        oladi.
      </P>
      <Pre>{`<form action="/submit" method="POST">
  <label for="name">Ism:</label>
  <input type="text" id="name" name="name" placeholder="Ismingiz...">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Yuborish</button>
</form>`}</Pre>
      <H>Input turlari</H>
      <Table
        headers={["type", "Vazifasi", "Misol"]}
        rows={[
          ["text", "Oddiy matn kiritish", '<input type="text">'],
          ["email", "Email (validatsiya bilan)", '<input type="email">'],
          ["password", "Yashirilgan matn", '<input type="password">'],
          ["number", "Faqat raqamlar", '<input type="number">'],
          ["date", "Sana tanlash", '<input type="date">'],
          [
            "range",
            "Slayder (min/max)",
            '<input type="range" min="0" max="100">',
          ],
          ["color", "Rang tanlash", '<input type="color">'],
          ["file", "Fayl yuklash", '<input type="file">'],
          ["checkbox", "Belgilash qutisi", '<input type="checkbox">'],
          ["radio", "Bir tanlash", '<input type="radio" name="group">'],
        ]}
      />
      <H>select va textarea</H>
      <Pre>{`<!-- Tanlash ro'yxati -->
<select name="city">
  <option value="tashkent">Toshkent</option>
  <option value="samarkand">Samarqand</option>
  <option value="bukhara">Buxoro</option>
</select>

<!-- Ko'p qatorli matn -->
<textarea name="message" rows="4" cols="40">
  Matn shu yerda...
</textarea>`}</Pre>
      <Note type="tip">
        <code>label</code> tegini <code>for</code> atributi orqali inputga
        bog'lang — accessibility va UX uchun muhim. <code>for</code> qiymati
        inputning <code>id</code> si bilan mos bo'lishi kerak.
      </Note>
      <H>Jadvallar (Tables)</H>
      <P>
        HTML jadvallar ma'lumotlarni qator va ustunlarda ko'rsatish uchun
        ishlatiladi. Asosiy teglar: <code>&lt;table&gt;</code>,{" "}
        <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>,{" "}
        <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>,{" "}
        <code>&lt;td&gt;</code>.
      </P>
      <Pre>{`<table>
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yosh</th>
      <th>Shahar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>25</td>
      <td>Toshkent</td>
    </tr>
    <tr>
      <td>Malika</td>
      <td>22</td>
      <td>Samarqand</td>
    </tr>
  </tbody>
</table>`}</Pre>
      <H>colspan va rowspan</H>
      <Table
        headers={["Atribut", "Vazifasi", "Misol"]}
        rows={[
          [
            "colspan",
            "Bir necha ustunni birlashtirish",
            '<td colspan="2">Birlashgan</td>',
          ],
          [
            "rowspan",
            "Bir necha qatorni birlashtirish",
            '<td rowspan="3">Birlashgan</td>',
          ],
        ]}
      />
      <Note type="warning">
        Jadvallar faqat <strong>jadval ma'lumotlari</strong> uchun ishlatilsin.
        Sahifa layoutini jadval bilan qilish — eski va noto'g'ri amaliyot.
        Layout uchun Flexbox yoki Grid ishlating.
      </Note>
    </TheoryWrap>
  );
}
