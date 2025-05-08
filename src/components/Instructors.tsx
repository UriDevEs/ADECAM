import React from 'react';

const Instructors: React.FC = () => {
  const instructors = [
    {
      id: 1,
      name: 'Rafael García Quiles',
      role: 'Instructor de Kick Boxing',
      bio: 'Instructor con una sólida trayectoria en artes marciales. Especialista en Kick Boxing y Full Contact con más de 15 años de experiencia. Reconocido por:',
      image: 'src/uploads/rafa.jpeg',
      achievements: [
        '4 veces campeón de Córdoba consecutivos',
        '2 campeonatos de Andalucía',
        'Campeón de España',
        'Subcampeón de España',
        'Cinturón negro segundo dan de Full Contact',
        'Cinturón negro primer dan de Kick Boxing',
        'Conocimientos en defensa personal',
        'Conocimientos en MMA y Muay Thai',
        'Conocimientos en GRAPPLING',
        'Datos de Rafael García Quiles:',
        'Alumno de: José Luis Campos (5º dan taekwondo y full contact)',
        'Alumno de: Ángel Casado (actual seleccionador nacional de la federación española de kick boxing)',
        'Alumno de: Rafael Lozano (Balita Lozano) medallista olímpico boxeo'
      ]
    },
    {
      id: 2,
      name: 'Jesús Pérez Pérez',
      role: 'Instructor Principal de Jiujitsu y Presidente Five Elements Jiu-Jitsu Huelva',
      bio: 'Maestro certificado con más de 20 años en artes marciales. Cinturón negro en múltiples disciplinas y fundador de Five Elements Jiu-Jitsu. Destaca por:',
      image: 'src/uploads/jesus.jpg',
      achievements: [
        'Cinturón negro 3° Grado de Brazilian Jiu-Jitsu por la Federación Internacional de Jiu-Jitsu Brasileño (IBJJF)',
        'Cinturón negro 3º Dan de Judo por la Real Federación Española de Judo y Deportes Asociados',
        'Cinturón negro 1º Dan de Kick Boxing por la Federación Española de Kickboxing',
        'Cinturón negro 1º Dan de Lucha Sambo por la Federación Española de Luchas Olímpicas y Deportes Asociados',
        'Cinturón negro 1º Dan de Taekwondo por la Federación Española de Taekwondo',
        'Entrenador autonómico de Judo por la Federación Española de Judo y Deportes Asociados y el Consejo Superior de Deportes (CSD)',
        'Entrenador nacional Nivel 1 de Boxeo por la Federación Española de Boxeo y Consejo Superior de Deportes (CSD)',
        'Entrenador nacional Nivel 1 de Lucha Olímpica por la Federación Española de Luchas Olímpicas y Deportes Asociados y Consejo Superior de Deportes (CSD)',
        'Entrenador nacional Nivel 1 de Lucha Grappling y Grappling Gi por la Federación Española de Luchas Olímpicas y Deportes Asociados y Consejo Superior de Deportes (CSD)',
        'Fundador junto a Helio Perdigao, ambos alumnos directos y cinturones negros del maestro Royce Gracie, hijo del fundador del Brazilian Jiu-Jitsu Helio Gracie.'
      ]
    },
    {
      id: 3,
      name: 'Raúl Herrera Hidalgo',
      role: 'Instructor de Kick Boxing',
      bio: 'Instructor especializado en defensa personal y técnicas de combate. Campeón provincial y formador de fuerzas de seguridad. Certificaciones en:',
      image: 'src/uploads/raul.png',
      achievements: [
        'Cinturón negro 1º Dan Tai jitsu',
        'Cinturón negro 1º Dan Kick Boxing',
        'Experto en técnicas de defensa personal',
        'Campeón provincial de Kick Boxing',
        'Experiencia en seminarios de defensa para fuerzas del estado'
      ]
    },
  ];

  return (
    <section id="instructors" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Instructores</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Contamos con un equipo de profesionales experimentados y apasionados, comprometidos con el desarrollo técnico y personal de cada alumno.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-80 overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  style={instructor.name === 'Rafael García Quiles' || instructor.name === 'Jesús Pérez Pérez' ? { objectPosition: 'top' } : {}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-gold font-semibold mb-4">{instructor.role}</p>
                <p className="text-gray-700 mb-4">{instructor.bio}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Currículum deportivo:</h4>
                  <ul className="space-y-1">
                    {instructor.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="h-2 w-2 bg-gold rounded-full mr-2 mt-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;