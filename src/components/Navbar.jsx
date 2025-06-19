const Navbar = () => {
  return (
    <div className="flex justify-between shadow-lg py-7 px-15">
      <span>The_Palm.</span>
      <ul className="flex flex-row justify-between items-center gap-9 font-bold text-gray-500 cursor-pointer">
        <li>Palm Pro</li>
        <li className="hover:text-green-600">View Products</li>
        <li className="hover:text-green-600">Become a Vendor</li>
        <li className="hover:text-green-600">Sign in</li>
        <button className="border-solid border px-4 py-2 rounded border-black text-black hover:text-white hover:bg-gray-700 cursor-pointer ">Join</button>
        

      </ul>
    </div>
  );
};

export default Navbar;
