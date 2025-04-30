export declare const BADGE_SIZE: {
    readonly small: 12;
    readonly medium: 16;
    readonly large: 24;
};
export type BadgeSizeKeys = keyof typeof BADGE_SIZE;
export declare const POSITIONS: {
    readonly left: "left";
    readonly right: "right";
};
export type BadgePosition = (typeof POSITIONS)[keyof typeof POSITIONS];
export declare const BADGE_TYPES: {
    accent: string;
    attention: string;
    error: string;
    primary: string;
    secondary: string;
    success: string;
};
export type BadgeType = (typeof BADGE_TYPES)[keyof typeof BADGE_TYPES];
