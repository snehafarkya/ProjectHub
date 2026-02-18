'use client';

import {
  LayoutGrid,
  CheckSquare,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', active: true },
    { icon: CheckSquare, label: 'Tasks', active: false },
    { icon: Users, label: 'Team', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open sidebar"
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow"
      >
        <Menu className="w-5 h-5" />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg  flex items-center justify-center font-bold">
              PH
            </div>
            <span className="text-lg font-semibold">ProjectHub</span>
          </div>

          {/* Mobile Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${
                  item.active
                    ? 'bg-gray-100'
                    : 'hover:bg-gray-100'
                }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
