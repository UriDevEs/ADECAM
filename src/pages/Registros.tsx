import React from "react";
import AdminNavbar from "../components/admin/AdminNavbar";

const Registros: React.FC = () => {
  return (
    <>
      <AdminNavbar />
      <section className="min-h-screen bg-gray-50 py-12 pt-32 md:pt-40">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-gold">Registros de Movimientos y Pagos</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Aquí podrás ver los últimos movimientos y pagos realizados por los socios.
            </p>
            {/* Aquí se mostrarán las tablas o listas de movimientos y pagos */}
            <div className="text-center text-gray-400">Próximamente...</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registros;