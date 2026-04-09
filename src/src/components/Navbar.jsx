import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation, LANG_LABELS } from "../i18n";
import { NAV_LINKS } from "../data";
import { Link } from "react-router-dom";

const SNAP = { TOP: "top", BOTTOM: "bottom", LEFT: "left", RIGHT: "right" };

function getSnap(x, y, navW, navH, winW, winH) {
  const cx = x + navW / 2;
  const cy = y + navH / 2;
  const dists = {
    [SNAP.TOP]: cy,
    [SNAP.BOTTOM]: winH - cy,
    [SNAP.LEFT]: cx,
    [SNAP.RIGHT]: winW - cx,
  };
  return Object.entries(dists).reduce((a, b) => (b[1] < a[1] ? b : a))[0];
}

const SNAP_STYLE = {
  [SNAP.TOP]: {
    top: 50,
    left: "50%",
    transform: "translateX(-50%)",
    flexDirection: "row",
  },
  [SNAP.BOTTOM]: {
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    flexDirection: "row",
  },
  [SNAP.LEFT]: {
    left: 20,
    top: "50%",
    transform: "translateY(-50%)",
    flexDirection: "column",
  },
  [SNAP.RIGHT]: {
    right: 20,
    top: "50%",
    transform: "translateY(-50%)",
    flexDirection: "column",
  },
};

const SNAP_SHADOW = {
  [SNAP.TOP]: "0 5px 0 0 #0a0806, 0 20px 50px rgba(0,0,0,0.28)",
  [SNAP.BOTTOM]: "0 -5px 0 0 #0a0806, 0 -20px 50px rgba(0,0,0,0.28)",
  [SNAP.LEFT]: "5px 0 0 0 #0a0806, 20px 0 50px rgba(0,0,0,0.28)",
  [SNAP.RIGHT]: "-5px 0 0 0 #0a0806, -20px 0 50px rgba(0,0,0,0.28)",
};

