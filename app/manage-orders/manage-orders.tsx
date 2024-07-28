"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

const orders = [
  { id: 1, customer: "John Doe", product: "Product A", status: "Pending", date: "2023-07-01" },
  { id: 2, customer: "Jane Smith", product: "Product B", status: "Shipped", date: "2023-07-02" },
  { id: 3, customer: "Sam Wilson", product: "Product C", status: "Delivered", date: "2023-07-03" },
  // Add more orders as needed
];

export default function ManageOrders() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
          Manage Orders
        </h1>
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search by customer"
            className="border rounded-md px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="relative p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold text-gray-800">{order.customer}</h2>
              <p className="text-gray-600">{order.product}</p>
              <p className="text-gray-600">{order.date}</p>
              <p className={`mt-2 ${order.status === "Delivered" ? "text-green-600" : order.status === "Shipped" ? "text-blue-600" : "text-yellow-600"}`}>
                {order.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
