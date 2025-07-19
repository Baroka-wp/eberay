// // dashboard/page.tsx
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
// import { cookies } from 'next/headers'
// import { redirect } from 'next/navigation'

// export const dynamic = "force-dynamic"  // Ajoutez cette ligne pour forcer un rendu dynamique

// export default async function DashboardPage() {
//   const supabase = createServerComponentClient({ cookies })
//   const { data: { session } } = await supabase.auth.getSession()

//   if (!session) {
//     redirect('/auth')
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-bold">Tableau de bord</h1>
//       <p className="mt-4">Bienvenue {session.user.email}</p>
//     </div>
//   )
// }

export default function DashboardHomePage() {
  return (
    <div>
      <h1>Bienvenue sur votre tableau de bord</h1>
      <p>
        Ceci est la page d&apos;accueil de votre tableau de bord. Vous pouvez y afficher des
        informations générales, des liens rapides vers les autres sections, etc.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="text-xl font-semibold">Cours</h3>
          <p>Accédez à vos cours ici.</p>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="text-xl font-semibold">Groupes</h3>
          <p>Gérez vos groupes ici.</p>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-md">
          <h3 className="text-xl font-semibold">Professeurs</h3>
          <p>Consultez la liste des professeurs ici.</p>
        </div>
      </div>
    </div>
  );
}
