const About = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            About <span className="text-blue-600">MyStore</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We’re more than just an online store — we’re your trusted destination
            for quality products at unbeatable prices.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1556742400-b5b7c5121f9a?auto=format&fit=crop&w=800&q=80"
              alt="About MyStore"
              className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg animate-bounce duration-700">
              <span className="block text-2xl font-bold">10K+</span>
              <span className="text-sm">Products Available</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission 🚀
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <span className="font-semibold text-blue-600">MyStore</span>,
              our goal is to deliver a seamless shopping experience, combining
              high-quality products with a user-friendly interface. We strive to
              create trust with our customers and ensure 100% satisfaction.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Wide range of premium products</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Trusted by 50K+ happy customers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Top-notch customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
