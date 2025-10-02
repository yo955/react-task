import { Link } from "react-router-dom";
import type { Product } from "../../types";


interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />

      {/* Image */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {product.category}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
          ⭐ {product.rating.rate.toFixed(1)}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
          {product.title}
        </h3>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-sm">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
          </div>
          <span className="text-xs text-gray-500">({product.rating.count} reviews)</span>
        </div>

        {/* Description (short preview) */}
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="flex items-end gap-3">
          <span className="text-xs text-gray-400 line-through">
            ${(product.price * 1.25).toFixed(2)}
          </span>
          <p className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${product.price}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
          >
            View Details
          </Link>
          <button className="bg-white border-2 border-blue-600 text-blue-600 p-2 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
