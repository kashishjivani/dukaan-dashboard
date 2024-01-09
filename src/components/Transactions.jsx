import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaSort } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import orderData from "../db/db";

const Transactions = () => {
  return (
    <div className="flex flex-col m-6">
      <span className="ml-2 font-bold">Transactions | This Month</span>
      <div className="flex bg-slate-50 rounded-sm shadow-md">
        <div className="bg-white m-2 p-2 border-gray-300 rounded-lg w-64 border shadow-sm">
          <CiSearch className="inline mr-1 mb-1" size={20} color="grey" />
          <input
            type="text"
            placeholder="Search by order ID..."
            className="rounded-sm border-gray-300 bg-white w-52 text-white"
          />
        </div>
        <div className="border border-gray-300 rounded-sm p-2 m-2 ml-auto">
          <span> Sort </span>
          <FaSort className="inline" size={20} />
        </div>
        <div className="border border-gray-300 rounded-sm p-2 m-2">
          <MdOutlineFileDownload size={20} className="inline" />
        </div>
      </div>
      <div className="bg-slate-50 rounded-sm shadow-md p-2">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="pb-4 align-middle">Order ID</th>
              <th className="pb-4 align-middle">Order Date</th>
              <th className="pb-4 align-middle">Order Amount</th>
              <th className="pb-4 align-middle">Transaction fees</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={index} className="border p-4">
                <td className="border-b pb-4 align-middle text-blue-600" colSpan={2}> {order.orderId} </td>
                <td className="border-b pb-4 align-middle" colSpan={2}> {order.orderDate} </td>
                <td className="border-b pb-4 align-middle" colSpan={2}> {`₹${order.orderAmount}`} </td>
                <td className="border-b pb-4 align-middle" colSpan={2}> {`₹${order.transactionFees}`} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
