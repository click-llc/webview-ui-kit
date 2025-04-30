import { MenuItem } from '../../types';
export type ActionsMenuProps = {
    className?: string;
    items: MenuItem[];
    onClick?: (menuKey: string) => void;
};
export declare function ActionsMenu({ items, className, onClick }: ActionsMenuProps): import("react/jsx-runtime").JSX.Element;
