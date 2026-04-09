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

export const getHitProducts = () =>
  api.get(`/products?is_hit=eq.true&select=*&limit=10`);

export const getPromoProducts = () =>
  api.get(`/products?is_promo=eq.true&select=*&limit=10`);

export default api;
