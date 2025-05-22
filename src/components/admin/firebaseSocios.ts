import { getFirestore } from "firebase/firestore";
import { app } from "../../firebase/config";

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