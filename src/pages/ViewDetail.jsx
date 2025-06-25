import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";

const ViewDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  console.log(params, "test");
  const getSingleAdvert = async () => {
    setLoading(true);
    try {
      const res = await apiGetSingleVendorAdvert(params?.id);
      console.log(res.data.items);
      setProduct(res.data.items);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleAdvert();
  }, [params]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        <div>
          <img
            className="w-1/2 h-auto"
            src="https://themuskcompany.com/cdn/shop/collections/D3A2831s-compressed_1200x1487.jpg?v=1652557096"
            alt=""
          />
        </div>
        <div>
          <h1>Elegant Evening Gown</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quo odit rem sapiente debitis voluptates aliquid cum quam laboriosam
            aperiam!
          </p>
        </div>
        <p>$29.99</p>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
