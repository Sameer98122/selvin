"use client";

import React, { useState } from "react";

export default function PaymentSection() {
  const [company, setCompany] = useState("ShopMate LLC");
  const [vatId, setVatId] = useState("US123456789");
  const [address, setAddress] = useState("456 Market St, San Francisco, CA");

  return (
    <section id="payment" className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Method */}
        <div>
          <h3 className="text-gray-600 mb-2">Billing Method</h3>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <span className="text-gray-800">Visa •••• 4242</span>
            <button className="px-3 py-1 border rounded-lg text-gray-700 text-sm hover:bg-gray-50">
              Update
            </button>
          </div>

          <div className="mt-4">
            <h4 className="text-gray-600 mb-1">Next Charge</h4>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-gray-800">Oct 1, 2025 – $49.00</span>
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg text-gray-700 bg-white hover:bg-gray-50">
              <span>📄</span>
              <span>View Invoices</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg text-gray-700 bg-white hover:bg-gray-50">
              <span>⬇️</span>
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Tax & Company */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-600">Tax & Company</span>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>

          <label className="block">
            <span className="text-gray-600">VAT ID:</span>
            <input
              type="text"
              value={vatId}
              onChange={(e) => setVatId(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>

          <label className="block">
            <span className="text-gray-600">Address:</span>
            <textarea
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
