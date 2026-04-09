import { useNavigate } from "react-router";
import { useTranslation } from "../i18n";
import Container from "./Container";
import FloatingCode from "./FloatingCode";

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1080px] flex items-center justify-center overflow-hidden bg-[#e8e4dc]">
      <FloatingCode />
      {/* Background wordmark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-black uppercase tracking-tighter text-[#1a1814]/[0.06] whitespace-nowrap leading-none select-none pointer-events-none"
        style={{ fontSize: "clamp(80px, 14vw, 180px)" }}
      >
        VIZOCODE
      </div>

      <Container className="relative z-10 flex items-center justify-between w-full h-full">
        {/* Left */}
        <div className="max-w-2xl animate-[fadeUp_1s_cubic-bezier(.16,1,.3,1)_.3s_both] flex-shrink-0">
          {/* Badge — honest: coming soon */}с
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-[#c85c1a]/25 rounded bg-[#c85c1a]/[0.06] font-mono text-[11px] text-[#c85c1a]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c85c1a] animate-[pulseLive_1.5s_ease-in-out_infinite]" />
            {t.hero.badge}
          </div>
          <h1
            className="font-display font-black leading-[0.95] tracking-tight uppercase text-[#1a1814] mb-6"
            style={{ fontSize: "clamp(48px, 5.5vw, 88px)" }}
          >
            {[
              { text: t.hero.title1, accent: false, delay: ".45s" },
              { text: t.hero.title2, accent: true, delay: ".6s" },
              { text: t.hero.title3, accent: false, delay: ".75s" },
              { text: t.hero.title4, accent: false, delay: ".9s" },
            ].map(({ text, accent, delay }) => (
              <span key={text} className="block overflow-hidden">
                <span
                  className={`block animate-[revealLine_.9s_cubic-bezier(.16,1,.3,1)_both] ${accent ? "text-[#c85c1a]" : ""}`}
                  style={{ animationDelay: delay }}
                >
                  {text}
                </span>
              </span>
            ))}
          </h1>
          <p className="text-base text-[#7a7468] leading-relaxed max-w-sm mb-8 font-light animate-[fadeUp_1s_cubic-bezier(.16,1,.3,1)_1.05s_both]">
            {t.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch  gap-3 mb-10 px-5 animate-[fadeUp_1s_cubic-bezier(.16,1,.3,1)_1.15s_both]">
            <button
              className="flex cursor-pointer items-center gap-2.5 px-7 py-4 font-display text-[17px] font-bold uppercase tracking-wide text-white bg-[#c85c1a] rounded-md shadow-[0_5px_0_0_#8a3a0a] hover:-translate-y-0.5 hover:shadow-[0_8px_0_0_#8a3a0a] active:translate-y-1 transition-all duration-100"
              onClick={() => navigate("intro")}
            >
              {t.hero.cta} <span className="text-lg">→</span>
            </button>
            <button className="flex cursor-pointer items-center gap-2 px-6 py-4 text-sm text-[#7a7468] border border-black/20 rounded-md bg-transparent hover:border-[#1a1814] hover:text-[#1a1814] transition-all duration-200">
              ▷ &nbsp;{t.hero.demo}
            </button>
          </div>
          {/* Stats — honest numbers only */}
          <div className="flex gap-9 pt-7 border-t border-black/10 animate-[fadeUp_1s_cubic-bezier(.16,1,.3,1)_1.25s_both]">
            {[
              { num: t.hero.stat1num, label: t.hero.stat1label },
              { num: t.hero.stat2num, label: t.hero.stat2label },
              { num: t.hero.stat3num, label: t.hero.stat3label },
            ].map(({ num, label }) => (
              <div key={num}>
                <div className="font-display text-3xl font-black tracking-tight text-[#1a1814] leading-none">
                  {num}
                </div>
                <div className="text-xs text-[#7a7468] mt-1 font-light">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — 3D code window */}
        <div className="hidden lg:flex items-center animate-[fadeUp_1.2s_cubic-bezier(.16,1,.3,1)_.7s_both]">
          <div className="relative w-[480px] xl:w-[520px] flex-shrink-0 perspective-[1200px]">
            {/* Float: lesson */}
            <div className="absolute -left-16 top-6 z-20 bg-[#f2efe8] border border-black/10 rounded-xl px-4 py-3 shadow-[0_14px_36px_rgba(26,24,20,.16)] animate-[float1_4s_ease-in-out_infinite]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#7a7468] mb-0.5">
                {t.hero.floatLesson}
              </div>
              <div className="font-display text-sm font-extrabold text-[#c85c1a]">
                React Hooks
              </div>
              <div className="text-[11px] text-[#7a7468] mt-0.5 font-light">
                useState · useEffect
              </div>
            </div>

            {/* Float: streak */}
            <div className="absolute right-16 -top-4 z-20 bg-[#f2efe8] border border-black/10 rounded-xl px-4 py-3 shadow-[0_14px_36px_rgba(26,24,20,.16)] animate-[float2_5s_ease-in-out_infinite]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#7a7468] mb-0.5">
                {t.hero.floatStreak}
              </div>
              <div className="font-display text-lg font-black text-[#1a1814]">
                {t.hero.floatStreakVal}
              </div>
              <div className="text-[11px] text-[#7a7468] mt-0.5 font-light">
                {t.hero.floatStreakSub}
              </div>
            </div>

            {/* Code window */}
            <div className="bg-[#2c2820] rounded-2xl border border-white/[0.06] overflow-hidden shadow-[-28px_36px_70px_rgba(26,24,20,.3)] [transform:rotateY(-7deg)_rotateX(2deg)] hover:[transform:rotateY(-3deg)_rotateX(1deg)] transition-transform duration-400">
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.03] border-b border-white/[0.05]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="flex-1 text-center font-mono text-[11px] text-white/20">
                  App.jsx — VizoCode Editor
                </span>
              </div>
              <div className="px-5 py-5 font-mono text-[12.5px] leading-[1.85]">
                <CodeLine
                  ln="1"
                  content={
                    <span className="text-[#4a5568] italic">
                      // useState ni o'rganamiz
                    </span>
                  }
                />
                <CodeLine
                  ln="2"
                  content={
                    <>
                      <span className="text-[#c792ea]">import</span> React,{" "}
                      {"{"} <span className="text-[#82aaff]">useState</span>{" "}
                      {"}"} <span className="text-[#c792ea]">from</span>{" "}
                      <span className="text-[#c3e88d]">'react'</span>
                    </>
                  }
                />
                <CodeLine ln="3" content={null} />
                <CodeLine
                  ln="4"
                  content={
                    <>
                      <span className="text-[#c792ea]">function</span>{" "}
                      <span className="text-[#82aaff]">Counter</span>() {"{"}
                    </>
                  }
                />
                <CodeLine
                  ln="5"
                  content={
                    <>
                      &nbsp;&nbsp;<span className="text-[#c792ea]">const</span>{" "}
                      [<span className="text-[#82aaff]">count</span>,{" "}
                      <span className="text-[#82aaff]">setCount</span>] ={" "}
                      <span className="text-[#82aaff]">useState</span>(
                      <span className="text-[#f78c6c]">0</span>)
                    </>
                  }
                />
                <CodeLine ln="6" content={null} />
                <CodeLine
                  ln="7"
                  content={
                    <>
                      &nbsp;&nbsp;<span className="text-[#c792ea]">return</span>{" "}
                      (
                    </>
                  }
                />
                <CodeLine
                  ln="8"
                  content={
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-[#f07178]">&lt;div</span>{" "}
                      <span className="text-[#ffcb6b]">className</span>=
                      <span className="text-[#c3e88d]">"card"</span>
                      <span className="text-[#f07178]">&gt;</span>
                    </>
                  }
                />
                <CodeLine
                  ln="9"
                  content={
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-[#f07178]">&lt;h2&gt;</span>
                      {"{"}
                      <span className="text-[#82aaff]">count</span>
                      {"}"}
                      <span className="text-[#f07178]">&lt;/h2&gt;</span>
                    </>
                  }
                />
                <CodeLine
                  ln="10"
                  content={
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-[#f07178]">&lt;button</span>{" "}
                      <span className="text-[#ffcb6b]">onClick</span>={"{"} ()
                      =&gt; <span className="text-[#82aaff]">setCount</span>
                      (count+<span className="text-[#f78c6c]">1</span>) {"}"}
                      <span className="text-[#f07178]">&gt;</span>
                    </>
                  }
                />
                <CodeLine
                  ln="11"
                  content={
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+1 bosing
                      <span className="inline-block w-0.5 h-3.5 bg-[#e07a3a] animate-[blink_1s_step-end_infinite] align-middle ml-0.5" />
                    </>
                  }
                />
                <CodeLine
                  ln="12"
                  content={
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-[#f07178]">&lt;/button&gt;</span>
                    </>
                  }
                />
                <CodeLine
                  ln="13"
                  content={
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-[#f07178]">&lt;/div&gt;</span>
                    </>
                  }
                />
                <CodeLine ln="14" content={<>&nbsp;&nbsp;)</>} />
                <CodeLine ln="15" content={<>{"}"}</>} />
              </div>
            </div>

            {/* Float: XP */}
            <div className="absolute -left-14 bottom-10 z-20 bg-[#f2efe8] border border-black/10 rounded-xl px-4 py-3 shadow-[0_14px_36px_rgba(26,24,20,.16)] animate-[float3_4.5s_ease-in-out_infinite]">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#7a7468] mb-0.5">
                {t.hero.floatXpLabel}
              </div>
              <div className="font-display text-lg font-black text-[#c85c1a]">
                2,840 XP
              </div>
              <div className="h-1 mt-2 overflow-hidden rounded-full bg-black/10 w-28">
                <div className="h-full bg-[#c85c1a] rounded-full animate-[xpGrow_2s_cubic-bezier(.16,1,.3,1)_1.8s_forwards] w-0" />
              </div>
              <div className="text-[11px] text-[#7a7468] mt-1.5 font-light">
                {t.hero.floatXpSub}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#7a7468] z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest">
          {t.hero.scroll}
        </span>
        <span className="text-base animate-[scrollBounce_1.8s_ease-in-out_infinite]">
          ↓
        </span>
      </div>
    </section>
  );
}

function CodeLine({ ln, content }) {
  return (
    <div className="flex gap-4">
      <span className="text-white/10 min-w-[18px] text-right select-none">
        {ln}
      </span>
      <span className="text-white/80">{content}</span>
    </div>
  );
}
