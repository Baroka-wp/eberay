// File: hooks/useAuth.ts
// Purpose: Hook d'authentification simple sans dépendance externe
// Dependencies: react
// Sections:
// 1. État utilisateur local
// 2. Fonctions d'authentification basiques

'use client';

import { useState } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    // Ici vous pouvez ajouter la logique de stockage en localStorage si nécessaire
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = !!user;

  return { 
    user, 
    login, 
    logout, 
    isAuthenticated 
  };
}
