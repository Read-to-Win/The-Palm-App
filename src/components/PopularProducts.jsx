import { useNavigate } from "react-router-dom";
import { RiShirtFill } from "react-icons/ri";
import {
  GiAmpleDress,
  GiHighHeel,
  GiConverseShoe,
  GiDelicatePerfume,
} from "react-icons/gi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";

const categories = [
  { name: "Men's Wear", Icon: RiShirtFill, slug: "men" },
  { name: "Women's Wear", Icon: GiAmpleDress, slug: "women" },
  { name: "Heels", Icon: GiHighHeel, slug: "heels" },
  { name: "Leather Shoes", Icon: GiConverseShoe, slug: "leather-shoes" },
  { name: "Perfumes", Icon: GiDelicatePerfume, slug: "perfumes" },
  { name: "Phones", Icon: MdOutlinePhoneAndroid, slug: "phones" },
  { name: "Furniture", Icon: FaCouch, slug: "furniture" },
  { name: "Electronics", Icon: IoLogoElectron, slug: "electronics" },
  { name: "Kitchenware", Icon: FaKitchenSet, slug: "kitchenware" },
];

const PopularProducts = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#404145]">Popular Categories</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map(({ name, Icon, slug }, index) => (
          <div
            key={index}
            onClick={() => navigate(`/products`)}
            className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
          >
            <Icon className="text-4xl text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
            <p className="mt-3 text-center font-semibold text-gray-700">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
