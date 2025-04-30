import { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonSize } from '../../../types';
export type BaseLinkButtonProps = PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement> & {
    size?: ButtonSize;
    className?: string;
    isFull?: boolean;
};
export declare const LinkBaseButton: ({ children, size, isFull, className, style, ...restProps }: BaseLinkButtonProps) => import("react/jsx-runtime").JSX.Element;
