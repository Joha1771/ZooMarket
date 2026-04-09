import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.9 — LAZY LOADING & SUSPENSE
// ═══════════════════════════════════════════════════════════════════════════════

const PAGES = [
  { name: "Home", path: "/", size: "2 KB", lazy: false, color: "#4a9e60" },
  {
    name: "Dashboard",
    path: "/dashboard",
    size: "45 KB",
    lazy: true,
    color: "#185FA5",
  },
  {
    name: "Profile",
    path: "/profile",
    size: "28 KB",
    lazy: true,
    color: "#764abc",
  },
  {
    name: "AdminPanel",
    path: "/admin",
    size: "120 KB",
    lazy: true,
    color: "#c85c1a",
  },
];

export function LazyExplain() {
  const [tab, setTab] = useState("concept");
  const [activePage, setActivePage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(new Set(["Home"]));

  const navigateTo = async (page) => {
    if (loaded.has(page.name)) {
      setActivePage(page.name);
      return;
    }
    setLoading(true);
    setActivePage(null);
    await new Promise((r) => setTimeout(r, parseInt(page.size) * 15));
    setLoaded((s) => new Set([...s, page.name]));
    setActivePage(page.name);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["concept", "code", "demo"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#185FA5" : "#f2efe8",
              borderColor: tab === id ? "#185FA5" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "concept" ? "Tushuncha" : id === "code" ? "Kod" : "Demo"}
          </button>
        ))}
      </div>

      {tab === "concept" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Lazy loading — komponentlarni faqat kerak bo'lganda yuklash.
            Boshlang'ich bundle hajmini kamaytiradi, ilova tezroq ishga tushadi.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-[#e06c7510] border border-[#e06c7530]">
              <div className="font-mono text-xs font-bold text-[#e06c75] mb-2">
                ❌ Lazy yo'q
              </div>
              <div className="text-[10px] text-[#7a7468] space-y-1">
                <div>• Barcha komponentlar bir bundle</div>
                <div>• Boshlang'ich yuklash: ~3MB</div>
                <div>• Foydalanuvchi kutadi: 8 soniya</div>
                <div>• Foydalanilmaydigan kod ham yuklanadi</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#4a9e6010] border border-[#4a9e6030]">
              <div className="font-mono text-xs font-bold text-[#4a9e60] mb-2">
                ✓ Lazy bilan
              </div>
              <div className="text-[10px] text-[#7a7468] space-y-1">
                <div>• Har sahifa alohida chunk</div>
                <div>• Boshlang'ich yuklash: ~200 KB</div>
                <div>• Foydalanuvchi kutadi: &lt;1 soniya</div>
                <div>• Kerakli kod kerakli vaqtda</div>
              </div>
            </div>
          </div>
          <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Bundle vizualizatsiyasi:
            </div>
            <div className="flex gap-1.5 items-end h-14">
              {[
                { label: "Eager", h: 100, color: "#e06c75" },
                { label: "Lazy", h: 20, color: "#4a9e60" },
                { label: "Home", h: 5, color: "#4a9e6060" },
                { label: "Dashboard", h: 15, color: "#185FA560" },
                { label: "Admin", h: 40, color: "#c85c1a60" },
              ].map(({ label, h, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center flex-1 gap-1"
                >
                  <div
                    className="w-full rounded-t"
                    style={{ height: `${h}%`, background: color }}
                  />
                  <span className="font-mono text-[8px] text-[#7a7468]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "code" && (
        <div className="flex flex-col gap-3">
          <CodeSnippet
            lines={[
              [
                { text: "import ", color: C.kw },
                { text: "{ lazy, Suspense }", color: C.fn },
                { text: " from ", color: C.op },
                { text: "'react'", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                {
                  text: "// ✓ Lazy import — faqat kerak bo'lganda yuklanadi",
                  color: C.cmt,
                },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "Dashboard", color: C.fn },
                { text: "  = ", color: C.op },
                { text: "lazy", color: C.fn },
                { text: "(() => ", color: C.op },
                { text: "import", color: C.kw },
                { text: "('./Dashboard'));", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "AdminPanel", color: C.fn },
                { text: " = ", color: C.op },
                { text: "lazy", color: C.fn },
                { text: "(() => ", color: C.op },
                { text: "import", color: C.kw },
                { text: "('./AdminPanel'));", color: C.op },
              ],
              [{ text: "" }],
              [
                {
                  text: "// Suspense — yuklanish vaqtida fallback ko'rsatadi",
                  color: C.cmt,
                },
              ],
              [
                { text: "function ", color: C.kw },
                { text: "App", color: C.fn },
                { text: "() {", color: C.op },
              ],
              [{ text: "  return (", color: C.op }],
              [
                { text: "    <Suspense ", color: C.str },
                { text: "fallback={<PageLoader />}", color: C.fn },
                { text: ">", color: C.str },
              ],
              [
                {
                  text: "      <RouterProvider router={router} />",
                  color: C.str,
                },
              ],
              [{ text: "    </Suspense>", color: C.str }],
              [{ text: "  );", color: C.op }],
              [{ text: "}", color: C.op }],
            ]}
          />
          <InfoBox color="#185FA5" icon="💡">
            Vite avtomatik code splitting qiladi. Har bir{" "}
            <Tag color="#185FA5">lazy()</Tag> import alohida chunk fayl bo'ladi.
            Build qilinganda ko'rish mumkin.
          </InfoBox>
        </div>
      )}

      {tab === "demo" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Sahifalar o'rtasida o'ting — lazy load simulyatsiyasi:
          </p>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="flex flex-wrap gap-2 mb-4">
              {PAGES.map((page) => (
                <button
                  key={page.name}
                  onClick={() => navigateTo(page)}
                  className="px-3 py-1.5 rounded-lg font-mono text-xs font-bold border-none cursor-pointer transition-all"
                  style={{
                    background:
                      activePage === page.name ? page.color : `${page.color}15`,
                    color: activePage === page.name ? "#fff" : page.color,
                  }}
                >
                  {page.path}
                </button>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-[rgba(26,24,20,0.10)] min-h-[100px] flex items-center justify-center p-4">
              {loading ? (
                <div className="text-center">
                  <div className="font-mono text-xs text-[#7a7468] mb-2">
                    ⟳ Chunk yuklanmoqda...
                  </div>
                  <div className="w-32 h-1 bg-[rgba(26,24,20,0.08)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full animate-pulse"
                      style={{ width: "60%", background: "#185FA5" }}
                    />
                  </div>
                </div>
              ) : activePage ? (
                <div className="text-center">
                  <div className="font-mono text-lg font-black text-[#1a1814] mb-1">
                    {activePage}
                  </div>
                  <div className="font-mono text-[10px] text-[#7a7468]">
                    {loaded.has(activePage) && "✓ Cache'dan"}
                  </div>
                </div>
              ) : (
                <div className="font-mono text-xs text-[#7a7468]">
                  Sahifani tanlang
                </div>
              )}
            </div>
            <div className="mt-3">
              <div className="font-mono text-[10px] text-[#7a7468] mb-1.5">
                Yuklangan chunklar:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PAGES.map((p) => (
                  <span
                    key={p.name}
                    className="font-mono text-[9px] px-2 py-0.5 rounded transition-all"
                    style={{
                      background: loaded.has(p.name)
                        ? `${p.color}15`
                        : "rgba(26,24,20,0.06)",
                      color: loaded.has(p.name) ? p.color : "#7a7468",
                    }}
                  >
                    {loaded.has(p.name) ? "✓" : "○"} {p.name} ({p.size})
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
