<<<<<<< HEAD
=======
// pages/settings.jsx
import Head from 'next/head';

>>>>>>> 73a9b2456f616ed815669f20d6d018815334d5a6
import ProfileSection from '@/components/ProfileSection';
import PaymentSection from '@/components/PaymentSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import PreferencesSection from '@/components/PreferencesSection';

export default function SettingsPage() {
  return (
<<<<<<< HEAD
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
=======
    <>
      <Head>
        <title>Workspace Settings</title>
      </Head>
      <div className="flex bg-gray-100 min-h-screen">
        
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Workspace Settings</h1>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                Reset
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
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
        </main>
>>>>>>> 73a9b2456f616ed815669f20d6d018815334d5a6
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
