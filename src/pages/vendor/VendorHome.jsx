import { MdInventory } from "react-icons/md";
import StatCard from "../../components/StatCard";
import { TbCash } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import Table from "../../components/Table";

const VendorHome = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-gray-500">Welcome back</h1>
      <p className="mt-5 text-gray-500">Here's Your Current Sales Overview</p>
      <div className="grid grid-cols-3 gap-3">
        <StatCard title="Total Product" value={10000} icon={<MdInventory />} />
        <StatCard title="Total Revenue" value={10000} icon={<TbCash />} />
        <StatCard title="Total Orders" value={10000} icon={<IoCubeOutline />} />
      </div>
      <div>
        <Table/>
      </div>
    </div>
  );
};

export default VendorHome;
