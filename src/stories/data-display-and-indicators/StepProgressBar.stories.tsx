import { Meta, StoryFn } from '@storybook/react';
import { StepsProgressBar, StepsProgressBarProps } from '@/components/progress-bar';

export default {
  title: 'DataDisplayIndicators/StepProgressBar',
  component: StepsProgressBar,
  argTypes: {
    title: { control: 'text' },
    progress: { control: 'number' },
    className: { control: 'text' },
    displayValue: {
      table: { disable: true },
    },
    type: {
      table: { disable: true },
    },
  },
} as Meta<StepsProgressBarProps>;

const Template: StoryFn<typeof StepsProgressBar> = args => <StepsProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Steps',
  progress: 4,
  totalSteps: 10,
};
