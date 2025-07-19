// "use client"

// import { motion } from "framer-motion";

// const groups = [
//     { id: 1, title: "Développement Web", status: "active" },
//     { id: 2, title: "Intelligence Artificielle", status: "inactive" },
//     { id: 3, title: "Data Science", status: "active" },
//     { id: 4, title: "Blockchain", status: "inactive" },
// ];

// const TeamList = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {groups.map((group) => (
//                 <motion.div
//                     key={group.id}
//                     className="bg-white p-6 rounded-lg shadow-md"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <h3 className="text-2xl font-semibold">{group.title}</h3>
//                     <p className="text-gray-500">{group.status === "active" ? "Actif" : "Inactif"}</p>
//                     <button className="mt-4 text-blue-500">Voir les détails</button>
//                 </motion.div>
//             ))}
//         </div>
//     );
// };

// export default TeamList;

'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Search,
  UserPlus,
  UserCheck,
  PlusCircle,
  Settings,
  MessageCircle,
  Bell,
  ChevronDown,
  UserX,
  X,
  Check,
} from 'lucide-react';

// Données fictives
const groups = [
  {
    id: 1,
    title: 'Développement Web',
    status: 'active',
    members: 24,
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300&h=200',
    latestActivity: 'Il y a 2 heures',
  },
  {
    id: 2,
    title: 'Intelligence Artificielle',
    status: 'inactive',
    members: 18,
    image:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=300&h=200',
    latestActivity: 'Il y a 3 jours',
  },
  {
    id: 3,
    title: 'Data Science',
    status: 'active',
    members: 32,
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300&h=200',
    latestActivity: 'Il y a 1 jour',
  },
  {
    id: 4,
    title: 'Blockchain',
    status: 'inactive',
    members: 15,
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=300&h=200',
    latestActivity: 'Il y a 1 semaine',
  },
];

const friends = [
  {
    id: 1,
    name: 'Sophie Martin',
    avatar: 'https://i.pravatar.cc/150?img=1',
    status: 'online',
    mutualFriends: 4,
    relation: 'friend',
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 'offline',
    mutualFriends: 2,
    relation: 'friend',
  },
  {
    id: 3,
    name: 'Emma Bernard',
    avatar: 'https://i.pravatar.cc/150?img=9',
    status: 'online',
    mutualFriends: 5,
    relation: 'pending',
  },
  {
    id: 4,
    name: 'Lucas Petit',
    avatar: 'https://i.pravatar.cc/150?img=3',
    status: 'offline',
    mutualFriends: 1,
    relation: 'request',
  },
  {
    id: 5,
    name: 'Léa Moreau',
    avatar: 'https://i.pravatar.cc/150?img=2',
    status: 'online',
    mutualFriends: 3,
    relation: 'suggested',
  },
];

const recommendedGroups = [
  {
    id: 5,
    title: 'UX/UI Design',
    members: 47,
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=300&h=200',
  },
  {
    id: 6,
    title: 'DevOps & CI/CD',
    members: 29,
    image:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=300&h=200',
  },
];

// Définir l'interface du groupe
interface Group {
  image: string;
  title: string;
  members: number;
  status: string;
}

