import axios from "axios";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const api = axios.create({
  baseURL: `${supabaseUrl}/rest/v1`,
  headers: {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
  },
});

export const getProducts = (params = {}) => {
  const query = new URLSearchParams({
    select: "*",
    order: "created_at.desc",
    ...params,
  });
  return api.get(`/products?${query}`);
};

export const getProductById = (id) => api.get(`/products?id=eq.${id}&select=*`);

export const getProductsByCategory = (category) =>
  api.get(`/products?category=eq.${category}&select=*&order=created_at.desc`);

// ─── QUICK-ФИЛЬТРЫ ───────────────────────────────────────────
const QUICK_FILTERS = {
  Кошки: {
    Влажный: { nameKeywords: ["влажный", "кусочки", "паштет", "желе"] },
    Сухой: { nameKeywords: ["сухой"] },
    Холистик: {
      nameKeywords: ["беззерновой", "холистик"],
      brands: ["ACANA", "Orijen", "Grandorf"],
    },
    "При аллергии": { nameKeywords: ["гипоаллерген", "sensitive"] },
    Котятам: { nameKeywords: ["котят", "kitten"] },
  },
  Собаки: {
    Влажный: { nameKeywords: ["влажный", "кусочки", "паштет"] },
    Сухой: { nameKeywords: ["сухой"] },
    Холистик: {
      nameKeywords: ["беззерновой", "холистик"],
      brands: ["ACANA", "Orijen"],
    },
    Щенкам: { nameKeywords: ["щенк", "puppy", "junior"] },
    "При аллергии": { nameKeywords: ["гипоаллерген", "sensitive"] },
  },
  Грызуны: {
    Хомяки: { nameKeywords: ["хомяк"] },
    Кролики: { nameKeywords: ["кролик"] },
    "Морские свинки": { nameKeywords: ["свинк"] },
    Шиншиллы: { nameKeywords: ["шиншилл"] },
  },
  Птицы: {
    Попугаи: { nameKeywords: ["попугай"] },
    Канарейки: { nameKeywords: ["канарейк"] },
    Корм: { subcategory: "Корм" },
    Клетки: { nameKeywords: ["клетк"] },
  },
  Аквариумистика: {
    Корм: { subcategory: "Корм" },
    Оборудование: { subcategory: "Оборудование" },
    Декор: { subcategory: "Декор" },
    Химия: { subcategory: "Химия" },
  },
  Ветаптека: {
    Витамины: { subcategory: "Витамины" },
    "От блох": { nameKeywords: ["блох"] },
    "От глистов": { nameKeywords: ["глист", "гельминт"] },
    Антисептики: { subcategory: "Антисептики" },
  },
};

// ─── ОСНОВНАЯ ФУНКЦИЯ ФИЛЬТРАЦИИ ─────────────────────────────
export const getFilteredProducts = ({
  category,
  quickFilter,
  priceFrom,
  priceTo,
  subcategory,
  age,
  purpose,
  brand,
  sort,
  q,
} = {}) => {
  // Строим URL вручную — НЕ через URLSearchParams
  // чтобы кириллица не кодировалась дважды
  const parts = ["select=*"];

  if (category && category !== "all") {
    parts.push(`category=eq.${category}`);
  }

  if (priceFrom && priceFrom !== "0") parts.push(`price=gte.${priceFrom}`);
  if (priceTo && priceTo !== "99999") parts.push(`price=lte.${priceTo}`);

  if (subcategory) parts.push(`subcategory=eq.${subcategory}`);
  if (age) parts.push(`age=eq.${age}`);
  if (purpose) parts.push(`purpose=eq.${purpose}`);
  if (brand) parts.push(`brand=eq.${brand}`);
  if (q) parts.push(`name=ilike.*${q}*`);

  // ── Quick-фильтр ─────────────────────────────────────────
  if (quickFilter && category && QUICK_FILTERS[category]?.[quickFilter]) {
    const f = QUICK_FILTERS[category][quickFilter];

    if (f.subcategory && !subcategory) {
      parts.push(`subcategory=eq.${f.subcategory}`);
    }

    if (f.brands?.length) {
      parts.push(`brand=in.(${f.brands.join(",")})`);
    }

    if (f.nameKeywords?.length) {
      const orParts = f.nameKeywords
        .map((kw) => `name.ilike.*${kw}*`)
        .join(",");
      parts.push(`or=(${orParts})`);
    }
  }

  // ── Сортировка ───────────────────────────────────────────
  const sortMap = {
    popular: "is_hit.desc,stock_quantity.desc",
    price_asc: "price.asc",
    price_desc: "price.desc",
    discount: "discount.desc",
    new: "created_at.desc",
  };
  parts.push(`order=${sortMap[sort] || "is_hit.desc"}`);

  return api.get(`/products?${parts.join("&")}`);
};

export const getHitProducts = () =>
  api.get(`/products?is_hit=eq.true&select=*&limit=10`);

export const getPromoProducts = () =>
  api.get(`/products?is_promo=eq.true&select=*&limit=10`);

export default api;
