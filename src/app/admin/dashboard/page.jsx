// src/app/dashboard/page.js
import React from 'react';
import { FaShoppingCart, FaChartLine, FaUsers, FaTruck, FaBell, FaPlus } from 'react-icons/fa';


export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-gray-800">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <FaBell className="text-xl text-gray-600" />
          <div className="w-8 h-8 rounded-full bg-gray-300">
            {/* User avatar placeholder */}
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Total Orders Card */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">Total Orders</p>
              <FaShoppingCart className="text-xl text-gray-400" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">12,480</h3>
            <p className="text-sm text-green-600">+4.2% vs last month</p>
          </div>

          {/* Revenue Card */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">Revenue</p>
              <FaChartLine className="text-xl text-gray-400" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">$842,910</h3>
            <p className="text-sm text-green-600">+6.1% vs last month</p>
          </div>

          {/* Customers Card */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">Customers</p>
              <FaUsers className="text-xl text-gray-400" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">58,233</h3>
            <p className="text-sm text-green-600">+1,204 new this month</p>
          </div>

          {/* Pending Shipments Card */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">Pending Shipments</p>
              <FaTruck className="text-xl text-gray-400" />
            </div>
            <h3 className="text-3xl font-semibold text-gray-800">312</h3>
            <p className="text-sm text-red-600">23 delayed</p>
          </div>
        </div>
      </section>

      {/* Recent Orders Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-gray-800">Recent Orders</h2>
          <div className="flex space-x-2">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700">
              <FaPlus />
              <span>New Product</span>
            </button>
            <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50">
              View All Orders
            </button>
          </div>
        </div>
        <div className="bg-gray-50 p-12 text-center text-gray-500 border-dashed border-2 border-gray-300 rounded-lg">
          Orders table placeholder
        </div>
      </section>

      {/* Top Products Section */}
      <section className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-gray-800">Top Products</h2>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50">
            Manage Products
          </button>
        </div>
        <div className="bg-gray-50 p-12 text-center text-gray-500 border-dashed border-2 border-gray-300 rounded-lg">
          Products list placeholder
        </div>
      </section>
    </div>
  );
}