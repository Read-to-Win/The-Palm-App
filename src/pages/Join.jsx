import { useForm } from "react-hook-form";
import formImage from "../assets/formImg.jpg";
import { Link, useNavigate } from "react-router";
import { apiSignUp } from "../services/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const Join = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
      role: "user",
    };
    setIsSubmitting(true);
    try {
      const response = await apiSignUp(payload);
      console.log(response);
      toast.success("User registered successfully.");
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
      toast.error("Oops! An error occured.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isError = Object.keys(errors).length > 0;
  return (
    <div className="flex h-screen p-10 items-center justify-center">
      {/* Image Section */}
      {/* <div className=" h-full">
        <img src={formImage} className="w-max h-full object-contain " />
      </div> */}

      {/* Form Section */}
      <div className="w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 space-y-7 w-4/5 rounded-2xl shadow-2xl bg-white h-full"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-1">
              Create a new account
            </h2>
            <p className="text-lg mt-5 text-gray-500">
              Already have an account?
              <span className="cursor-pointer underline font-bold ml-2 text-blue-500">
                <Link to="/sign-in">Sign in</Link>
              </span>
            </p>
          </div>

          <div>
            <label className="block mb-1 text-sm">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="border px-3 py-2 cursor-pointer w-full rounded-2xl"
              placeholder="e.g. Janedoe"
              {...register("username", { required: "Username is required" })}
            />
            {errors?.username && (
              <span className="text-red-500">{errors?.username?.message}</span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm">Email:</label>
            <input
              type="email"
              id="email"
              className="border px-3 py-2 w-full cursor-pointer rounded-2xl"
              placeholder="e.g. preshy100@gmail.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors?.email && (
              <span className="text-red-500">{errors?.email?.message}</span>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border px-3 py-2 w-full cursor-pointer rounded-2xl"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors?.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isError}
            className={`${
              isError ? "bg-gray-700 cursor-not-allowed" : "border-green-500"
            } text-gray-500 px-6 py-2 rounded-2xl border hover:text-black transition`}
          >
            {isSubmitting ? "Submitting..." : " Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
