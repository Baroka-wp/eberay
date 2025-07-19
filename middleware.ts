// File: middleware.ts
// Purpose: Middleware Next.js pour la gestion des routes
// Dependencies: next/server
// Sections:
// 1. Configuration du middleware
// 2. Protection des routes (désactivée pour l'instant)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Aucune vérification d'authentification pour l'instant
  // Toutes les routes sont accessibles
  return NextResponse.next();
}

export const config = {
  // Définit les routes sur lesquelles le middleware s'applique
  matcher: ['/dashboard/:path*', '/auth'],
};
