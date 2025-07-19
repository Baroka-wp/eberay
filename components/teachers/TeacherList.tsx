'use client';

import { motion } from 'framer-motion';

const teachers = [
  { id: 1, name: 'Mme Dupont', subject: 'Mathématiques', status: 'active' },
  { id: 2, name: 'M. Lefevre', subject: 'Physique', status: 'inactive' },
  { id: 3, name: 'Mme Martin', subject: 'Chimie', status: 'active' },
  { id: 4, name: 'M. Durand', subject: 'Informatique', status: 'inactive' },
];

const TeacherList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {teachers.map((teacher) => (
        <motion.div
          key={teacher.id}
          className="rounded-lg bg-white p-6 shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-semibold">{teacher.name}</h3>
          <p className="text-gray-500">Matière: {teacher.subject}</p>
          <p className="text-gray-500">{teacher.status === 'active' ? 'Actif' : 'Inactif'}</p>
          <button className="mt-4 text-blue-500">Voir les détails</button>
        </motion.div>
      ))}
    </div>
  );
};

export default TeacherList;
