import SideBar from "../components/SideBar";

const EditForm = () => {
  return (
    <div className="flex h-screen bg-gray-50">
        <SideBar/>
        {/* form */}
      <div className="w-[70%] flex items-center justify-center gap-19 p-3">
        <form className="bg-white p-6 w-11/12  max-w-xl rounded-2xl shadow-2xl space-y-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Edit Ad
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm text-gray-600">Title:</label>
              <input
                type="text"
                name="title"
                placeholder="e.g. Nike Air Max 2023"
                className="border px-3 py-2 w-full rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Image:</label>
              <input
                type="text"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="border px-3 py-2 w-full rounded-xl text-sm"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Category:
              </label>
              <select
                name="category"
                className="border px-3 py-2 w-full rounded-xl text-sm"
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
                name="price"
                className="border px-3 py-2 w-full rounded-xl text-sm"
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
           <div className="h-full">
        <img
          className="w-full h-100 object-contain "
          src="https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/1445/best-cheap-nike-basketball-shoes-16425317-main.jpg"
        />
      </div>
      </div>
    </div>
  );
};

export default EditForm;
