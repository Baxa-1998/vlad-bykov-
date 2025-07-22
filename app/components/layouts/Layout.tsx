'use client';
import React, { useEffect, useState } from 'react';
import { Header } from '../modules/Header/Header';

import { AnimatePresence, motion } from 'framer-motion';
import { SearchModal } from '../modules/Header/SearchModal';
import { useGate, useUnit } from 'effector-react';
import { $searchModal } from '@/app/context/modals';
import {

  handleCloseSearchModal,

} from '@/app/lib/utils/common';
import Footer from '../modules/Footer/Footer';


import { MainPageGate } from '@/app/context/goods';
import '@/app/context/cart';
import { initLocation } from '@/app/context/country';
import { Preloader } from '../elements/Preloader';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const searchModal = useUnit($searchModal);
  const [isLoading, setIsLoading] = useState(true);



  // const isCatalogItemPage = pathname.startsWith('/catalog/') && pathname.split('/').length === 3;
  // const isCategoryPage = pathname.startsWith('/category/') && pathname.split('/').length === 3;

  useGate(MainPageGate);
  useEffect(() => {
    initLocation(); // запускаем автоопределение страны
  }, []);

  // useEffect(() => {
  //   if (
  //     pathname === '/contacts' ||
  //     pathname === '/payment' ||
  //     pathname === '/policy' ||
  //     pathname === '/delivery' ||
  //     pathname === '/order' ||
  //     pathname === '/cancellation' ||
  //     pathname === '/catalog' ||
  //     isCatalogItemPage ||
  //     isCategoryPage
  //   ) {
  //     addScrollToBody();
  //   } else {
  //     removeScrollToBody();
  //   }
  // }, [pathname]);

  // useEffect(() => {
  //   if (
  //     pathname === '/catalog' ||
  //     pathname === '/contacts' ||
  //     pathname === '/order' ||
  //     pathname === '/delivery' ||
  //     pathname === '/cancellation' ||
  //     pathname === '/faq' ||
  //     pathname === '/payment' ||
  //     pathname === '/policy' ||
  //     isCatalogItemPage ||
  //     isCategoryPage
  //   ) {
  //     showFooter();
  //   }
  // }, [pathname]);

  useEffect(() => {
    // Сработает после полной загрузки страницы (всех ресурсов)
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      // если уже загружено
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {isLoading && <Preloader isHidden={!isLoading} />}
      <div style={{ display: isLoading ? 'none' : 'block' }} className="container">
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
        {/* {currencyModal && <CurrencyModal />} */}

        <div
          className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
          onClick={handleCloseSearchModal}></div>
  <Footer />

        {/* <Footer /> */}
      </div>
    </>
  );
};
