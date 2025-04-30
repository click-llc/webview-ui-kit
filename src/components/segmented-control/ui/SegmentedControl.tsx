import { useState } from 'react';
import clsx from 'clsx';
import { SegmentedControlProps } from '../types';
import { Tab, type TabProps } from './Tab';

import styles from './segmentedContol.module.scss';

export function SegmentedControl({
  className,
  defaultActiveValue,
  disabled,
  options,
  onChange,
}: SegmentedControlProps) {
  const [activeValue, setActiveValue] = useState(defaultActiveValue);

  const handleTabClick: TabProps['onClick'] = activeKey => {
    setActiveValue(activeKey);
    onChange?.(activeKey);
  };

  return (
    <div className={clsx(styles.segments, className)}>
      {options.map(tab => (
        <Tab
          {...tab}
          key={tab.value}
          disabled={tab.disabled || disabled}
          isActive={activeValue === tab.value}
          onClick={handleTabClick}
        />
      ))}
    </div>
  );
}
