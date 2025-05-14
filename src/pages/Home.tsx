import React from 'react';
import Hero from '../components/Hero';
import SummarySection from '../components/SummarySection';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <SummarySection />
    </main>
  );
};

export default Home;