import { useState } from 'react';
import { auth as authApi } from '../services/api';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const { setAuth, logout: storeLogout } = useAuthStore();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const { data } = await authApi.login({ email, password });
      setAuth(data.data.user, data.data.token);
      toast.success(data.message);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    try {
      const { data } = await authApi.register({ name, email, password });
      setAuth(data.data.user, data.data.token);
      toast.success(data.message);
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      storeLogout();
      navigate('/');
    }
  };

  return { login, register, logout, loading };
}
