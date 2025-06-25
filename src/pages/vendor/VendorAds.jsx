import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { apiDeleteAdvert, apiGetAllAdvertVendor } from "../../services/adverts";
import { Link } from "react-router";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const VendorAds = () => {
  const [adverts, setAdvert] = useState([]);
  const [loading, SetLoading] = useState(false);
  const fetchAds = async () => {
    SetLoading(true);
    try {
      const responseData = await apiGetAllAdvertVendor();
      console.log(responseData.data.items);
      setAdvert(responseData.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      SetLoading(false);
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

  return (
  <>
    <h1 className="text- p-4 text-4xl text-gray-600">My Shop</h1>
    <h2 className="flex items-center justify-center text-gray-600 font-extralight text-3xl">
      All Products
    </h2>

    {loading ? (
      <p className="w-full flex justify-center mt-10">Loading...</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
        {adverts.map((advert, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl rounded overflow-hidden w-full"
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
                <Link to={`/dashboard/edit/${advert._id}`}>
                  <CiEdit className="text-blue-600 text-[25px]" />
                </Link>
                <MdOutlineDeleteForever
                  className="text-red-600 text-[25px]"
                  onClick={() => handleDelete(advert._id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </>
);

};

export default VendorAds;
