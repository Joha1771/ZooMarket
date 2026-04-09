// ─── COURSES PAGE ─────────────────────────────────────────────────────────────
import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "../../i18n/index";
import { useNavigate, useSearchParams } from "react-router-dom";
import storage from "../../utils/storage";
import { useLocalStorage } from "../../utils/useLocalStorage";

import {
  MODULES,
  LESSON_CONTENT_KEYS,
  MODULE_INTRO_ROUTES,
  getByPath,
} from "./Curriculum";
import { LessonView } from "./LessonView";
import { ProModal } from "./ProModal";

const FONT_SIZES = { S: "13px", M: "15px", L: "17px" };

export default function CoursesPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isPro] = useState(true);
  const [activeModule, setActiveModule] = useState("html-css");
  const [activeLesson, setActiveLesson] = useState(null);
  const [showProModal, setShowProModal] = useState(false);
  const [xpPopup, setXpPopup] = useState(null);
  const [fontSize, setFontSize] = useState("M");
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const lesson = params.get("lesson");
    if (lesson) setActiveLesson(lesson);
  }, [params]);

  const [doneIds, setDoneIds] = useLocalStorage("completedLessons", []);
  const [totalXP, setTotalXP] = useLocalStorage("totalXP", 0);
  const completedLessons = useMemo(() => new Set(doneIds), [doneIds]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--lesson-font-size",
      FONT_SIZES[fontSize],
    );
  }, [fontSize]);

  const navigateRef = useRef(navigate);
  useEffect(() => {
    navigateRef.current = navigate;
  });

  useEffect(() => {
    const entry = MODULE_INTRO_ROUTES[activeModule];
    if (entry && !storage.has(entry.storageKey)) {
      navigateRef.current(entry.route);
    }
  }, [activeModule]);

  const module = useMemo(
    () => MODULES.find((m) => m.id === activeModule),
    [activeModule],
  );
  const lessonXP = useMemo(
    () => LESSON_CONTENT_KEYS[activeLesson]?.xp || 60,
    [activeLesson],
  );

  const handleLessonClick = useCallback(
    (l) => {
      if (!isPro && !l.free) {
        setShowProModal(true);
        return;
      }
      setActiveLesson(l.id);
      setParams({ lesson: l.id });
    },
    [isPro, setParams],
  );

  const handleComplete = useCallback(
    (xp) => {
      if (completedLessons.has(activeLesson)) return;
      setDoneIds((prev) => [...new Set([...prev, activeLesson])]);
      setTotalXP((x) => x + xp);
      setXpPopup(`+${xp} XP`);
      setTimeout(() => setXpPopup(null), 2000);
    },
    [completedLessons, activeLesson, setDoneIds, setTotalXP],
  );

  return (
    <div className="bg-[#e8e4dc] min-h-screen pt-20">
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes xpPop { 0%{opacity:1;transform:translateX(-50%) translateY(0)} 100%{opacity:0;transform:translateX(-50%) translateY(-24px)} }
        @keyframes slideIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div className="max-w-[1600px] mx-auto px-6 pb-12 pt-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="font-mono text-[11px] text-[#c85c1a] uppercase tracking-widest mb-1">
              {getByPath(t, "courses.label")}
            </p>
            <h1 className="font-mono text-4xl font-black uppercase text-[#1a1814] tracking-tight leading-none">
              {getByPath(t, "courses.title")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            {xpPopup && (
              <div
                className="font-mono text-sm font-bold text-[#c85c1a]"
                style={{ animation: "xpPop 2s ease forwards" }}
              >
                {xpPopup}
              </div>
            )}

            {/* Font size */}
            <div className="flex items-center gap-0.5 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-xl p-1">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className="font-mono text-xs font-bold transition-all duration-150 border-none rounded-lg cursor-pointer w-7 h-7"
                  style={{
                    background: fontSize === size ? "#1a1814" : "transparent",
                    color: fontSize === size ? "#fff" : "#7a7468",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Theory button */}
            {MODULE_INTRO_ROUTES[activeModule] && (
              <button
                onClick={() =>
                  navigateRef.current(MODULE_INTRO_ROUTES[activeModule].route)
                }
                className="px-3 py-2 rounded-xl font-mono text-xs border border-[rgba(26,24,20,0.10)] bg-[#f2efe8] text-[#1a1814] cursor-pointer hover:border-[#c85c1a] transition-all"
              >
                📖{" "}
                {activeModule === "javascript"
                  ? "JS"
                  : activeModule === "html-css"
                    ? "HTML"
                    : "CSS"}{" "}
                Nazariya
              </button>
            )}

            {/* XP counter */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#f2efe8] border border-[rgba(26,24,20,0.10)] rounded-xl">
              <span className="text-base">⚡</span>
              <div>
                <div className="font-mono text-base font-black text-[#c85c1a]">
                  {totalXP} XP
                </div>
                <div className="text-[10px] text-[#7a7468] font-mono">
                  {completedLessons.size}{" "}
                  {getByPath(t, "courses.lessonsCompleted")}
                </div>
              </div>
            </div>

            {!isPro && (
              <button
                onClick={() => setShowProModal(true)}
                className="px-4 py-2 rounded-2xl bg-[#c85c1a] text-white border-none cursor-pointer font-mono text-xs font-bold"
                style={{ boxShadow: "0 3px 0 0 #8a3a0a" }}
              >
                {getByPath(t, "courses.getPro")}
              </button>
            )}
          </div>
        </div>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "280px 1fr" }}
        >
          {/* Sidebar */}
          <div className="flex flex-col gap-1.5">
            {MODULES.map((m) => {
              const doneLessons = m.lessons.filter((l) =>
                completedLessons.has(l.id),
              ).length;
              const isActive = activeModule === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setActiveModule(m.id);
                    setActiveLesson(null);
                  }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 border"
                  style={{
                    background: isActive ? "#1a1814" : "#f2efe8",
                    border: `1.5px solid ${isActive ? "#1a1814" : "rgba(26,24,20,0.10)"}`,
                    color: isActive ? "#fff" : "#1a1814",
                    boxShadow: isActive ? "0 3px 0 0 #0a0806" : "none",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] font-bold text-[#c85c1a]">
                      {m.num}
                    </span>
                    <span className="flex-1 font-mono font-bold tracking-wide uppercase truncate text-md">
                      {getByPath(t, m.titleKey)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <div
                      className="flex-1 h-0.5 rounded-full overflow-hidden"
                      style={{
                        background: isActive
                          ? "rgba(255,255,255,0.15)"
                          : "rgba(26,24,20,0.10)",
                      }}
                    >
                      <div
                        className="h-full rounded-full bg-[#c85c1a] transition-all duration-500"
                        style={{
                          width: `${(doneLessons / m.lessons.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span
                      className="font-mono text-[9px] whitespace-nowrap"
                      style={{
                        color: isActive ? "rgba(255,255,255,0.4)" : "#7a7468",
                      }}
                    >
                      {doneLessons}/{m.lessons.length}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main content */}
          <div style={{ animation: "slideIn 0.3s ease" }}>
            {activeLesson ? (
              <LessonView
                lessonId={activeLesson}
                xp={lessonXP}
                t={t}
                onComplete={() => handleComplete(lessonXP)}
                onBack={() => {
                  setActiveLesson(null);
                  setParams({});
                }}
              />
            ) : (
              <div>
                {/* Module header */}
                <div className="bg-[#f2efe8] rounded-2xl border border-[rgba(26,24,20,0.10)] p-4 mb-4 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 bg-[#c85c1a12] border border-[#c85c1a20]">
                    {module?.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[11px] text-[#c85c1a] mb-0.5">
                      {module?.num} · {getByPath(t, module?.weeksKey)}
                    </div>
                    <div className="font-mono text-lg font-black uppercase text-[#1a1814]">
                      {getByPath(t, module?.titleKey)}
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="font-mono text-sm font-bold text-[#1a1814]">
                      {
                        module?.lessons.filter((l) =>
                          completedLessons.has(l.id),
                        ).length
                      }
                      /{module?.lessons.length}
                    </div>
                    <div className="text-[11px] text-[#7a7468]">
                      {getByPath(t, "courses.lessonsCompleted")}
                    </div>
                  </div>
                </div>

                {/* Lessons list */}
                <div className="flex flex-col gap-1.5">
                  {module?.lessons.map((l, i) => {
                    const locked = !isPro && !l.free;
                    const done = completedLessons.has(l.id);
                    const hasContent = !!LESSON_CONTENT_KEYS[l.id];
                    return (
                      <button
                        key={l.id}
                        onClick={() => handleLessonClick(l)}
                        className="flex items-center w-full gap-3 px-4 py-3 text-left transition-all duration-150 border rounded-xl"
                        style={{
                          background: done ? "#4a9e6010" : "#f2efe8",
                          border: `1.5px solid ${done ? "#4a9e6040" : "rgba(26,24,20,0.10)"}`,
                          cursor: locked ? "default" : "pointer",
                          opacity: locked ? 0.7 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (!locked)
                            e.currentTarget.style.borderColor = "#c85c1a60";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = done
                            ? "#4a9e6040"
                            : "rgba(26,24,20,0.10)";
                        }}
                      >
                        <span
                          className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center font-mono text-[11px] font-bold"
                          style={{
                            background: done
                              ? "#4a9e6020"
                              : locked
                                ? "rgba(26,24,20,0.10)"
                                : "#c85c1a12",
                            color: done
                              ? "#2a6040"
                              : locked
                                ? "#7a7468"
                                : "#c85c1a",
                            border: `1px solid ${done ? "#4a9e6040" : locked ? "rgba(26,24,20,0.10)" : "#c85c1a25"}`,
                          }}
                        >
                          {done ? "✓" : locked ? "🔒" : `${i + 1}`}
                        </span>
                        <div className="flex-1">
                          <div
                            className="font-semibold text-md"
                            style={{
                              color: locked ? "#7a7468" : "#1a1814",
                              fontWeight: done ? 500 : 600,
                            }}
                          >
                            {getByPath(t, l.titleKey)}
                          </div>
                          <div className="flex gap-2 mt-0.5 items-center">
                            {l.free && (
                              <span className="font-mono text-[10px] text-[#2a6040] bg-[#4a9e6015] px-1.5 py-0.5 rounded">
                                {getByPath(t, "courses.free")}
                              </span>
                            )}
                            {hasContent && (
                              <span className="font-mono text-[10px] text-[#c85c1a] bg-[#c85c1a10] px-1.5 py-0.5 rounded">
                                {getByPath(t, "courses.interactive")}
                              </span>
                            )}
                            {done && (
                              <span className="font-mono text-[10px] text-[#2a6040]">
                                +{LESSON_CONTENT_KEYS[l.id]?.xp || 60} XP
                              </span>
                            )}
                          </div>
                        </div>
                        {!locked && !done && (
                          <span className="text-[#7a7468] text-sm">→</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showProModal && (
        <ProModal t={t} onClose={() => setShowProModal(false)} />
      )}
    </div>
  );
}
