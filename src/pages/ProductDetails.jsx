import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiGetSingleUserAdvert } from "../services/adverts";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await apiGetSingleUserAdvert(id);
      const productData = res.data?.item;

      if (productData) {
        setProduct(productData);
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-6">
      <button
        onClick={() => navigate(-1)}
        className="self-start text-emerald-900 hover:underline text-sm font-bold mb-4"
      >
        &larr; Back
      </button>

      {loading ? (
        <p className="text-lg font-medium text-gray-700">Loading...</p>
      ) : !product ? (
        <p className="text-red-600 text-center text-lg font-semibold">
          Product not found.
        </p>
      ) : (
        <div className="bg-white max-w-4xl w-full rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image?.url || "https://via.placeholder.com/400"}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h2>
            {product.description && (
              <p className="text-gray-700 text-sm">{product.description}</p>
            )}
            <p className="text-green-600 font-semibold text-lg">
              Price: ${product.price}
            </p>
            {product.vendorName && (
              <p className="text-sm text-gray-500">
                Vendor: {product.vendorName}
              </p>
            )}
            <div className="flex items-center gap-1 text-yellow-500">
              {"★".repeat(product.rating || 4)}
              <span className="text-gray-600 ml-2">
                {product.rating || "4.0"} / 5.0
              </span>
            </div>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
