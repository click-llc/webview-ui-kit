import { ToastType } from '../types';
export type ToastProps = {
    className?: string;
    isFull?: boolean;
    title: string;
    type?: ToastType;
};
export declare const Toast: ({ type, title, isFull, className }: ToastProps) => import("react/jsx-runtime").JSX.Element;
