import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '@/components/input';
import ChevronDownIcon from '@/components/input/icons/chevron-down.svg?react';
import UserIcon from '@/components/input/icons/user.svg?react';
import { SvgIcon } from '@/components/SvgIcon';

const meta: Meta<typeof Input> = {
  title: 'FormControls/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    isTransparent: { control: 'boolean' },
    placeholder: { control: 'text' },

    onChange: { action: 'changed' },
  },
  args: {
    disabled: false,
    error: false,
    isTransparent: false,
    placeholder: 'Placeholder text',
  },
} as Meta<typeof Input>;

export default meta;

export const Icon: StoryObj<InputProps> = {
  args: {
    icon: (
      <>
        <SvgIcon icon={<ChevronDownIcon />} width={16} height={16} />
        <SvgIcon icon={<UserIcon />} width={24} height={24} />
      </>
    ),
  },
};

export const SideText: StoryObj<typeof Input> = {
  args: {
    suffix: <span>Usd</span>,
  },
};
