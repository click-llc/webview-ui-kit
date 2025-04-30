import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PinCode } from '@/components/pin-code';

const meta: Meta<typeof PinCode> = {
  title: 'FormControls/PinCode',
  component: PinCode,
};

export default meta;

type Story = StoryObj<typeof PinCode>;

export const Default: Story = {
  args: {
    pinsProps: {
      numbers: [],
      pinLength: 5,
      isLoading: false,
      isError: false,
      helperText: '',
    },
    keyboardProps: {
      button: {
        onClick: fn(),
        disabledBackspace: false,
        disabledBiometrics: false,
      },
    },
  },
};
