import { Meta, StoryFn } from '@storybook/react';
import { Chip, type ChipProps, Chips, type ChipsProps } from '@/components/chips';

const meta: Meta<typeof Chips> = {
  title: 'FormControls/Chips',
  component: Chips,
  subcomponents: { Chip },
  argTypes: {
    // для <Chip>
    value: { control: 'text' },
    isMenu: { control: 'boolean' },
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },

    // если хотите добавить контролы и для <Chips>
    items: { control: 'object' },
    onChange: { action: 'changed' },
  },
} as Meta<typeof Chips>;

export default meta;

const SingleTemplate: StoryFn<ChipProps> = args => <Chip {...args} />;
export const ChipStory = SingleTemplate.bind({});
ChipStory.storyName = 'Chip';
ChipStory.args = {
  value: 'Chip',
  isMenu: false,
  isActive: true,
  disabled: false,
};

const GroupTemplate: StoryFn<ChipsProps> = args => <Chips {...args} />;
export const ChipsStory = GroupTemplate.bind({});
ChipsStory.storyName = 'Chips';
ChipsStory.args = {
  chips: [
    { value: 'Chip', isMenu: false, isActive: true, disabled: false },
    { value: 'Chip', isMenu: false, isActive: true, disabled: false },
    { value: 'Chip', isMenu: false, isActive: true, disabled: false },
    { value: 'Chip', isMenu: false, isActive: true, disabled: false },
    { value: 'Chip', isMenu: false, isActive: true, disabled: false },
  ] satisfies ChipProps[],
};
