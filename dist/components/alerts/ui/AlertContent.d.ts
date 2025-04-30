import { PropsWithChildren } from 'react';
export type AlertContentProps = PropsWithChildren & {
    title: string;
    description: string;
    width?: number | 'auto' | '100%';
};
export declare const AlertContent: ({ children, title, description }: AlertContentProps) => import("react/jsx-runtime").JSX.Element;
