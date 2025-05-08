import React from 'react';

const Classes: React.FC = () => {
  const classes = [
    {
      id: 1,
      title: 'Kick Boxing',
      description: 'Arte marcial de contacto que combina técnicas de boxeo con potentes patadas. Mejora tu condición física, aprende defensa personal efectiva y desarrolla confianza en ti mismo.',
      level: 'Todos los niveles',
      image: 'https://images.pexels.com/photos/4761792/pexels-photo-4761792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      benefits: [
        'Excelente acondicionamiento físico',
        'Técnicas efectivas de golpeo',
        'Liberación de estrés',
        'Aumento de reflejos y coordinación'
      ]
    },
    {
      id: 2,
      title: 'Jiujitsu Brasileño',
      description: 'Arte marcial y deporte de combate centrado en la lucha cuerpo a cuerpo y el control en el suelo. Aprende técnicas de sumisión y defensa personal efectiva.',
      level: 'Todos los niveles',
      image: 'src/uploads/jiujitsu.jpg',
      benefits: [
        'Defensa personal efectiva',
        'Desarrollo de fuerza funcional',
        'Mejora de la flexibilidad',
        'Aumento de la resistencia'
      ]
    }
  ];

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Clases</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ofrecemos una variedad de disciplinas para todos los niveles y edades. Cada clase está diseñada para desarrollar habilidades técnicas y mejorar tu condición física.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <div className="relative h-64">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-2xl font-bold text-white p-6">{cls.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-gold text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {cls.level}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{cls.description}</p>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Beneficios:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {cls.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="h-2 w-2 bg-gold rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/schedule" 
            className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Horarios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;