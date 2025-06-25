import { useForm } from "react-hook-form";
import { apiCreateAdvert } from "../../services/adverts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";

const CreateAd = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const payload = new FormData();
    payload.append("title", data.title);
    payload.append("category", data.category);
    payload.append("price", data.price);
    payload.append("image", data.image[0]);
setIsSubmitting(true)
    try {
      const response = await apiCreateAdvert(payload);
      console.log(response.data);
      toast.success("Product added successfully");
      navigate("/dashboard/adverts");
    } catch (error) {
      console.log(error);
    }finally{setIsSubmitting(false)}
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 w-full max-w-xl rounded-2xl shadow-2xl space-y-4"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Post New Ad
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm text-gray-600">Title:</label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                placeholder="e.g. Nike Air Max 2023"
                className="border px-3 py-2 w-full rounded-xl text-sm "
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Image:</label>
              <input
                type="file"
                id="image"
                {...register("image", { required: "Image Upload is required" })}
                placeholder="https://example.com/image.jpg"
                className="border px-3 py-2 w-full rounded-xl text-sm "
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Category:
              </label>
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className="border px-3 py-2 w-full rounded-xl text-sm "
              >
                <option value="">Select a category</option>
                <option value="clothes">Clothes</option>
                <option value="shoes">Shoes</option>
                <option value="tech">Tech</option>
                <option value="perfumes">Perfumes</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Price:</label>
              <input
                type="number"
                {...register("price", { required: "Price is required" })}
                id="price"
                className="border px-3 py-2 w-full rounded-xl text-sm "
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Description:
            </label>
            <textarea
              name="description"
              rows="4"
              {...register("description", {
                required: "Description is required",
              })}
              placeholder="Write a short description..."
              className="border px-3 py-2 w-full rounded-xl text-sm resize-none "
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-[#101828] text-white px-5 py-2 text-sm rounded-xl cursor-pointer"
            >
              {isSubmitting ? "Posting Ad...": "Post Ad"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAd;
