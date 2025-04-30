import { alertType } from '../constants';
export type AlertIconProps = {
    statusType?: (typeof alertType)[keyof typeof alertType];
};
export declare const AlertIcon: ({ statusType }: AlertIconProps) => import("react/jsx-runtime").JSX.Element | null;
