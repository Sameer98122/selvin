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
    <section id="integrations" className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Integrations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <div key={integration.name} className="p-4 border rounded-lg bg-gray-50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium">{integration.name}</span>
              <span className="text-green-600 text-sm">{integration.status}</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">{integration.description}</p>
            <button className="flex items-center space-x-2 px-3 py-2 border rounded-lg text-gray-700 bg-white hover:bg-gray-100">
              <span>{integration.icon}</span>
              <span>{integration.action}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}