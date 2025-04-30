import { Meta, StoryObj } from '@storybook/react';
import { Pins, type PinsProps } from '@/components/pin-code';

const meta: Meta<typeof Pins> = {
  title: 'FormControls/Pins',
  component: Pins,
};

export default meta;

type Story = StoryObj<PinsProps>;

export const Base: Story = {
  args: {
    helperText: '',
    isError: false,
    isLoading: false,
    numbers: [5, 0],
    pinLength: 5,
  },
};
