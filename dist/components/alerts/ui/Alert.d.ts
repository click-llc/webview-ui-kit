import { AlertActionsProps } from './AlertActions';
import { AlertContentProps } from './AlertContent';
import { AlertIconProps } from './AlertIcon';
export type AlertProps = AlertContentProps & AlertActionsProps & AlertIconProps & {};
export declare const Alert: ({ actions, children, description, primaryButton, secondaryButton, statusType, title, width, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