export default function TeamList() {
  const [view, setView] = useState('groups'); // "groups", "friends", "groupDetail", "createGroup"
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [friendsFilter, setFriendsFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState([
    "Thomas Dubois a partagé un message dans 'Développement Web'",
    "Emma Bernard a rejoint le groupe 'Data Science'",
    "Lucas Petit vous a envoyé une demande d'ami",
  ]);

  // Fonction pour filtrer les groupes selon le statut
  const filteredGroups = groups
    .filter((group) => {
      if (statusFilter === 'all') return true;
      return group.status === statusFilter;
    })
    .filter((group) => {
      if (!searchTerm) return true;
      return group.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

  // Filtrer les amis
  const filteredFriends = friends
    .filter((friend) => {
      if (friendsFilter === 'all') return true;
      return friend.relation === friendsFilter;
    })
    .filter((friend) => {
      if (!searchTerm) return true;
      return friend.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  // Afficher les détails d'un groupe
  const handleGroupClick = (group: Group) => {
    setSelectedGroup(group);
    setView('groupDetail');
  };

  // Retour à la vue principale des groupes
  const handleBack = () => {
    setView('groups');
    setSelectedGroup(null);
  };

  // Fonction pour gérer les relations d'amis
  const handleFriendAction = (id: number, action: string) => {
    // Cette fonction simulerait l'envoi d'une requête au backend
    console.log(`Action ${action} pour l'ami avec l'ID ${id}`);
  };



  return (
    <div className="container mx-auto px-4 py-6 lg:px-0">
      {/* Navigation principale */}
      <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">E-BEYRAY Social</h1>
          <div className="flex gap-3">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-700" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <MessageCircle className="h-5 w-5 text-gray-700" />
            </button>
            <div className="relative">
              <Image
                src="https://i.pravatar.cc/150?img=10"
                alt="Profile"
                className="h-9 w-9 rounded-full border border-gray-200"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Section principale avec navigation latérale et contenu */}
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Navigation latérale */}
        <div className="w-full rounded-lg bg-white p-4 shadow-sm md:w-64">
          <nav className="space-y-1">
            <button
              className={`flex w-full items-center rounded-lg p-3 ${view === 'groups' ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'}`}
              onClick={() => setView('groups')}
            >
              <Users className="mr-3 h-5 w-5" />
              <span className="font-medium">Mes Groupes</span>
            </button>
            <button
              className={`flex w-full items-center rounded-lg p-3 ${view === 'friends' ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'}`}
              onClick={() => setView('friends')}
            >
              <UserPlus className="mr-3 h-5 w-5" />
              <span className="font-medium">Amis</span>
            </button>
            <button
              className={`flex w-full items-center rounded-lg p-3 ${view === 'createGroup' ? 'bg-purple-100 text-purple-600' : 'hover:bg-gray-100'}`}
              onClick={() => setView('createGroup')}
            >
              <PlusCircle className="mr-3 h-5 w-5" />
              <span className="font-medium">Créer un Groupe</span>
            </button>
          </nav>

          <hr className="my-4" />

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Dernières notifications</h3>
            <ul className="space-y-2">
              {notifications.map((notification, index) => (
                <li key={index} className="cursor-pointer rounded p-2 text-sm hover:bg-gray-50">
                  {notification}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex-1">
          {view === 'groups' && (
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Mes Groupes</h2>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher un groupe..."
                      className="rounded-lg border border-gray-300 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    className="rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">Tous les groupes</option>
                    <option value="active">Groupes actifs</option>
                    <option value="inactive">Groupes inactifs</option>
                  </select>
                </div>
              </div>

              {/* Liste des groupes */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {filteredGroups.length === 0 ? (
                  <p className="col-span-2 py-4 text-center text-gray-500">
                    Aucun groupe ne correspond à votre recherche
                  </p>
                ) : (
                  filteredGroups.map((group) => (
                    <motion.div
                      key={group.id}
                      className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleGroupClick(group)}
                    >
                      <div className="relative h-40 bg-gray-100">
                        <Image
                          src={group.image}
                          alt={group.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute right-3 top-3 rounded-full bg-black bg-opacity-60 px-2 py-1 text-xs text-white">
                          {group.status === 'active' ? 'Actif' : 'Inactif'}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{group.title}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="mr-1 h-4 w-4" />
                            <span>{group.members} membres</span>
                          </div>
                          <div className="text-sm text-gray-500">{group.latestActivity}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Groupes recommandés */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold">Groupes recommandés</h3>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {recommendedGroups.map((group) => (
                    <motion.div
                      key={group.id}
                      className="flex overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-md"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="h-24 w-24 bg-gray-100">
                        <Image
                          src={group.image}
                          alt={group.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-3">
                        <h3 className="font-medium">{group.title}</h3>
                        <div className="mt-1 flex items-center text-sm text-gray-600">
                          <Users className="mr-1 h-3 w-3" />
                          <span>{group.members} membres</span>
                        </div>
                        <button className="mt-2 text-sm font-medium text-purple-600 hover:text-purple-800">
                          Rejoindre
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Vue détaillée d'un groupe */}
          {view === 'groupDetail' && selectedGroup && (
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative h-56 bg-gray-100">
                <Image
                  src={selectedGroup.image}
                  alt={selectedGroup.title}
                  className="h-full w-full object-cover"
                />
                <button
                  className="absolute left-4 top-4 rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70"
                  onClick={handleBack}
                >
                  <ChevronDown className="h-5 w-5 rotate-90 transform" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedGroup.title}</h2>
                    <p className="text-gray-600">
                      {selectedGroup.members} membres ·{' '}
                      {selectedGroup.status === 'active' ? 'Groupe actif' : 'Groupe inactif'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-full bg-gray-100 p-2 hover:bg-gray-200">
                      <Settings className="h-5 w-5" />
                    </button>
                    <button className="rounded-lg bg-purple-100 px-3 py-1 font-medium text-purple-600 hover:bg-purple-200">
                      Inviter
                    </button>
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="mb-4 text-lg font-semibold">Membres</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {friends.slice(0, 4).map((friend) => (
                      <div
                        key={friend.id}
                        className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-50"
                      >
                        <div className="relative">
                          <Image
                            src={friend.avatar}
                            alt={friend.name}
                            className="h-10 w-10 rounded-full"
                          />
                          <span
                            className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-white ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}
                          ></span>
                        </div>
                        <div>
                          <p className="font-medium">{friend.name}</p>
                          <p className="text-xs text-gray-500">
                            {friend.status === 'online' ? 'En ligne' : 'Hors ligne'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-3 font-medium text-purple-600">
                    Voir tous les membres
                  </button>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="mb-4 text-lg font-semibold">Publications récentes</h3>
                  <div className="rounded-lg bg-gray-50 p-4 text-center text-gray-500">
                    Aucune publication récente
                  </div>
                  <div className="mt-4">
                    <div className="rounded-lg border border-gray-200 p-3">
                      <div className="flex items-center gap-3">
                        <Image
                          src="https://i.pravatar.cc/150?img=10"
                          alt="Your profile"
                          className="h-8 w-8 rounded-full"
                        />
                        <input
                          type="text"
                          placeholder="Écrivez quelque chose..."
                          className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vue des amis */}
          {view === 'friends' && (
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Mes Amis</h2>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher un ami..."
                      className="rounded-lg border border-gray-300 py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    className="rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={friendsFilter}
                    onChange={(e) => setFriendsFilter(e.target.value)}
                  >
                    <option value="all">Tous</option>
                    <option value="friend">Amis</option>
                    <option value="pending">Invitations envoyées</option>
                    <option value="request">Demandes reçues</option>
                    <option value="suggested">Suggestions</option>
                  </select>
                </div>
              </div>

              {/* Liste des amis */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredFriends.length === 0 ? (
                  <p className="col-span-3 py-4 text-center text-gray-500">
                    Aucun ami ne correspond à votre recherche
                  </p>
                ) : (
                  filteredFriends.map((friend) => (
                    <motion.div
                      key={friend.id}
                      className="rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <div className="relative">
                          <Image
                            src={friend.avatar}
                            alt={friend.name}
                            className="h-12 w-12 rounded-full"
                          />
                          <span
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-300'}`}
                          ></span>
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium">{friend.name}</h3>
                          <p className="text-xs text-gray-500">
                            {friend.relation === 'friend' &&
                              `${friend.mutualFriends} amis en commun`}
                            {friend.relation === 'pending' && 'Invitation envoyée'}
                            {friend.relation === 'request' && 'Vous a envoyé une demande'}
                            {friend.relation === 'suggested' && 'Suggestion'}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        {friend.relation === 'friend' && (
                          <>
                            <button className="flex-1 rounded bg-gray-100 py-1.5 text-sm font-medium hover:bg-gray-200">
                              Message
                            </button>
                            <button className="flex-1 rounded bg-red-50 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100">
                              Retirer
                            </button>
                          </>
                        )}
                        {friend.relation === 'pending' && (
                          <button
                            className="flex flex-1 items-center justify-center rounded bg-gray-100 py-1.5 text-sm font-medium hover:bg-gray-200"
                            onClick={() => handleFriendAction(friend.id, 'cancel')}
                          >
                            <X className="mr-1 h-4 w-4" />
                            Annuler
                          </button>
                        )}
                        {friend.relation === 'request' && (
                          <>
                            <button
                              className="flex flex-1 items-center justify-center rounded bg-purple-100 py-1.5 text-sm font-medium text-purple-600 hover:bg-purple-200"
                              onClick={() => handleFriendAction(friend.id, 'accept')}
                            >
                              <Check className="mr-1 h-4 w-4" />
                              Accepter
                            </button>
                            <button
                              className="flex flex-1 items-center justify-center rounded bg-gray-100 py-1.5 text-sm font-medium hover:bg-gray-200"
                              onClick={() => handleFriendAction(friend.id, 'decline')}
                            >
                              <X className="mr-1 h-4 w-4" />
                              Refuser
                            </button>
                          </>
                        )}
                        {friend.relation === 'suggested' && (
                          <button
                            className="flex flex-1 items-center justify-center rounded bg-purple-100 py-1.5 text-sm font-medium text-purple-600 hover:bg-purple-200"
                            onClick={() => handleFriendAction(friend.id, 'add')}
                          >
                            <UserPlus className="mr-1 h-4 w-4" />
                            Ajouter
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Vue de création de groupe */}
          {view === 'createGroup' && (
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Créer un nouveau groupe</h2>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Nom du groupe
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Ex: Club de lecture"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Description du groupe
                  </label>
                  <textarea
                    className="h-24 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="À propos de votre groupe..."
                  ></textarea>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Image de couverture
                  </label>
                  <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
                    <div className="flex flex-col items-center">
                      <PlusCircle className="mb-2 h-10 w-10 text-gray-400" />
                      <p className="text-sm text-gray-500">Cliquez pour ajouter une image</p>
                      <p className="mt-1 text-xs text-gray-400">JPG, PNG (max. 5 MB)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Confidentialité
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="privacy-public"
                        name="privacy"
                        className="mr-2"
                        defaultChecked
                      />
                      <label htmlFor="privacy-public">
                        <div className="font-medium">Public</div>
                        <div className="text-xs text-gray-500">
                          Tout le monde peut voir et rejoindre ce groupe
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="privacy-private" name="privacy" className="mr-2" />
                      <label htmlFor="privacy-private">
                        <div className="font-medium">Privé</div>
                        <div className="text-xs text-gray-500">
                          Seuls les membres invités peuvent voir ce groupe
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="rounded-lg bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700">
                    Créer le groupe
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
