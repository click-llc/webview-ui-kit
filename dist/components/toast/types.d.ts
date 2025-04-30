export declare const TOAST_TYPES: {
    error: string;
    info: string;
    success: string;
    warning: string;
};
export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
