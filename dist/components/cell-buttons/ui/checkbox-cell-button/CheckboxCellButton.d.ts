import { BaseCellButtonProps } from '../../types';
export type CheckboxCellButtonProps = BaseCellButtonProps & {
    selected: boolean;
    onClick: (isSelected: boolean) => void;
    onCheckBoxChange?: (isChecked: boolean) => void;
};
export declare function CheckboxCellButton({ selected, disabled, onClick, actions, onCheckBoxChange, ...restProps }: CheckboxCellButtonProps): import("react/jsx-runtime").JSX.Element;
