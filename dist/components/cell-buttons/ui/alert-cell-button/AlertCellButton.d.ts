import { BaseCellButtonProps, Statuses } from '../../types';
export type AlertCellButtonProps = BaseCellButtonProps & {
    status: Statuses;
    iconEnabled?: boolean;
};
export declare function AlertCellButton({ status, iconEnabled, className, ...restProps }: AlertCellButtonProps): import("react/jsx-runtime").JSX.Element;
