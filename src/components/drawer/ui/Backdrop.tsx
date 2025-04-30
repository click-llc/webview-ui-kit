import { motion } from 'framer-motion';
import { transition } from '../constants';

import styles from './drawer.module.scss';

type Props = {
  onClick?: () => void;
};

export const Backdrop = ({ onClick }: Props) => {
  const props = {
    className: styles.backdrop,
    role: 'presentation',
    'aria-hidden': true,
    onMouseDown: onClick,
  };

  return (
    <motion.div
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    />
  );
};
