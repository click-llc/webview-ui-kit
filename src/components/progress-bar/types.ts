export const ProgressTypes = {
  PERCENTAGE: 'percentage',
  STEPS: 'steps',
} as const;

export type ProgressType = (typeof ProgressTypes)[keyof typeof ProgressTypes];

export type BaseProps = {
  className?: string;
  displayValue?: string;
  progress: number;
  title: string;
  type?: ProgressType;
};

export type StepsProps = BaseProps & {
  totalSteps: number;
};

export type StepsProgressBarProps = Omit<BaseProps, 'type' | 'displayValue'>;
export type PercentageProgressBarProps = Omit<BaseProps, 'type' | 'displayValue' | 'totalSteps'>;
