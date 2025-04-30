import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioButton } from '@/components/radio-button';
import { POSITIONS } from '@/constants/positions';

export default {
  title: 'FormControls/RadioButton',
  component: RadioButton,
  argTypes: {
    position: {
      options: [POSITIONS.LEFT, POSITIONS.RIGHT],
      control: { type: 'radio' },
    },
    disabled: { control: 'boolean' },
    selected: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = args => <RadioButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  position: POSITIONS.LEFT,
  disabled: false,
  selected: false,
  label: 'Label Text',
};
