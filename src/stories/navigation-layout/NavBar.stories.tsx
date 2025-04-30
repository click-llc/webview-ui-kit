import { Meta, StoryFn } from '@storybook/react';
import { NavBar, NavBarProps } from '@/components/nav-bar';

export default {
  title: 'Navigation_Layout/NavBar',
  component: NavBar,
  argTypes: {
    title: { description: 'Prop to set your own title', control: 'text' },
    subtitle: { control: 'text' },
  },
} as Meta<typeof NavBar>;

const Template: StoryFn<NavBarProps> = args => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'NavBar',
  subtitle: 'Additional Text',
  isTransparent: false,
  leftSlot: <span>Left element</span>,
  rightSlot: <span>Right element</span>,
};
