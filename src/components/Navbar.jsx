import logo from "../assets/navlogo.png";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow-lg h-20 px-15">
      <img src={logo} className="h-40" />

      <ul className="flex flex-row items-center gap-9 font-bold text-gray-500 cursor-pointer">
        {/* Dropdown */}
        <div className="relative group">
          <li className="hover:text-green-600">Palm Pro</li>

          {/* Dropdown menu */}
          <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40 z-10">
            <li className="px-4 py-2 hover:bg-gray-100">Top Vendors</li>
            <li className="px-4 py-2 hover:bg-gray-100">Verified Vendors</li>
            <li className="px-4 py-2 hover:bg-gray-100">Certified Vendors</li>
            <li className="px-4 py-2 hover:bg-gray-100">Collaboration & Payment</li>
          </ul>
        </div>

        <li className="hover:text-green-600">View Products</li>
        <li className="hover:text-green-600">Become a Vendor</li>
        <li className="hover:text-green-600">
          <Link to="/sign-in">Sign in</Link>
        </li>

        <button className="border px-4 py-2 rounded border-black text-black hover:text-white hover:bg-gray-700 cursor-pointer">
          <Link to="/join">Join</Link>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
