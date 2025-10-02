import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import type { Product } from "../types";
import { getAllProducts } from "../services";

export const useGetProducts = (limit?: number, category?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts(category);
        setProducts(limit ? data.slice(0, limit) : data);
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          setError(err.response?.data?.message || err.message);
        } else {
          setError("حدث خطأ غير متوقع");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, category]);

  return { products, loading, error };
};
