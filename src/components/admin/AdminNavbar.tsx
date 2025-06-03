import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const adminLinks = [
  { name: "Dashboard", href: "/admin" },
  { name: "Socios", href: "/admin/socios" },
  { name: "Registros", href: "/admin/registros" }
];

const AdminNavbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-28 lg:h-32">
          <Link to="/" className="flex items-center space-x-2 h-full">
            <img src="/src/uploads/logo-blanco.png" alt="ADECAM Logo" className="object-contain h-16 md:h-20 lg:h-24 transition-all duration-300 mx-auto" />
          </Link>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <div className={`flex-col md:flex-row flex items-center md:space-x-8 space-y-4 md:space-y-0 absolute md:static top-20 left-0 w-full md:w-auto bg-black/95 md:bg-transparent transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
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
            <button
              onClick={() => {
                import("firebase/auth").then(({ getAuth, signOut }) => {
                  const auth = getAuth();
                  signOut(auth).then(() => {
                    window.location.href = "/";
                  });
                });
              }}
              className="ml-0 md:ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-300 w-full md:w-auto"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;