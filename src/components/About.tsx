import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre ADECAM TRIGUEROS</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              En <span className="font-semibold">ADECAM TRIGUEROS</span>, somos más que una academia de artes marciales. Somos una familia dedicada a cultivar el crecimiento personal y deportivo a través de la disciplina y el respeto.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde nuestra fundación, nos hemos comprometido a ofrecer entrenamiento de alta calidad en Kick Boxing y Jiujitsu Brasileño, adaptado a todos los niveles y edades.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro objetivo es fomentar valores como la perseverancia, el autocontrol y la confianza, elementos fundamentales tanto dentro como fuera del tatami.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-gold mb-2">Experiencia</h3>
                <p className="text-gray-700">Instructores certificados con años de experiencia competitiva</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-gold mb-2">Comunidad</h3>
                <p className="text-gray-700">Ambiente acogedor y de apoyo para todos los practicantes</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-gold mb-2">Instalaciones</h3>
                <p className="text-gray-700">Modernas y completamente equipadas para un entrenamiento óptimo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-gold mb-2">Metodología</h3>
                <p className="text-gray-700">Enfoque técnico y progresivo adaptado a cada alumno</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/8611964/pexels-photo-8611964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Entrenamiento en ADECAM TRIGUEROS" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">+10</p>
              <p className="text-sm">Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;