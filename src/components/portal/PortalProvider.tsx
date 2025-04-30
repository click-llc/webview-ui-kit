import { PropsWithChildren, ReactNode, useState } from 'react';
import { PortalContext } from './context';

type Props = PropsWithChildren & {};

export const PortalProvider = ({ children }: Props) => {
  const [portalContent, setPortalContent] = useState<ReactNode>(null);

  return (
    <PortalContext.Provider value={{ setPortalContent }}>
      {children}
      <div id="portal-root">{portalContent}</div>
    </PortalContext.Provider>
  );
};
