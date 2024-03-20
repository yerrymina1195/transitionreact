import React, { createContext, useState,useContext } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [preset, setPreset] = useState("fall");
  const [enterAnimation, setEnterAnimation] = useState("");
  const [exitAnimation, setExitAnimation] = useState("");

  return (
    <AppContext.Provider value={{
      preset,
      enterAnimation,
      exitAnimation,
      setPreset,
      setEnterAnimation,
      setExitAnimation
    }}>
    {children}
  </AppContext.Provider>
  );
};


export const useStateContext = () => useContext(AppContext);