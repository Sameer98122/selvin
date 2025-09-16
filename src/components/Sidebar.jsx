'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Box, ShoppingBag, Users, Settings, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: Home },
  { name: 'Products', path: '/admin/products', icon: Box },
  { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
  { name: 'Customers', path: '/admin/customers', icon: Users },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = ({ onClick }) => (
    <ul className="space-y-2">
      {navItems.map(({ name, path, icon: Icon }) => {
        const isActive = pathname === path;
        return (
          <li key={name}>
            <Link
              href={path}
              onClick={onClick}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-blue-800 text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <span className="text-xl">🛍️</span>
          <h1 className="text-lg font-bold">ShopMate Admin</h1>
        </div>
        <button onClick={() => setOpen(true)} aria-label="Open Menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 w-64 h-screen bg-gray-100 p-6 flex-col border-r">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl">🛍️</span>
          <h2 className="text-lg font-semibold">ShopMate Admin</h2>
        </div>

        <nav className="flex-1">
          <NavLinks />
        </nav>

        <div className="pt-6 border-t mt-auto">
          <a
            href="#"
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-black transition"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </a>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute left-0 top-0 w-64 h-full bg-gray-100 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛍️</span>
                <h2 className="text-lg font-semibold">ShopMate Admin</h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1">
              <NavLinks onClick={() => setOpen(false)} />
            </nav>

            <div className="pt-6 border-t mt-auto">
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-black transition"
              >
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
