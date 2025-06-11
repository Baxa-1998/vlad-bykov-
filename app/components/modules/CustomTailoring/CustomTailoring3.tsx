import React from 'react';
import styles from '@/app/styles/custom/index.module.scss';
import { useLang } from '@/app/hooks/useLang';

export const CustomTailoring3 = () => {
  const {translations, lang} = useLang()
  return (
    <div className={styles.custom3}>
      <div className={styles.customWrapper}>
        <div className={styles.customItem}>
          <h3>{translations[lang].customTailoring.title3}</h3>
          <p>
           {translations[lang].customTailoring.subtitle3}
          </p>
        </div>
        <div className={styles.customItem}>
          <h3>{translations[lang].customTailoring.title4}</h3>
          <p>
        
  {translations[lang].customTailoring.subtitle4}
          </p>
        </div>
        <div className={styles.customItem}>
          <h3>  {translations[lang].customTailoring.title5}</h3>
          <p>
         {translations[lang].customTailoring.subtitle5}
          </p>
        </div>
      </div>
    </div>
  );
};
