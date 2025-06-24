import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaEye } from "react-icons/fa"; 
import Navbar from "./Navbar";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    const product = products.find((product) => product.id === id);
    navigate("/productdetail", { state: product });
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://advertisement-app-1-gy0x.onrender.com/api/useAdvert/adverts"
      );
      console.log(res.data.data);
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {loading ? (
          <div className="custom-spinner"></div>
        ) : (
          <h2 className="text-center text-xl font-bold my-4">Products</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-emerald-100 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)] p-8 text-center cursor-pointer hover:shadow-[0_0_0_1px_rgba(7,56,1,0.2)] hover:scale-105 transition-transform duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 rounded-lg mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex justify-center gap-8 mt-3 text-gray-700">
                <div className="relative group">
                  <FaEye
                    className="cursor-pointer text-3xl hover:text-blue-500 hover:scale-125 transition-transform duration-200"
                    onClick={() => navigate(`/productdetail/${product.id}`)}
                  />
                  <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    View Product
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
