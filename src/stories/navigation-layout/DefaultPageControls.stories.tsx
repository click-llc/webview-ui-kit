import { Meta, StoryFn } from '@storybook/react';
import { PageControls } from '@/components/page-controls';

export default {
  title: 'Navigation_Layout/PageControls',
  component: PageControls,
  argTypes: {
    classNames: { control: 'object' },
    data: { control: 'object' },
    initIndex: { control: 'number' },
    itemId: { control: 'text' },
    itemScrollParams: { control: 'object' },
  },
} as Meta<typeof PageControls>;

const Template: StoryFn<typeof PageControls> = args => <PageControls {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: Array.from({ length: 200 }),
  initIndex: 0,
};
