import React, { useState } from 'react';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('lunes');
  
  const weekdays = [
    { id: 'lunes', label: 'Lunes' },
    { id: 'martes', label: 'Martes' },
    { id: 'miercoles', label: 'Miércoles' },
    { id: 'jueves', label: 'Jueves' },
    { id: 'viernes', label: 'Viernes' },
    { id: 'sabado', label: 'Sábado' }
  ];
  const scheduleData = {
    lunes: [
      { time: '18:30 - 19:30', class: 'Iniciación al Kick Boxing', instructor: 'Raúl y Víctor', color: 'bg-gold' },
      { time: '19:30 - 21:00', class: 'Kick Boxing', instructor: 'Raúl', color: 'bg-gold' },
      { time: '21:00 - 22:00', class: 'Iniciacion Kick Boxing Adultos', instructor: 'Raúl/Rafa', color: 'bg-gold' }
    ],
    martes: [
      { time: '18:30 - 19:30', class: 'Iniciación al Kick Boxing', instructor: 'Rafa', color: 'bg-gold' },
      { time: '19:30 - 20:30', class: 'Kick Boxing', instructor: 'Rafa', color: 'bg-gold' },
      { time: '20:30 - 22:00', class: 'Jiu Jitsu Five Elements', instructor: '', color: 'bg-black' }
    ],
    miercoles: [
      { time: '19:30 - 21:00', class: 'Kick Boxing', instructor: 'Raúl', color: 'bg-gold' },
      { time: '21:00 - 22:00', class: 'Iniciacion Kick Boxing Adultos', instructor: 'Raúl/Rafa', color: 'bg-gold' }
    ],
    jueves: [
      { time: '18:30 - 19:30', class: 'Iniciación al Kick Boxing', instructor: 'Raúl y Víctor', color: 'bg-gold' },
      { time: '19:30 - 20:30', class: 'Kick Boxing', instructor: 'Raúl', color: 'bg-gold' },
      { time: '20:30 - 22:00', class: 'Jiu Jitsu Five Elements', instructor: '', color: 'bg-black' }
    ],
    viernes: [
      { time: '18:30 - 19:30', class: 'Iniciación al Kick Boxing', instructor: 'Rafa', color: 'bg-gold' },
      { time: '19:00 - 20:30', class: 'Kick Boxing', instructor: 'Rafa', color: 'bg-gold' }
    ],
    sabado: []
  };

  return (
    <section id="schedule" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Horarios de Clases</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Encuentra el horario perfecto para tu entrenamiento.
          </p>
        </div>
        
        <div className="bg-black rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Day selector */}
          <div className="flex flex-wrap">
            {weekdays.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`py-4 px-6 text-sm font-medium transition-all duration-300 ${
                  activeDay === day.id
                    ? 'bg-gold text-white shadow-lg'
                    : 'text-gold hover:bg-gold/20'
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
          
          {/* Schedule grid */}
          <div className="p-6">
            <div className="grid gap-4">
              {scheduleData[activeDay as keyof typeof scheduleData].map((session, index) => {
                // Determinar color personalizado para cada clase
                const isIniciacion = session.class.toLowerCase().includes('iniciación');
                const isJiujitsu = session.class.toLowerCase().includes('jiu jitsu');
                const isIniciacionAdultos = session.class.toLowerCase() === 'iniciacion kick boxing adultos';
                let color = session.color;
                if (isIniciacionAdultos) {
                  color = 'bg-blue-600';
                } else if (isJiujitsu) {
                  color = 'bg-red-600';
                } else if (isIniciacion) {
                  color = 'bg-green-600';
                }
                return (
                  <div 
                    key={index}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div className={`${color} h-2`}></div>
                    <div className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{session.class}</h3>
                          <p className="text-gray-400">{session.time}</p>
                          {/* Mostrar instructor solo si no es Jiujitsu */}
                          {session.instructor && !isJiujitsu && (
                            <span className="block text-gold font-semibold mt-1">{session.instructor}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-2">
            * Los horarios pueden estar sujetos a cambios en días festivos.
          </p>
          <p className="text-gray-400 mb-6">
            También puedes reservar clases libres de rutina de 18:30 a 21:00 y clases privadas para avanzar en tu entrenamiento.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gold hover:bg-gold-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 mb-2"
          >
            Reserva tu clase de prueba
          </a>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ml-2"
          >
            Reservar clase libre o privada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;