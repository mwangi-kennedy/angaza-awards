import { useEffect, useState } from 'react';
import { users } from '../services/api';
import useAuthStore from '../store/authStore';
import { Navigate } from 'react-router-dom';
import { User } from 'lucide-react';

export default function Dashboard() {
  const { isAuthenticated, user, token } = useAuthStore();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await users.getProfile();
        setProfile(data.data.user);
      } finally {
        setLoading(false);
      }
    };
    if (isAuthenticated) fetchProfile();
  }, [isAuthenticated]);

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Dashboard</h1>

      <div className="card">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600">
            <User className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{profile?.name || user?.name}</h2>
            <p className="text-sm text-gray-500">{profile?.email || user?.email}</p>
            <span className="mt-1 inline-block rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">
              {profile?.role || user?.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
