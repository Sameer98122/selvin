'use client';

import React, { useState } from 'react';

const customersData = [
  {
    id: 1,
    name: 'Emily Carter',
    email: 'emily.carter@example.com',
    phone: '+1 202 555 0134',
    orders: 12,
    lastActive: '2025-09-01',
    joined: 'Jan 2024',
    avatar: '/avatars/emily.jpg',
  },
  {
    id: 2,
    name: 'Liam Johnson',
    email: 'liam.johnson@example.com',
    phone: '+1 202 555 0188',
    orders: 8,
    lastActive: '2025-08-31',
    joined: 'Oct 2023',
    avatar: '/avatars/liam.jpg',
  },
  {
    id: 3,
    name: 'Ava Martinez',
    email: 'ava.martinez@example.com',
    phone: '+44 20 7946 0777',
    orders: 5,
    lastActive: '2025-08-30',
    joined: 'Mar 2024',
    avatar: '/avatars/ava.jpg',
  },
  {
    id: 4,
    name: 'Noah Williams',
    email: 'noah.williams@example.com',
    phone: '+61 2 5550 2211',
    orders: 14,
    lastActive: '2025-08-29',
    joined: 'Jun 2023',
    avatar: '/avatars/noah.jpg',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    email: 'olivia.brown@example.com',
    phone: '+1 617 555 4422',
    orders: 3,
    lastActive: '2025-08-29',
    joined: 'Aug 2024',
    avatar: '/avatars/olivia.jpg',
  },
];

export default function Customers() {
  const [search, setSearch] = useState('');
  const [activityFilter, setActivityFilter] = useState('All');
  const [sort, setSort] = useState('Recent');

  // Filter & search logic
  const filtered = customersData.filter((c) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      c.name.toLowerCase().includes(searchLower) ||
      c.email.toLowerCase().includes(searchLower) ||
      c.phone.includes(searchLower);

    let matchesActivity = true;
    if (activityFilter === 'Active') {
      matchesActivity = new Date(c.lastActive) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    } else if (activityFilter === 'Inactive') {
      matchesActivity = new Date(c.lastActive) <= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    }

    return matchesSearch && matchesActivity;
  });

  // Sort customers
  filtered.sort((a, b) => {
    if (sort === 'Recent') {
      return new Date(b.lastActive) - new Date(a.lastActive);
    } else if (sort === 'Oldest') {
      return new Date(a.lastActive) - new Date(b.lastActive);
    }
    return 0;
  });

  return (
    <div className="p-4 max-w-full">
      <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span>👥</span> Customers Management
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search name, email, phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={activityFilter}
          onChange={(e) => setActivityFilter(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">Activity: All</option>
          <option value="Active">Active (last 30 days)</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Recent">Sort: Recent</option>
          <option value="Oldest">Sort: Oldest</option>
        </select>
      </div>

      {/* Table for large screens */}
      <div className="hidden md:block overflow-x-auto border rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-600 text-left">
            <tr>
              <th className="py-3 px-6">Customer Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone</th>
              <th className="py-3 px-6">Orders Count</th>
              <th className="py-3 px-6">Last Active</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No customers found.
                </td>
              </tr>
            ) : (
              filtered.map(
                ({ id, name, email, phone, orders, lastActive, joined, avatar }) => (
                  <tr key={id} className="hover:bg-gray-50">
                    <td className="py-4 px-6 flex items-center gap-3">
                      <img
                        src={avatar}
                        alt={name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{name}</div>
                        <div className="text-xs text-gray-400">Joined {joined}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">{email}</td>
                    <td className="py-4 px-6">{phone}</td>
                    <td className="py-4 px-6">{orders}</td>
                    <td className="py-4 px-6">{lastActive}</td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {filtered.length === 0 && (
          <div className="text-center py-6 text-gray-500">No customers found.</div>
        )}

        {filtered.map(
          ({ id, name, email, phone, orders, lastActive, joined, avatar }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow p-4 border flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={avatar}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{name}</div>
                  <div className="text-xs text-gray-400">Joined {joined}</div>
                </div>
              </div>

              <div>
                <div>
                  <span className="font-semibold">Email:</span> {email}
                </div>
                <div>
                  <span className="font-semibold">Phone:</span> {phone}
                </div>
                <div>
                  <span className="font-semibold">Orders:</span> {orders}
                </div>
                <div>
                  <span className="font-semibold">Last Active:</span> {lastActive}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Pagination Buttons - (Optional) */}
      {/* You can add pagination logic here if needed */}
    </div>
  );
}
