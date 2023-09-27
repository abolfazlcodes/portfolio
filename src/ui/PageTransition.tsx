import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children?: React.ReactNode;
}

function PageTransition({ children }: PageTransitionProps) {
  const variants = {
    hidden: { opacity: 0, x: '-200px', y: '0' },
    enter: { opacity: 1, x: '0', y: '0' },
    exit: { opacity: 0, x: '0', y: '-100px' },
  };
  const transition = { duration: 0.4, ease: 'easeInOut' };

  return (
    <motion.div
      data-testid='element-transition'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={transition}
      className='h-full'
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
