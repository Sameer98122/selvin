'use client';

import React, { useState } from 'react';

export default function ProfileSection() {
  const [name, setName] = useState("Ava Thompson");
  const [email, setEmail] = useState("ava@shopmate.com");
  const [bio, setBio] = useState("E-commerce operations lead. I keep our store running smoothly.");
  const [address, setAddress] = useState("123 Main Street, Springfield, USA");

  return (
    <section id="profile" className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Avatar */}
        <div>
          <h3 className="text-gray-600 mb-2">Avatar</h3>
          <div className="flex items-center space-x-4">
            <img
              src="/path/to/avatar.jpg"
              alt="Avatar"
              className="w-16 h-16 rounded-full border"
            />
            <div className="flex space-x-2">
              <button className="px-3 py-1 border rounded-lg text-gray-700 bg-gray-50 text-sm">Upload New</button>
              <button className="px-3 py-1 border rounded-lg text-gray-700 bg-gray-50 text-sm">Remove</button>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-600">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm"
            />
          </label>
          <label className="block">
            <span className="text-gray-600">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm"
            />
          </label>
        </div>

        {/* Bio and Address */}
        <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
          <label className="block">
            <span className="text-gray-600">Bio</span>
            <textarea
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm"
            />
          </label>

          <label className="block">
            <span className="text-gray-600">Default Address</span>
            <textarea
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full text-black border-gray-300 rounded-md shadow-sm"
            />
          </label>
        </div>
      </div>
    </section>
  );
}
