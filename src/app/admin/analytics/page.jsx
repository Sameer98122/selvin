"use client";
import React, { useState } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('Last 30 days');
  
  // Exact data from your image
  const salesOverTimeData = [
    { name: 'Jan', revenue: 20000, orders: 150 },
    { name: 'Feb', revenue: 45000, orders: 280 },
    { name: 'Mar', revenue: 65000, orders: 420 },
    { name: 'Apr', revenue: 85000, orders: 520 },
    { name: 'May', revenue: 75000, orders: 480 },
    { name: 'Jun', revenue: 95000, orders: 620 },
    { name: 'Jul', revenue: 105000, orders: 680 },
    { name: 'Aug', revenue: 128450, orders: 800 }
  ];

  const trafficSourcesData = [
    { name: 'Organic', value: 60, color: '#3B82F6' },
    { name: 'Paid', value: 25, color: '#10B981' },
    { name: 'Referral', value: 15, color: '#8B5CF6' }
  ];

  const topSellingProductsData = [
    { name: 'Product 1', value: 85 },
    { name: 'Product 2', value: 70 },
    { name: 'Product 3', value: 65 },
    { name: 'Product 4', value: 50 },
    { name: 'Product 5', value: 40 },
    { name: 'Product 6', value: 30 }
  ];

  const customerLocations = [
    { 
      country: 'United States', 
      city: 'New York, San Francisco, Austin', 
      customers: '8,210', 
      orders: '5,340' 
    },
    { 
      country: 'United Kingdom', 
      city: 'London, Manchester, Bristol', 
      customers: '3,120', 
      orders: '1,860' 
    },
    { 
      country: 'Germany', 
      city: 'Berlin, Munich, Hamburg', 
      customers: '2,540', 
      orders: '1,420' 
    },
    { 
      country: 'Australia', 
      city: 'Sydney, Melbourne, Brisbane', 
      customers: '1,980', 
      orders: '1,120' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="p-2 bg-gray-100 rounded-full mr-3">
            <BarChart3 className="w-5 h-5 text-gray-600" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">Analytics</h1>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center text-sm text-gray-600">
            <span className="mr-2">Date range</span>
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm bg-white focus:outline-none focus:border-blue-500"
            >
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          
          <button className="flex items-center px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
            <span className="mr-2">Change</span>
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-medium">A</span>
            </div>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Revenue */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">$128,450</div>
          <div className="text-sm text-gray-500">vs last period</div>
          <div className="text-sm text-green-600">+8.2%</div>
        </div>

        {/* Total Users */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Users</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">24,380</div>
          <div className="text-sm text-gray-500">vs last period</div>
          <div className="text-sm text-green-600">+3.1%</div>
        </div>

        {/* Total Orders */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Orders</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">9,214</div>
          <div className="text-sm text-gray-500">vs last period</div>
          <div className="text-sm text-green-600">+5.1%</div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Conversion Rate</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">3.2%</div>
          <div className="text-sm text-gray-500">vs last period</div>
          <div className="text-sm text-green-600">+0.5%</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sales Over Time */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Sales Over Time</h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Revenue</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-gray-600">Orders</span>
              </div>
            </div>
          </div>
          
          <div className="h-64">
            {/* Placeholder for line chart */}
            <div className="w-full h-full bg-gray-50 rounded flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesOverTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="orders" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Traffic Sources</h3>
          
          <div className="h-64">
            <div className="w-full h-full bg-gray-50 rounded flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficSourcesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {trafficSourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Organic</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Paid</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Referral</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Top Selling Products</h3>
          
          <div className="h-64">
            <div className="w-full h-full bg-gray-50 rounded flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topSellingProductsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Customer Locations */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Locations</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-sm font-medium text-gray-600 pb-3">Country</th>
                  <th className="text-left text-sm font-medium text-gray-600 pb-3">City</th>
                  <th className="text-right text-sm font-medium text-gray-600 pb-3">Customers</th>
                  <th className="text-right text-sm font-medium text-gray-600 pb-3">Orders</th>
                </tr>
              </thead>
              <tbody>
                {customerLocations.map((location, index) => (
                  <tr key={index} className="border-b border-gray-50 last:border-b-0">
                    <td className="py-3 text-sm text-gray-900 font-medium">{location.country}</td>
                    <td className="py-3 text-sm text-gray-600">{location.city}</td>
                    <td className="py-3 text-sm text-gray-900 text-right">{location.customers}</td>
                    <td className="py-3 text-sm text-gray-900 text-right">{location.orders}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;