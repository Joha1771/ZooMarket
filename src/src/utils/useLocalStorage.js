import { useState, useCallback } from "react";
import storage from "./storage";

// Хук синхронизирует React state с localStorage
// Переживает F5, не падает при заблокированном хранилище
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const stored = storage.get(key);
    if (stored === null) return initial;
    try {
      return JSON.parse(stored);
    } catch {
      return initial;
    }
  });

  const set = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        storage.set(key, JSON.stringify(resolved));
        return resolved;
      });
    },
    [key],
  );

  return [value, set];
}
