'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} onToggle={onToggle} />
      <main className="flex-1 bg-white md:ml-64">
        {children}
      </main>
    </div>
  );
}
