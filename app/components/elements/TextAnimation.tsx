'use client';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
      transition={{ delay, duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};