export const TOAST_TYPES = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
};

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];
