import { ReactElement, SVGProps } from 'react';
export type SvgIconProps = {
    width?: number;
    height?: number;
    icon: ReactElement<SVGProps<SVGSVGElement>>;
    className?: string;
};
export declare const SvgIcon: ({ icon, width, height, className }: SvgIconProps) => import("react/jsx-runtime").JSX.Element;
