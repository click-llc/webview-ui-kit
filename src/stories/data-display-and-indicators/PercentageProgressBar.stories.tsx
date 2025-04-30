import { Meta, StoryFn } from '@storybook/react';
import { PercentageProgressBar, PercentageProgressBarProps } from '@/components/progress-bar';

export default {
  title: 'DataDisplayIndicators/PercentageProgressBar',
  component: PercentageProgressBar,
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
} as Meta<PercentageProgressBarProps>;

const Template: StoryFn<typeof PercentageProgressBar> = args => <PercentageProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Percentage',
  progress: 79,
};
