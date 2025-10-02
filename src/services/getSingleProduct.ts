import type { Product } from "../types";
import { api } from "./api";


export const getSingleProduct = async (id: string): Promise<Product> => {
  const { data } = await api.get<Product>(`/products/${id}`);
  return data;
};
