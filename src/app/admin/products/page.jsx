<<<<<<< HEAD
import ProductsManagment from '@/components/ProductsManagment'
import React from 'react'

const Productpage = () => {
  return (
    <div>
        <ProductsManagment/>
    </div>
  )
}

export default Productpage
=======
'use client';
import React, { useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Wireless Headphones', price: 129.0, stock: 245, active: true },
  { id: 2, name: 'Smart Watch Series 5', price: 299.0, stock: 98, active: true },
  { id: 3, name: '4K Action Camera', price: 219.0, stock: 0, active: false },
  { id: 4, name: 'Bluetooth Speaker Mini', price: 59.0, stock: 512, active: true },
]

const ProductsManagment = () => {
  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all') // all, active, inactive

  const handleToggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, active: !product.active } : product
      )
    )
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts((prev) => prev.filter((product) => product.id !== id))
    }
  }

  const filteredProducts = products.filter((product) => {
    if (filter === 'active') return product.active
    if (filter === 'inactive') return !product.active
    return true
  }).filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Products Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          + Add Product
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1 rounded ${
              filter === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('inactive')}
            className={`px-3 py-1 rounded ${
              filter === 'inactive' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th className="p-3 border border-gray-300">Product Name</th>
            <th className="p-3 border border-gray-300">Price</th>
            <th className="p-3 border border-gray-300">Stock</th>
            <th className="p-3 border border-gray-300">Status</th>
            <th className="p-3 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">
                No products found.
              </td>
            </tr>
          ) : (
            filteredProducts.map(({ id, name, price, stock, active }) => (
              <tr key={id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 border border-gray-300">{name}</td>
                <td className="p-3 border border-gray-300">${price.toFixed(2)}</td>
                <td className="p-3 border border-gray-300">{stock}</td>
                <td className="p-3 border border-gray-300">
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => handleToggleStatus(id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative transition-colors"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
                  </label>
                </td>
                <td className="p-3 border border-gray-300 space-x-2">
                  <button
                    onClick={() => alert(`Edit product ${name}`)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsManagment
>>>>>>> e982dcb0e722a8084ed8223c10abdbc52e432ed8
