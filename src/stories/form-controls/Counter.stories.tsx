import { Meta, StoryFn } from '@storybook/react';
import { Counter, CounterProps } from '@/components/counter';

export default {
  title: 'FormControls/Counter',
  component: Counter,
  argTypes: {
    size: { control: 'radio' },
    color: { control: 'select' },
  },
} as Meta<typeof Counter>;

const Template: StoryFn<CounterProps> = args => <Counter {...args}>1</Counter>;

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  color: 'accent',
};
