'use client';

import { Sidebar } from '@/components/sidebar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-16 z-40 h-full w-64 border-r border-border bg-background">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="ml-64 flex-1 pt-16">
        <main>{children}</main>
      </div>
    </div>
  );
}
