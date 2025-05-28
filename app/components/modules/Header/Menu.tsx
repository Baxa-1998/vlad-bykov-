import React, { useState } from 'react';
import { $menuIsOpen, closeMenu } from '@/app/context/modals';
import { useUnit } from 'effector-react';
import { useLang } from '@/app/hooks/useLang';
import { removeOverflowHiddenFromBody } from '@/app/lib/utils/common';
import { setLang } from '@/app/context/lang';
import { AllowedLangs } from '@/app/constants/lang';
import Logo from '../../elements/Logo';
import { AnimatePresence, motion } from 'framer-motion';
import Accordion from '../Accordion/Accordion';
import { usePathname } from 'next/navigation';
import MenuLinkItem from './MenuLinkItem';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import Link from 'next/link';
import Image from 'next/image';

export const Menu = () => {
  const [showCatalogList, setShowCatalog] = useState(false);
  const pathName = usePathname();

  const isMedia800 = useMediaQuery(800);
  const isMedia400 = useMediaQuery(450);

  const handleShowCatalogList = () => setShowCatalog(true);
  // переключение языка
  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs);
    localStorage.setItem('lang', JSON.stringify(lang));
  };

  const handleSwitchLangToRu = () => handleSwitchLang('ru');
  const handleSwitchLangToEn = () => handleSwitchLang('en');

  const handleCloseMenu = () => {
    removeOverflowHiddenFromBody();
    closeMenu();
  };

  const handleRedirectToCatalog = (path: string) => {
    if (pathName.includes('/catalog')) {
      window.history.pushState({ path }, '', path);
      window.location.reload();
    }
    handleCloseMenu();
  };
  const menuIsOpen = useUnit($menuIsOpen);
  const { lang, translations } = useLang();

  const clothLinks = [
    {
      id: 1,
      text: 'одежда из translations',
      href: '/catalog',
    },
    {
      id: 2,
      text: 'одежда из translations',
      href: '/catalog',
    },
  ];
  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <ul>
        <Link href={'/'}>
          <li>О БРЕНДЕ</li>{' '}
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />
        </Link>
        <Link href={'/'}>
          <li>КОЛЛЕКЦИЯ</li>
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />{' '}
        </Link>
        <Link href={'/'}>
          <li>КОНТАКТЫ</li>
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />
        </Link>
        <Link href={'/'}>
          <li>ИНДИВИДУАЛЬНЫЙ ПОШИВ</li>
          <Image src={'/img/arrow-forward.svg'} width={0} height={0} alt="arrow" />
        </Link>
      </ul>
    </nav>
  );
};
