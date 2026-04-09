import { useState, useMemo } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.11 — PAGINATION, FILTERING, SEARCH
// ═══════════════════════════════════════════════════════════════════════════════

const ALL_PRODUCTS = [
  { id: 1, name: "MacBook Pro", price: 2399, category: "tech", rating: 4.8 },
  { id: 2, name: "React kursi", price: 49, category: "edu", rating: 4.9 },
  { id: 3, name: "iPhone 15", price: 1199, category: "tech", rating: 4.7 },
  { id: 4, name: "JavaScript kitob", price: 25, category: "edu", rating: 4.6 },
  { id: 5, name: "iPad Air", price: 749, category: "tech", rating: 4.5 },
  { id: 6, name: "Python kursi", price: 39, category: "edu", rating: 4.8 },
  { id: 7, name: "AirPods Pro", price: 249, category: "tech", rating: 4.4 },
  { id: 8, name: "CSS kitob", price: 19, category: "edu", rating: 4.3 },
  { id: 9, name: "Samsung TV", price: 899, category: "tech", rating: 4.6 },
  { id: 10, name: "UI/UX kurs", price: 59, category: "edu", rating: 4.7 },
  {
    id: 11,
    name: "Sony Headphones",
    price: 349,
    category: "tech",
    rating: 4.5,
  },
  { id: 12, name: "Node.js kurs", price: 45, category: "edu", rating: 4.8 },
];

const PER_PAGE = 4;

