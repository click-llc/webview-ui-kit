import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
export type PageControlsItemProps<T> = {
    id: string;
    className: string | undefined;
    item: T;
    index: number;
    activeIndex: number;
    onClick: (index: number) => void;
};
export type PageControlsProps<T> = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & PropsWithChildren & {
    classNames?: {
        container?: string;
        item?: string;
    };
    data: T[];
    initIndex: number;
    itemId: string;
    itemScrollParams: {
        isEnabled: boolean;
        options?: boolean | globalThis.ScrollIntoViewOptions;
    };
    onChangeIndex?: (index: number) => void;
    renderItem?: (props: PageControlsItemProps<T>) => ReactNode;
};
export declare const PageControls: <T>({ classNames, data, initIndex, itemId, itemScrollParams, onChangeIndex, renderItem, ...restProps }: PageControlsProps<T>) => import("react/jsx-runtime").JSX.Element;
