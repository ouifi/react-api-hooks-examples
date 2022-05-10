import React, { createContext, useState } from "react";

const AuthContext = createContext({
  attemptSignIn: () => { },
  triggerSignOut: () => { },
  isAuthenticated: false
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const attemptSignIn = () => {
    setIsAuthenticated(true);
  }

  const triggerSignOut = () => {
    setIsAuthenticated(false);
  }

  return <AuthContext.Provider value={{ attemptSignIn, triggerSignOut, isAuthenticated }}>
    {children}
  </AuthContext.Provider>;
};

export {
  AuthContext,
  AuthProvider
}