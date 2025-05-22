import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    // Si no está autenticado, redirige al login del admin
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;