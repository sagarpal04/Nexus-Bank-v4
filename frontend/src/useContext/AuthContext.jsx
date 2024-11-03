// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth Provider component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const [remainingTime, setRemainingTime] = useState(0); // State for remaining time

  useEffect(() => {
    let timer;

    if (isAuthenticated) {
      setRemainingTime(900);
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsAuthenticated("");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        remainingTime,
        setRemainingTime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Export AuthProvider as default and useAuth as named export
export default AuthProvider;
