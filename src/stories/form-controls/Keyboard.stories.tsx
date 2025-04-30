import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Keyboard } from '@/components/pin-code';

const meta: Meta<typeof Keyboard> = {
  title: 'FormControls/Keyboard',
  component: Keyboard,
};

export default meta;

type Story = StoryObj<typeof Keyboard>;

export const Default: Story = {
  args: {
    button: {
      onClick: fn(),
      disabledBackspace: false,
      disabledBiometrics: false,
    },
  },
};

// import { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { Keyboard as KeyboardComponent } from './ui/keyboard/Keyboard';
//
// const meta: Meta<typeof KeyboardComponent> = {
//   title: 'PinCode/Keyboard',
//   component: KeyboardComponent,
//   argTypes: {},
//   args: {
//     button: {
//       onClick: fn(),
//       disabledBackspace: false,
//       disabledBiometrics: false,
//     },
//   },
// };
//
// export default meta;
//
// export const Keyboard: StoryObj<typeof KeyboardComponent> = {};
