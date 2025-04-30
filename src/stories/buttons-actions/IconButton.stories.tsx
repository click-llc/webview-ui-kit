import { Meta, StoryFn } from '@storybook/react';
import { BUTTON_SIZES, IconButton } from '@/components/buttons';

export default {
  title: 'Buttons_Actions/IconButton',
  component: IconButton,
  argTypes: {
    size: { control: 'radio', options: Object.keys(BUTTON_SIZES) },
    isPrimary: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = args => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  isPrimary: false,
  children: 'ICON',
};
