import { LabelPosition } from './constants';
export type SwitchCheckboxProps = {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    labelPosition?: LabelPosition;
    onChange?: (checked: boolean) => void;
};
