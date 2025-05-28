import { useLang } from '@/app/hooks/useLang';
import Link from 'next/link';
import React from 'react';

export const MobileNavbar = () => {
  const { lang, translations } = useLang();
  return (
    <div className="mobile-navbar">
      <Link href="/" className="mobile-navbar__btn">
        {translations[lang].breadcrumbs.main}
      </Link>
      <button className="btn-reset mobile-navbar__btn">
        {translations[lang].breadcrumbs.catalog}
      </button>
      <Link className="btn-reset mobile-navbar__btn" href="/favorites">
        <span className="not-empty not-empty-mobile-favorite" />

        {translations[lang].breadcrumbs.favorites}
      </Link>
      <Link className="btn-reset mobile-navbar__btn" href="/cart">
        <span className="not-empty not-empty-mobile" />
        {translations[lang].breadcrumbs.cart}
      </Link>
      <button className="btn-reset mobile-navbar__btn">{translations[lang].common.more}</button>
    </div>
  );
};
