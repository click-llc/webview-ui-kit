export const labelPositions = {
  right: 'right',
  bottom: 'bottom',
} as const;

export type LabelPosition = (typeof labelPositions)[keyof typeof labelPositions];
