import { useState } from "react";
import { CodeSnippet, InfoBox, Tag, C } from "../../../../Shared/Ui";

// ═══════════════════════════════════════════════════════════════════════════════
// LESSON 6.11 — CUSTOM HOOKS, I18N
// ═══════════════════════════════════════════════════════════════════════════════

export function CustomHooksExplain() {
  const [tab, setTab] = useState("custom");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["custom", "usefetch", "i18n"].map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className="flex-1 py-2 font-mono text-xs font-bold transition-all border rounded-lg cursor-pointer"
            style={{
              background: tab === id ? "#61DAFB" : "#f2efe8",
              borderColor: tab === id ? "#61DAFB" : "rgba(26,24,20,0.10)",
              color: tab === id ? "#0a1a20" : "#1a1814",
            }}
          >
            {id === "custom"
              ? "Custom Hook"
              : id === "usefetch"
                ? "useFetch"
                : "i18n"}
          </button>
        ))}
      </div>

      {tab === "custom" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            Custom hook — qayta ishlatiladigan logic. Har doim <code>use</code>{" "}
            bilan boshlanadi:
          </p>
          {[
            {
              icon: "✓",
              text: "use bilan boshlanadi: useWindowSize, useLocalStorage",
              color: "#4a9e60",
            },
            {
              icon: "✓",
              text: "Ichida boshqa hooklar ishlatish mumkin",
              color: "#4a9e60",
            },
            {
              icon: "✓",
              text: "Komponentlar orasida logicni ulashadi",
              color: "#4a9e60",
            },
            {
              icon: "✗",
              text: "Oddiy funksiyadan farqi — ichida hook ishlatiladi",
              color: "#e06c75",
            },
          ].map(({ icon, text, color }, i) => (
            <div
              key={i}
              className="flex items-start gap-2 p-2 rounded-lg"
              style={{ background: color + "08" }}
            >
              <span style={{ color }} className="font-bold text-xs mt-0.5">
                {icon}
              </span>
              <span className="text-xs text-[#1a1814]">{text}</span>
            </div>
          ))}
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// useLocalStorage custom hook\nfunction useLocalStorage(key, defaultValue) {\n  const [value, setValue] = useState(() => {\n    return localStorage.getItem(key) ?? defaultValue;\n  });\n\n  const setItem = (newValue) => {\n    setValue(newValue);\n    localStorage.setItem(key, newValue);\n  };\n\n  return [value, setItem];\n}\n\n// Ishlatish:\nconst [theme, setTheme] = useLocalStorage('theme', 'light');`}
          </div>
        </div>
      )}

      {tab === "usefetch" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            useFetch — fetch logic ni ajratib olish:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`function useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const controller = new AbortController();\n    axios.get(url, { signal: controller.signal })\n      .then(res => setData(res.data))\n      .catch(err => {\n        if (!axios.isCancel(err)) setError(err.message);\n      })\n      .finally(() => setLoading(false));\n    return () => controller.abort();\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// Ishlating:\nconst { data, loading, error } = useFetch('/api/users');`}
          </div>
        </div>
      )}

      {tab === "i18n" && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#7a7468]">
            i18n — ko'p tilli ilova uchun. i18next va react-i18next
            kutubxonalari:
          </p>
          <div className="bg-[#2c2820] rounded-lg p-3.5 font-mono text-xs text-[#c3e88d] leading-loose whitespace-pre">
            {`// O'rnatish\nnpm install i18next react-i18next\nnpm install i18next-browser-languagedetector\n\n// i18n.js — sozlash\nimport i18n from 'i18next';\nimport { initReactI18next } from 'react-i18next';\n\ni18n.use(initReactI18next).init({\n  resources: {\n    uz: { translation: { hello: "Salom" } },\n    en: { translation: { hello: "Hello" } },\n    ru: { translation: { hello: "Привет" } },\n  },\n  lng: 'uz',\n  fallbackLng: 'uz',\n});\n\n// Komponentda:\nconst { t, i18n } = useTranslation();\n<h1>{t('hello')}</h1>\n<button onClick={() => i18n.changeLanguage('en')}>EN</button>`}
          </div>
        </div>
      )}
    </div>
  );
}
