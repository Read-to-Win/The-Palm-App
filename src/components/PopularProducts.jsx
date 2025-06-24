import { RiShirtFill } from "react-icons/ri";
import { GiAmpleDress } from "react-icons/gi";
import { GiHighHeel } from "react-icons/gi";
import { GiConverseShoe } from "react-icons/gi";
import { GiDelicatePerfume } from "react-icons/gi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";



const PopularProducts = () => {
  return (
    <section className="grid grid-cols-9 gap-4 justify-between m-8 font-semibold mt-5">
      <div className=" shadow-md shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl hover:cursor-pointer hover:bg- ">
        <RiShirtFill />
        <p>Men's Wear</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <GiAmpleDress />
        <p>Women's Wear</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <GiHighHeel />
        <p>Heels</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <GiConverseShoe />
        <p>Leather Shoes</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <GiDelicatePerfume />
        <p>Perfumes</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <MdOutlinePhoneAndroid />
        <p>Phones</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <FaCouch />
        <p>Furniture</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <IoLogoElectron />
        <p>Electronics</p>
      </div>
      <div className=" shadow-sm shadow-gray-400 py-8 px-7 flex-col justify-center rounded-2xl">
        <FaKitchenSet />
        <p>Kitchenware</p>
      </div>
      <div>
        <div className="flex flex-row gap-2 font-semibold text-5xl mt-12 text-[#404145]">
          <h1>Popular </h1>
          <h1>products</h1>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-gray-400 text-white font-bold">
            <h1>Clothes</h1>
      
          </div>
          <div className="bg-gray-400 text-white font-bold">
            <h1>Shoes</h1>
          </div>
          <div className="bg-gray-400 text-white font-bold">
            <h1>Fragrance</h1>
          </div>
          <div className="bg-gray-400 text-white font-bold">
            <h1>Phones</h1>
          </div>
          <div className="bg-gray-400 text-white font-bold">
            <h1>Electronics</h1>
          </div>
          <div className="bg-gray-400 text-white font-bold">
            <h1>Home Appliances</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
