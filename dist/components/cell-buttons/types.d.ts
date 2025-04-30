import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { SIZES, STATUSES } from './constants';
export type Sizes = (typeof SIZES)[keyof typeof SIZES];
export type Statuses = (typeof STATUSES)[keyof typeof STATUSES];
export type BaseCellButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & {
    actions?: ReactNode;
    description?: string;
    icon?: ReactNode;
    size?: Sizes;
    title: string;
    titleWeight?: 'bold' | 'normal';
};
