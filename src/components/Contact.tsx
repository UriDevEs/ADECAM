import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-black max-w-3xl mx-auto">
            ¿Tienes alguna pregunta? ¿Quieres probar una clase? Contáctanos o visítanos en nuestras instalaciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gold">
            <h3 className="text-2xl font-bold text-gold mb-6">Información de Contacto</h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gold/20 text-gold">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-black">Ubicación</h4>
                  <p className="text-black">Calle Carpinteros 29</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-black">Teléfono</h4>
                  <p className="text-black flex items-center space-x-2">
                    <span>+34 635 58 53 28</span>
                    <a href="https://wa.me/34635585328" target="_blank" rel="noopener noreferrer" aria-label="Enviar WhatsApp" className="ml-2 inline-flex items-center px-3 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-sm font-semibold">
                      WhatsApp
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-black">Email</h4>
                  <p className="text-black">info@adecamtrigueros.es</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gold/20 text-gold">
                  <Clock size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-black">Horario de Atención</h4>
                  <p className="text-black">Lunes a Viernes: 16:30 - 22:00</p>
                  <p className="text-black">Sábado: 9:30 - 13:30</p>
                  <p className="text-black">Domingo: Cerrado</p>
                </div>
              </div>
            </div>
            {/* Social media */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-black mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-gold text-black hover:bg-black hover:text-gold transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-gold text-black hover:bg-black hover:text-gold transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-gold text-black hover:bg-black hover:text-gold transition-colors duration-300"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gold">
            <h3 className="text-2xl font-bold text-gold mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border border-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-black"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-black"
                    placeholder="Tu email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                  Asunto
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 border border-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-black"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Mensaje
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full p-3 border border-gold rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-black"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-black text-black hover:text-gold font-bold py-3 px-6 rounded-md transition-all duration-300 border border-gold hover:border-black"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gold">
            <iframe 
              src="https://www.google.com/maps?q=Calle+Carpinteros+29,+21620+Trigueros,+Huelva,+España&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de ADECAM TRIGUEROS"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;