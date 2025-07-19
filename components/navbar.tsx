// 'use client'

// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { supabase } from '@/lib/supabase/client'
// import { Button } from '@/components/ui/button'
// import { User } from '@supabase/supabase-js'
// import { useRouter } from 'next/navigation'
// import { motion } from "framer-motion";

// export function Navbar() {
//   const [user, setUser] = useState<User | null>(null)
//   const [scrolled, setScrolled] = useState(false)
//   const router = useRouter()

//   useEffect(() => {
//     // Surveillez les changements d'état d'authentification
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null)
//     })

//     // Ajout de l'effet de scrolling
//     const handleScroll = () => {
//       const offset = window.scrollY
//       if (offset > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       subscription.unsubscribe()
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     router.refresh()
//   }

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-purple-800 shadow-lg' : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <Link href="/" className="text-xl font-bold text-white flex items-center">
//           <span className="mr-2">
//             {/* Logo icon */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//             </svg>
//           </span>
//           E-BEYRAY
//         </Link>

//         <div className="hidden md:flex items-center space-x-6">
//           <Link href="/courses" className="text-white hover:text-purple-200 transition-colors">
//             Cours
//           </Link>
//           <Link href="/teams" className="text-white hover:text-purple-200 transition-colors">
//             Groupes
//           </Link>
//           <Link href="/profs" className="text-white hover:text-purple-200 transition-colors">
//             Profs
//           </Link>
//         </div>

//         <div className="flex items-center gap-4">
//           {user ? (
//             <>
//               <div className="hidden md:block text-white text-sm">
//                 {user.email}
//               </div>
//               <Button onClick={handleSignOut} variant="outline" className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-800">
//                 Déconnexion
//               </Button>
//             </>
//           ) : (
//             <Link href="/auth">
//               <Button className="bg-white text-purple-800 hover:bg-purple-100">
//                 Connexion
//               </Button>
//             </Link>
//           )}

//           {/* Hamburger menu for mobile - you can implement a proper mobile menu */}
//           <button className="md:hidden text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   )
// }

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Surveillez les changements d'état d'authentification
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <motion.nav
      className="fixed left-0 right-0 top-0 z-50 bg-purple-800 shadow-lg transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center text-xl font-bold text-white">
          <span className="mr-2">
            {/* Logo icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </span>
          E-BEYRAY
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <Link
            href="/dashboard/courses"
            className="text-white transition-colors hover:text-purple-200"
          >
            Cours
          </Link>
          <Link
            href="/dashboard/teams"
            className="text-white transition-colors hover:text-purple-200"
          >
            Groupes
          </Link>
          <Link
            href="/dashboard/teachers"
            className="text-white transition-colors hover:text-purple-200"
          >
            Enseignants
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="hidden text-sm text-white md:block">{user.email}</div>
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="border border-white bg-transparent text-white hover:bg-white hover:text-purple-800"
              >
                Déconnexion
              </Button>
            </>
          ) : (
            <Link href="/auth">
              <Button className="bg-white text-purple-800 hover:bg-purple-100">Connexion</Button>
            </Link>
          )}

          {/* Hamburger menu for mobile - you can implement a proper mobile menu */}
          <button className="text-white md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
