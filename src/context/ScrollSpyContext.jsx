import { createContext, useContext } from "react";
import { useScrollSpy } from "../hooks/UseScrollSpy";

const ScrollSpyContext = createContext(null);

const SECTIONS = ["servicos", "cases", "planos", "sobre"];

export function ScrollSpyProvider({ children }) {
  const activeSection = useScrollSpy(SECTIONS);

  return (
    <ScrollSpyContext.Provider value={activeSection}>
      {children}
    </ScrollSpyContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ScrollSpyContext);
}
