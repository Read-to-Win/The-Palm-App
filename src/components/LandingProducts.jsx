import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Navbar from "./Navbar";
import { apiFetchAdverts } from "../services/adverts";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // number of products to show initially

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await apiFetchAdverts();
        setProducts(res.data?.items || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8); // Load 8 more items on click
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

        {loading ? (
          <div className="text-center text-lg font-medium">Loading...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-red-500">No products found.</div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.slice(0, visibleCount).map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <img
                    src={product.image?.url || "https://via.placeholder.com/300"}
                    alt={product.title}
                    className="w-full h-80 object-fill"
                  />
                  <div className="p-4 flex flex-col justify-between h-40">
                    <h2 className="text-xl font-semibold truncate">{product.title}</h2>
                    <div className="mt-auto flex justify-between items-center">
                      <p className="text-lg font-bold text-green-600">${product.price}</p>
                      <Link
                        to={`/product/${product._id}`}
                        className="text-green-600 hover:text-green-800 transition flex items-center gap-1"
                      >
                        <FaEye className="text-xl" />
                        <span className="text-sm">View</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < products.length && (
              <div className="text-center mt-8">
                <button
                  onClick={handleViewMore}
                  className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                >
                  View More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
