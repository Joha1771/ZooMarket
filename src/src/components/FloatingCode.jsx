export default function FloatingCode() {
  const tags = [
    { text: "<h1>", size: 22, delay: 0, duration: 9, x: 8, accent: false },
    {
      text: "useState()",
      size: 13,
      delay: 1.2,
      duration: 11,
      x: 18,
      accent: true,
    },
    {
      text: "<button>",
      size: 16,
      delay: 3.5,
      duration: 8,
      x: 30,
      accent: false,
    },
    { text: "const", size: 20, delay: 0.8, duration: 13, x: 42, accent: false },
    {
      text: "</div>",
      size: 14,
      delay: 2.1,
      duration: 10,
      x: 55,
      accent: false,
    },
    { text: "=>", size: 26, delay: 4.0, duration: 7, x: 63, accent: true },
    {
      text: "<input />",
      size: 13,
      delay: 1.7,
      duration: 12,
      x: 74,
      accent: false,
    },
    {
      text: "return (",
      size: 15,
      delay: 5.2,
      duration: 9,
      x: 85,
      accent: false,
    },
    { text: ".map()", size: 17, delay: 0.3, duration: 11, x: 13, accent: true },
    {
      text: "<section>",
      size: 12,
      delay: 3.0,
      duration: 14,
      x: 26,
      accent: false,
    },
    { text: "props", size: 20, delay: 6.1, duration: 8, x: 38, accent: false },
    { text: "{ }", size: 28, delay: 2.8, duration: 10, x: 50, accent: true },
    { text: "async", size: 16, delay: 4.6, duration: 12, x: 68, accent: false },
    {
      text: "<footer>",
      size: 13,
      delay: 1.4,
      duration: 9,
      x: 80,
      accent: false,
    },
    { text: "[]", size: 28, delay: 7.0, duration: 7, x: 90, accent: true },
    { text: "export", size: 15, delay: 5.5, duration: 11, x: 5, accent: false },
    { text: "<nav>", size: 14, delay: 3.3, duration: 13, x: 47, accent: false },
    {
      text: ".filter()",
      size: 13,
      delay: 0.6,
      duration: 10,
      x: 72,
      accent: true,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="absolute bottom-0 font-mono select-none whitespace-nowrap"
          style={{
            left: `${tag.x}%`,
            fontSize: `${tag.size}px`,
            fontWeight: tag.accent ? 700 : 400,
            color: tag.accent
              ? `rgba(200, 92, 26, 0.28)`
              : `rgba(26, 24, 20, 0.16)`,
            animation: `floatUp ${tag.duration}s linear ${tag.delay}s infinite`,
          }}
        >
          {tag.text}
        </span>
      ))}

      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0);      opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
