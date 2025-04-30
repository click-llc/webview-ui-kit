export type BannerSliderProps = {
    autoplay?: boolean;
    autoplayInterval?: number;
    slides: {
        id: number | string;
        image: string;
    }[];
};
export declare const BannerSlider: ({ autoplay, autoplayInterval, slides }: BannerSliderProps) => import("react/jsx-runtime").JSX.Element;
