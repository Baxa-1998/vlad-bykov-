import React from 'react';
import { Title } from '../../elements/Title';
import styles from '@/app/styles/custom/index.module.scss';
import { Button } from '../../elements/Button';
import { useLang } from '@/app/hooks/useLang';
export const CustomTailoring2 = () => {
    const { translations, lang } = useLang();
  return (
    <div className={styles.custom2}>
      <div className={styles.customWrapper}>
        <Title className={styles.customTitle}>{translations[lang].customTailoring.title2}</Title>

        <p className={styles.customSubtitle}>
          {translations[lang].customTailoring.subtitle2}
        </p>
        <Button className={styles.customBtn}>{translations[lang].customTailoring.button2}</Button>
      </div>
    </div>
  );
};
