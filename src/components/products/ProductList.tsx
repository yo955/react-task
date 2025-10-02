import { useState } from "react";
import ProductCard from "./ProductCard";
import { useGetProducts } from "../../hooks";

const categories = [
  { key: "all", label: "all" },
  { key: "men's clothing", label: "men's clothing" },
  { key: "women's clothing", label: "women's clothing" },
  { key: "electronics", label: "electronics" },
  { key: "jewelery", label: "jewelery" },
];

const ProductList = ({ limit }: { limit?: number }) => {
  const [category, setCategory] = useState<string>("all");
  const { products, loading, error } = useGetProducts(limit, category);

  return (
    <div>
      {/* Filter By Category*/}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${category === cat.key
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading && <p>جاري التحميل...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && products.length === 0 && <p>لا توجد منتجات.</p>}

      {/* Products List*/}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
