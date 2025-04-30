import { InputHTMLAttributes, ReactNode } from 'react';
export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    error?: boolean;
    helperText?: string;
    icon?: ReactNode;
    isTransparent?: boolean;
    label?: string;
    nativeInputClassName?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
};
export declare const Input: ({ className, disabled, error, helperText, icon, label, nativeInputClassName, prefix, suffix, ...rest }: InputProps) => import("react/jsx-runtime").JSX.Element;
