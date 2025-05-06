import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/about' },
    { name: 'Clases', href: '/classes' },
    { name: 'Instructores', href: '/instructors' },
    { name: 'Horario', href: '/schedule' },
    { name: 'Galería', href: '/gallery' },
    { name: 'Contacto', href: '/contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || location.pathname !== '/'
          ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-28 lg:h-32">
          <Link to="/" className="flex items-center space-x-2 h-full">
            <img src="/src/uploads/logo-blanco.png" alt="ADECAM Logo" className={`object-contain transition-all duration-300 mx-auto ${isScrolled || isMenuOpen || location.pathname !== '/' ? 'h-16 md:h-20 lg:h-24' : 'h-24 md:h-32 lg:h-40 mt-6'} ${!(isScrolled || isMenuOpen || location.pathname !== '/') ? 'mt-6' : ''}`} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-white hover:text-gold transition-colors duration-300 text-sm font-medium relative group ${
                  location.pathname === link.href ? 'text-gold-dark' : ''
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform transition-transform duration-300 ${
                  location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold p-2 rounded-lg hover:bg-gold/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-sm shadow-lg py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-6 py-3 text-gold hover:bg-gold/20 hover:text-black transition-colors duration-300 ${
                  location.pathname === link.href ? 'bg-gold/20 text-black' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;