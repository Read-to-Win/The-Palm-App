import { NavLink } from "react-router";
import K from "../constants";

const SideBar = () => {
  return (
    <div className="bg-gray-700 text-white w-60 h-screen pt-10 pb-20">
      <span>LOGO</span>
      <div className="flex flex-col gap-y-5 mt-10">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink
            to={path}
            className={({isActive}) =>
              `flex gap-x-2 items-center hover:bg-white hover:text-gray-700 p-3 rounded-md ${
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
    </div>
  );
};

export default SideBar;
