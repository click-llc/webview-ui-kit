import { Meta, StoryObj } from '@storybook/react';
import { Toast, TOAST_TYPES, ToastProps } from '@/components/toast';

const meta: Meta<typeof Toast> = {
  title: 'Notifications/Toast',
  component: Toast,
  argTypes: {
    type: { control: 'select', options: [undefined, ...Object.values(TOAST_TYPES)] },
    title: { control: 'text' },
  },
  args: {
    type: 'info',
    title: 'Toast Title',
  },
};

export default meta;

export const Default: StoryObj<ToastProps> = {
  args: {},
};
