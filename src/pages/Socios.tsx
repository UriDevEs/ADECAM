import React from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import SociosManager from "../components/admin/SociosManager";
import FichaSocio from "../components/admin/FichaSocio";
import { Routes, Route } from "react-router-dom";

const Socios: React.FC = () => {
  return (
    <>
      <AdminNavbar />
      <section className="min-h-screen bg-gray-50 py-12 pt-32 md:pt-40">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-gold">Gestión de Socios</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Desde aquí puedes gestionar los socios de la asociación.
            </p>
            <Routes>
              <Route path="" element={<SociosManager />} />
              <Route path=":id" element={<FichaSocio />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export default Socios;