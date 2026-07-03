import { Link } from 'react-router-dom';
import { Trophy, Users, Star } from 'lucide-react';

const features = [
  { icon: Trophy, title: 'Awards', description: 'Nominate and vote for excellence in various categories' },
  { icon: Users, title: 'Community', description: 'Join a vibrant community celebrating outstanding achievements' },
  { icon: Star, title: 'Recognition', description: 'Get recognized for your contributions and talents' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="flex w-full flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <Trophy className="mb-6 h-16 w-16 text-primary-600" />
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Welcome to{' '}
          <span className="text-primary-600">Angaza Awards</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Celebrating excellence and innovation. Nominate, vote, and recognize the best in our community.
        </p>
        <div className="mt-8 flex gap-4">
          <Link to="/login" className="btn-primary text-base">Get Started</Link>
          <Link to="/login" className="btn-outline text-base">Learn More</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card text-center">
              <feature.icon className="mx-auto mb-4 h-10 w-10 text-primary-600" />
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
