import { MenuItem } from '../../types';
export type ActionMenuItemProps = MenuItem & {
    onClick: () => void;
};
export declare function ActionMenuItem({ icon, label, disabled, onClick }: ActionMenuItemProps): import("react/jsx-runtime").JSX.Element;
