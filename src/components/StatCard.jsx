

const StatCard = ({ title, icon, value }) => {
  return (
    <div className="bg-gray-100 shadow-2xl mt-7 border border-white flex items-end justify-between rounded-2xl p-8">
      <div>
        <div className="text-3xl bg-gray-200 flex items-center py-2 max-w-12 justify-center rounded">{icon}</div>
        <p className="mt-4 font-medium text-gray-500">{title}</p>
      </div>

      <p className="font-extrabold text-gray-500">{value}</p>
    </div>
  );
};

export default StatCard;
