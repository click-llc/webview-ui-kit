import { BaseProps } from '../../types';
import { BaseProgressBar } from '../base-progress-bar/BaseProgressBar';

export const PercentageProgressBar = ({ progress, ...restProps }: BaseProps) => {
  return <BaseProgressBar {...restProps} progress={progress} displayValue={`${progress}%`} />;
};
