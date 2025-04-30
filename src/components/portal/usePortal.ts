import { useContext } from 'react';
import { PortalContext } from './context';

export const usePortal = () => {
  const context = useContext(PortalContext);

  if (!context) {
    throw new Error('usePortal must be used within a PortalProvider');
  }

  return context;
};
