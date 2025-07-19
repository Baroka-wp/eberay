import TeacherList from '../../../components/teachers/TeacherList';
import TeacherFilter from '../../../components/teachers/TeacherFilter';

export default function MyTeachers() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Mes Professeurs</h1>
        <p className="text-lg text-gray-600">Gérez vos professeurs et leurs matières</p>
      </section>

      <TeacherFilter />

      <TeacherList />
    </main>
  );
}
