import React from "react";
import SociosManager from "../components/admin/SociosManager";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import LoginForm from "../components/admin/LoginForm";
import AdminNavbar from "../components/admin/AdminNavbar";

const Admin: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setChecking(false);
    });
    return () => unsubscribe();
  }, []);

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  if (!user) {
    return <LoginForm onLoginSuccess={() => window.location.reload()} />;
  }

  return (
    <>
      <AdminNavbar />
      <section className="min-h-screen bg-gray-50 py-12 pt-32 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <button onClick={() => { const auth = getAuth(); signOut(auth); }} className="bg-red-500 text-white px-4 py-2 rounded">Cerrar sesión</button>
          </div>
          <h1 className="text-4xl font-bold mb-8 text-center text-gold">Panel de Administración</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Bienvenido al backoffice de ADECAM. Desde aquí podrás gestionar los socios, pagos y deudas de la asociación.
            </p>
            <div className="flex flex-col gap-6">
              <a href="#socios" className="btn-corporativo bg-gold text-black hover:bg-gold-dark px-8 py-3 text-center rounded-lg">Gestión de Socios</a>
              <a href="#pagos" className="btn-corporativo border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 text-center rounded-lg">Pagos y Deudas</a>
            </div>
          </div>
          <SociosManager />
        </div>
      </section>
    </>
  );
};

export default Admin;