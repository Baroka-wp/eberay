'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Users,
  User,
  Settings,
  Home,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      name: 'Accueil',
      path: '/dashboard',
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: 'Cours',
      path: '/dashboard/courses',
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: 'Groupes',
      path: '/dashboard/teams',
      icon: <Users className="h-5 w-5" />,
    },
    {
      name: 'Enseignants',
      path: '/dashboard/teachers',
      icon: <User className="h-5 w-5" />,
    },
    {
      name: 'Profil',
      path: '/dashboard/profil',
      icon: <User className="h-5 w-5" />,
    },
    {
      name: 'Paramètres',
      path: '/dashboard/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.div
      className={`h-full bg-background ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300`}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex h-full flex-col">
        {/* Toggle Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-hover-bg"
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`flex items-center rounded-lg px-3 py-2 transition-all duration-200 ${isActive
                        ? 'bg-accent text-white'
                        : 'text-foreground hover:bg-hover-bg'
                      }`}
                  >
                    <span className={`${isCollapsed ? 'mx-auto' : 'mr-3'}`}>
                      {item.icon}
                    </span>
                    {!isCollapsed && (
                      <span className="font-medium">{item.name}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="border-t border-border p-4">
            <div className="text-center text-xs text-text-subtle">
              E-BEYRAY © 2025
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
