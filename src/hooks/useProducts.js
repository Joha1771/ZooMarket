import { useState, useEffect } from "react";
import {
  getProducts,
  getProductsByCategory,
  getProductById,
  getHitProducts,
  getPromoProducts,
} from "../api/api";

// Гарантирует что всегда возвращается массив
const toArray = (data) => (Array.isArray(data) ? data : []);

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const request = category ? getProductsByCategory(category) : getProducts();

    request
      .then((res) => setProducts(toArray(res.data)))
      .catch((err) => {
        console.error("useProducts error:", err.response?.data || err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return { products, loading, error };
}

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    getProductById(id)
      .then((res) => setProduct(toArray(res.data)[0] ?? null))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { product, loading, error };
}

export function useHitProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHitProducts()
      .then((res) => setProducts(toArray(res.data)))
      .catch((err) =>
        console.error(
          "useHitProducts error:",
          err.response?.data || err.message,
        ),
      )
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}

export function usePromoProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPromoProducts()
      .then((res) => setProducts(toArray(res.data)))
      .catch((err) =>
        console.error(
          "usePromoProducts error:",
          err.response?.data || err.message,
        ),
      )
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}
