import React, { useEffect, useState } from "react";
import { Socio, obtenerSocios, agregarSocio, actualizarSocio, eliminarSocio, agregarPagoSeparado, obtenerPagosPorSocio } from "./firebaseSocios";
import { UserPlus, Trash2, Edit2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SociosManager: React.FC = () => {
  const [socios, setSocios] = useState<Socio[]>([]);
  const [nuevoSocio, setNuevoSocio] = useState<{ nombre: string; apellidos: string; telefono: string; fechaNacimiento: string }>({
    nombre: "",
    apellidos: "",
    telefono: "",
    fechaNacimiento: ""
  });
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
  const [tipoSocio, setTipoSocio] = useState<'adulto' | 'niño'>('adulto');
  const [pagosPorSocio, setPagosPorSocio] = useState<{ [key: string]: any[] }>({});

  useEffect(() => {
    cargarSocios();
  }, []);

  const cargarSocios = async () => {
    setCargando(true);
    try {
      const lista = await obtenerSocios();
      setSocios(lista);
      // Cargar pagos separados para cada socio
      const pagosObj: { [key: string]: any[] } = {};
      await Promise.all(lista.map(async socio => {
        pagosObj[socio.id!] = await obtenerPagosPorSocio(socio.id!);
      }));
      setPagosPorSocio(pagosObj);
    } catch (e) {
      setError("Error al cargar socios");
    }
    setCargando(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNuevoSocio(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleAgregar = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    try {
      await agregarSocio({ ...nuevoSocio, pagos: [] });
      setNuevoSocio({ nombre: "", email: "", telefono: "", fechaAlta: new Date().toISOString().slice(0,10), jiujitsu: false });
      cargarSocios();
    } catch (e) {
      setError("Error al agregar socio");
    }
    setCargando(false);
  };

  const handleEliminar = async (id: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar este socio?")) return;
    setCargando(true);
    try {
      await eliminarSocio(id);
      cargarSocios();
    } catch (e) {
      setError("Error al eliminar socio");
    }
    setCargando(false);
  };

  return (
    <section id="socios" className="my-12">
      <h2 className="text-2xl font-bold mb-4 text-gold">Gestión de Socios</h2>
      <div className="flex flex-wrap gap-4 items-end mb-8">
        <button onClick={() => setShowModal(true)} className="bg-gold text-black font-bold px-6 py-2 rounded shadow hover:bg-black hover:text-gold transition-all flex items-center gap-2"><UserPlus size={18}/>Agregar Socio</button>
        <input
          type="text"
          placeholder="Buscar socio..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className="border p-2 rounded flex-1 min-w-[200px]"
        />
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative animate-fade-in">
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 text-gray-400 hover:text-black"><X size={22}/></button>
            <h3 className="text-xl font-bold mb-4 text-gold">Nuevo Socio</h3>
            <form onSubmit={async e => {
              e.preventDefault();
              setCargando(true);
              setError("");
              try {
                const inscripcion = tipoSocio === 'adulto' ? 25 : 20;
                const socioData = { ...nuevoSocio, tipo: tipoSocio, pagos: [] };
                const socioId = await agregarSocio(socioData);
                await agregarPagoSeparado({
                  socioId,
                  fecha: new Date().toISOString().slice(0, 10),
                  concepto: "Inscripción",
                  cantidad: inscripcion,
                  pagado: false
                });
                setNuevoSocio({ nombre: "", apellidos: "", telefono: "", fechaNacimiento: "" });
                setTipoSocio('adulto');
                setShowModal(false);
                cargarSocios();
              } catch (e) {
                setError("Error al agregar socio: " + (e?.message || e));
              }
              setCargando(false);
            }} className="space-y-4">
              <input name="fechaNacimiento" type="date" value={nuevoSocio.fechaNacimiento} onChange={e => setNuevoSocio(prev => ({ ...prev, fechaNacimiento: e.target.value }))} placeholder="Fecha de nacimiento" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
              <input name="nombre" value={nuevoSocio.nombre} onChange={e => setNuevoSocio(prev => ({ ...prev, nombre: e.target.value }))} placeholder="Nombre" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
              <input name="apellidos" value={nuevoSocio.apellidos} onChange={e => setNuevoSocio(prev => ({ ...prev, apellidos: e.target.value }))} placeholder="Apellidos" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
              <input name="telefono" value={nuevoSocio.telefono} onChange={e => setNuevoSocio(prev => ({ ...prev, telefono: e.target.value }))} placeholder="Teléfono" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
              <div className="flex gap-4 items-center">
                <label className="font-semibold">Tipo de socio:</label>
                <select value={tipoSocio} onChange={e => setTipoSocio(e.target.value as 'adulto' | 'niño')} className="border border-gold p-2 rounded">
                  <option value="adulto">Adulto</option>
                  <option value="niño">Niño</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-gold hover:bg-black text-black hover:text-gold font-bold py-3 rounded transition-all duration-300 border border-gold hover:border-black flex items-center justify-center gap-2">Guardar <UserPlus size={16}/></button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      )}
      {cargando && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-gold to-yellow-300 text-black">
              <th className="p-3 font-semibold">Nombre</th>
              <th className="p-3 font-semibold">Apellidos</th>
              <th className="p-3 font-semibold">Estado Mensualidad</th>
              <th className="p-3 font-semibold">Estado Jiu Jitsu</th>
              <th className="p-3 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {socios.filter(socio =>
              socio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
              socio.apellidos?.toLowerCase().includes(busqueda.toLowerCase()) ||
              socio.telefono?.toLowerCase().includes(busqueda.toLowerCase())
            ).map(socio => {
              const pagos = pagosPorSocio[socio.id!] || [];
              // Determinar fecha de inscripción
              const fechaAlta = socio.fechaAlta || pagos.find(p => p.concepto === "Inscripción")?.fecha;
              let startYear = new Date().getFullYear();
              let startMonth = 1;
              if (fechaAlta) {
                const [y, m] = fechaAlta.slice(0,7).split("-");
                startYear = parseInt(y);
                startMonth = parseInt(m);
              }
              const now = new Date();
              const currentYM = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2, '0')}`;
              let y = startYear, m = startMonth;
              let deudaMensualidad = false;
              let pagadoMensualidadMesActual = false;
              while (y < now.getFullYear() || (y === now.getFullYear() && m <= now.getMonth() + 1)) {
                const ym = `${y}-${m.toString().padStart(2, '0')}`;
                const pagadoMensualidad = pagos.some(p => p.concepto === 'Mensualidad' && p.pagado && p.fecha.slice(0,7) === ym);
                if (ym === currentYM) pagadoMensualidadMesActual = pagadoMensualidad;
                if (!pagadoMensualidad) { deudaMensualidad = true; }
                m++;
                if (m > 12) { m = 1; y++; }
              }
              // Jiu Jitsu: deuda si existe algún mes desde alta sin pago de Jiu Jitsu
              y = startYear; m = startMonth;
              let deudaJiu = false;
              let pagadoJiuMesActual = false;
              while (y < now.getFullYear() || (y === now.getFullYear() && m <= now.getMonth() + 1)) {
                const ym = `${y}-${m.toString().padStart(2, '0')}`;
                const pagadoJiu = pagos.some(p => p.concepto === 'Jiu Jitsu' && p.pagado && p.fecha.slice(0,7) === ym);
                if (ym === currentYM) pagadoJiuMesActual = pagadoJiu;
                if (!pagadoJiu) { deudaJiu = true; }
                m++;
                if (m > 12) { m = 1; y++; }
              }
              return (
                <tr key={socio.id} className="border-b hover:bg-gold/10 transition-colors">
                  <td className="p-3">{socio.nombre}</td>
                  <td className="p-3">{socio.apellidos}</td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded text-white font-bold ${(deudaMensualidad || !pagadoMensualidadMesActual) ? 'bg-red-500' : 'bg-green-500'}`}>{(deudaMensualidad || !pagadoMensualidadMesActual) ? 'Impago/Deuda' : 'Al corriente'}</span>
                  </td>
                  <td className="p-3">
                    <span className={`px-3 py-1 rounded text-white font-bold ${(deudaJiu || !pagadoJiuMesActual) ? 'bg-red-500' : 'bg-green-500'}`}>{(deudaJiu || !pagadoJiuMesActual) ? 'Impago/Deuda' : 'Al corriente'}</span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button onClick={() => navigate(`/admin/socios/${socio.id}`)} className="text-blue-600 hover:bg-blue-100 rounded-full p-2 transition-colors" title="Editar"><Edit2 size={18}/></button>
                    <button onClick={() => handleEliminar(socio.id!)} className="text-red-600 hover:bg-red-100 rounded-full p-2 transition-colors" title="Eliminar"><Trash2 size={18}/></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SociosManager;