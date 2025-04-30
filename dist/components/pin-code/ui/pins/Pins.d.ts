export type PinsProps = {
    className?: string;
    helperText?: string;
    isError?: boolean;
    isLoading?: boolean;
    numbers: number[];
    pinLength?: number;
};
export declare const Pins: ({ className, helperText, isError, isLoading, numbers, pinLength, ...rest }: PinsProps) => import("react/jsx-runtime").JSX.Element;
