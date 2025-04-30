import { ReactNode } from 'react';
export type SegmentedControlOption = {
    value: string;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
};
export type SegmentedControlProps = {
    className?: string;
    disabled?: boolean;
    options: SegmentedControlOption[];
    defaultActiveValue?: string;
    onChange: (activeValue: SegmentedControlOption['value']) => void;
};
