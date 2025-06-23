import React from "react";

const Table = () => {
  return (
    <table className="w-full mt-8 bg-gray-200 py-5 shadow-2xl">
      <tr>
        <th className="text-left">Adverts</th>
        <th className="text-left">Category</th>
        <th className="text-left">Price</th>
      </tr>
      <tr className="my-10">
        <td>Nike air force</td>
        <td>Shoes</td>
        <td>$20.99</td>
      </tr>
    </table>
  );
};

export default Table;
