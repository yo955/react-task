import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, price, image }: ProductProps) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="h-40 w-full object-contain mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-blue-600 font-bold mb-4">${price}</p>
      <Link
        to={`/products/${id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
