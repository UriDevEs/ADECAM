import React from "react";

const PrivacyPolicy: React.FC = () => (
  <section className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
    <p className="mb-4">En cumplimiento del Reglamento (UE) 2016/679 (RGPD), la Ley Orgánica 3/2018 (LOPDGDD) y la Ley 34/2002 (LSSI), la Asociación Deportiva informa a los usuarios de su sitio web sobre el tratamiento de sus datos personales.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Quién es el responsable del tratamiento?</h2>
    <p className="mb-4">La responsable es la Asociación Deportiva, con domicilio social en [DIRECCIÓN], correo electrónico de contacto: [EMAIL].</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Con qué finalidad tratamos sus datos?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Gestionar la inscripción y participación en actividades deportivas.</li>
      <li>Atender consultas y solicitudes recibidas a través del formulario de contacto.</li>
      <li>Enviar información relevante sobre la asociación, actividades y eventos (siempre con su consentimiento).</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Cuál es la legitimación para el tratamiento?</h2>
    <p className="mb-4">La base legal es el consentimiento del usuario, la ejecución de un contrato o el cumplimiento de obligaciones legales.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿A quién se comunican sus datos?</h2>
    <p className="mb-4">No se cederán datos a terceros salvo obligación legal o para la correcta prestación de los servicios contratados.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Cuáles son sus derechos?</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Acceder, rectificar y suprimir los datos.</li>
      <li>Solicitar la limitación u oposición al tratamiento.</li>
      <li>Portabilidad de los datos.</li>
      <li>Retirar el consentimiento en cualquier momento.</li>
      <li>Presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">¿Durante cuánto tiempo conservamos sus datos?</h2>
    <p className="mb-4">Los datos se conservarán mientras exista una relación con la asociación o hasta que el usuario solicite su supresión.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">Contacto</h2>
    <p className="mb-4">Para ejercer sus derechos puede enviar un correo electrónico a [EMAIL] indicando su solicitud.</p>
    <p>Última actualización: junio de 2024</p>
  </section>
);

export default PrivacyPolicy;