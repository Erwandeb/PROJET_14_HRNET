//AuthenticationProvider.js
import React, { useState, createContext } from "react";

const DEFAULT_STATE = "";

export const userContext  = createContext(DEFAULT_STATE);

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_STATE);

  return (
    <userContext.Provider value={[user, setUser]} >
      {children}
    </userContext.Provider>
  );
}