'use client';

import './globals.css';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen">
          <Sidebar />
          {/* Main content ke liye margin-left desktop pe 64 (sidebar width) dena hai */}
          <main className="flex-1 p-6 bg-white ml-0 md:ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
