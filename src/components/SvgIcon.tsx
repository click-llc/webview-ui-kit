import { cloneElement, isValidElement, ReactElement, SVGProps } from 'react';

export type SvgIconProps = {
  width?: number;
  height?: number;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  className?: string;
};

export const SvgIcon = ({ icon, width = 24, height = 24, className = '' }: SvgIconProps) => {
  const iconWithProps = isValidElement(icon) ? cloneElement(icon, { width, height, className }) : icon;

  return <>{iconWithProps}</>;
};
