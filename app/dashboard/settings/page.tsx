import SettingsForm from '../../../components/settings/SettingsForm';

export default function Settings() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Paramètres</h1>
        <p className="text-lg text-gray-600">Gérez vos préférences et informations de sécurité</p>
      </section>

      <SettingsForm />
    </main>
  );
}
