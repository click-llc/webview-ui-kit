import { StepsProps } from '../../types';
import { BaseProgressBar } from '../base-progress-bar/BaseProgressBar';

export const StepsProgressBar = ({ progress, totalSteps, ...restProps }: StepsProps) => {
  const stepProgress = Math.min(Math.max(Math.floor((progress / totalSteps) * 100), 0), 100);

  return <BaseProgressBar {...restProps} progress={stepProgress} displayValue={`${progress}/${totalSteps}`} />;
};
