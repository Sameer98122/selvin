// src/app/orders/page.js
"use client";
import React, { useState } from 'react';
import { FaSearch, FaBell } from 'react-icons/fa';
import Image from 'next/image';

export default function OrdersPage() {
    const orders = [
        {
            id: '#10234',
            customer: 'Emily Carter',
            products: [{ name: '2 items', image: '/placeholder-product-1.jpg' }],
            total: '$148.00',
            date: '2025-09-01',
            status: 'Pending',
        },
        {
            id: '#10233',
            customer: 'Liam Johnson',
            products: [{ name: 'Sneakers, T-shirt', image: '/placeholder-product-2.jpg' }],
            total: '$96.50',
            date: '2025-08-31',
            status: 'Delivered',
        },
        {
            id: '#10232',
            customer: 'Ava Martinez',
            products: [{ name: 'Jacket', image: '/placeholder-product-3.jpg' }],
            total: '$120.00',
            date: '2025-08-30',
            status: 'Cancelled',
        },
        {
            id: '#10231',
            customer: 'Noah Williams',
            products: [{ name: 'Backpack, Socks', image: '/placeholder-product-4.jpg' }],
            total: '$75.99',
            date: '2025-08-29',
            status: 'Delivered',
        },
        {
            id: '#10230',
            customer: 'Olivia Brown',
            products: [{ name: 'Hat', image: '/placeholder-product-5.jpg' }],
            total: '$24.00',
            date: '2025-08-29',
            status: 'Pending',
        },
    ];

    const getStatusClasses = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-orange-100 text-orange-600';
            case 'Delivered':
                return 'bg-green-100 text-green-600';
            case 'Cancelled':
                return 'bg-red-100 text-red-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    // States for filters (optional, to extend)
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('Last 30 days');

    // Filter orders based on search and dropdowns (optional)
    const filteredOrders = orders.filter((order) => {
        const searchLower = search.toLowerCase();
        const matchesSearch =
            order.id.toLowerCase().includes(searchLower) ||
            order.customer.toLowerCase().includes(searchLower) ||
            order.products.some((p) => p.name.toLowerCase().includes(searchLower));

        const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
        // Date filter can be improved with actual date logic if needed

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
            {/* Header */}
            <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center space-x-3">
                    <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7-8h14a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                    </svg>
                    <h1 className="text-xl sm:text-2xl font-medium text-gray-800 whitespace-nowrap">Orders</h1>
                </div>
                <div className="flex items-center space-x-4">
                    {/* Notification Button */}
                    <button
                        aria-label="Notifications"
                        className="relative text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                        <FaBell className="text-lg sm:text-xl" />
                        {/* Notification dot */}
                        <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-600 ring-2 ring-white" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                        <Image src="/avatar.jpg" alt="User Avatar" width={32} height={32} className="rounded-full" />
                    </div>
                </div>
            </header>

            {/* Orders Management Section */}
            <section className="bg-white p-4 sm:p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4">Orders Management</h2>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="Search orders, customers, products"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                text-black placeholder-black"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="All">Status: All</option>
                        <option value="Pending">Pending</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                    <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option> Date: Last 30 days </option>
                        <option> Last 7 days </option>
                        <option> Last 90 days </option>
                    </select>
                </div>

                {/* Orders Table - horizontally scrollable on small devices */}
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                    <table className="min-w-full text-sm sm:text-base bg-white">
                        <thead>
                            <tr className="bg-gray-50 text-left text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                <th className="px-3 sm:px-6 py-3 border-b border-gray-200 whitespace-nowrap">Order ID</th>
                                <th className="px-3 sm:px-6 py-3 border-b border-gray-200 whitespace-nowrap">Customer Name</th>
                                <th className="px-3 sm:px-6 py-3 border-b border-gray-200 whitespace-nowrap">Products</th>
                                <th className="px-3 sm:px-6 py-3 border-b border-gray-200 whitespace-nowrap">Total</th>
                                <th className="px-3 sm:px-6 py-3 border-b border-gray-200 whitespace-nowrap">Order Date</th>
                                <th className="px-3 sm:px-6 py-3 border-b border-gray-200 whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="px-3 sm:px-6 py-4 border-b border-gray-200 text-blue-600 font-medium whitespace-nowrap">{order.id}</td>
                                    <td className="px-3 sm:px-6 py-4 border-b border-gray-200 text-gray-900 whitespace-nowrap">{order.customer}</td>
                                    <td className="px-3 sm:px-6 py-4 border-b border-gray-200 text-gray-900">
                                        <div className="flex items-center">
                                            {order.products[0].image && (
                                                <Image
                                                    src={order.products[0].image}
                                                    alt="Product"
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6 rounded-full mr-2 object-cover"
                                                />
                                            )}
                                            <span>{order.products[0].name}</span>
                                        </div>
                                    </td>
                                    <td className="px-3 sm:px-6 py-4 border-b border-gray-200 text-gray-900 font-medium whitespace-nowrap">{order.total}</td>
                                    <td className="px-3 sm:px-6 py-4 border-b border-gray-200 text-gray-600 whitespace-nowrap">{order.date}</td>
                                    <td className="px-3 sm:px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${getStatusClasses(order.status)}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {filteredOrders.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center py-6 text-gray-500">
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {/* Pagination */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-2">
                    <div className="text-sm text-gray-600">Showing 1-5 of 25 results</div>

                    <div className="flex justify-center items-center space-x-2 w-full sm:w-auto">
                        <button
                            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 text-sm w-full sm:w-auto"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Prev
                        </button>

                        <button
                            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 text-sm w-full sm:w-auto"
                        >
                            Next
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
