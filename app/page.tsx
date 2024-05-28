import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 h-screen bg-gradient-to-b from-blue-200 to-white flex justify-center items-center flex-col text-black text-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome to Our Store
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Discover amazing products at great prices.
        </p>
      </header>
      <main>
        <section className="mb-8">
          <p className="text-lg text-gray-800">
            Welcome! We offer high-quality products at great prices. Whether you
            need electronics, clothing, or home goods, we've got you covered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Get Started</h2>
          <p className="text-lg text-gray-800 mb-4">
            Ready to start shopping? Click below to explore our products.
          </p>
          <Link
            href="/products"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Explore Products
          </Link>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;