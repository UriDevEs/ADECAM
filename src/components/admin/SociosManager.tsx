import React, { useEffect, useState } from "react";
import { Socio, obtenerSocios, agregarSocio, actualizarSocio, eliminarSocio } from "./firebaseSocios";

const SociosManager: React.FC = () => {
  const [socios, setSocios] = useState<Socio[]>([]);
  const [nuevoSocio, setNuevoSocio] = useState<Omit<Socio, 'id' | 'pagos'>>({
    nombre: "",
    email: "",
    telefono: "",
    fechaAlta: new Date().toISOString().slice(0,10),
    jiujitsu: false
  });
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

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
      <form onSubmit={handleAgregar} className="bg-white rounded-lg shadow p-4 mb-8 flex flex-wrap gap-4 items-end">
        <input name="nombre" value={nuevoSocio.nombre} onChange={handleChange} placeholder="Nombre" className="border p-2 rounded flex-1" required />
        <input name="email" value={nuevoSocio.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded flex-1" required type="email" />
        <input name="telefono" value={nuevoSocio.telefono} onChange={handleChange} placeholder="Teléfono" className="border p-2 rounded flex-1" required />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="jiujitsu" checked={nuevoSocio.jiujitsu} onChange={handleChange} /> Jiujitsu
        </label>
        <button type="submit" className="btn-corporativo bg-gold text-black px-6 py-2 rounded">Agregar</button>
      </form>
      {cargando && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gold text-black">
              <th className="p-2">Nombre</th>
              <th className="p-2">Email</th>
              <th className="p-2">Teléfono</th>
              <th className="p-2">Fecha Alta</th>
              <th className="p-2">Jiujitsu</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {socios.map(socio => (
              <tr key={socio.id} className="border-b">
                <td className="p-2">{socio.nombre}</td>
                <td className="p-2">{socio.email}</td>
                <td className="p-2">{socio.telefono}</td>
                <td className="p-2">{socio.fechaAlta}</td>
                <td className="p-2">{socio.jiujitsu ? "Sí" : "No"}</td>
                <td className="p-2">
                  {/* Aquí se puede añadir funcionalidad de editar en el futuro */}
                  <button onClick={() => handleEliminar(socio.id!)} className="text-red-600 hover:underline">Eliminar</button>
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