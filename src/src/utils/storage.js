// Безопасная обёртка над localStorage
// Не падает в Safari Private Mode и заблокированных iframe
const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      console.log(err);
    }
  },
  has(key) {
    return this.get(key) !== null;
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {}
  },
};

export default storage;
