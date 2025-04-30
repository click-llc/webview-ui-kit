import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseButton } from '@/components/buttons';

export default {
  title: 'Buttons_Actions/BaseButton',
  component: BaseButton,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof BaseButton>;

const Template: StoryFn<typeof BaseButton> = args => <BaseButton {...args}>Base Button</BaseButton>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
};
