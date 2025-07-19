'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export function useAuth() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) setUser(data.user);
    };

    fetchUser();

    // Écouter les changements d'auth
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    // Nettoyer le listener d'auth lors du démontage du composant
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []); // Ne pas avoir de dépendance sur supabase, car il ne change pas

  return { user, supabase };
}
