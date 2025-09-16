import { Bell, ShoppingCart, DollarSign, Users, Truck } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Overview */}
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Overview</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
        <Card
          icon={<ShoppingCart className="w-5 h-5 text-gray-500" />}
          title="Total Orders"
          value="12,480"
          subtitle="+4.2% vs last month"
        />
        <Card
          icon={<DollarSign className="w-5 h-5 text-gray-500" />}
          title="Revenue"
          value="$842,910"
          subtitle="+6.1% vs last month"
        />
        <Card
          icon={<Users className="w-5 h-5 text-gray-500" />}
          title="Customers"
          value="58,233"
          subtitle="+1,204 new this month"
        />
        <Card
          icon={<Truck className="w-5 h-5 text-gray-500" />}
          title="Pending Shipments"
          value="312"
          subtitle="23 delayed"
        />
      </div>

      {/* Recent Orders */}
      <section className="mb-8 bg-white p-4 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-700 mb-2 sm:mb-0">Recent Orders</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              + New Product
            </button>
            <button className="w-full sm:w-auto px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              View All Orders
            </button>
          </div>
        </div>
        <div className="text-gray-400 text-sm border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
          Orders table placeholder
        </div>
      </section>

      {/* Top Products */}
      <section className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-700 mb-2 sm:mb-0">Top Products</h3>
          <button className="w-full sm:w-auto px-3 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition-colors">
            Manage Products
          </button>
        </div>
        <div className="text-gray-400 text-sm border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
          Products list placeholder
        </div>
      </section>
    </main>
  );
}

function Card({ icon, title, value, subtitle }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{title}</span>
        {icon}
      </div>
      <h4 className="text-2xl font-bold">{value}</h4>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}