export default function Navbar() {
  const { t, lang, changeLang, langs } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [snap, setSnap] = useState(SNAP.TOP);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPos, setDragPos] = useState(null);
  const [previewSnap, setPreviewSnap] = useState(null);
  const [showHint, setShowHint] = useState(true);

  const navRef = useRef(null);
  const dragRef = useRef({
    startMouseX: 0,
    startMouseY: 0,
    startLeft: 0,
    startTop: 0,
    active: false,
  });
  const NAV_ICONS = {
    courses: "📚",
    roadmap: "🗺️",
    pricing: "💎",
    community: "👥",
  };

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const onMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setShowHint(false);
    const rect = navRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragRef.current = {
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startLeft: rect.left,
      startTop: rect.top,
      active: true,
    };
    setIsDragging(true);
    setDragPos({ x: rect.left, y: rect.top });
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e) => {
      if (!dragRef.current.active) return;
      const x =
        dragRef.current.startLeft + (e.clientX - dragRef.current.startMouseX);
      const y =
        dragRef.current.startTop + (e.clientY - dragRef.current.startMouseY);
      setDragPos({ x, y });
      const nav = navRef.current;
      if (nav)
        setPreviewSnap(
          getSnap(
            x,
            y,
            nav.offsetWidth,
            nav.offsetHeight,
            window.innerWidth,
            window.innerHeight,
          ),
        );
    };
    const onUp = (e) => {
      dragRef.current.active = false;
      setIsDragging(false);
      setDragPos(null);
      setPreviewSnap(null);
      const nav = navRef.current;
      if (!nav) return;
      const x =
        dragRef.current.startLeft + (e.clientX - dragRef.current.startMouseX);
      const y =
        dragRef.current.startTop + (e.clientY - dragRef.current.startMouseY);
      setSnap(
        getSnap(
          x,
          y,
          nav.offsetWidth,
          nav.offsetHeight,
          window.innerWidth,
          window.innerHeight,
        ),
      );
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging]);

  const activeSnap = previewSnap || snap;
  const isVertical = snap === SNAP.LEFT || snap === SNAP.RIGHT;
  const navLinks = [
    { key: "roadmap", label: t.nav.roadmap },
    { key: "pricing", label: t.nav.pricing },
  ];

  return (
    <>
      {showHint && (
        <div
          className="fixed z-[60] left-1/2 -translate-x-1/2 px-4 py-2.5 bg-[#1a1814] text-white/80 text-xs font-mono rounded-lg border border-white/10 shadow-xl pointer-events-none"
          style={{
            top: 120,
            animation: "fadeUp 0.5s cubic-bezier(.16,1,.3,1) both",
          }}
        >
          {t.nav.dragHint}
        </div>
      )}

      {/* Desktop */}
      <nav
        ref={navRef}
        className="fixed z-50 hidden md:flex items-center gap-2 px-2 py-2 backdrop-blur-xl bg-[#1a1814]/90 select-none rounded-xl border border-white/[0.08]"
        style={{
          ...(isDragging && dragPos
            ? {
                left: dragPos.x,
                top: dragPos.y,
                transform: "none",
                cursor: "grabbing",
                flexDirection: "row",
              }
            : {
                ...SNAP_STYLE[snap],
                transition: isDragging
                  ? "none"
                  : "all 0.6s cubic-bezier(.16,1,.3,1)",
                flexDirection: isVertical ? "column" : "row",
              }),
          boxShadow: SNAP_SHADOW[activeSnap],
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
      >
        {/* Logo */}
        <Link to="/#hero" onMouseDown={(e) => e.stopPropagation()}>
          <div
            className={`flex items-center gap-2 px-3 py-1.5 ${isVertical ? "mb-1" : "mr-1"}`}
          >
            <div className="w-2 h-2 bg-[#c85c1a] rounded-sm animate-spin [animation-duration:12s] flex-shrink-0" />
            {!isVertical ? (
              <span className="text-sm font-extrabold tracking-wide text-white uppercase font-display whitespace-nowrap">
                VizoCode
              </span>
            ) : (
              <span className="font-display text-[10px] font-extrabold uppercase tracking-wide text-white">
                VZ
              </span>
            )}
          </div>
        </Link>
        <div
          className={
            isVertical
              ? "w-full h-px bg-white/10 my-1"
              : "w-px h-4 bg-white/10 mx-1"
          }
        />

        {navLinks.map(({ key, label }) => (
          <Link
            key={key}
            to={`#${key}`}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="relative flex items-center justify-center no-underline transition-colors duration-200 rounded-lg group text-white/60 hover:text-white hover:bg-white/10"
            style={
              isVertical
                ? { width: 40, height: 40 }
                : {
                    padding: "6px 14px",
                    fontSize: 13,
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }
            }
          >
            {isVertical ? (
              <>
                <span className="text-base">{NAV_ICONS[key]}</span>
                {/* Tooltip */}
                <span
                  className={`pointer-events-none absolute ${snap === SNAP.RIGHT ? "right-full mr-2.5" : "left-full ml-2.5"} px-2.5 py-1.5 bg-[#1a1814] text-white text-xs font-mono rounded-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50`}
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
                >
                  {label}
                </span>
              </>
            ) : (
              label
            )}
          </Link>
        ))}

        <div
          className={
            isVertical
              ? "w-full h-px bg-white/10 my-1"
              : "w-px h-4 bg-white/10 mx-1"
          }
        />

        {/* Language switcher */}
        {!isVertical && (
          <div className="relative" onMouseDown={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex cursor-pointer items-center gap-1.5 px-3 py-1.5 text-[13px] text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium whitespace-nowrap"
            >
              🌐 {LANG_LABELS[lang]}
              <svg
                className="w-3 h-3 opacity-50"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full mt-1 right-0 bg-[#1a1814] border border-white/10 rounded-lg overflow-hidden shadow-xl min-w-[120px]">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      changeLang(l);
                      setLangOpen(false);
                    }}
                    className={`w-full cursor-pointer px-4 py-2.5 text-left text-[12px] font-medium transition-colors hover:bg-white/10 ${lang === l ? "text-[#c85c1a]" : "text-white/60 hover:text-white"}`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {!isVertical && <div className="w-px h-4 mx-1 bg-white/10" />}

        <Link
          to="/#cta"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="relative flex items-center justify-center transition-colors duration-200 rounded-lg group text-white/70 hover:text-white hover:bg-white/10"
          style={
            isVertical
              ? { width: 40, height: 40 }
              : { padding: "6px 14px", fontSize: 13, fontWeight: 500 }
          }
        >
          {isVertical ? (
            <>
              <span className="text-base">🔑</span>
              <span
                className={`pointer-events-none absolute ${snap === SNAP.RIGHT ? "right-full mr-2.5" : "left-full ml-2.5"} px-2.5 py-1.5 bg-[#1a1814] text-white text-xs font-mono rounded-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50`}
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
              >
                {t.nav.login}
              </span>
            </>
          ) : (
            t.nav.login
          )}
        </Link>

        <button
          className="group relative flex items-center justify-center font-bold cursor-pointer text-[#1a1814] bg-white rounded-lg transition-all duration-100 hover:-translate-y-px"
          style={
            isVertical
              ? {
                  width: 40,
                  height: 40,
                  boxShadow: SNAP_SHADOW[snap].split(",")[0],
                }
              : {
                  padding: "8px 20px",
                  fontSize: 13,
                  boxShadow: SNAP_SHADOW[snap].split(",")[0],
                }
          }
          onMouseDown={(e) => e.stopPropagation()}
        >
          {isVertical ? (
            <>
              <span className="text-base">🚀</span>
              <span
                className={`pointer-events-none absolute ${snap === SNAP.RIGHT ? "right-full mr-2.5" : "left-full ml-2.5"} px-2.5 py-1.5 bg-[#1a1814] text-white text-xs font-mono rounded-lg border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50`}
                style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
              >
                {t.nav.start}
              </span>
            </>
          ) : (
            <span className="tracking-wide uppercase">{t.nav.start}</span>
          )}
        </button>
      </nav>

      {/* Mobile */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden backdrop-blur-xl bg-[#1a1814]/90"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 0 0 #0a0806",
        }}
      >
        <div className="flex items-center justify-between px-4 py-3.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c85c1a] rounded-sm animate-spin [animation-duration:12s]" />
            <span className="text-sm font-extrabold tracking-wide text-white uppercase font-display">
              VizoCode
            </span>
          </div>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <div className="flex flex-col px-4 pb-4">
            {navLinks.map(({ key, label }) => (
              <Link
                key={key}
                to={`#${key}`}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                className="py-3 text-sm font-medium no-underline transition-colors border-b text-white/70 border-white/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
            {/* Mobile lang switcher */}
            <div className="flex gap-2 pt-3 pb-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => changeLang(l)}
                  className={`px-3 py-1.5 cursor-pointer text-xs font-mono rounded-md border transition-colors ${lang === l ? "bg-[#c85c1a] border-[#c85c1a] text-white" : "border-white/15 text-white/50 hover:text-white"}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-3">
              <Link
                to="/#footer"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                className="w-full text-center py-2.5 text-sm text-white/70 border border-white/15 rounded-lg"
              >
                {t.nav.login}
              </Link>
              <button
                className="w-full cursor-pointer py-2.5 text-sm font-bold uppercase tracking-wide text-[#1a1814] bg-white rounded-lg"
                style={{ boxShadow: "0 4px 0 0 #c0bdb7" }}
              >
                {t.nav.start}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
