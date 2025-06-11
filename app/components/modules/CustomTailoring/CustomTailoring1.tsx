import React from 'react';
import { Title } from '../../elements/Title';
import styles from '@/app/styles/custom/index.module.scss';
import { Button } from '../../elements/Button';
import { useLang } from '@/app/hooks/useLang';

export const CustomTailoring1 = () => {
  const { translations, lang } = useLang();
  return (
    <div className={styles.custom1}>
      <div className={styles.customWrapper}>
        <Title className={styles.customTitle}>{translations[lang].customTailoring.title}</Title>

        <p className={styles.customSubtitle}>{translations[lang].customTailoring.subtitle1}</p>
        <Button className={styles.customBtn}>{translations[lang].customTailoring.button1}</Button>
      </div>
    </div>
  );
};
