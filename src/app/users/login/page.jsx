'use client'
import React, { useState } from 'react'

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <form className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
        <h3 className="text-center font-semibold text-lg">ShopMate Admin</h3>
        <h2 className="text-center font-bold text-2xl mt-2">Admin Login</h2>
        <p className="text-center text-gray-400 mt-2 mb-6">Secure access to your admin dashboard.</p>

        <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
        <input
          id="email"
          type="email"
          placeholder="admin@shopmate.com"
          className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
        <div className="relative mb-4">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-500">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition"
        >
          Login as Admin
        </button>

        <p className="text-center text-gray-400 mt-6 text-xs">Use a trusted device and network.</p>
      </form>
    </div>
  )
}

export default Loginpage;
