import { AuthForm } from '@/components/auth/auth-form';

export default function AuthPage() {
  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-8 text-center text-2xl font-bold">Authentification</h1>
      <AuthForm />
    </div>
  );
}
