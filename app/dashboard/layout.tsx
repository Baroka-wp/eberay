'use client';

import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-16 h-full w-64 bg-gray-800 p-4">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="ml-64 mt-16 flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Content (children) */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
