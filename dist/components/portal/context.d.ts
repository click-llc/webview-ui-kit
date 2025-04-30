import { ReactNode } from 'react';
type PortalContextType = {
    setPortalContent: (content: ReactNode) => void;
};
export declare const PortalContext: import('react').Context<PortalContextType | undefined>;
export {};
