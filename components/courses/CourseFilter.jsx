// "use client"

// import { useState } from "react";

// const CourseFilter = () => {
//     const [filter, setFilter] = useState("all");

//     const handleFilterChange = (e) => {
//         setFilter(e.target.value);
//     };

//     return (
//         <div className="mb-8 flex justify-center gap-6">
//             <select
//                 className="p-2 rounded-lg bg-white border border-gray-300"
//                 value={filter}
//                 onChange={handleFilterChange}
//             >
//                 <option value="all">Tous les cours</option>
//                 <option value="ongoing">En cours</option>
//                 <option value="completed">Terminés</option>
//                 <option value="pending">En attente</option>
//             </select>
//         </div>
//     );
// };

// export default CourseFilter;

'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CourseFilter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (value) => {
    setFilter(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <Tabs defaultValue="all" value={filter} onValueChange={handleFilterChange} className="w-full">
      <TabsList className="mb-6 grid grid-cols-4">
        <TabsTrigger value="all">Tous les cours</TabsTrigger>
        <TabsTrigger value="ongoing">En cours</TabsTrigger>
        <TabsTrigger value="completed">Terminés</TabsTrigger>
        <TabsTrigger value="pending">En attente</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default CourseFilter;
