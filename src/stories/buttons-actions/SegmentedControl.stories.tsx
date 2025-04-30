import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from '@/components/segmented-control';
import PlusIcon from '@/components/segmented-control/icon/plus.svg?react';
import { SvgIcon } from '@/components/SvgIcon';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Buttons_Actions/SegmentedControl',
  component: SegmentedControl,
  argTypes: {
    disabled: { control: 'boolean' },

    defaultActiveValue: { control: 'text' },
    onChange: { action: 'changed' },
  },
  args: {
    disabled: false,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    defaultActiveValue: 'option1',
  },
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: args => {
    return (
      <SegmentedControl
        {...args}
        onChange={newVal => {
          action('onChange')(newVal);
        }}
      />
    );
  },
};

export const TwoOptions: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ],
    defaultActiveValue: 'option2',
  },
  render: Default.render,
};

export const WithIcons: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option 1', icon: <SvgIcon icon={<PlusIcon />} width={16} height={16} /> },
      { value: 'option2', label: 'Option 2', icon: <SvgIcon icon={<PlusIcon />} width={16} height={16} /> },
      { value: 'option3', label: 'Option 3', icon: <SvgIcon icon={<PlusIcon />} width={16} height={16} /> },
    ],
  },
  render: Default.render,
};

export const ManyOptions: Story = {
  args: {
    options: [
      { value: 'option1', label: 'Option' },
      { value: 'option2', label: 'Option' },
      { value: 'option3', label: 'Option', disabled: true },
      { value: 'option4', label: 'Option' },
    ],
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: Default.render,
};
