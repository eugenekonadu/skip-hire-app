import { createContext, useContext, useState } from "react";

export const LayoutContext = createContext();

export function useLayout() {
  return useContext(LayoutContext);
}

export function LayoutProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ collapsed, setCollapsed, mobileNavOpen, setMobileNavOpen }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
