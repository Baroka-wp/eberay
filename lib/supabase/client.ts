import { createClient } from '@supabase/supabase-js';

// Initialisez Supabase une seule fois dans un fichier séparé
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
