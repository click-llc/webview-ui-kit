import { InputHTMLAttributes, ReactNode } from 'react';
import { POSITIONS } from '@/constants/positions';

export type Position = (typeof POSITIONS)[keyof typeof POSITIONS];

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  position?: Position;
  selected?: boolean;
};
