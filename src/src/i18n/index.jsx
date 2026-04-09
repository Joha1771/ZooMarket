/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from "react";
import { uz } from "./uz";
import { ru } from "./ru";
import { en } from "./en";

const LANGS = { uz, ru, en };
export const LANG_LABELS = { uz: "O'zbek", ru: "Русский", en: "English" };

const I18nContext = createContext(null);

function getSavedLang() {
  try {
    const saved = localStorage.getItem("app_lang");
    if (saved && LANGS[saved]) return saved;
  } catch {}
  return "uz";
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(getSavedLang);

  const t = LANGS[lang];

  const changeLang = useCallback((newLang) => {
    if (LANGS[newLang]) {
      setLang(newLang);
      try {
        localStorage.setItem("app_lang", newLang);
      } catch {}
    }
  }, []);

  return (
    <I18nContext.Provider
      value={{ t, lang, changeLang, langs: Object.keys(LANGS) }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used inside I18nProvider");
  return ctx;
}
