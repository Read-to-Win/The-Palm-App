import { useNavigate, useParams } from "react-router";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { apiEditAdvert, apiGetSingleVendorAdvert } from "../services/adverts";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditForm = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit } = useForm({
    values: {
      title: product?.title,
      category: product?.category,
      price: product?.price,
      description: product?.description,
    },
  });

  const getSingleAdvert = async () => {
    try {
      const res = await apiGetSingleVendorAdvert(params.id);

      setProduct(res.data.item);
    } catch (error) {}
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    try {
      const response = await apiEditAdvert(params.id, data);
      console.log(response.data);
      toast.success(response.data.message);
      navigate("/dashboard/adverts");
    } catch (error) {
      toast.error("Oops! An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    getSingleAdvert();
  }, []);

  return (
    <div className=" flex items-start justify-between px-3 pt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl max-w-xl shadow-2xl space-y-8"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Edit Ad</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600">Title:</label>
            <input
              type="text"
              id="title"
              {...register("title", { required: "title is required" })}
              placeholder="e.g. Nike Air Max 2023"
              className="border px-3 py-2 w-full rounded-xl text-sm"
            />
          </div>

          {/* <div>
              <label className="block mb-1 text-sm text-gray-600">Image:</label>
              <input
                type="file"
                id="image"
                {...register("image", { required: "Image is required" })}
                className="border px-3 py-2 w-full rounded-xl text-sm"
              />
            </div> */}

          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Category:
            </label>
            <select
              id="category"
              {...register("category", { required: "Category is required" })}
              className="border px-3 py-2 w-full rounded-xl text-sm"
            >
              <option value="">Select a category</option>
              <option value="clothes">Clothes</option>
              <option value="shoes">Shoes</option>
              <option value="Basketball">Basketball</option>
              <option value="tech">Tech</option>
              <option value="perfumes">Perfumes</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-600">Price:</label>
          <input
            type="number"
            id="price"
            {...register("price", { required: "Price is required" })}
            className="border px-3 py-2 w-full rounded-xl text-sm"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-600">
            Description:
          </label>
          <textarea
            id="description"
            rows="4"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Write a short description..."
            className="border px-3 py-2 w-full rounded-xl text-sm resize-none"
          ></textarea>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-gray-600 text-white px-5 py-2 text-sm rounded-xl cursor-pointer"
          >
            {isSubmitting ? "Submitting...": "Submit Changes"}
          </button>
        </div>
      </form>
      <div className="">
        <img
          className="object-contain max-w-[600px]"
          src={product?.image?.url}
        />
      </div>
    </div>
  );
};

export default EditForm;
