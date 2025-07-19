'use client';

const TeamFilter = () => {
  return (
    <div className="mb-8">
      <label htmlFor="status" className="block text-lg font-medium text-gray-700">
        Filtrer par statut
      </label>
      <select id="status" name="status" className="mt-2 rounded border border-gray-300 p-2">
        <option value="all">Tous</option>
        <option value="active">Actif</option>
        <option value="inactive">Inactif</option>
      </select>
    </div>
  );
};

export default TeamFilter;
