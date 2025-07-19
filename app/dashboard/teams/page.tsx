import GroupList from '../../../components/teams/TeamList';
import GroupFilter from '../../../components/teams/TeamFilter';

export default function MyTeams() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      {/* <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Mes Groupes</h1>
        <p className="text-lg text-gray-600">Gérez vos groupes et vos membres</p>
      </section> */}

      {/* <GroupFilter /> */}

      <GroupList />
    </main>
  );
}
