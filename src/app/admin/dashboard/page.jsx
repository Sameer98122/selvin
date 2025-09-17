'use client';
import {
  ShoppingCart,
  DollarSign,
  Users,
  Package,
  TrendingUp,
  Plus,
  Bell,
  User,
  BarChart3
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Orders',
      value: '12,480',
      change: '+4.2% vs last month',
      icon: ShoppingCart,
      color: 'text-blue-600'
    },
    {
      title: 'Revenue',
      value: '$842,910',
      change: '+6.1% vs last month',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Customers',
      value: '58,233',
      change: '+1,204 new this month',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Pending Shipments',
      value: '312',
      change: '23 delayed',
      icon: Package,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Overview</p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 sm:p-6 lg:p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</h3>
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                </div>
                <div className="space-y-1">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
          {/* Recent Orders Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button className="flex items-center justify-center space-x-2 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg border border-blue-200 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>New Product</span>
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors">
                    View All Orders
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center">
                <Package className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-500 text-sm sm:text-base">Orders table placeholder</p>
                <p className="text-xs text-gray-400 mt-1">Recent orders will appear here</p>
              </div>
            </div>
          </div>

          {/* Top Products Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors self-start sm:self-auto">
                  Manage Products
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-gray-500 text-sm sm:text-base">Products list placeholder</p>
                <p className="text-xs text-gray-400 mt-1">Top selling products will appear here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Overview */}
        <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Overview</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-500 text-sm sm:text-base">Charts and analytics will appear here</p>
            <p className="text-xs text-gray-400 mt-1">Sales trends, customer behavior, and performance metrics</p>
          </div>
        </div>
      </main>
    </div>
  );
}