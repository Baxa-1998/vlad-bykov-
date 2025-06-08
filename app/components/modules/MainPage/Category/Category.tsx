'use client';
import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';

import { Button } from '@/app/components/elements/Button';
import { useLang } from '@/app/hooks/useLang';
export const Category = () => {
  const { lang, translations } = useLang();
  return (
    <div className={styles.category}>
      <div className={styles.categoryTop}>
        <div className={styles.categoryTopItem}>
          <h3>{translations[lang].catalog.men}</h3>
          <Button className={styles.categoryTopBtn}>{translations[lang].catalog.button}</Button>
        </div>
        <div className={styles.categoryTopItem}>
          <h3>{translations[lang].catalog.girls}</h3>
          <Button className={styles.categoryTopBtn}>{translations[lang].catalog.button}</Button>
        </div>
      </div>
      <div className={styles.categoryBottom}>
        <div className={styles.categoryBottomItem}>
          <h3>{translations[lang].catalog.shoes}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
        </div>
        <div className={styles.categoryBottomItem}>
          <h3>{translations[lang].catalog.top_clothing}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
        </div>
        <div className={styles.categoryBottomItem}>
          <h3>{translations[lang].catalog.cloth}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
        </div>
        <div className={styles.categoryBottomItem}>
          <h3>{translations[lang].catalog.accessories}</h3>
          <Button className={styles.categoryBottomBtn}>{translations[lang].catalog.button}</Button>
        </div>
      </div>
    </div>
  );
};
