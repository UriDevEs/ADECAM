import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ADECAM TRIGUEROS</h3>
            <p className="text-gray-400 mb-4">
            ASOCIACION CULTURAL DE DEPORTES DE CONTACTO Y ARTES MARCIALES TRIGUEROS.
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <img src="/src/uploads/fakm-logo.png" alt="FAKM Logo" className="h-16 md:h-20 lg:h-24 object-contain" />
              <img src="/src/uploads/logo-blanco.png" alt="Logo Blanco" className="h-16 md:h-20 lg:h-24 object-contain" />
              <img src="/src/uploads/logo-five.png" alt="Logo Five" className="h-16 md:h-20 lg:h-24 object-contain" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Información Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-gold underline transition-colors duration-300">Política de Cookies</Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-400 hover:text-gold underline transition-colors duration-300">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/aviso-legal" className="text-gray-400 hover:text-gold underline transition-colors duration-300">Aviso Legal</Link>
              </li>
              <li>
                <Link to="/condiciones" className="text-gray-400 hover:text-gold underline transition-colors duration-300">Condiciones de Uso</Link>
              </li>
            </ul>
          </div>
          
          {/* Classes */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nuestras Clases</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#classes" className="text-gray-400 hover:text-white transition-colors duration-300">Jiujitsu Brasileño</Link>
              </li>
              <li>
                <Link to="#classes" className="text-gray-400 hover:text-white transition-colors duration-300">Kick Boxing</Link>
              </li>
              <li>
                <Link to="#classes" className="text-gray-400 hover:text-white transition-colors duration-300">Jiujitsu Infantil</Link>
              </li>
              <li>
                <Link to="#classes" className="text-gray-400 hover:text-white transition-colors duration-300">Preparación Física</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Calle Carpinteros 29</p>
              <p className="mb-2">21620 Trigueros, Huelva</p>
              <p className="mb-2">Teléfono: +34 635 58 53 28</p>
              <p className="mb-2">Email: info@adecamtrigueros.es</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} ADECAM TRIGUEROS. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-2 text-xs">
            <Link to="/cookies" className="text-gray-400 hover:text-gold underline transition-colors duration-300 mr-2">Política de Cookies</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/privacidad" className="text-gray-400 hover:text-gold underline transition-colors duration-300 ml-2">Política de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;