import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

const K = {
  NAVLINKS: [
    {
      icon: <FaHome />,
      text: "Vendor Home",
      path: "/dashboard",
    },
    {
      icon: <RiAdvertisementFill />,
      text: "All Adverts",
      path: "/dashboard/adverts",
    },
    {
      icon: <MdCreateNewFolder />,
      text: "Create Advert",
      path: "/dashboard/create-add",
    },
    {
      icon: <IoIosNotifications />,
      text: "Notifications",
      path: "/dashboard/notifications",
    },
  ],
};
export default K;
