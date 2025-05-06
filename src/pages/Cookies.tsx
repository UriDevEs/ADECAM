import React from "react";

const Cookies: React.FC = () => (
  <section className="py-20 bg-white min-h-screen pt-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-gold mb-6">Política de Cookies</h1>
      <p className="mb-4">Esta web utiliza cookies propias y de terceros para mejorar la experiencia de usuario y analizar el tráfico. Al navegar por nuestro sitio, aceptas el uso de cookies bajo los términos de esta política.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">¿Qué son las cookies?</h2>
      <p className="mb-4">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas una página web. Sirven para recordar tus preferencias y facilitar la navegación.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">¿Qué tipos de cookies utilizamos?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Cookies técnicas: necesarias para el funcionamiento de la web.</li>
        <li>Cookies de análisis: nos ayudan a entender cómo interactúan los usuarios con la web.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">¿Cómo puedes gestionar las cookies?</h2>
      <p className="mb-4">Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas. Consulta la ayuda de tu navegador para más información.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Contacto</h2>
      <p>Si tienes dudas sobre nuestra política de cookies, puedes escribirnos a info@adecamtrigueros.es.</p>
    </div>
  </section>
);

export default Cookies;