import React from 'react';
import styles from '@/app/styles/about/index.module.scss';
import { useLang } from '@/app/hooks/useLang';
const AboutSection = () => {
  const {translations, lang} = useLang();
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionWrapper}>
        <h3>
       {translations[lang].about.title}
        </h3>
      </div>
    </div>
  );
};

export default AboutSection;
