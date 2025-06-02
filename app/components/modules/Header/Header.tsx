'use client';

import { useUnit } from 'effector-react';
import React, { useEffect, useState } from 'react';
import Logo from '../../elements/Logo';
import Link from 'next/link';
import { Menu } from './Menu';
import {
  $currencyModal,
  openCartPopup,
  toggleCurrencyModal,
  toggleSearchModal,
} from '@/app/context/modals';
import { addOverflowHiddenToBody } from '@/app/lib/utils/common';
import { useLang } from '@/app/hooks/useLang';

import { setLang } from '@/app/context/lang';
import { AllowedLangs } from '@/app/constants/lang';
import Image from 'next/image';
import { Hamburger } from './Hamburger';

import { $location, fetchLocationFx } from '@/app/context/country';
import { CartPopup } from './CartPopup';

export const Header = () => {
  const { lang, translations } = useLang();

  const location = useUnit($location);
  const isCurrencyModal = useUnit($currencyModal);

  useEffect(() => {
    fetchLocationFx();
  }, []);

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  // переключение языка
  const handleSwitchLangToRuEng = () => {
    if (lang == 'ru') {
      handleSwitchLang('en');
    } else {
      handleSwitchLang('ru');
    }
  };
  // const handleSwitchLangToEn = () => handleSwitchLang('en');
  // Модалка открытые поиска
  const handleOpenSearchMenu = () => {
    toggleSearchModal();
    addOverflowHiddenToBody();
  };

  const handleOpenCart = () => {
    openCartPopup();
  };

  // Модалка открытые стран
  const handleOpenCurrencyModal = () => {
    toggleCurrencyModal();
    addOverflowHiddenToBody();
  };
  return (
    <header className="header">
      <div className="header__container">
        {/* <button className="btn-reset header__burger" onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button> */}
        <div className="header__left_items">
          <Hamburger />

          <ul>
            <Link href={'/about'}>
              <li>{translations[lang].header.about_brand}</li>
            </Link>
            <Link href={'/'}>
              <li>{translations[lang].header.collection}</li>
            </Link>
            <Link href={'/contacts'}>
              <li>{translations[lang].header.contacts}</li>
            </Link>
            <Link href={'/'}>
              <li>{translations[lang].header.taoiliring}</li>
            </Link>
          </ul>
        </div>
        <div className="header__logo">
          <Logo />
        </div>

        <Menu />

        <div className="header__right_items">
          {/* <Button>ВСТУПИТЬ В КЛУБ</Button> */}
          <div onClick={handleOpenCurrencyModal} className="currency__container">
            <p>
              {' '}
              {location?.country_name} ({location?.currency.code})
            </p>

            <Image
              className={isCurrencyModal ? 'arrow-rotate' : ''}
              src={'/img/arrow_down.svg'}
              width={10}
              height={6}
              alt="arrow"
            />
          </div>
          <span className="header__lang" onClick={handleSwitchLangToRuEng}>
            {lang}
          </span>
          <div className="header__right_item">
            <Image
              onClick={handleOpenSearchMenu}
              src={'/img/search.svg'}
              width={24}
              height={24}
              alt="search"
            />
            <Image
              onClick={handleOpenCart}
              src={'/img/shopping_bag.svg'}
              width={24}
              height={24}
              alt="bag"
            />
            <CartPopup />
          </div>
        </div>
      </div>
    </header>
  );
};
