import { useState, useEffect } from "react";

const getInitialTheme = () => {
  return localStorage.getItem("theme") || "light";
};

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Применяем сразу при загрузке
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

export function useTheme() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}
