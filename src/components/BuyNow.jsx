import { useNavigate } from "react-router-dom";
import orderHere from "../assets/newOrderVid.mp4";

const ShopNow = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/products");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-7 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="text-[#1a1a1a] p-10 flex flex-col justify-center">
        <h2 className="text-green-700 font-semibold text-lg tracking-widest uppercase mb-4">
          Palm_Go.
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
          Quality Products.
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
          Instant Delivery.
        </h1>
        <p className="text-md text-gray-700 leading-relaxed mb-2">
          Discover the perfect blend of{" "}
          <span className="text-black font-medium">quality</span> and{" "}
          <span className="text-black font-medium">speed</span>. Our carefully
          curated items meet your highest standards.
        </p>
        <p className="text-md text-gray-700 leading-relaxed">
          Get them in your hands in no time—fast, reliable, and hassle-free
          shopping.
        </p>
        <button
          onClick={handleShopNowClick}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold mt-5 shadow-md transition duration-300 w-fit"
        >
          Shop Now
        </button>
      </div>

      <div className="w-full h-auto aspect-video md:aspect-[4/3]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={orderHere}
        />
      </div>
    </div>
  );
};

export default ShopNow;
