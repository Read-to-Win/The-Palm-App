import { FaHome } from "react-icons/fa";
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
  ],
};
export default K;
