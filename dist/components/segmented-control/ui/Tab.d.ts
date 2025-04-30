import { SegmentedControlOption } from '../types';
export type TabProps = SegmentedControlOption & {
    isActive?: boolean;
    onClick?: (activeKey: SegmentedControlOption['value']) => void;
};
export declare const Tab: ({ value, icon, label, disabled, isActive, onClick }: TabProps) => import("react/jsx-runtime").JSX.Element;
