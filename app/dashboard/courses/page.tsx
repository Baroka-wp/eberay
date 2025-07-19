// import CourseList from "../../../components/courses/CourseList";
// import CourseFilter from "../../../components/courses/CourseFilter";

// export default function MyCourses() {
//   return (
//     <main className="min-h-screen bg-gray-100 p-8">
//       <section className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Mes Cours</h1>
//         <p className="text-lg text-gray-600">Gérez vos cours et suivez vos progrès</p>
//       </section>

//       <CourseFilter />

//       <CourseList />
//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import CourseList from '@/components/courses/CourseList';
import CourseFilter from '@/components/courses/CourseFilter';

export default function MyCourses() {
  const [currentFilter, setCurrentFilter] = useState('all');

  return (
    <div className="container mx-auto max-w-4xl py-8">
      {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Mes Cours</h1>
        <p className="text-gray-600">
          Gérez vos cours et suivez vos progrès
        </p>
      </div> */}

      {/* <CourseFilter onFilterChange={setCurrentFilter} /> */}
      <CourseList />
    </div>
  );
}
