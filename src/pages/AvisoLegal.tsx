import React from "react";

const AvisoLegal: React.FC = () => (
  <section className="py-20 bg-white min-h-screen pt-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold text-gold mb-6">Aviso Legal</h1>
      <p className="mb-4">En cumplimiento con el deber de información recogido en la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se informa:</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Titularidad</h2>
      <p className="mb-4">ASOCIACION CULTURAL DE DEPORTES DE CONTACTO Y ARTES MARCIALES TRIGUEROS. CIF: G12345678. Domicilio: Calle Carpinteros 29, 21620 Trigueros, Huelva. Email: info@adecamtrigueros.es</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Objeto</h2>
      <p className="mb-4">El presente sitio web tiene como finalidad informar sobre las actividades y servicios de la asociación.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Propiedad intelectual</h2>
      <p className="mb-4">Todos los contenidos del sitio web, salvo indicación expresa, son titularidad de la asociación y están protegidos por la normativa de propiedad intelectual.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Responsabilidad</h2>
      <p className="mb-4">La asociación no se responsabiliza del mal uso que se realice de los contenidos de la web ni de los daños derivados de su uso.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Legislación aplicable</h2>
      <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Huelva.</p>
    </div>
  </section>
);

export default AvisoLegal;