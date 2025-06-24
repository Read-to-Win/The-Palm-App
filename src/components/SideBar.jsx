import { NavLink, useNavigate } from "react-router";
import K from "../constants";
import { ImProfile } from "react-icons/im";

const SideBar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    navigate("/sign-in")
  }
  return (
    <div className="bg-gray-700 text-white w-60 h-screen pt-10 pb-20 flex flex-col">
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
      <button className="mt-auto" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default SideBar;
