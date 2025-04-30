import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ReactNode, useState } from 'react';
import clsx from 'clsx';
import { Counter } from '@/components/counter';

import styles from './PageControls.module.scss';

export type PageControlsItemProps<T> = {
  id: string;
  className: string | undefined;
  item: T;
  index: number;
  activeIndex: number;
  onClick: (index: number) => void;
};

export type PageControlsProps<T> = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  PropsWithChildren & {
    classNames?: {
      container?: string;
      item?: string;
    };
    data: T[];
    initIndex: number;
    itemId: string;
    itemScrollParams: {
      isEnabled: boolean;
      options?: boolean | globalThis.ScrollIntoViewOptions;
    };
    onChangeIndex?: (index: number) => void;
    renderItem?: (props: PageControlsItemProps<T>) => ReactNode;
  };

const DEFAULT_ITEM_ID = 'page_control';

export const PageControls = <T,>({
  classNames,
  data = [],
  initIndex = 0,
  itemId = DEFAULT_ITEM_ID,
  itemScrollParams = {
    isEnabled: true,
  },
  onChangeIndex,
  renderItem,
  ...restProps
}: PageControlsProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(initIndex);
  const elementItemId = itemId || DEFAULT_ITEM_ID;

  const onClick = (index: number) => {
    setActiveIndex(index);

    if (itemScrollParams?.isEnabled) {
      const el = document.getElementById(`${elementItemId}_${index}`);
      const scrollOptions = itemScrollParams?.options || { inline: 'center', behavior: 'smooth' };
      el?.scrollIntoView(scrollOptions);
    }

    onChangeIndex?.(index);
  };

  return (
    <div {...restProps} className={clsx(styles.pageControls, classNames?.container)}>
      {(Array.isArray(data) ? data : []).map((item, index) => {
        return (
          renderItem?.({
            id: `${elementItemId}_${index}`,
            className: clsx(classNames?.item),
            item,
            index,
            activeIndex,
            onClick,
          }) || (
            <Counter
              key={index}
              id={`${elementItemId}_${index}`}
              className={clsx(classNames?.item)}
              size="sm"
              color={index === activeIndex ? 'accent' : 'secondary'}
              onClick={() => onClick(index)}
            />
          )
        );
      })}
    </div>
  );
};
