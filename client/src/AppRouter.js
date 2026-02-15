import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './LandingPage';
import ProblemStatement from './pages/ProblemStatement';
import Solution from './pages/Solution';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import MapApp from './App';

function AppRouter() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/problem" element={<ProblemStatement />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/app" element={<MapApp />} />
      </Routes>
    </>
  );
}

export default AppRouter;
