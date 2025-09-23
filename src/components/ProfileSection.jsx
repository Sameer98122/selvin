'use client';

import React, { useState } from 'react';
import { User } from 'lucide-react';

export default function ProfileSection() {
  const [name, setName] = useState("Ava Thompson");
  const [email, setEmail] = useState("ava@shopmate.com");
  const [bio, setBio] = useState("E-commerce operations lead. I keep our store running smoothly.");
  const [address, setAddress] = useState("123 Main Street, Springfield, USA");

  return (
    <section id="profile" className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Avatar Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-gray-600 mb-2 self-start">Avatar</h3>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full border bg-gray-100 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-400" />
            </div>
            <div className="flex flex-col space-y-2">
              <button className="px-3 py-1 border rounded-lg text-gray-700 bg-gray-50 text-sm hover:bg-gray-100 transition">
                Upload New
              </button>
              <button className="px-3 py-1 border rounded-lg text-gray-700 bg-gray-50 text-sm hover:bg-gray-100 transition">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-600 text-sm">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block">
            <span className="text-gray-600 text-sm">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        {/* Bio & Address */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-600 text-sm">Bio</span>
            <textarea
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-600 text-sm">Default Address</span>
            <textarea
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </section>
  );
}
