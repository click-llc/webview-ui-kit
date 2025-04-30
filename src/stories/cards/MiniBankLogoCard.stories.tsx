import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { cardTypeIconsMedium, MiniBankLogoCard } from '@/components/mini-bank-card';

export default {
  title: 'Cards/MiniBankLogoCard',
  component: MiniBankLogoCard,
  argTypes: {
    cardType: {
      control: { type: 'select' },
      options: [...Object.keys(cardTypeIconsMedium)],
    },
    disabled: { type: 'boolean' },
  },
} as Meta<typeof MiniBankLogoCard>;

const Template: StoryFn<typeof MiniBankLogoCard> = args => <MiniBankLogoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardType: 'uzcard',
};
