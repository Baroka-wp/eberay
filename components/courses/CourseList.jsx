// "use client"

// import { motion } from "framer-motion";

// const courses = [
//     { id: 1, title: "Mathématiques", status: "completed" },
//     { id: 2, title: "Physique", status: "ongoing" },
//     { id: 3, title: "Chimie", status: "pending" },
//     { id: 4, title: "Informatique", status: "completed" },
// ];

// const CourseList = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {courses.map((course) => (
//                 <motion.div
//                     key={course.id}
//                     className="bg-white p-6 rounded-lg shadow-md"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <h3 className="text-2xl font-semibold">{course.title}</h3>
//                     <p className="text-gray-500">{course.status === "completed" ? "Terminé" : course.status === "ongoing" ? "En cours" : "En attente"}</p>
//                     <button className="mt-4 text-blue-500">Voir les détails</button>
//                 </motion.div>
//             ))}
//         </div>
//     );
// };

// export default CourseList;

// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ChevronRight } from "lucide-react";

// const courses = [
//   { id: 1, title: "Mathématiques", status: "completed" },
//   { id: 2, title: "Physique", status: "ongoing" },
//   { id: 3, title: "Chimie", status: "pending" },
//   { id: 4, title: "Informatique", status: "completed" },
// ];

// const statusStyles = {
//   completed: {
//     color: "bg-green-100 text-green-800",
//     label: "Terminé"
//   },
//   ongoing: {
//     color: "bg-blue-100 text-blue-800",
//     label: "En cours"
//   },
//   pending: {
//     color: "bg-amber-100 text-amber-800",
//     label: "En attente"
//   }
// };

// const CourseList = ({ filter = "all" }) => {
//   const filteredCourses = filter === "all"
//     ? courses
//     : courses.filter(course => course.status === filter);

//   return (
//     <div className="space-y-4">
//       {filteredCourses.length === 0 ? (
//         <Card>
//           <CardContent className="pt-6 text-center text-gray-500">
//             Aucun cours ne correspond à ce filtre
//           </CardContent>
//         </Card>
//       ) : (
//         filteredCourses.map((course) => (
//           <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
//             <CardContent className="p-0">
//               <div className="flex items-center justify-between p-4">
//                 <div className="flex-1">
//                   <h3 className="font-medium">{course.title}</h3>
//                   <Badge
//                     className={`mt-1 font-normal ${statusStyles[course.status].color}`}
//                   >
//                     {statusStyles[course.status].label}
//                   </Badge>
//                 </div>
//                 <Button variant="ghost" size="sm" className="flex items-center">
//                   Voir les détails
//                   <ChevronRight className="ml-1 h-4 w-4" />
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// };

// export default CourseList;

'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight, ChevronLeft, FileText, MessageCircle, User, Bot } from 'lucide-react';

// Images de cours (à remplacer par vos propres images)
const courseImages = {
  Mathématiques:
    'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=300&h=200',
  Physique:
    'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=300&h=200',
  Chimie:
    'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=300&h=200',
  Informatique:
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300&h=200',
};

// Données des cours
const courses = [
  {
    id: 1,
    title: 'Mathématiques',
    status: 'completed',
    description:
      "Cours de mathématiques comprenant l'algèbre, les statistiques et le calcul différentiel",
    pdfUrl: '/path-to-math-pdf.pdf',
  },
  {
    id: 2,
    title: 'Physique',
    status: 'ongoing',
    description: "Étude de la mécanique, de l'électromagnétisme et de la physique quantique",
    pdfUrl: '/path-to-physics-pdf.pdf',
  },
  {
    id: 3,
    title: 'Chimie',
    status: 'pending',
    description: 'Introduction à la chimie organique et inorganique avec travaux pratiques',
    pdfUrl: '/path-to-chemistry-pdf.pdf',
  },
  {
    id: 4,
    title: 'Informatique',
    status: 'completed',
    description: 'Programmation, structures de données et algorithmes fondamentaux',
    pdfUrl: '/path-to-cs-pdf.pdf',
  },
];

const statusStyles = {
  completed: {
    color: 'bg-green-100 text-green-800',
    label: 'Terminé',
  },
  ongoing: {
    color: 'bg-blue-100 text-blue-800',
    label: 'En cours',
  },
  pending: {
    color: 'bg-amber-100 text-amber-800',
    label: 'En attente',
  },
};

