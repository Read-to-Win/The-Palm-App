import { NavLink, useNavigate } from "react-router";
import K from "../constants";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router";


const SideBar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    navigate("/sign-in")
  }
  return (
    <div className="bg-[#101828] fixed text-white w-60 h-screen pt-10 pb-20 flex flex-col">
      <div className="flex justify-center items-center text-6xl">
        <ImProfile />
      </div>
      <div className="flex flex-col gap-y-5 mt-15">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              `flex gap-x-3 mr-2 items-center hover:bg-white hover:text-gray-700 p-3 rounded-md ${
                isActive ? "bg-white text-gray-700" : ""
              }`
            }
            end
          >
            <span>{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
      <Link to= "/" className="mt-auto cursor-pointer border-2 p-3 text-[#364153] bg-white  rounded-md"><button  onClick={handleLogout}>Log Out</button></Link>
    </div>
  );
};

export default SideBar;
