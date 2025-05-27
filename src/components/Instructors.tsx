import React from 'react';

const Instructors: React.FC = () => {
  const instructors = [
    {
      id: 1,
      name: 'Rafael García Quiles',
      role: 'Instructor de Kick Boxing',
      bio: 'Instructor con una sólida trayectoria en artes marciales y más de 30 años de experiencia. Especialista en Kick Boxing y Full Contact. Reconocido por:',
      image: 'src/uploads/rafa.jpg',
      achievements: [
        '4 veces Campeón de Córdoba consecutivos en menos 67kg y menos 71 kg de Full Contact Años 2004, 2005, 2006 y 2007  por la AAMK ( Amater y Neo )',
        '2 veces Campeón de Andalucía Años 2006 y 2007 por la CEK  ( Amater y Neo )',
        'Campeón de España año 2006  en -67kg por la CEK ( Amater )',
        'Subcampeón de España año 2007 en -71 kg por la CEK ( Neo )',
        'Arbitro nacional por la ISKA y CEK',
        'Cinturón negro 2º dan de Full Contact por la CEK',
        'Cinturón negro 1º dan de Kick Boxing por la FAKM',
        'Conocimientos en Defensa Personal',
        'Conocimientos en MMA y Muay Thai',
        'Conocimientos en GRAPPLING',
        'Conocimientos en Brazilian Jiu Jitsu',
        'Profesores hasta 2025:',
        'Alumno de: José Luis Campos  5º Dan de Taekwondo y 5º Dan de Full contact',
        'Alumno de Angel casado:',
        'CN 8 GRADO KICKBOXING',
        'CN 5 GRADO TAEKWONDO',
        'CINTURON NEGRO DE HAPKIDO',
        'ENTRENADOR NACIONAL TAEKWONDO',
        'CAMPEON DE ESPAÑA, DE EUROPA PROFESIONAL Y DEL MUNDO DE KICKBOXING',
        'CAMPEON DE ESPAÑA, PREOLIMPICO, INTERNACIONAL Y SUBCAMPEON DEL MUNDO DE TAEKWONDO',
        'MEDALLA DE BRONCE Y DE PLATA AL MÉRITO DE LA FED ESPAÑOLA DE TAEKWONDO',
        'MEDALLA AL MERITO DE LA FED ANDALUZA DE KICKBOXING',
        'INSIGNIA OLPIMPICA COMITÉ OLIMPICO ESPAÑOL',
        'TROFEO A UNA VIDA DEDICADA AL DEPORTE “DIARIO CORDOBA”',
        'MEDALLA AL MERITO DEL CONCILIO DE MAESTROS',
        'EX-DIRECTOR DE FORMACION DE LA FEDERACION ESPAÑOLA DE KICKBOXING',
        'DIRECTOR COMITÉ NACIONAL DE GRADOS FEDERACION ESPAÑOLA DE KICKBOXING Y MUAYTHAI',
        'PRESIDENTE FEDERACION ANDALUZA DE KICKBOXING Y MUAY THAI 2005-2020'
      ]
    },
    {
      id: 2,
      name: 'Jesús Pérez Pérez',
      role: 'Instructor Principal de Jiujitsu y Presidente Five Elements Jiu-Jitsu Huelva',
      bio: 'Maestro certificado. Cinturón negro en múltiples disciplinas y fundador de Five Elements Jiu-Jitsu. Destaca por:',
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
      bio: 'Instructor especializado en la formación de fuerzas de seguridad y cuerpos policiales. Destaca por su amplia trayectoria como competidor, su dedicación a la enseñanza y su formación continua en disciplinas de combate y defensa personal.',
      image: 'src/uploads/raul.jpeg',
      achievements: [
        'Cinturón negro 1º DAN Nihon Tai Jitsu por la Federación Española de Judo y Deportes Asociados inscrita en el CSD, con más de diez años de experiencia',
        'Cinturón negro 1º DAN Kick Boxing por la FAKM',
        'Certificación en Curso de Defensa Personal y Técnicas de Detención.',
        'Conocimientos de Boxeo.',
        'Conocimientos y practicante de Muay Thai, con más de dos años de experiencia en esa modalidad, siendo alumno de Oscar Toro Gamero, luchador profesional en Muay Thai.',
        'Actualmente practicante de BJJ, Grappling y MMA con el maestro Jesús Pérez Pérez de la Academia Five Elements.',
        'Treinta años de experiencia en la práctica de Kick Boxing en la modalidad Low Kick, K1 y Full Contact, siendo alumno de grandes maestros de la provincia de Huelva.',
        'Campeón Huelva de Kick Boxing modalidad Low Kick -90kg.',
        'Subcampeón de Andalucía de Kick Boxing en modalidad Low Kick -90kg.',
        'Experiencia en la enseñanza de Defensa Personal para las FFCCSS y Seguridad Privada.',
        'Formación de seis meses en Defensa Personal policial y Técnicas de Detención en la Academia Nacional de Policía Nacional de Ávila.',
        'Instruido en el Gym Al-Ándalus, siendo alumno de Manuel Alvarado, Maestro Nacional especialista en Nihon Tai Jitsu 7° DAN por la Federación Española de Judo y Deportes Asociados, además de ser Cinturón Negro 4° DAN en Judo, Cinturón negro 5° DAN en Tai Jitsu y Cinturón negro 5° DAN Ju Jutsu.'
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
                  style={['Rafael García Quiles', 'Jesús Pérez Pérez', 'Raúl Herrera Hidalgo'].includes(instructor.name) ? { objectPosition: 'top' } : {}}
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