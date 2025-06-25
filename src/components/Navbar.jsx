import logo from "../assets/navlogo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg h-20 px-16 flex justify-between items-center">
      <img src={logo} className="h-40" />

      <ul className="flex flex-row items-center gap-9 font-bold text-gray-600 cursor-pointer">
        {/* Dropdown */}
        <div className="relative group">
          <li className="hover:text-green-600 transition-colors duration-200">
            Palm Pro
          </li>
   <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg h-20 px-16 flex justify-between items-center">
  <Link to="/"><img src={logo} className="h-40" /></Link>

  <ul className="flex flex-row items-center gap-9 font-bold text-gray-500 cursor-pointer">
    {/* Dropdown */}
    <div className="relative group">
      <li className="hover:text-green-600">Palm Pro</li>

      {/* Dropdown menu */}
      <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40 z-10">
        <li className="px-4 py-2 hover:bg-gray-100">Top Vendors</li>
        <li className="px-4 py-2 hover:bg-gray-100">Verified Vendors</li>
        <li className="px-4 py-2 hover:bg-gray-100">Certified Vendors</li>
      </ul>
    </div>
          {/* Dropdown menu */}
          <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-3 w-48 z-50 border border-gray-100">
            <li className="px-4 py-2 hover:bg-green-50 hover:text-green-600 transition duration-200">
              Top Vendors
            </li>
            <li className="px-4 py-2 hover:bg-green-50 hover:text-green-600 transition duration-200">
              Verified Vendors
            </li>
            <li className="px-4 py-2 hover:bg-green-50 hover:text-green-600 transition duration-200">
              Certified Vendors
            </li>
          </ul>
        </div>

        <li className="hover:text-green-600 transition-colors duration-200">
          View Products
        </li>

        <li className="hover:text-green-600 transition-colors duration-200">
          <Link to="/venform">Become a Vendor</Link>
        </li>

        <li className="hover:text-green-600 transition-colors duration-200">
          <Link to="/sign-in">Sign in</Link>
        </li>

        <button className="border px-4 py-2 rounded border-black text-black hover:text-white hover:bg-gray-700 transition duration-200">
          <Link to="/join">Join</Link>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
