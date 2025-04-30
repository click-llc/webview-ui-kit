import { Meta, StoryFn } from '@storybook/react';
import { NavBarWithBackActions, NavBarWithBackActionsProps } from '@/components/nav-bar';

export default {
  title: 'Navigation_Layout/NavBarWithBackActions',
  component: NavBarWithBackActions,
  argTypes: {
    title: { description: 'Prop to set your own title', control: 'text' },
    subtitle: { control: 'text' },
  },
} as Meta<typeof NavBarWithBackActions>;

const Template: StoryFn<NavBarWithBackActionsProps> = args => <NavBarWithBackActions {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'NavBarWithBackActions',
  subtitle: 'Additional Text',
  isTransparent: false,
  rightSlot: <span>Right element</span>,
};
