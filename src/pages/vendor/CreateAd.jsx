const CreateAd = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const payLoad = e.target;
    const formData = {
      title: payLoad.title.value,
      image: payLoad.image.value,
      category: payLoad.category.value,
      price: payLoad.price.value,
      location: payLoad.location.value,
      description: payLoad.description.value,
    };
    console.log(formData);
  };
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={onSubmitHandler}
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
                name="title"
                placeholder="e.g. Nike Air Max 2023"
                className="border px-3 py-2 w-full rounded-xl text-sm "
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">Image:</label>
              <input
                type="file"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="border px-3 py-2 w-full rounded-xl text-sm "
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">
                Category:
              </label>
              <select
                name="category"
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
                name="price"
                className="border px-3 py-2 w-full rounded-xl text-sm "
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
              className="border px-3 py-2 w-full rounded-xl text-sm "
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
              className="border px-3 py-2 w-full rounded-xl text-sm resize-none "
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-gray-600 text-white px-5 py-2 text-sm rounded-xl cursor-pointer"
            >
              Post Ad
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAd;
