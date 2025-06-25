import { useParams } from "react-router";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { apiGetSingleVendorAdvert } from "../services/adverts";

const EditForm = () => {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const getSingleAdvert = async () => {
    setLoading(true);
    try {
      const res = await apiGetSingleVendorAdvert(params?.id);
      setProduct({ ...res?.data?.item, image: res?.data?.item?.image?.url });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleAdvert();
  }, []);

  return (
    <div className="flex h-screen  bg-gray-50">
      <SideBar />
      {/* form */}
      <div className="w-[70%] flex items-start justify-between px-3 pt-10">
        <form className="bg-white p-6 rounded-2xl max-w-xl shadow-2xl space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Edit Ad</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm text-gray-600">Title:</label>
              <input
                value={product?.title}
                type="text"
                name="title"
                placeholder="e.g. Nike Air Max 2023"
                className="border px-3 py-2 w-full rounded-xl text-sm"
                onChange={(e) => {
                  setProduct((prev) => ({ ...prev, title: e.target.value }));
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Image:</label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="border px-3 py-2 w-full rounded-xl text-sm"
                value={product?.image}
                onChange={(e) => {
                  setProduct((prev) => ({ ...prev, image: e.target.value }));
                }}
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Category:
              </label>
              <select
                name="category"
                className="border px-3 py-2 w-full rounded-xl text-sm"
                value={product?.category}
                onChange={(e) => {
                  setProduct((prev) => ({ ...prev, category: e.target.value }));
                }}
              >
                <option value="">Select a category</option>
                <option value="clothes">Clothes</option>
                <option value="shoes">Shoes</option>
                <option value="Basketball">Basketball</option>
                <option value="tech">Tech</option>
                <option value="perfumes">Perfumes</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Price:</label>
              <input
                type="number"
                name="price"
                className="border px-3 py-2 w-full rounded-xl text-sm"
                value={product?.price}
                onChange={(e) => {
                  setProduct((prev) => ({ ...prev, price: e.target.value }));
                }}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Location:
            </label>
            <input
              type="text"
              name="location"
              className="border px-3 py-2 w-full rounded-xl text-sm"
              value={product?.location}
              onChange={(e) => {
                setProduct((prev) => ({ ...prev, location: e.target.value }));
              }}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Description:
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write a short description..."
              className="border px-3 py-2 w-full rounded-xl text-sm resize-none"
              value={product?.description}
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-gray-600 text-white px-5 py-2 text-sm rounded-xl cursor-pointer"
            >
              Submit Changes
            </button>
          </div>
        </form>
        <div className="">
          <img className="object-contain max-w-[400px]" src={product?.image} />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
