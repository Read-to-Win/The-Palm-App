import { useForm } from "react-hook-form";
import formImage from "../assets/formImg.jpg";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { apiLogin } from "../services/auth";
import { toast } from "react-toastify";

const SignIn = () => {
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
      email: data.email,
      password: data.password,
    };
    setIsSubmitting(true);
    try {
      const response = await apiLogin(payload);
      console.log(response);
      localStorage.setItem("accessToken", response.data.token);

      const userType = response.data.user.role;
      if (userType === "vendor") {
        // route to dashboard
        navigate("/dashboard");
      } else {
        navigate("/");
      }
      toast.success("Logged in successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Oops! An error occured.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const isError = Object.keys(errors).length > 0;
  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="w-1/2 h-full">
        <img src={formImage} className="w-max h-full object-contain " />
      </div>

      {/* Form Section */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 space-y-6 w-4/5 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.1)] bg-white"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-1">
              Sign in to your account
            </h2>
            <p className="text-sm text-gray-500">
              New here?{" "}
              <span className="cursor-pointer underline font-bold text-blue-500">
                <Link to="/join">Join</Link>
              </span>
            </p>
          </div>

          <div>
            <label className="block mb-1 text-sm cursor-pointer">Email:</label>
            <input
              type="email"
              id="email"
              className="border px-3 py-2 w-full rounded-2xl"
              placeholder="e.g. preshy100@gmail.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors?.email && (
              <span className="text-red-500">{errors?.email?.message}</span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm cursor-pointer">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border px-3 py-2 w-full rounded-2xl"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
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
              isError ? "bg-gray-700 cursor-not-allowed" : "border-orange-500"
            } text-gray-500 px-6 py-2 rounded-2xl border hover:bg-[#F2D5CF] transition`}
          >
            {isSubmitting ? "Submitting..." : " Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
