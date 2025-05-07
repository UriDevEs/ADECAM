import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo sin efecto preloader */}
      <div 
        className="absolute inset-0 bg-black bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: 'url("/src/uploads/close-up-boxer-bandaging-hands.jpg")',
          transition: 'background-image 0.3s ease-in-out',
        }}
      >
        <picture>
          <source srcSet="/src/uploads/close-up-boxer-bandaging-hands.webp" type="image/webp" />
          <img
            src="/src/uploads/close-up-boxer-bandaging-hands.jpg"
            alt="Boxeador vendándose las manos"
            className="w-full h-full object-cover absolute inset-0 z-10"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>
      
      <video className="absolute inset-0 w-full h-full object-cover z-0" src="/src/uploads/videohero.mp4" autoPlay loop muted></video>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight lg:mt-8">
            <span className="text-gold">ADECAM</span> TRIGUEROS
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white mb-8">
            Kick Boxing y Jiujitsu Brasileño en Trigueros
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            "Descubre la combinación perfecta de fuerza, técnica y estrategia entrenando Kick Boxing y Jiujitsu Brasileño en un ambiente donde cada golpe y cada llave te acercan a tu mejor versión. Vive la experiencia completa de las artes marciales en ADECAM TRIGUEROS."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <a 
              href="/contact" 
              className="btn-corporativo bg-gold text-black hover:bg-gold-dark hover:text-white border-2 border-gold hover:border-gold-dark transition-all duration-300 font-bold"
            >
              ¡reserva tu primera clase!
            </a>
            <a 
              href="/schedule" 
              className="btn-corporativo bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:border-white"
            >
              Horario
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;