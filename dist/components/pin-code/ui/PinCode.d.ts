import { KeyboardProps } from './keyboard/Keyboard';
import { PinsProps } from './pins/Pins';
export type PinCodeProps = {
    className?: string;
    keyboardProps?: KeyboardProps;
    pinsProps?: PinsProps;
    onFilled?: (pin: number) => void;
    onBiometricsClick?: () => void;
    onBackspaceClick?: () => void;
};
export declare const PinCode: ({ className, keyboardProps, pinsProps, onBackspaceClick, onBiometricsClick, ...rest }: PinCodeProps) => import("react/jsx-runtime").JSX.Element;
