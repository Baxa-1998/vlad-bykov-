'use client';
import React, { useEffect } from 'react';
import { $currencyModal, $menuIsOpen, closeMenu, toggleCurrencyModal } from '@/app/context/modals';
import { useUnit } from 'effector-react';

import Link from 'next/link';
import Image from 'next/image';
import { addOverflowHiddenToBody } from '@/app/lib/utils/common';
import { setLang } from '@/app/context/lang';
import { AllowedLangs } from '@/app/constants/lang';
import { $location, fetchLocationFx } from '@/app/context/country';
import { useLang } from '@/app/hooks/useLang';
import { useTransitionRouter } from 'next-view-transitions';
import { slideInOut } from '@/app/lib/utils/animations';

export const Menu = () => {
  const handleOpenCurrencyModal = () => {
    toggleCurrencyModal();
    addOverflowHiddenToBody();
  };
  const { lang, translations } = useLang();
  const router = useTransitionRouter();

  const location = useUnit($location);
  const isCurrencyModal = useUnit($currencyModal);
  const handleClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    closeMenu();

    // Запускаем анимацию

    // Переход через 400 мс
    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 400);
  };
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

  const menuIsOpen = useUnit($menuIsOpen);
  // const { lang, translations } = useLang();

  // const clothLinks = [
  //   {
  //     id: 1,
  //     text: 'одежда из translations',
  //     href: '/catalog',
  //   },
  //   {
  //     id: 2,
  //     text: 'одежда из translations',
  //     href: '/catalog',
  //   },
  // ];
  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <ul>
        <Link onClick={(e) => handleClick(e, '/about')} href={'/about'}>
          <li>{translations[lang].header.about_brand}</li>{' '}
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />
        </Link>
        <Link onClick={(e) => handleClick(e, '/catalog')} href={'/catalog'}>
          <li>{translations[lang].header.collection}</li>
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />{' '}
        </Link>
        <Link onClick={(e) => handleClick(e, '/contacts')} href={'/contacts'}>
          <li>{translations[lang].header.contacts}</li>
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />
        </Link>
        <Link onClick={(e) => handleClick(e, '/custom')} href={'/custom'}>
          <li>{translations[lang].header.taoiliring}</li>
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />
        </Link>
      </ul>

      <div className="menu__currency">
        <div onClick={handleOpenCurrencyModal} className="menu__container">
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
        <span className="menu__lang" onClick={handleSwitchLangToRuEng}>
          {lang}
        </span>
      </div>
    </nav>
  );
};
