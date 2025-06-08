import React from 'react';
import styles from '@/app/styles/about/index.module.scss';
import { useLang } from '@/app/hooks/useLang';
const AboutSection2 = () => { 
  const {translations, lang} = useLang()
  return (
    <div className={styles.aboutSection2}>
      <div className={styles.aboutSectionWrapper2}>
        <h3>
     {translations[lang].about.title2}
        </h3>
      </div>
    </div>
  );
};

export default AboutSection2;
