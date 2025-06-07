'use client';
import { IAccordionProps } from '@/app/types/modules';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

const Accordion = ({ children, title, rotateIconClass }: IAccordionProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => setExpanded(!expanded);

  return (
    <>
      <motion.button
        initial={false}
        onClick={toggleAccordion}
        className={`accordion ${rotateIconClass ? (expanded ? rotateIconClass : '') : ''}`}>
        {title}
        <Image
          className={`rotation_icon ${expanded ? 'rotation-active' : ''}`}
          src={'/img/chevron_forward.svg'}
          width={10}
          height={10}
          alt={'forward'}
        />
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              style={{ overflow: 'hidden' }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default Accordion;
