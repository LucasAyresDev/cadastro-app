import React, { createContext, useState, useContext } from "react";

// Criação do contexto
const AuthContext = createContext();

// Componente provider para fornecer o contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const register = (name, email) => {
    setUser({ name, email });
  };

  return (
    <AuthContext.Provider value={{ user, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
