import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";
import { TH, TP, TNote, TC, TPre, TTable } from "../../../../Shared/TheoryUi";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 4.7 — MAP, SET, WEAKMAP, WEAKSET
// ═══════════════════════════════════════════════════════════════════════════════

export function MapSetExplain() {
  const [tab, setTab] = useState("map");
  const [mapKey, setMapKey] = useState("");
  const [mapVal, setMapVal] = useState("");
  const [mapData, setMapData] = useState([
    ["name", "Ali"],
    ["age", "25"],
    ["city", "Toshkent"],
  ]);
  const [setInput, setSetInput] = useState("");
  const [setData, setSetData] = useState([1, 2, 3, 2, 1, 4, 3, 5]);

  const uniqueSet = [...new Set(setData)];

  const addToMap = () => {
    if (mapKey && mapVal) {
      setMapData((prev) => {
        const filtered = prev.filter(([k]) => k !== mapKey);
        return [...filtered, [mapKey, mapVal]];
      });
      setMapKey("");
      setMapVal("");
    }
  };

  const addToSet = () => {
    if (setInput) {
      const num = Number(setInput);
      if (!isNaN(num)) {
        setSetData((prev) => [...prev, num]);
        setSetInput("");
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {[
          { id: "map", label: "Map" },
          { id: "set", label: "Set" },
          { id: "weak", label: "Weak versions" },
          { id: "compare", label: "Object vs Map" },
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

      {tab === "map" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Map</strong> — kalit:qiymat
            to'plami. Obyektdan farqi: har qanday tur kalit bo'lishi mumkin,
            <Tag color="#4a9e60">size</Tag> xususiyati bor, tezroq.
          </p>

          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Interaktiv Map ({mapData.length} ta element):
            </div>
            <div className="flex flex-col gap-1 mb-3">
              {mapData.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white border border-[rgba(26,24,20,0.08)]"
                >
                  <span className="font-mono text-xs font-bold text-[#c85c1a]">
                    "{k}"
                  </span>
                  <span className="text-[#7a7468] text-[10px]">→</span>
                  <span className="font-mono text-xs text-[#1a1814]">
                    "{v}"
                  </span>
                  <button
                    onClick={() =>
                      setMapData((prev) => prev.filter(([key]) => key !== k))
                    }
                    className="ml-auto font-mono text-[10px] text-[#e06c75] cursor-pointer bg-transparent border-none"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input
                value={mapKey}
                onChange={(e) => setMapKey(e.target.value)}
                placeholder="kalit"
                className="px-2 py-1.5 text-xs bg-white border border-[rgba(26,24,20,0.10)] rounded outline-none"
              />
              <input
                value={mapVal}
                onChange={(e) => setMapVal(e.target.value)}
                placeholder="qiymat"
                className="px-2 py-1.5 text-xs bg-white border border-[rgba(26,24,20,0.10)] rounded outline-none"
              />
              <button
                onClick={addToMap}
                className="py-1.5 font-mono text-xs font-bold text-white rounded border-none cursor-pointer"
                style={{ background: "#c85c1a" }}
              >
                set()
              </button>
            </div>
          </div>

          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "map", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "Map(", color: C.fn },
                { text: "[", color: C.op },
              ],
              [{ text: '  ["name", "Ali"],', color: "rgba(255,255,255,0.6)" }],
              [{ text: '  ["age", 25],', color: "rgba(255,255,255,0.6)" }],
              [{ text: "]);", color: C.op }],
              [{ text: "" }],
              [
                { text: "map.", color: C.fn },
                { text: "set(", color: C.fn },
                { text: '"city"', color: C.str },
                { text: ", ", color: C.op },
                { text: '"Toshkent"', color: C.str },
                { text: ");", color: C.op },
              ],
              [
                { text: "map.", color: C.fn },
                { text: "get(", color: C.fn },
                { text: '"name"', color: C.str },
                { text: ");   ", color: C.op },
                { text: '// "Ali"', color: C.cmt },
              ],
              [
                { text: "map.", color: C.fn },
                { text: "has(", color: C.fn },
                { text: '"age"', color: C.str },
                { text: ");    ", color: C.op },
                { text: "// true", color: C.cmt },
              ],
              [
                { text: "map.", color: C.fn },
                { text: "size", color: C.fn },
                { text: ";        ", color: C.op },
                { text: "// 3", color: C.cmt },
              ],
              [
                { text: "map.", color: C.fn },
                { text: "delete(", color: C.fn },
                { text: '"age"', color: C.str },
                { text: ");  ", color: C.op },
                { text: "// o'chirish", color: C.cmt },
              ],
              [
                { text: "map.", color: C.fn },
                { text: "clear(", color: C.fn },
                { text: ");    ", color: C.op },
                { text: "// hammani o'chirish", color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "set" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">Set</strong> — faqat
            <strong> yagona (unique)</strong> qiymatlar to'plami. Takroriy
            elementlar avtomatik o'chiriladi.
          </p>

          <div className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Massiv (takroriy bilan):
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {setData.map((n, i) => (
                <div
                  key={i}
                  className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg"
                  style={{
                    background:
                      uniqueSet.includes(n) && setData.indexOf(n) === i
                        ? "#c85c1a20"
                        : "#e06c7510",
                    color:
                      uniqueSet.includes(n) && setData.indexOf(n) === i
                        ? "#c85c1a"
                        : "#e06c75",
                    border: `1px solid ${uniqueSet.includes(n) && setData.indexOf(n) === i ? "#c85c1a" : "#e06c75"}40`,
                  }}
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Set (faqat unique):
            </div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {uniqueSet.map((n) => (
                <div
                  key={n}
                  className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg"
                  style={{
                    background: "#4a9e6020",
                    color: "#4a9e60",
                    border: "1px solid #4a9e6040",
                  }}
                >
                  {n}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                value={setInput}
                onChange={(e) => setSetInput(e.target.value)}
                placeholder="Son kiriting..."
                className="flex-1 px-2 py-1.5 text-xs bg-white border border-[rgba(26,24,20,0.10)] rounded outline-none"
              />
              <button
                onClick={addToSet}
                className="px-3 py-1.5 font-mono text-xs font-bold text-white rounded border-none cursor-pointer"
                style={{ background: "#c85c1a" }}
              >
                add()
              </button>
            </div>
          </div>

          <CodeSnippet
            lines={[
              [{ text: "// Duplicate larni o'chirish:", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "arr", color: C.fn },
                { text: " = [", color: C.op },
                { text: "1", color: C.num },
                { text: ",", color: C.op },
                { text: "2", color: C.num },
                { text: ",", color: C.op },
                { text: "2", color: C.num },
                { text: ",", color: C.op },
                { text: "3", color: C.num },
                { text: ",", color: C.op },
                { text: "3", color: C.num },
                { text: "];", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "unique", color: C.fn },
                { text: " = [...new ", color: C.op },
                { text: "Set(", color: C.fn },
                { text: "arr", color: C.fn },
                { text: ")];  ", color: C.op },
                { text: "// [1,2,3]", color: C.cmt },
              ],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "set", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "Set([", color: C.fn },
                { text: "1", color: C.num },
                { text: ",", color: C.op },
                { text: "2", color: C.num },
                { text: ",", color: C.op },
                { text: "3", color: C.num },
                { text: "]);", color: C.op },
              ],
              [
                { text: "set.", color: C.fn },
                { text: "add(", color: C.fn },
                { text: "4", color: C.num },
                { text: ");   ", color: C.op },
                { text: "// qo'shish", color: C.cmt },
              ],
              [
                { text: "set.", color: C.fn },
                { text: "has(", color: C.fn },
                { text: "2", color: C.num },
                { text: ");   ", color: C.op },
                { text: "// true", color: C.cmt },
              ],
              [
                { text: "set.", color: C.fn },
                { text: "delete(", color: C.fn },
                { text: "3", color: C.num },
                { text: ");  ", color: C.op },
                { text: "// o'chirish", color: C.cmt },
              ],
              [
                { text: "set.", color: C.fn },
                { text: "size", color: C.fn },
                { text: ";      ", color: C.op },
                { text: "// 3", color: C.cmt },
              ],
            ]}
          />
        </div>
      )}

      {tab === "weak" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            <strong className="text-[#1a1814]">WeakMap / WeakSet</strong> —
            faqat ob'yektlarni saqlaydi. Garbage collector ularni xotiradan
            o'chira oladi.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                title: "Map",
                color: "#c85c1a",
                features: [
                  "Har qanday kalit ✓",
                  "size xususiyati ✓",
                  "iterate qilish ✓",
                  "Garbage collected ✗",
                ],
              },
              {
                title: "WeakMap",
                color: "#993556",
                features: [
                  "Faqat object kalit ✓",
                  "size yo'q ✗",
                  "iterate qilish ✗",
                  "Garbage collected ✓",
                ],
              },
            ].map(({ title, color, features }) => (
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
                {features.map((f) => (
                  <div
                    key={f}
                    className="text-[10px] text-[#1a1814] mb-0.5 flex items-center gap-1"
                  >
                    <span
                      style={{ color: f.includes("✓") ? "#4a9e60" : "#e06c75" }}
                    >
                      {f.includes("✓") ? "✓" : "✗"}
                    </span>
                    {f.replace("✓", "").replace("✗", "").trim()}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <CodeSnippet
            lines={[
              [{ text: "// WeakMap — private ma'lumot saqlash", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "privateData", color: C.fn },
                { text: " = new ", color: C.kw },
                { text: "WeakMap(", color: C.fn },
                { text: ");", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "class ", color: C.kw },
                { text: "Person", color: C.fn },
                { text: " {", color: C.op },
              ],
              [
                { text: "  constructor", color: C.kw },
                { text: "(name, age) {", color: C.op },
              ],
              [
                { text: "    privateData.", color: C.fn },
                { text: "set(", color: C.fn },
                { text: "this", color: C.kw },
                { text: ", { name, age });", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "  getName() {", color: C.fn }],
              [
                { text: "    return ", color: C.kw },
                { text: "privateData.", color: C.fn },
                { text: "get(", color: C.fn },
                { text: "this", color: C.kw },
                { text: ").", color: C.op },
                { text: "name", color: C.fn },
                { text: ";", color: C.op },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: "}", color: C.op }],
            ]}
          />

          <InfoBox color="#185FA5" icon="💡">
            WeakMap/WeakSet — <strong>memory leak</strong> oldini oladi. Ob'yekt
            boshqa joylarda ishlatilmasa, GC avtomatik o'chiradi.
          </InfoBox>
        </div>
      )}

      {tab === "compare" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Object va Map — ikkalasi ham kalit-qiymat saqlaydi, lekin farqlari
            muhim:
          </p>

          <div className="overflow-x-auto rounded-xl border border-[rgba(26,24,20,0.10)]">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#c85c1a10]">
                  {["Xususiyat", "Object", "Map"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-3 py-2 font-mono font-bold text-[#c85c1a] border border-[rgba(26,24,20,0.10)]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Kalit turi", "String / Symbol", "Har qanday tur"],
                  ["Tartib", "Kafolat yo'q", "Qo'shilgan tartibda"],
                  ["size", "Object.keys().length", ".size xususiyati"],
                  ["Tezlik", "Sekinroq (ko'p op.)", "Tezroq (ko'p op.)"],
                  ["JSON", "✓ JSON.stringify", "✗ To'g'ridan emas"],
                  ["Iterate", "for...in / Object.keys", "for...of / forEach"],
                ].map(([xususiyat, obj, map], i) => (
                  <tr key={i}>
                    <td className="px-3 py-2 font-mono font-bold text-[#1a1814] border border-[rgba(26,24,20,0.10)]">
                      {xususiyat}
                    </td>
                    <td className="px-3 py-2 text-[#7a7468] border border-[rgba(26,24,20,0.10)]">
                      {obj}
                    </td>
                    <td className="px-3 py-2 text-[#c85c1a] border border-[rgba(26,24,20,0.10)]">
                      {map}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <InfoBox color="#4a9e60" icon="✓">
            Ko'p qo'shish/o'chirish operatsiyalari bo'lsa yoki kalit tur muhim
            bo'lsa — <Tag color="#4a9e60">Map</Tag> ishlating. Oddiy ma'lumot
            saqlash uchun — <Tag>Object</Tag>.
          </InfoBox>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
