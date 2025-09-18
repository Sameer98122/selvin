// pages/settings.jsx
import Head from 'next/head';

import ProfileSection from '@/components/ProfileSection';
import PaymentSection from '@/components/PaymentSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import PreferencesSection from '@/components/PreferencesSection';

export default function SettingsPage() {
  return (
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
      </div>
    </>
  );
}