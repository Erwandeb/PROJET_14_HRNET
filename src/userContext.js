import React, { useState, createContext } from "react";

const DEFAULT_STATE = [];

export const userContext  = createContext({
  users:DEFAULT_STATE,
  setUsers:()=>{}
});

export const AuthenticationProvider = ({ children }) => {
  const [users, setUsers] = useState(DEFAULT_STATE);

  return (
    <userContext.Provider value={{users, setUsers}} >
      {children}
    </userContext.Provider>
  );
}