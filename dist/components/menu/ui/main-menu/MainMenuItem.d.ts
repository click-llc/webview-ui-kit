import { MenuItem } from '../../types';
export type MainMenuItemProps = MenuItem & {
    isActive?: boolean;
    onClick?: () => void;
};
export declare function MainMenuItem({ icon, label, isActive, disabled, onClick }: MainMenuItemProps): import("react/jsx-runtime").JSX.Element;