export default function CourseList() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [chatMode, setChatMode] = useState('ai'); // "ai" ou "professor"

  // Filtrer les cours selon le statut sélectionné
  const filteredCourses =
    currentFilter === 'all' ? courses : courses.filter((course) => course.status === currentFilter);

  // Fonction pour retourner à la liste des cours
  const handleBack = () => {
    setSelectedCourse(null);
  };

  // Messages factices pour la démo du chat
  const demoMessages = [
    { sender: 'user', content: "Bonjour, j'ai une question sur ce cours." },
    {
      sender: chatMode === 'ai' ? 'ai' : 'professor',
      content: "Bien sûr, comment puis-je vous aider aujourd'hui?",
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl py-6">
      {!selectedCourse ? (
        // Vue de la liste des cours
        <>
          {/* <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-2xl font-bold mb-2">Mes Cours</h1>
            <p className="text-gray-600">
              Gérez vos cours et suivez vos progrès
            </p>
          </div> */}

          <Tabs
            defaultValue="all"
            value={currentFilter}
            onValueChange={setCurrentFilter}
            className="mb-6 w-full"
          >
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="all">Tous les cours</TabsTrigger>
              <TabsTrigger value="ongoing">En cours</TabsTrigger>
              <TabsTrigger value="completed">Terminés</TabsTrigger>
              <TabsTrigger value="pending">En attente</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredCourses.length === 0 ? (
              <Card className="col-span-2">
                <CardContent className="pt-6 text-center text-gray-500">
                  Aucun cours ne correspond à ce filtre
                </CardContent>
              </Card>
            ) : (
              filteredCourses.map((course) => (
                <Card
                  key={course.id}
                  className="cursor-pointer overflow-hidden border border-gray-200 transition-shadow hover:shadow-md"
                  onClick={() => setSelectedCourse(course)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-32 bg-gray-100">
                      <img
                        src={courseImages[course.title] || '/api/placeholder/300/160'}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                      <Badge
                        className={`absolute right-3 top-3 ${statusStyles[course.status].color}`}
                      >
                        {statusStyles[course.status].label}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                        {course.description}
                      </p>
                      <div className="mt-3 flex justify-end">
                        <Button variant="outline" size="sm" className="flex items-center">
                          Accéder au cours
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </>
      ) : (
        // Vue détaillée d'un cours avec PDF et chat
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center border-b border-gray-200 p-4">
            <Button variant="ghost" onClick={handleBack} className="mr-2">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-semibold">{selectedCourse.title}</h2>
            <Badge className={`ml-3 ${statusStyles[selectedCourse.status].color}`}>
              {statusStyles[selectedCourse.status].label}
            </Badge>
          </div>

          <div className="flex h-[calc(100vh-200px)] flex-col md:flex-row">
            {/* PDF Viewer */}
            <div className="flex-1 border-r border-gray-200 bg-gray-50 p-4">
              <div className="mb-3 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-gray-700" />
                <h3 className="font-medium">Contenu du cours</h3>
              </div>

              <div className="flex h-[calc(100%-40px)] items-center justify-center rounded-lg border border-gray-200 bg-white">
                <div className="p-6 text-center">
                  <p className="mb-4 text-gray-600">
                    Aperçu du PDF du cours {selectedCourse.title}
                  </p>
                  <Button>Télécharger le PDF</Button>
                </div>
                {/* Intégrer ici un véritable visualiseur PDF avec le fichier selectedCourse.pdfUrl */}
              </div>
            </div>

            {/* Chat Interface */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <h3 className="flex items-center font-medium">
                  <MessageCircle className="mr-2 h-5 w-5 text-gray-700" />
                  Chat
                </h3>
                <div className="flex overflow-hidden rounded-lg border">
                  <Button
                    variant={chatMode === 'professor' ? 'default' : 'outline'}
                    size="sm"
                    className="rounded-none"
                    onClick={() => setChatMode('professor')}
                  >
                    <User className="mr-1 h-4 w-4" />
                    Professeur
                  </Button>
                  <Button
                    variant={chatMode === 'ai' ? 'default' : 'outline'}
                    size="sm"
                    className="rounded-none"
                    onClick={() => setChatMode('ai')}
                  >
                    <Bot className="mr-1 h-4 w-4" />
                    Assistant IA
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                {demoMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-3/4 rounded-lg p-3 ${
                        msg.sender === 'user'
                          ? 'bg-purple-600 text-white'
                          : msg.sender === 'professor'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Écrivez au ${chatMode === 'ai' ? 'assistant IA' : 'professeur'}...`}
                  />
                  <Button className="rounded-l-none">Envoyer</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
