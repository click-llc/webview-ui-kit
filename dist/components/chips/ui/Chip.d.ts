import { ButtonHTMLAttributes } from 'react';
export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean;
    isMenu?: boolean;
};
export declare const Chip: ({ value, isActive, isMenu, disabled, className, ...rest }: ChipProps) => import("react/jsx-runtime").JSX.Element;
