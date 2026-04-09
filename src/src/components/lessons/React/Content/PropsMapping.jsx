import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.3 — PROPS AND MAPPING
// ═══════════════════════════════════════════════════════════════════════════════

const DEMO_CARDS = [
  {
    title: "News Title 2",
    category: "Technology",
    author: "Emily Williams",
    isOfficial: true,
  },
  {
    title: "News Title 24",
    category: "Entertainment",
    author: "Robert Brown",
    isOfficial: true,
  },
  {
    title: "News Title 82",
    category: "Sports",
    author: "Emily Williams",
    isOfficial: false,
  },
];

export function PropsMappingExplain() {
  const [tab, setTab] = useState("props");
  const [activeType, setActiveType] = useState(0);

  const propTypes = [
    {
      label: "String props",
      code: `<NewsCard\n  title="News Title"\n  category="Technology"\n  author="Ali"\n/>`,
      desc: "Oddiy matn qiymatlari — qo'shtirnoq ichida",
    },
    {
      label: "Boolean props",
      code: `<NewsCard\n  title="News Title"\n  isOfficial\n/>`,
      desc: "isOfficial yozilsa — true. Yozilmasa — false",
    },
    {
      label: "Children props",
      code: `<NewsCard title="News">\n  <p>Bu description!</p>\n</NewsCard>`,
      desc: "Teglar orasidagi kontent — children orqali keladi",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["props", "mapping", "key"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#61DAFB" : "#f2efe8",
              borderColor: tab === id ? "#61DAFB" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#0a1a20" : "#1a1814",
            }}
          >
            {id === "props"
              ? "Props"
              : id === "mapping"
                ? "Mapping"
                : "Key prop"}
          </button>
        ))}
      </div>

      {tab === "props" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Props — bu komponentga ma'lumot uzatish usuli. HTML atributlari kabi
            yoziladi:
          </p>

          <div className="flex gap-1.5">
            {propTypes.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveType(i)}
                className="flex-1 py-1.5 rounded-lg font-mono text-[10px] font-bold cursor-pointer border transition-all"
                style={{
                  background: activeType === i ? "#61DAFB" : "#f2efe8",
                  borderColor:
                    activeType === i ? "#61DAFB" : "rgba(26,24,20,0.10)",
                  color: activeType === i ? "#0a1a20" : "#7a7468",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#61DAFB] font-bold mb-1">
              {propTypes[activeType].label}
            </div>
            <div className="text-[10px] text-[#7a7468] mb-2">
              {propTypes[activeType].desc}
            </div>
            <div className="bg-[#2c2820] rounded-lg p-3 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
              {propTypes[activeType].code}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Komponent ichida props qabul qilish:
            </div>
            <CodeSnippet
              lines={[
                [
                  { text: "function ", color: C.kw },
                  { text: "NewsCard", color: C.fn },
                  { text: "({ ", color: C.op },
                  { text: "title", color: C.fn },
                  { text: ", ", color: C.op },
                  { text: "author", color: C.fn },
                  { text: ", ", color: C.op },
                  { text: "isOfficial", color: C.fn },
                  { text: " }) {", color: C.op },
                ],
                [
                  { text: "  return ", color: C.kw },
                  { text: "(", color: C.op },
                ],
                [
                  { text: "    <", color: "#e34c26" },
                  { text: "div", color: "#82aaff" },
                  { text: ">", color: "#e34c26" },
                ],
                [
                  { text: "      <h3>{", color: "rgba(255,255,255,0.7)" },
                  { text: "title", color: C.fn },
                  { text: "}</h3>", color: "rgba(255,255,255,0.7)" },
                ],
                [
                  { text: "      {", color: "rgba(255,255,255,0.7)" },
                  { text: "isOfficial", color: C.fn },
                  { text: " && ", color: C.op },
                  { text: "<span>✓</span>", color: C.str },
                  { text: "}", color: "rgba(255,255,255,0.7)" },
                ],
                [{ text: "    </div>", color: "rgba(255,255,255,0.7)" }],
                [{ text: "  );", color: C.op }],
                [{ text: "}", color: C.op }],
              ]}
            />
          </div>
        </div>
      )}

      {tab === "mapping" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Massivni <code>.map()</code> orqali komponentlar ro'yxatiga
            aylantirish:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "news", color: C.fn },
                { text: " = [", color: C.op },
                { text: "{ title: ", color: "rgba(255,255,255,0.7)" },
                { text: '"News 1"', color: C.str },
                { text: " }, ...]", color: "rgba(255,255,255,0.7)" },
              ],
              [{ text: "" }],
              [
                { text: "return ", color: C.kw },
                { text: "(", color: C.op },
              ],
              [
                { text: "  <", color: "#e34c26" },
                { text: "div", color: "#82aaff" },
                { text: ">", color: "#e34c26" },
              ],
              [
                { text: "    {", color: "rgba(255,255,255,0.7)" },
                { text: "news", color: C.fn },
                { text: ".map(", color: C.fn },
                { text: "(", color: C.op },
                { text: "item", color: C.fn },
                { text: ", ", color: C.op },
                { text: "i", color: C.fn },
                { text: ") => (", color: C.op },
              ],
              [
                { text: "      <", color: "#e34c26" },
                { text: "NewsCard", color: "#82aaff" },
              ],
              [
                { text: "        key", color: "#c792ea" },
                { text: "={", color: C.op },
                { text: "i", color: C.fn },
                { text: "}", color: C.op },
              ],
              [
                { text: "        title", color: "#c792ea" },
                { text: "={", color: C.op },
                { text: "item", color: C.fn },
                { text: ".title}", color: C.fn },
              ],
              [{ text: "      />", color: "#e34c26" }],
              [{ text: "    ))}", color: "rgba(255,255,255,0.7)" }],
              [{ text: "  </div>", color: "rgba(255,255,255,0.7)" }],
              [{ text: ");", color: C.op }],
            ]}
          />

          {/* Live demo */}
          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Natija ({DEMO_CARDS.length} ta karta):
            </div>
            <div className="flex flex-col gap-2">
              {DEMO_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-[rgba(26,24,20,0.08)]"
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-[#1a1814]">
                      {card.title}
                    </div>
                    <div className="font-mono text-[9px] text-[#7a7468]">
                      {card.author}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                      style={{ background: "#61DAFB20", color: "#0a9dc7" }}
                    >
                      {card.category}
                    </span>
                    {card.isOfficial && (
                      <span className="text-[#4a9e60] text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "key" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            <code>key</code> prop — React'ga har bir element noyob ekanini
            bildiradi:
          </p>
          {[
            {
              title: "✗ key yo'q — xato",
              code: `news.map((item) => (\n  <NewsCard title={item.title} />\n))`,
              desc: "React elementlarni farqlolmaydi → sekin va noto'g'ri yangilanadi",
              color: "#e06c75",
            },
            {
              title: "✓ index key — yaxshiroq",
              code: `news.map((item, i) => (\n  <NewsCard key={i} title={item.title} />\n))`,
              desc: "Ishlaydi, lekin massiv o'zgarsa muammo chiqishi mumkin",
              color: "#b07820",
            },
            {
              title: "✓✓ unique id key — eng yaxshi",
              code: `news.map((item) => (\n  <NewsCard key={item.id} title={item.title} />\n))`,
              desc: "Har element o'zining noyob id'si bilan — React tez va to'g'ri ishlaydi",
              color: "#4a9e60",
            },
          ].map(({ title, code, desc, color }) => (
            <div
              key={title}
              className="p-3 border rounded-xl"
              style={{ background: color + "08", borderColor: color + "25" }}
            >
              <div
                className="font-mono text-[10px] font-bold mb-1"
                style={{ color }}
              >
                {title}
              </div>
              <div className="bg-[#2c2820] rounded-lg p-2.5 font-mono text-[11px] text-[#c3e88d] leading-loose whitespace-pre mb-1.5">
                {code}
              </div>
              <div className="text-[10px] text-[#7a7468]">{desc}</div>
            </div>
          ))}
          <InfoBox color="#4a9e60" icon="✓">
            Key prop faqat <strong>mapping paytida</strong> kerak. Oddiy
            komponentlarga key berish shart emas.
          </InfoBox>
        </div>
      )}
    </div>
  );
}
