import { DefaultDrawerProps, DrawerAnchor } from '../types';
type Props = DefaultDrawerProps & {
    className?: string;
    anchor?: DrawerAnchor;
};
export declare const Animated: ({ children, drawerRef, height, className, anchor, onClose }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
