import { ReactNode, useEffect, useState } from 'react';
import { usePortal } from '../portal';
import { Drawer, DrawerProps } from './ui/Drawer';

type Props = Omit<DrawerProps, 'isVisible' | 'onDrawerClickOutside'>;

export const useDrawerInPortal = (drawerProps?: Props) => {
  const { setPortalContent } = usePortal();
  const [isVisible, setIsVisible] = useState(false);
  const [isClear, setIsClear] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  function handleDrawerClickOutside() {
    setIsVisible(false);
  }

  const closeDrawer = () => {
    drawerProps?.onClose?.();
    setIsClear(true);
  };

  const openDrawer = (newContent: ReactNode) => {
    setIsClear(false);
    setIsVisible(true);
    setContent(newContent);
  };

  useEffect(() => {
    if (!isClear) {
      setPortalContent(
        <Drawer
          {...drawerProps}
          isVisible={isVisible}
          onDrawerClickOutside={handleDrawerClickOutside}
          onClose={closeDrawer}
        >
          {content}
        </Drawer>
      );
    } else {
      setPortalContent(null);
    }
  }, [isVisible, isClear, content, setPortalContent]);

  return { openDrawer, closeDrawer: handleDrawerClickOutside };
};
