import { Meta, StoryFn } from '@storybook/react';
import { MainMenu } from '@/components/menu';
import { defaultMainMenu } from './constants';

export default {
  title: 'Navigation_Layout/MainMenu',
  component: MainMenu,
  argTypes: {},
} as Meta<typeof MainMenu>;

const Template: StoryFn<typeof MainMenu> = args => <MainMenu {...args} />;

export const FullMenu = Template.bind({});
FullMenu.args = {
  items: defaultMainMenu,
  defaultActiveKey: 'main',
};

export const FourMenuItems = Template.bind({});
FourMenuItems.args = {
  items: defaultMainMenu.slice(0, 4),
  defaultActiveKey: 'main',
};

export const ThreeMenuItems = Template.bind({});
ThreeMenuItems.args = {
  items: defaultMainMenu.slice(0, 3),
  defaultActiveKey: 'main',
};

export const TwoMenuItems = Template.bind({});
TwoMenuItems.args = {
  items: defaultMainMenu.slice(0, 2),
  defaultActiveKey: 'main',
};
