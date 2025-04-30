import { BaseCellButtonProps } from '../../types';
export type RadioCellButtonProps = BaseCellButtonProps & {
    selected: boolean;
    onClick: (isSelected: boolean) => void;
    onCheckBoxChange?: (isChecked: boolean) => void;
};
export declare function RadioCellButton({ selected, disabled, onClick, actions, onCheckBoxChange, ...restProps }: RadioCellButtonProps): import("react/jsx-runtime").JSX.Element;
