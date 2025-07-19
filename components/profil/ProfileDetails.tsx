// File: components/profil/ProfileDetails.tsx
// Purpose: Affichage et modification des détails du profil utilisateur
// Dependencies: react, @/components/ui
// Sections:
// 1. État du composant
// 2. Gestion des modifications
// 3. Interface utilisateur

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ProfileDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  // Pour le front uniquement - initialiser avec des valeurs par défaut
  useEffect(() => {
    setUser({ name: 'John Doe', email: 'john.doe@example.com' });
    setFormData({ name: 'John Doe', email: 'john.doe@example.com' });
  }, []);

  const handleSave = () => {
    // Pour le front uniquement - simuler la mise à jour
    setUser({ ...user, name: formData.name });
    setIsEditing(false);
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Profil Utilisateur</CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={formData.email} disabled />
              <p className="mt-1 text-sm text-gray-500">L&apos;email ne peut pas être modifié</p>
            </div>

            <div className="mt-4 flex space-x-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Annuler
              </Button>
              <Button onClick={handleSave}>Enregistrer</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="font-medium">Nom</div>
              <div>{user.name}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 border-t py-2">
              <div className="font-medium">Email</div>
              <div>{user.email}</div>
            </div>
            <Button onClick={() => setIsEditing(true)} className="mt-4">
              Modifier
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
