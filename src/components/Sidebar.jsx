import React, { useState } from 'react';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Menu, 
  X,
  Bell,
  Phone
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Dashboard', icon: Home, active: true },
    { name: 'Products', icon: Package, active: true },
    { name: 'Orders', icon: ShoppingCart, active: true },
    { name: 'Customers', icon: Users, active: true },
    { name: 'Analytics', icon: BarChart3, active: true },
    { name: 'Settings', icon: Settings, active: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMobileMenu}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="bg-blue-500 p-1 sm:p-1.5 rounded-md sm:rounded-lg">
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">ShopMate</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-3">
          <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 relative">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <button className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 relative">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 bg-red-500 text-white rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center text-xs">3</span>
          </button>
          <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs sm:text-sm font-medium">A</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
          <div className="bg-white w-64 h-full shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-3 sm:p-4 border-b">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 p-1.5 sm:p-2 rounded-lg">
                  <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">ShopMate Admin</span>
              </div>
            </div>
            
            <nav className="mt-2 sm:mt-4">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 text-left hover:bg-gray-50 ${
                      item.active 
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                        : 'text-gray-700'
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-medium text-sm sm:text-base">{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-4">
              <div className="bg-gray-900 text-white p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-medium">N</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        {/* Desktop Top Bar */}
        <div className="fixed top-0 right-0 left-64 bg-white shadow-sm border-b px-4 lg:px-6 py-3 flex items-center justify-between z-10">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
            <span className="text-gray-700 font-medium text-sm lg:text-base">Contact Customer</span>
          </div>
          
          <div className="flex items-center space-x-2 lg:space-x-4">
            <button className="p-1.5 lg:p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 lg:-top-1 lg:-right-1 bg-red-500 text-white text-xs rounded-full h-3 w-3 lg:h-4 lg:w-4 flex items-center justify-center">3</span>
            </button>
            <div className="h-7 w-7 lg:h-8 lg:w-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs lg:text-sm font-medium">A</span>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r z-20">
          <div className="p-3 lg:p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-500 p-1.5 lg:p-2 rounded-lg">
                <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <span className="text-base lg:text-lg font-semibold text-gray-900">ShopMate Admin</span>
            </div>
          </div>
          
          <nav className="mt-2 lg:mt-4 flex-1">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`w-full flex items-center space-x-3 px-3 lg:px-4 py-2.5 lg:py-3 text-left hover:bg-gray-50 ${
                    item.active 
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                      : 'text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-medium text-sm lg:text-base">{item.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4">
            <div className="bg-gray-900 text-white p-2 rounded-full w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
              <span className="text-xs lg:text-sm font-medium">N</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Navbar;