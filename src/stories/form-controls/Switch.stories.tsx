import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Switch, SwitchProps } from '@/components/switch';
import { POSITIONS } from '@/constants/positions';

export default {
  title: 'FormControls/Switch',
  component: Switch,
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
} as Meta<typeof Switch>;

const Template: StoryFn<SwitchProps> = args => <Switch {...args} />;

export const Base = Template.bind({});
Base.args = {
  position: POSITIONS.LEFT,
  disabled: false,
  selected: false,
  label: 'Turn on/off',
};
