import { PropsWithChildren } from 'react';
import { BadgePosition, BadgeSizeKeys, BadgeType } from './types';
type BadgeProps = PropsWithChildren & {
    className?: string;
    isIcon?: boolean;
    position?: BadgePosition;
    size?: BadgeSizeKeys;
    type?: BadgeType;
};
export declare const Badge: ({ children, className, isIcon, position, size, type, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
