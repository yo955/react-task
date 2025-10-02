import ProductCard from "./ProductCard";
import { useGetProducts } from "../../hooks";

const ProductList = ({ limit }: { limit?: number }) => {
  const { products, loading, error } = useGetProducts(limit);

  if (loading) return <p>جاري التحميل...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (products.length === 0) return <p>لا توجد منتجات.</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
