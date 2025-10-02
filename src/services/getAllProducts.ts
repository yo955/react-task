import type { Product } from "../types";
import { api } from "./api";



export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await api.get<Product[]>("/products");
  return data;
};
