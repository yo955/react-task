import type { Product } from "../types";
import { api } from "./api";

export const getAllProducts = async (category?: string): Promise<Product[]> => {
  if (category && category !== "all") {
    const { data } = await api.get<Product[]>(`/products/category/${category}`);
    return data;
  }
  const { data } = await api.get<Product[]>("/products");
  return data;
};
