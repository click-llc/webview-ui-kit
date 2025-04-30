import { MenuItem } from '../../types';
export type MainMenuProps = {
    items: MenuItem[];
    className?: string;
    defaultActiveKey?: string;
    onClick?: (menuKey: string) => void;
};
export declare function MainMenu({ defaultActiveKey, items, className, onClick }: MainMenuProps): import("react/jsx-runtime").JSX.Element;
