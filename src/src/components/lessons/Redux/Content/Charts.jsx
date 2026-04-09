import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 7.10 — CHARTS: CHART.JS / RECHARTS
// ═══════════════════════════════════════════════════════════════════════════════

const MONTHS = ["Yan", "Fev", "Mar", "Apr", "May", "Iyn"];
const SALES_DATA = [4200, 3800, 5500, 4900, 6200, 5800];
const USERS_DATA = [240, 190, 380, 320, 460, 410];
const CATEGORIES = ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"];
const CAT_DATA = [120, 95, 180, 160, 80, 65];

function MiniBar({ data, labels, color, maxH = 80 }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-20">
      {data.map((v, i) => (
        <div key={i} className="flex flex-col items-center flex-1 gap-1">
          <div
            className="w-full transition-all rounded-t-sm"
            style={{ height: `${(v / max) * maxH}px`, background: color }}
          />
          <span className="font-mono text-[8px] text-[#7a7468]">
            {labels[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

function MiniLine({ data, color }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const h = 60;
  const w = 200;
  const pts = data
    .map(
      (v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`,
    )
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 60 }}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {data.map((v, i) => (
        <circle
          key={i}
          cx={(i / (data.length - 1)) * w}
          cy={h - ((v - min) / range) * h}
          r="3"
          fill={color}
        />
      ))}
    </svg>
  );
}

function DonutChart({ segments }) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let angle = 0;
  const cx = 50,
    cy = 50,
    r = 35,
    ir = 20;
  const paths = segments.map((seg) => {
    const pct = seg.value / total;
    const a1 = (angle * Math.PI) / 180;
    const a2 = ((angle + pct * 360 - 0.5) * Math.PI) / 180;
    const x1 = cx + r * Math.sin(a1),
      y1 = cy - r * Math.cos(a1);
    const x2 = cx + r * Math.sin(a2),
      y2 = cy - r * Math.cos(a2);
    const ix1 = cx + ir * Math.sin(a1),
      iy1 = cy - ir * Math.cos(a1);
    const ix2 = cx + ir * Math.sin(a2),
      iy2 = cy - ir * Math.cos(a2);
    const large = pct > 0.5 ? 1 : 0;
    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${ir} ${ir} 0 ${large} 0 ${ix1} ${iy1} Z`;
    angle += pct * 360;
    return <path key={seg.label} d={path} fill={seg.color} />;
  });
  return (
    <svg viewBox="0 0 100 100" className="w-24 h-24">
      {paths}
      <circle cx={cx} cy={cy} r={ir - 2} fill="white" />
    </svg>
  );
}

export function ChartsExplain() {
  const [tab, setTab] = useState("recharts");
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["recharts", "chartjs", "demo"].map((id) => (
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
            {id === "recharts"
              ? "Recharts"
              : id === "chartjs"
                ? "Chart.js"
                : "Demo"}
          </button>
        ))}
      </div>

      {tab === "recharts" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-[#7a7468] leading-relaxed">
            Recharts — React uchun maxsus yaratilgan chart kutubxonasi. SVG
            asosida, deklarativ API.
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "import ", color: C.kw },
                {
                  text: "{ LineChart, Line, XAxis, YAxis, Tooltip, Legend }",
                  color: C.fn,
                },
              ],
              [
                { text: "  from ", color: C.op },
                { text: "'recharts'", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "data", color: C.fn },
                { text: " = [", color: C.op },
              ],
              [
                { text: "  { month: ", color: "rgba(255,255,255,0.7)" },
                { text: "'Yan'", color: C.str },
                { text: ", sales: ", color: "rgba(255,255,255,0.7)" },
                { text: "4000", color: C.num },
                { text: ", users: ", color: "rgba(255,255,255,0.7)" },
                { text: "240", color: C.num },
                { text: " },", color: C.op },
              ],
              [{ text: "  // ...", color: C.cmt }],
              [{ text: "];", color: C.op }],
              [{ text: "" }],
              [
                { text: "<LineChart ", color: C.str },
                { text: "width={600} height={300} data={data}", color: C.fn },
                { text: ">", color: C.str },
              ],
              [
                { text: "  <XAxis ", color: C.str },
                { text: 'dataKey="month"', color: C.fn },
                { text: " />", color: C.str },
              ],
              [
                { text: "  <Line ", color: C.str },
                { text: 'dataKey="sales" stroke="#c85c1a"', color: C.fn },
                { text: " />", color: C.str },
              ],
              [{ text: "  <Tooltip />  <Legend />", color: C.str }],
              [{ text: "</LineChart>", color: C.str }],
            ]}
          />
          <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-[10px] text-[#7a7468] mb-2">
              Sales (6 oy):
            </div>
            <MiniLine data={SALES_DATA} color="#c85c1a" />
            <div className="flex gap-3 mt-2">
              {MONTHS.map((m, i) => (
                <div key={m} className="flex-1 text-center">
                  <div className="font-mono text-[9px] text-[#7a7468]">{m}</div>
                  <div className="font-mono text-[9px] font-bold text-[#c85c1a]">
                    {(SALES_DATA[i] / 1000).toFixed(1)}k
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "chartjs" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Chart.js — canvas asosida, react-chartjs-2 wrapper orqali
            ishlatiladi:
          </p>
          <CodeSnippet
            lines={[
              [
                { text: "import ", color: C.kw },
                { text: "{ Bar, Line, Doughnut }", color: C.fn },
                { text: " from ", color: C.op },
                { text: "'react-chartjs-2'", color: C.str },
                { text: ";", color: C.op },
              ],
              [{ text: "" }],
              [
                { text: "const ", color: C.kw },
                { text: "data", color: C.fn },
                { text: " = {", color: C.op },
              ],
              [
                { text: "  labels: [", color: "rgba(255,255,255,0.7)" },
                { text: "'HTML', 'CSS', 'JS'", color: C.str },
                { text: "],", color: C.op },
              ],
              [{ text: "  datasets: [{", color: "rgba(255,255,255,0.7)" }],
              [
                { text: "    label: ", color: "rgba(255,255,255,0.7)" },
                { text: "'O\\'quvchilar'", color: C.str },
                { text: ",", color: C.op },
              ],
              [
                { text: "    data: [", color: "rgba(255,255,255,0.7)" },
                { text: "120, 95, 180", color: C.num },
                { text: "],", color: C.op },
              ],
              [
                {
                  text: "    backgroundColor: [",
                  color: "rgba(255,255,255,0.7)",
                },
                { text: "'#e34c26', '#264de4', '#f7df1e'", color: C.str },
                { text: "],", color: C.op },
              ],
              [{ text: "  }]", color: "rgba(255,255,255,0.7)" }],
              [{ text: "};", color: C.op }],
              [{ text: "" }],
              [{ text: "<Bar data={data} />", color: C.str }],
              [{ text: "<Line data={data} />", color: C.str }],
              [{ text: "<Doughnut data={data} />", color: C.str }],
            ]}
          />
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)]">
              <div className="font-mono text-[10px] text-[#7a7468] mb-2">
                Bar Chart:
              </div>
              <MiniBar data={CAT_DATA} labels={CATEGORIES} color="#764abc" />
            </div>
            <div className="bg-[#f2efe8] rounded-xl p-3 border border-[rgba(26,24,20,0.10)] flex flex-col items-center">
              <div className="font-mono text-[10px] text-[#7a7468] mb-2 self-start">
                Doughnut:
              </div>
              <DonutChart
                segments={[
                  { label: "React", value: 40, color: "#61dafb" },
                  { label: "JS", value: 30, color: "#f7df1e" },
                  { label: "CSS", value: 20, color: "#264de4" },
                  { label: "HTML", value: 10, color: "#e34c26" },
                ]}
              />
            </div>
          </div>
        </div>
      )}

      {tab === "demo" && (
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            {[
              ["bar", "Bar"],
              ["line", "Line"],
              ["donut", "Donut"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setChartType(id)}
                className="flex-1 py-1.5 rounded-lg font-mono text-xs font-bold border-none cursor-pointer"
                style={{
                  background: chartType === id ? "#c85c1a" : "#f2efe8",
                  color: chartType === id ? "#fff" : "#1a1814",
                }}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="bg-[#f2efe8] rounded-xl p-4 border border-[rgba(26,24,20,0.10)]">
            <div className="font-mono text-xs font-bold text-[#1a1814] mb-3">
              {chartType === "bar"
                ? "📊 O'quvchilar modullar bo'yicha"
                : chartType === "line"
                  ? "📈 Oylik savdo statistikasi"
                  : "🍩 Kurs taqsimoti"}
            </div>
            {chartType === "bar" && (
              <MiniBar data={CAT_DATA} labels={CATEGORIES} color="#764abc" />
            )}
            {chartType === "line" && (
              <div>
                <MiniLine data={SALES_DATA} color="#c85c1a" />
                <MiniLine data={USERS_DATA} color="#4a9e60" />
                <div className="flex gap-3 mt-1">
                  {[
                    ["#c85c1a", "Savdo"],
                    ["#4a9e60", "Foydalanuvchilar"],
                  ].map(([c, l]) => (
                    <div key={l} className="flex items-center gap-1">
                      <div
                        className="w-3 h-0.5 rounded"
                        style={{ background: c }}
                      />
                      <span className="font-mono text-[9px] text-[#7a7468]">
                        {l}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {chartType === "donut" && (
              <div className="flex items-center gap-4">
                <DonutChart
                  segments={[
                    { label: "React", value: 40, color: "#61dafb" },
                    { label: "JS", value: 30, color: "#f7df1e" },
                    { label: "CSS", value: 20, color: "#264de4" },
                    { label: "HTML", value: 10, color: "#e34c26" },
                  ]}
                />
                <div className="flex flex-col gap-1.5">
                  {[
                    ["React", 40, "#61dafb"],
                    ["JS", 30, "#f7df1e"],
                    ["CSS", 20, "#264de4"],
                    ["HTML", 10, "#e34c26"],
                  ].map(([l, v, c]) => (
                    <div key={l} className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-sm"
                        style={{ background: c }}
                      />
                      <span className="font-mono text-[10px] text-[#1a1814] w-12">
                        {l}
                      </span>
                      <span className="font-mono text-[10px] font-bold text-[#7a7468]">
                        {v}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
