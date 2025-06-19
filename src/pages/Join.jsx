import formImage from "../assets/formImg.jpg";

const Join = () => {
  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="w-1/2 h-full">
        <img src={formImage} className="w-max h-full object-contain " />
      </div>

      {/* Form Section */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <form className="p-10 space-y-6 w-4/5 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)] bg-white">
          <div>
            <h2 className="text-2xl font-semibold mb-1">
              Create a new account
            </h2>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <span className="text-gray-500">Sign in</span>
            </p>
          </div>

          <div>
            <label className="block mb-1 text-sm cursor-pointer">Name:</label>
            <input
              type="text"
              name="name"
              className="border px-3 py-2 w-full rounded-2xl"
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm cursor-pointer">Email:</label>
            <input
              type="email"
              name="email"
              className="border px-3 py-2 w-full rounded-2xl"
              placeholder="e.g. preshy100@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm cursor-pointer">Password:</label>
            <input
              type="password"
              name="password"
              className="border px-3 py-2 w-full rounded-2xl"
            />
          </div>

          <button
            type="submit"
            className="text-gray-500 px-6 py-2 rounded-2xl border border-orange-500 hover:bg-[#F2D5CF] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
