import { Meta, StoryObj } from '@storybook/react';
import { Balance, BALANCE_SIZES } from '@/components/balance';

const meta: Meta<typeof Balance> = {
  title: 'DataDisplayIndicators/Balance',
  component: Balance,
  argTypes: {
    amount: { control: 'number' },
    currency: { control: 'text' },
    size: { control: 'select', options: [undefined, ...Object.values(BALANCE_SIZES)] },
  },
  args: {
    size: 'xs',
  },
};

export default meta;

export const Default: StoryObj<typeof Balance> = {
  args: {
    amount: 12_091_996.28,
  },
};
