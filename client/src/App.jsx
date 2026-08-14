import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FoundationDashboard from './features/foundation/FoundationDashboard';
import AngazaAwardsDashboard from './features/awards/AngazaAwardsDashboard';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#0B0B0C]">
      <Routes>
        {/* Angaza Hope Foundation — parent site, lives at the root */}
        <Route path="/" element={<FoundationDashboard />} />

        {/* Angaza Awards — child program, nested under the same site */}
        <Route path="/awards" element={<AngazaAwardsDashboard />} />

        {/* Fallback: unknown routes go back to the Foundation home */}
        <Route path="*" element={<FoundationDashboard />} />
      </Routes>
    </div>
  );
}
