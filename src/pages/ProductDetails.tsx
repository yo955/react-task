import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "../hooks";


const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { product, loading, error } = useGetSingleProduct(id ?? "");
  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error loading product details.</p>;



  if (!product) return <p className="text-center py-10">Product not found.</p>;

  return (
    <div className="container mx-auto py-10 flex flex-col md:flex-row gap-10">
      <img src={product.image} alt={product.title} className="h-80 w-80 object-contain mx-auto" />
      <div>
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-blue-600 font-bold text-xl mb-6">${product.price}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
