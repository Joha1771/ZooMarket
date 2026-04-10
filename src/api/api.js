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
  api.get(
    `/products?category=eq.${encodeURIComponent(category)}&select=*&order=created_at.desc`,
  );

// Фильтрованный запрос для CatalogPage
export const getFilteredProducts = ({
  category,
  priceFrom,
  priceTo,
  subcategory,
  age,
  purpose,
  brand,
  sort,
  q,
} = {}) => {
  const params = new URLSearchParams({ select: "*" });

  if (category && category !== "all")
    params.append("category", `eq.${category}`);
  if (priceFrom) params.append("price", `gte.${priceFrom}`);
  if (priceTo) params.append("price", `lte.${priceTo}`);
  if (subcategory) params.append("subcategory", `eq.${subcategory}`);
  if (age) params.append("age", `eq.${age}`);
  if (purpose) params.append("purpose", `eq.${purpose}`);
  if (brand) params.append("brand", `eq.${brand}`);
  if (q) params.append("name", `ilike.*${q}*`);

  const sortMap = {
    popular: "is_hit.desc",
    price_asc: "price.asc",
    price_desc: "price.desc",
    new: "created_at.desc",
  };
  params.append("order", sortMap[sort] || "created_at.desc");

  return api.get(`/products?${params}`);
};

export const getHitProducts = () =>
  api.get(`/products?is_hit=eq.true&select=*&limit=10`);

export const getPromoProducts = () =>
  api.get(`/products?is_promo=eq.true&select=*&limit=10`);

export default api;
