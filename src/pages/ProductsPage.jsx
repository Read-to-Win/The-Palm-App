import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetchAdverts } from "../services/adverts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiFetchAdverts();
        setProducts(res.data.items || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-4 pb-16">
        <h1 className="text-4xl font-bold mb-10 text-center">Shop All Products</h1>

        {loading ? (
          <div className="text-center text-lg font-medium">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="text-center text-red-500">No products found.</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image?.url || "https://via.placeholder.com/300"}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-52">
                  <h3 className="text-lg font-semibold truncate mb-2">{item.title}</h3>
                  <p className="text-green-600 font-bold text-xl mb-3">${item.price}</p>
                  <div className="mt-auto flex justify-between gap-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm transition">
                      Add to Cart
                    </button>
                    <button
                      onClick={() => navigate(`/product/${item._id}`)}
                      className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md text-sm transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
