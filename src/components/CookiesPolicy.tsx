import React from "react";

const CookiesPolicy: React.FC = () => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>
    <p className="mb-4">Esta Política de Cookies explica qué son las cookies y cómo las utiliza la Asociación Deportiva en su sitio web, en cumplimiento con la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), y el Reglamento (UE) 2016/679 (RGPD).</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué son las cookies?</h2>
    <p className="mb-4">Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. Su finalidad es reconocerle como usuario, recordar sus preferencias y mejorar su experiencia de navegación.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué tipos de cookies utiliza este sitio?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento básico del sitio web y la prestación de los servicios ofrecidos.</li>
      <li><strong>Cookies de personalización:</strong> Permiten recordar sus preferencias (idioma, configuración, etc.).</li>
      <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo interactúan los usuarios con el sitio, recopilando información de forma anónima.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Cómo puede gestionar las cookies?</h2>
    <p className="mb-4">Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones de su navegador. Tenga en cuenta que la desactivación de cookies puede afectar al correcto funcionamiento del sitio web.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Cookies de terceros</h2>
    <p className="mb-4">Este sitio puede utilizar servicios de terceros que recopilan información con fines estadísticos y de uso del sitio web. En particular, utilizamos Google Analytics, un servicio analítico de Google, Inc.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Actualización de la política de cookies</h2>
    <p className="mb-4">La Asociación Deportiva puede modificar esta Política de Cookies en función de nuevas exigencias legislativas o para adaptarla a las instrucciones dictadas por la Agencia Española de Protección de Datos.</p>
    <p>Última actualización: junio de 2024</p>
  </section>
);

export default CookiesPolicy;