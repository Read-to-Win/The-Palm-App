import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg h-20 px-16 flex justify-between items-center">
      <Link to="/">
        <img src={logo} className="h-40" alt="Logo" />
      </Link>

      <ul className="flex flex-row items-center gap-9 font-bold text-gray-600 cursor-pointer">
        {/* Dropdown */}
        <ul className="flex flex-row items-center gap-9 font-bold text-gray-600">
          {/* Palm Pro Dropdown */}
          <div className="relative group">
            <li className="hover:text-green-600 cursor-pointer">Palm Pro</li>
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
        </ul>

        <li className="hover:text-green-600 transition-colors duration-200">
          <Link to="/products">View Products</Link>
        </li>

        <li className="hover:text-green-600 transition-colors duration-200">
          <Link to="/venform">Become a Vendor</Link>
        </li>

        <li className="hover:text-green-600 transition-colors duration-200">
          <Link to="/sign-in">Sign In</Link>
        </li>

        <li>
          <button className="border px-4 py-2 rounded border-black text-black hover:text-white hover:bg-gray-700 transition duration-200">
            <Link to="/join">Join</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
