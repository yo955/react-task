import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      <ProductList />
    </div>
  );
};

export default Products;
