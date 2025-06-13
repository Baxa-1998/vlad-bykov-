'use client';
import React from 'react';
import styles from '@/app/styles/main-page/index.module.scss';
import Image from 'next/image';
import { useLang } from '@/app/hooks/useLang';
import partners1 from '@/public/img/partners1.webp';
import partners2 from '@/public/img/partners2.webp';
import partners3 from '@/public/img/partners3.webp';
export const Partners = () => {
  const { lang, translations } = useLang();
  return (
    <div className={styles.partners}>
      <div className={styles.partners__wrapper}>
        <div className={styles.partners__inner}>
          <h2 className={styles.partners__title}>{translations[lang].partners.title}</h2>
          <p className={styles.partners__subtitle}>{translations[lang].partners.subtitle}</p>
        </div>
        <div className={styles.partners__items}>
          <Image width={245} height={64} src={partners3} alt="partners" />
          <Image width={326} height={48} src={partners2} alt="partners" />
          <Image width={240} height={64} src={partners1} alt="partners" />
        </div>
      </div>
    </div>
  );
};
