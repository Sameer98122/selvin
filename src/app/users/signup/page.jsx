'use client'
import React, { useState } from 'react'

const SignupPage = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    console.log({ fullName, email, password, confirmPassword, role })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h3 className="text-center font-semibold text-lg">ShopMate Admin</h3>
        <h2 className="text-center font-bold text-2xl mt-2">Create Admin Account</h2>
        <p className="text-center text-gray-400 mt-2 mb-6">Add a new administrator to your organization.</p>

        <label htmlFor="fullName" className="block text-sm font-semibold mb-1">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Leslie Alexander"
          className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="leslie@company.com"
          className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <div className="w-1/2">
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1">Confirm Password</label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="********"
                className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                tabIndex={-1}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        </div>

        <label htmlFor="role" className="block text-sm font-semibold mb-1">Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 rounded-md border border-gray-300 bg-gray-50 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="" disabled>Select Role</option>
          <option value="super-admin">Super Admin</option>
          <option value="staff">Staff</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Create Admin Account
        </button>

        <p className="text-center text-gray-400 mt-6 text-xs">
          Already an admin?{' '}
          <a href="/users/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  )
}

export default SignupPage
