'use client';

import { useUnit } from 'effector-react';
import React from 'react';
import Logo from '../../elements/Logo';
import Link from 'next/link';
import { Menu } from './Menu';
import { $searchModal, openMenu, openSearchModal } from '@/app/context/modals';
import { addOverflowHiddenToBody, handleCloseSearchModal } from '@/app/lib/utils/common';
import { useLang } from '@/app/hooks/useLang';
import CartPopup from './CartPopup';
import { Button } from '../../elements/Button';
import arrowDown from '../../../../public/img/arrow_down.svg';
import { setLang } from '@/app/context/lang';
import { AllowedLangs } from '@/app/constants/lang';
import Image from 'next/image';
import { Hamburger } from './Hamburger';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';

export const Header = () => {
  const { lang, translations } = useLang();
  // переключение языка
  const isMedia800 = useMediaQuery(800);

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem('lang', JSON.stringify(lang));
  };
  console.log(lang);

  const handleSwitchLangToRuEng = () => {
    if (lang == 'ru') {
      handleSwitchLang('en');
    } else {
      handleSwitchLang('ru');
    }
  };
  // const handleSwitchLangToEn = () => handleSwitchLang('en');

  const handleOpenMenu = () => {
    addOverflowHiddenToBody();
    openMenu();
  };

  const handleOpenSearchMenu = () => {
    openSearchModal();
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
            <Link href={'/'}>
              <li>{translations[lang].header.about_brand}</li>
            </Link>
            <Link href={'/'}>
              <li>{translations[lang].header.collection}</li>
            </Link>
            <Link href={'/'}>
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
          <div className="currency__container">
            <p>РОССИЯ (РУБ)</p>
            <Image src={'/img/arrow_down.svg'} width={10} height={6} alt="arrow" />
          </div>
          <span onClick={handleSwitchLangToRuEng}>{lang}</span>
          <div className="header__right_item">
            <Image src={'/img/search.svg'} width={24} height={24} alt="search" />
            <Image src={'/img/shopping_bag.svg'} width={24} height={24} alt="bag" />
          </div>
          {/* <ul>
            <li>fsdasfdas</li>
            <li>fsdasfdas</li>
            <li>fsdasfdas</li>
          </ul> */}
        </div>
        {/* <ul className="header__links list-reset">
          <li className="header__links__item">
            <button
              onClick={handleOpenSearchMenu}
              className="btn-reset header__links__item__btn header__links__item__btn--search"
            />
          </li> 
           <li className="header__links__item">
           Корзина
           </li>
          <li className="header__links__item">
            <Link
              href="/favorites"
              className="header__links__item__btn header__links__item__btn--favorites"></Link>
          </li>
          <li className="header__links__item">
            <Link
              className="header__links__item__btn header__links__item__btn--compare"
              href="/comparison"></Link>
          </li>
          <li className="header__links__item"></li>
          <li className="header__links__item header__links__item--profile">
            <button className="btn-reset header__links__item__btn header__links__item__btn--profile" />
          </li>
        </ul> */}
      </div>
    </header>
  );
};
