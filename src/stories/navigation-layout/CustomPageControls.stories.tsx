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

export const Custom = Template.bind({});
Custom.args = {
  classNames: {
    container: undefined,
    item: undefined,
  },
  data: Array.from({ length: 100 }),
  initIndex: 5,
  renderItem: ({ item, index, activeIndex, onClick, ...restProps }) => {
    return (
      <span
        {...restProps}
        style={{
          backgroundColor: index === activeIndex ? 'red' : 'blue',
          color: 'white',
          borderRadius: '4px',
          minWidth: 20,
          textAlign: 'center',
        }}
        onClick={() => onClick(index)}
      >
        {index}
      </span>
    );
  },
};
