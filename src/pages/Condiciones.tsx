import React from "react";

const Condiciones: React.FC = () => (
  <section className="py-20 bg-white min-h-screen">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-gold mb-6">Condiciones de Uso</h1>
      <p className="mb-4">El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones de uso. Si no estás de acuerdo con ellas, por favor, abstente de utilizar la web.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Objeto</h2>
      <p className="mb-4">Estas condiciones regulan el acceso, navegación y uso de la web de ADECAM TRIGUEROS, así como las responsabilidades derivadas del uso de sus contenidos.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Obligaciones del usuario</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Utilizar la web de forma lícita y conforme a la ley.</li>
        <li>No realizar actividades que puedan dañar, sobrecargar o deteriorar la web.</li>
        <li>Respetar los derechos de propiedad intelectual e industrial.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Propiedad intelectual</h2>
      <p className="mb-4">Los contenidos de la web son propiedad de la asociación o de terceros autorizados. Queda prohibida su reproducción sin autorización expresa.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Exclusión de responsabilidad</h2>
      <p className="mb-4">La asociación no se responsabiliza de los daños derivados del uso de la web ni de la información contenida en ella.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Modificaciones</h2>
      <p className="mb-4">La asociación se reserva el derecho de modificar estas condiciones en cualquier momento. Las modificaciones serán publicadas en la web.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Legislación aplicable</h2>
      <p>Estas condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Huelva.</p>
    </div>
  </section>
);

export default Condiciones;