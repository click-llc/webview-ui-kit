export const BADGE_SIZE = {
  small: 12,
  medium: 16,
  large: 24,
} as const;

export type BadgeSizeKeys = keyof typeof BADGE_SIZE;

export const POSITIONS = {
  left: 'left',
  right: 'right',
} as const;

export type BadgePosition = (typeof POSITIONS)[keyof typeof POSITIONS];

export const BADGE_TYPES = {
  accent: 'accent',
  attention: 'attention',
  error: 'error',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
};

export type BadgeType = (typeof BADGE_TYPES)[keyof typeof BADGE_TYPES];
