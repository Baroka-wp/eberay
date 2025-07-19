// File: components/auth/auth-form.tsx
// Purpose: Formulaire d'authentification simple
// Dependencies: react-hook-form, zod, @hookform/resolvers
// Sections:
// 1. Validation avec zod
// 2. Gestion du formulaire
// 3. Logique d'authentification locale

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const authSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

type AuthFormData = z.infer<typeof authSchema>;

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Simulation d'une authentification - remplacez par votre logique d'API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simule un délai d'API

      if (isLogin) {
        // Simulation de connexion - remplacez par votre logique
        const mockUser = {
          id: '1',
          email: data.email,
          name: 'Utilisateur Test'
        };
        login(mockUser);
        router.push('/dashboard');
      } else {
        // Simulation d'inscription - remplacez par votre logique
        setErrorMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        setIsLogin(true);
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {errorMessage && (
        <p className={`text-sm ${errorMessage.includes('réussie') ? 'text-green-500' : 'text-red-500'}`}>
          {errorMessage}
        </p>
      )}

      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <Input
          type="password"
          placeholder="Mot de passe"
          {...register('password')}
          className={errors.password ? 'border-red-500' : ''}
        />
        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Chargement...' : isLogin ? 'Se connecter' : "S'inscrire"}
      </Button>

      <Button type="button" variant="ghost" className="w-full" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "S'inscrire" : 'Se connecter'}
      </Button>
    </form>
  );
}
