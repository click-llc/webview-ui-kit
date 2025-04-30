import React from 'react';
import { Meta } from '@storybook/react';
import { CheckBox, CheckBoxProps } from '@/components/check-box';
import { POSITIONS } from '@/constants/positions';

export default {
  title: 'FormControls/CheckBox',
  component: CheckBox,
  argTypes: {
    position: { options: [POSITIONS.LEFT, POSITIONS.RIGHT], control: { type: 'radio' } },
    disabled: { control: 'boolean' },
    selected: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<CheckBoxProps>;

// теперь bind даст функцию, у которой name — обязательно configurable
export const Base = {
  render: (args: CheckBoxProps) => <CheckBox {...args} />,
  args: {
    position: POSITIONS.LEFT,
    disabled: false,
    selected: false,
    label: 'Label Text',
  },
};
