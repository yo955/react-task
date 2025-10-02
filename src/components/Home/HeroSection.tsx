const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 animate-gradient-xy" />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-40 h-40 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-5 w-56 h-56 sm:w-96 sm:h-96 bg-purple-300/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-pink-300/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-6 sm:mb-8 animate-fade-in-down text-xs sm:text-sm">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
            </span>
            <span className="text-white font-semibold">🎉 New Collection 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
              MyStore
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-10 max-w-md sm:max-w-2xl mx-auto animate-fade-in font-light">
            Discover premium products at unbeatable prices.
            <span className="block mt-2 font-semibold">Your satisfaction is our priority ✨</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up-delayed">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-white/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Shop Now
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg">
              <span className="flex items-center gap-2">
                Explore Products
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 sm:mt-16 max-w-sm sm:max-w-3xl mx-auto animate-fade-in">
            <div className="backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">50K+</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">10K+</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Products</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">4.9★</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
