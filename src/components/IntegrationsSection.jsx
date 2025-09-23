// components/IntegrationsSection.jsx
const integrations = [
  {
    name: 'Shopify',
    status: 'Connected',
    description: 'Sync products and orders every 15 minutes.',
    icon: '🛒',
    action: 'Sync Now',
  },
  {
    name: 'Shippo',
    status: 'Connected',
    description: 'Purchase labels and track shipments.',
    icon: '📦',
    action: 'Manage Keys',
  },
  {
    name: 'Stripe',
    status: 'Connected',
    description: 'Payments and subscriptions processing.',
    icon: '💳',
    action: 'Open Dashboard',
  },
];

export default function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Integrations
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="p-5 border rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-medium flex items-center gap-2">
                <span className="text-2xl">{integration.icon}</span>
                {integration.name}
              </span>
              <span className="text-green-600 text-sm font-medium">
                {integration.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-5">
              {integration.description}
            </p>

            {/* Button */}
            <button className="flex items-center justify-center gap-2 w-full px-4 py-2 border rounded-lg text-gray-700 bg-white hover:bg-gray-100 transition">
              <span>{integration.icon}</span>
              <span>{integration.action}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
