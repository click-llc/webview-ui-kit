import { Meta, StoryFn } from '@storybook/react';
import { BaseCellButton, CELL_BUTTON_SIZES } from '@/components/cell-buttons';
import RightArrow from '@/components/cell-buttons/icons/arrow-right.svg?react';
import ClickLogo from '@/components/cell-buttons/icons/click-logo.svg?react';
import DefaultImage from '@/components/cell-buttons/icons/default-image.png';
import { CheckBox } from '@/components/check-box';
import { RadioButton } from '@/components/radio-button';

export default {
  title: 'Buttons_Actions/BaseCellButton',
  component: BaseCellButton,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    onClick: { action: 'clicked' },
    size: { options: [CELL_BUTTON_SIZES.MEDIUM, CELL_BUTTON_SIZES.SMALL], control: { type: 'radio' } },
    titleWeight: { options: ['bold', 'normal'], control: { type: 'radio' } },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof BaseCellButton>;

const Template: StoryFn<typeof BaseCellButton> = args => <BaseCellButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: CELL_BUTTON_SIZES.MEDIUM,
  disabled: false,
  title: 'Cell button title',
  description: 'Cell button description',
  titleWeight: 'bold',
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

export const WithChevron = Template.bind({});
WithChevron.args = {
  ...WithIcon.args,
  actions: <RightArrow color="#76787A" width={16} height={16} />,
};

export const WithRadioButton = Template.bind({});
WithRadioButton.args = {
  ...WithImage.args,
  actions: <RadioButton />,
};

export const WithCheckBox = Template.bind({});
WithCheckBox.args = {
  ...WithIcon.args,
  actions: <CheckBox />,
};
