import { ButtonHTMLAttributes, ReactNode } from 'react';
import { MiniCardProps } from '../../mini-bank-card';
export type BankCardCellProps = MiniCardProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    actions?: ReactNode;
    balance: number | string;
    cardName: string;
    currency?: string;
    fallbackText?: string;
    warningText?: string;
};
export declare function BankCardCell({ actions, balance, cardName, className, currency, disabled, fallbackText, warningText, ...miniCardProps }: BankCardCellProps): import("react/jsx-runtime").JSX.Element;
