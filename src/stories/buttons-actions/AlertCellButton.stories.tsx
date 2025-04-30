import { Meta, StoryFn } from '@storybook/react';
import {
  AlertCellButton,
  AlertCellButtonProps,
  CELL_BUTTON_SIZES,
  CELL_BUTTON_STATUSES,
} from '@/components/cell-buttons';

export default {
  title: 'Buttons_Actions/AlertCellButton',
  component: AlertCellButton,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    onClick: { action: 'clicked' },
    size: { options: [CELL_BUTTON_SIZES.MEDIUM, CELL_BUTTON_SIZES.SMALL], control: { type: 'radio' } },
    status: {
      options: [
        CELL_BUTTON_STATUSES.POSITIVE,
        CELL_BUTTON_STATUSES.INFO,
        CELL_BUTTON_STATUSES.WARNING,
        CELL_BUTTON_STATUSES.ERROR,
      ],
      control: { type: 'radio' },
    },
    iconEnabled: { control: 'boolean' },
    titleWeight: { options: ['bold', 'normal'], control: { type: 'radio' } },
  },
} as Meta<AlertCellButtonProps>;

const Template: StoryFn<AlertCellButtonProps> = args => <AlertCellButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: CELL_BUTTON_SIZES.MEDIUM,
  status: CELL_BUTTON_STATUSES.POSITIVE,
  disabled: false,
  title: 'Cell button title',
  description: 'Cell button description',
  titleWeight: 'bold',
};
