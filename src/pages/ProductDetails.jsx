import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://advertisement-app-1-gy0x.onrender.com/api/useAdvert/adverts/${id}`
      );
      console.log(res.data.data);
      setProduct(res.data.data);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen bg-emerald-100 flex flex-col items-center justify-center p-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start text-emerald-950 hover:underline text-sm font-bold mb-4"
      >
        &larr; Back
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            {product.description && (
              <p className="text-gray-700 text-sm">{product.description}</p>
            )}
            {product.price && (
              <p className="text-emerald-700 font-semibold text-lg">
                Price: ${product.price}
              </p>
            )}
          
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
