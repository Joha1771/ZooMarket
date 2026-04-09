import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.3 — RTK QUERY
// ═══════════════════════════════════════════════════════════════════════════════

export function RtkQueryExplain() {
  const [tab, setTab] = useState("concept");
  const [loadingId, setLoadingId] = useState(null);
  const [results, setResults] = useState({});

  const simulate = async (endpoint, id) => {
    setLoadingId(id);
    await new Promise((r) => setTimeout(r, 1000));
    setLoadingId(null);
    setResults((prev) => ({
      ...prev,
      [id]:
        endpoint === "getPosts"
          ? [
              { id: 1, title: "Redux toolkit haqida" },
              { id: 2, title: "RTK Query afzalliklari" },
            ]
          : endpoint === "createPost"
            ? { id: 101, title: "Yangi post", status: 201 }
            : { id: 1, title: "Birinchi post", body: "Lorem ipsum..." },
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["concept", "setup", "hooks"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#764abc" : "#f2efe8",
              borderColor: tab === id ? "#764abc" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#fff" : "#1a1814",
            }}
          >
            {id === "concept"
              ? "Tushuncha"
              : id === "setup"
                ? "createApi"
                : "Hooks"}
          </button>
        ))}
      </div>

      {tab === "concept" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            RTK Query — server ma'lumotlarini fetch qilish, keshlash va
            sinxronlashni avtomatlashtiradi. Boilerplate kodni keskin
            kamaytiradi.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                icon: "💾",
                title: "Caching",
                desc: "Bir marta so'ralgan ma'lumot cache'da saqlanadi. Qayta so'rov ketmaydi.",
              },
              {
                icon: "🔄",
                title: "Auto-refetch",
                desc: "Muddati o'tganda yoki invalidateTag qilinganda avtomatik yangilanadi.",
              },
              {
                icon: "⏳",
                title: "Loading states",
                desc: "isLoading, isFetching, isSuccess, isError — avtomatik.",
              },
              {
                icon: "🔗",
                title: "Optimistic updates",
                desc: "Serverga kutmasdan UI'ni yangilaydi, keyin rollback qiladi.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
              >
                <div className="mb-1 text-lg">{icon}</div>
                <div className="font-mono text-xs font-bold text-[#764abc] mb-1">
                  {title}
                </div>
                <div className="text-[10px] text-[#7a7468]">{desc}</div>
              </div>
            ))}
          </div>
          <InfoBox color="#764abc" icon="💡">
            RTK Query vs axios+useEffect: RTK Query avtomatik caching va loading
            holatlari bilan <strong>3-5x kam kod</strong> talab qiladi.
          </InfoBox>
        </div>
      )}

      {tab === "setup" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            createApi — endpoints ta'riflash. query → GET, mutation →
            POST/PUT/DELETE:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "postsApi", color: C.fn },
                { text: " = ", color: C.op },
                { text: "createApi", color: C.fn },
                { text: "({", color: C.op },
              ],
              [
                { text: "  reducerPath: ", color: "rgba(255,255,255,0.7)" },
                { text: "'postsApi'", color: C.str },
                { text: ",", color: C.op },
              ],
              [
                { text: "  baseQuery: ", color: "rgba(255,255,255,0.7)" },
                { text: "fetchBaseQuery", color: C.fn },
                { text: "({ baseUrl: ", color: C.op },
                { text: "'/api'", color: C.str },
                { text: " }),", color: C.op },
              ],
              [
                { text: "  tagTypes: [", color: "rgba(255,255,255,0.7)" },
                { text: "'Post'", color: C.str },
                { text: "],  ", color: C.op },
                { text: "// cache teglari", color: C.cmt },
              ],
              [
                {
                  text: "  endpoints: (builder) => ({",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [
                { text: "    getPosts: ", color: C.fn },
                { text: "builder.query", color: C.fn },
                { text: "({", color: C.op },
              ],
              [
                { text: "      query: () => ", color: "rgba(255,255,255,0.7)" },
                { text: "'/posts'", color: C.str },
                { text: ",  ", color: C.op },
                { text: "// GET /api/posts", color: C.cmt },
              ],
              [
                {
                  text: "      providesTags: [",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'Post'", color: C.str },
                { text: "],", color: C.op },
              ],
              [{ text: "    }),", color: C.op }],
              [
                { text: "    createPost: ", color: C.fn },
                { text: "builder.mutation", color: C.fn },
                { text: "({", color: C.op },
              ],
              [
                {
                  text: "      query: (body) => ({ url: ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'/posts'", color: C.str },
                { text: ", method: ", color: C.op },
                { text: "'POST'", color: C.str },
                { text: ", body }),", color: C.op },
              ],
              [
                {
                  text: "      invalidatesTags: [",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'Post'", color: C.str },
                { text: "],  ", color: C.op },
                { text: "// cache yangilaydi", color: C.cmt },
              ],
              [{ text: "    }),", color: C.op }],
              [{ text: "  })", color: C.op }],
              [{ text: "});", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "hooks" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            API avtomatik hook'lar yaratadi. Bosib simulyatsiyani ko'ring:
          </p>
          {[
            {
              id: "getPosts",
              hook: "useGetPostsQuery()",
              type: "query",
              color: "#4a9e60",
              endpoint: "getPosts",
            },
            {
              id: "getPost",
              hook: "useGetPostQuery(1)",
              type: "query",
              color: "#185FA5",
              endpoint: "getPost",
            },
            {
              id: "createPost",
              hook: "useCreatePostMutation()",
              type: "mutation",
              color: "#c85c1a",
              endpoint: "createPost",
            },
          ].map(({ id, hook, type, color, endpoint }) => (
            <div
              key={id}
              className="p-3 rounded-xl bg-[#f2efe8] border border-[rgba(26,24,20,0.10)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold" style={{ color }}>
                  {hook}
                </span>
                <span
                  className="px-1.5 py-0.5 rounded font-mono text-[9px]"
                  style={{ background: `${color}15`, color }}
                >
                  {type}
                </span>
              </div>
              {results[id] ? (
                <div className="bg-[#1a1814] rounded p-2 font-mono text-[10px] text-[#c3e88d]">
                  {JSON.stringify(results[id], null, 1).slice(0, 120)}...
                </div>
              ) : (
                <button
                  onClick={() => simulate(endpoint, id)}
                  disabled={loadingId === id}
                  className="px-3 py-1.5 rounded font-mono text-[10px] font-bold border-none cursor-pointer"
                  style={{ background: `${color}20`, color }}
                >
                  {loadingId === id ? "⟳ Loading..." : "▶ Simulate"}
                </button>
              )}
            </div>
          ))}
          <CodeSnippet
            lines={[
              [{ text: "// Componentda:", color: C.cmt }],
              [
                { text: "const ", color: C.kw },
                { text: "{ data, isLoading, error }", color: C.fn },
                { text: " = ", color: C.op },
                { text: "useGetPostsQuery", color: C.fn },
                { text: "();", color: C.op },
              ],
              [
                { text: "const ", color: C.kw },
                { text: "[createPost, { isLoading }]", color: C.fn },
                { text: " = ", color: C.op },
                { text: "useCreatePostMutation", color: C.fn },
                { text: "();", color: C.op },
              ],
            ]}
          />
        </div>
      )}
    </div>
  );
}
