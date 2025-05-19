import AdminDashboard from '@/components/login/AdminDashboard';
import LoginForm from '@/components/login/LoginForm';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function AdminPage() {
  const supabse = createClient(await cookies());
  const userResponse = await supabse.auth.getUser();

  console.log('HW Supabase : ', supabse);
  console.log('HW User : ', userResponse);
  return (
    <div className="container flex flex-col pb-20 pt-12">
      {!!userResponse.data.user ? (
        <AdminDashboard user={userResponse.data.user} />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
