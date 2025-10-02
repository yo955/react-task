import { HeroSection } from "../components/Home";
import { ProductList } from "../components/products";
import "../styles/home.css";
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Products Preview */}
      <section className="container mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            ⭐ BEST SELLERS
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked collection of our most popular items
          </p>
        </div>
        <ProductList limit={6} />
      </section>
    </div>
  );
};

export default Home;