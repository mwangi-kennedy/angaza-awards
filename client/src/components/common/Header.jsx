import { Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { useAuth } from '../../hooks/useAuth';
import { Trophy, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { isAuthenticated, user } = useAuthStore();
  const { logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary-600">
          <Trophy className="h-6 w-6" />
          Angaza Awards
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-gray-600 hover:text-gray-900">Dashboard</Link>
              <span className="text-sm text-gray-500">{user?.name}</span>
              <button onClick={logout} className="btn-outline">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-primary">Sign In</Link>
          )}
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-sm font-medium">Home</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-sm font-medium">Dashboard</Link>
                <button onClick={() => { logout(); setMenuOpen(false); }} className="btn-outline w-full">Logout</button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="btn-primary text-center">Sign In</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
