"use client";

import React, { useState } from "react";

export default function PaymentSection() {
  const [company, setCompany] = useState("ShopMate LLC");
  const [vatId, setVatId] = useState("US123456789");
  const [address, setAddress] = useState("456 Market St, San Francisco, CA");

  return (
    <section
      id="payment"
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Payment
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Method */}
        <div>
          <h3 className="text-gray-700 font-medium mb-3">Billing Method</h3>

          <div className="flex items-center justify-between p-4 border rounded-xl bg-gray-50">
            <span className="text-gray-800 font-medium">💳 Visa •••• 4242</span>
            <button className="px-3 py-1 border rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
              Update
            </button>
          </div>

          <div className="mt-5">
            <h4 className="text-gray-700 font-medium mb-2">Next Charge</h4>
            <div className="flex items-center justify-between p-4 border rounded-xl bg-gray-50">
              <span className="text-gray-800 font-medium">
                Oct 1, 2025 – $49.00
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
              <span>📄</span>
              <span>View Invoices</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 transition">
              <span>⬇️</span>
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Tax & Company */}
        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tax & Company
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              VAT ID
            </label>
            <input
              type="text"
              value={vatId}
              onChange={(e) => setVatId(e.target.value)}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Address
            </label>
            <textarea
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
