import React, { useEffect, useState } from "react";
import { Socio, obtenerSocios, agregarSocio, actualizarSocio, eliminarSocio } from "./firebaseSocios";
import { UserPlus, Trash2, Edit2, X } from "lucide-react";

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

  useEffect(() => {
    cargarSocios();
  }, []);

  const cargarSocios = async () => {
    setCargando(true);
    try {
      const lista = await obtenerSocios();
      setSocios(lista);
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
                const socioData = { ...nuevoSocio, pagos: [{ concepto: "Inscripción", cantidad: 25, fecha: new Date().toISOString().slice(0,10) }] };
                await agregarSocio(socioData);
                setNuevoSocio({ nombre: "", apellidos: "", telefono: "", fechaNacimiento: "" });
                setShowModal(false);
                cargarSocios();
              } catch (e) {
                setError("Error al agregar socio");
              }
              setCargando(false);
            }} className="space-y-4">
              <input name="nombre" value={nuevoSocio.nombre} onChange={e => setNuevoSocio(prev => ({ ...prev, nombre: e.target.value }))} placeholder="Nombre" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
              <input name="apellidos" value={nuevoSocio.apellidos} onChange={e => setNuevoSocio(prev => ({ ...prev, apellidos: e.target.value }))} placeholder="Apellidos" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
              <input name="telefono" value={nuevoSocio.telefono} onChange={e => setNuevoSocio(prev => ({ ...prev, telefono: e.target.value }))} placeholder="Teléfono" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
              <input name="fechaNacimiento" type="date" value={nuevoSocio.fechaNacimiento} onChange={e => setNuevoSocio(prev => ({ ...prev, fechaNacimiento: e.target.value }))} placeholder="Fecha de nacimiento" className="border border-gold p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-gold" required />
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
              <th className="p-3 font-semibold">Teléfono</th>
              <th className="p-3 font-semibold">Fecha de Nacimiento</th>
              <th className="p-3 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {socios.filter(socio =>
              socio.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
              socio.apellidos?.toLowerCase().includes(busqueda.toLowerCase()) ||
              socio.telefono?.toLowerCase().includes(busqueda.toLowerCase())
            ).map(socio => (
              <tr key={socio.id} className="border-b hover:bg-gold/10 transition-colors">
                <td className="p-3">{socio.nombre}</td>
                <td className="p-3">{socio.apellidos}</td>
                <td className="p-3">{socio.telefono}</td>
                <td className="p-3">{socio.fechaNacimiento}</td>
                <td className="p-3 flex gap-2">
                  <button disabled className="text-gray-400 cursor-not-allowed"><Edit2 size={18}/></button>
                  <button onClick={() => handleEliminar(socio.id!)} className="text-red-600 hover:bg-red-100 rounded-full p-2 transition-colors" title="Eliminar"><Trash2 size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SociosManager;