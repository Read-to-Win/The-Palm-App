import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router";

const ProductCard = ({adverts}) => {
  return (
    <div className="bg-[#1F512F] shadow-2xl rounded overflow-hidden w-55 mt-10 hover:">
      <img
        src={adverts.image}
        alt="Product"
        className="w-full h-55 object-cover"
      />
      <div className="flex items-end justify-between p-4">
        <div>
          <h2 className="font-semibold text-gray-800">
         {adverts.title}
          </h2>
          <p className="text-gray-900 mt-3 font-bold">{adverts.price}</p>
        </div>
        <div className="text-4xl cursor-pointer flex items-center justify-end gap-2">
         <Link to="/edit"><CiEdit className="hover:text-blue-600 text-[25px]" /></Link> 
          <MdOutlineDeleteForever className="hover:text-red-600 text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
