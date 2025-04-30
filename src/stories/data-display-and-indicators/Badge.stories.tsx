import { Meta, StoryObj } from '@storybook/react';
import { Badge, BADGE_POSITIONS, BADGE_TYPES } from '@/components/badge';

const meta: Meta<typeof Badge> = {
  title: 'DataDisplayIndicators/Badge',
  component: Badge,
  argTypes: {
    type: { control: 'select', options: [undefined, ...Object.values(BADGE_TYPES)] },
    size: { control: 'select' },
    position: { control: 'select', options: [undefined, ...Object.values(BADGE_POSITIONS)] },
    isIcon: { control: 'boolean' },
  },
  args: {
    type: BADGE_TYPES.primary,
    size: 'medium',
    position: BADGE_POSITIONS.left,
    isIcon: true,
    children: <span>Badge</span>,
  },
};

export default meta;

export const Default: StoryObj<typeof Badge> = {
  args: {},
};
