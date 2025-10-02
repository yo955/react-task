import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { getSingleProduct } from "../services";
import type { Product } from "../types";

export const useGetSingleProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getSingleProduct(id);
        setProduct(data);
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
  }, [id]);

  return { product, loading, error };
};
