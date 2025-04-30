import { motion } from 'framer-motion';
import { transition } from '../constants';
import { DefaultDrawerProps, DRAWER_ANCHOR, DrawerAnchor } from '../types';

const initials = {
  top: { y: -500 },
  bottom: { y: 500 },
};

const exits = {
  top: { y: -500 },
  bottom: { y: 500 },
};

type Props = DefaultDrawerProps & {
  className?: string;
  anchor?: DrawerAnchor;
};

export const Animated = ({ children, drawerRef, height, className, anchor = DRAWER_ANCHOR.BOTTOM, onClose }: Props) => {
  const inlineStyles = height ? { height } : {};
  const animate = { y: 0 };
  const initial = anchor ? initials[anchor] : { y: 0 };
  const exit = anchor ? exits[anchor] : { y: 0 };

  return (
    <motion.div
      className={className}
      style={inlineStyles}
      ref={drawerRef}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      onAnimationComplete={definition => {
        if (definition === exit) {
          onClose?.();
        }
      }}
    >
      {children}
    </motion.div>
  );
};
