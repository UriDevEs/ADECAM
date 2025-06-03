import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Socio, obtenerSocios, actualizarSocio, eliminarSocio, obtenerPagosPorSocio, agregarPagoSeparado, actualizarPagoSeparado, eliminarPagoSeparado, PagoSeparado } from "./firebaseSocios";
import { ArrowLeft, Trash2, Save, Plus } from "lucide-react";

const FichaSocio: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [socio, setSocio] = useState<Socio | null>(null);
  const [pagos, setPagos] = useState<PagoSeparado[]>([]);
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState<any>({});
  const [nuevoPago, setNuevoPago] = useState<{ fecha: string; concepto: string; cantidad: number | ""; pagado: boolean }>({ fecha: "", concepto: "", cantidad: "", pagado: false });
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) cargarDatos();
  }, [id]);

  const cargarDatos = async () => {
    setCargando(true);
    try {
      const lista = await obtenerSocios();
      const s = lista.find(s => s.id === id);
      setSocio(s || null);
      setForm(s || {});
      if (id) {
        const pagosSocio = await obtenerPagosPorSocio(id);
        setPagos(pagosSocio);
      }
    } catch (e) {
      setError("Error al cargar datos");
    }
    setCargando(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleGuardar = async () => {
    if (!id) return;
    setCargando(true);
    try {
      await actualizarSocio(id, form);
      setEditando(false);
      cargarDatos();
    } catch (e) {
      setError("Error al guardar cambios");
    }
    setCargando(false);
  };

  const handleEliminar = async () => {
    if (!id) return;
    if (!window.confirm("¿Seguro que deseas eliminar este socio?")) return;
    setCargando(true);
    try {
      await eliminarSocio(id);
      navigate("/admin/socios");
    } catch (e) {
      setError("Error al eliminar socio");
    }
    setCargando(false);
  };

  const handleAgregarPago = async () => {
    if (!id) return;
    setCargando(true);
    try {
      await agregarPagoSeparado({ ...nuevoPago, socioId: id });
      setNuevoPago({ fecha: "", concepto: "", cantidad: 0, pagado: false });
      cargarDatos();
    } catch (e) {
      setError("Error al agregar pago");
    }
    setCargando(false);
  };

  const handleActualizarPago = async (pagoId: string, datos: Partial<PagoSeparado>) => {
    setCargando(true);
    try {
      await actualizarPagoSeparado(pagoId, datos);
      cargarDatos();
    } catch (e) {
      setError("Error al actualizar pago");
    }
    setCargando(false);
  };

  const handleEliminarPago = async (pagoId: string) => {
    setCargando(true);
    try {
      await eliminarPagoSeparado(pagoId);
      cargarDatos();
    } catch (e) {
      setError("Error al eliminar pago");
    }
    setCargando(false);
  };

  if (cargando) return <p>Cargando...</p>;
  if (!socio) return <p>No se encontró el socio.</p>;

  return (
    <div className="max-w-2xl mx-auto my-8 bg-white rounded-xl shadow p-8">
      <button onClick={() => navigate("/admin/socios")} className="mb-4 flex items-center gap-2 text-gold hover:underline"><ArrowLeft size={18}/>Volver</button>
      <h2 className="text-2xl font-bold mb-4 text-gold">Ficha de Socio</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="space-y-2 mb-6">
        <label className="block font-semibold">Nombre:</label>
        <input name="nombre" value={form.nombre || ""} onChange={handleChange} disabled={!editando} className={`border p-2 rounded w-full ${editando ? '' : 'bg-gray-100'}`} />
        <label className="block font-semibold">Apellidos:</label>
        <input name="apellidos" value={form.apellidos || ""} onChange={handleChange} disabled={!editando} className={`border p-2 rounded w-full ${editando ? '' : 'bg-gray-100'}`} />
        <label className="block font-semibold">Teléfono:</label>
        <input name="telefono" value={form.telefono || ""} onChange={handleChange} disabled={!editando} className={`border p-2 rounded w-full ${editando ? '' : 'bg-gray-100'}`} />
        <label className="block font-semibold">Fecha de nacimiento:</label>
        <input name="fechaNacimiento" type="date" value={form.fechaNacimiento || ""} onChange={handleChange} disabled={!editando} className={`border p-2 rounded w-full ${editando ? '' : 'bg-gray-100'}`} />
        <label className="block font-semibold">Tipo de socio:</label>
        <select name="tipo" value={form.tipo || "adulto"} onChange={handleChange} disabled={!editando} className={`border p-2 rounded w-full ${editando ? '' : 'bg-gray-100'}`}>
          <option value="adulto">Adulto</option>
          <option value="niño">Niño</option>
        </select>
      </div>
      <div className="flex gap-4 mb-6">
        {editando ? (
          <button onClick={handleGuardar} className="bg-gold text-black font-bold px-6 py-2 rounded shadow flex items-center gap-2"><Save size={18}/>Guardar</button>
        ) : (
          <button onClick={() => setEditando(true)} className="bg-blue-500 text-white font-bold px-6 py-2 rounded shadow flex items-center gap-2">Editar</button>
        )}
        <button onClick={handleEliminar} className="bg-red-500 text-white font-bold px-6 py-2 rounded shadow flex items-center gap-2"><Trash2 size={18}/>Eliminar</button>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gold">Registros de Pagos</h3>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow mb-4 text-xs md:text-base">
        <thead>
          <tr className="bg-gradient-to-r from-gold to-yellow-300 text-black">
            <th className="p-2 whitespace-nowrap">Tipo</th>
            <th className="p-2 whitespace-nowrap">Mes</th>
            <th className="p-2 whitespace-nowrap">Cantidad</th>
            <th className="p-2 whitespace-nowrap">Pagado</th>
            <th className="p-2 whitespace-nowrap">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map(pago => (
            <tr key={pago.id} className="border-b hover:bg-gold/10 transition-colors">
              <td className="p-2 whitespace-nowrap">{pago.concepto}</td>
              <td className="p-2 whitespace-nowrap">{pago.fecha ? pago.fecha.slice(0,7) : ""}</td>
              <td className="p-2 whitespace-nowrap">{pago.cantidad} €</td>
              <td className="p-2 whitespace-nowrap">
                <input type="checkbox" checked={pago.pagado} onChange={e => handleActualizarPago(pago.id!, { pagado: e.target.checked })} className="accent-gold scale-125" />
              </td>
              <td className="p-2 whitespace-nowrap">
                <button onClick={() => handleEliminarPago(pago.id!)} className="text-red-600 hover:bg-red-100 rounded-full p-2 transition-colors" title="Eliminar"><Trash2 size={18}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Estado actual por mes:</span>
        <ul className="list-disc ml-6">
          {(() => {
            // Determinar el mes y año de inscripción
            const fechaAlta = socio?.fechaAlta || pagos.find(p => p.concepto === "Inscripción")?.fecha;
            let startYear = new Date().getFullYear();
            let startMonth = 1;
            if (fechaAlta) {
              const [y, m] = fechaAlta.slice(0,7).split("-");
              startYear = parseInt(y);
              startMonth = parseInt(m);
            }
            const months = [];
            const now = new Date();
            let y = startYear, m = startMonth;
            // Solo mostrar meses desde la inscripción hasta el mes actual
            while (y < now.getFullYear() || (y === now.getFullYear() && m <= now.getMonth() + 1)) {
              months.push({ year: y, month: m });
              m++;
              if (m > 12) { m = 1; y++; }
            }
            return months.map(({ year, month }) => {
              const ym = `${year}-${month.toString().padStart(2, '0')}`;
              const mensualidadPagada = pagos.some(p => p.concepto === "Mensualidad" && p.pagado && p.fecha.slice(0,7) === ym);
              const jiuPagada = pagos.some(p => p.concepto === "Jiu Jitsu" && p.pagado && p.fecha.slice(0,7) === ym);
              return (
                <li key={ym}>
                  <span className="font-bold">{ym}:</span> Mensualidad: {mensualidadPagada ? <span className="text-green-600 font-bold">Al corriente</span> : <span className="text-red-600 font-bold">Deuda</span>} | Jiu Jitsu: {jiuPagada ? <span className="text-green-600 font-bold">Al corriente</span> : <span className="text-red-600 font-bold">Deuda</span>}
                </li>
              );
            });
          })()}
        </ul>
      </div>
      <form onSubmit={e => { e.preventDefault(); handleAgregarPago(); }} className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-end bg-gold/10 p-4 rounded-lg shadow-inner transition-all">
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1 text-gold">Mes</label>
          <input type="month" value={nuevoPago.fecha.slice(0,7)} onChange={e => setNuevoPago(prev => ({ ...prev, fecha: e.target.value+"-01" }))} className="border border-gold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold bg-white" required />
        </div>
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1 text-gold">Concepto</label>
          <select value={nuevoPago.concepto} onChange={e => setNuevoPago(prev => ({ ...prev, concepto: e.target.value }))} className="border border-gold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold bg-white" required>
            <option value="">Selecciona concepto</option>
            <option value="Mensualidad">Mensualidad</option>
            <option value="Jiu Jitsu">Jiu Jitsu</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1 text-gold">Cantidad (€)</label>
          <input type="number" placeholder="introducir cantidad" value={nuevoPago.cantidad} onChange={e => setNuevoPago(prev => ({ ...prev, cantidad: e.target.value === '' ? '' : Number(e.target.value) }))} className="border border-gold p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold bg-white" required />
        </div>
        <div className="flex items-center gap-2 md:mt-6">
          <label className="flex items-center gap-1 text-xs font-semibold text-gold"><input type="checkbox" checked={nuevoPago.pagado} onChange={e => setNuevoPago(prev => ({ ...prev, pagado: e.target.checked }))} className="accent-gold scale-125" />Pagado</label>
        </div>
        <button type="submit" className="bg-gold hover:bg-black text-black hover:text-gold font-bold px-4 py-2 rounded transition-all duration-300 border border-gold hover:border-black flex items-center gap-1 md:mt-6"><Plus size={16}/>Agregar</button>
      </form>
    </div>
  );
};

export default FichaSocio;