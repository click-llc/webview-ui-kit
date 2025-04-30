import { InputHTMLAttributes, ReactNode } from 'react';
import { POSITIONS } from '../../../constants/positions';
export type Position = (typeof POSITIONS)[keyof typeof POSITIONS];
export type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    disabled?: boolean;
    position?: Position;
    selected?: boolean;
    label?: ReactNode;
};
