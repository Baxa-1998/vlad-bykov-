import React from 'react';
import styles from '@/app/styles/about/index.module.scss';
import { Button } from '../../elements/Button';
import { useLang } from '@/app/hooks/useLang';
const AboutSection3 = () => {
  const {translations, lang} = useLang()
  return (
    <div className={styles.aboutSection3}>
      <div className={styles.aboutSectionWrapper3}>
        <h3>
        {translations[lang].about.title3}
        </h3>
        <Button>{translations[lang].about.button}</Button>
      </div>
    </div>
  );
};

export default AboutSection3;
