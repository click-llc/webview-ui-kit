import { ReactNode } from 'react';
export type AlertActionsProps = {
    actions?: ReactNode;
    primaryButton?: {
        title: string;
        onClick: () => void;
    };
    secondaryButton?: {
        title: string;
        onClick: () => void;
    };
};
export declare const AlertActions: ({ secondaryButton, primaryButton, actions }: AlertActionsProps) => import("react/jsx-runtime").JSX.Element;
