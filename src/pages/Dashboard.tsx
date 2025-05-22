import React from "react";
import AdminNavbar from "../components/admin/AdminNavbar";

const Dashboard: React.FC = () => {
  return (
    <>
      <AdminNavbar />
      <section className="min-h-screen bg-gray-50 py-12 pt-32 md:pt-40">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-gold">Dashboard</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Aquí verás la contabilidad mensual, anual, altas, bajas y alertas de deudas de socios.
            </p>
            {/* Aquí se mostrarán los widgets de contabilidad, altas, bajas y alertas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">Contabilidad Mensual</h2>
                <span className="text-3xl font-bold text-green-600">€0</span>
              </div>
              <div className="bg-gray-100 rounded p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">Contabilidad Anual</h2>
                <span className="text-3xl font-bold text-blue-600">€0</span>
              </div>
              <div className="bg-gray-100 rounded p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">Altas/Bajas</h2>
                <span className="text-lg">0 altas / 0 bajas</span>
              </div>
              <div className="bg-gray-100 rounded p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">Alertas de Deuda</h2>
                <span className="text-lg text-red-600">0 socios con deuda</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;