export function PaginationExplain() {
  const [tab, setTab] = useState("demo");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const result = ALL_PRODUCTS.filter(
      (p) => category === "all" || p.category === category,
    )
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
        sortBy === "price"
          ? a.price - b.price
          : sortBy === "rating"
            ? b.rating - a.rating
            : a.name.localeCompare(b.name),
      );
    return result;
  }, [search, category, sortBy]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const items = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (val) => {
    setSearch(val);
    setPage(1);
  };
  const handleCategory = (val) => {
    setCategory(val);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["demo", "code", "hooks"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#4a9e60" : "#f2efe8",
              borderColor: tab === id ? "#4a9e60" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "demo" ? "Demo" : id === "code" ? "Kod" : "Hooks"}
          </button>
        ))}
      </div>

      {tab === "demo" && (
        <div className="flex flex-col gap-3">
          {/* Controls */}
          <div className="flex gap-2">
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="🔍 Qidirish..."
              className="flex-1 px-3 py-1.5 rounded-lg border border-[rgba(26,24,20,0.15)] bg-[#f2efe8] text-sm outline-none font-mono"
            />
            <select
              value={category}
              onChange={(e) => handleCategory(e.target.value)}
              className="px-2 py-1.5 rounded-lg border border-[rgba(26,24,20,0.15)] bg-[#f2efe8] text-xs outline-none font-mono"
            >
              <option value="all">Hammasi</option>
              <option value="tech">Tech</option>
              <option value="edu">Edu</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-2 py-1.5 rounded-lg border border-[rgba(26,24,20,0.15)] bg-[#f2efe8] text-xs outline-none font-mono"
            >
              <option value="name">Nom</option>
              <option value="price">Narx</option>
              <option value="rating">Reyting</option>
            </select>
          </div>

          {/* Items */}
          <div className="text-[10px] font-mono text-[#7a7468]">
            {filtered.length} ta topildi · {page}-sahifa / {totalPages}
          </div>
          <div className="flex flex-col gap-2">
            {items.length === 0 ? (
              <div className="text-center py-6 font-mono text-sm text-[#7a7468]">
                Hech narsa topilmadi
              </div>
            ) : (
              items.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[rgba(26,24,20,0.08)]"
                >
                  <div
                    className="flex items-center justify-center w-8 h-8 text-sm rounded-lg"
                    style={{
                      background:
                        p.category === "tech" ? "#185FA515" : "#4a9e6015",
                    }}
                  >
                    {p.category === "tech" ? "💻" : "📚"}
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs font-bold text-[#1a1814]">
                      {p.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#7a7468]">
                      ⭐ {p.rating}
                    </div>
                  </div>
                  <div className="font-mono text-sm font-black text-[#4a9e60]">
                    ${p.price}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 rounded-lg font-mono text-xs border-none cursor-pointer"
                style={{
                  background: page === 1 ? "rgba(26,24,20,0.05)" : "#f2efe8",
                  color: page === 1 ? "#7a7468" : "#1a1814",
                }}
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className="w-8 h-8 font-mono text-xs font-bold border-none rounded-lg cursor-pointer"
                  style={{
                    background: page === p ? "#4a9e60" : "#f2efe8",
                    color: page === p ? "#fff" : "#1a1814",
                  }}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 rounded-lg font-mono text-xs border-none cursor-pointer"
                style={{
                  background:
                    page === totalPages ? "rgba(26,24,20,0.05)" : "#f2efe8",
                  color: page === totalPages ? "#7a7468" : "#1a1814",
                }}
              >
                →
              </button>
            </div>
          )}
        </div>
      )}

      {tab === "code" && (
        <div className="flex flex-col gap-3">
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "filtered", color: C.fn },
                { text: " = ", color: C.op },
                { text: "useMemo", color: C.fn },
                { text: "(() => {", color: C.op },
              ],
              [{ text: "  return products", color: "rgba(255,255,255,0.7)" }],
              [
                { text: "    .filter", color: C.fn },
                { text: "(p => category === ", color: C.op },
                { text: "'all'", color: C.str },
                { text: " || p.category === category)", color: C.op },
              ],
              [
                { text: "    .filter", color: C.fn },
                {
                  text: "(p => p.name.toLowerCase().includes(search))",
                  color: C.op,
                },
              ],
              [
                { text: "    .sort", color: C.fn },
                { text: "((a, b) => a.price - b.price);", color: C.op },
              ],
              [{ text: "}, [products, category, search]);", color: C.op }],
              [{ text: "" }],
              [{ text: "// Pagination", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "totalPages", color: C.fn },
                { text: " = Math.ceil(filtered.length / ", color: C.op },
                { text: "PER_PAGE", color: C.fn },
                { text: ");", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "items", color: C.fn },
                { text: " = filtered.slice((page - ", color: C.op },
                { text: "1", color: C.num },
                { text: ") * PER_PAGE, page * PER_PAGE);", color: C.op },
              ],
            ]}
          />
          <InfoBox color="#4a9e60" icon="💡">
            <Tag color="#4a9e60">useMemo</Tag> filter/sort operatsiyalarini
            keshlaydi — faqat deps o'zgarganda qayta hisoblanadi. Katta
            ro'yxatlarda zarur.
          </InfoBox>
        </div>
      )}

      {tab === "hooks" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Custom hook sifatida ajratish — qayta foydalanish uchun:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "function ", color: C.kw },
                { text: "useFilteredList", color: C.fn },
                { text: "(items, perPage = 10) {", color: C.op },
              ],
              [
                {
                  text: "  const [search, setSearch]     = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "useState", color: C.fn },
                { text: "('');", color: C.op },
              ],
              [
                {
                  text: "  const [category, setCategory] = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "useState", color: C.fn },
                { text: "('all');", color: C.op },
              ],
              [
                {
                  text: "  const [page, setPage]         = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "useState", color: C.fn },
                { text: "(1);", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "  const filtered = ", color: "rgba(255,255,255,0.7)" },
                { text: "useMemo", color: C.fn },
                { text: "(() => (", color: C.op },
              ],
              [
                {
                  text: "    items.filter(/* ... */)",
                  color: "rgba(255,255,255,0.5)",
                },
              ],
              [{ text: "  ), [items, search, category]);", color: C.op }],
              [{ text: "" }],
              [
                {
                  text: "  const handleSearch = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "useCallback", color: C.fn },
                { text: "((val) => {", color: C.op },
              ],
              [
                {
                  text: "    setSearch(val); setPage(",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "1", color: C.num },
                { text: ");  // Qidirganda 1-sahifaga", color: C.cmt },
              ],
              [{ text: "  }, []);", color: C.op }],
              [{ text: "" }],
              [
                {
                  text: "  return { items: paginated, page, setPage, totalPages, handleSearch };",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [{ text: "}", color: C.op }],
            ]}
          />
        </div>
      )}
    </div>
  );
}
