import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.2 — RTK: ASYNC THUNK & EXTRAREDUCERS
// ═══════════════════════════════════════════════════════════════════════════════

const STATES = ["idle", "loading", "succeeded", "failed"];

export function RtkThunkExplain() {
  const [tab, setTab] = useState("thunk");
  const [status, setStatus] = useState("idle");
  const [userData, setUserData] = useState(null);

  const simulateFetch = async () => {
    setStatus("loading");
    setUserData(null);
    await new Promise((r) => setTimeout(r, 1500));
    const success = Math.random() > 0.3;
    if (success) {
      setStatus("succeeded");
      setUserData({ name: "Ali Karimov", email: "ali@example.com", id: 1 });
    } else {
      setStatus("failed");
    }
  };

  const statusConfig = {
    idle: { color: "#7a7468", icon: "○", label: "Kutilmoqda" },
    loading: { color: "#185FA5", icon: "⟳", label: "Yuklanmoqda..." },
    succeeded: { color: "#4a9e60", icon: "✓", label: "Muvaffaqiyat" },
    failed: { color: "#e06c75", icon: "✗", label: "Xato" },
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["thunk", "extra", "demo"].map((id) => (
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
            {id === "thunk"
              ? "createAsyncThunk"
              : id === "extra"
                ? "extraReducers"
                : "Demo"}
          </button>
        ))}
      </div>

      {tab === "thunk" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            createAsyncThunk — async funksiyalarni (API so'rovlar) Redux'ga
            integratsiya qiladi. Avtomatik 3 ta action yaratadi:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              {
                state: "pending",
                color: "#185FA5",
                desc: "So'rov ketdi",
                example: "isLoading = true",
              },
              {
                state: "fulfilled",
                color: "#4a9e60",
                desc: "Javob keldi",
                example: "data = action.payload",
              },
              {
                state: "rejected",
                color: "#e06c75",
                desc: "Xato yuz berdi",
                example: "error = action.error.message",
              },
            ].map(({ state, color, desc, example }) => (
              <div
                key={state}
                className="p-2.5 rounded-xl border text-center"
                style={{ background: `${color}10`, borderColor: `${color}40` }}
              >
                <div
                  className="mb-1 font-mono text-xs font-bold"
                  style={{ color }}
                >
                  .{state}
                </div>
                <div className="text-[10px] text-[#7a7468]">{desc}</div>
                <div
                  className="font-mono text-[9px] mt-1.5 px-1 py-0.5 rounded"
                  style={{ background: `${color}15`, color }}
                >
                  {example}
                </div>
              </div>
            ))}
          </div>
          <CodeSnippet
            lines={[
              [
                { text: "export const ", color: C.kw },
                { text: "fetchUser", color: C.fn },
                { text: " = ", color: C.op },
                { text: "createAsyncThunk", color: C.fn },
                { text: "(", color: C.op },
              ],
              [
                { text: "  'user/fetchUser',", color: C.str },
                { text: "  // action type nomi", color: C.cmt },
              ],
              [
                { text: "  async ", color: C.kw },
                { text: "(userId) => {", color: C.op },
              ],
              [
                {
                  text: "    const res = await ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "fetch", color: C.fn },
                { text: "(`/api/users/", color: C.str },
                { text: "${userId}", color: C.fn },
                { text: "`);", color: C.str },
              ],
              [
                { text: "    return ", color: C.kw },
                { text: "res.json();", color: C.fn },
              ],
              [
                {
                  text: "    // qaytgan qiymat → action.payload",
                  color: C.cmt,
                },
              ],
              [{ text: "  }", color: C.op }],
              [{ text: ");", color: C.op }],
            ]}
          />
        </div>
      )}

      {tab === "extra" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            extraReducers — thunk holatlariga reaktsiya qilish. builder.addCase
            yondashuvi tavsiya etiladi:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "const ", color: C.kw },
                { text: "userSlice", color: C.fn },
                { text: " = ", color: C.op },
                { text: "createSlice", color: C.fn },
                { text: "({", color: C.op },
              ],
              [
                { text: "  name: ", color: "rgba(255,255,255,0.7)" },
                { text: '"user"', color: C.str },
                { text: ",", color: C.op },
              ],
              [
                {
                  text: "  initialState: { data: ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "null", color: C.kw },
                { text: ", status: ", color: "rgba(255,255,255,0.7)" },
                { text: "'idle'", color: C.str },
                { text: " },", color: C.op },
              ],
              [{ text: "  reducers: {},", color: "rgba(255,255,255,0.7)" }],
              [
                {
                  text: "  extraReducers: (builder) => {",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [{ text: "    builder", color: C.fn }],
              [
                { text: "      .addCase", color: C.fn },
                { text: "(fetchUser.pending, (state) => {", color: C.op },
              ],
              [
                {
                  text: "        state.status = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'loading'", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "      })", color: C.op }],
              [
                { text: "      .addCase", color: C.fn },
                {
                  text: "(fetchUser.fulfilled, (state, action) => {",
                  color: C.op,
                },
              ],
              [
                {
                  text: "        state.status = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'succeeded'", color: C.str },
                { text: ";", color: C.op },
              ],
              [
                {
                  text: "        state.data = action.payload;",
                  color: "rgba(255,255,255,0.7)",
                },
              ],
              [{ text: "      })", color: C.op }],
              [
                { text: "      .addCase", color: C.fn },
                {
                  text: "(fetchUser.rejected, (state, action) => {",
                  color: C.op,
                },
              ],
              [
                {
                  text: "        state.status = ",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'failed'", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "      });", color: C.op }],
              [{ text: "  }", color: C.op }],
              [{ text: "});", color: C.op }],
            ]}
          />
          <InfoBox color="#764abc" icon="💡">
            <Tag color="#764abc">builder callback</Tag> usulini ishlating —
            TypeScript bilan yaxshi ishlaydi, auto-complete
            qo'llab-quvvatlanadi.
          </InfoBox>
        </div>
      )}

      {tab === "demo" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Tugmani bosib fetch simulyatsiyasini ko'ring (30% ehtimol bilan
            xato):
          </p>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-xs text-[#7a7468]">status:</div>
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-sm font-bold"
                  style={{ color: statusConfig[status].color }}
                >
                  {statusConfig[status].icon} {statusConfig[status].label}
                </span>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {STATES.map((s) => (
                <div
                  key={s}
                  className="flex-1 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    background:
                      status === s
                        ? statusConfig[s].color
                        : "rgba(26,24,20,0.10)",
                  }}
                />
              ))}
            </div>
            {userData && (
              <div className="bg-[#4a9e6015] border border-[#4a9e6040] rounded-lg p-3 mb-3">
                <div className="font-mono text-xs text-[#4a9e60] font-bold mb-1">
                  ✓ action.payload:
                </div>
                <div className="font-mono text-[10px] text-[#1a1814]">
                  {JSON.stringify(userData, null, 2)}
                </div>
              </div>
            )}
            {status === "failed" && (
              <div className="bg-[#e06c7515] border border-[#e06c7540] rounded-lg p-3 mb-3">
                <div className="font-mono text-xs text-[#e06c75]">
                  ✗ action.error.message: Network Error
                </div>
              </div>
            )}
            <button
              onClick={simulateFetch}
              disabled={status === "loading"}
              className="w-full py-2.5 rounded-lg font-mono text-xs font-bold border-none cursor-pointer transition-all"
              style={{
                background: status === "loading" ? "#f2efe8" : "#764abc",
                color: status === "loading" ? "#7a7468" : "#fff",
                boxShadow: status === "loading" ? "none" : "0 3px 0 0 #4a2880",
              }}
            >
              {status === "loading"
                ? "⟳ Yuklanmoqda..."
                : "dispatch(fetchUser(1))"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
