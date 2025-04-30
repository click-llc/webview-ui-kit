import { Meta, StoryFn } from '@storybook/react';
import { CELL_BUTTON_SIZES, CheckboxCellButton } from '@/components/cell-buttons';
import ClickLogo from '@/components/cell-buttons/icons/click-logo.svg?react';
import DefaultImage from '@/components/cell-buttons/icons/default-image.png';

export default {
  title: 'Buttons_Actions/CheckboxCell',
  component: CheckboxCellButton,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    size: { options: [CELL_BUTTON_SIZES.MEDIUM, CELL_BUTTON_SIZES.SMALL], control: { type: 'radio' } },
    titleWeight: { options: ['bold', 'normal'], control: { type: 'radio' } },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof CheckboxCellButton>;

const Template: StoryFn<typeof CheckboxCellButton> = args => <CheckboxCellButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: CELL_BUTTON_SIZES.MEDIUM,
  disabled: false,
  title: 'Cell button title',
  description: 'Cell button description',
  titleWeight: 'bold',
  selected: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <ClickLogo />,
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  icon: <img src={DefaultImage} alt="default" style={{ borderRadius: '8px' }} />,
};
