import React, { useState, useContext } from "react";

const AsideContext = React.createContext();

export const AsideProvider = ({ children }) => {
  const [openAside, setOpenAside] = useState(false);
  return (
    <AsideContext.Provider value={{ openAside, setOpenAside }}>
      {children}
    </AsideContext.Provider>
  );
};

export const useAside = () => useContext(AsideContext);
