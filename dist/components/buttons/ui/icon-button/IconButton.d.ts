import { BaseButtonProps } from '../base-button/BaseButton';
type Props = Omit<BaseButtonProps, 'size'> & {
    isPrimary?: boolean;
    size?: BaseButtonProps['size'] | 'auto';
};
export declare const IconButton: ({ size, isPrimary, className, ...restProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
