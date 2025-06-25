import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { apiDeleteAdvert, apiGetAllAdvertVendor } from "../../services/adverts";
import { Link } from "react-router";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const VendorAds = () => {
  const [adverts, setAdvert] = useState([]);
  const fetchAds = async () => {
    try {
      const responseData = await apiGetAllAdvertVendor();
      console.log(responseData.data.items);
      setAdvert(responseData.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (_id) => {
    const confirm = window.confirm("Are you sure you want to delete this ad?");
    if (!confirm) return;

    try {
      const res = await apiDeleteAdvert(_id);
      fetchAds();
    } catch (error) {
      toast.error("Failed to delete advert");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  //
  //       "https://www.baroneclothing.com/media/catalog/product/cache/22ce4385af9badfd51b483d5c1445f7f/j/2/j215m.jpg",
  //
  //       "https://redtape.com/cdn/shop/files/RSO4034_1_40cd841c-11dc-4c78-ab85-bfad034e31fe.jpg?v=1750066085",
  //
  //       "https://www.teutamatoshi.com/cdn/shop/files/C65DC109-604F-4BC0-92D0-145EC867FA15.jpg?v=1718271253",
  //
  //       "https://i.etsystatic.com/11657093/r/il/31dc65/3766454712/il_570xN.3766454712_jx6t.jpg",
  //
  //       "https://valenciaperfumes.com/cdn/shop/files/EE841D03-FC5D-4735-BB6F-2611F2C15F04.png?v=1718145400",
  //
  //
  //       "https://www.newyorkdress.com/cdn/shop/products/LaDivine-CD868_greenary_600x.jpg?v=1745422889",
  //
  //       "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1570061/1.jpg?5775",
  //       "https://themuskcompany.com/cdn/shop/collections/D3A2831s-compressed_1200x1487.jpg?v=1652557096",

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 gap-y-5 p-4">
      {adverts.map((advert, index) => (
        <div
          key={index}
          className="bg-white shadow-2xl rounded overflow-hidden w-55"
        >
          <img
            src={advert.image.url}
            alt="Product"
            className="w-full h-70 object-cover"
          />
          <div className="flex items-end justify-between px-4 py-2">
            <div>
              <h2 className="font-semibold text-gray-800">{advert.title}</h2>
              <p className="text-gray-900 mt-3 font-bold">${advert.price}</p>
            </div>
            <div className="text-4xl cursor-pointer flex items-center justify-end gap-2">
              <Link to={`/edit/${advert._id}`}>
                <CiEdit className="hover:text-blue-600 text-[25px]" />
              </Link>
              <MdOutlineDeleteForever
                className="hover:text-red-600 text- text-[25px]"
                onClick={() => {
                  handleDelete(advert._id);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VendorAds;
