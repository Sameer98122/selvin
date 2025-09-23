import ProfileSection from '@/components/ProfileSection';
import PaymentSection from '@/components/PaymentSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import PreferencesSection from '@/components/PreferencesSection';

export default function SettingsPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Workspace Settings</h1>
        <div className="flex space-x-2">
          <button className="px-3 py-2 sm:px-4 sm:py-2 border rounded-lg text-gray-700 bg-white hover:bg-gray-50">
            Reset
          </button>
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <ProfileSection />
        <PaymentSection />
        <IntegrationsSection />
        <PreferencesSection />
      </div>
    </div>
  );
}
