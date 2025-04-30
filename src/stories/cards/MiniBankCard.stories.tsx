import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { bankLogos, cardTypeIcons, MiniBankCard } from '@/components/mini-bank-card';

export default {
  title: 'Cards/MiniBankCard',
  component: MiniBankCard,
  argTypes: {
    cardNum: { control: 'text' },
    bankCode: {
      control: { type: 'select' },
      options: [...Object.keys(bankLogos)],
    },
    cardType: {
      control: { type: 'select' },
      options: [...Object.keys(cardTypeIcons)],
    },
    disabled: { type: 'boolean' },
  },
} as Meta<typeof MiniBankCard>;

const Template: StoryFn<typeof MiniBankCard> = args => <MiniBankCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNum: '7777',
  bankCode: 'click',
  cardType: 'cashback',
};
