import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { CounterColor, CounterSize } from './types';
export type CounterProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & PropsWithChildren & {
    size: CounterSize;
    color: CounterColor;
};
export declare const Counter: ({ className, size, color, style, children, ...restProps }: CounterProps) => import("react/jsx-runtime").JSX.Element;
