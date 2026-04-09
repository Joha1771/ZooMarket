// ─── PRO MODAL ────────────────────────────────────────────────────────────────
import { getByPath } from "./Curriculum";

export function ProModal({ t, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[rgba(26,24,20,0.6)] flex items-center justify-center z-[100]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f2efe8] rounded-2xl p-9 max-w-sm w-[90%] border border-[rgba(26,24,20,0.10)]"
        style={{
          boxShadow: "0 24px 60px rgba(26,24,20,0.3)",
          animation: "slideIn 0.3s ease",
        }}
      >
        <div className="mb-6 text-center">
          <div className="mb-3 text-4xl">🚀</div>
          <h2 className="font-mono text-xl font-black uppercase text-[#1a1814] mb-2">
            {getByPath(t, "courses.proModal.title")}
          </h2>
          <p className="text-sm text-[#7a7468] leading-relaxed">
            {getByPath(t, "courses.proModal.desc")}
          </p>
        </div>
        {(getByPath(t, "courses.proModal.features") || []).map((f) => (
          <div key={f} className="flex gap-2.5 items-center mb-2.5">
            <span className="text-[#4a9e60] text-sm">✓</span>
            <span className="text-sm text-[#1a1814]">{f}</span>
          </div>
        ))}
        <button
          onClick={onClose}
          className="w-full mt-5 py-3.5 rounded-xl bg-[#c85c1a] text-white border-none cursor-pointer font-mono text-sm font-black uppercase tracking-wider"
          style={{ boxShadow: "0 5px 0 0 #8a3a0a" }}
        >
          {getByPath(t, "courses.proModal.cta")}
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2.5 py-2.5 bg-transparent border-none cursor-pointer text-[#7a7468] text-xs font-mono"
        >
          {getByPath(t, "courses.proModal.close")}
        </button>
      </div>
    </div>
  );
}
