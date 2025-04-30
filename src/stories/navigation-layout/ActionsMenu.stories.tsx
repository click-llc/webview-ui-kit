import { Meta, StoryFn } from '@storybook/react';
import { ActionsMenu } from '@/components/menu';
import { defaultActionsMenu } from './constants';

export default {
  title: 'Navigation_Layout/ActionsMenu',
  component: ActionsMenu,
  argTypes: {},
} as Meta<typeof ActionsMenu>;

const Template: StoryFn<typeof ActionsMenu> = args => <ActionsMenu {...args} />;

export const FullMenuActions = Template.bind({});
FullMenuActions.args = {
  items: defaultActionsMenu,
};

export const ThreeMenuActions = Template.bind({});
ThreeMenuActions.args = {
  items: defaultActionsMenu.slice(0, 3),
};
