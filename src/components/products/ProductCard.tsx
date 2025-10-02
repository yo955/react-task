import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, title, price, image }: ProductProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />

      {/* Image Container with stunning effects */}
      <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain p-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out filter group-hover:drop-shadow-2xl"
        />

        {/* Premium Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
          ✨ Premium
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
          -20% OFF
        </div>
      </div>

      {/* Content with beautiful spacing */}
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-sm">
            {"★".repeat(5)}
          </div>
          <span className="text-xs text-gray-500 font-medium">(128 reviews)</span>
        </div>

        {/* Price Section */}
        <div className="flex items-end gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 line-through">${(price * 1.25).toFixed(2)}</span>
            <p className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </p>
          </div>
          <div className="flex-1" />
          <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
            In Stock
          </div>
        </div>

        {/* Features */}
        <div className="flex gap-2 text-xs text-gray-600">
          <span className="bg-blue-50 px-3 py-1 rounded-full">🚚 Free Shipping</span>
          <span className="bg-purple-50 px-3 py-1 rounded-full">🎁 Gift Ready</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Link
            to={`/products/${id}`}
            className="flex-1 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
          >
            <span className="group-hover/btn:scale-110 inline-block transition-transform">
              View Details
            </span>
          </Link>
          <button className="bg-white border-2 border-blue-600 text-blue-600 p-3 rounded-xl hover:bg-blue-600 hover:text-white active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
};

export default ProductCard;