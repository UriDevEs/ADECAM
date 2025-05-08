import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gold mb-4">Academia de Jiujitsu Brasileño y Kick Boxing en Trigueros, Huelva</h1>
      <p className="mb-6 text-lg text-gray-700">Clases de artes marciales para todas las edades y niveles. Mejora tu forma física, aprende defensa personal y forma parte de la comunidad ADECAM en Trigueros.</p>
      <Hero />
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gold mb-2">¿Por qué elegir ADECAM Trigueros?</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Entrenadores certificados en Jiujitsu Brasileño y Kick Boxing</li>
          <li>Ubicación en Trigueros, Huelva, con fácil acceso</li>
          <li>Ambiente familiar y motivador</li>
          <li>Horarios flexibles y clases para niños, jóvenes y adultos</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;