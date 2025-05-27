import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase/config";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";

const db = getFirestore(app);

export interface Socio {
  id?: string;
  nombre: string;
  apellidos?: string;
  telefono: string;
  fechaNacimiento?: string;
  email?: string;
  fechaAlta?: string;
  jiujitsu?: boolean;
  pagos: Pago[];
}

export interface Pago {
  id?: string;
  fecha: string;
  concepto: string;
  cantidad: number;
  pagado: boolean;
}

export async function agregarSocio(socio: Omit<Socio, 'id'>) {
  const docRef = await addDoc(collection(db, "socios"), socio);
  return docRef.id;
}

export async function obtenerSocios(): Promise<Socio[]> {
  const querySnapshot = await getDocs(collection(db, "socios"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Socio[];
}

export async function actualizarSocio(id: string, datos: Partial<Socio>) {
  await updateDoc(doc(db, "socios", id), datos);
}

export async function eliminarSocio(id: string) {
  await deleteDoc(doc(db, "socios", id));
}

// --- PAGOS SEPARADOS ---
export interface PagoSeparado {
  id?: string;
  socioId: string;
  fecha: string;
  concepto: string;
  cantidad: number;
  pagado: boolean;
}

export async function agregarPagoSeparado(pago: Omit<PagoSeparado, 'id'>) {
  const docRef = await addDoc(collection(db, "pagos"), pago);
  return docRef.id;
}

export async function obtenerPagosPorSocio(socioId: string): Promise<PagoSeparado[]> {
  const pagosRef = collection(db, "pagos");
  const q = query(pagosRef, where("socioId", "==", socioId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as PagoSeparado[];
}

export async function actualizarPagoSeparado(id: string, datos: Partial<PagoSeparado>) {
  await updateDoc(doc(db, "pagos", id), datos);
}

export async function eliminarPagoSeparado(id: string) {
  await deleteDoc(doc(db, "pagos", id));
}