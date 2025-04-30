import { HTMLAttributes } from 'react';
import { ChipProps } from './Chip';
export type ChipsProps = HTMLAttributes<HTMLDivElement> & {
    chips: ChipProps[];
};
export declare const Chips: ({ chips, ...rest }: ChipsProps) => import("react/jsx-runtime").JSX.Element;
