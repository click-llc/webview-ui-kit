export const BALANCE_SIZES = {
  m: 'm',
  s: 's',
  x: 'x',
  xl: 'xl',
  xs: 'xs',
};

export type BalanceSizeType = (typeof BALANCE_SIZES)[keyof typeof BALANCE_SIZES];
