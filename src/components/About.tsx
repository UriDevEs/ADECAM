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
              La <span className="font-semibold">ASOCIACIÓN CULTURAL DE DEPORTES DE CONTACTO Y ARTES MARCIALES TRIGUEROS</span> es un referente en la promoción y enseñanza de deportes de contacto en Trigueros. Nuestra asociación, de carácter deportivo y cultural, está especializada en <span className="font-semibold">Kick Boxing</span> y <span className="font-semibold">Jiujitsu Brasileño</span>, ofreciendo un entorno inclusivo donde el respeto, la superación y el compañerismo son valores fundamentales.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Impulsamos el desarrollo personal y deportivo de nuestros socios a través de una metodología adaptada a todas las edades y niveles, fomentando la disciplina, la confianza y el bienestar físico y mental.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Organizamos actividades, seminarios y eventos que enriquecen la vida cultural y deportiva de la localidad, contribuyendo a la difusión de las artes marciales y los deportes de contacto.
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
              src="/src/uploads/foto1.jpg" 
              alt="Kick boxing en ADECAM TRIGUEROS" 
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