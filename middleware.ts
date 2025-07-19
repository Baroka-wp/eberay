// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next()
//   const supabase = createMiddlewareClient({ req, res })
//   const {
//     data: { session },
//   } = await supabase.auth.getSession()

//   // Protection des routes privées
//   if (req.nextUrl.pathname.startsWith('/dashboard') && !session) {
//     return NextResponse.redirect(new URL('/auth', req.url))
//   }

//   // Redirection si déjà connecté
//   if (req.nextUrl.pathname === '/auth' && session) {
//     return NextResponse.redirect(new URL('/dashboard', req.url))
//   }

//   return res
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/auth'],
// }

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Aucune vérification d'authentification, toutes les routes sont ouvertes
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth'], // Toutes les routes sont accessibles
};
