import { createContext, ReactNode } from 'react';

type PortalContextType = {
  setPortalContent: (content: ReactNode) => void;
};

export const PortalContext = createContext<PortalContextType | undefined>(undefined);
