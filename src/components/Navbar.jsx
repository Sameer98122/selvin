"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminNavbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Customers", path: "/admin/customers" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <nav className="p-4 bg-gray-800 text-white flex space-x-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`hover:text-blue-400 ${
            pathname === item.path ? "text-blue-400 font-semibold" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
