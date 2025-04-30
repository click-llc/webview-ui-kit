import { MouseEvent } from 'react';
export type KeyboardProps = {
    className?: string;
    button?: {
        onClick?: (name: string, event: MouseEvent<HTMLButtonElement>) => void;
        disabledBiometrics?: boolean;
        disabledBackspace?: boolean;
    };
};
export declare const Keyboard: ({ className, button }: KeyboardProps) => import("react/jsx-runtime").JSX.Element;
