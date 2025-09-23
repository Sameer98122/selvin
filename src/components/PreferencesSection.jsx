// components/PreferencesSection.jsx
export default function PreferencesSection() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md">
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Preferences
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dark Mode */}
        <div className="p-5 border rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition">
          <h3 className="font-medium text-gray-800 mb-1">Enable dark mode</h3>
          <p className="text-gray-500 text-sm mb-4">
            Use system theme when available.
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white 
            after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
            after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Email Weekly Reports */}
        <div className="p-5 border rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition">
          <h3 className="font-medium text-gray-800 mb-1">Email weekly reports</h3>
          <p className="text-gray-500 text-sm mb-4">
            Summary delivered every Monday.
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white 
            after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
            after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Auto-sync Orders */}
        <div className="p-5 border rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition">
          <h3 className="font-medium text-gray-800 mb-1">Auto-sync orders</h3>
          <p className="text-gray-500 text-sm mb-4">
            Sync in background every hour.
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white 
            after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
            after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </section>
  );
}
