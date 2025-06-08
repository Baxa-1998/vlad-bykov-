'use client';
import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
import { Title } from '@/app/components/elements/Title';
import { useLang } from '@/app/hooks/useLang';

export const HistoryBrand = () => {
  const { translations, lang } = useLang();
  return (
    <div className={styles.historyBrand}>
      <div className={styles.historyBrandWrapper}>
        <Title className={styles.historyBrandTitle}>{translations[lang].historyBrand.title}</Title>
        {/* <h1 className={styles.historyBrandTitle}></h1> */}
        <p className={styles.historyBrandSubtitle}>{translations[lang].historyBrand.subtitle} </p>
        <Button className={styles.historyBrandBtn}>{translations[lang].historyBrand.button}</Button>
      </div>
    </div>
  );
};
