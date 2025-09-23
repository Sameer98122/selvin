'use client';
import React, { useState } from 'react';
<<<<<<< HEAD
=======
import Link from 'next/link';
>>>>>>> 73a9b2456f616ed815669f20d6d018815334d5a6

const initialProducts = [
  { id: 1, name: 'Wireless Headphones', price: 129.0, stock: 245, active: true },
  { id: 2, name: 'Smart Watch Series 5', price: 299.0, stock: 98, active: true },
  { id: 3, name: '4K Action Camera', price: 219.0, stock: 0, active: false },
  { id: 4, name: 'Bluetooth Speaker Mini', price: 59.0, stock: 512, active: true },
];

<<<<<<< HEAD
export default function ProductsManagment() {
=======
const ProductsManagment = () => {
>>>>>>> 73a9b2456f616ed815669f20d6d018815334d5a6
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, inactive

  const handleToggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, active: !product.active } : product
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  const filteredProducts = products
    .filter((product) => {
      if (filter === 'active') return product.active;
      if (filter === 'inactive') return !product.active;
      return true;
    })
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
<<<<<<< HEAD
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Products Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          + Add Product
        </button>
=======
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Products Management</h1>
        <Link href="/admin/products/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            + Add Product
          </button>
        </Link>
>>>>>>> 73a9b2456f616ed815669f20d6d018815334d5a6
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2">
          {['all', 'active', 'inactive'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg capitalize ${
                filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map(({ id, name, price, stock, active }) => (
            <div
              key={id}
              className="p-4 border rounded-lg bg-gray-50 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-medium text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  Price: <span className="font-semibold">${price.toFixed(2)}</span>
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Stock:{' '}
                  <span
                    className={`font-semibold ${
                      stock > 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stock > 0 ? stock : 'Out of stock'}
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-between">
                {/* Status Toggle */}
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

                <div className="space-x-2">
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
<<<<<<< HEAD
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
=======
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsManagment;
>>>>>>> 73a9b2456f616ed815669f20d6d018815334d5a6
