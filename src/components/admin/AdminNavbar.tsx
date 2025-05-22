import React from "react";
import { Link, useLocation } from "react-router-dom";

const adminLinks = [
  { name: "Dashboard", href: "/admin" },
  { name: "Socios", href: "/admin/socios" },
  { name: "Registros", href: "/admin/registros" }
];

const AdminNavbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-28 lg:h-32">
          <Link to="/" className="flex items-center space-x-2 h-full">
            <img src="/src/uploads/logo-blanco.png" alt="ADECAM Logo" className="object-contain h-16 md:h-20 lg:h-24 transition-all duration-300 mx-auto" />
          </Link>
          <div className="flex items-center space-x-8">
            {adminLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-white hover:text-gold transition-colors duration-300 text-sm font-medium relative group ${location.pathname === link.href ? 'text-gold-dark' : ''}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold transform transition-transform duration-300 ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;