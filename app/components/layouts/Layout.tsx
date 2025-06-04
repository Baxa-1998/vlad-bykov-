'use client';
import React, { useEffect } from 'react';
import { Header } from '../modules/Header/Header';

import { AnimatePresence, motion } from 'framer-motion';
import { SearchModal } from '../modules/Header/SearchModal';
import { useUnit } from 'effector-react';
import { $currencyModal, $searchModal } from '@/app/context/modals';
import {
  addScrollToBody,
  handleCloseSearchModal,
  removeScrollToBody,
} from '@/app/lib/utils/common';
import Footer from '../modules/Footer/Footer';
import { CurrencyModal } from '../modules/Header/CurrencyModal';

import { usePathname } from 'next/navigation';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const searchModal = useUnit($searchModal);
  const currencyModal = useUnit($currencyModal);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/contacts' || pathname === '/payment') {
      addScrollToBody();
    } else {
      removeScrollToBody();
    }
  }, [pathname]);

  return (
    <div className="container">
      <Header />

      {children}

      <AnimatePresence>
        {searchModal && (
          <motion.div
            initial={{ opacity: 0, zIndex: 3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <SearchModal />
          </motion.div>
        )}
      </AnimatePresence>
      {currencyModal && <CurrencyModal />}

      <div
        className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
        onClick={handleCloseSearchModal}></div>
      <Footer />
    </div>
  );
};
