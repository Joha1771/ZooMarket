import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.12 — CODEWARS — ALGORITHMS
// ═══════════════════════════════════════════════════════════════════════════════

export function CodeWarsExplain() {
  const [tab, setTab] = useState("intro");
  const [selected, setSelected] = useState(null);
  const [kata, setKata] = useState(0);

  const katas = [
    {
      title: "1. Palindrome tekshirish",
      difficulty: "8 kyu",
      color: "#4a9e60",
      problem:
        "Berilgan satr palindrommi? (oldidan va orqasidan o'qilganda bir xil)",
      examples: ['"racecar" → true', '"hello" → false', '"level" → true'],
      solution: [
        [
          { text: "function ", color: C.kw },
          { text: "isPalindrome", color: C.fn },
          { text: "(str) {", color: C.op },
        ],
        [
          { text: "  const ", color: C.kw },
          { text: "clean", color: C.fn },
          { text: " = str.", color: C.op },
          { text: "toLowerCase()", color: C.fn },
          { text: ";", color: C.op },
        ],
        [
          { text: "  return ", color: C.kw },
          { text: "clean === clean.", color: C.fn },
          { text: "split(", color: C.fn },
          { text: '""', color: C.str },
          { text: ").", color: C.op },
          { text: "reverse()", color: C.fn },
          { text: ".", color: C.op },
          { text: "join(", color: C.fn },
          { text: '""', color: C.str },
          { text: ");", color: C.op },
        ],
        [{ text: "}", color: C.op }],
      ],
    },
    {
      title: "2. Array ning eng katta elementi",
      difficulty: "8 kyu",
      color: "#4a9e60",
      problem: "Massivdagi eng katta sonni toping.",
      examples: ["[3, 1, 4, 1, 5] → 5", "[10, 2, 7] → 10"],
      solution: [
        [
          { text: "const ", color: C.kw },
          { text: "findMax", color: C.fn },
          { text: " = arr => ", color: C.op },
          { text: "Math.", color: C.fn },
          { text: "max(", color: C.fn },
          { text: "...arr", color: C.fn },
          { text: ");", color: C.op },
        ],
        [{ text: "" }],
        [{ text: "// yoki:", color: C.cmt }],
        [
          { text: "const ", color: C.kw },
          { text: "findMax2", color: C.fn },
          { text: " = arr => arr.", color: C.op },
          { text: "reduce((max, x) => x > max ? x : max);", color: C.fn },
        ],
      ],
    },
    {
      title: "3. FizzBuzz",
      difficulty: "8 kyu",
      color: "#4a9e60",
      problem:
        "1 dan n gacha: 3 ga karrali — Fizz, 5 ga karrali — Buzz, ikkalasiga ham — FizzBuzz, aks holda son.",
      examples: ["n=5 → [1, 2, 'Fizz', 4, 'Buzz']"],
      solution: [
        [
          { text: "function ", color: C.kw },
          { text: "fizzBuzz", color: C.fn },
          { text: "(n) {", color: C.op },
        ],
        [
          { text: "  return ", color: C.kw },
          { text: "Array.", color: C.fn },
          { text: "from(", color: C.fn },
          { text: "{ length: n }", color: C.fn },
          { text: ", (_, i) => {", color: C.op },
        ],
        [
          { text: "    const ", color: C.kw },
          { text: "x", color: C.fn },
          { text: " = i + ", color: C.op },
          { text: "1", color: C.num },
          { text: ";", color: C.op },
        ],
        [
          { text: "    if (x % ", color: C.op },
          { text: "15", color: C.num },
          { text: " === ", color: C.op },
          { text: "0", color: C.num },
          { text: ") return ", color: C.kw },
          { text: '"FizzBuzz"', color: C.str },
          { text: ";", color: C.op },
        ],
        [
          { text: "    if (x % ", color: C.op },
          { text: "3", color: C.num },
          { text: " === ", color: C.op },
          { text: "0", color: C.num },
          { text: ") return ", color: C.kw },
          { text: '"Fizz"', color: C.str },
          { text: ";", color: C.op },
        ],
        [
          { text: "    if (x % ", color: C.op },
          { text: "5", color: C.num },
          { text: " === ", color: C.op },
          { text: "0", color: C.num },
          { text: ") return ", color: C.kw },
          { text: '"Buzz"', color: C.str },
          { text: ";", color: C.op },
        ],
        [
          { text: "    return ", color: C.kw },
          { text: "x", color: C.fn },
          { text: ";", color: C.op },
        ],
        [{ text: "  });", color: C.op }],
        [{ text: "}", color: C.op }],
      ],
    },
    {
      title: "4. Anagram tekshirish",
      difficulty: "7 kyu",
      color: "#185FA5",
      problem:
        "Ikkita satr bir-birining anagrammimi? (bir xil harflar, boshqa tartib)",
      examples: ['"listen" + "silent" → true', '"hello" + "world" → false'],
      solution: [
        [
          { text: "function ", color: C.kw },
          { text: "isAnagram", color: C.fn },
          { text: "(a, b) {", color: C.op },
        ],
        [
          { text: "  const ", color: C.kw },
          { text: "sort", color: C.fn },
          { text: " = s => s.", color: C.op },
          { text: "toLowerCase()", color: C.fn },
        ],
        [
          { text: "    .", color: C.op },
          { text: "split(", color: C.fn },
          { text: '""', color: C.str },
          { text: ").", color: C.op },
          { text: "sort()", color: C.fn },
          { text: ".", color: C.op },
          { text: "join(", color: C.fn },
          { text: '""', color: C.str },
          { text: ");", color: C.op },
        ],
        [
          { text: "  return ", color: C.kw },
          { text: "sort(a) === sort(b)", color: C.fn },
          { text: ";", color: C.op },
        ],
        [{ text: "}", color: C.op }],
      ],
    },
  ];

  const currentKata = katas[kata];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "intro", label: "Codewars nima?" },
          { id: "katas", label: "Katas (misollar)" },
          { id: "tips", label: "Maslahatlar" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#c85c1a" : "#f2efe8",
              borderColor: tab === id ? "#c85c1a" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "intro" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Codewars</strong> — dasturlash
            muammolarini hal qilish platformasi. Kata qilgan sayin rank oshadi.
            Intervyuga tayyorlanish uchun ideal.
          </p>

          <div className="grid grid-cols-2 gap-2">
            {[
              {
                site: "Codewars",
                url: "codewars.com",
                color: "#c85c1a",
                desc: "Kata sistemasi, community solutions",
              },
              {
                site: "LeetCode",
                url: "leetcode.com",
                color: "#185FA5",
                desc: "FAANG intervyu savollari",
              },
              {
                site: "HackerRank",
                url: "hackerrank.com",
                color: "#4a9e60",
                desc: "Sertifikat olish mumkin",
              },
              {
                site: "Exercism",
                url: "exercism.org",
                color: "#993556",
                desc: "Mentor bilan o'rganish",
              },
            ].map(({ site, url, color, desc }) => (
              <div
                key={site}
                className="p-3 border rounded-xl"
                style={{ background: color + "08", borderColor: color + "30" }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  {site}
                </div>
                <div className="font-mono text-[9px] text-[#7a7468] mb-1">
                  {url}
                </div>
                <div className="text-[10px] text-[#1a1814]">{desc}</div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Codewars Rank tizimi:
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                {
                  rank: "8 kyu",
                  color: "#7a7468",
                  desc: "Boshlang'ich — asosiy sintaksis",
                },
                {
                  rank: "7 kyu",
                  color: "#b07820",
                  desc: "O'rta boshlang'ich — string/array",
                },
                {
                  rank: "6 kyu",
                  color: "#c85c1a",
                  desc: "O'rta — algoritmlar",
                },
                {
                  rank: "5 kyu",
                  color: "#185FA5",
                  desc: "O'rta yuqori — murakkab algoritmlar",
                },
                {
                  rank: "4-1 kyu",
                  color: "#4a9e60",
                  desc: "Ekspert — advanced CS",
                },
              ].map(({ rank, color, desc }) => (
                <div
                  key={rank}
                  className="flex items-center gap-3 px-2.5 py-1.5 rounded-lg"
                  style={{ background: color + "10" }}
                >
                  <span
                    className="w-10 font-mono text-xs font-bold"
                    style={{ color }}
                  >
                    {rank}
                  </span>
                  <span className="text-[10px] text-[#1a1814]">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "katas" && (
        <div className="flex flex-col gap-3">
          <div className="flex gap-1.5">
            {katas.map((k, i) => (
              <button
                key={i}
                onClick={() => {
                  setKata(i);
                  setSelected(null);
                }}
                className="flex-1 py-1.5 font-mono text-[9px] font-bold border rounded-lg cursor-pointer"
                style={{
                  background: kata === i ? currentKata.color : "#f2efe8",
                  borderColor:
                    kata === i ? currentKata.color : "rgba(26,24,20,0.10)",
                  color: kata === i ? "#fff" : "#1a1814",
                }}
              >
                #{i + 1}
              </button>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-[#1a1814]">
                {currentKata.title}
              </span>
              <span
                className="font-mono text-[9px] px-1.5 py-0.5 rounded"
                style={{
                  background: currentKata.color + "15",
                  color: currentKata.color,
                }}
              >
                {currentKata.difficulty}
              </span>
            </div>
            <p className="text-xs text-[#7a7468] mb-2">{currentKata.problem}</p>
            <div className="flex flex-col gap-1 mb-3">
              {currentKata.examples.map((ex, i) => (
                <div
                  key={i}
                  className="font-mono text-[10px] text-[#1a1814] px-2 py-1 rounded bg-white border border-[rgba(26,24,20,0.06)]"
                >
                  {ex}
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelected(kata)}
              className="w-full py-2 font-mono text-xs font-bold text-white border-none rounded-lg cursor-pointer"
              style={{
                background: selected === kata ? "#4a9e60" : "#c85c1a",
                boxShadow: `0 2px 0 0 ${selected === kata ? "#2a6040" : "#8a3a0a"}`,
              }}
            >
              {selected === kata
                ? "✓ Yechimni ko'rsatildi"
                : "Yechimni ko'rish →"}
            </button>
          </div>

          {selected === kata && (
            <div>
              <div className="text-[10px] font-mono text-[#4a9e60] mb-1.5">
                ✓ Yechim:
              </div>
              <CodeSnippet lines={currentKata.solution} />
            </div>
          )}
        </div>
      )}

      {tab === "tips" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Algoritmik muammolarni hal qilish uchun foydali maslahatlar va
            usullar:
          </p>

          {[
            {
              title: "1. Muammoni tushunish",
              color: "#4a9e60",
              tips: [
                "Misollarni diqqat bilan o'qing",
                "Edge case larni aniqlang (bo'sh massiv, null, 0)",
                "Qo'lda (qog'ozda) bir nechta misol yechib ko'ring",
              ],
            },
            {
              title: "2. Yechim strategiyasi",
              color: "#185FA5",
              tips: [
                "Avval ishlaydiganni yozing (brutal force)",
                "Keyin optimallang",
                "Built-in metodlardan foydalaning (map, filter, reduce)",
              ],
            },
            {
              title: "3. Foydali JS texnikalari",
              color: "#c85c1a",
              tips: [
                "Set — unique elementlar uchun",
                "Map — hisoblash uchun (frequency counter)",
                "sort() + comparator — tartiplash uchun",
                "two pointers — palindrome, sum uchun",
              ],
            },
            {
              title: "4. Mashq qilish tartibi",
              color: "#993556",
              tips: [
                "Har kuni 1-2 ta 8 kyu kata",
                "Yechgandan keyin boshqalarning kodini o'qing",
                "JavaScript uchun maxsus kata filterlang",
              ],
            },
          ].map(({ title, color, tips }) => (
            <div
              key={title}
              className="p-3 border rounded-xl"
              style={{ background: color + "08", borderColor: color + "30" }}
            >
              <div
                className="mb-2 font-mono text-xs font-bold"
                style={{ color }}
              >
                {title}
              </div>
              {tips.map((tip) => (
                <div key={tip} className="flex items-start gap-1.5 mb-1">
                  <span style={{ color }}>→</span>
                  <span className="text-xs text-[#1a1814]">{tip}</span>
                </div>
              ))}
            </div>
          ))}

          <div className="p-3.5 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Ko'p ishlatiladigan algoritmik naqshlar:
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                "Two Pointers",
                "Sliding Window",
                "Frequency Counter",
                "Divide & Conquer",
                "Dynamic Programming",
                "Binary Search",
              ].map((pattern) => (
                <div
                  key={pattern}
                  className="py-1.5 px-2.5 rounded font-mono text-[10px] text-center"
                  style={{
                    background: "#c85c1a10",
                    color: "#c85c1a",
                    border: "1px solid #c85c1a20",
                  }}
                >
                  {pattern}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
