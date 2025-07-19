// File: components/settings/SettingsForm.tsx
// Purpose: Formulaire de paramètres utilisateur
// Dependencies: react, @/components/ui/button
// Sections:
// 1. État du formulaire
// 2. Gestion du changement de mot de passe
// 3. Interface utilisateur

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const SettingsForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setError('Le nouveau mot de passe doit contenir au moins 6 caractères.');
      setIsLoading(false);
      return;
    }

    try {
      // Simulation d'un changement de mot de passe - remplacez par votre logique d'API
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess('Mot de passe mis à jour avec succès !');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      setError('Une erreur est survenue lors de la mise à jour du mot de passe.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">Changer le mot de passe</h2>

      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="currentPassword">
            Mot de passe actuel
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-2 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="newPassword">
            Nouveau mot de passe
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-2 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            required
            minLength={6}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="confirmPassword">
            Confirmez le nouveau mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-2 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            required
            minLength={6}
          />
        </div>

        {error && <p className="mb-4 text-red-500">{error}</p>}
        {success && <p className="mb-4 text-green-500">{success}</p>}

        <div className="flex justify-end gap-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Changement en cours...' : 'Changer le mot de passe'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingsForm;
