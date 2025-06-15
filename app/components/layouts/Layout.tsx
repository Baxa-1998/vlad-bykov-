'use client';
import React, { useEffect } from 'react';
import { Header } from '../modules/Header/Header';

import { AnimatePresence, motion } from 'framer-motion';
import { SearchModal } from '../modules/Header/SearchModal';
import { useGate, useUnit } from 'effector-react';
import { $currencyModal, $searchModal } from '@/app/context/modals';
import {
  addScrollToBody,
  handleCloseSearchModal,
  removeScrollToBody,
} from '@/app/lib/utils/common';
import Footer from '../modules/Footer/Footer';
import { CurrencyModal } from '../modules/Header/CurrencyModal';

import { usePathname } from 'next/navigation';
import { MainPageGate } from '@/app/context/goods';
import '@/app/context/cart'; 

import { $cart  } from '@/app/context/cart';
import { initLocation } from '@/app/context/country';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const searchModal = useUnit($searchModal);
  const currencyModal = useUnit($currencyModal);
    const pathname = usePathname();
 const isCatalogItemPage = pathname.startsWith('/catalog/') && pathname.split('/').length === 3;
 const isCategoryPage = pathname.startsWith('/category/') && pathname.split('/').length === 3;

  useGate(MainPageGate);

   useEffect(() => {
    initLocation();
  }, []);

  useEffect(() => {
    if (
      pathname === '/contacts' ||
      pathname === '/payment' ||
      pathname === '/policy' ||
      pathname === '/delivery' ||
      pathname === '/order' ||
      pathname === '/cancellation' ||
      pathname === '/catalog' ||
      isCatalogItemPage || isCategoryPage
    ) {
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
