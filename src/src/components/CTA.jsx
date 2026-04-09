import { useState } from "react";
import { useTranslation } from "../i18n";
import Container from "./Container";

export default function CTA() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <section className="py-28 bg-[#1a1814] relative overflow-hidden">
      <div className="absolute inset-0 font-display text-[clamp(100px,20vw,240px)] font-black uppercase text-white/[0.03] flex items-center justify-center leading-none select-none pointer-events-none whitespace-nowrap">
        BOSHLANG
      </div>
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 border border-[#c85c1a]/30 rounded bg-[#c85c1a]/10 font-mono text-[11px] text-[#c85c1a]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-[pulseLive_1.5s_ease-in-out_infinite]" />
            {t.cta.badge}
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,72px)] font-black uppercase tracking-tight leading-none text-white mb-6">
            {t.cta.title1}
            <br />
            <span className="text-[#c85c1a]">{t.cta.title2}</span>{" "}
            {t.cta.title3}
          </h2>
          <p className="mb-10 text-base font-light leading-relaxed text-white/50">
            {t.cta.sub}
          </p>
          {sent ? (
            <div className="flex items-center justify-center gap-2 py-4 font-mono text-sm text-green-400">
              <span>✓</span>
              <span>{t.cta.success}</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder={t.cta.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 bg-white/[0.08] border border-white/[0.12] rounded-md text-white placeholder-white/35 font-light text-sm focus:outline-none focus:border-[#c85c1a]/60 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-7 cursor-pointer py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white bg-[#c85c1a] rounded-md shadow-[0_4px_0_0_#8a3a0a] hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#8a3a0a] active:translate-y-1 transition-all duration-100 whitespace-nowrap"
              >
                {t.cta.btn}
              </button>
            </form>
          )}
          <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/25">
            {t.cta.spam}
          </p>
        </div>
      </Container>
    </section>
  );
}
