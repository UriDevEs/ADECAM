import React, { useState, useEffect } from "react";

const COOKIE_KEY = "cookie_consent_accepted";

const CookieConsentPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-95 text-white z-50 flex flex-col md:flex-row items-center justify-between px-6 py-4 shadow-lg animate-fadeIn">
      <div className="mb-2 md:mb-0 md:mr-4 text-sm">
        Utilizamos cookies propias y de terceros para mejorar su experiencia y analizar el uso del sitio. Al continuar navegando acepta nuestra <a href="/cookies" className="underline text-gold hover:text-gold-dark">Política de Cookies</a>, <a href="/privacidad" className="underline text-gold hover:text-gold-dark">Política de Privacidad</a> y <a href="/aviso-legal" className="underline text-gold hover:text-gold-dark">Aviso Legal</a>.
      </div>
      <button
        onClick={handleAccept}
        className="bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200"
        aria-label="Aceptar cookies"
      >
        Aceptar
      </button>
    </div>
  );
};

export default CookieConsentPopup;