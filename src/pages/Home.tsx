import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome to MyStore</h1>
          <p className="mt-2">Best products at the best prices</p>
        </div>
      </section>

      {/* Products Preview */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <ProductList limit={6} />
      </section>
    </div>
  );
};

export default Home;
