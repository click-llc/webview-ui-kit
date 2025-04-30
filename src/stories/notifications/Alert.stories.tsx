import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Alert, AlertProps, alertType } from '@/components/alerts';

export default {
  title: 'Notifications/Alert',
  component: Alert,
  argTypes: {
    title: { control: 'text', defaultValue: 'Alert Title' },
    description: { control: 'text', defaultValue: 'Alert Description' },
    statusType: {
      control: { type: 'select' },
      options: [undefined, ...Object.values(alertType)],
    },
    width: {
      control: { type: 'select' },
      options: ['auto', '100%', 200, 300, 400],
      defaultValue: 200,
    },
    // Для primaryButton используем control: 'object'
    primaryButton: {
      control: 'object',
      defaultValue: { title: 'Primary Button' },
      description: 'Объект, содержащий { title: string; onClick: () => void }',
    },
    // Для отслеживания onClick в primaryButton используем точечную нотацию
    'primaryButton.onClick': {
      action: 'primaryButton onClick',
      table: { disable: true }, // скрыть из таблицы, чтобы не дублировать
    },
    // Аналогично для secondaryButton
    secondaryButton: {
      control: 'object',
      defaultValue: { title: 'Secondary Button' },
      description: 'Объект, содержащий { title: string; onClick: () => void }',
    },
    'secondaryButton.onClick': {
      action: 'secondaryButton onClick',
      table: { disable: true },
    },
  },
} as Meta<typeof Alert>;

const Template: StoryFn<AlertProps> = args => (
  <Alert {...args}>
    <>
      <strong>Alert:</strong> Your message here!
    </>
  </Alert>
);

export const Primary = Template.bind({});
Primary.args = {};
