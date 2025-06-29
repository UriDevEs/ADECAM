import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/admin/AdminNavbar";
import { obtenerSocios, obtenerGastos, obtenerPagosPorSocio, agregarGasto, Gasto, Socio } from "../components/admin/firebaseSocios";
import { getDocs, collection } from "firebase/firestore";
import { app } from "../firebase/config";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

const Registros: React.FC = () => {
  const [movimientos, setMovimientos] = useState<any[]>([]);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [socios, setSocios] = useState<Socio[]>([]);
  const [nuevoGasto, setNuevoGasto] = useState<{ fecha: string; concepto: string; cantidad: number | ""; descripcion: string }>({ fecha: "", concepto: "", cantidad: "", descripcion: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // Filtros avanzados
  const [filtroMes, setFiltroMes] = useState("");
  const [filtroAnio, setFiltroAnio] = useState("");
  const [filtroDesde, setFiltroDesde] = useState("");
  const [filtroHasta, setFiltroHasta] = useState("");
  const [filtroTipoPago, setFiltroTipoPago] = useState("");
  const [filtroIngresoGasto, setFiltroIngresoGasto] = useState("");
  const [filtroConcepto, setFiltroConcepto] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError("");
      try {
        const sociosArr = await obtenerSocios();
        setSocios(sociosArr);
        // Get all pagos from pagos collection
        const pagosSnapshot = await getDocs(collection(db, "pagos"));
        const pagos = pagosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), tipo: "pago" }));
        // Attach socio info to pagos
        const pagosWithSocio = pagos.map(p => {
          if (p.socioId) {
            const socio = sociosArr.find(s => s.id === p.socioId);
            return { ...p, socioNombre: socio ? `${socio.nombre} ${socio.apellidos || ""}`.trim() : "-" };
          }
          return p;
        });
        // Get all gastos
        const gastosArr = await obtenerGastos();
        const gastosWithTipo = gastosArr.map(g => ({ ...g, tipo: "gasto" }));
        setGastos(gastosArr);
        // Merge and sort by fecha desc
        const allMovs = [...pagosWithSocio, ...gastosWithTipo].sort((a, b) => b.fecha.localeCompare(a.fecha));
        setMovimientos(allMovs);
      } catch (e) {
        setError("Error al cargar movimientos");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleAgregarGasto = async () => {
    setError("");
    try {
      await agregarGasto({ ...nuevoGasto, cantidad: Number(nuevoGasto.cantidad) });
      setNuevoGasto({ fecha: "", concepto: "", cantidad: "", descripcion: "" });
      // Refresh
      const gastosArr = await obtenerGastos();
      const pagosSnapshot = await getDocs(collection(db, "pagos"));
      const pagos = pagosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), tipo: "pago" }));
      const gastosWithTipo = gastosArr.map(g => ({ ...g, tipo: "gasto" }));
      setGastos(gastosArr);
      setMovimientos([...pagos, ...gastosWithTipo].sort((a, b) => b.fecha.localeCompare(a.fecha)));
    } catch (e) {
      setError("Error al agregar gasto");
    }
  };

  // Filtros aplicados
  const movimientosFiltrados = movimientos.filter(m => {
    if (filtroMes && (!m.fecha || m.fecha.slice(5,7) !== filtroMes)) return false;
    if (filtroAnio && (!m.fecha || m.fecha.slice(0,4) !== filtroAnio)) return false;
    if (filtroDesde && (!m.fecha || m.fecha < filtroDesde)) return false;
    if (filtroHasta && (!m.fecha || m.fecha > filtroHasta)) return false;
    if (filtroTipoPago && m.tipo === "pago" && m.concepto !== filtroTipoPago) return false;
    if (filtroIngresoGasto) {
      if (filtroIngresoGasto === "ingreso" && m.tipo !== "pago") return false;
      if (filtroIngresoGasto === "gasto" && m.tipo !== "gasto") return false;
    }
    if (filtroConcepto && (!m.concepto || !m.concepto.toLowerCase().includes(filtroConcepto.toLowerCase()))) return false;
    return true;
  });

  // Totals generales
  const totalIngresos = movimientosFiltrados.filter(m => m.tipo === "pago" && m.pagado).reduce((acc, m) => acc + (m.cantidad || 0), 0);
  const totalGastos = movimientosFiltrados.filter(m => m.tipo === "gasto").reduce((acc, m) => acc + (m.cantidad || 0), 0);
  const total = totalIngresos - totalGastos;

  // Totals mensuales y anuales (mes y año en curso)
  const now = new Date();
  const currentYear = now.getFullYear().toString();
  const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
  const movimientosMes = movimientos.filter(m => m.fecha && m.fecha.slice(0,4) === currentYear && m.fecha.slice(5,7) === currentMonth);
  const movimientosAnio = movimientos.filter(m => m.fecha && m.fecha.slice(0,4) === currentYear);
  const totalIngresosMes = movimientosMes.filter(m => m.tipo === "pago" && m.pagado).reduce((acc, m) => acc + (m.cantidad || 0), 0);
  const totalGastosMes = movimientosMes.filter(m => m.tipo === "gasto").reduce((acc, m) => acc + (m.cantidad || 0), 0);
  const totalMes = totalIngresosMes - totalGastosMes;
  const totalIngresosAnio = movimientosAnio.filter(m => m.tipo === "pago" && m.pagado).reduce((acc, m) => acc + (m.cantidad || 0), 0);
  const totalGastosAnio = movimientosAnio.filter(m => m.tipo === "gasto").reduce((acc, m) => acc + (m.cantidad || 0), 0);
  const totalAnio = totalIngresosAnio - totalGastosAnio;

  // Obtener años y meses únicos para los selects
  const uniqueYears = Array.from(new Set(movimientos.map(m => m.fecha?.slice(0,4)).filter(Boolean)));
  const uniqueMonths = Array.from(new Set(movimientos.map(m => m.fecha?.slice(5,7)).filter(Boolean)));
  const conceptosPago = Array.from(new Set(movimientos.filter(m => m.tipo === "pago").map(m => m.concepto).filter(Boolean)));

  return (
    <>
      <AdminNavbar />
      <section className="min-h-screen bg-gray-50 py-12 pt-32 md:pt-40">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-gold">Registros de Movimientos y Pagos</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 text-center">
              Aquí puedes ver todos los pagos de socios y gastos de la asociación, añadir gastos manuales y ver el balance total.
            </p>
            {/* Filtros avanzados */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <select value={filtroAnio} onChange={e => setFiltroAnio(e.target.value)} className="border p-2 rounded">
                <option value="">Año</option>
                {uniqueYears.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <select value={filtroMes} onChange={e => setFiltroMes(e.target.value)} className="border p-2 rounded">
                <option value="">Mes</option>
                {uniqueMonths.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <input type="date" value={filtroDesde} onChange={e => setFiltroDesde(e.target.value)} className="border p-2 rounded" placeholder="Desde" />
              <input type="date" value={filtroHasta} onChange={e => setFiltroHasta(e.target.value)} className="border p-2 rounded" placeholder="Hasta" />
              <select value={filtroTipoPago} onChange={e => setFiltroTipoPago(e.target.value)} className="border p-2 rounded">
                <option value="">Tipo de pago</option>
                {conceptosPago.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={filtroIngresoGasto} onChange={e => setFiltroIngresoGasto(e.target.value)} className="border p-2 rounded">
                <option value="">Ingresos/Gastos</option>
                <option value="ingreso">Ingresos</option>
                <option value="gasto">Gastos</option>
              </select>
              <input type="text" value={filtroConcepto} onChange={e => setFiltroConcepto(e.target.value)} className="border p-2 rounded" placeholder="Buscar concepto..." />
            </div>
            {/* Resúmenes contables */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
              <div className="bg-green-100 rounded p-4 text-center flex-1">
                <div className="text-lg font-semibold text-green-700">Total Ingresos</div>
                <div className="text-2xl font-bold">€{totalIngresos}</div>
              </div>
              <div className="bg-red-100 rounded p-4 text-center flex-1">
                <div className="text-lg font-semibold text-red-700">Total Gastos</div>
                <div className="text-2xl font-bold">€{totalGastos}</div>
              </div>
              <div className="bg-blue-100 rounded p-4 text-center flex-1">
                <div className="text-lg font-semibold text-blue-700">Balance</div>
                <div className="text-2xl font-bold">€{total}</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
              <div className="bg-green-50 rounded p-4 text-center flex-1">
                <div className="text-base font-semibold text-green-700">Ingresos mes actual</div>
                <div className="text-xl font-bold">€{totalIngresosMes}</div>
              </div>
              <div className="bg-red-50 rounded p-4 text-center flex-1">
                <div className="text-base font-semibold text-red-700">Gastos mes actual</div>
                <div className="text-xl font-bold">€{totalGastosMes}</div>
              </div>
              <div className="bg-blue-50 rounded p-4 text-center flex-1">
                <div className="text-base font-semibold text-blue-700">Balance mes actual</div>
                <div className="text-xl font-bold">€{totalMes}</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
              <div className="bg-green-50 rounded p-4 text-center flex-1">
                <div className="text-base font-semibold text-green-700">Ingresos año actual</div>
                <div className="text-xl font-bold">€{totalIngresosAnio}</div>
              </div>
              <div className="bg-red-50 rounded p-4 text-center flex-1">
                <div className="text-base font-semibold text-red-700">Gastos año actual</div>
                <div className="text-xl font-bold">€{totalGastosAnio}</div>
              </div>
              <div className="bg-blue-50 rounded p-4 text-center flex-1">
                <div className="text-base font-semibold text-blue-700">Balance año actual</div>
                <div className="text-xl font-bold">€{totalAnio}</div>
              </div>
            </div>
            <h2 className="text-xl font-bold mb-4 text-gold">Añadir Gasto Manual</h2>
            <form onSubmit={e => { e.preventDefault(); handleAgregarGasto(); }} className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-end bg-gold/10 p-4 rounded-lg shadow-inner mb-8">
              <input type="date" value={nuevoGasto.fecha} onChange={e => setNuevoGasto(prev => ({ ...prev, fecha: e.target.value }))} className="border border-gold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold bg-white" required />
              <input type="text" placeholder="Concepto" value={nuevoGasto.concepto} onChange={e => setNuevoGasto(prev => ({ ...prev, concepto: e.target.value }))} className="border border-gold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold bg-white" required />
              <input type="number" placeholder="introducir cantidad" value={nuevoGasto.cantidad} onChange={e => setNuevoGasto(prev => ({ ...prev, cantidad: e.target.value }))} className="border border-gold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold bg-white" required />
              <input type="text" placeholder="Descripción" value={nuevoGasto.descripcion} onChange={e => setNuevoGasto(prev => ({ ...prev, descripcion: e.target.value }))} className="border border-gold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold bg-white" />
              <button type="submit" className="bg-gold text-white font-bold px-6 py-2 rounded shadow hover:bg-yellow-600 transition-colors">Añadir Gasto</button>
            </form>
            {error && <div className="text-red-600 text-center mb-4">{error}</div>}
            <h2 className="text-xl font-bold mb-4 text-gold">Movimientos Recientes</h2>
            {loading ? <div className="text-center py-8">Cargando...</div> : (
              <div className="overflow-x-auto">
                <table className="min-w-full border rounded-lg">
                  <thead>
                    <tr className="bg-gold/20">
                      <th className="p-2">Fecha</th>
                      <th className="p-2">Tipo</th>
                      <th className="p-2">Concepto</th>
                      <th className="p-2">Cantidad</th>
                      <th className="p-2">Socio</th>
                      <th className="p-2">Descripción</th>
                      <th className="p-2">Pagado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movimientosFiltrados.map(mov => (
                      <tr key={mov.id} className="border-b hover:bg-gold/10 transition-colors">
                        <td className="p-2">{mov.fecha}</td>
                        <td className="p-2">{mov.tipo === "pago" ? "Ingreso" : "Gasto"}</td>
                        <td className="p-2">{mov.concepto}</td>
                        <td className="p-2">{mov.cantidad} €</td>
                        <td className="p-2">{mov.tipo === "pago" ? (mov.socioNombre || "-") : "-"}</td>
                        <td className="p-2">{mov.tipo === "gasto" ? mov.descripcion : "-"}</td>
                        <td className="p-2 text-center">{mov.tipo === "pago" ? (mov.pagado ? "✔️" : "❌") : "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Registros;