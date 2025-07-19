import ProfileDetails from '../../../components/profil/ProfileDetails';
import { Button } from '@/components/ui/button';

export default function Profile() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Mon Profil</h1>
        <p className="text-lg text-gray-600">Gérez vos informations personnelles</p>
      </section>

      <ProfileDetails />
    </main>
  );
}
