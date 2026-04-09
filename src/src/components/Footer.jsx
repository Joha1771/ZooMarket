import { useTranslation } from "../i18n";
import Container from "./Container";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1a0f0a] border-t border-white/[0.08]">
      <Container className="py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className="flex-shrink-0 lg:w-64">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-2.5 h-2.5 bg-[#c85c1a] rounded-sm" />
              <span className="text-xl font-extrabold tracking-wide text-white uppercase font-display">
                VizoCode
              </span>
            </div>
            <p className="mb-6 text-sm font-light leading-relaxed text-white/40">
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              {["Telegram", "Instagram", "GitHub"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-white/40 border border-white/10 rounded hover:border-white/25 hover:text-white/70 transition-all duration-200 no-underline"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
            {Object.entries(t.footer_links).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#c85c1a] mb-4">
                  {category}
                </h4>
                <ul className="flex flex-col gap-2.5 list-none p-0">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-light no-underline transition-colors duration-200 text-white/45 hover:text-white/80"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[11px] text-white/25">
            {t.footer.copyright}
          </span>
          <div className="flex gap-6">
            {[t.footer.privacy, t.footer.terms].map((label) => (
              <a
                key={label}
                href="#"
                className="font-mono text-[11px] text-white/25 hover:text-white/50 transition-colors no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
