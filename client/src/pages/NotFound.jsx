import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-primary-600">404</h1>
      <p className="mt-4 text-lg text-gray-600">Page not found</p>
      <Link to="/" className="btn-primary mt-6">
        <Home className="h-4 w-4" />
        Go Home
      </Link>
    </div>
  );
}
