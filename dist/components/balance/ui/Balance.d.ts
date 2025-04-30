import { BalanceSizeType } from '../types';
type BalanceProps = {
    amount: number | string;
    className?: string;
    currency?: string;
    size?: BalanceSizeType;
};
export declare const Balance: ({ amount, currency, size, className }: BalanceProps) => import("react/jsx-runtime").JSX.Element;
export {};
