export const COUNTER_SIZES = {
  lg: 20,
  md: 16,
  sm: 12,
} as const;

export type CounterSize = keyof typeof COUNTER_SIZES;

export type CounterColor = 'accent' | 'secondary';
