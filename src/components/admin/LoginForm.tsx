import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess();
    } catch (err: any) {
      setError("Credenciales incorrectas o error de autenticación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto pt-32">
      <h2 className="text-2xl font-bold mb-6 text-center">Acceso Administrador</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Contraseña</label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
      <button
        type="submit"
        className="w-full bg-gold text-black font-semibold py-2 rounded hover:bg-gold-dark"
        disabled={loading}
      >
        {loading ? "Accediendo..." : "Entrar"}
      </button>
    </form>
  );
};

export default LoginForm;