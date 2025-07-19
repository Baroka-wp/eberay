'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Erreur</h1>
      <p className="mt-4 text-xl">Une erreur est survenue</p>
      <Button onClick={reset} className="mt-8">
        Réessayer
      </Button>
    </div>
  );
}
