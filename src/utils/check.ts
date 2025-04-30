export const isSingleDigit = (val: string | number | null | undefined): boolean => {
  return /^[0-9]$/.test(String(val));
};

export const isNumeric = (val: unknown): val is number | string => {
  return !isNaN(Number(val)) && isFinite(Number(val));
};
