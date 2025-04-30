import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonSize } from '../../types';
export type BaseButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: ButtonSize;
    className?: string;
    isFull?: boolean;
};
export declare const BaseButton: ({ children, size, isFull, className, style, ...restProps }: BaseButtonProps) => import("react/jsx-runtime").JSX.Element;
