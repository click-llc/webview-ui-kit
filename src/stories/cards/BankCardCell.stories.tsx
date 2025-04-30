import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BankCardCell } from '@/components/bank-card-cell';
import { bankLogos, cardTypeIcons } from '@/components/mini-bank-card';
import DownArrow from '@/components/mini-bank-card/icons/down-arrow.svg?react';
import { SvgIcon } from '@/components/SvgIcon';

export default {
  title: 'Cards/BankCardCell',
  component: BankCardCell,
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
    balance: { control: 'number' },
    currency: { control: 'text' },
    warningText: { control: 'text' },
    fallbackText: { control: 'text' },
    cardName: { control: 'text' },
  },
} as Meta<typeof BankCardCell>;

const Template: StoryFn<typeof BankCardCell> = args => <BankCardCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNum: '7777',
  bankCode: 'asiaAlliance',
  cardType: 'humo',
  cardName: 'Card Name',
  balance: 13562363.21,
  actions: <SvgIcon icon={<DownArrow color="#76787A" />} width={14} height={8.4} />,
};
