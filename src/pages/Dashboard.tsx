import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import { obtenerSocios } from "../components/admin/firebaseSocios";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../firebase/config";

const db = getFirestore(app);

const Dashboard: React.FC = () => {
  const [mensual, setMensual] = useState(0);
  const [anual, setAnual] = useState(0);
  const [deudaCount, setDeudaCount] = useState(0);
  const [jiuPagados, setJiuPagados] = useState(0);
  const [altas, setAltas] = useState(0);
  const [bajas, setBajas] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const socios = await obtenerSocios();
      setAltas(socios.length); // Placeholder for altas
      setBajas(0); // Placeholder for bajas
      // Fetch all pagos
      const pagosSnapshot = await getDocs(collection(db, "pagos"));
      const pagos = pagosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // Get current month and year
      const now = new Date();
      const currentMonth = now.toISOString().slice(0,7);
      const currentYear = now.getFullYear();
      // Monthly and annual totals
      let mensualSum = 0;
      let anualSum = 0;
      let deudaSocios = new Set();
      let jiuSocios = new Set();
      socios.forEach(socio => {
        const pagosSocio = pagos.filter(p => p.socioId === socio.id);
        // Mensualidad pagada este mes
        const mensualidadMes = pagosSocio.filter(p => p.concepto === "Mensualidad" && p.pagado && p.fecha.slice(0,7) === currentMonth);
        mensualSum += mensualidadMes.reduce((acc, p) => acc + (p.cantidad || 0), 0);
        // Mensualidad pagada este año
        const mensualidadAnio = pagosSocio.filter(p => p.concepto === "Mensualidad" && p.pagado && p.fecha.slice(0,4) === String(currentYear));
        anualSum += mensualidadAnio.reduce((acc, p) => acc + (p.cantidad || 0), 0);
        // Deuda: si falta algún mes desde alta hasta ahora sin pago
        let fechaAlta = socio.fechaAlta || pagosSocio.find(p => p.concepto === "Inscripción")?.fecha;
        let y = fechaAlta ? parseInt(fechaAlta.slice(0,4)) : currentYear;
        let m = fechaAlta ? parseInt(fechaAlta.slice(5,7)) : 1;
        let deuda = false;
        while (y < now.getFullYear() || (y === now.getFullYear() && m <= now.getMonth() + 1)) {
          const ym = `${y}-${m.toString().padStart(2, '0')}`;
          const pagado = pagosSocio.some(p => p.concepto === 'Mensualidad' && p.pagado && p.fecha.slice(0,7) === ym);
          if (!pagado) deuda = true;
          m++;
          if (m > 12) { m = 1; y++; }
        }
        if (deuda) deudaSocios.add(socio.id);
        // Jiu Jitsu pagado este mes
        const jiuPagado = pagosSocio.some(p => p.concepto === 'Jiu Jitsu' && p.pagado && p.fecha.slice(0,7) === currentMonth);
        if (jiuPagado) jiuSocios.add(socio.id);
      });
      setMensual(mensualSum);
      setAnual(anualSum);
      setDeudaCount(deudaSocios.size);
      setJiuPagados(jiuSocios.size);
      setLoading(false);
    }
    fetchData();
  }, []);

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
            {loading ? <div className="text-center py-8">Cargando...</div> : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">Contabilidad Mensual</h2>
                <span className="text-3xl font-bold text-green-600">€{mensual}</span>
              </div>
              <div className="bg-gray-100 rounded p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">Contabilidad Anual</h2>
                <span className="text-3xl font-bold text-blue-600">€{anual}</span>
              </div>
              <div className="bg-gray-100 rounded p-4 text-center">
                <h2 className="text-xl font-semibold mb-2">Alertas de Deuda</h2>
                <span className="text-lg text-red-600">{deudaCount} socios con deuda</span>
              </div>
              <div className="bg-gray-100 rounded p-4 text-center md:col-span-2">
                <h2 className="text-xl font-semibold mb-2">Socios con Jiu Jitsu pagado este mes</h2>
                <span className="text-lg text-purple-600">{jiuPagados} socios</span>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;